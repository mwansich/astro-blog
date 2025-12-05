// @ts-check
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), sitemap()],
  site: "https://deluxe-frangipane-d091d8.netlify.app/"
});