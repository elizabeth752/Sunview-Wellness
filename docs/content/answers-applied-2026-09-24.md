# Answers applied (2026-09-24): For Professionals, Location, transportation, Humana, nav, privacy, schema

Source: `Answers-Content-Questions-2026-09-24.md` + full Client Wiki (2026-09-22). Items owned by the other agent (About, Team, therapies, what-to-expect, for-families) are not covered here.

| Answer | Applied how |
| --- | --- |
| 1.3 | `alternateName: 'Sunview Medical Center'` on the sitewide MedicalOrganization (`src/layouts/Base.astro`) and on the MedicalClinic node of `/locations/west-palm-beach/`. Name-change date: E. |
| 4.1 | `/for-professionals/`: meta "Fast response, …"; step 2 has no timing ("Our Clinical Director reviews it and recommends …"); its `[SOURCE?]` flag removed. SLA: E. |
| 4.2 (E) | FAQ "Do you provide progress updates?" and step 4: "With the patient's signed release, we confirm admission and coordinate care." Flags kept. |
| 4.3 | `LeadForm` referral variant only: hint under Notes (no full name, DOB or diagnosis). `/admissions/` coverage form HTML diffed before/after: byte-identical. |
| 4.4 | Confirmed, no change. |
| 5.1, 5.2, 5.4 (E) | No change. |
| 5.3 | LGBTQ+ tile kept, flag removed (Wiki Locations table). |
| 5.5 | Confirmed, no change. |
| 6.1 | "Free transportation to and from our center" as the lead phrase; no "pick you up", no radius/county limit. Location H2 → "Free Transportation to and From Our West Palm Beach Center". Also fixed: TrustStrip ("Free door-to-door transportation" → "Free transportation to and from our center"), MapSection (default subtitle; "Serving West Palm Beach and Palm Beach County, with free transportation…" → "Free transportation to and from our center if you can't drive yourself."), programs PHP/IOP/OP includes lists + PHP body, opioids/cocaine/benzodiazepines, `/admissions/` (band dt "Free rides" → "Free transportation" + dd), `/admissions/faq/` ("We'll pick you up…" removed), `/for-professionals/` tile. "Uber Health" kept only as a clarifier after the lead phrase. Limits: E. |
| 7.1, 7.5 | No change ("in network", "Call us 24/7"; nothing names who answers). |
| 7.2 | Humana payer page still built, `noindex` (new `noindex` prop on `ServicePage`, flag in `payers.js`), excluded from the sitemap (`astro.config.mjs` filter), not in any menu, and its logo on the `/admissions/insurance/` wall is unlinked. |
| 9.3 | "For professionals" added as the last Admissions dropdown item (`src/data/site.js`); footer link kept. |
| 9.4 | Verified: `vercel.json` has `/our-approach/` → `/about/our-approach/` (301). |
| 9.7 | `/privacy-policy/`: H1 "Privacy Policy"; H2 "Website Privacy Policy" (placeholder paragraph + `[SOURCE?]` flag: no website policy exists yet, legal to supply); H2 "HIPAA Notice of Privacy Practices" with the live notice (its headings demoted one level, text unchanged). `noindex`, out of the sitemap, `<!-- [LEGAL REVIEW REQUIRED] … -->` comments in the file (HTML comments, so they also appear in page source, not on the page). No `/terms-of-use/` or `/hipaa-notice/` pages; neither is linked in the footer or listed in the sitemap (also added to the sitemap filter defensively). Hero CTA now points to `/admissions/` instead of the redirected `/get-help-now/`. |
| — | `/thank-you/` was already noindex + out of the sitemap. Old `/about-us/` and `/our-approach/` pages: now `noindex` and out of the sitemap (still built, deletion pending the user's OK). The sitemap filter now matches exact pathnames, so `/about/our-approach/` stays in. |
| 10.x | `N/A (professional referral)` backfill kept; no live test. |
