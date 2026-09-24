# Programs pages: sources and working notes

Brief: `Programs-Content-Briefs.md` (2026-09-22). Pages: `/programs/iop/`, `/programs/php/`, `/programs/outpatient/`, `/programs/psychiatry-medication-management/`, `/programs/` (hub). Shared template: `src/layouts/ProgramPage.astro`.

Source keys:
- **Q#** = *Questionnaire for Website Content: Responses*, question number
- **LIVE /path/** = the page on sunviewwellness.com as of 2026-09-22
- **WIKI** = Client Wiki PDF. Its ICP, opportunity and program fields are blank in the copy we have (only brand colors, fonts and logo are filled in), so no claim below rests on the Wiki alone.

## Claims and sources

| Claim | Pages | Source |
| --- | --- | --- |
| PHP Mon–Fri 9 AM–1 PM | PHP, hub, IOP FAQ | Q7; LIVE /faq/ |
| PHP about 20 hours/week | PHP, hub | LIVE /php-iop-west-palm-beach/ ("20 Hours/Week") |
| Day IOP 3 days/week 9 AM–1 PM, days chosen around the person's schedule | IOP, hub | Q7; LIVE /faq/ |
| Evening IOP Mon/Wed/Thu 6–9 PM | IOP, hub | Q7 |
| Evening IOP has the same clinical content as day IOP | IOP | Q7 ("follow a similar structure"), brief §1.3 |
| IOP 9–12 hours/week | IOP, hub | LIVE /php-iop-west-palm-beach/ (9 hrs); 12 = Day IOP 3 × 4 h (Q7) |
| OP 1 day/week, any weekday, 9 AM–1 PM, about 4 hours | OP, hub | LIVE / and /php-iop-west-palm-beach/ ("1 Day/Week · Mon–Fri Flexible"); 4 h = 9–1 |
| Group therapy in every program; individual and family sessions as clinically recommended | OP, hub | LIVE /faq/ |
| One continuous group, same facilitator 9 AM–1 PM, with breaks | IOP, PHP | Q7 |
| Weekly individual session, 45–60 min; extra check-ins when needed | IOP, PHP | Q7 |
| Psychiatry via Telemed Clinix, virtual, private office on site, scheduled for you | all | Q1, Q7 |
| Telemed Clinix providers are MDs, ARNPs and PAs who understand dual diagnosis | Psychiatry | LIVE /about-us/ |
| Prescriptions sent to the pharmacy on file | Psychiatry, PHP | Q1 |
| Same Telemed Clinix provider after discharge | all | Q1, Q21 |
| Random drug testing | IOP, PHP | Q7 |
| Free Uber Health transportation | all | Q7; LIVE / |
| Carefrontation | IOP | Q14 |
| Gender-specific groups every other Thursday | IOP | Q12 |
| Family contact in the first week, with consent | IOP | Q13 |
| IFS, CBT, DBT, psychodrama in groups | IOP | Q9, Q18 |
| Real-life moments brought back to group ("I got triggered at work") | IOP, OP | Q20 |
| Stabilization → insight → integration; "I understand why I do this…" | PHP, OP, hub | Q20 |
| Recovery isn't linear; step back up when needed | OP, hub | Q20 |
| Most people come from a higher level of care; others from the community | PHP | Q6 |
| Pre-screening contents; Clinical Director review; ASAM + clinical judgment; "an inappropriate level of care…a disservice" | IOP, PHP, OP, hub | Q4 |
| Long-term opioid/benzodiazepine use → detox and residential first | IOP, PHP | Q5 |
| Methadone maintenance not admitted; coming off may need stabilization | PHP, Psychiatry, hub | Q2, Q3 |
| Abstinence-based but not medication-free; no marijuana, stimulants, opioids, benzodiazepines | Psychiatry | Q3 |
| Suboxone/Vivitrol/naltrexone managed by an outside provider; Sunview coordinates or refers | Psychiatry | Q1, Q2 |
| Injectables administered by an outside provider | Psychiatry | Q1, Q2 |
| Prescriptions/medical cards don't settle placement; pattern of use reviewed | Psychiatry | Q3 |
| Medication is one part of the work | Psychiatry | Q2 (closing) |
| Monthly treatment plan review | IOP FAQ, PHP FAQ | Q22 |
| Post-discharge follow-up outreach (no alumni program claims) | OP | Q21 |
| In Vivo Treatment™ loop | OP | LIVE in-vivo article (same as Home) |
| No detox, residential or housing; "we'll help you get there" | all (ScopeNote) | brief rule; Q3, Q5 |
| Medicaid plans accepted | FAQ insurance answers | LIVE /faq/; Home FAQ |

## Rules applied

- **No length-of-stay figures.** The live /outpatient-rehab-west-palm-beach/ says "Average 60–90 day length of stay". That wasn't used. IOP FAQ uses the brief's line: "extended care, typically several months, adjusted to your progress". `[Pending Elizabeth: whether LOS figures can be published.]`
- The **Reviewed-by** block (`ReviewedBy.astro`) renders on every page with Frank Galimidi, and `reviewedBy` is in the WebPage schema. The date comes from `LAST_REVIEWED` in `src/data/site.js`.
- **Schedule chart** (`ProgramSchedule.astro`): the page's program is highlighted and the others are muted; the hub shows all levels. Every row states its hours in words, so the flexible rows don't read as "no hours" (the reason the client removed them from Home).
- **Legacy URLs:** `/php-iop-west-palm-beach/` 301s to `/programs/` and `/outpatient-rehab-west-palm-beach/` 301s to `/programs/outpatient/`. The old pages were removed.

## Open items

1. **Frank Galimidi headshot.** Neither the live site nor the Wiki has one, so the block shows initials. Set `REVIEWER.photo` in `site.js` when the client sends it.
2. **`/our-team/frank-galimidi/`** (reviewed-by link) doesn't exist yet. It's part of the `/our-team/{first-last}/` template in the sitemap.
3. **`vercel.json` conflicts with the final sitemap:** `/our-team/ → /about-us/` and `/about/ → /about-us/` are legacy redirects, but both URLs are pages in the final sitemap. Remove them when those pages are built.
4. **Meta titles and descriptions** are the brief's text verbatim. Several run past the usual limits: titles 61–69 characters, and descriptions up to 172 (IOP 165, PHP 172).
5. **Hub word count** is about 850 words excluding reviews (target 700–900). IOP and PHP are about 1,100 words excluding the hero, the schedule chart and the program links.
