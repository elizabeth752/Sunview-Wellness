# Therapies: inner child therapy + family therapy (sources and notes)

Brief: `Therapies-Content-Briefs.md` §C and §D (2026-09-23). Both pages use `ServicePage` with Reviews only and Dana Martin in the hero byline. The schema is WebPage `about` a MedicalTherapy (name only), plus BreadcrumbList (Home › Therapies › page) and FAQPage.

Source keys: **Q#** = Clinical Director questionnaire; **LIVE** = sunviewwellness.com (2026-09-22). The Client Wiki copy we have is blank in the USP and model fields, so no claim rests on it.

## /therapies/inner-child-therapy/

| Claim | Source |
| --- | --- |
| Younger parts carrying emotions, beliefs and experiences from childhood; feeling rejected, unsafe, criticized, not good enough | Q8 |
| Identify experiences, understand how they shaped patterns, compassion for younger parts | Q8 |
| Pull quote "At its core, it is about understanding the 'why' behind what we do." | Q8 (verbatim; the respondent isn't named, so it's attributed to "Sunview's clinical team") |
| Psychodynamic: past experiences, relationships and emotions shape the present; patterns outside awareness | Q8 |
| Reparenting: validation, compassion, boundaries, safety, support; identify parts, when they show up, respond as who you are today | Q8 |
| Shame, inadequacy and fear underneath use | Brief (Wiki USP 4, blank in our copy); the lines are written from Q8 |
| Skills matter, but without depth they're a band-aid over a bullet hole | Q11 |
| IFS is integrated into group topics and used in individual sessions when clinically appropriate | Q9 |
| Deep work not asked for early; stabilization → insight → integration | Q20 |
| Weekly individual session; ideas also come up in group | Q7, Q9 |
| Used within PHP, IOP and OP, not standalone private therapy | Brief rule (Wiki: private therapy not offered) |

## /therapies/family-therapy/

| Claim | Source |
| --- | --- |
| Every member plays a role; homeostasis/"normalcy"; a cut-off member still plays a role; generational patterns; circular, not linear | Q15 |
| Biopsychosocial assessment at intake, releases of information, comfort level | Q13 |
| Initial family contact within the first week, with consent | Q13 |
| Weekly calls or email updates; family sessions biweekly or monthly | Q13 |
| No pressure; explore the hesitation; stay open-minded | Q13 |
| "Did we enable this?"; "boundaries = abandoning?" | Q23 (families' questions) |
| Help loved ones understand their own patterns and roles | Q15 |
| Dana: Ph.D. in Couple and Family Therapy and MS MFT (Nova Southeastern), LMFT; systems training shapes the model | LIVE /about-us/ (site.js TEAM), Q15 |
| Quote "I tend to view people and relationships through a circular rather than linear lens." | Q15 (verbatim) |

## Deviations and open questions

1. **"Breaking Enabling and Rescuing Cycles": resolved (ANS 8.4).** The section now opens with the CEO's wording from the full Wiki (lines 245–246): "Family therapy exists to break enabling and rescuing cycles and to align everyone's expectations, so that recovery is supported rather than undermined." ("expectations" → "everyone's expectations" for readability). The Q15/Q23 paragraphs follow.
2. The **Q8 and Q15 quotes** come from the unnamed questionnaire respondent. ANS 3.9: the Q15 quote ("circular rather than linear lens") was removed from Dana's named profile card on family therapy, since it can't carry her name until she confirms. The Q8 quote stays attributed to "Sunview's clinical team".
3. **"Can my partner attend?"** is answered generically (it depends on releases, comfort and the therapist's recommendation). ANS 8.5 = E: stays live, marked `REVIEW 8.5` (JS comment in the FAQ data).
4. **Meta description lengths** are the brief's text verbatim and run long: inner child 166 characters, family 180.
5. There's **no trust strip**, per the Home-only decision.
6. The **dev server was serving stale CSS** for new arbitrary classes. The layouts were verified against the production build.
