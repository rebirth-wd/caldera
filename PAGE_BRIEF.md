# Brief for inner-page agents

You are building ONE page of an Astro + Tailwind v4 + GSAP site in /home/claude/site. The site is a layout/motion
replica of a reference marketing site, filled with Lorem Ipsum placeholder copy. The home page is finished; match its
conventions. Other agents are building other pages at the same time — edit ONLY the files you own.

## Hard rules
- Copy: Lorem Ipsum only, with word counts/lengths matched to the reference text so lines wrap the same way. Keep numbers
  as generic placeholder numbers. NO real brand, product, company, person or token names anywhere (not the reference
  site's, not its partners'). No reference logos or artwork: logo slots get short Lorem display-type wordmarks; the site
  logo is `src/components/Logo.astro`.
- Images: Unsplash only, hot-linked `images.unsplash.com/photo-…` URLs that you actually saw in a WebSearch/WebFetch
  result (never construct an ID), no faces or recognisable people, no logos; render them with the duotone + halftone
  treatment used in `src/components/Products.astro`. If you cannot verify a photo, use a solid Ember/Violet block.
  Do not download or embed any image, video or font from the reference site.
- Reference videos / animated illustrations: replace with custom looping graphics in the site's style (canvas or inline
  SVG driven by a repeating GSAP timeline, seamless loop, paused off-screen) — see `Hero.astro` and
  `ProdGraphicAssistant.astro` for the house style.
- Style docs govern before your own judgement: `DESIGN.md`, `src/styles/theme.css`, `src/styles/variables.css`,
  `src/styles/tokens/tokens.json`. Where your live measurement contradicts DESIGN.md, use the measurement and list the
  conflict in your report. Tokens only (CSS vars); theme.css names spacing in px (`p-40` = 40px). `.display` class for
  display type with explicit size/line-height; body DM Sans 500 only; no shadows; no extra accent colours.
- Motion: GSAP only, via `src/scripts/motion.ts` (gsap, ScrollTrigger, splitChars, EASE, reduced); headings with
  `data-reveal="chars"` reveal automatically. Reproduce the reference's appear values where you can read them.
- Reuse: `Base.astro` layout, `Header.astro`, `Footer.astro`, `DotField.astro`, `Icon.astro`, `Logo.astro`, the `.btn*`
  classes in `global.css`. Page skeleton = same as `src/pages/index.astro` (Header, 112px spacer, your sections, Footer).
  Do not edit shared files; if one needs a change, say so in your report.
- Put all copy for your page in `src/data/<page>.ts`; components in `src/components/<page>/`.
- Desktop 1440 is the measured target; also degrade sensibly at 390px (no horizontal overflow).
- Tag key boxes with `data-ref="x,y,w,h"` (resting reference rect, page coords) and `data-qa` names; every section's
  outer height must equal the reference so the page height matches.

## Workflow
1. Read `CAPTURE.md` and capture your page exactly as it describes (lock, own tab, read-only, close tab, unlock).
   Write `reference/<page>/REFERENCE.md` and save the screenshots before you start building.
2. Build. Never run `astro build`. Run your own dev server on your assigned port:
   `npx astro dev --port <PORT> --ignore-lock > /tmp/dev<PORT>.log 2>&1 &`
3. Verify: `node qa/shoot.mjs <PORT> <PREFIX> <y1,y2,...> body <path>` prints data-ref deltas and writes
   `qa/out/<PREFIX>-y<Y>.png`. Read those PNGs next to your reference JPGs. Iterate until boxes are within 3px and
   the structure matches. Unsplash will not load in this sandbox — verify the fallback and the `<img>` markup.
   Check 390px for overflow. Kill your dev server when done.
4. Report (concise): what you built; final shoot.mjs summary and any OFF rows of yours with the reason; decisions and
   ambiguities you resolved (one line each); DESIGN.md conflicts; what still differs from the reference; what you
   could not verify. Do not claim anything you did not observe.
