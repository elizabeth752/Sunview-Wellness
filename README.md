# Sunview Wellness — sunviewwellness.com

Astro 7 + Tailwind v4 rebuild of the Sunview Wellness WordPress site (outpatient PHP / IOP / OP, West Palm Beach, FL).
Static pages, plus one Vercel function (`/api/lead/`) that proxies leads to CallTrackingMetrics.

```bash
npm install
cp .env.example .env   # add CTM FormReactor credentials (server-only)
npm run dev            # http://localhost:4321
npm run build
```

Requires Node ≥ 22.12.

## Where things live

| What | Where |
| --- | --- |
| NAP, programs, team, insurance, conditions | `src/data/site.js` (single source of truth) |
| Media & podcast posts | `src/data/posts.js` → `/media/<slug>/` |
| Brand tokens (teal `#126E6E`, sun `#F5C518`, Playfair Display + Nunito) | `src/styles/global.css` |
| SEO, GTM, CTM script, JSON-LD | `src/layouts/Base.astro` |
| Lead form / API | `src/components/LeadForm.astro`, `src/pages/api/lead.ts` |
| 301 redirects from old WordPress URLs | `vercel.json` |

## Project docs (source of truth)

| Doc | Path |
| --- | --- |
| Brand book and design tokens | `docs/brand/Sunview-Wellness-Brand-Book.md` (visual version: `docs/brand/Sunview-Wellness-Brand-Book.dc.html`) |
| Content build prompt: phase 1 sitemap, SEO rules, header/footer spec | `docs/content/Sunview-Content-Build-Prompt.md` |
| **Final sitemap (source of truth for URLs, 2026-09-22)**: 49 URLs (commercial, legal, templates) | `docs/content/sunview-final-sitemap.xlsx` |

Client source material (wiki, questionnaire, GSC/Semrush exports) lives outside the repo in `~/Downloads/SunView/`.

## Content sources

- Live site (Sept 2026): every URL in the WordPress sitemap is preserved with the **same slug**.
- *Questionnaire for Website Content: Responses* (Clinical Director): new `/our-approach/` and `/admissions/` pages, plus schedules, medication/MAT policy, family involvement and outcome measures.
- Client Wiki: brand colors, fonts, logo usage. Most of the wiki (USPs, insurance matrix, locations, amenities) is still blank.

Scope rules from the questionnaire. Don't advertise these:
- **No formal EMDR** (the lead therapist is EMDR-*trained* only) and **no art therapy** (no certified art therapist).
- **Methadone:** generally not admitted. MAT is managed by outside providers, not Telemed Clinix.

## Tracking (per `Claude-Code-Tracking-Form-Phone.md`, 2026-09-22)

- **GTM `GTM-NCTDLZMC`** is the only tag in the page: the official snippet first in `<head>` (`src/layouts/Base.astro`), noscript right after `<body>`. CallTrackingMetrics' number-swap script (account 362771) is already inside that container, so it isn't hard-coded.
- **Phone**: one source, `SITE.phone` / `SITE.phoneHref` in `src/data/site.js` = CTM target number (SEO) (561) 269-3175 / `tel:5612693175`. Never type a number into a page. Don't use (561) 710-2000, 830-3353 or 786-1913; CTM swaps the displayed number per visitor (DNI), which is expected.
- **Form**: one shared component (`src/components/LeadForm.astro`) posts `FormData` to `/api/lead/` (Astro's equivalent of the spec's `/wp-json/sunview/v1/lead`). The server forwards `phone_number`, `caller_name`, `custom_fields[membership_policy_id]`, `custom_fields[insurance_carrier]`, `visitor_sid` and `paid_attribution[gclid|campaign_id|adgroup_id|creative_id]` (gclid from the URL or the `_gcl_aw` cookie). Honeypot submissions are dropped without calling CTM. Success shows an inline confirmation and pushes `dataLayer.push({ event: 'lead_form_submit' })`; errors show the phone number.
- **Secrets**: `CTM_FORMREACTOR_ENDPOINT` / `CTM_FORMREACTOR_KEY` live in `.env` (gitignored) locally and in Vercel env vars in production, read at runtime with `astro:env`'s `getSecret`. They never reach HTML, JS or the build output.

## Launch blockers / open items

1. **CTM FormReactor**: reactor and key received 2026-09-22 and stored in `.env` (server-only, gitignored). Set the same `CTM_FORMREACTOR_ENDPOINT` + `CTM_FORMREACTOR_KEY` as server env vars in Vercel. The API sends only the reactor's fields: `phone_number`, `caller_name`, `custom_fields[membership_policy_id]`, `custom_fields[insurance_carrier]`, `visitor_sid`, `paid_attribution[gclid|campaign_id|adgroup_id|creative_id|form_id]`. Confirm a test lead is **accepted** in CTM (not just that /thank-you/ loads).
2. **Privacy policy needs legal review.** It was copied verbatim from the live site, which cites the "UHS Compliance Hotline", hospital procedures and a 2013 effective date, and has no website/cookie section.
3. **Photos**: there are no real facility or team photos yet. Team cards show initials, and pages use brand graphics. Add photos to `public/images/` when the client sends them.
4. **Insurance list**: logos match the live site. The wiki's in-network/PPO matrix is still empty, so confirm the list with billing.
5. Hours of operation for calls/admissions (not just program hours) aren't documented anywhere.
6. Third-party claims deliberately left out: "130-day average stay" and "scholarships" (from a podcast description). Add them only with client sign-off.
7. **Frank Galimidi headshot** for the reviewed-by block on the program pages. It shows initials until `REVIEWER.photo` is set in `src/data/site.js`.
8. **`/our-team/frank-galimidi/`** (the reviewed-by link) doesn't exist yet. It comes from the `/our-team/{first-last}/` template.
9. **`vercel.json` legacy redirects `/our-team/` → `/about-us/` and `/about/` → `/about-us/`** conflict with the final sitemap, where both are pages. Remove them before launch.
10. **Program meta titles and descriptions** are the brief's text verbatim and run long (titles 61–69 characters, descriptions up to 172), but the updated content prompt says titles ≤60 and descriptions ≤155. Confirm which rule wins before launch.
11. **Length-of-stay figures**: none are published, pending the client's confirmation (see `docs/content/programs-sources.md`).
12. **Seal URLs** `{{SEAL_URL_*}}` are still placeholders.
