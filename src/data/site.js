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
  {
    label: 'Programs',
    href: '/programs/',
    children: [
      { label: 'Partial Hospitalization (PHP)', href: '/programs/php/', note: 'Mon–Fri, 9am–1pm' },
      { label: 'Intensive Outpatient (IOP)', href: '/programs/iop/', note: 'Day or evening, 3 days a week' },
      { label: 'Outpatient Program (OP)', href: '/programs/outpatient/', note: 'One day a week' },
      { label: 'Psychiatry & Medication', href: '/programs/psychiatry-medication-management/', note: 'Telemed Clinix, continues after discharge' },
      { label: 'Compare levels of care', href: '/programs/', note: 'Which one fits you' },
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
export const ACCREDITATIONS = [
  { name: 'The Joint Commission', url: '{{SEAL_URL_JOINT_COMMISSION}}', logo: '/images/accreditations/joint-commission.webp', logoOnDark: '/images/accreditations/joint-commission.webp', w: 240, h: 240 },
  { name: 'National Action Alliance for Suicide Prevention', url: '{{SEAL_URL_ACTION_ALLIANCE}}', logo: '/images/accreditations/action-alliance.webp', logoOnDark: '/images/accreditations/action-alliance-white.webp', w: 196, h: 92 },
  { name: 'SAMHSA', url: '{{SEAL_URL_SAMHSA}}', logo: '/images/accreditations/samhsa.svg', logoOnDark: '/images/accreditations/samhsa-white.svg', w: 83, h: 28 },
  { name: 'National Association of Addiction Treatment Providers', url: '{{SEAL_URL_NAATP}}', logo: '/images/accreditations/naatp.svg', logoOnDark: '/images/accreditations/naatp-white.svg', w: 159, h: 50 },
];

// Bios condensed from sunviewwellness.com/about-us/. No headshots exist yet, so cards show initials.
export const TEAM = [
  {
    group: 'Leadership',
    people: [
      {
        name: 'Frank Galimidi',
        role: 'Chief Executive Officer',
        creds: 'CASAC · CAP · CRADC · ICADC · NCAC II · SAP',
        bio: 'Frank brings more than 23 years in addiction treatment and behavioral healthcare leadership. Both are built on one idea: people should leave treatment defined by growth and purpose, not by their past. He writes and speaks widely on extended and community-based care.',
      },
      {
        name: 'Dana Martin',
        role: 'Clinical Director',
        creds: 'Ph.D. · LMFT · MCAP · QS',
        bio: 'Dana holds a Ph.D. in Couple and Family Therapy and an MS in Marriage and Family Therapy from Nova Southeastern University. Her systems-based training shapes Sunview’s whole clinical model. She reviews every pre-screening, recommends each client’s level of care and supervises the clinical team. She is a contributing author to books on families navigating substance use.',
      },
    ],
  },
  {
    group: 'Clinical Team',
    people: [
      {
        name: 'Gabriel Peña',
        role: 'Lead Therapist',
        creds: 'Ed.S. · LMHC · QS',
        bio: 'Licensed Mental Health Counselor and Qualified Supervisor (FAU). Gabriel works across substance use, co-occurring conditions, trauma and identity-related stress, particularly in LGBTQ+ populations, using an integrative, trauma-informed approach. He is EMDR-trained and draws on EMDR-informed techniques in individual sessions when clinically appropriate.',
      },
      {
        name: 'Matthew Snyder',
        role: 'Group Facilitator',
        creds: 'LCSW',
        bio: 'Founder of Therapeutic Health Services in Palm Beach Gardens and former Program Director of a Palm Beach County nonprofit treatment program. Matthew uses experiential methods like Sand Tray and sits on the FAU Sandler School of Social Work board.',
      },
      {
        name: 'Walter Bierschenk',
        role: 'Group Facilitator',
        creds: 'LMHC · EMT-P · NERPSC',
        bio: 'Retired 25-year fire-service veteran, Behavioral Health Professional for Palm Beach Gardens Fire Rescue and former US Naval Aircrewman and Rescue Swimmer. Walter brings a first-responder’s understanding of stress, resilience and asking for help.',
      },
      {
        name: 'Maria Nowak',
        role: 'Primary Therapist',
        creds: 'MS · Registered Mental Health Counseling Intern',
        bio: 'Bilingual in English and Spanish. Maria works with immigrants and diverse populations navigating substance use, trauma and mood disorders, with a focus on cultural sensitivity.',
      },
      {
        name: 'Jillian John',
        role: 'Primary Therapist',
        creds: 'MSW · Registered Clinical Social Worker Intern',
        bio: 'More than ten years in the child welfare system. Jillian draws on CBT, DBT, attachment-based and narrative therapies, and offers faith-based Christian counseling for clients who want it.',
      },
      {
        name: 'Laura Contreras',
        role: 'Primary Therapist',
        creds: 'MS · Registered Mental Health Intern',
        bio: 'Nova Southeastern graduate with a warm, collaborative, trauma-informed style grounded in DBT and CBT. Her earlier work in eating-disorder treatment admissions still shapes how she meets clients.',
      },
      {
        name: 'Mia Grazel',
        role: 'Group Facilitator',
        creds: 'BS Psychology · MS Forensic Psychology (in progress)',
        bio: 'Mia leads groups on family dynamics, boundaries, emotional regulation, goal setting and CBT/DBT coping skills, with collaboration and genuine connection at the center.',
      },
    ],
  },
  {
    group: 'Support Staff',
    people: [
      {
        name: 'Scott Belovicz',
        role: 'Director of Clinical Outreach',
        creds: '14+ years in substance use & mental health treatment',
        bio: 'Scott has worked across private and nonprofit treatment for more than 14 years. His humor and passion for recovery help new clients feel at home from the first call.',
      },
      {
        name: 'Karissa Delaney',
        role: 'Office Manager',
        creds: 'Operations & Client Support',
        bio: 'Karissa keeps scheduling, communication and daily operations running so clients and families always have someone dependable to reach.',
      },
    ],
  },
];

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
