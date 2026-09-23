# Sunview Wellness: Brand Book & Design Tokens

_Source of truth for any design work. Design system artifact: https://claude.ai/artifact/3i4BHh55sbu5v6Xk978Usn_

Outpatient behavioral health in West Palm Beach, Florida: PHP, IOP and OP for substance use disorders and co-occurring mental health conditions. Joint Commission accredited.

## Brand story

The mark is a sun rising over a wave. That is the whole idea: recovery that happens in the real world, in daylight, while life keeps moving. Sunview does not wrap people in bubble wrap. Clients go home every night, return to work and family, and bring what happened back into the room the next morning. The clinical model moves from **stabilization → insight → integration**, going beneath the presenting symptom to the patterns, relationships and history underneath it.

**Mission.** Help adults build a life in recovery: not just get sober: through deep, individualized clinical work delivered where they actually live.

**What we believe.** Sobriety removes the substance; recovery examines the life around it. Treatment that only manages symptoms is a band-aid over a bullet hole. People are shaped by their systems and can create something different. We are compassionate without avoiding accountability ("carefrontation").

**Proof points to use.** Joint Commission accredited · adults 18+ · PHP, IOP (day & evening) and OP · one continuous group with a single facilitator · gender-specific group days · family contact in the first week · psychiatric care and medication management through Telemed Clinix, continuing after discharge · free transportation · outcomes tracked with BAM, PHQ-9 and GAD-7.

## Voice and tone

Sunview sounds like a clinician who is willing to tell you the truth because they care. Warm, direct, unhurried.

- **Speak to the person, not the diagnosis.** "You" and "your" over "patients" and "individuals struggling with".
- **Name the fear before the program.** People call saying "I don't know what to do anymore" and "I don't know who I am without this." Families say "I've tried everything." Meet that first; explain PHP vs IOP second.
- **Honest about scope.** Say plainly what Sunview does not do (detox, residential, inpatient, methadone maintenance) and where it refers. It builds trust and it is required.
- **Recovery, not sobriety.** Use "living in recovery", "the why behind the behavior", "insight into action", "recovery has to work in the real world".
- **No promises of cure, no fear tactics, no stock rehab clichés** ("journey to healing", "reclaim your life", "world-class"). No exclamation marks in clinical copy.
- Headlines in sentence case. Program names capitalized: Partial Hospitalization Program (PHP), Intensive Outpatient Program (IOP), Outpatient Program (OP).

## Logo

The primary lockup is the gold mark above the charcoal wordmark. On `teal`, `charcoal` or photography use the reverse-white version. The mark alone is for avatars, favicons and watermarks.

Do: keep clear space equal to the cap height of the "S" on every side; place it on `white`, `mist`, `cream`, `teal` or a darkened photo.
Don't: recolour it (it is gold `gold` + charcoal `charcoal` or all white, nothing else); stretch or rotate it; add effects, outlines or objects; place it on `sun-yellow` or busy photography; set it smaller than 140px wide.

## Colour

Two colours come from the logo itself and are exact samples of the master file: `gold` #CF9034 and `charcoal` #545555. The remaining palette is the client's brand guideline: `teal` #126E6E as the primary, `sun-yellow` #F5C518 as the secondary, with `teal-light`, `mist` and `cream` as supporting tints.

How it is spent:

- **Teal leads.** Headers, footers, primary buttons, hero backgrounds. It is the colour people should remember the site by.
- **Gold is a line, not a fill.** Dividers, icons, pull-quote marks, the underline on a heading. Gold on white is 2.9:1: never small text.
- **Sun-yellow is the call to action.** One yellow button per screen, `charcoal` text on it. Nothing else is yellow.
- **Charcoal is the ink.** All body text and headings on light grounds.
- **Mist and cream alternate sections** so long pages breathe without shadows or gradients.

Accessible pairs: charcoal on white 7.1:1 · charcoal on mist 6.6:1 · charcoal on cream 6.5:1 · white on teal 6.4:1 · charcoal on sun-yellow 7.3:1 · white on charcoal 7.1:1. Flagged: gold on white 2.9:1 (decorative and ≥24px only); teal-light on white 3.5:1 (underlined links or ≥18px bold only).

## Typography

Two Google-hosted faces, both from the client guideline.

- **Playfair Display** for headings (`display-h1` 50/800, `display-h2` 35/800, `display-h3` 25/700). Serif, editorial, calm: it carries the "clinical excellence" register without feeling cold.
- **Nunito** for everything else (`body` 16/400, `body-lg` 18 for lead paragraphs, `body-sm` 14 for captions, `label` 13/700 uppercase tracked for eyebrows, `button` 16/800).

The client guideline sets paragraph text at 14px; this system raises the default to 16px for readability on a site whose readers are often on a phone, in distress, at night. Keep 14px for captions only.

Rules: one H1 per page, sentence case, no more than ten words. Eyebrow label above the H1 in `label` style, `teal`. Never Playfair for body copy or buttons. Line length 60–75 characters.

## Imagery

Photography over illustration. Real adults in daylight, outdoors or in living rooms and offices: walking, talking, in a group circle, on a call, at a kitchen table. Warm natural light that echoes the gold in the mark. Diverse in age, gender and ethnicity; the client base "comes from all walks of life."

Never: stock despair (heads in hands, pills on tables, broken bottles), clinical white rooms, handshakes, sunsets with silhouettes, or any image that reads as inpatient/residential. Photos may be tinted with `teal` at 70–85% behind reverse-white text.

Icons: single-weight line icons in `gold` or `teal`, 1.5px stroke, 24px grid. No emoji as icons.

## Layout and components

Borders, not shadows: `hairline` on cards and tables; `shadow-card` only when a card sits on `mist`. Radii from the scale: `radius-md` 12px on cards and buttons, `radius-pill` on tag chips. Sections pad `space-20` on desktop and `space-12` on mobile. Primary button: `sun-yellow` fill, `charcoal` text, `radius-md`. Secondary: `teal` outline 2px, `teal` text. Focus ring: 2px `focus`, 2px offset, everywhere.

## What is not here yet

Vector logo files, app-icon exports, photography library, and any illustration style: none were provided. Phone numbers are intentionally omitted; they are injected by tag management.


---

# Design tokens (reference)

## Colour

| Token | Light | Dark | Usage |
|---|---|---|---|
| `gold` | #CF9034 | #CF9034 | Logo sun and wave, sampled from the master logo file. Accent lines, icons, large display text. 2.9:1 on white: never body text, never text under 24px on light grounds. |
| `charcoal` | #545555 | #F0FAFA | Logo wordmark colour, sampled from the master file. Body and heading ink on light grounds (7.1:1 on white). Dark theme: text becomes mist. |
| `teal` | #126E6E | #1F9E9E | Primary brand colour (client brand guidelines). Headers, primary buttons, section backgrounds; use the reverse-white logo on it. |
| `teal-light` | #1F9E9E | #126E6E | Hover state for teal buttons, links on light grounds (3.5:1 on white: links at 16px bold or with underline only), icon fills. |
| `sun-yellow` | #F5C518 | #F5C518 | Secondary brand colour (client brand guidelines). Primary CTA fill with charcoal text (7.3:1), highlights, badges. Never as text on white. |
| `mist` | #F0FAFA | #0F2222 | Tinted page section background alternating with white. Dark theme: deep teal-black surface. |
| `cream` | #FDF6E3 | #1A2626 | Warm tint for testimonial, family and insurance sections. Pairs with gold accents. |
| `white` | #FFFFFF | #0A1A1A | Default page ground. Logo primary version lives here. |
| `ink-muted` | #6B6C6C | #B8C6C6 | Captions, meta text, form helper text (5.2:1 on white). |
| `hairline` | #D9E6E6 | #243838 | Card and table borders, dividers. Borders, not shadows. |
| `focus` | #CF9034 | #F5C518 | 2px focus ring on every interactive element, offset 2px. |
| `success` | #1F7A4D | #5BC48A | Form success states only. |
| `error` | #B3261E | #F28B82 | Form validation errors only. Keep small. |

## Typography

Families (Google Fonts):
- `display`: "Playfair Display", Georgia, "Times New Roman", serif
- `sans`: Nunito, "Segoe UI", Helvetica, Arial, sans-serif

### Display (Playfair Display)

| Style | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| `display-h1` | 50px | 1.1 | 800 | -0.01em |
| `display-h2` | 35px | 1.15 | 800 |: |
| `display-h3` | 25px | 1.25 | 700 |: |

### Text (Nunito)

| Style | Size | Line height | Weight | Tracking |
|---|---|---|---|---|
| `body-lg` | 18px | 1.6 | 400 |: |
| `body` | 16px | 1.6 | 400 |: |
| `body-sm` | 14px | 1.5 | 400 |: |
| `label` | 13px | 1.4 | 700 | 0.08em |
| `button` | 16px | 1 | 800 |: |

## Spacing

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Icon-to-label gap. |
| `space-2` | 8px | Inside chips and badges. |
| `space-3` | 12px | Button vertical padding. |
| `space-4` | 16px | Card padding, form field gap. |
| `space-6` | 24px | Button horizontal padding, card gap. |
| `space-8` | 32px | Between content blocks. |
| `space-12` | 48px | Section padding on mobile. |
| `space-20` | 80px | Section padding on desktop. |

## Radius

| Token | Value | Usage |
|---|---|---|
| `radius-sm` | 6px | Inputs, chips. |
| `radius-md` | 12px | Cards, buttons. |
| `radius-lg` | 24px | Feature panels, image masks. |
| `radius-pill` | 999px | Pill CTAs and tags. |

## Shadow

| Token | Value | Usage |
|---|---|---|
| `shadow-card` | 0 4px 16px rgba(18,110,110,0.08) | Optional lift on cards over mist; prefer hairline borders. |

## CSS variables (ready to paste)

```css
:root {
  --gold: #CF9034;
  --charcoal: #545555;
  --teal: #126E6E;
  --teal-light: #1F9E9E;
  --sun-yellow: #F5C518;
  --mist: #F0FAFA;
  --cream: #FDF6E3;
  --white: #FFFFFF;
  --ink-muted: #6B6C6C;
  --hairline: #D9E6E6;
  --focus: #CF9034;
  --success: #1F7A4D;
  --error: #B3261E;
  --font-display: "Playfair Display", Georgia, serif;
  --font-sans: Nunito, "Segoe UI", Helvetica, Arial, sans-serif;
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-20: 80px;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 24px;
  --radius-pill: 999px;
  --shadow-card: 0 4px 16px rgba(18,110,110,0.08);
}
```

---

# Logo files

Three files, all cut from the client's master logo (`Sunview-Logo-top-scaled.png`, 2560 × 1495).

- `sunview-wellness-primary.png`: the primary vertical lockup: gold mark (`gold`) over charcoal wordmark (`charcoal`). Use on `white`, `mist` and `cream`.
- `sunview-wellness-reverse-white.png`: one-colour white version for `teal`, `charcoal` and photography. Same proportions; only the colour changes.
- `sunview-mark.png`: the sun-and-wave mark alone, for favicons, app icons, social avatars and watermarks. Never as the only identifier on a page.

Clear space: the height of the "S" in SUNVIEW on every side. Minimum width: 140px for the lockup on screen, 32px for the mark.

Vector (SVG/AI) originals were not provided; request them from the client before print work.


Attached alongside this document: `sunview-wellness-primary.png`, `sunview-wellness-reverse-white.png`, `sunview-mark.png`.
