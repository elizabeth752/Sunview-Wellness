// Therapies branch (Therapies-Content-Briefs.md, 2026-09-23): hub + 6 pages. Psychodynamic therapy lives
// inside /therapies/inner-child-therapy/ and psychodrama inside group therapy (no standalone pages).
// `related` = the two most related therapy pages (brief: every page links to them).
export const THERAPIES_HUB = { name: 'Therapies', href: '/therapies/' };

export const THERAPIES = [
  { slug: 'group-therapy', name: 'Group Therapy', label: 'Group therapy', href: '/therapies/group-therapy/', line: 'One continuous group, one facilitator, with honest feedback and experiential work.', related: ['family-therapy', 'dbt'] },
  { slug: 'inner-child-therapy', name: 'Inner Child Therapy', label: 'Inner child therapy', href: '/therapies/inner-child-therapy/', line: 'Psychodynamic work on the why behind the behavior, and learning to respond as who you are today.', related: ['internal-family-systems', 'family-therapy'] },
  { slug: 'family-therapy', name: 'Family Therapy', label: 'Family therapy', href: '/therapies/family-therapy/', line: 'A systems lens on recovery, with family contact in the first week when you agree.', related: ['group-therapy', 'inner-child-therapy'] },
  { slug: 'internal-family-systems', name: 'Internal Family Systems (IFS)', label: 'Internal Family Systems (IFS)', href: '/therapies/internal-family-systems/', line: 'Understanding the parts of you that protect, cope and sometimes reach for a substance.', related: ['inner-child-therapy', 'dbt'] },
  { slug: 'cbt', name: 'Cognitive Behavioral Therapy (CBT)', label: 'Cognitive behavioral therapy (CBT)', href: '/therapies/cbt/', line: 'Recognize the thought, change the response, and understand where it came from.', related: ['dbt', 'inner-child-therapy'] },
  { slug: 'dbt', name: 'Dialectical Behavior Therapy (DBT)', label: 'Dialectical behavior therapy (DBT)', href: '/therapies/dbt/', line: 'Skills to sit with discomfort and regulate emotions without using.', related: ['cbt', 'internal-family-systems'] },
];

export const therapyBySlug = (slug) => THERAPIES.find((t) => t.slug === slug);
