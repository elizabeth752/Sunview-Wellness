// What We Treat branch (What-We-Treat-Content-Briefs.md, 2026-09-22): categories and child pages, used for
// the category cards, sibling links and breadcrumbs. Blurbs stay within the questionnaire (Q3, Q5, Q16–Q19).
export const WWT = { name: 'What We Treat', href: '/what-we-treat/' };

export const CATEGORIES = {
  substance: { name: 'Substance Use', label: 'Substance use disorder treatment', href: '/what-we-treat/substance-use/' },
  mental: { name: 'Co-Occurring Mental Health', label: 'Co-occurring mental health treatment', href: '/what-we-treat/mental-health/' },
  dual: { name: 'Dual Diagnosis', label: 'Dual diagnosis treatment', href: '/what-we-treat/dual-diagnosis/' },
};

export const SUBSTANCE_PAGES = [
  { slug: 'alcohol', name: 'Alcohol', label: 'Alcohol addiction treatment', href: '/what-we-treat/substance-use/alcohol/', blurb: 'The substance we see most often. Structured outpatient care for drinking that has stopped feeling manageable.' },
  { slug: 'cocaine', name: 'Cocaine & crack', label: 'Cocaine and crack addiction treatment', href: '/what-we-treat/substance-use/cocaine/', blurb: 'One of the two substances we see most. Therapy that goes beneath the craving, with real-life practice.' },
  { slug: 'opioids', name: 'Opioids', label: 'Opioid addiction treatment', href: '/what-we-treat/substance-use/opioids/', blurb: 'The step after detox. Suboxone and Vivitrol welcome through your outside prescriber.' },
  { slug: 'benzodiazepines', name: 'Benzodiazepines', label: 'Benzodiazepine addiction treatment', href: '/what-we-treat/substance-use/benzodiazepines/', blurb: 'Outpatient care after medically supervised detox, with anxiety treated alongside.' },
];

export const MENTAL_PAGES = [
  { slug: 'depression', name: 'Depression', label: 'Depression and addiction treatment', href: '/what-we-treat/mental-health/depression/', blurb: 'Among the conditions we see most. Symptoms tracked with the PHQ-9 throughout treatment.' },
  { slug: 'anxiety', name: 'Anxiety', label: 'Anxiety and addiction treatment', href: '/what-we-treat/mental-health/anxiety/', blurb: 'Anxiety and panic treated with therapy and psychiatric care, tracked with the GAD-7.' },
  { slug: 'trauma-ptsd', name: 'Trauma & PTSD', label: 'Trauma and PTSD treatment', href: '/what-we-treat/mental-health/trauma-ptsd/', blurb: 'Every clinician is trauma-informed. Deeper work comes at a pace that’s safe for you.' },
  { slug: 'bipolar-disorder', name: 'Bipolar disorder', label: 'Bipolar disorder and addiction treatment', href: '/what-we-treat/mental-health/bipolar-disorder/', blurb: 'Medication continuity through Telemed Clinix, with stability first and deeper work after.' },
  { slug: 'personality-disorders', name: 'Personality disorders', label: 'Personality disorder and addiction treatment', href: '/what-we-treat/mental-health/personality-disorders/', blurb: 'Among the most frequent presentations. DBT, IFS and relational work in group and individual sessions.' },
  { slug: 'adhd', name: 'ADHD', label: 'ADHD and addiction treatment', href: '/what-we-treat/mental-health/adhd/', blurb: 'Structure, skills and psychiatric care, without stimulant medications during the program.' },
];

// Related-pages block (QA batch 3, item 3): at most 4 links (parent, two siblings, dual diagnosis).
export const siblings = (pages, slugs) =>
  pages.filter((p) => slugs.includes(p.slug)).map((p) => ({ label: p.label, href: p.href }));
