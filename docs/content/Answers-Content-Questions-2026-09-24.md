# Answers to "Open Content Questions" (2026-09-24)

Goal: finish the pages. Apply every answer marked A. Items marked E go to Elizabeth in one batch; until answered, keep the placeholder or omit, as you already do. Items marked O go to Oriana.

## The Wiki (answers about half of the file)
**0.1 A:** Yes. You have the wrong copy (the empty template from 2026-09-03). The full Client Wiki is `Client_Wiki-2026092218345010.pdf` (2026-09-22). It contains Mission, Vision, Values, Taglines, USPs 1–4, ICP and profiles to avoid, competitors, the team roster with credentials and author rules, the CEO notes (2026-09-10) with "Breaking Secrecy" and "Enabling/Rescuing" models, the insurance list, VOB process, hours, service area, languages, accessibility and the 24/7 line. Re-read it before touching anything else, then re-check these items against it: 1.1, 1.2, 1.4, 3.1 (spelling only), 3.2, 3.3, 3.4, 3.10, 3.11, 5.3, 6.1, 7.1, 7.5, 8.4. Where the Wiki has the fact, use it and close the item; where it is still blank, leave it for Elizabeth.

## 1. About
- 1.1, 1.2, 1.4 → Wiki (verbatim for Mission/Vision/Values/USPs).
- 1.3 A: Founded 2021 is verified (NPI 1326620667 assigned April 2021; Florida 211 directory). "Formerly Sunview Medical Center" confirmed by Elizabeth. Add `alternateName: "Sunview Medical Center"` to the MedicalOrganization schema. Name-change date: E.

## 2. Our Approach
- 2.1 E (Frank's definition of "I = Sick"). Keep the review flag; the section stays with the two sentences from the CEO notes only.
- 2.2 A: Enough. Do not expand.
- 2.3 E (clean infographic). Until then, use the current image without the caption text, or replace with the brand pattern and keep the five-step line as text.
- 2.4 A: Not on Our Approach. Carefrontation and the every-other-Thursday gender days live on `/therapies/group-therapy/` and `/admissions/what-to-expect/` (already in those briefs). Add one sentence with a link on Our Approach under "Going Beneath the Presenting Symptom".

## 3. Team
- 3.1 E (surname). Use the Wiki spelling "Carissa"; slug `carissa` until confirmed.
- 3.2, 3.3, 3.4, 3.10, 3.11 → Wiki. Wiki wins over the live site. Walter's fire service / Navy background: only if the Wiki bio has it; otherwise E.
- 3.4 A (EMDR wording): allowed exactly as "trained in EMDR-informed approaches; Sunview does not offer EMDR as a service" (Q18).
- 3.5, 3.6, 3.7 E. Keep placeholders.
- 3.8 A: Remove "weekly". Say "ongoing clinical supervision by the Clinical Director" (Q15 describes supervision, no frequency).
- 3.9 E. Until confirmed, attribute quotes to "Sunview's Clinical Director" without the name on pages other than her own.

## 4. For Professionals
- 4.1 A: Remove "same-day". Use "fast response" in the meta and "pre-screening reviewed by the Clinical Director" without timing. E for the actual SLA.
- 4.2 E. Keep the FAQ answer as "with the patient's signed release, we confirm admission and coordinate care" and flag.
- 4.3 A: Yes. Add under Notes: "Please do not include the patient's full name, date of birth or diagnosis in this form. We'll collect clinical details by phone."
- 4.4 A: Confirmed. Required: name, organization, phone, email, level of care. Notes optional.

## 5. Location
- 5.1, 5.2, 5.4 E. Keep "Getting Here" out; keep placeholders.
- 5.3 → Wiki (LGBTQ+ friendly is in the Locations section). Use it.
- 5.5 A: Current as of 2026-09-22 (Google Places: 4.5, 17 reviews). Re-check the day before launch.

## 6. Transportation
- 6.1 A: Wiki: free transportation (Uber Health) to and from the facility. Use "free transportation" everywhere; do not say "we'll pick you up" (implies staff drivers) and do not state a radius or county limit. E for limits.

## 7. Admissions and insurance
- 7.1 → Wiki lists all as in network. Use "in network"; E to double-check the five.
- 7.2 A: Keep the Humana page built but `noindex` and out of the menu until Elizabeth confirms which Humana products are accepted. The CEO listed Humana explicitly. If she removes it, swap the fifth page for Oscar.
- 7.3, 7.4, 7.6, 7.7, 7.8 E. FAQs stay as "ask us" / generic.
- 7.5 → Wiki: the line is answered 24/7 (after-hours routes to a person). Keep "Call us 24/7". Do not name who answers.

## 8. Clinical content
- 8.1 A: No crisis line anywhere (client decision). E only if Elizabeth wants it on clinical pages.
- 8.2 A: Do not name BPD until confirmed. Keep "personality disorders". E.
- 8.3 A: Keep the FAQ as written (psychiatric evaluation as part of the program; no standalone ADHD evaluation). E to confirm.
- 8.4 → Wiki (CEO notes). Use the original wording.
- 8.5 E for review, but keep the copy live; mark the five passages in a comment so they can be swapped fast.
- 8.6 A: No length-of-stay figures. No "scholarships". E.

## 9. Site-wide
- 9.1 A: Trim. Limits win: titles ≤60, descriptions ≤155. Keep the keyword + "West Palm Beach" and the brand where it fits; cut the rest.
- 9.2 A: Trust strip on every commercial page, below the hero. There was no client request for Home only; the request was to remove the checklist from the hero itself. Home only is wrong.
- 9.3 A: Add "For Professionals" as the last item of the Admissions dropdown. Keep the footer link.
- 9.4 A: Confirmed. Add `/our-approach/` → `/about/our-approach/` to the redirect map (it was not in the crawl data).
- 9.5, 9.6 E.
- 9.7 A: One combined page for now: `/privacy-policy/` containing the website privacy policy and the HIPAA Notice as a second H2, `noindex` until legal sign-off, with a visible `[LEGAL REVIEW REQUIRED]` note in the file only. Do not build `/terms-of-use/` or `/hipaa-notice/`; remove both from the sitemap and footer. The form links to Privacy Policy only (already decided).
- 9.8 A: Confirmed on both: `/therapies/inner-child-therapy/` is the URL; psychodrama has no separate page.
- 9.9 A: Build the blog at `/blog/` now, not `/media/`. Same slugs. Add `/media/` → `/blog/`, `/media/{slug}/` → `/blog/{slug}/` and `/media-category/articles/` → `/blog/` to the redirect rules so they go live with the launch. Post content stays as-is for launch; rewriting is phase 2.

## 10. CallTrackingMetrics
- 10.1, 10.2, 10.3 O. Do not run a live test until Oriana gives the go-ahead. Keep the "N/A (professional referral)" values until she confirms whether the fields are required.

---

## Batch for Elizabeth (everything still open)
1.3 name-change date · 2.1 "I = Sick" definition · 2.3 clean infographic · 3.1 Carissa's surname · 3.3 Walter's background · 3.5 bios for Tyler and Dr. Toledo (and what Medical Oversight covers) · 3.6 longer bios (optional) · 3.7 headshots and LinkedIn · 3.9 Dana quoted by name · 4.1 response time promise · 4.2 what referrers receive · 5.1 parking/transit · 5.2 wheelchair access · 5.4 DCF license, Joint Commission ID, seal links · 6.1 transportation limits · 7.1 in-network check on the five payers · 7.2 Humana products · 7.3 self-pay / out-of-network / loss of coverage · 7.4 Telemed billing · 7.6 phone policy, attendance, what to bring · 7.7 review of the admissions steps · 7.8 admissions call hours · 8.2 naming BPD · 8.3 ADHD evaluation · 8.5 review of five plain-language passages · 8.6 length-of-stay figures · 9.5 privacy policy legal review · 9.6 photos.

## Batch for Oriana
10.1 map new referral fields on the FormReactor · 10.2 are policy ID and carrier required · 10.3 approve one test submission per form.
