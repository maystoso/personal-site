import { defineConfig } from 'astro/config';

// Static output — Cloudflare Pages serves this directly, no adapter needed.
// If you later add a contact-form API route or other server logic, swap to
// `output: 'server'` and add the `@astrojs/cloudflare` adapter.
export default defineConfig({
  site: 'https://mykaescaran.dev',
  output: 'static',
});
