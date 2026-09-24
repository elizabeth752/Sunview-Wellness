# Admissions: content briefs for 9 pages

Build order (tier 1): `/admissions/` → `/admissions/insurance/` → `/admissions/faq/`. Tier 2: `/admissions/what-to-expect/`, `/admissions/for-families/`, then the 5 payer pages from the shared template in section F.

Same sitewide rules as the other briefs (breadcrumb only above the H1; no eyebrow or checklist in the hero; keyword H1 with West Palm Beach; keyword H2s; descriptive anchors; no "client"; no em dashes; trust strip below the hero; phone through the CTM helper; no length-of-stay figures `[Pending Elizabeth]`).

## Decisions taken (Jhonatan can veto)
- `/admissions/` uses the same shared coverage form in the hero as every other page. There is no second form on the page; the body explains the process and every section's CTA scrolls to the form. On mobile the form sits before the CTA section, as everywhere.
- Payer pages are in this document as one template with per-page variables (section F), built in tier 2.
- No reviewed-by byline on Admissions pages until the service-page byline question is settled.
- Admissions process steps and "what to bring" are written from standard outpatient practice and marked `[to confirm]` in source comments (Elizabeth, item 12).

## Rules for all 9 pages
- Sources: Client Wiki (2026-09-22) first, Clinical Director questionnaire second, current /faq/ and /get-help-now/ for anything to preserve.
- Rotation: `/admissions/` → Insurance + Reviews + Map. `/insurance/` and payer pages → Insurance (as their main content) + Reviews. `/faq/` → none beyond its own content. `/what-to-expect/` and `/for-families/` → Reviews.
- Every page links to `/programs/`, `/admissions/`, `/admissions/insurance/`, `/admissions/faq/` and at least two condition or therapy pages where the answer justifies it.
- Schema: BreadcrumbList on all; FAQPage on every page that shows FAQs; `/faq/` carries the full FAQPage set.
- Insurance order everywhere: commercial payers first, then Medicaid plans (CEO guardrail). Never state copays, deductibles or "100% covered".

---

## A. `/admissions/` Admissions / Get Help Now
- Meta title: `Admissions | Get Help Now at Sunview Wellness, West Palm Beach`
- Meta description: `Start outpatient treatment in West Palm Beach. One call, a free insurance check, a pre-screening with our Clinical Director, and you can often be enrolled within 24 hours.`
- Keywords: outpatient rehab admissions west palm beach, get help for addiction west palm beach, how to start rehab florida, addiction treatment admissions.
- H1: `Admissions for Outpatient Treatment in West Palm Beach`
- Subheading: `Reaching out is the hardest part. We'll listen first.`
- H2s:
  1. `What Happens When You Call` — first conversation is about listening and understanding what is happening, not convincing (Q23); who answers (admissions team, Carissa, Wiki); after-hours line routes to a person (Wiki: "24/7" is real; do not name Scott).
  2. `The Admissions Process, Step by Step` — 4 steps as H3: 1 Call or send the form · 2 Free insurance verification (VOB, Wiki) · 3 Pre-screening reviewed by the Clinical Director, ASAM-informed level of care (Q4) · 4 Intake and first day, often within 24 hours (site). `[to confirm timing]`
  3. `If You're Not Sure You Need Treatment` — ambivalence is normal; "I know I have a problem, but I don't think it's that bad" (Q23); no pressure, honest clinical feedback.
  4. `If You're Calling for Someone You Love` — family language (Q23); link to `/admissions/for-families/`.
  5. `Who Sunview Is Right For, and Who Needs Something First` — adults 18+, medically and psychiatrically stable, step-down or from home; positive scope (detox, residential, housing, methadone) with "we'll help you get there".
  6. `Free Transportation and Scheduling Around Your Life` — Uber Health, day/evening options (Q7, Wiki).
  7. Insurance section · Reviews · Map.
  8. `Frequently Asked Questions About Admissions` — 5: How soon can I start? · Do I need a referral or diagnosis? · What does the insurance check involve? · Can I stay with my current doctor or therapist? (site FAQ, verbatim) · What if I'm not ready to commit?
  9. CTA (`Get help now` scrolls to form · `Call {{PHONE}}`).

## B. `/admissions/insurance/` Insurance & Payment
- Meta title: `Insurance for Outpatient Rehab in West Palm Beach | Sunview`
- Meta description: `We verify your benefits for free before you start. In network with major commercial plans and Florida Medicaid for PHP, IOP and OP in West Palm Beach.`
- Keywords: does insurance cover outpatient rehab florida, rehab that accepts insurance west palm beach, in network outpatient rehab florida, medicaid outpatient rehab west palm beach.
- H1: `Insurance Coverage for Outpatient Rehab in West Palm Beach`
- Subheading: `In network with virtually every carrier, including Medicaid.`
- H2s:
  1. `Commercial Plans We Work With` — Aetna, Florida Blue, Cigna, UnitedHealthcare, Humana, Oscar, Ambetter (Wiki); each of the five with a page links to it (anchor = carrier name).
  2. `Florida Medicaid Plans We Accept` — Sunshine Health, AmeriHealth Caritas, Molina Healthcare, Community Care Plan (Wiki). Second, not first.
  3. `How the Free Insurance Verification Works` — what the VOB checks (in-network status, level of care authorized, whether pre-authorization is needed), who does it, before any commitment (Wiki). No benefit amounts.
  4. `What Insurance Typically Covers in Outpatient Treatment` — PHP, IOP, OP as recognized levels of care; psychiatric services through Telemed Clinix billed by that provider (Q1; state carefully, `[to confirm billing arrangement]`).
  5. `If Your Plan Isn't Listed` — "Don't see your plan? Ask us" (site); coordination with out-of-network benefits `[to confirm]`; self-pay available `[to confirm]`.
  6. `Why We Verify Before You Commit` — CEO's position that treatment should not stop because a plan runs out (Wiki, In Vivo post; link to the insurance-companies article).
  7. Reviews.
  8. FAQ — 5: Is Sunview in network with my plan? · Does Medicaid cover IOP or PHP? · What if I lose coverage during treatment? · Do you take Medicare? (honest answer from Wiki list: not listed; "ask us") · Is the insurance check really free?
  9. CTA.

## C. `/admissions/faq/` FAQ (full set)
- Meta title: `FAQs: Outpatient Rehab in West Palm Beach | Sunview Wellness`
- Meta description: `Answers to the questions people ask before they call: programs, hours, insurance, medication, family involvement, transportation and what Sunview does and doesn't offer.`
- Keywords: outpatient rehab faq, can i work during iop, does medicaid cover outpatient rehab florida, what is the difference between php and iop, sunview wellness.
- H1: `Frequently Asked Questions About Outpatient Treatment in West Palm Beach`
- Subheading: `Got questions? We have answers.` (preserve from the current page)
- Layout: intro paragraph (preserve the current "About Sunview Wellness" paragraph, with "client" check), then seven groups as H2, each question as an accordion `<button>` with H3 inside the panel disallowed (question text lives in the button, not a heading). Every answer under 90 words with one or two descriptive links. Full FAQPage schema.

  1. `Getting Started` — Where do I start? · What happens when I call? · How soon can I start? · Do I need a diagnosis or referral? · Can I continue seeing my current doctor or therapist? (site, verbatim)
  2. `Choosing a Program` — What programs does Sunview offer? (site) · What is the difference between PHP and IOP? · Can I start in OP without PHP or IOP? · How do you decide my level of care? · Can I move between levels? · What are the IOP hours? (site, verbatim) · What is the PHP schedule? (site, verbatim)
  3. `What Sunview Is and Isn't` — Do you offer detox? · Is there housing or residential treatment? · Can I see a psychiatrist without joining a program? · Do you offer individual therapy on its own? · What if I'm on methadone? (all positive framing)
  4. `Insurance and Cost` — Do you accept insurance? (site, reordered: commercial first) · Does Medicaid cover treatment? · What is a VOB? · Do you offer self-pay? `[to confirm]` · What if I lose coverage during treatment?
  5. `Daily Life in Treatment` — Can I keep working? · Is there an evening program? · Is transportation provided? (site, verbatim) · Is there drug testing? · Can I use my phone? `[to confirm]` · Where are you located? (site)
  6. `Medication` — Can I keep my current medications? · Can I stay on Suboxone or Vivitrol? · Can I take Adderall? · What about benzodiazepines? · Do you treat substance use and mental health together? (site, co-occurring framing)
  7. `Family and Life After Treatment` — Will you involve my family? · What if I don't want family involved? · What happens when I finish? · Can I keep seeing the psychiatric provider afterward? · What if I relapse?

- Do not include the current "average length of stay 60–90 days" answer.
- Closing block: `Still have questions?` with the form and `Call {{PHONE}}`.

## D. `/admissions/what-to-expect/` What to Expect
- Meta title: `What to Expect at Sunview Wellness | Outpatient Rehab West Palm Beach`
- Meta description: `A typical day in PHP, a typical evening in IOP, your first week, and what changes as treatment progresses at Sunview Wellness in West Palm Beach.`
- Keywords: what to expect outpatient rehab, first day of iop, what is php like, typical day in outpatient treatment.
- H1: `What to Expect in Outpatient Treatment at Sunview Wellness`
- Subheading: `From your first call to your last morning, here is how it works.`
- H2s: `Your First Week` (intake, biopsychosocial assessment, releases, first family contact, first Telemed appointment scheduled for you; Q13, Q7) · `A Typical PHP Morning` (9 to 1, one continuous group, breaks, individual session slot, private-office Telemed appointment; Q7) · `A Typical IOP Evening` (6 to 9, Mon/Wed/Thu; Q7) · `Gender-Specific Days and Group Culture` (every other Thursday; carefrontation; Q12, Q14) · `Transportation, Drug Testing and Ground Rules` (Uber Health; random testing; abstinence-based, no marijuana, stimulants, opioids or benzos during the program, Q3, Q7; what to bring `[to confirm]`) · `How the Work Changes Over Time` (stabilization → insight → integration; ebbs and flows are not failure; Q20) · `How We Track Your Progress` (BAM, PHQ-9, GAD-7, monthly treatment plan review, satisfaction survey; Q22) · Reviews · FAQ (5: What should I bring on day one? · Will I be in group all morning? · How often do I see my therapist? · Can I take a day off? `[to confirm]` · What happens if I have a bad week?) · CTA.

## E. `/admissions/for-families/` For Families
- Meta title: `For Families: Helping a Loved One Get Treatment | West Palm Beach`
- Meta description: `If you're calling for someone you love: what to say, what Sunview does, how families are involved in outpatient treatment in West Palm Beach, and where to start.`
- Keywords: how to help a loved one with addiction, family support addiction treatment west palm beach, how to get someone into rehab florida, family involvement outpatient rehab.
- H1: `Help for Families of Someone Struggling With Addiction in West Palm Beach`
- Subheading: `"I've tried everything." You're not alone, and you don't have to have the answers.`
- H2s: `What Families Tell Us When They Call` (Q23 language verbatim: "I don't know how to help my daughter anymore", "I'm afraid something is going to happen to him"; guilt, fear, exhaustion) · `What You Can and Can't Control` (boundaries are not abandonment, Q23; enabling and rescuing cycles, Wiki) · `How Families Are Involved at Sunview` (first-week contact with consent, updates, family sessions; Q13; link to family therapy) · `When Your Loved One Isn't Ready` (ambivalence, Q23; how to start the conversation; admissions can talk to you first) · `What Treatment Looks Like Day to Day` (short, link to what-to-expect) · `Your Own Support Matters Too` (family recovery, Q13; no specific outside programs named unless the client confirms) · Reviews · FAQ (5: Can I call on behalf of someone else? · Will you tell me how they're doing? (with consent) · Should I set boundaries? · What if they refuse treatment? · Can I attend sessions?) · CTA (`Talk to admissions`).

## F. Payer pages template (5 pages, tier 2)
URLs: `/admissions/insurance/aetna/`, `/florida-blue/`, `/cigna/`, `/unitedhealthcare/`, `/humana/`. All in network per the Wiki; if Elizabeth corrects any, change the wording to "we work with".

Variables: `{{CARRIER}}`, `{{CARRIER_SHORT}}` (e.g. "Florida Blue (Blue Cross Blue Shield of Florida)" / "Florida Blue").
- Meta title: `{{CARRIER_SHORT}} Coverage for Outpatient Rehab in West Palm Beach`
- Meta description: `Sunview Wellness is in network with {{CARRIER_SHORT}} for PHP, IOP and OP in West Palm Beach. Free benefits check before you start.`
- Keywords: `{{carrier}} rehab west palm beach`, `does {{carrier}} cover outpatient rehab`, `{{carrier}} addiction treatment florida`, `{{carrier}} iop coverage`.
- H1: `{{CARRIER_SHORT}} Coverage for Outpatient Rehab in West Palm Beach`
- Subheading: `In network for PHP, IOP and outpatient treatment. We check your benefits for free.`
- H2s: `Does {{CARRIER_SHORT}} Cover Outpatient Addiction Treatment?` (levels of care generally covered as medically necessary; specifics depend on the plan; no amounts) · `Using Your {{CARRIER_SHORT}} Plan at Sunview` (in-network, what the VOB confirms, pre-authorization when required) · `Programs Covered: PHP, IOP and OP` (cards to the three programs) · `Co-Occurring Mental Health and Psychiatric Care` (link to dual diagnosis and psychiatry pages; Telemed billing `[to confirm]`) · `Get Your {{CARRIER_SHORT}} Benefits Verified` (form) · Reviews · FAQ (5: Is Sunview in network with {{CARRIER_SHORT}}? · Do I need pre-authorization? · What if my plan is out of network? · Does {{CARRIER_SHORT}} cover IOP? · How long does verification take?) · CTA.
- Each payer page must contain at least 300 words that are specific to that carrier's plan types (HMO/PPO/EPO, Marketplace where applicable, employer plans) written generically and accurately; no invented policy names, no claims about a carrier's internal rules.
- Do not use carrier logos as links or imply endorsement; text and the carrier name only, logo in the insurance strip as today.

---

## Redirect map for this branch
`/get-help-now/` → `/admissions/` · legacy `/contact/` → `/admissions/` · `/faq/` → `/admissions/faq/` · `/referral/`, `/referral-2/`, `/test-make-a-referral/` → `/for-professionals/` (not admissions).
