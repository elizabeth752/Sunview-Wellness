# About + Our Team: content briefs for 14 pages

Build order (tier 1): `/our-team/` + 11 person pages → `/about/` → `/about/our-approach/` (tier 2).
Sitewide rules apply (breadcrumb only above the H1; no eyebrow or checklist in the hero; keyword H1 with West Palm Beach where natural; keyword H2s; descriptive anchors; no "client"; no em dashes; trust strip; phone through CTM; no length-of-stay figures `[Pending Elizabeth]`; no alumni claims).

## Decisions taken (Jhonatan can veto)
- Photos and LinkedIn are not available yet: every person page ships with `{{PHOTO}}` (branded placeholder with initials on `mist`) and `{{LINKEDIN_URL}}` (link hidden until filled). Bios come only from the Wiki and the current site; nothing from LinkedIn until Jhonatan provides the URLs.
- Frank's page includes a section on In Vivo Treatment™ and Clinical Architecture™ (sourced from the current site), linking to `/about/our-approach/`.
- No reviewed-by byline on About or team pages. Person pages carry `Person` schema instead.

## Rules for all 14 pages
- Sources: Client Wiki (2026-09-22) first; current site bios second (only where the Wiki lists the person). Every bio sentence traces to one of the two. No invented credentials, years, schools or specialties.
- Names, titles and credentials exactly as in the Wiki roster below. Where the current site disagrees, the Wiki wins.
- Rotation: `/about/` → Reviews + Map. `/about/our-approach/` → Reviews. `/our-team/` → Reviews. Person pages → none (short pages).
- Schema: BreadcrumbList on all; `AboutPage` + MedicalOrganization on `/about/`; `Person` (name, jobTitle, worksFor, image, sameAs when LinkedIn exists) + `ProfilePage` on person pages; `CollectionPage` on `/our-team/`.

---

## A. `/our-team/` Our Team (archive)
- Meta title: `Our Team | Sunview Wellness, West Palm Beach`
- Meta description: `Meet the clinical, medical and admissions team at Sunview Wellness in West Palm Beach: licensed therapists, a Ph.D. Clinical Director and 50+ years of combined experience.`
- Keywords: sunview wellness team, addiction treatment team west palm beach, licensed therapists west palm beach rehab.
- H1: `Our Treatment Team in West Palm Beach`
- Subheading: `Licensed, trauma-informed, and here for the whole way through.`
- H2s: `Leadership and Clinical Direction` (Frank, Dana) · `Therapists` (Gabriel, Tyler, Maria, Jillian) · `Group Facilitators and Medical Oversight` (Matthew, Walter, Jose Toledo) · `Admissions and Outreach` (Carissa, Scott) · `How Our Team Works Together` (shared clinical foundation, individual niches, weekly supervision by the Clinical Director, Q9, Q15) · Reviews · CTA.
- Card: photo placeholder, name, credentials, title, one-line specialty, anchor = full name → person page.

## B. Person pages `/our-team/{first-last}/` (11)
Template: H1 = full name (no geo); subheading = title; hero has no form (this is the one exception: team pages carry the CTA block instead). Sections (H2): `About {{First}}` (bio, 120–250 words from sources) · `Credentials` (list) · `Role at Sunview` (what they do in the program) · `Articles by {{First}}` (only Dana, Frank, Gabriel; hidden until posts are assigned) · CTA (`Start with a conversation` → /admissions/).

| Slug | Name and credentials (Wiki) | Title (Wiki) | Bio sources and notes |
|---|---|---|---|
| frank-galimidi | Frank Galimidi, CASAC, CAP, CRADC, ICADC, NCAC II, SAP | Chief Executive Officer | Wiki + site. Add H2 `In Vivo Treatment™ and Clinical Architecture™` (creator; link to /about/our-approach/). "I = Sick" allowed here. Articles section on. |
| dana-martin | Dana Martin, Ph.D., LMFT, MCAP, QS | Clinical Director | Wiki + site (Ph.D. Couple and Family Therapy; systems perspective, Q15). Articles section on. |
| gabriel-pena | Gabriel Peña, LMHC, QS | Lead Therapist | Wiki + site. EMDR-trained, not certified: say "trained in EMDR-informed approaches" only if the Wiki bio says so; otherwise omit (Q18). Articles section on. |
| tyler-shoens | Tyler Shoens, MSW, RCSWI | Primary Therapist (Registered Intern) | Wiki only; not on the current site. Bio `[Wiki bio pending]` if empty. |
| maria-nowak | Maria Nowak, RMHCI | Primary Therapist (Registered Intern) | Wiki + site. Bilingual English/Spanish. |
| jillian-john | Jillian John, RMHCI | Primary Therapist (Registered Intern) | Wiki + site. |
| matthew-snyder | Matthew Snyder, LCSW | Contract Group Leader | Wiki + site. |
| walter-bierschenk | Walter Bierschenk, LCSW | Contract Group Leader | Wiki (LCSW) wins over site (LMHC). Retired firefighter background only if in the Wiki bio. |
| jose-toledo | Jose Toledo, M.D. | Medical Oversight | Wiki only. Short page; no byline, no articles. |
| carissa | Carissa `{{SURNAME}}` | Office Manager / Admissions | Wiki spelling. Site says "Karissa Delaney": `[confirm surname with Elizabeth]`. Slug becomes `carissa-{{surname}}` once confirmed. |
| scott-belovicz | Scott Belovicz | Director of Business Development | Wiki title wins over site ("Director of Clinical Outreach"). Link to /for-professionals/. |

Excluded (not in Wiki): Laura Contreras, Mia Grazel. Corporate (no pages): Reuven and Moshe Rosenfeld, Yaakov Septimus.

## C. `/about/` About Sunview Wellness
- Meta title: `About Sunview Wellness | Outpatient Rehab in West Palm Beach`
- Meta description: `Founded in 2021 and Joint Commission accredited, Sunview Wellness is an outpatient PHP, IOP and OP center in West Palm Beach built on a true outpatient model for real life.`
- Keywords: sunview wellness, sunview wellness west palm beach, about sunview wellness, formerly sunview medical center.
- H1: `About Sunview Wellness in West Palm Beach`
- Subheading: `Your Community. Your Recovery.`
- H2s: `Our Mission, Vision and Values` (verbatim from the Wiki, no rewrite) · `A True Outpatient Model for Real Life` (USPs 1–4 from the Wiki; no housing, no bubble wrap; link to programs) · `Founded in 2021, Formerly Sunview Medical Center` (one paragraph; Joint Commission accredited; adults 18+; West Palm Beach) · `The People Behind the Program` (short, link to /our-team/) · `How We Measure What Matters` (BAM, PHQ-9, GAD-7, satisfaction survey; link to /about/our-approach/) · `Serving West Palm Beach and Palm Beach County` (transportation, English and Spanish; link to location) · Reviews · Map · FAQ (5: Is Sunview a residential facility? · Are you accredited? · Who is Sunview for? · Do you treat mental health on its own? · Where are you located?) · CTA.

## D. `/about/our-approach/` Our Clinical Approach & Outcomes
- Meta title: `Our Clinical Approach and Outcomes | Sunview Wellness`
- Meta description: `In Vivo Treatment™, Clinical Architecture™ and a systems-based clinical model: how Sunview treats addiction and co-occurring conditions and how it measures progress.`
- Keywords: in vivo treatment, sunview wellness clinical approach, outpatient addiction treatment model, treatment outcomes measurement bam phq-9.
- H1: `Our Clinical Approach to Addiction and Mental Health Treatment`
- Subheading: `Recovery has to work in the real world.`
- H2s: `In Vivo Treatment™: Recovery Practiced in Real Life` (client asset copy and infographic; learn → apply → experience → process → adjust) · `Clinical Architecture™` (only what the site says; no expansion) · `I = Sick: How We Think About Addiction` (CEO term; systems view, Q15: "what happened to this person") · `From Stabilization to Insight to Integration` (Q20) · `Going Beneath the Presenting Symptom` (iceberg, band-aid, Q8, Q11) · `Family Systems in Treatment` (Q13, Q15; link to family therapy) · `How We Measure Progress` (BAM, PHQ-9, GAD-7, monthly treatment plan reviews, RSA-R survey, Q22) · `Continuity After Discharge` (Telemed Clinix, follow-up outreach; no alumni program claims, Q21) · Reviews · FAQ (5: What is In Vivo Treatment? · Is this evidence-based? · How do you track progress? · What does "I = Sick" mean? · What happens after I finish?) · CTA.

---

## Sitemap notes
- `/about-us/` → 301 → `/our-team/` (already in the redirect map). Legacy `/about/` becomes this real page (200).
- Native WordPress author archives (`/author/*`) stay `noindex`; post bylines link to `/our-team/{slug}/`.
