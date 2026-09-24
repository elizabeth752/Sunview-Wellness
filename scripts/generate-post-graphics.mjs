// Feature graphics for the blog (SOP Blog/Post/Author §1 "Card anatomy"): one branded 1200×630 graphic per post,
// used as the card image and as the post's og:image.
//
//   node scripts/generate-post-graphics.mjs            # every post
//   node scripts/generate-post-graphics.mjs <slug>...  # only these posts
//
// Output (commit these):
//   public/images/blog/{slug}.webp     card image
//   public/images/blog/og/{slug}.png   og:image
//
// Design: category ground from CATEGORY_COLORS (src/data/posts.js), the site's SunMark "rays" (concentric arcs from
// the top-right corner) and three waves along the bottom, the category label, the post title in Playfair Display
// (wrapped to 4 lines max, shrunk until it fits) and the Sunview horizontal logo.
//
// Rendering: the graphic is an SVG (arcs, waves, logo) with the title laid out on top, rendered in headless Chromium
// so Playfair Display (embedded from @fontsource-variable) wraps and renders exactly like the site. librsvg (sharp's
// SVG renderer) can't load embedded web fonts. sharp then encodes the WebP and PNG.
// Chromium comes from Playwright, which is not a project dependency. Point the script at an installed copy:
//   PLAYWRIGHT_MODULE=/path/to/node_modules/playwright/index.mjs CHROMIUM_PATH=/path/to/chrome node scripts/…
// (CHROMIUM_PATH is optional when Playwright's own browser is installed.)
import { readFile, mkdir } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import { posts, categoryColor } from '../src/data/posts.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const W = 1200;
const H = 630;

const pwSpec = process.env.PLAYWRIGHT_MODULE;
const { chromium } = await import(pwSpec ? pathToFileURL(path.resolve(pwSpec)).href : 'playwright');

const b64 = async (p) => (await readFile(path.join(root, p))).toString('base64');
const playfair = await b64('node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2');
const nunito = await b64('node_modules/@fontsource-variable/nunito/files/nunito-latin-wght-normal.woff2');
const logoWhite = await b64('public/images/brand/sunview-logo-horizontal-white.webp');
const logoColor = await b64('public/images/brand/sunview-logo-horizontal.webp');

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const isLight = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return 0.299 * (n >> 16) + 0.587 * ((n >> 8) & 255) + 0.114 * (n & 255) > 160;
};

// Background art: rays (SunMark variant="rays", scaled) + waves (SunMark variant="waves" rhythm)
function artSvg(c, video) {
  const rings = Array.from({ length: 11 }, (_, i) =>
    `<circle cx="${W}" cy="0" r="${70 + i * 44}" stroke="${c.accent}" stroke-width="2" opacity="${(0.75 - i * 0.045).toFixed(2)}"/>`,
  ).join('');
  const waves = [
    ['M0 584c160-36 320-36 480-6s320 30 480 0 180-34 240-24', 2.2, 0.7],
    ['M0 604c180-26 340-22 500 0s320 22 480-4 170-28 220-20', 1.8, 0.5],
    ['M0 622c190-16 360-12 520 4s320 12 460-6 160-18 220-12', 1.4, 0.35],
  ]
    .map(([d, w, o]) => `<path d="${d}" stroke="${c.accent}" stroke-width="${w}" opacity="${o}"/>`)
    .join('');
  const play = video
    ? `<g transform="translate(1070 440)"><circle r="46" fill="${c.accent}"/><path d="M-12 -20 L22 0 L-12 20 Z" fill="${c.bg}"/></g>`
    : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" fill="none">
  <rect width="${W}" height="${H}" fill="${c.bg}"/>${rings}${waves}${play}</svg>`;
}

function html(post) {
  const c = categoryColor(post.category);
  const light = isLight(c.bg);
  const label = post.type === 'video' ? 'Podcast' : post.category;
  return `<!doctype html><html><head><meta charset="utf-8"><style>
  @font-face { font-family: 'PF'; src: url(data:font/woff2;base64,${playfair}) format('woff2'); font-weight: 400 900; }
  @font-face { font-family: 'NU'; src: url(data:font/woff2;base64,${nunito}) format('woff2'); font-weight: 200 1000; }
  * { margin: 0; box-sizing: border-box; }
  html, body { width: ${W}px; height: ${H}px; overflow: hidden; }
  .g { position: relative; width: ${W}px; height: ${H}px; }
  .g > svg { position: absolute; inset: 0; }
  .label { position: absolute; left: 84px; top: 76px; display: inline-flex; align-items: center; gap: 14px;
    font: 800 22px/1 'NU'; letter-spacing: .14em; text-transform: uppercase; color: ${light ? c.ink : '#fff'}; }
  .label::before { content: ''; width: 44px; height: 4px; border-radius: 4px; background: ${c.accent}; }
  .title { position: absolute; left: 84px; top: 122px; width: 850px; height: 330px; display: flex; align-items: center; }
  .title h1 { font-family: 'PF'; font-weight: 800; color: ${c.ink}; line-height: 1.1; letter-spacing: -0.01em;
    text-wrap: balance; }
  .logo { position: absolute; left: 84px; bottom: 92px; width: 210px; height: auto; }
  </style></head><body><div class="g">${artSvg(c, post.type === 'video')}
  <span class="label">${esc(label)}</span>
  <div class="title"><h1 id="t">${esc(post.title)}</h1></div>
  <img class="logo" src="data:image/webp;base64,${light ? logoColor : logoWhite}" alt="">
  </div></body></html>`;
}

const only = process.argv.slice(2);
const list = only.length ? posts.filter((p) => only.includes(p.slug)) : posts;
await mkdir(path.join(root, 'public/images/blog/og'), { recursive: true });

const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
for (const post of list) {
  await page.setContent(html(post), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // Largest size (72 → 40px) at which the title fits in ≤4 lines inside the title box
  const fit = await page.evaluate(() => {
    const h = document.getElementById('t');
    const box = h.parentElement.getBoundingClientRect();
    for (let size = 72; size >= 40; size -= 2) {
      h.style.fontSize = size + 'px';
      const r = h.getBoundingClientRect();
      const lines = Math.round(r.height / (size * 1.1));
      if (lines <= 4 && r.height <= box.height && h.scrollWidth <= box.width) return { size, lines };
    }
    return { size: 40, lines: -1 };
  });
  const png = await page.screenshot({ type: 'png' });
  await sharp(png).png({ compressionLevel: 9, palette: false }).toFile(path.join(root, `public/images/blog/og/${post.slug}.png`));
  await sharp(png).webp({ quality: 84 }).toFile(path.join(root, `public/images/blog/${post.slug}.webp`));
  console.log(`${post.slug}: ${fit.size}px, ${fit.lines} lines`);
}
await browser.close();
