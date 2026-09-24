# For Professionals + Location: content briefs for 2 pages (tier 1)

Sitewide rules apply. Legal pages (privacy, terms, HIPAA notice) are footer-only, never in the header menu.

## Decisions taken (Jhonatan can veto)
- `/for-professionals/` uses a referral variant of the shared form (same component, different field set) instead of the coverage form.
- `/locations/west-palm-beach/` uses the standard coverage form and carries the LocalBusiness schema for the whole site.
- License and Joint Commission ID stay as placeholders `{{DCF_LICENSE}}`, `{{JC_ID}}`.

---

## A. `/for-professionals/` For Professionals / Make a Referral
- Meta title: `Refer a Patient | For Professionals | Sunview Wellness`
- Meta description: `Refer a patient to outpatient PHP, IOP or OP in West Palm Beach. Same-day response, free benefits check, step-down from detox and residential. Joint Commission accredited.`
- Keywords: refer a patient outpatient rehab west palm beach, php iop referral florida, step down program referral west palm beach, addiction treatment referral partners.
- H1: `Refer a Patient to Outpatient Treatment in West Palm Beach`
- Subheading: `Step-down PHP, IOP and OP for adults, with the continuity your patients need after detox or residential care.`
- Hero form (referral variant, no placeholders): Your name · Organization · Phone · Email · Patient's current level of care (select: detox / residential / hospital / outpatient / other) · Notes. Button `Send referral`. Same CTM proxy; `custom_fields[referral_source]` and `[organization]` sent to CTM `[Oriana to map fields]`. Line: `Or call admissions directly at {{PHONE}}.`
- H2s:
  1. `Who Is a Good Fit for Sunview` — adults 18+, medically and psychiatrically stable, stepping down from detox/residential or entering from the community; co-occurring welcome; abstinence-based, medication-friendly (naltrexone/Suboxone via outside prescriber) (Q3, Q5, Q6, Wiki).
  2. `Who Needs a Different Level of Care First` — positive framing: acute withdrawal risk, 24-hour care needs, methadone maintenance, primary eating disorder or process addiction, acute psychiatric instability (Q3, Q19). "We'll tell you quickly and help route."
  3. `Levels of Care and Schedules` — PHP, day/evening IOP, OP table; free transportation (Wiki).
  4. `How the Referral Process Works` — H3 steps: 1 Send the form or call · 2 Same-day pre-screening review by the Clinical Director (ASAM-informed, Q4) · 3 Free benefits verification · 4 Admission and warm handoff; you receive confirmation of admission `[to confirm what feedback is shared, with consent]`.
  5. `Clinical Model Your Patients Continue Into` — one continuous group, weekly individual session, psychiatry via Telemed Clinix that continues after discharge, family contact in week one, outcomes tracked with BAM/PHQ-9/GAD-7 (Q7, Q13, Q22).
  6. `Insurance We Work With` — commercial first, then Medicaid plans; free VOB.
  7. `Meet Our Outreach and Clinical Leadership` — Scott Belovicz (Director of Business Development), Dana Martin (Clinical Director); links to their pages.
  8. Map (address, hours) · FAQ (5: How fast do you respond to referrals? · Do you accept patients still on Suboxone? · Do you take Medicaid referrals? · Can a patient start in IOP directly? · Do you provide progress updates?) · CTA (`Send a referral` scrolls to form · `Call {{PHONE}}`).
- Schema: BreadcrumbList + FAQPage + MedicalOrganization reference.
- Redirects into this page: `/referral/`, `/referral-2/`, `/test-make-a-referral/` (already in the map).

## B. `/locations/west-palm-beach/` West Palm Beach Location
- Meta title: `Sunview Wellness West Palm Beach | Outpatient Rehab Location`
- Meta description: `Sunview Wellness at 4802 East Ave, West Palm Beach, FL 33407. PHP, IOP and OP with free transportation across Palm Beach County. Directions, hours and parking.`
- Keywords: outpatient rehab west palm beach fl, addiction treatment center west palm beach fl, iop west palm beach location, rehab near me west palm beach.
- H1: `Outpatient Rehab Center in West Palm Beach, FL`
- Subheading: `Easy to reach, and we'll get you here if you can't drive.`
- H2s:
  1. `Address, Hours and Contact` — 4802 East Ave, West Palm Beach, FL 33407 · program hours (PHP Mon–Fri 9–1; Day IOP 3 days 9–1; Evening IOP Mon/Wed/Thu 6–9; OP 1 day 9–1) · `{{PHONE}}` · email from Wiki · map embed (Place ID `ChIJbzYD7xTV2IgRubmVOC4bOs4`) · `Get directions` to the public Maps link.
  2. `Free Transportation Across Palm Beach County` — Uber Health to and from programming; no mileage figure (Wiki, Q7).
  3. `Getting Here` — parking and transit `[to confirm with Elizabeth]`; write only what is verifiable, otherwise omit the section.
  4. `Programs at This Location` — PHP, IOP, OP, psychiatry cards.
  5. `Accreditation and Licensing` — Joint Commission accredited (seal, `{{JC_ID}}` link), Florida DCF license `{{DCF_LICENSE}}`, founded 2021, formerly Sunview Medical Center.
  6. `Who We Serve in West Palm Beach` — adults 18+, English and Spanish, LGBTQ+ friendly (Wiki), wheelchair accessibility `[to confirm]`.
  7. Insurance section · Reviews (Google) · FAQ (5: Where exactly are you? · Is parking available? `[to confirm]` · Do you pick me up? · What are your hours? · Are you a residential facility?) · CTA.
- Schema: `LocalBusiness` (type MedicalClinic or MedicalOrganization): name, address, geo, telephone (CTM helper), openingHoursSpecification per program, sameAs (Maps, social), aggregateRating (4.5, 17), foundingDate 2021, hasMap. This is the only page with LocalBusiness; other pages reference the organization.
- Redirect into this page: legacy `/location/` (3.6k impressions).
