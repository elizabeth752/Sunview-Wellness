# Admissions: `/admissions/` and `/admissions/insurance/`, sources and notes

Brief: `Admissions-Content-Briefs.md` §A and §B (2026-09-23).

Source keys:
- **Q#** = Clinical Director questionnaire
- **LIVE /path/** = sunviewwellness.com as of 2026-09-22
- **POST** = src/data/posts.js summary of the live media clip

The Client Wiki copy we have is blank, so no claim rests on it.

## `/admissions/`

| Claim | Source |
| --- | --- |
| The first conversation is about listening and understanding, not convincing | Q23 |
| "I know I have a problem, but I don't think it's that bad"; ambivalence can mean fear of change | Q23 (verbatim quote) |
| "I've tried everything", "I'm afraid something is going to happen to him" | Q23 (verbatim) |
| Pre-screening asks about reasons, history, living situation and prior treatment | Q4 |
| Clinical Director review; ASAM criteria and clinical judgment | Q4 |
| Free insurance verification | LIVE /faq/, /get-help-now/ |
| Often enrolled within 24 hours | LIVE / |
| Adults 18+; stepping down or from home | LIVE /; Q6 |
| Scope: detox, residential, housing, methadone | Q2, Q3, Q5; brief |
| Uber Health rides; day and evening hours; PHP, IOP and OP schedules | Q7; LIVE / |
| FAQ "Can I stay with my current doctor or therapist?" | LIVE /faq/ verbatim, with the em dash replaced by a colon (no em dashes rule) |

## `/admissions/insurance/`

| Claim | Source |
| --- | --- |
| Carrier list and order (commercial first, then Medicaid) | `INSURANCE` in src/data/site.js (live site logos); brief CEO guardrail |
| What the benefits check covers (in-network status, level of care, pre-authorization) | brief §B |
| "Don't see your plan? Ask us" | LIVE /faq/ ("Don't see your plan? Reach out") |
| Psychiatric services billed by Telemed Clinix | brief §B, `[to confirm]`, marked in an HTML comment only |
| Out-of-network and self-pay "ask us" | brief, `[to confirm]`, HTML comment only |
| Pull quote "Insurance companies cut patients off the moment they start doing well." | Title of Frank Galimidi's clip (The Saving Dose, Ep. 10) on LIVE /media/…; the page summary follows POST |
| Medicare not on the list | brief (Wiki list); honest "ask us" answer |

## Deviations and open questions

1. **24/7.** No new 24/7 claims were added. The only "24/7" text is the shared form's existing "Or call us 24/7" line, which is already flagged for client confirmation. The brief's "after-hours line routes to a person" wasn't used, because the Wiki is blank.
2. **Names.** The admissions team member names (Carissa, Scott) aren't used. The Wiki is blank, and the site's TEAM data spells the name "Karissa".
3. **Process steps.** The four steps and "what we'll ask" are written from the live site and standard outpatient practice, per the brief's decision. Confirm them with the client (Elizabeth item 12).
4. **Pull quote.** The article is a video clip. The only verbatim line is its title, so that is the quote. Confirm the attribution wording.
5. **Word count.** `/admissions/insurance/` is about 650 words of body and FAQ plus the logo wall; the brief gives no length for Admissions pages.
6. **Trust strip.** None, following the Home-only decision.
7. **Payer links.** Aetna, Florida Blue, Cigna, UnitedHealthcare and Humana link to `/admissions/insurance/<slug>/`, which another agent is building.
