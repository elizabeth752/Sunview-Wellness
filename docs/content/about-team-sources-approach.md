# About: `/about/our-approach/` (sources and notes)

Brief: `About-Team-Content-Briefs.md` §D (2026-09-23). Page: `src/pages/about/our-approach.astro`, built on `ServicePage` with the coverage form in the hero, **no reviewed-by byline** (brief: none on About pages), rotation = Reviews only, no trust strip (Home only). Schema: MedicalOrganization + BreadcrumbList (Home › About › Our Approach) from Base, plus WebPage and FAQPage from `pageSchema(..., reviewer: null)`. The FAQPage text leaves out the `[SOURCE?]` marker.

Source keys: **Q#** = Clinical Director questionnaire (*Questionnaire for Website Content: Responses*). **IV** = posts.js article `in-vivo-treatment-at-sunview-wellness-recovery-has-to-work-in-the-real-world` (LIVE /media/ same slug). **FEEL** = posts.js article `what-should-a-treatment-center-feel-like`. **BIO** = Frank's live bio (`live-about-us-2026-09-23.txt`). **OLD** = the old `src/pages/our-approach.astro`, itself sourced from Q8–Q15, Q18 and Q20–Q22. **LIVE** = sunviewwellness.com. **Wiki** = full Client Wiki 2026-09-22 (`client-wiki-2026-09-22-full.txt`, line refs). **ANS** = `Answers-Content-Questions-2026-09-24.md`.

## Page elements (as the brief)

| Element | Value |
| --- | --- |
| Meta title | Our Clinical Approach and Outcomes \| Sunview Wellness |
| Meta description | Brief §D, verbatim |
| H1 | Our Clinical Approach to Addiction and Mental Health Treatment |
| Subheading | Recovery has to work in the real world. (IV title; Home subheading) |
| Breadcrumb | Home › About › Our Approach (only above the H1) |
| H2s | In Vivo Treatment™: Recovery Practiced in Real Life · Clinical Architecture™ · I = Sick: How We Think About Addiction · From Stabilization to Insight to Integration · Going Beneath the Presenting Symptom · Family Systems in Treatment · How We Measure Progress · Continuity After Discharge · (Reviews) · Questions About Our Clinical Approach (FAQ) · CTA band |

## Sentence-to-source map

### Hero
| Claim | Source |
| --- | --- |
| West Palm Beach; you live at home while in treatment | LIVE; Q20 ("living outside of the treatment environment… going home") |
| Recovery practiced where your life actually happens | IV |
| Look beneath the symptoms that brought you in | Q8, Q10 |
| Involve your family when it helps | Q13 ("when clinically appropriate") |
| Measure progress along the way | Q22 |

### In Vivo Treatment™
| Claim | Source |
| --- | --- |
| In vivo = "within the living environment"; skills shouldn't only exist on paper | IV |
| Detox/residential provide safety, stabilization, a break from substances; the real test "can I stay sober while actually living my life?" | IV |
| Loop Learn → Apply → Experience → Process → Adjust → Apply again, "the heart of In Vivo Treatment™" | IV (verbatim loop) |
| Learn: triggers, relapse prevention, emotional regulation, boundaries, communication | IV ("Treatment is great at teaching" list) |
| Apply/Experience: home, work; spouse argument, Friday night alone, rough day at work | IV examples |
| Process/Adjust: bring it back, look at what worked and what didn't | IV ("look at what worked and what did not") |
| Apply again: sharper awareness, another chance to practice | IV, verbatim idea |
| "Program" vs "your life" lanes | IV ("lives life… brings the experience back to our program"). The two-lane layout is a design reading of that sentence |
| "Would you / did you" question lists | IV, lightly shortened; "In outpatient care" label: IV (outpatient levels of care) |
| Roadblock isn't failure; often what makes treatment click | IV |
| Not a professional patient; a life you can sustain without us | IV |
| Infographic | IV (same asset as Home). Caption removed (ANS 2.3); the five-step loop stays as text in the loop diagram above |

### Clinical Architecture™ (nothing beyond the site)
| Claim | Source |
| --- | --- |
| Framework created by the CEO, Frank Galimidi | FEEL ("our CEO Frank Galimidi's Clinical Architecture™ framework"); posts.js author role "Creator of … Clinical Architecture™" |
| Builds environments that foster accountability, connection, structure and sustainable recovery | BIO |
| Two of its ideas: Clinical Excellence, Recovery Culture | FEEL |
| Definitions of both | FEEL, condensed |
| "Clinical excellence gives treatment its substance…" | FEEL, verbatim |

### I = Sick (ANS 2.1)
| Claim | Source |
| --- | --- |
| "I = Sick" is the fear of functioning as a healthy adult once the sick role is removed; the CEO names it a main driver of repeat admissions; addressed by helping people redefine themselves beyond the diagnosis | Wiki "Proprietary concepts" (lines 218–221, CEO notes 10 Sep 2026). Two sentences, site voice ("clients" → "people"). Visible `SourceFlag`: Frank must confirm "I = Sick" vs "I = Addict" is canonical |

The section is now the H2 plus those two sentences only (ANS 2.1: "the section stays with the two sentences from the CEO notes only"). Removed from the section: the "phrase from the philosophy of our CEO" line, the BIO "I = Addict" sentence, the Q15 systems-view paragraph, the "Instead of asking / We ask" question list and the Q15 quote attributed to Dana. The systems view still lives in "Family Systems in Treatment" below; the "What happened to this person?" questions still live on Home, the old /our-approach/ and Dana's own page.

### Stabilization → Insight → Integration
| Claim | Source |
| --- | --- |
| PHP/IOP/OP = living outside treatment, which makes the work possible | Q20 |
| Don't rush uncovering something painful simply because it exists; foundation first | Q20 |
| Stabilization contents; deep trauma early may not be realistic or clinically appropriate | Q20 |
| "How do I get through this?" → "Why do I respond this way…?" | Q20, verbatim |
| Insight: relationships, family dynamics, past experiences, beliefs, triggers; IFS, psychodynamic, trauma-informed become meaningful | Q20 |
| Integration: insight vs change; "I can see it happening, and I have a choice…"; connects with practical skills | Q20 (quote condensed from "I can recognize when it is happening, and I have a choice about how I respond"); OLD used the same wording |
| Recovery isn't linear; setbacks not automatic failure; used therapeutically | Q20 |

### Going Beneath the Presenting Symptom
| Claim | Source |
| --- | --- |
| Symptoms connected to deeper, unresolved struggles that intensified over time | Q8 |
| Evidence-based practices + beneath the "tip of the iceberg" | Q10 |
| Iceberg labels below the waterline (past experiences, relationships, family dynamics, trauma, beliefs, coping patterns) | Q15 ("relationships, family dynamics, past experiences, trauma, beliefs, and coping patterns") |
| Psychodynamic and inner child descriptions; "shifting insight into action" | Q8 |
| Carefrontation (supportive, honest feedback between group members) → /therapies/group-therapy/; gender-specific group days twice a month → /admissions/what-to-expect/ | Wiki "Carefrontation" (line 223); Wiki gender-specific programming "two gender-specific days per month" (lines 999–1001, CEO 10 Sep 2026); ANS 2.4. Both target pages mention both topics (checked) |
| Band-aid over a bullet hole; CBT/relapse prevention matter and are taught | Q11 |
| People keep relapsing = something missing; gaps in care, work to fill them | Q11 |

### Family Systems in Treatment
| Claim | Source |
| --- | --- |
| Dana Martin, Ph.D., LMFT, couple and family therapist; systems training shaped the program | Q15; LIVE /about-us/ (Ph.D. Couple and Family Therapy) |
| Every member plays a role even when unhealthy; generational patterns | Q15 |
| Only treating the symptom may miss the system reinforcing it | Q15 |
| Concerns affect the whole family; family recovery | Q13 |
| First-week contact, weekly calls/email, sessions biweekly or monthly, no pressure | Q13 (same facts as /therapies/family-therapy/) |
| Supervision questions | Q15. Wording is verbatim except "within the client's relationships" → "in this person's relationships" (no "client" rule), so they aren't in quotation marks |

### How We Measure Progress
| Claim | Source |
| --- | --- |
| More than completion; progress in the areas that brought you in; stability, functioning, insight, engagement; progress differs per person; evaluate ourselves with feedback | Q22 |
| BAM: substance use, recovery, functioning; risk + protective factors; protective factors should grow | Q22 |
| PHQ-9 / GAD-7: depression / anxiety over the course of treatment | Q22 |
| Monthly treatment plan review with therapist, adjust | Q22 |
| RSA-R Consumer Satisfaction Survey; reviewed and used for changes | Q22 |
| No outcome figures or percentages | None provided (Q22 lists tools only) |

### Continuity After Discharge (no alumni-program claims)
| Claim | Source |
| --- | --- |
| Leave with stability, insight, skills, ongoing supports | Q22 |
| Supports recommended at discharge (individual therapist, psychiatric care, sober support meetings) | Q21 |
| Keep the Telemed Clinix provider after discharge | Q1, Q21 (same as Home / psychiatry page) |
| Follow-up outreach questions | Q21 (same phrasing as /programs/outpatient/) |
| Feedback strengthens discharge planning and continuing-care recommendations | Q21 |

### FAQ
| Question | Source |
| --- | --- |
| What is In Vivo Treatment? | IV |
| Is this evidence-based? | Q10 (values evidence-based practices; CBT, DBT, IFS, trauma-informed inform the work), Q22. It does not call IFS or In Vivo themselves "evidence-based" |
| How do you track progress? | Q22 |
| What does "I = Sick" mean? | Wiki lines 218–221 (same two sentences as the section), **with the `[SOURCE?]` review flag** (not in the schema text) |
| What happens after I finish? | Q1, Q21 |

## Deviations, placeholders and open questions

1. **"I = Sick": definition now from the Wiki (ANS 2.1, still E).** Section and FAQ use the two CEO-notes sentences. Both keep a visible review flag (section: `<SourceFlag>`; FAQ: inline `flagHtml`) with the note that Frank must confirm "I = Sick" vs "I = Addict" (his website bio) is canonical. When he confirms, remove both flags.
2. **"I = Sick" vs "I = Addict"**: the section no longer mentions "I = Addict" at all (it was the BIO sentence). Frank's person page keeps "I = Addict" as in his Wiki bio.
3. **Quote attribution:** the Q15 quote is no longer on this page (removed with the I = Sick trim). Sitewide, questionnaire quotes are now attributed to "Sunview's Clinical Director" without her name (ANS 3.9).
4. **Infographic** carries the "Gemini Notebook" watermark and a typo (home-round-1-sources.md item 6). ANS 2.3: keep the current image without its caption until a clean one arrives (E). Caption removed.
5. **Q18 scope:** EMDR and art therapy are not mentioned. **Carefrontation and gender-specific groups: resolved (ANS 2.4)** with one linked sentence under "Going Beneath the Presenting Symptom". Frequency follows the Wiki ("twice a month"), not Q12's "every other Thursday".
6. **FAQ side button:** ServicePage's FAQ block shows "All admissions FAQs" (shared layout, not changed).
7. **Old `/our-approach/`** still exists. Its move/redirect is handled by Jhonatan, and Home already links to `/about/our-approach/`.
