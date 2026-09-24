# Therapies: IFS, CBT, DBT (sources and working notes)

Brief: `Therapies-Content-Briefs.md` (2026-09-23), sections E, F and G. Pages:
- `/therapies/internal-family-systems/`
- `/therapies/cbt/`
- `/therapies/dbt/`

Page-specific components, all in `src/components/therapies/`:
- `IfsParts` (parts diagram)
- `CbtTriangle` (thought → feeling → behavior cycle)
- `CbtTabs` (group vs. individual tabs)
- `CbtLoop` (In Vivo loop)
- `DbtWave` (urge wave)

Source keys: **Q#** = Clinical Director questionnaire; **LIVE /path/** = sunviewwellness.com as of 2026-09-22.

| Claim | Page | Source |
| --- | --- | --- |
| IFS is naturally integrated into group topics; used in individual sessions when clinically appropriate; a shared component that creates consistency | IFS | Q9 |
| No one-size-fits-all approach; clinicians' own strengths and niches; shared foundation | IFS, CBT FAQ | Q9, Q10 |
| Shared approaches: IFS, CBT, DBT, trauma-informed | IFS, DBT | Q10, Q18 |
| Behaviors that developed to protect or meet needs earlier in life | IFS | Q20 |
| Deeper work once stable and trust develops; safe pace | IFS | Q20 |
| Inner child work: younger parts; rejected, unsafe, not good enough; validation, safety, boundaries ("reparent") | IFS | Q8 |
| Group: one facilitator for the whole session | IFS, CBT, DBT | Q7 |
| Weekly individual session with the primary therapist | IFS, CBT, DBT | Q7 |
| CBT and relapse prevention valued; triggers and harmful thought patterns; "band-aid over bullet hole" | CBT | Q11 |
| Anxiety and depression among the most frequent conditions | CBT | Q16 |
| "I tried it, but this happened with my spouse", "I got triggered at work"; learn → apply → adjust; In Vivo Treatment™ | CBT | Q20; LIVE in-vivo article |
| Dana Martin integrates DBT-based approaches | DBT | LIVE /about-us/ |
| Several therapists have a strong DBT foundation (Laura Contreras; Jillian John also draws on DBT) | DBT | LIVE /about-us/ |
| DBT pull quote (verbatim) attributed to "Sunview's Clinical Director" | DBT | Q11; name removed per ANS 3.9 until Dana confirms |
| Personality disorders among the most frequent presentations | DBT | Q16 |
| Group topics: family dynamics, life skills, boundaries, emotional regulation, goal setting, CBT, DBT, coping skills | DBT | LIVE /about-us/ (Mia Grazel) |
| Gender-specific groups every other Thursday | DBT | Q12 |
| Tolerating discomfort grows over treatment; recovery isn't never feeling stress | DBT | Q20 |
| "Not born bad"; people shaped by experiences can respond differently | DBT | Q15 |
| Not standalone private therapy; used within PHP, IOP and OP | all | Brief rule (Wiki: private therapy not offered) |

## Deviations and open questions

1. **CBT FAQ "Will I get homework?"** The answer is generic ("you may be asked to try a skill between sessions…"). The client needs to confirm it.
2. **CBT has one extra H2, "Where CBT Fits in Your Treatment"**, from the NextSteps closing block. IFS and DBT close with a compact related-links row instead, so the three pages end differently. Every H2 the brief lists is present and verbatim.
3. **Explanations not taken from the sources.** These are general, plain-language descriptions of each modality, not Sunview claims:
   - IFS: the "Self" and the parts.
   - DBT: the four skill areas and the urge wave.
   - CBT: the thought → feeling → behavior cycle.
4. **DBT pull quote.** The Q11 excerpt is verbatim, now attributed to "Sunview's Clinical Director" (ANS 3.9). The paragraph beside it still names Dana as Clinical Director (a non-quote Wiki fact), so readers can still connect the two. The CBT "Will I get homework?" FAQ is marked `REVIEW 8.5` (ANS 8.5).
5. **Psychiatry link.** The three pages don't link to `/programs/psychiatry-medication-management/`, because the brief's link list doesn't require it (CBT links to it through NextSteps).
6. **Trust strip** isn't shown (Home only, client request).
7. **Dev server CSS.** The running dev server was serving stale CSS for the new classes (diagrams collapsed, gaps missing). Layout was therefore verified against a production build served statically, where it renders correctly. Restart the dev server to see it locally.
