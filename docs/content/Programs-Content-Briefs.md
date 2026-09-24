# Programs: content briefs for 5 pages

Build in this order: IOP, PHP, OP, Psychiatry & Medication Management, then the hub. Every page follows the site template (hero with coverage form; body; rotation sections; FAQ; CTA; footer) and the sitewide rules already given: H1 = keyword + West Palm Beach, keyword H2s, section eyebrows as `<span>` (never above the H1), descriptive anchors, no "client", no em dashes, one shared form component, phone through the CTM helper only.

**Rules for all five pages**
- Sources: Client Wiki (2026-09-22) first, Clinical Director questionnaire second. Cite the source next to each factual claim in your working notes.
- **No length-of-stay figures anywhere** (no "60–90 days", no "130 days"). Use "extended care, typically several months, adjusted to your progress". `[Pending Elizabeth: whether LOS figures can be published.]`
- Hero: breadcrumb above the H1 and nothing else. No eyebrow, no checklist inside the hero. The hero is H1, subheading, one paragraph, two buttons, coverage form. Trust content (accreditation, experience, transportation, schedule) goes in the trust strip below the hero, the same component as Home.
- Rotation sections on every program page: **Insurance** and **Map**. Reviews only on the hub.
- Reuse the Home weekly schedule chart on all four program pages, with the page's own program highlighted and the others muted.
- **Reviewed-by byline in the hero**, directly under the subheading (after the H1, never above it): small avatar + `Reviewed by Frank Galimidi, CASAC, CAP, CRADC, ICADC, NCAC II, SAP · Chief Executive Officer · Updated {{DATE}}`, linked to `/our-team/frank-galimidi/`. Add `reviewedBy` (Person) to the page schema. No separate reviewed-by block before the FAQ.
- Scope lines that must appear on every program page, positively framed: no detox, no residential, no housing; "if you need one of those first, we'll help you get there and plan Sunview as your next step".
- Length: 900–1,200 words of visible copy per page (hub 700–900).
- Schema per page: MedicalOrganization reference + `MedicalTherapy`/`MedicalProcedure` for the program + BreadcrumbList (Home › Programs › Page) + FAQPage.
- Interlinks per page: the other three programs, the hub, `/what-we-treat/substance-use/`, `/what-we-treat/dual-diagnosis/`, `/admissions/`, `/admissions/insurance/`, `/therapies/group-therapy/`, `/locations/west-palm-beach/`. Anchors name the destination.

---

## 1. `/programs/iop/` Intensive Outpatient Program

- Meta title: `Intensive Outpatient Program (IOP) in West Palm Beach | Sunview`
- Meta description: `Day and evening IOP in West Palm Beach for substance use and co-occurring conditions. 3 days a week, keep your job, free transportation. Joint Commission accredited.`
- Keywords: iop west palm beach (primary), intensive outpatient program west palm beach, evening iop west palm beach, iop near me, intensive outpatient program florida.
- H1: `Intensive Outpatient Program in West Palm Beach`
- Subheading: `Real clinical depth, three days a week, on a schedule that fits your life.`

Sections (H2):
1. `What the Intensive Outpatient Program Is` — 3 days/week, group plus weekly individual session, psychiatry through Telemed Clinix, random drug testing (Q7). Who it fits: working adults, parents, students, step-down from PHP or residential (Q6, Wiki ICP).
2. `Day IOP: 3 Days a Week, 9 AM to 1 PM` — days chosen around the person's schedule (Q7); single facilitator for the whole morning (Q7).
3. `Evening IOP: Monday, Wednesday and Thursday, 6 to 9 PM` — built for people who work days (Wiki opportunity); same clinical content as day IOP. This is the section that must rank for "evening iop west palm beach"; give it its own anchor `#evening-iop`.
4. `A Typical IOP Session at Sunview` — continuous group, breaks, carefrontation culture (Q14), gender-specific days every other Thursday (Q12), family contact in week one (Q13).
5. `Who IOP Is Right For, and Who Needs More First` — ASAM-informed placement by the Clinical Director (Q4); positive scope lines.
6. Weekly schedule chart (IOP highlighted).
7. Insurance section. 8. Map section.
9. `Frequently Asked Questions About IOP` — 5: Can I keep working? · How is IOP different from PHP? · How long does IOP last? (no figures) · Is evening IOP the same program? · Does insurance cover IOP?
10. CTA.

---

## 2. `/programs/php/` Partial Hospitalization Program

- Meta title: `Partial Hospitalization Program (PHP) in West Palm Beach | Sunview`
- Meta description: `PHP in West Palm Beach: Monday to Friday, 9 AM to 1 PM, 20 hours a week of structured outpatient treatment. Sleep at home. Free transportation. Joint Commission accredited.`
- Keywords: php west palm beach, partial hospitalization program west palm beach, php program florida, day treatment west palm beach.
- H1: `Partial Hospitalization Program in West Palm Beach`
- Subheading: `Full mornings of treatment, five days a week, and your own bed every night.`

Sections (H2):
1. `What the Partial Hospitalization Program Is` — Mon–Fri 9–1, 20 hrs/week (Wiki); one continuous group with one facilitator (Q7); weekly individual session; psychiatry via Telemed Clinix; Uber Health transportation (Q7).
2. `Who PHP Is Designed For` — stepping down from detox or residential, or anyone needing the most structure while living at home (Q5, Q6, Wiki ICP). PHP is not a residential program: no housing, no overnight care (Wiki).
3. `A Day in PHP at Sunview` — arrival, group block, breaks, Telemed appointment in a private office, individual session, drug testing (Q7).
4. `Stabilization, Insight, Integration: How PHP Fits the Continuum` — from Q20; PHP → IOP → OP with the same team.
5. `Who Needs a Higher Level of Care First` — positive scope lines (detox for benzos/opioids after extended use, methadone maintenance elsewhere) (Q3, Q5).
6. Weekly schedule chart (PHP highlighted). 7. Insurance. 8. Map.
9. `Frequently Asked Questions About PHP` — 5: Is PHP inpatient? · What are the hours? · Can I work during PHP? (afternoons/evenings free) · What happens after PHP? · Is PHP covered by insurance?
10. CTA.

---

## 3. `/programs/outpatient/` Outpatient Program

- Meta title: `Outpatient Program (OP) in West Palm Beach | Sunview Wellness`
- Meta description: `Outpatient program in West Palm Beach: one day a week, 9 AM to 1 PM, any weekday. Ongoing support after PHP or IOP while life gets back to normal.`
- Keywords: outpatient rehab west palm beach, outpatient program west palm beach, outpatient addiction treatment west palm beach, outpatient mental health treatment west palm beach (co-occurring framing).
- H1: `Outpatient Program in West Palm Beach`
- Subheading: `One morning a week to keep the work going while life takes back the rest.`

Sections (H2):
1. `What the Outpatient Program Is` — 1 day/week, any Mon–Fri, 9–1, 4 hrs/week (Wiki); group plus individual session as clinically indicated (site FAQ).
2. `Who the Outpatient Program Is For` — step-down after PHP or IOP; longer-term maintenance (Q20); people who never entered residential but need structured support (Wiki ICP).
3. `What Changes in OP: From Insight to Integration` — real-life practice loop, in vivo (Q20, In Vivo post).
4. `Support That Continues After the Program` — Telemed Clinix continuity, follow-up after discharge (Q21). No alumni claims until confirmed.
5. `When OP Is Not Enough` — positive framing: if symptoms return, step back up to IOP or PHP with the same team.
6. Weekly schedule chart (OP highlighted). 7. Insurance. 8. Map.
9. `Frequently Asked Questions About Outpatient Treatment` — 5: How many hours a week? · Can I choose the day? · Can I start in OP without PHP or IOP? (yes, if the pre-screening supports it) · Can I move back up a level? · Does insurance cover OP?
10. CTA.

---

## 4. `/programs/psychiatry-medication-management/` Psychiatric Care & Medication Management

This page must not read as a standalone psychiatry service (PPC doc: misdirected "psychiatry" calls). The H1 and first paragraph say it is part of PHP/IOP/OP.

- Meta title: `Psychiatric Care & Medication Management in West Palm Beach | Sunview`
- Meta description: `Psychiatric evaluation and medication management, integrated into PHP, IOP and OP through our Telemed Clinix partnership. Continuity after discharge.`
- Keywords: medication management west palm beach, psychiatric care outpatient rehab, dual diagnosis medication management, telepsychiatry addiction treatment.
- H1: `Psychiatric Care and Medication Management in West Palm Beach`
- Subheading: `Included in treatment at Sunview, not a separate appointment you have to chase.`

Sections (H2):
1. `Psychiatry Built Into Your Treatment Program` — provided through Telemed Clinix, MDs/ARNPs/PAs; appointments happen virtually from a private office at Sunview and are scheduled for you (Q1, Q7, site About). First line: available to people enrolled in PHP, IOP or OP.
2. `Medication Management During Treatment` — evaluation, review of current medications, adjustments; prescriptions sent to the person's pharmacy (Q1, Q2).
3. `Continuing With the Same Provider After Discharge` — continuity is the differentiator (Q1, Q21, Wiki).
4. `Suboxone, Vivitrol and Other Medications: How We Coordinate` — abstinence-based but medication-friendly (Q3); MAT medications prescribed and managed by an outside qualified provider, Sunview coordinates or refers; no methadone maintenance; injectables through an outside provider (Q1, Q2). Positive framing throughout.
5. `Why Medication Is One Part of the Work` — medication plus therapy (Q2 closing).
6. Insurance. 7. Map.
8. `Frequently Asked Questions About Medication at Sunview` — 5: Do you have a psychiatrist on staff? (answer: through Telemed Clinix, integrated) · Can I keep my current medications? · Can I stay on Suboxone or Vivitrol? · What if I'm on methadone? · Can I keep seeing the provider after treatment?
9. CTA.

---

## 5. `/programs/` Levels of Care (hub)

- Meta title: `Outpatient Levels of Care in West Palm Beach: PHP, IOP, OP | Sunview`
- Meta description: `Compare PHP, IOP and OP at Sunview Wellness in West Palm Beach. Hours, who each level is for, and how the Clinical Director recommends the right one.`
- Keywords: levels of care outpatient rehab, php vs iop, outpatient treatment programs west palm beach, addiction treatment programs west palm beach.
- H1: `Outpatient Treatment Programs in West Palm Beach`
- Subheading: `Three levels of care, one team the whole way through.`

Sections (H2):
1. `PHP, IOP and OP Compared` — comparison table (H3 per column): schedule, hours/week, best for, typical entry point, what continues (individual session, psychiatry, transportation). Anchors: `Partial Hospitalization Program`, `Intensive Outpatient Program`, `Outpatient Program`.
2. `How the Clinical Director Recommends Your Level of Care` — pre-screening, ASAM criteria, clinical judgment (Q4); "an inappropriate level of care is a disservice".
3. `Moving Between Levels as You Progress` — step-down and step-up with the same team (Q20).
4. `Psychiatric Care at Every Level` — short block linking to the psychiatry page.
5. `What Sunview Does Not Offer, and Where We Send You` — positive framing (detox, residential, housing, methadone maintenance).
6. Weekly schedule chart (all four levels).
7. Insurance. 8. Reviews. 9. Map.
10. `Frequently Asked Questions About Levels of Care` — 5: What is the difference between PHP and IOP? · Do I have to start with PHP? · How do you decide my level? · Can I switch levels? · Is any of this residential?
11. CTA.
