// JSON-LD for service pages (Programs + What We Treat briefs): a WebPage,
// optionally `about` a MedicalTherapy (programs) or MedicalCondition (condition child pages, name only),
// plus the FAQPage built from the visible questions. BreadcrumbList comes from Base's `breadcrumbs` prop and
// the MedicalOrganization from Base (#organization).
import { SITE } from '../data/site.js';

const strip = (html) => html.replace(/<[^>]+>/g, '');

export function pageSchema({ path, title, description, about, faqs }) {
  const url = new URL(path, SITE.url).href;
  const page = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    publisher: { '@id': `${SITE.url}/#organization` },
  };
  if (about) page.about = about;
  if (!faqs?.length) return [page];
  return [
    page,
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: strip(f.a) } })),
    },
  ];
}

// Programs pages: `about` a MedicalTherapy provided by the organization.
export const programSchema = ({ therapy, ...rest }) =>
  pageSchema({
    ...rest,
    about: { '@type': 'MedicalTherapy', name: therapy.name, description: therapy.description, provider: { '@id': `${SITE.url}/#organization` } },
  });

// Condition child pages: `about` a MedicalCondition, name only (no invented stats).
export const conditionAbout = (name) => ({ '@type': 'MedicalCondition', name });
