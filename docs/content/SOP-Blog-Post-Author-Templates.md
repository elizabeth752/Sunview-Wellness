# SOP: Blog, Post and Author/Team Templates
Elev8 standard for rehab and behavioral-health sites. Applies to any client and any stack. Scope: structure, layout and technical behavior of the three templates. Content strategy (keywords, sources, interlinks) is governed by the Rehab Website Playbook; this SOP only fixes the architecture that makes that strategy possible.

---

## 0. Rules shared by the three templates
- **Banner** identical to the Home hero (same background, height, typography). **No form** in any of the three. Breadcrumb above the H1 (Blog: `Home › Blog`; Post: `Home › Blog › Post title`; Person: `Home › Our Team › Name`). Nothing else above the H1.
- **Max-width** = the header's container width (if the header is 1200px, every section is 1200px). Exceptions only for full-bleed decorative bands and the insurance carousel.
- **No pagination URLs, no filter URLs.** Filtering, "load more" and carousels never change the URL and never create `?page=`, `/page/2/` or `/category/x/` pages. Every post is reachable from the sitemap and from the blog page's HTML.
- **Everyone has one page.** Team members and authors share the same person template at `/our-team/{first-last}/` (or the site's team path). Bylines, author filters and team cards all link there. Never a separate `/author/` page; native CMS author archives are `noindex`.
- **Cards** are one shared component used on the blog page, the post's related/latest blocks and the person page.
- **Phone numbers** through the site's single phone variable (call-tracking swap). Never hardcoded.
- **Headings:** one H1 per page; H2/H3 in order; labels and eyebrows as `<span>`; card titles are not headings inside the card (use a styled `<p>` or the link) unless the section's heading hierarchy allows H3.
- **Images:** feature images are generated brand graphics, not photos and not stock. Person photos are real headshots or the branded initials placeholder (kept ready in case the client decides to launch with placeholders).

---

## 1. Blog template (`/blog/`)

**Order of sections**
1. Banner: breadcrumb, H1, one paragraph. No form.
2. **Authors row**: horizontal list of available authors, photo + name (+ credentials), one after another. Clicking an author filters the cards on the same page (no URL change) and the name links to that person's page. Only people with at least one published post appear here.
3. **Category tabs/buttons**: `All` first, then one tab per category that has at least one post. Tabs are generated from the post data: a new category on a new post creates its tab automatically; no manual list. Tabs filter on the same page (no URL change). Author filter and category filter combine.
4. **Cards grid**: first row 2 cards (the 2 most recent posts, larger), then rows of 3 (the following posts, newest first). All published posts are rendered in the HTML; filtering hides/shows them client-side. If a "load more" control is used it reveals cards already in the DOM; it never fetches a new URL.
5. **CTA** before the footer: H2, paragraph, call button.
6. Footer.

**Card anatomy**
- Feature image: branded graphic (brand pattern, e.g. waves/arcs) with the post title on it; background color varies by category from the brand palette (one color per category, defined once in a config map). Same graphic is the post's `og:image`.
- Category label · author photo + name · excerpt ≈ 3 lines (the meta description or a dedicated excerpt) · `Read more →`.
- No publication date on cards. Optional: read time.
- The feature image and the title both link to the post. Author photo/name link to the person page.

**Empty states:** if a filter combination has no posts, show a one-line message and a `Show all` link that resets filters.

---

## 2. Post template (`/blog/{slug}/`)

**Banner** (same as Home, no form): breadcrumb, H1. Below the H1, two blocks side by side:
- Left: author photo, name (with credentials), role (e.g. Therapist, CEO), bio excerpt of max 3 lines, `Read more →` to the person page.
- Right: category, publication date, `Share on` (Facebook, X, LinkedIn, WhatsApp; share the canonical URL).
- **Mobile/tablet:** the author block collapses to photo + name + role in one line; date and category stay; share icons stay.

**Body layout** (desktop ≥1024px)
- Two columns inside the max-width: article + sticky sidebar, ~30px gap. Section background: a light brand tint. Article container and every sidebar card: white.
- **Article column:** the content (H2/H3, paragraphs, lists, images, quotes). At the end, in this order: `Sources` (H3 or styled label; numbered or bulleted list of verified links, `rel="nofollow noopener"` to external domains) · `Share on` again · author mini-card (photo, name, role, first ≈5 lines of bio, `Read more →`) · `Latest articles`: 3 most recent posts (excluding the current one) using the shared card.
- **Sidebar (sticky):** 1) Table of contents built from the article's H2s only, rendered as a list with bullets; smooth scroll; the target heading must land below the sticky header (use `scroll-margin-top` = header height + 16px); active item highlighted on scroll. 2) Mini CTA: short line + call button. 3) Insurance carousel: shows 1.3 logos (one full, the next partially visible), infinite loop, automatic, smooth, pauses on hover, links to the insurance page. 4) One Google review (verbatim, name/initial, stars, link to reviews). 5) Related articles: 1–3 cards, same category first, then latest.
- **Tablet and mobile (<1024px):** no sidebar. Below the banner, a `Table of contents` tab/button opens a popup/drawer with the same H2 list; closed by default, never auto-opens. The mini CTA becomes the sticky bottom call bar the site already uses. Insurance carousel, review and related articles render after the article, before the CTA, in that order.
- **Floating button:** a small fixed `Article tools` button (opens the same drawer: ToC + call) is allowed on mobile if the site uses it.

**After the body:** CTA (H2, paragraph, call button) · footer.

**Technical**
- Canonical = the post URL. `og:image` = the card's feature graphic. Schema: `BlogPosting` (headline, datePublished, dateModified, author → Person with `url` to the person page, publisher → Organization, image) + `BreadcrumbList`.
- Author is a reference to the person record, not free text, so a name or credential change propagates everywhere.
- Related/latest blocks exclude the current post and never link to unpublished or noindex posts.

---

## 3. Person template (`/our-team/{first-last}/`)
Used for every team member and every author; one page per person.

- Banner optional. If used, same as Home without form; breadcrumb `Home › Our Team › Name`.
- Content: photo (real or branded initials placeholder), H1 = full name with credentials (e.g. `Jhonatan Ramirez, LMFT`), role/title, full biography.
- **Below the biography, only for authors:** `Articles by {Name}` with the shared cards. If the person has ≤3 posts, a simple row/grid; if more, a carousel of 3 visible cards with prev/next arrows. Neither creates URLs. If the person has no posts, nothing is shown after the bio.
- **Do not** show "more team members", "related people" or any cross-links to other staff on a person page. Readers arriving from an article should see that author only; the team archive is where everyone is listed.
- CTA (H2, paragraph, call button) · footer.
- Schema: `Person` (name, jobTitle, image, worksFor, sameAs when LinkedIn exists) + `ProfilePage` + `BreadcrumbList`. Pages for people without a real bio are `noindex` and hidden from the team grid until the bio arrives.

---

## 4. Team archive (`/our-team/`)
Grid of person cards (photo, name + credentials, role); each card links to the person page. Grouping by role/department is allowed. No author/team cross-blocks anywhere else.

---

## 5. QA checklist before release
- Banner matches Home on the three templates; no form; breadcrumb only above the H1.
- Blog: authors row filters and links; category tabs auto-generate from data; filters combine; URL never changes; first row 2 cards, then 3; no dates on cards; every post present in the HTML.
- Post: sidebar sticky at 1024+; ToC only H2s, bullets, correct scroll offset under the header, active state; insurance carousel loops smoothly at 1.3 visible; review verbatim; related excludes current post; Sources present; share twice; author mini-card at the end; 3 latest posts.
- Mobile/tablet: no sidebar; ToC tab/popup closed by default; author simplified in banner; floating tools button if used; sticky call bar.
- Person: no other people listed; articles block only for authors; carousel/grid creates no URLs; placeholder photo ready; noindex when bio missing.
- Widths: nothing exceeds the header container except allowed full-bleed elements.
- Schema validates (BlogPosting, Person, BreadcrumbList); canonical set; native author/category/tag archives noindex; sitemap lists blog page, posts and person pages only.
- Headings: one H1, H2→H3 order, eyebrows as `<span>` (verify with the SEO PRO extension).
- Breakpoints 375 / 390 / 768 / 1024 / 1280 / 1440: no overflow, no cut sections.
