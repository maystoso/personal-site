# Myka Escaran — Portfolio

Astro site for resume + portfolio. Static output, deployed on Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:4321

## Project structure

- `src/data/resume.ts` — your experience, education, skills. Edit this directly.
- `src/data/projects.ts` — your portfolio pieces. Edit `image` paths to point
  at real files you add to `public/images/`.
- `src/pages/index.astro` — the page itself (hero, about, work, resume, contact).
- `src/components/` — `Header.astro`, `ProjectCard.astro`.
- `src/styles/global.css` — color/type tokens (`:root` variables) and shared styles.
- `public/resume.pdf` — drop your actual résumé PDF here; the download
  buttons already point at `/resume.pdf`.

## Adding your own images

1. Put image files (jpg/png/webp) in `public/images/`.
2. In `src/data/projects.ts`, change each `image: '/images/placeholder-1.svg'`
   to your real file, e.g. `image: '/images/my-piece.jpg'`.
3. Same idea for the hero image in `index.astro` (`/images/placeholder-3.svg`).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Cloudflare Pages

**Option A — Git integration (recommended):**
1. Push this repo to GitHub/GitLab.
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → Connect to Git.
3. Select the repo. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Build output directory: `dist`
4. Deploy. Every push to your main branch redeploys automatically.

**Option B — Wrangler CLI:**
```bash
npm install -g wrangler
npm run build
wrangler pages deploy dist --project-name=myka-escaran-portfolio
```

## Notes

- This is a fully static site — no server, no adapter needed. If you later
  want a working contact form or other server-side logic, change
  `output: 'static'` to `output: 'server'` in `astro.config.mjs` and add
  `@astrojs/cloudflare` as the adapter.
- Fonts (Cormorant Garamond, Inter) load from Google Fonts via the `@import`
  in `global.css`. Swap for self-hosted fonts later if you want to drop the
  external request.
