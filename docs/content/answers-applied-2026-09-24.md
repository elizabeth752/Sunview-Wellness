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

## Decisions 2026-09-24

Source: `Decisions-Status-2026-09-24.md` ("Apply as final"), sections "Corrections" and "Placeholder policy for launch". These supersede rows 4.2, 6.1 and 9.7 above where they conflict.

| Decision | Applied how |
| --- | --- |
| Corr. 1: trust strip on every commercial page | `ServicePage` passes `trust` to `PageHero` by default (Programs, What We Treat, Therapies, Admissions incl. carrier pages, About, Our Approach, Location); `/our-team/` and `/for-professionals/` pass it explicitly; Home already did. Not on blog hub/posts, person pages, privacy, thank-you, 404. "Home only" comments replaced in `PageHero`, `TrustStrip`, `/about/`, `/about/our-approach/`, `/locations/west-palm-beach/`. Checked at 375 and 1440 on Home, PHP, `/our-team/` (compact hero), `/for-professionals/` (referral form), location, Aetna, About, Alcohol: no horizontal overflow, strip starts exactly at the hero's bottom, below the form. |
| Corr. 2: transportation | Sitewide phrase "free door-to-door transportation" (48 occurrences in `src`). "Uber Health" removed everywhere (About, Location body + FAQ + route strip, `/admissions/`, `/admissions/faq/`, `/for-professionals/`). No radius or county limit anywhere. TrustStrip item: "Free door-to-door transportation". Location H2: "Free Door-to-Door Transportation in West Palm Beach"; `/admissions/` H2: "Free Door-to-Door Transportation and Scheduling Around Your Life". Meta descriptions that grew past 155 chars were trimmed (Alcohol, Substance Use hub, PHP, Location). |
| Corr. 3, 5, 6 | No change (Sunshine Health stays; Humana noindex; no reviewed-by bylines; "bulk billing" verbatim). |
| Corr. 4: names/titles | `team.js` already matched (Gabriel Peña = Lead Therapist, Maria Nowak, Carissa). The unused legacy `TEAM` export in `site.js` (live-site data: "Karissa Delaney", Walter's live credentials, Laura Contreras, Mia Grazel) was deleted. `/for-professionals/` leader cards (Scott Belovicz, Dana Martin) match `team.js`. |
| Placeholders | All `[SOURCE?]` markers removed (`/for-professionals/` FAQ + step 4, `/about/our-approach/` I = Sick band + FAQ, Location parking FAQ, privacy); sentence text kept. `[Wiki bio pending]` markers removed. Every template HTML comment (review notes, `[to confirm]`, `REVIEW 8.5`, `[LEGAL REVIEW REQUIRED]`, and dev notes) converted to Astro `{/* */}` comments, so only the GTM markers remain in page source. |
| Tyler Shoens, Jose Toledo | `publish: false` in `team.js` (replaces `bioPending`). Pages still build with `noindex`; excluded from the `/our-team/` grid, jump-link counts, ItemList schema, "Also on this team", the `/about/` initials stack (now derived from `PUBLISHED_PEOPLE`, so it includes Carissa). `team.js` exports `PUBLISHED_PEOPLE`, `isPublished` and `NOINDEX_PATHS` (for the sitemap filter). Therapists grid switches to 3 columns when the count isn't a multiple of 4. The "Group Facilitators and Medical Oversight" section keeps its H2 and now says psychiatric care comes through Telemed Clinix, with a link to psychiatry and medication management. |
| Avatars / LinkedIn | Initials everywhere; no LinkedIn link renders (all `linkedin: null`). |
| Schema | No `{{...}}`, empty strings, `null` or empty arrays in any JSON-LD block (232 blocks checked in `dist/client`). |
| Location accreditation panel | `JC_ID` / `DCF_LICENSE` placeholders deleted, with the ID row, DCF license row and the verify link. Kept: "Accredited by The Joint Commission", Founded 2021, Formerly Sunview Medical Center. |
| Seals | `ACCREDITATIONS[].url` = `null`; `AccreditationBadges` (used by TrustStrip) renders a plain image when `url` is falsy. `Accreditations.astro` (currently unused), About and Location never linked the seal. |
| Unconfirmed sections | Getting Here and referral SLA stay out; no "same-day" in copy. |
| Privacy policy | Website Privacy Policy H2 and its placeholder paragraph removed. Structure: H1 Privacy Policy → H2 HIPAA Notice of Privacy Practices → H3/H4 subsections. Still `noindex`, out of the sitemap. |
| QA copy rules | No em dashes and no "Learn more" in built pages. "client" removed from the video summaries in `posts.js`; the 12 remaining hits are in Frank's signed article bodies (two posts, blog rewrites not for launch) plus the verbatim Google reviews. |
