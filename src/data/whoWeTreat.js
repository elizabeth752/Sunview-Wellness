// Who We Treat section (2026-10-15). Built after the 2026-10-15 status call: Frank asked how to reach
// stable people who live at home and need outpatient care (working adults, students, young adults,
// failure to launch), and agreed to audience pages "as long as we don't say we have a specific track".
// Rule for every page in this section: these are people Sunview welcomes into its regular PHP, IOP and
// OP groups. Never claim a dedicated track, group, curriculum or program for an audience.
// Keyword research: Semrush US, 2026-10-15 (volumes in each page's header comment).

export const WHO = { name: 'Who We Treat', href: '/who-we-treat/' };

export const AUDIENCE_PAGES = [
  {
    slug: 'working-professionals',
    href: '/who-we-treat/working-professionals/',
    label: 'Working professionals',
    icon: 'briefcase',
    short: 'Treatment that fits around your job, including evening IOP after work.',
  },
  {
    slug: 'young-adults',
    href: '/who-we-treat/young-adults/',
    label: 'Young adults',
    icon: 'compass',
    short: 'Outpatient care for adults 18 and up who are building a life of their own.',
  },
  {
    slug: 'failure-to-launch',
    href: '/who-we-treat/failure-to-launch/',
    label: 'Failure to launch',
    icon: 'home',
    short: 'For adult children who feel stuck at home, and the parents trying to help.',
  },
  {
    slug: 'college-students',
    href: '/who-we-treat/college-students/',
    label: 'College students',
    icon: 'layers',
    short: 'Treatment you can schedule around classes, so the semester survives.',
  },
  {
    slug: 'first-responders',
    href: '/who-we-treat/first-responders/',
    label: 'First responders',
    icon: 'shield',
    short: 'Trauma-informed outpatient care that works around shift schedules.',
  },
];

// Hub only: people welcomed without a page of their own. Each links to where the relevant facts live.
export const ALSO_WELCOME = [
  { icon: 'users', title: 'Parents and caregivers', text: 'Day programs run 9 AM to 1 PM, and evening IOP starts at 6 PM, so school runs and bedtimes stay yours.', href: '/admissions/for-families/', link: 'For families' },
  { icon: 'refresh', title: 'People leaving detox or residential care', text: 'PHP is built to catch you on the way out, so structure tapers instead of stopping the day you are discharged.', href: '/programs/php/', link: 'Partial Hospitalization Program' },
  { icon: 'pill', title: 'People who need medication support', text: 'Psychiatric evaluation and medication management through Telemed Clinix, scheduled for you, in a private office on site.', href: '/programs/psychiatry-medication-management/', link: 'Psychiatry and medication' },
  { icon: 'heart', title: 'LGBTQ+ adults', text: 'Our Lead Therapist, Gabriel Peña, works with substance use, trauma and the stress that comes with LGBTQ+ identity.', href: '/our-team/gabriel-pena/', link: 'Meet Gabriel' },
  { icon: 'message', title: 'Spanish speakers', text: 'Maria Nowak, one of our primary therapists, counsels in both English and Spanish.', href: '/our-team/maria-nowak/', link: 'Meet Maria' },
];
