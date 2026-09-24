// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';
import { NOINDEX_PATHS } from './src/data/team.js';

// https://astro.build/config
export default defineConfig({
  // Production domain: drives canonical URLs and the sitemap. The live site is served without www.
  site: 'https://sunviewwellness.com',
  adapter: vercel(),
  trailingSlash: 'always', // every URL on the current WordPress site ends in "/"; keep them identical
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      // Out of the sitemap: noindex pages (thank-you; Humana payer page until products are confirmed, answer 7.2;
      // privacy policy until legal sign-off, answer 9.7) and the old URLs that 301 in production.
      filter: (page) =>
        !page.includes('/api/') &&
        ![
          '/thank-you/',
          '/admissions/insurance/humana/',
          '/privacy-policy/',
          '/terms-of-use/',
          '/hipaa-notice/',
          '/about-us/',
          '/our-approach/',
        ]
          .concat(NOINDEX_PATHS) // person pages without a real bio yet (team.js `publish: false`)
          .some((path) => new URL(page).pathname === path),
    }),
  ],
});
