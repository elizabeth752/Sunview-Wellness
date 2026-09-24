# About: `/about/`, sources and notes

Brief: `About-Team-Content-Briefs.md` §C (2026-09-23). Page: `src/pages/about/index.astro` (built on `ServicePage`, like the Admissions pages).

Source keys:
- **Q#**: the Clinical Director questionnaire.
- **LIVE /path/**: sunviewwellness.com as of 2026-09-22 or 23 (`live-about-us-2026-09-23.txt` for /about-us/).
- **BUBBLE**: Frank Galimidi, "Recovery Doesn't Happen in a Bubble" (summary in `src/data/posts.js`).
- **INVIVO**: "In Vivo Treatment™ at Sunview Wellness" (LIVE /media/..., full text in `src/data/posts.js`).
- **BRIEF**: the About brief itself (no other source found).
- **Wiki**: the full Client Wiki (`Client_Wiki-2026092218345010.pdf`, 2026-09-22), text in `client-wiki-2026-09-22-full.txt` (line refs below). The earlier copy (2026-09-03) was the empty template. Year Established is still blank in the Wiki.
- **ANS**: `Answers-Content-Questions-2026-09-24.md` (answers to the question file).

## Page elements (brief, verbatim)

| Element | Value |
| --- | --- |
| Meta title (60) | About Sunview Wellness \| Outpatient Rehab in West Palm Beach |
| Meta description (172, brief verbatim, over 160) | Founded in 2021 and Joint Commission accredited, Sunview Wellness is an outpatient PHP, IOP and OP center in West Palm Beach built on a true outpatient model for real life. |
| H1 | About Sunview Wellness in West Palm Beach |
| Subheading | Your Community. Your Recovery. (tagline, same as the CTA default) |
| Breadcrumb | Home › About (only element above the H1) |
| Hero | H1, subheading, one paragraph, Get help now + Verify my insurance, coverage form in the hero aside on desktop and before the CTA below lg (ServicePage default) |
| Byline | None (brief decision) |
| Trust strip | None (Home-only client decision) |
| Schema | Base: MedicalOrganization (`#organization`, already has `foundingDate` 2021) + BreadcrumbList. Page: `AboutPage` (`about`, `mainEntity`, `publisher` all reference `#organization`; no duplicate org node) + `FAQPage` (the 5 visible questions). |

## Sections (in order)

1. Hero (ServicePage).
2. **Our Mission, Vision and Values**: open triptych with gold dividers; Mission and Vision as paragraphs, Values as a check list. Wiki text, verbatim (see deviations).
3. **A True Outpatient Model for Real Life**: cream section; prose left, "Instead of / At Sunview" contrast rows right; link to /programs/ and /admissions/what-to-expect/; then a numbered row with the Wiki USPs 1–4 (gold top rule, short title + text, same pattern as the Our Team pillars).
4. **Founded in 2021, Formerly Sunview Medical Center**: full-bleed teal milestone band with an oversized "2021", one paragraph, fact chips and the Joint Commission seal.
5. **The People Behind the Program**: short prose + "50+ years" figure card with an initials stack (decorative); link "Meet our treatment team" → /our-team/.
6. **How We Measure What Matters**: mist; typographic stat row BAM · PHQ-9 · GAD-7 · RSA-R (no outcome numbers); link → /about/our-approach/.
7. **Serving West Palm Beach and Palm Beach County**: prose + address/facts stack (transport, languages, phone); link → /locations/west-palm-beach/.
8. Reviews (shared). 9. Map (shared, `showSchedule={false}`). 10. FAQ (5, shared block). 11. Mobile form. 12. CTA band (shared).

## Sentence-to-source map

| Copy | Source |
| --- | --- |
| Hero: outpatient program for adults 18 and older | LIVE / ("Outpatient drug rehab for adults 18+") |
| Hero: we work only at PHP, IOP and OP; you live at home; real life becomes part of the work | BUBBLE ("operates only at the PHP, IOP and OP levels, and clients live in their own homes and communities"); INVIVO |
| Mission | Wiki lines 308–310, verbatim (ANS 1.1) |
| Vision | Wiki lines 314–317, verbatim (ANS 1.1) |
| Values (5 bullets) | Wiki lines 321–328, verbatim (ANS 1.1) |
| USP 1–4 row | Wiki lines 191–210 (ANS 1.2), with the removals listed under deviations |
| "Sobriety isn't proven in treatment. It's proven in life." | BUBBLE (quote) |
| Only PHP, IOP and OP; people live in their own homes and communities | BUBBLE |
| We don't offer housing, on purpose; recovery doesn't happen in a bubble | Q2, Q3, Q5 (no housing, per Admissions FAQ); BUBBLE (title). "No bubble wrap" in the brief rendered as "recovery doesn't happen in a bubble" |
| In Vivo loop: learn, apply, bring back, adjust; the argument at home / hard day at work worked on next morning | INVIVO (Learn → Apply → Experience → Process → Adjust); Home page wording (sourced to INVIVO) |
| Contrast rows: residential bubble vs home every night; no housing; "What would you do…" vs "What actually happened when the craving hit yesterday?"; skills on paper vs practiced | BUBBLE; LIVE /outpatient-rehab-west-palm-beach/ ("Sleep in your own bed every night"); INVIVO (both questions verbatim, "skills shouldn't just exist on paper") |
| Most people start with us stepping down from detox or residential | Q6 |
| Opened in West Palm Beach in 2021 | ANS 1.3: verified (NPI 1326620667 assigned April 2021; Florida 211 directory) |
| Former name Sunview Medical Center | ANS 1.3: confirmed by Elizabeth. Name-change date still open (E), so the copy doesn't date it |
| Joint Commission accredited | LIVE / ("Joint Commission accredited outpatient drug rehab") |
| Adults 18+ | LIVE / |
| Substance use and co-occurring mental health conditions | LIVE /; Q17 |
| 4802 East Ave, West Palm Beach | `SITE.address` (LIVE header/footer) |
| Across Palm Beach County | Wiki "Service areas" (lines 963–969: West Palm Beach and Palm Beach County). Used as a service area only, never as a transportation limit (ANS 6.1) |
| Over 50 years of combined clinical experience; multidisciplinary team | LIVE /about-us/ |
| Licensed therapists, social workers, certified addiction professionals and group facilitators | Home page (sourced to LIVE /about-us/ roster credentials) |
| PhD-led | LIVE /drug-rehab-west-palm-beach/ ("PhD-Led Clinical Team") |
| Dana Martin, Ph.D., LMFT, Clinical Director, reviews every pre-screening | Brief roster; LIVE /about-us/; Q4 |
| Every clinician is trauma-informed | Q18 |
| Psychiatric medication management through Telemed Clinix | LIVE /about-us/ ("exclusive referral relationship with Telemed Clinix") |
| Outcomes are more than finishing; progress, stability, insight, engagement | Q22 |
| BAM: risk and protective factors in substance use, recovery, functioning; protective factors grow | Q22 |
| PHQ-9 and GAD-7 track depression and anxiety | Q22 |
| RSA-R satisfaction survey, reviewed and used to make changes | Q22 (wording matches `our-approach.astro`) |
| Monthly treatment plan review with your therapist | Q22 |
| Morning programming, evening IOP after work, keep your job, sleep in your own bed | Q7; Admissions page (same wording) |
| Free transportation to and from our center if you can't drive, arranged through Uber Health | Wiki line 833 ("free transportation to and from the facility"); ANS 6.1 (lead with "free transportation", no radius/county limit, no "we'll pick you up"); Q7 (Uber Health) |
| Care in English and Spanish, including a bilingual primary therapist | Wiki "Languages" (line 938: English and Spanish) and "Language assistance" (lines 957–961: bilingual English/Spanish clinician on staff); Maria Nowak's Wiki bio |
| FAQ: residential? | Q2, Q3, Q5; `/admissions/faq/` "Is there housing or residential treatment?" |
| FAQ: accredited? | LIVE / |
| FAQ: who is Sunview for? | LIVE / (18+); Q16 (anxiety, depression, trauma); Q6 (step-down or from home "because they, or someone who cares about them, recognized…") |
| FAQ: mental health on its own? | Verbatim from `/what-we-treat/` FAQ; consistent with `/what-we-treat/mental-health/` |
| FAQ: where located? | `/admissions/faq/` answer (LIVE), address from `SITE` |

## Deviations, placeholders and open questions

1. **Mission / Vision / Values: resolved (ANS 1.1).** Verbatim from the Wiki. Only changes: the em dashes became commas (Mission: "extended care, the "stay sober" half of treatment, regardless of payer") or a colon (Vision after "Palm Beach County"; Values bullet 1 after "Outcomes over bulk billing"), the ↗ markers were dropped, straight quotes became curly, and Mission/Vision got a closing period. `{{MISSION}}`/`{{VISION}}`/`{{VALUES}}`, their SourceFlags and the "[Pending Wiki text]" lines are gone. Note: Values bullet 1 keeps "bulk billing" (verbatim), although the Wiki's writing notes say to avoid "bulk billing" framing (inferred). Flag if Elizabeth wants it softened.
2. **USPs 1–4: resolved (ANS 1.2), with these deviations from verbatim**:
   - Short titles ("A true standalone program", "In network with nearly every carrier", "In vivo, with clinical depth behind it", "A named clinical model") are ours, for scanning.
   - USP 1: removed the sentence "Clients are typically carried from day 21–30 through month seven, with an average length of stay of around 130 days across levels of care" (ANS 8.6: no LOS figures or timeline). Em dashes → commas.
   - USP 2: em dashes → commas; the closing clause "so quality care is not reserved for people with 'Cadillac insurance policies and a lot of cash'" was cut because the Mission, a few lines up, already carries the same line. It stays in the Mission. Medicaid is named inside the list, not led with (CEO guardrail); the USP sits second.
   - USP 3: em dash → colon; "a" added before "PhD-led clinical team"; "mandated-client group-think" → "mandated group-think" (no "client"); "free door-to-door transportation" → "free transportation" (ANS 6.1: no pickup wording); "clients can recover" → "people can recover"; comma added before "so".
   - USP 4: dropped the trailing source note ("The CEO's written statement of the model is the source (supplied by CEO, 10 Sep 2026)"); "Inner Child Therapy" is linked to /therapies/inner-child-therapy/.
   - The existing prose and contrast rows (BUBBLE, INVIVO, Q2/Q3/Q5/Q6) stay; the "[Pending Wiki text: USPs 1–4]" flag is gone.
3. **Founded 2021 / "Formerly Sunview Medical Center": resolved (ANS 1.3).** The `alternateName` schema is added by the other agent in Base.astro, not here. Name-change date: still E.
4. **Transportation wording: resolved (ANS 6.1).** The fact row now leads with "Free transportation to and from our center if you can't drive yourself", with Uber Health only as a clarifier. No radius or county limit is tied to transport; "Palm Beach County" appears only as the service area.
5. **Location link.** `/locations/west-palm-beach/` doesn't exist yet. I did what Admissions did: link to the planned URL (Admissions links it through the shared MapSection "West Palm Beach location" button, and the About nav already lists it). The link 404s until that page is built. Anchor: "Our West Palm Beach location".
6. **Service area and languages: resolved (ANS 1.4).** Both are in the Wiki (lines 938, 957–969).
7. **Initials stack** in The People Behind the Program is decorative (`aria-hidden`) and uses the brief's Wiki roster. It leaves out the Office Manager until her surname is confirmed (Carissa or Karissa). It links to `/our-team/`, which another agent is building.
8. **CTA band duplicates the tagline.** CtaBand's default title is "Your Community. Your Recovery.", which is also this page's subheading. ServicePage doesn't pass a CTA title through. Optional shared change: add a `ctaTitle` prop to ServicePage. I didn't make it.
9. **Schema alternateName.** ANS 1.3 approves it; added by the other agent in Base.astro (not in this file).
10. **Meta description** is 172 characters (brief verbatim, over 160). The title is 60.
11. **FAQ block** uses the shared ServicePage FAQ section, including its "All admissions FAQs" button and the "Straight answers before you call" subheading.
12. **No trust strip**, per the Home-only client decision.
13. **`/about-us/`** (old page) is still in the tree. You're handling the 301 → `/our-team/`.
14. Joint Commission seal shown without a link (the seal URL in `ACCREDITATIONS` is still a placeholder).
