// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

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
      filter: (page) =>
        !page.includes('/api/') && !['/thank-you/'].some((path) => page.endsWith(path)),
    }),
  ],
});
