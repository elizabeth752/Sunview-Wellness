import type { APIRoute } from 'astro';
import { getSecret } from 'astro:env/server';

// Server-side proxy to CallTrackingMetrics FormReactor. Credentials live in env vars only
// (CTM_FORMREACTOR_ENDPOINT / CTM_FORMREACTOR_KEY), never in the browser bundle.
// CTM rejects the whole lead when a required custom field arrives blank, so optional
// fields are backfilled here instead of being left empty.
export const prerender = false;

// Paid-attribution keys forwarded to CTM (Claude-Code-Tracking-Form-Phone.md, 2026-09-22).
const ATTR_KEYS = ['gclid', 'campaign_id', 'adgroup_id', 'creative_id'];

// Referral variant (/for-professionals/, LeadForm variant="referral"): allowed "patient's current level of care".
const LEVELS = ['Detox', 'Residential', 'Hospital', 'Outpatient', 'Other'];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX = 8;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_MAX;
}

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
  });

const str = (v: unknown, max = 200) => (typeof v === 'string' ? v.trim().slice(0, max) : '');

// The form sends the country code separately from the national number.
function toE164(cc: string, raw: string): string {
  let d = raw.replace(/\D/g, '');
  if (cc === '1' && d.length === 11 && d.startsWith('1')) d = d.slice(1);
  return d ? `+${cc}${d}` : '';
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || clientAddress || 'unknown';
  if (rateLimited(ip)) return json(429, { ok: false, error: 'Too many requests. Please wait a few minutes.' });

  // The form posts FormData (per the tracking spec); JSON is still accepted.
  let raw: Record<string, unknown>;
  try {
    if ((request.headers.get('content-type') || '').includes('application/json')) {
      raw = (await request.json()) as Record<string, unknown>;
    } else {
      const fd = await request.formData();
      const attribution: Record<string, string> = {};
      raw = {};
      for (const [k, v] of fd.entries()) {
        if (typeof v !== 'string') continue;
        const m = k.match(/^attribution\[(\w+)\]$/);
        if (m) attribution[m[1]] = v;
        else raw[k] = v;
      }
      raw.attribution = attribution;
      raw.consent = raw.consent === 'true';
    }
  } catch {
    return json(400, { ok: false, error: 'We couldn’t read that submission.' });
  }

  // Honeypot: pretend success, send nothing.
  if (str(raw.hp_field)) return json(200, { ok: true });

  const referral = str(raw.form_variant, 20) === 'referral';
  const name = str(raw.name, 80);
  const phone = str(raw.phone, 30);
  const cc = /^\d{1,3}$/.test(str(raw.country_code, 3)) ? str(raw.country_code, 3) : '1';
  const carrier = str(raw.insurance_carrier, 60);
  const policy = str(raw.policy_id, 40);
  const organization = str(raw.organization, 100);
  const email = str(raw.email, 120);
  const level = str(raw.level_of_care, 20);
  const notes = str(raw.message, 1000);

  if (name.length < 2) return json(400, { ok: false, error: 'Please enter your full name.' });
  if (/[^\d+\s().-]/.test(phone)) return json(400, { ok: false, error: 'Please enter a valid phone number.' });
  const digits = phone.replace(/\D/g, '');
  if ((cc === '1' ? digits.length < 10 : digits.length < 6) || digits.length > 15) return json(400, { ok: false, error: 'Please enter a valid phone number.' });
  if (referral) {
    if (organization.length < 2) return json(400, { ok: false, error: 'Please enter your organization.' });
    if (!EMAIL_RE.test(email)) return json(400, { ok: false, error: 'Please enter a valid email address.' });
    if (!LEVELS.includes(level)) return json(400, { ok: false, error: 'Please choose the patient’s current level of care.' });
  }
  if (raw.consent !== true) return json(400, { ok: false, error: 'Consent is required to request a callback.' });

  // Read at runtime (never inlined into the build): .env locally, Vercel env vars in production.
  const endpoint = getSecret('CTM_FORMREACTOR_ENDPOINT');
  const key = getSecret('CTM_FORMREACTOR_KEY');
  if (!endpoint || !key) {
    console.error('[lead] CTM_FORMREACTOR_ENDPOINT / CTM_FORMREACTOR_KEY not set');
    return json(503, { ok: false, error: 'This form is temporarily unavailable.' });
  }

  // Field names match the Sunview FormReactor exactly. CTM drops unknown keys and rejects a lead
  // when a required custom field is blank, so only these are sent.
  const params = new URLSearchParams();
  params.set('phone_number', toE164(cc, phone));
  params.set('caller_name', name);
  if (referral) {
    // [Oriana to map fields] Referral leads use the same FormReactor. Until Oriana confirms the mapping:
    // - email: FormReactor's standard email field.
    // - custom_fields[referral_source]: "Professional referral: <level of care>", so the lead is marked as a
    //   referral and carries the patient's current level of care (Detox / Residential / Hospital / Outpatient / Other).
    // - custom_fields[organization]: the referring organization.
    // - custom_fields[referral_notes]: the Notes box (only when filled; CTM drops unknown keys).
    // - The coverage form's two custom fields are backfilled with "N/A (professional referral)" because the
    //   reactor may mark them required and CTM rejects a lead with a blank required custom field. Drop the
    //   backfill once those fields are optional on the reactor, or if referrals get their own reactor.
    params.set('email', email);
    params.set('custom_fields[referral_source]', `Professional referral: ${level}`);
    params.set('custom_fields[organization]', organization);
    if (notes) params.set('custom_fields[referral_notes]', notes);
    params.set('custom_fields[membership_policy_id]', 'N/A (professional referral)');
    params.set('custom_fields[insurance_carrier]', 'N/A (professional referral)');
  } else {
    // Both are optional on the form; backfill blanks because CTM rejects a lead with a blank required custom field.
    params.set('custom_fields[membership_policy_id]', policy || 'Not provided');
    params.set('custom_fields[insurance_carrier]', carrier || 'Not provided');
  }
  const sid = str(raw.visitor_sid, 120);
  if (sid) params.set('visitor_sid', sid); // ties the lead to the visitor's CTM session / tracking number
  const attr = (raw.attribution && typeof raw.attribution === 'object' ? raw.attribution : {}) as Record<string, unknown>;
  for (const k of ATTR_KEYS) {
    const v = str(attr[k]);
    if (v) params.set(`paid_attribution[${k}]`, v);
  }

  const url = `${endpoint.replace(/\?.*$/, '')}?key=${encodeURIComponent(key)}`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      body: params,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      signal: AbortSignal.timeout(8000),
    });
    const text = await res.text();
    // FormReactor can answer 200 with {"status":"error"}; treat that as a failure.
    let status = '';
    try { status = String((JSON.parse(text) as { status?: unknown }).status ?? ''); } catch {}
    if (!res.ok || status === 'error') {
      console.error('[lead] CTM rejected lead', res.status, text.slice(0, 300));
      return json(502, { ok: false, error: 'We couldn’t send your request.' });
    }
  } catch (err) {
    console.error('[lead] CTM request failed', (err as Error).message);
    return json(502, { ok: false, error: 'We couldn’t send your request.' });
  }

  return json(200, { ok: true });
};

export const GET: APIRoute = () =>
  new Response('Method not allowed.', { status: 405, headers: { Allow: 'POST' } });
