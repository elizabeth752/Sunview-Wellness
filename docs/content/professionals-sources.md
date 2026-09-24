# For Professionals: `/for-professionals/`, sources and notes

Brief: `Professionals-Location-Content-Briefs.md` §A (2026-09-23). Page: `src/pages/for-professionals.astro`.

Source keys:
- **Q#** = Clinical Director questionnaire
- **LIVE /path/** = sunviewwellness.com as of 2026-09-22; **LIVE ABOUT** = `docs/content/live-about-us-2026-09-23.txt`
- **SITE** = facts already established in `src/data/site.js` and the admissions/programs source notes
- **BRIEF** = wording taken from the brief itself

The Client Wiki copy we have is blank, so no claim rests on it. Items the brief attributes to the Wiki (free transportation, schedules) reuse what the admissions and program pages already document (Q7, LIVE /).

Rotation: Insurance + Map (brief). No reviews, no reviewed-by byline. On mobile the referral form moves from the hero to just before the CTA, as on every other form page.

## Sentence-to-source map

| Section | Claim | Source |
| --- | --- | --- |
| Meta | Title, description, keywords, H1, subheading | BRIEF; meta now says "Fast response" (answer 4.1, 2026-09-24) |
| Meta | Joint Commission accredited | SITE (Home, trust strip) |
| Hero | Most people come from a higher level of care | Q6 |
| Hero | Clinical Director reviews each pre-screening and recommends PHP, IOP or OP | Q4 |
| Hero | Free benefits check | LIVE /faq/, /get-help-now/ |
| Good fit | Adults 18+ | LIVE / |
| Good fit | Medically and psychiatrically stable enough to take part safely and meaningfully | Q3 |
| Good fit | Stepping down from detox, residential or another higher level of care, or from the community | Q6 |
| Good fit | Substance use plus co-occurring mental health conditions, treated together | Q16, Q17 |
| Good fit | Abstinence-based, not medication-free; naltrexone and buprenorphine/Suboxone when prescribed and managed by a qualified provider | Q3 |
| Good fit | Motivated to make real changes, not only to stop using | Q5 |
| Good fit | Marijuana, stimulants, opioids and benzodiazepines not permitted during programming | Q3 |
| Different level first | Identified during pre-screening/assessment and referred to a more appropriate level of care | Q5, Q3 |
| Different level first | Withdrawal risk (consistent, extended benzodiazepine/opioid use) → detox and residential first | Q3, Q5 |
| Different level first | Medical stabilization or round-the-clock monitoring → higher level first | Q3 ("higher level of monitoring"); BRIEF ("24-hour care needs"); wording matches `/admissions/` ("round-the-clock care") |
| Different level first | Methadone maintenance generally not admitted; detox and stabilization first | Q2, Q3 |
| Different level first | Eating disorder or gambling/sex and love addiction as primary issue → specialized program | Q19 |
| Different level first | Worsening psychiatric symptoms, disorientation, imminent risk of harm → more appropriate level | Q19 |
| Different level first | Long-acting injectables: administration and monitoring through an outside provider | Q1, Q2, Q3 |
| Levels of care | PHP Mon–Fri 9–1; Day IOP 3 days/week set around the patient's schedule, 9–1; Evening IOP Mon/Wed/Thu 6–9 | Q7 |
| Levels of care | OP one weekday 9–1 | LIVE / (as in `ProgramSchedule.astro`) |
| Levels of care | Weekly hours (20 / 12 / 9 / 4) | Arithmetic from the schedules; matches `PROGRAMS` in SITE |
| Levels of care | "Typical fit" column | Condensed from `PROGRAMS[].bestFor` in SITE |
| Levels of care | Patients go home every night | SITE (Home meta) |
| Levels of care | Free transportation to and from our center, through Uber Health, for patients who can't drive | Q7; Wiki Transportation Assistance Policy; answer 6.1 |
| Levels of care | Telemed Clinix psychiatry during treatment and after discharge | Q1, Q21 |
| Process 1 | Form or call admissions | BRIEF |
| Process 2 | Pre-screening contents (reasons, history, living situation, previous treatment, symptoms) | Q4 |
| Process 2 | Clinical Director review, ASAM criteria + clinical judgment | Q4 |
| Process 2 | "the same day" | BRIEF only, flagged `[SOURCE?]` on the page |
| Process 3 | Free verification: in-network status, covered level of care, pre-authorization | LIVE /faq/; Admissions brief §B (same wording as `/admissions/insurance/`) |
| Process 4 | Often enrolled within 24 hours | LIVE / |
| Process 4 | "With the patient's consent, you receive confirmation of admission" | BRIEF, flagged `[SOURCE?]` on the page ("to confirm what feedback is shared, with consent") |
| Clinical model | Looks beneath the presenting symptom (relationships, family patterns, past experiences) while building recovery skills; evidence-based shared foundation | Q10, Q11, Q15 |
| Clinical model | IFS, CBT, DBT, trauma-informed | Q9, Q10, Q18 |
| Clinical model | Gender-specific groups every other Thursday | Q12 |
| Clinical model | One continuous group 9–1 with breaks, same facilitator | Q7 |
| Clinical model | Weekly individual session, 45–60 min, extra sessions when clinically needed | Q7 |
| Clinical model | Telemed Clinix, virtual from a private office on site, same provider after discharge | Q1, Q7, Q21 |
| Clinical model | Suboxone, Vivitrol, naltrexone via outside prescriber; continuity with current prescriber or referral | Q1, Q2 |
| Clinical model | First family contact in week one, with consent | Q13 |
| Clinical model | BAM, PHQ-9, GAD-7; monthly treatment plan reviews | Q22 |
| Insurance | Commercial plans first, then Florida Medicaid plans (shared marquee order) | `INSURANCE` in SITE; admissions-sources-main-insurance.md |
| Leadership | Scott Belovicz, Director of Business Development | BRIEF (Wiki title wins over the live "Director of Clinical Outreach", as in `src/data/team.js`) |
| Leadership | Scott: 14+ years across private and nonprofit sectors | LIVE ABOUT |
| Leadership | Dana Martin, Clinical Director, Ph.D., LMFT, MCAP, QS; Ph.D. and MS from Nova Southeastern | LIVE ABOUT |
| Leadership | Dana reviews every pre-screening to recommend the level of care | Q4 |
| Map | Address, hours grid, free transportation, English and Spanish | Shared `MapSection` (SITE, Q7) |
| FAQ 1 | Form or call; Clinical Director review; often enrolled within 24 hours | Q4; LIVE / |
| FAQ 2 | Suboxone/naltrexone supported via outside prescriber; Telemed Clinix doesn't prescribe MAT; referral to a prescriber; methadone generally not admitted | Q1, Q2, Q3 |
| FAQ 3 | Medicaid plans (Sunshine Health, AmeriHealth Caritas Florida, Molina Healthcare, Community Care Plan) plus commercial; free benefits check | `INSURANCE` in SITE; LIVE /faq/ |
| FAQ 4 | Start in IOP directly when it fits; from a higher level or the community; Clinical Director recommends from the pre-screening | Q4, Q6 |
| FAQ 5 | What can be shared depends on the patient's releases of information | Q13 (releases of information); flagged `[SOURCE?]` on the page |
| CTA | Free benefits check; free transportation for patients who can't drive | LIVE /faq/; Q7 |

## Referral form (LeadForm `variant="referral"`)

Fields (no placeholders): Your name* · Organization* · Phone* · Email* · Patient's current level of care* (Detox / Residential / Hospital / Outpatient / Other) · Notes (optional). Button `Send referral`. Under the form: `Or call admissions directly at {SITE.phone}` (linked `SITE.phoneHref`), then the Privacy Policy line. No insurance fields, no SMS consent. Honeypot, minimum fill time, gclid/attribution capture, `visitor_sid` and error handling are shared with the coverage form.

Browser → `/api/lead/` (FormData): `form_variant=referral`, `name`, `country_code=1`, `phone`, `organization`, `email`, `level_of_care`, `message` (notes), `consent=true`, `hp_field`, `visitor_sid`, `page`, `attribution[gclid|campaign_id|adgroup_id|creative_id]`.

Server → CTM FormReactor (same endpoint and key as the coverage form) `[Oriana to map fields]`:

| CTM key | Value |
| --- | --- |
| `phone_number` | E.164, e.g. `+15615550100` |
| `caller_name` | Your name |
| `email` | Email |
| `custom_fields[referral_source]` | `Professional referral: <level of care>` |
| `custom_fields[organization]` | Organization |
| `custom_fields[referral_notes]` | Notes (only when filled) |
| `custom_fields[membership_policy_id]` | `N/A (professional referral)` (backfill, see open question 4) |
| `custom_fields[insurance_carrier]` | `N/A (professional referral)` (backfill) |
| `visitor_sid` | CTM session, when present |
| `paid_attribution[gclid|campaign_id|adgroup_id|creative_id]` | When present |

dataLayer on success: `{ event: 'lead_form_submit', form_id: 'for-professionals-hero' | 'for-professionals-mobile', form_variant: 'referral' }`. The coverage form still pushes exactly `{ event: 'lead_form_submit', form_id }`.

Coverage form check: after the change, the built `<form>` HTML on `/`, `/admissions/`, `/admissions/faq/`, `/programs/php/` and `/admissions/insurance/aetna/` is byte-identical to the build before it. The coverage branch of the script and the API sends the same fields in the same order, with the same validation and messages.

## Deviations and open questions

1. **"Same-day".** Q4 describes the pre-screening and the Clinical Director's review but gives no timing. The brief's "same-day pre-screening review" is on the page with a visible `[SOURCE?]` flag. The meta description keeps the brief's "Same-day response" (a flag can't be shown in a meta tag), and FAQ 1 answers without "same-day" (it uses the sourced "often enrolled within 24 hours"). Confirm with the client, or drop "same-day" from the meta and step 2.
2. **Feedback to referrers.** Step 4 ("you receive confirmation of admission") and FAQ 5 carry visible `[SOURCE?]` flags. Confirm what referral partners receive, how and under which releases. The FAQPage schema text omits the flag.
3. **Scott's title.** The brief (and `team.js`) say Director of Business Development; the live site says Director of Clinical Outreach. The page follows the brief.
4. **CTM mapping `[Oriana to map fields]`.** Confirm with Oriana: (a) whether `email`, `custom_fields[referral_source]`, `custom_fields[organization]` and `custom_fields[referral_notes]` exist on the Sunview FormReactor (CTM drops unknown keys, so an unmapped field is lost, not rejected); (b) whether `membership_policy_id` and `insurance_carrier` are required on the reactor. They are backfilled with `N/A (professional referral)` so a referral isn't rejected for a blank required field; remove the backfill if they're optional, or give referrals their own reactor.
5. **PHI in Notes.** Notes is free text sent to CTM. Decide whether to add guidance (for example, not to include the patient's full name or diagnosis) once the client confirms how referrals should be handled.
6. **Required fields.** The brief doesn't say which fields are required. Name, organization, phone, email and level of care are required; notes are optional.
7. **CTA.** `CtaBand` only offers "Get help now" and "Verify my insurance", so the page renders the same cream CTA layout inline with the brief's two actions (`Send a referral` scrolls to the visible form, `Call {phone}`). If a CTA with custom buttons is wanted elsewhere, `CtaBand` could take a `buttons` prop.
8. **Map.** The shared `MapSection` keeps its schedule grid (the brief asks for address and hours), which repeats part of the levels-of-care table above it.
9. **Links to pages in progress.** `/our-team/scott-belovicz/`, `/our-team/dana-martin/` and `/about/our-approach/` are being built by other agents.
10. **Redirects.** `/referral/`, `/referral-2/` and `/test-make-a-referral/` → `/for-professionals/` are already in `vercel.json` (301). Not touched.
11. **Header/footer.** Neither links to `/for-professionals/` yet (the header structure in the build prompt has no slot for it). Suggest a footer link under "Admissions & About" (not edited here).

## Updates 2026-09-24 (answers to the content questions)

- **4.1 applied.** "Same-day" removed from the page: meta description now "Fast response, free benefits check, step-down from detox and residential." (138 chars; "Joint Commission accredited" dropped to meet the 155 limit, answer 9.1). Step 2 body: "Our Clinical Director reviews it and recommends the level of care" (no timing); its `[SOURCE?]` flag removed. Open item 1 is closed; the actual response-time SLA stays with Elizabeth (E).
- **4.2 (E).** FAQ "Do you provide progress updates?" and step 4 now read "With the patient's signed release, we confirm admission and coordinate care." Both keep their `[SOURCE?]` flag (still open: what referrers receive).
- **4.3 applied.** Referral form only: hint under Notes, "Please do not include the patient's full name, date of birth or diagnosis in this form. We'll collect clinical details by phone." (`aria-describedby` on the textarea). The coverage form's built HTML on `/admissions/` was diffed before/after: byte-identical. Open item 5 is closed.
- **4.4 confirmed.** Required: name, organization, phone, email, level of care; Notes optional. No change (open item 6 closed).
- **10.x (Oriana).** `N/A (professional referral)` backfill kept in `src/pages/api/lead.ts`; no live test.
- **6.1.** Transport tile: "Free transportation to and from our center, through Uber Health, for patients who can't drive themselves." No radius, no county limit, no "pick you up".
- **9.3.** "For professionals" is now the last item of the Admissions dropdown (`src/data/site.js`); the footer link stays (open item 11 closed).
