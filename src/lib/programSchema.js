// JSON-LD for service pages (Programs, Therapies, What We Treat, Admissions, About…). Base emits one
// @graph per page (MedicalOrganization #organization, WebSite #website, BreadcrumbList {url}#breadcrumb);
// these helpers add the page's own linked nodes, without @context (Base adds it once on the graph):
// - the WebPage (or a subtype via `pageType`: MedicalWebPage, CollectionPage, AboutPage, FAQPage) at {url}#webpage,
//   optionally `about` a MedicalTherapy ({url}#therapy) or MedicalCondition ({url}#condition), name only;
// - a FAQPage ({url}#faq, isPartOf the WebPage) built from the visible questions.
// Only visible content is marked up. A FAQ item with `schema: false` stays visible but is left out of the markup
// (dedupe: the same question repeated across sibling pages is marked up on one page only). `plain` (if set)
// replaces the stripped HTML answer as the schema text.
import { SITE } from '../data/site.js';

const strip = (html) => html.replace(/<[^>]+>/g, '');
const ORG = { '@id': `${SITE.url}/#organization` };
const WEBSITE = { '@id': `${SITE.url}/#website` };

const faqQuestions = (faqs = []) =>
  faqs
    .filter((f) => f.schema !== false)
    .map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.plain ?? strip(f.a) } }));

// Give an inline MedicalTherapy / MedicalCondition `about` node a stable @id (therapies also get the provider).
function linkAbout(about, url) {
  if (!about || (about['@id'] && Object.keys(about).length === 1)) return about; // plain reference
  const node = { ...about };
  if (node['@type'] === 'MedicalTherapy') {
    node['@id'] ??= `${url}#therapy`;
    node.provider ??= ORG;
  } else if (node['@type'] === 'MedicalCondition') {
    node['@id'] ??= `${url}#condition`;
  }
  return node;
}

export function pageSchema({ path, title, description, about, faqs, pageType = 'WebPage', breadcrumb = true, extra = {} }) {
  const url = new URL(path, SITE.url).href;
  const questions = faqQuestions(faqs);
  const page = {
    '@type': pageType,
    '@id': `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: WEBSITE,
    inLanguage: 'en-US',
    publisher: ORG,
  };
  if (breadcrumb) page.breadcrumb = { '@id': `${url}#breadcrumb` };
  if (about) page.about = linkAbout(about, url);
  Object.assign(page, extra);

  // A dedicated FAQ page is one FAQPage node: the questions are its mainEntity.
  if (pageType === 'FAQPage') return [{ ...page, mainEntity: questions }];
  if (!questions.length) return [page];
  return [page, { '@type': 'FAQPage', '@id': `${url}#faq`, isPartOf: { '@id': `${url}#webpage` }, mainEntity: questions }];
}

// Programs pages: `about` a MedicalTherapy provided by the organization.
export const programSchema = ({ therapy, ...rest }) =>
  pageSchema({
    pageType: 'MedicalWebPage',
    ...rest,
    about: { '@type': 'MedicalTherapy', name: therapy.name, description: therapy.description },
  });

// Condition child pages: `about` a MedicalCondition, name only (no invented stats).
export const conditionAbout = (name) => ({ '@type': 'MedicalCondition', name });
