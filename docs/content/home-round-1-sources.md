# Home (`/`): round 1 changes and sources

Brief: `Home-Review-Round-1.md` (2026-09-22). All items in sections A, B and C were applied. Nothing outside the brief was changed on the page itself. Two shared components changed because the brief's specs apply site-wide: the coverage form (A2) and the FAQ (C, questions as `<button>`).

Source keys:
- **Q#** = *Questionnaire for Website Content: Responses*, question number
- **LIVE /path/** = the page on sunviewwellness.com as of 2026-09-22
- **PROMPT** = `docs/content/Sunview-Content-Build-Prompt.md`
- **BRIEF** = `Home-Review-Round-1.md`

## Page elements

| Element | Value |
| --- | --- |
| Meta title (58) | Drug Rehab & PHP/IOP in West Palm Beach \| Sunview Wellness |
| Meta description (155) | Joint Commission accredited PHP, IOP and outpatient care in West Palm Beach for substance use and mental health. Go home every night. Free insurance check. |
| Eyebrow (`<span>`) | Outpatient care · West Palm Beach, FL |
| H1 | Drug and Alcohol Rehab in West Palm Beach |
| Subheading (`<p class="subheading">`) | Recovery has to work in the real world |
| Schema | `MedicalOrganization` (name, url, telephone (561) 269-3175, address, sameAs) + `FAQPage` (the 5 visible questions). No BreadcrumbList. |

## Claims and sources

| Claim on the page | Source |
| --- | --- |
| PHP, IOP and OP; adults 18+ | LIVE / ("Outpatient drug rehab for adults 18+"), PROMPT |
| Joint Commission accredited | LIVE / ("Joint Commission accredited outpatient drug rehab") |
| You go home / sleep at home every night | LIVE /outpatient-rehab-west-palm-beach/ ("Sleep in your own bed every night") |
| Free transportation; Uber Health if you can't drive | LIVE / ("Free Transportation"); Q7 (Uber Health for clients unable to drive) |
| "I can't keep living like this", "I know I need help…", "I don't know who I am without this", "I've tried everything", "I'm afraid something is going to happen to him" | Q23 (verbatim) |
| "If I set boundaries, am I abandoning her?" | Q23, paraphrased from "whether setting boundaries means they are abandoning their loved one" |
| Families involved from the first week, with consent | Q13 |
| Most come after detox/residential; others come from the community | Q6 |
| Clinical Director reviews the pre-screening; ASAM criteria + clinical judgment | Q4 |
| PHP Mon–Fri 9am–1pm | Q7; LIVE /faq/ |
| Day IOP 3 days/week 9am–1pm; Evening IOP Mon/Wed/Thu 6–9pm | Q7; LIVE /faq/ |
| OP 1 day/week, 9am–1pm, any weekday | LIVE / ("OP · 9 AM – 1 PM · 1 Day/Week … Choose any day Monday–Friday") |
| PHP 20 hrs/week; IOP 9–12 hrs/week; OP 4 hrs/week | LIVE /php-iop-west-palm-beach/ (PHP 20 hrs, IOP 9 hrs); 12 and 4 are arithmetic from Q7 schedules |
| Band-aid over a bullet hole | Q11 |
| Stabilization → insight → integration | Q20 ("moving from stabilization, to insight, to integration") |
| In Vivo Treatment™ and the learn → apply → … loop | LIVE /media/in-vivo-treatment-at-sunview-wellness-recovery-has-to-work-in-the-real-world/ (the ™ is used there and in Frank Galimidi's signature) |
| In Vivo infographic | LIVE, same article (`In_Vivo_Recovery_Treatment_Model_11zon-1.webp`) |
| One facilitator for the continuous 9am–1pm group | Q7 |
| Gender-specific groups every other Thursday | Q12 |
| Telemed Clinix psychiatry in a private office on site, continues after discharge | Q1, Q21 |
| Weekly individual session, 45–60 minutes | Q7 |
| BAM, PHQ-9, GAD-7; monthly treatment plan review | Q22 |
| Alcohol and crack cocaine seen most | Q16 |
| Opioids and benzodiazepines, usually after medically supervised detox | Q3, Q5 |
| Anxiety, depression, trauma, personality disorders seen most | Q16 |
| Scope: detox first / 24-hour care / methadone / Suboxone-Vivitrol | Q1–Q3, Q5 (copy per BRIEF A7) |
| Team with more than 50 years of combined experience; PhD-led | LIVE /about-us/ ("over 50 years of combined clinical experience"); LIVE /drug-rehab-west-palm-beach/ ("PhD-Led Clinical Team") |
| Dana Martin, Ph.D., LMFT, Clinical Director | LIVE /about-us/ |
| Quote ("Instead of simply asking…") | Q15, verbatim |
| Retired 25-year firefighter; bilingual English/Spanish therapist | LIVE /about-us/ (Walter Bierschenk; Maria Nowak) |
| Every clinician is trauma-informed | Q18 |
| Medicaid plans: Sunshine Health, AmeriHealth Caritas, Molina, Community Care Plan. Commercial: Aetna, Florida Blue, Cigna, Oscar, Ambetter, UnitedHealthcare | PROMPT (/admissions/insurance/ line); logos also on LIVE / |
| Enrolled within 24 hours | LIVE / ("can have you enrolled within 24 hours") |
| Address 4802 East Ave, West Palm Beach, FL 33407 | LIVE (header/footer, /faq/) |
| Program hours on the map block | Q7 |
| FAQ answers | Q1–Q3, Q7; LIVE /faq/ (insurance, Medicaid); LIVE / (24 hours) |

## Could not verify

The on-page `[SOURCE?]` markers were removed from the form at the client's request (2026-09-22). Items 1 and 2 are still unconfirmed and need client sign-off before launch.

1. **"Or call us 24/7"** (form, required by BRIEF A2): 24/7 availability appears nowhere on the live site or in the questionnaire. Flagged.
2. **"HIPAA compliant" badge** (BRIEF A2): the form is only HIPAA-compliant if Sunview has a signed BAA with CallTrackingMetrics and the host (Vercel). Flagged.
3. **Quote attribution**: the questionnaire doesn't name its respondent. Attributing it to Dana Martin is inferred from the answer's "As an LMFT… master's and doctoral levels" wording. Name and title are verified. Flagged.
4. **Reviews**: `{{REVIEW_1..3}}` and `{{REVIEW_n_AUTHOR}}` placeholders until the client sends the exact Google reviews.
5. **Medicaid vs commercial split of the insurance list**: comes from the content prompt. The live site shows the logos but doesn't say which are Medicaid plans. Approved as-is in BRIEF D.
6. **Infographic ownership**: it's published on the client's site, but it's AI-generated: it carries a "Gemini Notebook" watermark in the bottom-right corner, and it has a typo ("recovery finaily clicks"). Confirm the client is fine using it as a brand asset, or ask for a clean version.
7. **Terms of Use**: the form links to `/terms-of-use/` as the brief requires, but that page isn't in the phase 1 sitemap and currently 404s.
8. **Office/admissions hours**: only program hours are sourced (Q7). The map block says "Program hours" for that reason.

## Section C checks

- Eyebrows: all `<span>` (52 converted site-wide).
- Hierarchy: H1 → 12 H2s → H3 cards; no skipped levels, no H4. FAQ questions are `<button aria-expanded>`.
- Megamenu: What We Treat opens three columns (Substance use · Mental health · Dual diagnosis). At 1280 it spans x=118–838, and at 1440 x=198–918, so it stays inside the viewport.
- Breakpoints 375/390/768/1024/1280/1440: no horizontal overflow. Below 1024 the form renders right before the CTA section; from 1024 up it's in the hero.
- Black rectangles in the PDF: identified. They're the **Astro dev toolbar**, a dark bar pinned to the bottom center of the page that only exists on the local dev server (`astro dev`). It isn't part of the site and doesn't appear in the production build. No element on the page itself is black, and no image is broken.
- Phone (updated 2026-09-22): the client supplied the CTM target number for SEO, **(561) 269-3175**, which replaces `{{PHONE}}` everywhere. CTM's swap script changes it to the right tracking number per visitor, which is why the earlier review saw (561) 830-3353.
