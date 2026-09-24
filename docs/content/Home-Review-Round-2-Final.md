# Home page review: round 2 (final before launch)

Round 1 is applied. These are the last changes. Everything not listed is approved; do not touch it. Phone numbers are out of scope (CTM handles them); do not change any phone element.

## Hero (sitewide rule from now on)
1. Nothing above the H1. Remove the eyebrow ("Outpatient care · West Palm Beach, FL"). Home has no breadcrumb; every other page shows only the breadcrumb above the H1.
2. No checklist or bullets inside the hero. The hero is: H1, subheading, one paragraph, two buttons, coverage form.
3. Move the trust content to a **trust strip** directly below the hero (a horizontal band, no heading, not a section with an H2): left, four items with check icons: `Joint Commission accredited` · `50+ years of combined clinical experience` · `Free door-to-door transportation` · `Day and evening programs: PHP, IOP and OP`; right, the four seals (Joint Commission, Action Alliance, SAMHSA, NAATP), each wrapped in a link placeholder `{{SEAL_URL_*}}` until the client provides the verification URLs. On mobile the strip stacks: items first, seals below.
4. The line "Keep your job. Sleep in your own bed." becomes the hero subheading's second sentence: `Your Community. Your Recovery. Keep your job and sleep in your own bed.` (tagline stays first).
5. Form footer text: change to `By submitting, you agree to our Privacy Policy.` with a single link to `/privacy-policy/`. Remove "Terms of Use" and the second link. The HIPAA badge stays as an icon only, no link.

## Header
6. Simplify: logo, nav, and one button `Call Now {{PHONE}}`. Remove the Get Help Now button and the Verify insurance link. Mobile keeps the same single button in the bottom bar.

## Copy
7. Subtitle under "Is Outpatient Treatment the Right Fit for You?": replace "What we don't do, and where we'll send you instead" with `If you need something else first, we'll help you find it.`
8. Mental health card anchor → `Co-occurring mental health treatment` (target unchanged: /what-we-treat/mental-health/).
9. Dana Martin quote: fix the doubled closing quotation marks. Exact text (questionnaire Q15): `"Instead of simply asking, 'What is wrong with this person?' I want to understand, 'What happened to this person? What have they learned? What patterns have they been living within? What has been reinforced throughout their life?'"`

## Footer
10. Keep "Powered by elev8.io" (approved). Bottom bar: `© 2026 Sunview Wellness · Privacy Policy · Powered by elev8.io`. No crisis line, no HIPAA/Terms links.

## Verify before publishing (code)
- No text above the H1 (breadcrumb only on inner pages); section eyebrows below the hero stay as `<span>`; one H1; H2 per section; H3 on cards; FAQ questions are `<button>`.
- Schema: MedicalOrganization (name, address, url, foundingDate 2021, sameAs: Facebook, Instagram, LinkedIn, X, Google Maps link; telephone from the phone helper) + FAQPage (5 visible questions) + AggregateRating (4.5, 17). No BreadcrumbList.
- Mobile 375/390/768/1024/1280/1440: coverage form removed from the hero and rendered directly above the CTA section; no dropdown overflow; no cut sections.
- Reviews verbatim from Google, punctuation untouched; "Read our reviews on Google" links to the public profile.
- No "client"/"clients" outside verbatim reviews. No em dashes outside verbatim reviews.
- Meta title `Drug & Alcohol Rehab in West Palm Beach | Sunview Wellness`; meta description as in Home-Content-Spec.md.
