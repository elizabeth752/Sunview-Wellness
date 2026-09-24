# Therapies: hub + group therapy, sources and working notes

Brief: `Therapies-Content-Briefs.md` §A and §B (2026-09-23).
- Pages: `src/pages/therapies/index.astro` and `src/pages/therapies/group-therapy.astro`, on the ServicePage template.
- Rotation: Reviews only. Byline: Dana Martin in the hero.
- Schema: MedicalTherapy, name only.

Source keys:
- **Q#**: Clinical Director questionnaire.
- **LIVE**: sunviewwellness.com.

The Client Wiki PDF we have is blank in its USP and model fields.

| Claim | Page | Source |
| --- | --- | --- |
| No one-size-fits-all approach; a shared foundation plus each clinician's strengths | Hub | Q9 |
| IFS, CBT, DBT and trauma-informed care as the shared foundation | Hub | Q9, Q10, Q18 |
| Pull quote "Our goal is not to keep people in treatment indefinitely…" | Hub | Q10, verbatim |
| Tip of the iceberg; onion layers; beneath the presenting symptom | Hub | Q8, Q10 |
| Band-aid over a bullet hole; coping skills and relapse prevention matter | Hub | Q11 |
| Stabilization → insight → integration; "how do I get through this" → "why do I respond this way"; "I understand why I do this…" | Hub | Q20 |
| One continuous group 9 AM–1 PM with breaks, same facilitator | Hub, Group | Q7 |
| Weekly individual session, 45–60 min, plus check-ins when needed | Hub, Group FAQ | Q7 |
| Family contact in week one with consent; sessions every two weeks or monthly | Hub | Q13 |
| Monthly treatment plan review | Hub FAQ | Q22 |
| IFS in group topics and individual sessions | Hub | Q9 |
| Group topics draw on IFS, CBT, DBT and psychodrama | Group | Q9, Q18 |
| Carefrontation: definition, never shaming, how to give and receive feedback, the "manipulative" vs observational example, the compassion and accountability quote | Group | Q14 (example and quote verbatim) |
| Gender-specific groups twice a month, separate rooms, same structure; expanded from monthly after positive feedback | Group | Wiki "two gender-specific days per month" (CEO, 10 Sep 2026; wiki txt lines 999–1001) wins over Q12's "every other Thursday". Calendar graphic still highlights a Thursday (Q12); caption and aria-label now say "twice a month" |
| Groups work by breaking secrecy: someone admits something shameful, finds peers share it, the shame loses its power | Group (Breaking Secrecy) | Wiki "The clinical model in the CEO's words" (lines 242–243), site voice ("a client" → "someone", "peers" → "others in the room"); ANS 8.4 |
| Shame and "I can't do this by myself anymore"; insight sometimes comes from another person | Group (Breaking Secrecy) | Q23, Q14 |
| Psychodrama is an important component; drawing, vision boards and creative exercises when clinically appropriate | Group | Q18 |
| PHP / IOP / OP schedules (shared chart) | Group | Q7; LIVE |
| Therapy only within PHP, IOP and OP; no private therapy (positively framed) | Hub, Group | Brief rule (Wiki: private therapy not offered) |

## Deviations and open questions

1. **"Breaking Secrecy: Why Groups Work": resolved (ANS 8.4).** Now built on the CEO's wording from the full Wiki (lines 242–243); the big line reads "Shared out loud, shame loses its power." The Q23/Q14 sentences follow it.
2. **Psychodrama definition** ("acting out a situation or relationship in the room…"): general plain-language wording. Q18 only says psychodrama is an important component. ANS 8.5 = E: copy stays live, marked `REVIEW 8.5` in the source (JS comment on the data line + HTML comment before the list).
3. **The group timeline's "Mid-morning" and "Late morning" labels** and break placement are illustrative. Q7 only says 9–1 with appropriate breaks. No break times are given.
4. **The hub's level-of-care matrix** marks every approach at every level. Family therapy is "As appropriate" (Q13). Q9 and Q18 say IFS, CBT, DBT and psychodrama are part of programming in general, not per level.
5. **The hub pull quote** now reads "Sunview's Clinical Director" without her name (ANS 3.9, until Dana confirms). Same on Home.
6. **Group meta description is 181 characters**. It's the brief's text verbatim; the prompt's limit is 155.
7. **Word counts** (body + FAQ, excluding hero, reviews and CTA): hub 922, of which about 120 are table and calendar labels, so the prose is about 800 (target 700–900); group 972 (target 800–1,000).
8. **No trust strip**, although the brief lists one: Home-only per the client.
