# Location: `/locations/west-palm-beach/`, sources and notes

Brief: `Professionals-Location-Content-Briefs.md` §B (2026-09-23). Page: `src/pages/locations/west-palm-beach.astro` (built on `ServicePage`, like `/about/` and `/admissions/`).

Source keys:
- **Q#**: the Clinical Director questionnaire.
- **LIVE /path/**: sunviewwellness.com (Sept 2026).
- **SITE**: `src/data/site.js` (NAP, phone via the CTM helper `SITE.phone`/`SITE.phoneHref`, email, maps, social, `foundingYear`).
- **BRIEF**: the Location brief itself (no other source found).
- **Wiki**: our copy of the Client Wiki is **blank** for Service areas, Languages, Year Established and anything LGBTQ+. No sentence rests on the Wiki alone.
- Existing pages reused for consistent wording: `/admissions/` (ADM), `/admissions/faq/` (ADM-FAQ, LIVE /faq/), `/about/` (ABOUT).

## Page elements (brief, verbatim)

| Element | Value |
| --- | --- |
| Meta title (60) | Sunview Wellness West Palm Beach \| Outpatient Rehab Location |
| Meta description (157) | Sunview Wellness at 4802 East Ave, West Palm Beach, FL 33407. PHP, IOP and OP with free transportation to and from our center. Directions and hours. (148, updated 2026-09-24, answer 6.1) |
| H1 | Outpatient Rehab Center in West Palm Beach, FL |
| Subheading | Easy to reach, with free transportation if you can't drive. (updated 2026-09-24, answer 6.1) |
| Breadcrumb | Home › West Palm Beach Location (no `/locations/` index exists, so the middle crumb is skipped; visible trail and BreadcrumbList match) |
| Hero | H1, subheading, one paragraph, Get help now (/admissions/) + Verify my insurance, coverage form in the hero aside on desktop and before the CTA below lg (ServicePage default). No eyebrow, checklist or byline |
| Trust strip | None (Home-only client decision) |
| Rotation | Insurance (shared) + Reviews (shared) + Map (inside section 1; ServicePage's shared MapSection is off to avoid two maps) |

## Sections (in order)

1. Hero.
2. **Address, Hours and Contact**: oversized address panel (teal-deep) with Get directions / View on Google Maps, phone, email, next to a full-height map; then H3 "Program Hours, Monday to Friday" as five day cards (stack as rows on mobile).
3. **Free Transportation Across Palm Beach County**: cream band, intro + 3-step door-to-door route strip (gold dashed line), Ask about a ride (tel) + What to expect.
4. **Programs at This Location**: ledger rows PHP · IOP · OP · Rx (psychiatry), each linking to its page; link to /programs/.
5. **Accreditation and Licensing**: mist; prose + framed "certificate" panel (JC seal, verify link, ID, DCF license, founded, formerly).
6. **Who We Serve in West Palm Beach**: prose + 2×2 statement tiles; link to /our-team/.
7. Insurance (shared). 8. Reviews (shared). 9. FAQ (5). 10. Mobile form. 11. CTA band (shared).
- **Getting Here: omitted.** Parking and transit are `[to confirm with Elizabeth]` and nothing is verified (brief: otherwise omit).

## Sentence-to-source map

| Copy | Source |
| --- | --- |
| Hero: outpatient rehab center at 4802 East Ave, West Palm Beach, adults 18+ | SITE.address; LIVE / (18+) |
| Hero: programs in the morning, evening IOP after work | Q7; ABOUT (same wording) |
| Hero / FAQ / transport: if you can't drive, we arrange Uber Health rides to and from programming at no cost | Q7; ADM (same sentence) |
| Address, phone, email | SITE (email is from SITE/live site; brief says "email from Wiki", Wiki blank) |
| "One location, open weekday mornings and three evenings" | Q7 (schedules) |
| Day cards: 9 AM–1 PM PHP · Day IOP · OP every weekday; 6–9 PM Evening IOP Mon/Wed/Thu; no evening group Tue/Fri | Q7 (PHP, Day IOP, Evening IOP); LIVE / (OP one weekday 9–1); matches SITE PROGRAMS, ProgramSchedule, Footer. No conflicts found |
| Day IOP and OP use the same morning hours on the days you choose | Q7 ("days selected based on their individual schedules"); SITE PROGRAMS |
| Taking the ride off your plate makes it easier to show up; consistency matters | Q7 ("reduce transportation barriers and support consistent attendance") |
| "Across Palm Beach County" (H2, meta) | BRIEF; MapSection/ABOUT ("Serving West Palm Beach and Palm Beach County", credited to a Wiki update). **Our Wiki copy is blank: confirm** |
| Steps: tell admissions / we arrange Uber Health from home to 4802 East Ave / ride home; programs end 1 PM, evening IOP 9 PM | Q7 |
| PHP: five mornings, group therapy, weekly individual session, psychiatric care, live at home | Q7; ADM-FAQ ("What is the difference between PHP and IOP?") |
| IOP / OP one-liners | SITE PROGRAMS `bestFor` (already on /programs/) |
| Psychiatry: Telemed Clinix, part of every level of care | LIVE /about-us/; ProgramLinks note; ADM-FAQ |
| Telemed appointments are virtual, held in one of our private offices | Q7 |
| Keep your provider after you finish | ADM-FAQ ("Can I keep seeing the psychiatric provider afterward?") |
| Clinical Director reviews pre-screening, recommends level | Q4; ADM |
| Opened in West Palm Beach in 2021; formerly Sunview Medical Center | **BRIEF** (+ Home round 2 for 2021, SITE.foundingYear); same wording as ABOUT |
| Joint Commission accredited | LIVE / |
| Florida DCF license `{{DCF_LICENSE}}`, JC ID `{{JC_ID}}` | BRIEF (placeholders by decision) |
| Substance use + co-occurring mental health together | LIVE /; Q17 |
| Stepping down from detox/residential or starting from home | Q6 |
| Outpatient only; detox or 24-hour care first, we help find it | Q2, Q3, Q5; ADM-FAQ |
| Adults 18 and older | LIVE / |
| Care in English and Spanish, bilingual primary therapist | MapSection; LIVE /about-us/ (Maria Nowak). Wiki blank |
| LGBTQ+ friendly | Wiki (full copy, 2026-09-22) Locations table: "Yes: clinical staff with specialisms in LGBTQ+ populations and identity-related stressors". Flag removed (answer 5.3) |
| Clinical staff includes specialists in LGBTQ+ care and identity-related stress | Wiki Locations table (answer 5.3) |
| Mornings end at 1 PM, evening IOP at 6 PM, many people keep working | Q7; ADM-FAQ ("Can I keep working? Many people do.") |
| FAQ Where exactly are you? | SITE.address; directions link |
| FAQ Is parking available? | Does **not** assert parking. "Call us... we'll walk you through arriving" + Uber Health (Q7). Visible `[SOURCE?]` flag (flag stripped from schema text) |
| FAQ Do you offer transportation? (was "Do you pick me up?") | Q7; Wiki Transportation Assistance Policy; answer 6.1 |
| FAQ What are your hours? | Q7; LIVE / (OP) |
| FAQ Are you a residential facility? | ABOUT FAQ (verbatim), Q2/Q3/Q5 |

## Schema

- Base: MedicalOrganization `#organization` + BreadcrumbList (Home › West Palm Beach Location).
- Page: **MedicalClinic** `https://sunviewwellness.com/locations/west-palm-beach/#clinic` (the site's only LocalBusiness node): name, url, `parentOrganization` → `#organization`, telephone (`SITE.phone`), email, PostalAddress, `hasMap` (Maps URL with `query_place_id=ChIJbzYD7xTV2IgRubmVOC4bOs4`), `foundingDate` 2021, `openingHoursSpecification` (Mon–Fri 09:00–13:00; Mon/Wed/Thu 18:00–21:00), `sameAs` (SITE.mapsUrl, GBP cid URL, Facebook, Instagram, LinkedIn, X), `aggregateRating` 4.5 / 17 from `GBP_RATING` in `reviews.js` (agrees with the brief).
- **FAQPage** from the 5 visible questions.
- **No `geo`**: site.js has no coordinates; not invented. Add `geo` once lat/long is confirmed (e.g. from the GBP).

## Deviations, placeholders and open questions

1. **Getting Here omitted** (nothing verified on parking/transit). Parking FAQ kept per brief but answered without asserting parking, flagged.
2. **Map embed** uses `SITE.mapsEmbed` (keyless address query, same as MapSection). A Place ID embed needs a Maps Embed API key, which we don't add. The Place ID is used on "Get directions" (`destination_place_id`), "View on Google Maps" and `hasMap`.
3. **Breadcrumb**: no `/locations/` hub, so the trail is Home › West Palm Beach Location.
4. **"Across Palm Beach County"**: brief/Wiki wording; our Wiki copy is blank. Consistent with MapSection and /about/. Confirm.
5. **LGBTQ+ friendly**: visible `[SOURCE?]` flag until the client confirms.
6. **Wheelchair accessibility**: `[to confirm]`, omitted (no copy, no flag).
7. **Transportation conflict** (same as /about/ note 4): LIVE /faq/ says "we'll pick you up in the morning and drop you off"; Q7 says Uber Health for people who can't drive. This page follows Q7 / `/admissions/`.
8. **Email**: brief says "from Wiki"; Wiki blank, so SITE.email (live site).
9. **Formerly Sunview Medical Center / founded 2021**: brief only (plus Home round 2). Consistent with /about/. Optional: `alternateName: 'Sunview Medical Center'` on the org/clinic node once confirmed.
10. **JC verify link** points to the `{{JC_ID}}` placeholder (renders as a relative href until replaced); ID and `{{DCF_LICENSE}}` are visible placeholders.
11. **Redirects (not edited here)**: `vercel.json` 301s `/location/` and `/locations.kml` → `/admissions/`; they should now point to `/locations/west-palm-beach/`.
12. Shared FAQ block keeps ServicePage's "All admissions FAQs" button and subheading.

## Updates 2026-09-24 (answers to the content questions)

- **5.3 applied.** LGBTQ+ friendly is in the full Client Wiki (Locations table). `[SOURCE?]` flag removed, tile kept; body now "Our clinical staff includes specialists in LGBTQ+ care and identity-related stress." Open item 5 closed.
- **5.1, 5.2, 5.4 (E).** Unchanged: Getting Here stays out; parking FAQ keeps its flag; `{{JC_ID}}` / `{{DCF_LICENSE}}` placeholders stay. Meta description no longer mentions parking (it now ends "Directions and hours.").
- **5.5.** Rating confirmed (4.5, 17 reviews, 2026-09-22). No change; re-check the day before launch.
- **6.1 applied.** H2 "Free Transportation Across Palm Beach County" → "Free Transportation to and From Our West Palm Beach Center" (a county limit is not allowed). Hero lead, subheading, parking FAQ, transport body, route step 2 ("We book your free ride … through Uber Health") and FAQ "Do you pick me up?" → "Do you offer transportation?" all lead with "free transportation to and from our center". No radius, no county limit, no "pick you up". Open items 4 and 7 closed; limits stay with Elizabeth (E).
- **1.3 applied.** `alternateName: 'Sunview Medical Center'` on the MedicalClinic node (and on Base's MedicalOrganization). Open item 9 closed; the name-change date stays E.
- Unused `SourceFlag` import removed.
