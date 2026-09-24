# Our Team + person pages: sources and notes

Covers `About-Team-Content-Briefs.md` sections A and B: `/our-team/` and the 11 person pages at `/our-team/{slug}/`.
Files: `src/pages/our-team/index.astro`, `src/pages/our-team/[slug].astro`, `src/data/team.js`.

Source keys:
- **Brief**: the roster table in `About-Team-Content-Briefs.md` §B.
- **Wiki**: the full Client Wiki (2026-09-22), `client-wiki-2026-09-22-full.txt`: contacts list (lines 5–15) and "Authors" entries (lines 642–807). Re-checked for every person on 2026-09-24; the Wiki wins over the brief and the live site.
- **ANS**: `Answers-Content-Questions-2026-09-24.md`.
- **LIVE**: sunviewwellness.com/about-us/, saved verbatim in `docs/content/live-about-us-2026-09-23.txt`. The only source for bio prose. It was lightly rewritten: third person, no em dashes, "client(s)" changed to "people", "the people he works with" or "the people in treatment", and serial commas dropped to match house style.
- **Q#**: the Clinical Director questionnaire.
- **POST**: articles in `src/data/posts.js` where the author is Frank.

## Person pages: where each bio sentence group comes from

| Person (slug) | Name / creds / title | "About" bio | "Role at Sunview" | Words (About) |
|---|---|---|---|---|
| Frank Galimidi (`frank-galimidi`) | Wiki (credentials in Wiki order: CASAC, CAP, CRADC, NCAC II, ICADC, SAP; title from the contacts list) | LIVE P1, P3, P4 (23+ years; strategy and standard of care; credentials incl. SAP; Clinical Architecture and "I = Addict"; publications, podcasts and forums). **New P2: Wiki bio lines 682–686** (executive at for-profit and nonprofit agencies; came to lead a turnaround; Chief Clinical Officer at Sunset House; Executive Director of the Meadows Counseling Center; ran a nonprofit residential and IOP program for six years) | "Creator of In Vivo Treatment™ and Clinical Architecture™": Brief + posts.js author role; strategy and standard of care: LIVE | ~140 |
| Frank: In Vivo H2 | | POST in-vivo-treatment-… ("Can I stay sober while actually living my life?", "within the living environment", skills shouldn't just exist on paper, the Learn → Apply → Experience → Process → Adjust → Apply Again loop); Clinical Architecture definition: LIVE; Clinical Excellence + Recovery Culture: POST what-should-a-treatment-center-feel-like | | |
| Dana Martin (`dana-martin`) | Brief | P1 and P2: LIVE (degrees, licenses, contributing author, trauma-informed/narrative/DBT, visibility and culture). P3: Q15 (systems-based training at master's and doctoral levels; "What happened to this person?") | Pre-screening review, level of care, ASAM: Q4. Systems view in program design and family involvement: Q15. Supervision questions: Q15 | ~170 |
| Gabriel Peña (`gabriel-pena`) | Wiki: LMHC (line 709) + QS (his Wiki bio says Qualified Supervisor) → "LMHC, QS"; title "Lead Therapist" (contacts list, line 15) | LIVE P1–P2 (match the Wiki bio). **New P3: Wiki bio lines 726–727** (Dana's lead therapist, covers for her, being developed into an assistant clinical director role, many of the more difficult cases) + ANS 3.4 EMDR wording, exact | Shared foundation IFS/CBT/DBT and individual expertise: Q9, Q10. Dual diagnosis framing: Q17 | ~85 |
| Tyler Shoens (`tyler-shoens`) | Wiki | Wiki bio line 739 (full-time clinical staff, registered intern working toward licensure) + visible `[Wiki bio pending]` kept (ANS 3.5 = E) | Primary-therapist job: weekly 45–60 min session and extra check-ins (Q7), first family contact in week one (Q13), ongoing clinical supervision by the Clinical Director (Q15, ANS 3.8) | ~20 |
| Maria Nowak (`maria-nowak`) | Wiki (full name "Alpha Maria Constanza Nowak"; display name stays "Maria Nowak", as her bio uses Maria) | Wiki bio lines 750–759, which match LIVE except two details now aligned to the Wiki: "including children, immigrants and individuals" → "including individuals", and "create meaningful and lasting change" → "make lasting change" | Same primary-therapist copy as Tyler (Q7, Q13, Q15) | ~80 |
| Jillian John (`jillian-john`) | Wiki (RMHCI confirmed, line 763) | LIVE, both paragraphs, minus the credential wording (see conflicts) | Same primary-therapist copy (Q7, Q13, Q15) | ~75 |
| Matthew Snyder (`matthew-snyder`) | Wiki (LCSW, Contract Group Leader confirmed) | LIVE, both paragraphs | Group-leader copy: one continuous 9 AM–1 PM group with one facilitator (Q7); IFS in group topics with CBT, DBT, trauma-informed care (Q9, Q10) | ~75 |
| Walter Bierschenk (`walter-bierschenk`) | Wiki (LCSW, Contract Group Leader confirmed; Wiki bio blank) | LIVE, only the Nova master's and the psychoeducation / evidence-based / coping and resiliency sentence | Same group-leader copy (Q7, Q9, Q10) | ~35 |
| Jose Toledo (`jose-toledo`) | Wiki | Wiki bio line 706, first half only: "a contracted medical doctor who provides medical oversight". Not published: "Sunview does little medical work on site". Visible `[Wiki bio pending]` kept (ANS 3.5 = E) | Title restated; psychiatry through Telemed Clinix (Q1, LIVE), kept separate so it doesn't claim he works with Telemed | ~10 |
| Carissa (`carissa`) | Wiki: "Carissa", "Office Manager / Admissions" (contacts list, line 10) | LIVE (Karissa Delaney bio, with the Wiki spelling "Carissa") | **New: handles most admissions and incoming calls** (Wiki line 10); scheduling and coordination from LIVE; link to /admissions/ | ~60 |
| Scott Belovicz (`scott-belovicz`) | Wiki (Director of Business Development, line 11) | LIVE, both paragraphs | Derived from the Brief title + the brief's /for-professionals/ link (see open questions) | ~75 |

Only Frank and Dana reach the brief's 120–250 word range. Everyone else is shorter because the sources are shorter; nothing was added to pad them.

## `/our-team/`: section sources

| Claim | Source |
|---|---|
| Meta title, description, H1, subheading, H2s | Brief §A, exact |
| "More than 50 years of combined clinical experience", multidisciplinary team | LIVE |
| Ph.D. Clinical Director; every clinician is trauma-informed | Brief; Q18 ("the remainder of our clinicians are trauma-informed") |
| Card specialty lines | Each person's LIVE bio (Tyler and Jose show `[Wiki bio pending]` instead) |
| Leadership intro (CEO sets the standard of care; CD shapes the model, recommends level of care, supervises) | LIVE (Frank), Q4, Q15 |
| Therapists intro (primary therapist for a weekly individual session; shared trauma-informed base) | Q7, Q18 |
| Group leaders intro (one continuous 9 AM–1 PM group, same facilitator) | Q7 |
| Admissions intro (day-to-day running; work with referring professionals) | LIVE (Carissa); Brief title for Scott |
| How Our Team Works Together: shared foundation, IFS in groups and individual sessions, CBT/DBT/trauma-informed | Q9, Q10 |
| Individual niches, no one-size-fits-all, clinicians growing their interests | Q9 |
| Ongoing clinical supervision by the Clinical Director with a systems lens; "what is this behavior communicating" etc. | Q15; wording per ANS 3.8 |
| Pull quote "We are not just treating diagnoses or behaviors…" | Q15, verbatim, attributed to "Sunview's Clinical Director" without her name (ANS 3.9) |
| Reviews, CTA | Shared components (rotation per brief) |

Schema: `/our-team/` has BreadcrumbList + CollectionPage (ItemList of the 11 person URLs). Person pages have BreadcrumbList + ProfilePage whose mainEntity is a Person (name, jobTitle, url, worksFor → `#organization`, honorificSuffix when credentials exist, `knowsLanguage` for Maria). `image` is added only when `photo` is set and `sameAs` only when `linkedin` is set; both are `null` for everyone now.

## Deviations and open questions

1. **Carissa's surname** `[confirm with Elizabeth]` (ANS 3.1 = E; Wiki spelling "Carissa" used). Shown as "Carissa" with slug `carissa`. The live site says "Karissa Delaney", and one verbatim Google review in `src/data/reviews.js` also names "Karissa Delaney the office manager", which supports that surname (spelling of the first name still differs from the Wiki). When confirmed, rename the slug to `carissa-{surname}` and add a redirect.
2. **Jillian John's credential: resolved.** The full Wiki confirms RMHCI (line 763). The live site's MSW/RCSWI is not used.
3. **Walter Bierschenk.** LCSW and Contract Group Leader confirmed by the full Wiki; his Wiki bio is blank, so the fire service / Navy background stays out (ANS 3.3 = E). Shown as LCSW (Wiki) even though the live site says LMHC · EMT-P · NERPSC. The live site's only degree for him is a Nova Southeastern master's in *Clinical Mental Health Counseling*, which usually leads to an LMHC rather than an LCSW. The degree is kept (it's sourced) but it doesn't match the credential. Confirm. The fire service, Navy, VA and Palm Beach Gardens Fire Rescue background is left out (the brief allows it only if it's in the Wiki bio, and the Wiki is blank), which leaves a ~35-word bio.
4. **Gabriel Peña.** The credentials line is "LMHC, QS" (Wiki credential line LMHC + Qualified Supervisor in his Wiki bio). Title "Lead Therapist" from the Wiki contacts list; note the Wiki's author entry says "Primary Therapist", so confirm if it matters. The Ed.S. is dropped from the line but the M.Ed. and Ed.S. degrees stay in the prose and the Education list (Wiki bio and live bio). **EMDR: resolved (ANS 3.4)**: "He is trained in EMDR-informed approaches; Sunview does not offer EMDR as a service." Note: `TEAM` in `src/data/site.js` (used by the old /about-us/) still says "EMDR-trained" and "Ed.S."; that file is out of my scope.
5. **Tyler Shoens and Jose Toledo:** the Wiki bios are one line each; that line is now used (Jose: only "contracted medical doctor"), and the `[Wiki bio pending]` marker stays (ANS 3.5 = E). Previously: Each page shows a visible red `[Wiki bio pending]` marker, the credentials, and a role section that describes the job generically (sourced to Q7/Q13/Q15 for primary therapists; the title only for Medical Oversight). The scope of Dr. Toledo's role (what "Medical Oversight" covers, and whether he's connected to Telemed Clinix) needs confirming.
6. **Scott Belovicz:** title is Director of Business Development (Wiki) instead of Director of Clinical Outreach (live). "A point of contact for professionals and organizations who want to work with Sunview" is inferred from the title and the brief's /for-professionals/ link. **`/for-professionals/` doesn't exist yet** and is linked anyway, so it 404s until it's built. Scott and Carissa have no credentials, so the side card is headed "Experience" (Scott, 14+ years from LIVE) or "At Sunview" (Carissa) instead of "Credentials".
7. **"I = Sick"** isn't used on Frank's page. His Wiki bio (lines 688–690) says "I = Addict", which stays. The Wiki flags that the two terms need a canonical choice (see our-approach notes).
8. **Supervision wording: resolved (ANS 3.8).** "Ongoing clinical supervision by the Clinical Director", no "weekly". Applied to the /our-team/ pillar and the shared intern paragraph (Tyler, Maria, Jillian).
9. **Pull quote attribution (ANS 3.9, E).** Until Dana confirms, questionnaire quotes read "Sunview's Clinical Director" without her name everywhere except her own page. Changed on /our-team/, Home, /therapies/, /therapies/dbt/, the old /our-approach/; removed the named Q15 quote from the Dana card on /therapies/family-therapy/ and from /about/our-approach/.
10. **Credential expansions.** Expansions are shown only where LIVE spells them out (LMFT, MCAP, QS, LMHC, RMHCI, RCSWI, SAP) or where they're unambiguous (LCSW, MSW, M.D.). Frank's CASAC, CAP, CRADC, ICADC and NCAC II are shown as acronyms only, because their expansions vary by credentialing board.
11. **Titles differ from the live site** by design (Wiki wins): Matthew and Walter are "Contract Group Leader" (live: "Group Facilitator"). Maria's title "Primary Therapist (Registered Intern)" and her RMHCI match the live site.
12. **CTA "Start with a conversation"** is rendered through the shared CtaBand as its display title. Per the site convention (review round 1, A4), the CTA block has no heading element, so it isn't an H2 even though the brief lists it among the H2s.
13. **Articles by {First}** is data-driven (`post.author.name === person.name`). Only Frank has posts today, so it shows up only on his page (latest 6, plus a link to /media/). It will appear for Dana and Gabriel once posts carry them as author. The `FRANK` author object in posts.js isn't exported, so matching is by name.
14. **Excluded** as the brief requires: Laura Contreras and Mia Grazel (not in the Wiki).
15. **Photos/LinkedIn:** everyone has `photo: null` (initials on mist) and `linkedin: null` (link hidden, no sameAs).
16. **Program-day wording:** the group-leader copy describes day programming (9 AM–1 PM, Q7). Evening IOP (6–9 PM, "similar structure") isn't mentioned on those pages.
