# Admissions: payer pages, sources and working notes

Brief: `Admissions-Content-Briefs.md` §F (2026-09-23).

**Pages:** `/admissions/insurance/aetna/`, `/florida-blue/`, `/cigna/`, `/unitedhealthcare/`, `/humana/`.

**Files:**
- Template: `src/pages/admissions/insurance/[carrier].astro` (getStaticPaths).
- Carrier copy: `src/data/payers.js`.

## Sources

| Claim | Source |
| --- | --- |
| Free benefits check before you start | LIVE / (free insurance check); LIVE /faq/ |
| "Don't see your plan? Reach out. It's very likely we can get your treatment covered." | LIVE /faq/. It's lightly edited: the original's em dash became a period. |
| Often enrolled within 24 hours after verification and pre-screening | LIVE / |
| Free transportation | LIVE /faq/; Q7 (Uber Health) |
| Clinical Director recommends the level after pre-screening | Q4 |
| Telemed Clinix psychiatric care as part of the program | Q1 |
| PHP / IOP / OP schedules | Q7; LIVE / |
| Plan-structure explainers: HMO/PPO/EPO, employer vs individual, referrals, in-network, pre-authorization, card details | General industry knowledge, written generically. No product names, no carrier internal rules, no amounts. |

## Open questions (Elizabeth / client)

1. **In-network status per carrier.** The brief says "all in network per the Wiki", but our Wiki copy is blank. Every page states "in network with {carrier}" in these places:
   - the H1-adjacent subheading and meta description
   - the at-a-glance row
   - the FAQ

   If any carrier isn't confirmed in network, switch that page to "we work with".
2. **HUMANA (important).** Humana announced its exit from the employer group commercial medical market (completed around 2025). Its business is now mainly Medicare Advantage and Medicaid. Medicare isn't on Sunview's accepted list.
   - Confirm which Humana products Sunview is actually in network with.
   - Confirm whether a Humana payer page still makes sense.

   The page is written generically ("know which plan you have") and doesn't claim which Humana products exist.
3. **Marketplace participation.** No carrier's Florida Marketplace participation is asserted. Where individual or Marketplace plans come up, it's phrased conditionally ("if your plan is an individual or Marketplace plan").
4. **Telemed Clinix billing** under the carrier plans is `[to confirm]`. It appears only as an HTML comment; the copy says psychiatric care is "part of your program" without making billing claims.
5. **Out-of-network benefits and self-pay** are `[to confirm]`. The FAQ says only "we'll explain what your plan allows, whether any out-of-network benefits apply and what your options are."
6. **Trust strip** isn't shown, although the brief lists it, following the Home-only decision.
7. **Titles** (brief pattern): UnitedHealthcare is 65 characters and Florida Blue is 61, over the prompt's ≤60 limit.

## Checks (2026-09-23)

- All five pages return 200, with one H1 each.
- H2s follow the brief with the carrier name substituted.
- There's no reviewed-by byline.
- JSON-LD has BreadcrumbList (Home › Admissions › Insurance & Payment › Carrier), WebPage and FAQPage.
- No horizontal overflow at 375, 768, 1024 or 1440px (production build).
- Carrier-specific words: Aetna 317, Florida Blue 340, Cigna 313, UnitedHealthcare 305, Humana 304.
