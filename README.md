# Reference-layout replica (Lorem Ipsum)

Astro + Tailwind v4 + GSAP. Five pages: `/`, `/rollups`, `/metalayer`, `/blog`, `/era`.
All copy is Lorem Ipsum; images are hot-linked from Unsplash; graphics are custom looping SVG/canvas.

    npm install
    npm run dev        # http://localhost:4321
    npm run build      # static output in dist/
    npm run deploy     # astro build && wrangler deploy (Cloudflare Workers static assets, see wrangler.jsonc)

- `DESIGN.md`, `src/styles/theme.css`, `src/styles/variables.css`, `src/styles/tokens/tokens.json` — governing style docs
- `REFERENCE.md`, `reference/<page>/REFERENCE.md` — measurements of the reference pages (screenshots are not committed)
- `DECISIONS.md` — every decision made without asking, plus the final QA numbers
- `src/data/*.ts` — all copy and image URLs
- `qa/` — Playwright geometry check (`shoot.mjs`) and screenshot comparison scripts; expect Chrome at /usr/bin/google-chrome
