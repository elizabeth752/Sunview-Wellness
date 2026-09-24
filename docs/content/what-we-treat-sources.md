# What We Treat: sources and working notes (tier 1)

Brief: `What-We-Treat-Content-Briefs.md` (2026-09-22). Tier 1 pages: `/what-we-treat/`, `/what-we-treat/substance-use/`, `/what-we-treat/mental-health/`, `/what-we-treat/dual-diagnosis/`. The child pages have their own source files:
- `what-we-treat-sources-substance.md`
- `what-we-treat-sources-mental.md`

Shared template: `src/layouts/ServicePage.astro`. Closing section: `src/components/NextSteps.astro`. Data: `src/data/treat.js`.

Source keys: **Q#** = Clinical Director questionnaire; **LIVE /path/** = sunviewwellness.com as of 2026-09-22. The Client Wiki PDF we have is blank in the ICP and program fields, so no claim rests on it alone.

| Claim | Pages | Source |
| --- | --- | --- |
| Alcohol and crack cocaine are the most common substances | WWT, SU, DD | Q16 |
| Personality, anxiety, depressive and trauma-related disorders are the most frequent co-occurring concerns; many people have more than one | WWT, MH, DD | Q16 |
| Opioids and benzodiazepines usually after medically supervised detox | WWT, SU | Q3, Q5 |
| Abstinence-based: no marijuana, stimulants, opioids or benzodiazepines; naltrexone and Suboxone welcome via an outside provider | WWT, SU | Q3, Q1 |
| A prescription or medical card doesn't decide fit on its own | SU | Q3 |
| Psychiatry through Telemed Clinix (MDs, ARNPs, PAs), private office, scheduled, pharmacy on file, continues after discharge | MH, DD, SU | Q1, Q7, Q21; LIVE /about-us/ |
| Changes only when clinically indicated; no automatic medication switches | MH, DD | Q2 |
| PHQ-9 and GAD-7 | MH | Q22 |
| Monthly treatment plan review | DD | Q22 |
| Cycle: substance use as coping → worsens symptoms → deeper connection | MH, DD | Q17 |
| "Integrated" = the whole person, the relationship between both | DD | Q17 |
| Band-aid over a bullet hole; skills without insight | SU | Q11 |
| Psychodynamic, inner child work, IFS (group + individual), carefrontation | SU, DD, MH | Q8, Q9, Q14 |
| Evidence-based plus beneath the surface; iceberg; onion layers | WWT, MH | Q8, Q10 |
| IFS, CBT, DBT, trauma-informed; every clinician trauma-informed | MH | Q10, Q18 |
| "What happened to this person?" (paraphrased: "what happened to you, not what's wrong with you") | DD | Q15 |
| Family: contact in week one with consent, then weekly updates or biweekly/monthly sessions; no pressure | SU, DD | Q13, Q15 |
| Higher level of care if symptoms significantly worsen, safety risk, can't take part | MH | Q19 |
| Eating disorders and gambling as secondary concerns; referral if primary | WWT, MH | Q19 |
| Most come from a higher level of care; others from home | SU, DD | Q6 |
| Clinical Director, pre-screening, ASAM criteria, clinical judgment | WWT, SU, DD | Q4 |
| "I don't know what to do anymore", "I know I need help, but I don't know where to start" | WWT | Q23 (verbatim) |
| Adults 18+ | DD | LIVE / |
| Medicaid accepted; free benefits check | FAQ | LIVE /faq/ |

## Build notes

- The megamenu follows the brief:
  - It opens on hover and on click, and closes on Esc (focus returns to the button) or an outside click; `aria-expanded` is set.
  - The panel is capped to the viewport width.
  - It includes the "All conditions we treat" link.
  - On mobile, each column is a sub-accordion.
- Redirects in `vercel.json`: `/conditions-we-treat/` → `/what-we-treat/`; `/substance-use-disorder/`, `/substance-abuse/` and `/drug-rehab-west-palm-beach/` → `/what-we-treat/substance-use/`; `/mental-health/` → `/what-we-treat/mental-health/`; `/dual-diagnosis/` → `/what-we-treat/dual-diagnosis/`. The legacy pages were removed.
- There is no trust strip, although the brief asks for one: the client asked for it on Home only (2026-09-22).
- Dana Martin reviews the MH hub and dual diagnosis; Frank reviews `/what-we-treat/` and the SU hub.
