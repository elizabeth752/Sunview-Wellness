# PROMPT: Sunview Wellness website content build

You are writing the website content for **Sunview Wellness**, an outpatient behavioral health center in West Palm Beach, FL (PHP, IOP and OP for substance use and co-occurring mental health conditions; Joint Commission accredited; adults 18+). Follow the brand book and tokens in `Sunview-Wellness-Brand-Book.md` (voice: warm, direct, honest about scope; no rehab clichés; sentence-case H2s; "recovery, not sobriety"). Sources, in order of authority: (1) the official live site sunviewwellness.com, (2) the Clinical Director questionnaire, (3) facts confirmed by Julian (CMS) or Elizabeth (SEO). Nothing else. The word "client" is never used in copy. Never claim detox, residential, inpatient, in-house MAT, methadone maintenance, certified EMDR or art therapy.

**SEO rules (non-negotiable):** H1 = keyword + geo modifier in the pattern "[Service] in West Palm Beach" (e.g. "Intensive Outpatient Program in West Palm Beach"); emotional framing goes in the eyebrow or subheading, never the H1. H2s name the section's real topic with a specific keyword; no vague headings ("Why this matters") and no narrative sentences. Internal link anchors are descriptive and keyword-specific, never "Learn more" or "Click here". FAQ links only where they truly help that answer. No em dashes anywhere in generated copy. Each page ends with the schema to implement (BreadcrumbList plus the page-type schema) describing only what is visibly on the page. Phone numbers are placeholders `{{PHONE}}` (injected via GTM/CTM).

Write one page at a time, in this order, and stop after each for approval. For every page deliver: URL, meta title (≤60 chars), meta description (≤155), H1 (no text above it except the breadcrumb), body sections with H2/H3 (strict hierarchy, no skipped levels), CTAs (link every CTA to `/admissions/`), FAQ block (3–5 questions) and internal links to at least 3 sibling pages.

## Page template (every commercial page)

1. Hero: breadcrumb (inner pages only) above the H1 and nothing else; no eyebrow, no checklist, no badges inside the hero. Contents: H1, subheading, one paragraph, two buttons, coverage form (name, phone, membership policy ID, insurance carrier, "Check Your Coverage"; HIPAA icon; "Or call us 24/7 at {{PHONE}}"; "By submitting, you agree to our Privacy Policy"). On mobile the form is removed from the hero and placed immediately before the CTA section.
1b. Trust strip directly below the hero (band, no heading): Joint Commission accredited · 50+ years of combined clinical experience · Free door-to-door transportation · Day and evening programs; seals on the right. Shared component on every commercial page.
2. Body sections (H2/H3).
3. Insurance / reviews / map sections, assigned by page group (do not improvise):
   - Insurance: Home, every `/programs/*` page, `/what-we-treat/` and its three hubs, `/admissions/`, `/locations/west-palm-beach/`.
   - Reviews: Home, `/programs/`, `/therapies/`, `/about/*`, `/admissions/`, every `/what-we-treat/mental-health/*` and `/what-we-treat/substance-use/*` child page.
   - Map: Home, `/locations/west-palm-beach/`, `/admissions/`, every `/programs/*` page, `/about/`.
   - Therapy child pages (`/therapies/*`) carry reviews only. State at the top of each page which of the three it includes.
4. FAQ section.
5. CTA section.
6. Footer.

Non-commercial pages (privacy policy) get none of these sections, not even FAQs. Header uses a megamenu (structure below).

## Final sitemap (commercial pages, phase 1)

```
/                                              Home
/programs/                                     Levels of Care hub
/programs/php/                                 Partial Hospitalization Program (Mon–Fri 9am–1pm)
/programs/iop/                                 Intensive Outpatient Program: Day (3 days/wk) & Evening (Mon/Wed/Thu 6–9pm)
/programs/outpatient/                          Outpatient Program (1 day/wk)
/programs/psychiatry-medication-management/    Psychiatric care & medication management (Telemed Clinix, continues after discharge; MAT via outside referral)
/what-we-treat/                                What We Treat hub
/what-we-treat/substance-use/                  Substance Use Disorders (step-down framing; no inpatient claims)
/what-we-treat/substance-use/alcohol/
/what-we-treat/substance-use/cocaine/          Cocaine & crack
/what-we-treat/substance-use/opioids/          After detox; MAT-friendly via outside provider
/what-we-treat/substance-use/benzodiazepines/  After medically supervised detox
/what-we-treat/mental-health/                  Mental Health Treatment
/what-we-treat/mental-health/depression/
/what-we-treat/mental-health/anxiety/
/what-we-treat/mental-health/trauma-ptsd/      Trauma-informed; EMDR-informed only
/what-we-treat/mental-health/bipolar-disorder/
/what-we-treat/mental-health/personality-disorders/
/what-we-treat/mental-health/adhd/             Note: stimulants not permitted in program
/what-we-treat/dual-diagnosis/                 Integrated dual diagnosis
/therapies/                                    Therapies hub (stabilization → insight → integration)
/therapies/internal-family-systems/            IFS
/therapies/psychodynamic-therapy/              Psychodynamic therapy & inner child work
/therapies/cbt/
/therapies/dbt/
/therapies/psychodrama/
/therapies/family-therapy/                     Family systems; first-week family contact; biweekly/monthly sessions
/therapies/group-therapy/                      Single-facilitator continuous group; gender-specific days; carefrontation
/admissions/                                   Admissions / Get Help Now (form page; enrolled within 24h; free VOB)
/admissions/insurance/                         Medicaid: Sunshine Health, AmeriHealth Caritas, Molina, Community Care Plan · Aetna, Florida Blue, Cigna, Oscar, Ambetter, UnitedHealthcare
/admissions/faq/
/admissions/what-to-expect/                    A day at Sunview; Uber Health transportation; random drug testing; weekly individual session
/admissions/for-families/                      Family language; how families are involved
/about/                                        About Sunview Wellness
/about/our-team/                               Team bios (from current /about-us/)
/about/our-approach/                           In-vivo recovery; outcomes (BAM, PHQ-9, GAD-7, RSA-R); alumni follow-up
/locations/west-palm-beach/                    4802 East Ave, West Palm Beach, FL 33407 (license # and GBP pending)
/privacy-policy/
/blog/                                         Phase 2: do not write yet
```

## Header structure

Desktop: logo left (primary lockup, links to `/`) · main nav center · phone + CTA right. Sticky on scroll, white background, `hairline` bottom border. Mobile: logo + hamburger; full-screen menu with accordions; a fixed bottom bar with `Call {{PHONE}}` and `Get Help Now`.

```
[Logo]   Programs ▾   What We Treat ▾   Therapies ▾   Admissions ▾   About ▾   Blog        📞 {{PHONE}}   [ Get Help Now ]
```

**Programs ▾**
- Partial Hospitalization (PHP) → /programs/php/
- Intensive Outpatient (IOP) → /programs/iop/
- Outpatient Program (OP) → /programs/outpatient/
- Psychiatry & Medication → /programs/psychiatry-medication-management/
- Compare levels of care → /programs/

**What We Treat ▾** (mega menu, three columns)
- Substance use → /what-we-treat/substance-use/ · Alcohol · Cocaine & crack · Opioids · Benzodiazepines
- Mental health → /what-we-treat/mental-health/ · Depression · Anxiety · Trauma & PTSD · Bipolar disorder · Personality disorders · ADHD
- Dual diagnosis → /what-we-treat/dual-diagnosis/

**Therapies ▾**
- Internal Family Systems (IFS) · Psychodynamic & inner child work · CBT · DBT · Psychodrama · Family therapy · Group therapy · Our clinical approach → /about/our-approach/

**Admissions ▾**
- Get help now → /admissions/ · Insurance & payment · What to expect · For families · FAQ

**About ▾**
- About Sunview · Our team · Our approach & outcomes · West Palm Beach location → /locations/west-palm-beach/

**CTA button**: `Get Help Now` → /admissions/ (`sun-yellow` fill, `charcoal` text). Secondary text link next to phone: `Verify insurance` → /admissions/insurance/.

## Footer (for reference)

Four columns: Programs · What We Treat · Admissions & About · Contact (address, `{{PHONE}}`, hours Mon–Fri 9am–1pm / evening IOP Mon, Wed, Thu 6–9pm). Below: Joint Commission seal, accepted-insurance logos, Privacy Policy, © Sunview Wellness.

## Start

Begin with `/` (Home). Wait for approval before moving to `/programs/`.
