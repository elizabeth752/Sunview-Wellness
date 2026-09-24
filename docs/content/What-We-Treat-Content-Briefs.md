# What We Treat: megamenu spec + content briefs for 14 pages

Build order: substance-use hub → mental-health hub → dual-diagnosis → what-we-treat hub (tier 1, launch), then the 10 child pages (tier 2). Every page follows the site template and the sitewide rules already given (breadcrumb only above the H1; no eyebrow or checklist in the hero; keyword H1 with West Palm Beach; keyword H2s; descriptive anchors; no "client"; no em dashes; shared form; trust strip below the hero; phone through the CTM helper).

## Assumptions taken (Jhonatan can veto)
- Substance child pages describe treatment in PHP/IOP/OP only; opioid and benzodiazepine pages are framed as step-down after medically supervised detox.
- Mental-health pages use the co-occurring framing everywhere (Wiki: no standalone mental health).
- ADHD page states that stimulant medications are not used during the program and that medication decisions are made by the Telemed Clinix provider.
- Trauma page never claims EMDR as a service (EMDR-informed practice only, individual sessions, when clinically appropriate).

---

## Megamenu (header)

"What We Treat" is the only megamenu; the other items stay single-column dropdowns.

```
WHAT WE TREAT ▾
┌─────────────────────────┬──────────────────────────────┬─────────────────────────┐
│ Substance use           │ Co-occurring mental health   │ Dual diagnosis          │
│ (link → /substance-use/)│ (link → /mental-health/)     │ (link → /dual-diagnosis/)│
│ Alcohol                 │ Depression                   │ One line: "When         │
│ Cocaine & crack         │ Anxiety                      │ substance use and       │
│ Opioids                 │ Trauma & PTSD                │ mental health feed      │
│ Benzodiazepines         │ Bipolar disorder             │ each other."            │
│                         │ Personality disorders        │ → Dual diagnosis        │
│                         │ ADHD                         │   treatment             │
└─────────────────────────┴──────────────────────────────┴─────────────────────────┘
  All conditions we treat → /what-we-treat/
```
- Column titles are links to the category pages; children link to their pages; anchors are the condition names.
- Panel opens on hover and on click, closes on Esc and outside click; keyboard navigable; `aria-expanded`; panel width capped so it never overflows the viewport at 1024–1280.
- Mobile: accordion "What We Treat" → three sub-accordions (Substance use, Co-occurring mental health, Dual diagnosis) with the same links, plus "All conditions we treat".
- Breadcrumb pattern for this branch: Home › What We Treat › Substance Use › Alcohol (BreadcrumbList schema matches).

---

## Rules for all 14 pages
- Sources: Client Wiki (2026-09-22) first, Clinical Director questionnaire second. Cite the source in working notes.
- No length-of-stay figures. `[Pending Elizabeth]`
- Rotation: `/what-we-treat/` → Insurance. Category pages and dual diagnosis → Insurance + Reviews. Child pages → Reviews only.
- Reviewed-by byline in the hero, directly under the subheading (after the H1): avatar + name, credentials, title, `Updated {{DATE}}`, linked to the person's `/our-team/` page; `reviewedBy` in schema. Dana Martin (`Ph.D., LMFT, MCAP, QS · Clinical Director`) on the mental-health category, dual diagnosis and all six mental-health child pages; Frank Galimidi on `/what-we-treat/`, the substance-use category and the four substance pages. No reviewed-by block before the FAQ.
- Every page ends with: which level of care usually fits, positive scope line (detox/residential first when needed), and links to `/programs/`, `/admissions/`, `/programs/psychiatry-medication-management/`, sibling pages and the parent category.
- Length: category pages 900–1,200 words; child pages 800–1,000; `/what-we-treat/` 600–800.
- Schema: BreadcrumbList + FAQPage on every page; `MedicalCondition` on child pages (name only, no invented prevalence stats); `MedicalOrganization` reference.

---

## A. `/what-we-treat/` What We Treat (menu page)
- Meta title: `Conditions We Treat in West Palm Beach | Sunview Wellness`
- Meta description: `Substance use, co-occurring mental health conditions and dual diagnosis, treated together in PHP, IOP and OP in West Palm Beach.`
- H1: `Substance Use and Mental Health Conditions We Treat in West Palm Beach`
- Subheading: `Treated as one picture, because that is how they show up in real life.`
- H2s: `Substance Use Disorders We Treat` (card + 4 links) · `Co-Occurring Mental Health Conditions We Treat` (card + 6 links) · `Dual Diagnosis: When Both Are Present` (card + link) · `How We Look Beneath the Presenting Symptom` (iceberg / onion layers, Q8, Q10) · `Not Sure What You Need? Start With a Conversation` (Q23 language, link to admissions) · Insurance · FAQ (What if I have both? · Do you treat mental health on its own? [honest: alongside substance use, Wiki] · Do you treat eating disorders or gambling? [secondary concerns only, Q19] · Which level of care do I need? · Does insurance cover it?) · CTA.

## B. `/what-we-treat/substance-use/` Substance Use Disorder Treatment
- Meta title: `Substance Use Disorder Treatment in West Palm Beach | Sunview`
- Meta description: `Outpatient treatment for alcohol, cocaine, opioid and benzodiazepine addiction in West Palm Beach. PHP, IOP and OP. Keep your job, sleep at home, free transportation.`
- Keywords: drug rehab west palm beach, addiction treatment west palm beach, substance abuse treatment west palm beach, alcohol rehab west palm beach, outpatient drug rehab west palm beach.
- H1: `Substance Use Disorder Treatment in West Palm Beach`
- Subheading: `Sobriety removes the substance. Recovery examines the life around it.`
- H2s: `Substances We Treat Most Often` (alcohol and crack cocaine are the most common, Q16; cards to alcohol, cocaine, opioids, benzodiazepines) · `Outpatient Addiction Treatment: PHP, IOP and OP` (levels, Q7) · `Abstinence-Based, Medication-Friendly` (Q3: no marijuana, stimulants, opioids or benzos during the program; naltrexone and Suboxone welcome via outside provider) · `Going Deeper Than Coping Skills` (psychodynamic, inner child, IFS, carefrontation, Q8, Q9, Q11, Q14) · `When You Need Detox or Residential First` (positive framing, Q3, Q5) · `Family Involvement in Addiction Treatment` (Q13, Q15, link to family therapy) · Insurance · Reviews · FAQ (Do you offer detox? · Can I keep working? · What if I'm on Suboxone? · How do you decide PHP vs IOP? · Do you treat alcohol and drugs together?) · CTA.

## C. `/what-we-treat/mental-health/` Co-Occurring Mental Health Treatment
- Meta title: `Co-Occurring Mental Health Treatment | West Palm Beach`
- Meta description: `Depression, anxiety, trauma, bipolar and personality disorders treated alongside substance use in PHP, IOP and OP in West Palm Beach, with psychiatric care included.`
- Keywords: mental health treatment west palm beach, outpatient mental health treatment west palm beach, co-occurring disorders treatment, dual diagnosis mental health west palm beach.
- H1: `Co-Occurring Mental Health Treatment in West Palm Beach`
- Subheading: `Mental health and substance use, treated together by one team.`
- Opening paragraph must state that Sunview treats these conditions alongside substance use within its outpatient programs (Wiki).
- H2s: `Mental Health Conditions We Treat Alongside Substance Use` (cards to the 6 pages; personality, anxiety, depressive and trauma-related disorders are the most frequent, Q16) · `Why We Treat Mental Health and Substance Use Together` (Q17 cycle) · `Psychiatric Care and Medication Management Included` (Telemed Clinix, Q1) · `Therapies We Use for Co-Occurring Conditions` (IFS, psychodynamic, CBT, DBT, trauma-informed; Q10, Q18) · `When a Higher Level of Care Is Needed` (Q19: significant worsening, safety risk → referral; positive framing) · Insurance · Reviews · FAQ (Do you treat mental health without substance use? [honest answer] · Is there a psychiatrist? · Can I keep my medications? · Which conditions do you see most? · What if my symptoms get worse?) · CTA.

## D. `/what-we-treat/dual-diagnosis/` Dual Diagnosis Treatment
- Meta title: `Dual Diagnosis Treatment in West Palm Beach | Sunview Wellness`
- Meta description: `Integrated dual diagnosis treatment in West Palm Beach: substance use and mental health treated as one picture in PHP, IOP and OP, with psychiatry included.`
- Keywords: dual diagnosis treatment west palm beach, dual diagnosis treatment centers florida, co-occurring disorders treatment west palm beach, integrated dual diagnosis treatment.
- H1: `Dual Diagnosis Treatment in West Palm Beach`
- Subheading: `When substance use and mental health feed each other, we treat the cycle, not two separate problems.`
- H2s: `What Dual Diagnosis Means` (Q17 definition) · `What "Integrated" Looks Like in Practice` (Q17: one team, one plan, the relationship between both) · `Dual Diagnosis Treatment Across PHP, IOP and OP` · `Psychiatry, Medication and Therapy Working Together` (Q1, Q2) · `Understanding the Why Behind the Behavior` (psychodynamic, family systems, Q8, Q15) · `Who Dual Diagnosis Treatment Is Right For` (step-down, adults 18+, medically and psychiatrically stable; positive scope) · Insurance · Reviews · FAQ (What is dual diagnosis? · Do you treat both at the same time? · Do I need a diagnosis to start? · Is medication required? · What if one condition is more severe?) · CTA.

---

## Child pages: substance use (Reviews only; Reviewed-by Frank)

Common H2 skeleton for all four: `Signs [Substance] Use Has Become a Problem` · `How Sunview Treats [Substance] Addiction` · `Which Level of Care Fits` · `[Substance] and Co-Occurring Mental Health` · `When Detox Comes First` (where applicable) · Reviews · FAQ (5) · CTA. Signs sections: general, recognizable language; no clinical statistics; no drug-use instructions.

### E. `/what-we-treat/substance-use/alcohol/`
- Meta title: `Alcohol Addiction Treatment in West Palm Beach | Sunview`
- Meta description: `Outpatient alcohol addiction treatment in West Palm Beach. PHP, IOP and OP for adults who want to stop drinking and keep their life running. Free transportation.`
- Keywords: alcohol rehab west palm beach, alcohol addiction treatment west palm beach, outpatient alcohol treatment florida, alcohol treatment program west palm beach.
- H1: `Alcohol Addiction Treatment in West Palm Beach`
- Specifics: alcohol is the most common substance at Sunview (Q16); withdrawal can be dangerous, so heavy long-term drinkers may need medically supervised detox first (Q3, positive framing); naltrexone welcome through an outside provider (Q3); evening IOP for people who work.

### F. `/what-we-treat/substance-use/cocaine/`
- Meta title: `Cocaine & Crack Addiction Treatment in West Palm Beach`
- Meta description: `Outpatient treatment for cocaine and crack cocaine addiction in West Palm Beach. Structured PHP, IOP and OP with therapy that goes beneath the craving.`
- Keywords: cocaine addiction treatment west palm beach, crack cocaine rehab west palm beach, cocaine rehab florida outpatient, stimulant addiction treatment west palm beach.
- H1: `Cocaine and Crack Addiction Treatment in West Palm Beach`
- Specifics: crack cocaine is one of the two most common substances (Q16); no medically dangerous withdrawal claims; emphasis on cravings, patterns, in-vivo practice (Q20), random drug testing (Q7).

### G. `/what-we-treat/substance-use/opioids/`
- Meta title: `Opioid Addiction Treatment in West Palm Beach | Sunview`
- Meta description: `Outpatient opioid addiction treatment in West Palm Beach after detox: PHP, IOP and OP, Suboxone and Vivitrol welcome through your prescriber, no methadone maintenance.`
- Keywords: opioid addiction treatment west palm beach, opioid rehab west palm beach, fentanyl addiction treatment florida outpatient, suboxone friendly treatment west palm beach.
- H1: `Opioid Addiction Treatment in West Palm Beach`
- Specifics: framed as the step after detox or residential (Q3, Q5); Suboxone/buprenorphine and Vivitrol/naltrexone welcome when prescribed and managed by an outside provider, Sunview coordinates or refers (Q1, Q2); methadone maintenance needs a different program, "we'll help you find it" (Q2); heroin, fentanyl, oxycodone, hydrocodone named once (Wiki).

### H. `/what-we-treat/substance-use/benzodiazepines/`
- Meta title: `Benzodiazepine Addiction Treatment in West Palm Beach`
- Meta description: `Outpatient treatment for benzodiazepine dependence in West Palm Beach after medically supervised detox. PHP, IOP and OP with psychiatric care included.`
- Keywords: benzodiazepine addiction treatment west palm beach, benzo rehab west palm beach, xanax addiction treatment florida, prescription drug addiction treatment west palm beach.
- H1: `Benzodiazepine Addiction Treatment in West Palm Beach`
- Specifics: a prescription does not by itself mean someone fits outpatient care; dose, frequency and duration matter; extended use usually means detox and stabilization first (Q3, Q5); anxiety treated as the co-occurring concern (link to anxiety page); Xanax, Valium, Ativan, Klonopin named once (Wiki).

---

## Child pages: co-occurring mental health (Reviews only; Reviewed-by Dana)

Common H2 skeleton for all six: `How [Condition] and Substance Use Feed Each Other` · `Treating [Condition] Alongside Addiction at Sunview` · `Therapy Approaches We Use` · `Psychiatric Care and Medication` · `Which Level of Care Fits` · Reviews · FAQ (5) · CTA. The first paragraph of every page states that the condition is treated as part of dual diagnosis care within PHP, IOP or OP.

### I. `/what-we-treat/mental-health/depression/`
- Meta title: `Depression and Addiction Treatment in West Palm Beach`
- Meta description: `Depression treated alongside substance use in West Palm Beach. Outpatient PHP, IOP and OP with therapy and psychiatric medication management.`
- Keywords: depression treatment west palm beach, depression and addiction treatment, outpatient depression treatment florida, co-occurring depression substance use.
- H1: `Depression and Addiction Treatment in West Palm Beach`
- Specifics: depressive disorders among the most frequent (Q16); PHQ-9 tracked through treatment (Q22); substance use as a way of coping that worsens symptoms (Q17).

### J. `/what-we-treat/mental-health/anxiety/`
- Meta title: `Anxiety and Addiction Treatment in West Palm Beach | Sunview`
- Meta description: `Anxiety and panic treated alongside substance use in West Palm Beach. Outpatient care with therapy, psychiatric support and no benzodiazepines during the program.`
- Keywords: anxiety treatment west palm beach, anxiety and addiction treatment, panic disorder treatment west palm beach, co-occurring anxiety substance use.
- H1: `Anxiety and Addiction Treatment in West Palm Beach`
- Specifics: anxiety disorders among the most frequent (Q16); GAD-7 tracked (Q22); benzodiazepines are not used during the program, medication managed by Telemed Clinix (Q3); DBT and CBT skills plus deeper work (Q10, Q11).

### K. `/what-we-treat/mental-health/trauma-ptsd/`
- Meta title: `Trauma and PTSD Treatment with Addiction Care | West Palm Beach`
- Meta description: `Trauma-informed treatment for PTSD alongside substance use in West Palm Beach. Outpatient PHP, IOP and OP with psychodynamic, IFS and DBT-based care.`
- Keywords: trauma treatment west palm beach, ptsd and addiction treatment, trauma informed addiction treatment florida, ptsd outpatient treatment west palm beach.
- H1: `Trauma and PTSD Treatment in West Palm Beach`
- Specifics: trauma-related disorders frequent (Q16); every clinician trauma-informed (Q18); pace matters, deeper work when stable (Q20); IFS and inner child work (Q8, Q9); **no EMDR claim**; at most "EMDR-informed techniques may be used in individual sessions when clinically appropriate" (Q18).

### L. `/what-we-treat/mental-health/bipolar-disorder/`
- Meta title: `Bipolar Disorder and Addiction Treatment in West Palm Beach`
- Meta description: `Bipolar disorder treated alongside substance use in West Palm Beach. Outpatient care with psychiatric medication management through Telemed Clinix.`
- Keywords: bipolar disorder treatment west palm beach, bipolar and addiction treatment, co-occurring bipolar substance use treatment florida.
- H1: `Bipolar Disorder and Addiction Treatment in West Palm Beach`
- Specifics: confirmed by client (2026-09-22); emphasis on medication continuity and stability before deeper work (Q2, Q20); higher level of care if psychiatric symptoms significantly worsen (Q19, positive framing). No clinical detail beyond the sources.

### M. `/what-we-treat/mental-health/personality-disorders/`
- Meta title: `Personality Disorder and Addiction Treatment | West Palm Beach`
- Meta description: `Personality disorders treated alongside substance use in West Palm Beach. DBT, IFS and psychodynamic work in outpatient PHP, IOP and OP.`
- Keywords: personality disorder treatment west palm beach, borderline personality disorder and addiction treatment, dbt treatment west palm beach, co-occurring personality disorder substance use.
- H1: `Personality Disorder and Addiction Treatment in West Palm Beach`
- Specifics: among the most frequent presentations (Q16); DBT, IFS, relational and family-systems lens (Q10, Q15); carefrontation and group culture (Q14); therapeutic alliance (Gabriel's focus, site).

### N. `/what-we-treat/mental-health/adhd/`
- Meta title: `ADHD and Addiction Treatment in West Palm Beach | Sunview`
- Meta description: `ADHD treated alongside substance use in West Palm Beach. Structure, skills and psychiatric care in outpatient PHP, IOP and OP, without stimulant medications during the program.`
- Keywords: adhd and addiction treatment, adhd treatment west palm beach adults, co-occurring adhd substance use treatment florida.
- H1: `ADHD and Addiction Treatment in West Palm Beach`
- Specifics: confirmed by client (2026-09-22); stimulant medications (Adderall and similar) are not used during the program, and a prescription does not by itself determine fit (Q3); medication decisions by the Telemed Clinix provider; structure, routine, skills groups (life skills, emotional regulation, Wiki: Mia's groups list) as the treatment emphasis. Positive framing, no judgment.

---

## Redirect map reminder for this branch
`/conditions-we-treat/` → `/what-we-treat/` · `/substance-use-disorder/` and legacy `/substance-abuse/` and `/drug-rehab-west-palm-beach/` → `/what-we-treat/substance-use/` · legacy `/mental-health/` → `/what-we-treat/mental-health/` · `/dual-diagnosis/` → `/what-we-treat/dual-diagnosis/`.
