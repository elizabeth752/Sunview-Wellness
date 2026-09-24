// Single source of truth for NAP, programs, team and insurance.
// Sources: live sunviewwellness.com (Sept 2026) + "Questionnaire for Website Content" responses
// from the Clinical Director. Don't add claims here that neither source supports.

export const SITE = {
  name: 'Sunview Wellness',
  url: 'https://sunviewwellness.com',
  // CTM "Target Number SEO" (client, 2026-09-22). CTM's number-swap script (t.js) replaces it with
  // the tracking number for each visitor's source, so it's the only number that appears in the code.
  phone: '(561) 269-3175',
  phoneHref: 'tel:5612693175',
  email: 'info@sunviewwellness.com',
  address: {
    street: '4802 East Ave',
    city: 'West Palm Beach',
    region: 'FL',
    postal: '33407',
    country: 'US',
  },
  mapsUrl: 'https://goo.gl/maps/DR6t9MqLSYyjdckG8',
  mapsEmbed:
    'https://www.google.com/maps?q=4802+East+Ave,+West+Palm+Beach,+FL+33407&output=embed',
  social: {
    facebook: 'https://www.facebook.com/sunviewwellness',
    instagram: 'https://www.instagram.com/sunviewwellness/',
    linkedin: 'https://www.linkedin.com/in/sunview-wellness-4b15b3242/',
    x: 'https://twitter.com/MedicalSunview',
    youtube: 'https://www.youtube.com/@frankgalimidi',
  },
  foundingYear: '2021', // Home review round 2 (schema foundingDate)
  gtmId: 'GTM-NCTDLZMC', // container from the client (same as the live WordPress site)
  ctmAccount: '362771', // CallTrackingMetrics account; its number-swap script loads through GTM
};

// Header per Sunview-Content-Build-Prompt.md, URLs per docs/content/sunview-final-sitemap.xlsx (2026-09-22).
// Pages that aren't written yet will 404 until they're built.
export const NAV = [
  // Order per QA batch 1 (2026-09-24): About · Programs · What We Treat · Therapies · Admissions · Blog.
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About Sunview', href: '/about/' },
      { label: 'Our team', href: '/our-team/' },
      { label: 'Our approach & outcomes', href: '/about/our-approach/' },
      { label: 'West Palm Beach location', href: '/locations/west-palm-beach/' },
    ],
  },
  {
    label: 'Programs',
    href: '/programs/',
    children: [
      { label: 'Partial Hospitalization (PHP)', href: '/programs/php/' },
      { label: 'Intensive Outpatient (IOP)', href: '/programs/iop/' },
      { label: 'Outpatient Program (OP)', href: '/programs/outpatient/' },
      { label: 'Psychiatry & Medication', href: '/programs/psychiatry-medication-management/' },
      { label: 'Compare levels of care', href: '/programs/' },
    ],
  },
  // Megamenu per What-We-Treat-Content-Briefs.md (2026-09-22): the only megamenu; opens on hover and click.
  {
    label: 'What We Treat',
    href: '/what-we-treat/',
    all: { label: 'All conditions we treat', href: '/what-we-treat/' },
    mega: [
      {
        label: 'Substance use',
        href: '/what-we-treat/substance-use/',
        items: [
          { label: 'Alcohol', href: '/what-we-treat/substance-use/alcohol/' },
          { label: 'Cocaine & crack', href: '/what-we-treat/substance-use/cocaine/' },
          { label: 'Opioids', href: '/what-we-treat/substance-use/opioids/' },
          { label: 'Benzodiazepines', href: '/what-we-treat/substance-use/benzodiazepines/' },
        ],
      },
      {
        label: 'Co-occurring mental health',
        href: '/what-we-treat/mental-health/',
        items: [
          { label: 'Depression', href: '/what-we-treat/mental-health/depression/' },
          { label: 'Anxiety', href: '/what-we-treat/mental-health/anxiety/' },
          { label: 'Trauma & PTSD', href: '/what-we-treat/mental-health/trauma-ptsd/' },
          { label: 'Bipolar disorder', href: '/what-we-treat/mental-health/bipolar-disorder/' },
          { label: 'Personality disorders', href: '/what-we-treat/mental-health/personality-disorders/' },
          { label: 'ADHD', href: '/what-we-treat/mental-health/adhd/' },
        ],
      },
      {
        label: 'Dual diagnosis',
        href: '/what-we-treat/dual-diagnosis/',
        note: 'When substance use and mental health feed each other.',
        cta: { label: 'Dual diagnosis treatment', href: '/what-we-treat/dual-diagnosis/' },
        items: [],
      },
    ],
  },
  {
    label: 'Therapies',
    href: '/therapies/',
    children: [
      { label: 'Internal Family Systems (IFS)', href: '/therapies/internal-family-systems/' },
      { label: 'Inner child therapy', href: '/therapies/inner-child-therapy/' },
      { label: 'CBT', href: '/therapies/cbt/' },
      { label: 'DBT', href: '/therapies/dbt/' },
      { label: 'Family therapy', href: '/therapies/family-therapy/' },
      { label: 'Group therapy', href: '/therapies/group-therapy/' },
      { label: 'Our clinical approach', href: '/about/our-approach/' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions/',
    children: [
      { label: 'Get help now', href: '/admissions/' },
      { label: 'Insurance & payment', href: '/admissions/insurance/' },
      { label: 'What to expect', href: '/admissions/what-to-expect/' },
      { label: 'For families', href: '/admissions/for-families/' },
      { label: 'FAQ', href: '/admissions/faq/' },
      { label: 'For professionals', href: '/for-professionals/' }, // answer 9.3: last item; footer link stays
    ],
  },
  // /blog/ replaced /media/ (final sitemap); /media/* 301s to /blog/*.
  { label: 'Blog', href: '/blog/' },
];

// Schedules confirmed in the questionnaire (Q7) and the live FAQ.
export const PROGRAMS = [
  {
    code: 'PHP',
    name: 'Partial Hospitalization Program',
    schedule: 'Mon–Fri · 9 AM – 1 PM',
    hours: '20 hours / week',
    bestFor:
      'Stepping down from detox or residential care, or anyone who needs the most structure and clinical support while living at home.',
    href: '/programs/php/',
  },
  {
    code: 'IOP',
    name: 'Intensive Outpatient Program',
    schedule: 'Day: 3 days/week · 9 AM – 1 PM\nEvening: Mon, Wed, Thu · 6 – 9 PM',
    // The evening line links to the Evening IOP section (QA batch 1, item 27)
    scheduleLinks: { Evening: '/programs/iop/#evening-iop' },
    hours: '9–12 hours / week',
    bestFor:
      'Working adults, parents and students who need real clinical depth but have to keep their days (or evenings) free.',
    href: '/programs/iop/',
  },
  {
    code: 'OP',
    name: 'Outpatient Program',
    schedule: '1 day/week · any day Mon–Fri · 9 AM – 1 PM',
    hours: '4 hours / week',
    bestFor:
      'Step-down after PHP or IOP, and longer-term maintenance while life gets back to normal.',
    href: '/programs/outpatient/',
  },
];

export const SUBSTANCES = [
  { name: 'Alcohol Use Disorder', slug: 'alcohol', blurb: 'One of the two substances we treat most often. Evidence-based therapy plus psychiatric support for drinking that has stopped feeling manageable.' },
  { name: 'Cocaine & Crack Cocaine', slug: 'cocaine', blurb: 'The other substance we see most. Targeted clinical work on cravings, triggers and the patterns underneath use.' },
  { name: 'Opioid Use Disorder', slug: 'opioids', blurb: 'Heroin, fentanyl and prescription painkillers, with coordination with outside MAT prescribers when appropriate.' },
  { name: 'Benzodiazepines', slug: 'benzodiazepines', blurb: 'Xanax, Valium, Klonopin and similar medications, after medical detox when long-term use makes it necessary.' },
  { name: 'Sedatives & Sleep Medications', slug: 'sedatives', blurb: 'Structured programming for sedative and sleeping-pill dependency.' },
  { name: 'Hallucinogens', slug: 'hallucinogens', blurb: 'Clinical care for hallucinogen use and the perceptual and emotional after-effects.' },
  { name: 'Polysubstance Use', slug: 'polysubstance', blurb: 'Treatment for people struggling with more than one substance at the same time.' },
];

export const MENTAL_HEALTH = [
  { name: 'Depression & Mood Disorders', blurb: 'Including persistent depression that fuels, or is fuelled by, substance use.' },
  { name: 'Anxiety & Panic Disorders', blurb: 'Generalized anxiety, panic and social anxiety that make sobriety feel impossible to sustain.' },
  { name: 'Trauma & PTSD', blurb: 'Trauma-informed care from every clinician, with deeper work as stability grows.' },
  { name: 'Personality Disorders', blurb: 'Among the co-occurring conditions we see most often, treated with DBT, IFS and relational work.' },
  { name: 'Bipolar Disorder', blurb: 'Psychiatric medication management through Telemed Clinix alongside therapy.' },
  { name: 'ADHD', blurb: 'Psychiatric evaluation through Telemed Clinix, with therapy that accounts for attention and impulsivity.' },
];

// Accepted insurance logos (Home insurance section and anywhere logos are shown), in the Client Wiki's
// order (2026-09-22): commercial payers first, never lead with Medicaid. Sources: vector SVGs from
// Regain-hope-site (Aetna, Cigna, UnitedHealthcare, Humana), Wikimedia Commons (Molina), and the live
// sunviewwellness.com (the rest). Note: the live site mislabeled two files (its "United Healthcare"
// was Humana and its "Molina" was UnitedHealthcare).
// `w` = display width (px): balanced by aspect ratio so logos read the same size, then fine-tuned by the
// client (2026-09-22: AmeriHealth +50, Florida Blue +30, Molina −20, UnitedHealthcare −20, Oscar −20).
export const INSURANCE = [
  { name: 'Aetna', logo: '/images/logos/insurance/aetna.svg', w: 171 },
  { name: 'Florida Blue', logo: '/images/logos/insurance/florida-blue.webp?v=2', w: 230 },
  { name: 'Cigna', logo: '/images/logos/insurance/cigna.svg', w: 102 },
  { name: 'UnitedHealthcare', logo: '/images/logos/insurance/unitedhealthcare.svg', w: 111 },
  { name: 'Oscar', logo: '/images/logos/insurance/oscar.webp?v=2', w: 134 },
  { name: 'Ambetter', logo: '/images/logos/insurance/ambetter.webp?v=2', w: 140 },
  { name: 'Humana', logo: '/images/logos/insurance/humana.svg', w: 169 },
  { name: 'Sunshine Health', logo: '/images/logos/insurance/sunshine-health.webp?v=2', w: 132 },
  { name: 'AmeriHealth Caritas Florida', logo: '/images/logos/insurance/amerihealth-caritas.webp?v=2', w: 172 },
  { name: 'Molina Healthcare', logo: '/images/logos/insurance/molina.svg', w: 114 },
  { name: 'Community Care Plan', logo: '/images/logos/insurance/community-care-plan.webp?v=2', w: 137 },
];

export const CARRIERS = [
  'Aetna',
  'Florida Blue',
  'Cigna',
  'UnitedHealthcare',
  'Ambetter',
  'Molina Healthcare',
  'AmeriHealth Caritas',
  'Oscar',
  'Community Care Plan',
  'Sunshine Health',
  'Medicaid',
  'Other / Not sure',
];

// Accreditation badges, in the client's order: Joint Commission · Action Alliance · SAMHSA · NAATP.
// `logo` for light grounds, `logoOnDark` for teal. Joint Commission's gold seal
// works on both. Sources: breathe-website (Joint Commission, NAATP), Regain-hope-site (SAMHSA).
// National Action Alliance for Suicide Prevention: from the live sunviewwellness.com homepage
// (300px raster; ask the client for a vector if it needs to render larger).
// url: verification link for the seal. null = no link yet: every component renders the seal as a plain image
// (Decisions 2026-09-24, placeholder policy). Set the URL to make it a link.
export const ACCREDITATIONS = [
  { name: 'The Joint Commission', url: null, logo: '/images/accreditations/joint-commission.webp', logoOnDark: '/images/accreditations/joint-commission.webp', w: 240, h: 240 },
  { name: 'National Action Alliance for Suicide Prevention', url: null, logo: '/images/accreditations/action-alliance.webp', logoOnDark: '/images/accreditations/action-alliance-white.webp', w: 196, h: 92 },
  { name: 'SAMHSA', url: null, logo: '/images/accreditations/samhsa.svg', logoOnDark: '/images/accreditations/samhsa-white.svg', w: 83, h: 28 },
  { name: 'National Association of Addiction Treatment Providers', url: null, logo: '/images/accreditations/naatp.svg', logoOnDark: '/images/accreditations/naatp-white.svg', w: 159, h: 50 },
];

// The team roster lives in src/data/team.js (Wiki names and titles). The old TEAM list condensed from the live
// /about-us/ page was unused and contradicted the Wiki (Karissa Delaney, Walter's live-site credentials), so it was removed.
export const initials = (name) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

// Program pages (Programs-Content-Briefs.md, 2026-09-22): every program page ends its body with a visible
// reviewed-by block and carries `reviewedBy` in the page schema. No headshot exists yet (the live site has
// none), so the block shows initials until the client sends one: set `photo` then.
export const REVIEWERS = {
  frank: {
    name: 'Frank Galimidi',
    creds: 'CASAC, CAP, CRADC, ICADC, NCAC II, SAP',
    role: 'Chief Executive Officer',
    href: '/our-team/frank-galimidi/',
    photo: null,
  },
  // Clinical pages (mental health, trauma, dual diagnosis) per What-We-Treat-Content-Briefs.md
  dana: {
    name: 'Dana Martin',
    creds: 'Ph.D., LMFT, MCAP, QS',
    role: 'Clinical Director',
    href: '/our-team/dana-martin/',
    photo: null,
  },
};
export const REVIEWER = REVIEWERS.frank;
export const LAST_REVIEWED = '2026-09-22';
