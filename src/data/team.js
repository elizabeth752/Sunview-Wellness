// Team roster and person pages (/our-team/ and /our-team/{slug}/), per About-Team-Content-Briefs.md §A–B.
// Names, credentials and titles: the full Client Wiki (2026-09-22, "Authors" section, wiki txt lines 642–807)
// and its contacts list (lines 5–15). The Wiki wins over the live site.
// Bio prose: the Wiki bios plus the live About page (docs/content/live-about-us-2026-09-23.txt), lightly
// rewritten (third person, no em dashes, no "client"). Program facts in `role`: the Clinical Director
// questionnaire (Q#). Sentence-by-sentence sources: docs/content/about-team-sources-team.md.
// Nothing here may come from LinkedIn until Jhonatan provides the URLs.
//
// photo: null → branded initials placeholder on mist ({{PHOTO}}). Set a path when headshots arrive.
// linkedin: null → no LinkedIn link and no schema sameAs ({{LINKEDIN_URL}}). Set the URL to show it.
// bioPending: true → the Wiki bio is a single line and the person isn't on the live site; the page shows a
// visible "[Wiki bio pending]" marker (a fuller bio is requested, answer 3.5) next to the Wiki line.
// Posts: "Articles by {First}" is built from src/data/posts.js where post.author.name === name.

export const TEAM_GROUPS = [
  { id: 'leadership', title: 'Leadership and Clinical Direction' },
  { id: 'therapists', title: 'Therapists' },
  { id: 'facilitators', title: 'Group Facilitators and Medical Oversight' },
  { id: 'admissions', title: 'Admissions and Outreach' },
];

// Shared role copy (questionnaire Q7, Q13, Q15), reused on the pages that describe the same job.
const PRIMARY_THERAPIST_ROLE = [
  'Primary therapists at Sunview meet with each person they work with for an individual therapy session once a week, typically for 45 to 60 minutes, with extra sessions or check-ins when there’s a clinical need. Individual work sits alongside the group program in <a href="/programs/php/">PHP</a>, <a href="/programs/iop/">IOP</a> and <a href="/programs/outpatient/">outpatient care</a>.',
  'With consent, the primary therapist also makes a first family contact during the first week of programming, to introduce themselves and hear what loved ones feel would help. <a href="/admissions/for-families/">How families are involved in treatment</a>.',
];
// Answer 3.8: "ongoing clinical supervision by the Clinical Director", no frequency.
const INTERN_SUPERVISION =
  'As a registered intern, {first} receives ongoing clinical supervision by Sunview’s <a href="/our-team/dana-martin/">Clinical Director, Dana Martin</a>, who encourages clinicians to look beyond the presenting symptom and stay curious about what may be happening underneath it.';
const GROUP_LEADER_ROLE = [
  'At Sunview, day programming doesn’t rotate through a different facilitator every hour. It runs as one continuous group from 9 AM to 1 PM, with breaks, led by the same facilitator from start to finish. That consistency lets the group go deeper into the material instead of switching topics and leaders every hour.',
  'Internal Family Systems (IFS) is woven into group topics across the program, alongside CBT, DBT and trauma-informed approaches. <a href="/therapies/group-therapy/">Group therapy at Sunview</a>.',
];

export const PEOPLE = [
  // ── Leadership and Clinical Direction ─────────────────────────────────────────────
  {
    slug: 'frank-galimidi',
    metaDescription: 'Frank Galimidi, CEO of Sunview Wellness in West Palm Beach, with more than 23 years in addiction treatment and behavioral healthcare leadership.', // meta only (≤155, answer 9.1)
    name: 'Frank Galimidi',
    first: 'Frank',
    creds: 'CASAC, CAP, CRADC, NCAC II, ICADC, SAP', // Wiki order
    title: 'Chief Executive Officer',
    group: 'leadership',
    specialty: 'More than 23 years in addiction treatment and behavioral healthcare leadership.',
    credentials: [
      { abbr: 'CASAC' },
      { abbr: 'CAP' },
      { abbr: 'CRADC' },
      { abbr: 'NCAC II' },
      { abbr: 'ICADC' },
      { abbr: 'SAP', label: 'Qualified Substance Abuse Professional' },
    ],
    education: [],
    bio: [
      'As Chief Executive Officer of Sunview Wellness, Frank Galimidi brings more than 23 years of specialized experience in addiction treatment and behavioral healthcare leadership. His career has been defined by a commitment to raising the standard of care through executive strategy, operational excellence and a deep clinical understanding. Frank holds the CASAC, CAP, CRADC, NCAC II and ICADC credentials and is a qualified Substance Abuse Professional (SAP).',
      'He has been an executive at both for-profit and nonprofit agencies, and came to Sunview to lead a turnaround of the organization. Before Sunview, he was Chief Clinical Officer at Sunset House and Executive Director of the Meadows Counseling Center. Earlier, he ran a nonprofit residential and IOP program for six years.',
      'His leadership philosophy centers on two ideas: Clinical Architecture™ and moving beyond the “I = Addict” mentality. Through Clinical Architecture™, Frank builds treatment environments that foster accountability, connection, structure and sustainable recovery, helping people build lives defined not by past struggles but by growth, purpose and long-term wellness.',
      'Frank is an active contributor to industry discussions through professional publications, podcasts and leadership forums, where he advocates for treatment models that prioritize meaningful transformation over short-term stabilization.',
    ],
    highlight: 'Treatment models that prioritize meaningful transformation over short-term stabilization.',
    role: [
      'Frank leads Sunview Wellness as Chief Executive Officer, setting the strategy and the standard of care for the whole program. He is the creator of In Vivo Treatment™ and Clinical Architecture™, the two ideas behind how Sunview’s outpatient programs are built.',
    ],
    inVivo: true, // extra H2 "In Vivo Treatment™ and Clinical Architecture™" (brief §B)
    photo: null,
    linkedin: null,
  },
  {
    slug: 'dana-martin',
    metaDescription: 'Dana Martin, Ph.D., LMFT, MCAP, QS, Clinical Director at Sunview Wellness in West Palm Beach. A couple and family therapist leading a systems-based model.', // meta only (≤155, answer 9.1)
    name: 'Dana Martin',
    first: 'Dana',
    creds: 'Ph.D., LMFT, MCAP, QS',
    title: 'Clinical Director',
    group: 'leadership',
    specialty: 'Couple and family therapist who leads a systems-based clinical model.',
    credentials: [
      { abbr: 'Ph.D.', label: 'Couple and Family Therapy, Nova Southeastern University' },
      { abbr: 'LMFT', label: 'Licensed Marriage and Family Therapist' },
      { abbr: 'MCAP', label: 'Master’s Level Certified Addiction Professional' },
      { abbr: 'QS', label: 'Qualified Supervisor in Florida' },
    ],
    education: [
      'Ph.D. in Couple and Family Therapy, Nova Southeastern University',
      'MS in Marriage and Family Therapy, Nova Southeastern University',
      'BS in Psychology, Florida State University',
    ],
    bio: [
      'Dana Martin is a passionate, innovative behavioral health leader dedicated to building effective, compassionate and scalable programs. She holds a Ph.D. in Couple and Family Therapy and an MS in Marriage and Family Therapy from Nova Southeastern University, and a BS in Psychology from Florida State University. She is a Licensed Marriage and Family Therapist, a Master’s Level Certified Addiction Professional and a Qualified Supervisor in Florida.',
      'A contributing author to books on families navigating substance use disorders, Dana is known for integrating trauma-informed, narrative and DBT-based approaches. She doesn’t operate behind closed doors: she prioritizes visibility, approachability and open communication across every level of the organization, believing that a strong internal culture creates powerful clinical outcomes.',
      'Her training at the master’s and doctoral levels comes from a systems-based perspective, and it shapes how she sees the people Sunview serves. Instead of asking “What is wrong with this person?”, she wants to understand what happened to them, what they have learned and which patterns they have been living within.',
    ],
    highlight: 'Not “What is wrong with this person?” but “What happened to this person?”',
    role: [
      'As Clinical Director, Dana reviews every pre-screening assessment and recommends the level of care that fits, <a href="/programs/">PHP, IOP or outpatient</a>, using ASAM criteria alongside clinical judgment and a view of the person as a whole.',
      'Her systems perspective runs through the program’s design: space to explore relationships, family dynamics, past experiences and coping patterns, not only symptoms, and an emphasis on <a href="/therapies/family-therapy/">family involvement</a> when it’s clinically appropriate.',
      'Dana also supervises the clinical team. In supervision she asks clinicians to think systemically, with questions like “What is this behavior communicating?” and “What function does this pattern serve?”, so the team understands why an intervention is used, not only which one.',
    ],
    photo: null,
    linkedin: null,
  },

  // ── Therapists ─────────────────────────────────────────────────────────────────
  {
    slug: 'gabriel-pena',
    metaDescription: 'Gabriel Peña, LMHC, QS, Lead Therapist at Sunview Wellness in West Palm Beach. Substance use, co-occurring conditions, trauma and LGBTQ+ identity stress.', // meta only (≤155, answer 9.1)
    name: 'Gabriel Peña',
    first: 'Gabriel',
    // Brief: "LMHC, QS". The live site also lists Ed.S.; the Wiki roster wins, so Ed.S. stays out of the
    // credentials line but the degrees remain in the prose and the education list (both on the live bio).
    creds: 'LMHC, QS',
    title: 'Lead Therapist',
    group: 'therapists',
    specialty: 'Substance use, co-occurring conditions, trauma and LGBTQ+ identity-related stress.',
    credentials: [
      { abbr: 'LMHC', label: 'Licensed Mental Health Counselor' },
      { abbr: 'QS', label: 'Qualified Supervisor in Florida' },
    ],
    education: ['M.Ed. and Ed.S. in Clinical Mental Health Counseling, Florida Atlantic University'],
    // Title: Wiki contacts list ("Lead Therapist"); Wiki author entry says "Primary Therapist". Bio P3: Wiki bio.
    // EMDR: answer 3.4 allows exactly "trained in EMDR-informed approaches; Sunview does not offer EMDR as a service".
    bio: [
      'Gabriel Peña is a Licensed Mental Health Counselor and Qualified Supervisor in Florida. He holds M.Ed. and Ed.S. degrees in Clinical Mental Health Counseling from Florida Atlantic University. His clinical experience spans substance use disorders, co-occurring mental health conditions, trauma and identity-related stressors, particularly within LGBTQ+ populations.',
      'Gabriel’s professional interests center on the therapeutic alliance and interpersonal connection as drivers of lasting psychological change. He uses an integrative, trauma-informed approach that incorporates CBT, Adlerian therapy and other evidence-based interventions, tailored to each person he works with.',
      'At Sunview, Gabriel is the Clinical Director’s lead therapist and covers for her when she is out. He is being developed into an assistant clinical director role and works with many of the more difficult cases. He is trained in EMDR-informed approaches; Sunview does not offer EMDR as a service.',
    ],
    highlight: 'Connection as a driver of lasting change.',
    role: [
      'As Lead Therapist, Gabriel brings his integrative, trauma-informed approach to Sunview’s outpatient programs. He works within the shared clinical foundation that runs across the program, including <a href="/therapies/internal-family-systems/">Internal Family Systems (IFS)</a>, <a href="/therapies/cbt/">CBT</a> and <a href="/therapies/dbt/">DBT</a>, while drawing on his own areas of expertise.',
      'His experience with co-occurring conditions fits the way Sunview treats <a href="/what-we-treat/dual-diagnosis/">dual diagnosis</a>: looking at how substance use and mental health influence each other rather than treating each on its own.',
    ],
    photo: null,
    linkedin: null,
  },
  {
    slug: 'tyler-shoens',
    metaRole: 'Registered Intern Therapist', // <title> only (≤60, answer 9.1)
    metaDescription: 'Tyler Shoens, MSW, RCSWI, Primary Therapist at Sunview Wellness, an outpatient addiction and mental health treatment center in West Palm Beach.', // meta only (≤155, answer 9.1)
    name: 'Tyler Shoens',
    first: 'Tyler',
    creds: 'MSW, RCSWI',
    title: 'Primary Therapist (Registered Intern)',
    group: 'therapists',
    specialty: null,
    bioPending: true, // Wiki bio is one line (used below); Tyler isn't on the live site. Fuller bio requested (3.5)
    credentials: [
      { abbr: 'MSW', label: 'Master of Social Work' },
      { abbr: 'RCSWI', label: 'Registered Clinical Social Worker Intern' },
    ],
    education: [],
    bio: ['Tyler Shoens is a full-time member of the clinical staff at Sunview Wellness and a registered intern working toward licensure.'],
    role: [...PRIMARY_THERAPIST_ROLE, INTERN_SUPERVISION.replace('{first}', 'Tyler')],
    photo: null,
    linkedin: null,
  },
  {
    slug: 'maria-nowak',
    metaRole: 'Registered Intern Therapist', // <title> only (≤60, answer 9.1)
    metaDescription: 'Maria Nowak, RMHCI, Primary Therapist at Sunview Wellness in West Palm Beach. Bilingual English and Spanish counseling with diverse populations.', // meta only (≤155, answer 9.1)
    name: 'Maria Nowak', // Wiki full name: Alpha Maria Constanza Nowak; her bio uses "Maria", so the display name stays
    first: 'Maria',
    creds: 'RMHCI',
    title: 'Primary Therapist (Registered Intern)',
    group: 'therapists',
    specialty: 'Bilingual English and Spanish counseling with diverse populations.',
    credentials: [{ abbr: 'RMHCI', label: 'Registered Mental Health Counseling Intern' }],
    education: ['Master’s in Clinical Mental Health Counseling'],
    languages: ['English', 'Spanish'],
    bio: [
      'Maria Nowak is a Registered Mental Health Counseling Intern with a master’s degree in Clinical Mental Health Counseling. Bilingual in English and Spanish, she has experience across the lifespan with diverse populations, including individuals navigating substance use, trauma, mood disorders and co-occurring mental health challenges.',
      'Maria approaches counseling with empathy, cultural sensitivity and deep respect for each person’s unique experiences, values and goals. She is committed to helping people feel understood, supported and empowered to make lasting change.',
    ],
    highlight: 'Empathy, cultural sensitivity and respect for each person’s values and goals.',
    role: [...PRIMARY_THERAPIST_ROLE, INTERN_SUPERVISION.replace('{first}', 'Maria')],
    photo: null,
    linkedin: null,
  },
  {
    slug: 'jillian-john',
    metaRole: 'Registered Intern Therapist', // <title> only (≤60, answer 9.1)
    metaDescription: 'Jillian John, RMHCI, Primary Therapist at Sunview Wellness in West Palm Beach. More than ten years in child welfare; faith-based Christian counseling.', // meta only (≤155, answer 9.1)
    name: 'Jillian John',
    first: 'Jillian',
    // Wiki: RMHCI (confirmed in the full Wiki). The live site's "MSW · RCSWI" is not used.
    creds: 'RMHCI',
    title: 'Primary Therapist (Registered Intern)',
    group: 'therapists',
    specialty: 'More than ten years in child welfare; faith-based Christian counseling.',
    credentials: [{ abbr: 'RMHCI', label: 'Registered Mental Health Counseling Intern' }],
    education: [],
    bio: [
      'Jillian John brings more than ten years of experience in the child welfare system. She provides a warm, safe and supportive environment where people feel seen, heard and empowered. Jillian also offers faith-based Christian counseling, integrating biblical principles with evidence-based therapeutic practices.',
      'Her clinical approach draws from CBT, DBT and insight-oriented, strengths-based, emotion-focused, attachment-based and narrative therapies. She considers it a true privilege to be invited into the vulnerable and meaningful parts of a person’s life.',
    ],
    highlight: 'A true privilege to be invited into the vulnerable and meaningful parts of a person’s life.',
    role: [...PRIMARY_THERAPIST_ROLE, INTERN_SUPERVISION.replace('{first}', 'Jillian')],
    photo: null,
    linkedin: null,
  },

  // ── Group Facilitators and Medical Oversight ──────────────────────────────────────
  {
    slug: 'matthew-snyder',
    metaDescription: 'Matthew Snyder, LCSW: Sand Tray and other experiential therapy for substance use, anxiety and depression at Sunview Wellness in West Palm Beach.', // meta only (≤155, answer 9.1)
    name: 'Matthew Snyder',
    first: 'Matthew',
    creds: 'LCSW',
    title: 'Contract Group Leader',
    group: 'facilitators',
    specialty: 'Experiential therapy, including Sand Tray, for substance use, anxiety and depression.',
    credentials: [{ abbr: 'LCSW', label: 'Licensed Clinical Social Worker' }],
    education: [],
    bio: [
      'Matthew Snyder is the founder of Therapeutic Health Services in Palm Beach Gardens and a former Program Director for a respected nonprofit addiction treatment program in Palm Beach County. He specializes in substance use disorders, LGBTQ+ issues, aging populations, anxiety, depression and veteran-related concerns, working with individuals, couples and families.',
      'Matthew incorporates experiential and action-oriented modalities, including Sand Tray Therapy, and serves as a Board Member for Professional Development at the FAU Phyllis & Harvey Sandler School of Social Work.',
    ],
    highlight: 'Experiential, action-oriented work, including Sand Tray Therapy.',
    role: GROUP_LEADER_ROLE,
    photo: null,
    linkedin: null,
  },
  {
    slug: 'walter-bierschenk',
    metaDescription: 'Walter Bierschenk, LCSW, Contract Group Leader at Sunview Wellness in West Palm Beach. Psychoeducation and evidence-based care for coping and resiliency.', // meta only (≤155, answer 9.1)
    name: 'Walter Bierschenk',
    first: 'Walter',
    // Brief/Wiki: LCSW (live site: LMHC · EMT-P · NERPSC). The fire-service, Navy and VA background is
    // omitted: allowed only if it's in the Wiki bio, and the full Wiki's bio for Walter is blank (answer 3.3 = E).
    creds: 'LCSW',
    title: 'Contract Group Leader',
    group: 'facilitators',
    specialty: 'Psychoeducation and evidence-based treatment for coping and resiliency.',
    credentials: [{ abbr: 'LCSW', label: 'Licensed Clinical Social Worker' }],
    // [flag] A counseling master's with an LCSW credential: confirm the degree with Elizabeth.
    education: ['Master’s in Clinical Mental Health Counseling, Nova Southeastern University'],
    bio: [
      'Walter Bierschenk holds a master’s degree in Clinical Mental Health Counseling from Nova Southeastern University. He combines psychoeducation and evidence-based treatments to guide the people he works with toward improved coping strategies and resiliency.',
    ],
    role: GROUP_LEADER_ROLE,
    photo: null,
    linkedin: null,
  },
  {
    slug: 'jose-toledo',
    name: 'Jose Toledo',
    first: 'Jose',
    creds: 'M.D.',
    title: 'Medical Oversight',
    group: 'facilitators',
    specialty: null,
    bioPending: true, // Wiki bio: "Contracted medical doctor" (the rest of that line is internal, not published). Fuller bio requested (3.5)
    credentials: [{ abbr: 'M.D.', label: 'Doctor of Medicine' }],
    education: [],
    bio: ['Jose Toledo, M.D., is a contracted medical doctor who provides medical oversight at Sunview Wellness.'],
    role: [
      'In the Medical Oversight role, Dr. Toledo brings a physician’s perspective to Sunview’s outpatient programs.',
      'Psychiatric evaluation and medication management are provided through Sunview’s partner, Telemed Clinix, and are coordinated as part of treatment. <a href="/programs/psychiatry-medication-management/">Psychiatry and medication management at Sunview</a>.',
    ],
    photo: null,
    linkedin: null,
  },

  // ── Admissions and Outreach ────────────────────────────────────────────────────
  {
    // Surname unconfirmed (3.1 = E): the Wiki spells "Carissa"; the live site says "Karissa Delaney".
    // [confirm surname with Elizabeth] then rename the slug to carissa-{surname} (and add a redirect).
    slug: 'carissa',
    name: 'Carissa',
    first: 'Carissa',
    creds: '',
    title: 'Office Manager / Admissions',
    group: 'admissions',
    specialty: 'Scheduling, communication and the daily operations behind treatment.',
    credentials: [],
    education: [],
    bio: [
      'Carissa serves as Office Manager at Sunview Wellness, overseeing daily operations and supporting both staff and the people in treatment throughout the recovery process. She manages office operations, scheduling, communication and administrative coordination.',
      'Known for being dependable, organized and compassionate, Carissa is passionate about creating a welcoming environment for individuals seeking treatment and recovery.',
    ],
    highlight: 'Dependable, organized and compassionate.',
    role: [
      'Carissa handles most admissions and incoming calls at Sunview. Her role spans the office and admissions: scheduling, communication and the administrative coordination that keeps each person’s treatment running smoothly. If you’re thinking about starting, <a href="/admissions/">here’s how admissions works</a>.',
    ],
    photo: null,
    linkedin: null,
  },
  {
    slug: 'scott-belovicz',
    metaRole: 'Business Development', // <title> only (≤60, answer 9.1)
    name: 'Scott Belovicz',
    first: 'Scott',
    creds: '',
    // Brief/Wiki title wins over the live site ("Director of Clinical Outreach").
    title: 'Director of Business Development',
    group: 'admissions',
    specialty: 'More than 14 years in substance use and mental health treatment.',
    credentials: [],
    experience: ['More than 14 years in substance use and mental health treatment, across the private and nonprofit sectors'],
    education: [],
    bio: [
      'Scott Belovicz brings more than 14 years of experience across the private and nonprofit sectors in substance use and mental health treatment. Known for his approachable personality, sense of humor and genuine passion for sobriety and recovery, Scott plays an integral role in creating a supportive and welcoming environment for the people in treatment and for staff alike.',
      'Outside of work, Scott enjoys spending time with family and friends, hunting, fishing, cooking and watching football.',
    ],
    highlight: 'A genuine passion for sobriety and recovery.',
    role: [
      'As Director of Business Development, Scott is a point of contact for professionals and organizations who want to work with Sunview. <a href="/for-professionals/">Information for referring professionals</a>.',
    ],
    photo: null,
    linkedin: null,
  },
];

export const personBySlug = (slug) => PEOPLE.find((p) => p.slug === slug);
export const peopleInGroup = (id) => PEOPLE.filter((p) => p.group === id);
export const personHref = (p) => `/our-team/${p.slug}/`;
