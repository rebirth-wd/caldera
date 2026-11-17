# Decision log — reference-layout replica (Lorem Ipsum)

Brief: replicate the caldera.xyz home page (layout, spacing, type, colour, motion) in Astro + Tailwind + GSAP,
with Rebirth copy, Unsplash images and custom looping graphics. No questions allowed; every ambiguity logged here.

## Governing docs
1. DESIGN.md at project root; `src/styles/theme.css` (Tailwind v4 @theme) and `src/styles/variables.css` (:root) imported
   directly after Tailwind in `src/styles/global.css`; `src/styles/tokens/tokens.json` kept as the token source of record.
2. Where a live measurement contradicts DESIGN.md, the measurement wins (the goal is a replica). Conflicts found:
   text on Ember buttons/cards is #f7f6f2 (doc: Obsidian / Chalk); nav gap 24px (doc 9px); hero secondary button is a
   dotted 800px pill (doc: solid, 40px); container is 1328px in 56px gutters (doc: 1280 max-width); hero media is full
   container width (doc: ~50%); active tab radius 32 and blog card padding 16 (doc: 40); blog card title 26px, tag 14px,
   date DM Sans 16px (doc: 32px / 12px system sans).
3. theme.css names spacing in px, so Tailwind `p-40` = 40px in this project.

## Content
4. Brief named both Lorem Ipsum and rebirthwebdesign.com.au as copy source: Rebirth copy used throughout
   (`src/data/copy.ts`); no Lorem Ipsum was needed.
5. Hero headline "Websites / Built To Last" (from the site's "Modern websites, built to last.") because the full
   Rebirth headline cannot fit the two-line 96px slot.
6. 189px heading "Loads Fast. / Ranks Higher." condenses "Loads in under a second" and "Engineered to rank".
7. No Caldera name, logo, partner logos or investor logos. Logo slots carry text wordmarks (stack names, section names).
   Rebirth logo is a simple mark + wordmark drawn for this build — replace with the real logo file.
8. Follower counts unknown: community tiles show platform names. Social URLs unknown: social links point to the
   contact page / community section. Newsletter endpoint unknown: form shows an inline thank-you, submits nowhere.
9. Blog titles and dates taken from rebirthwebdesign.com.au/blog. First title was returned by the fetch in two pieces
   and joined with a space — check against the live page.

## Type
10. PP Neue Corp Compact is a licensed face and is not shipped. Stack: PP Neue Corp Compact (if you add licensed
    files) → Archivo variable at 81% width, weight 900 (tuned: hero line 530px vs reference 525px) → Anton (DESIGN.md
    substitute; too narrow to hold the reference line breaks, so it is the last fallback).

## Images and graphics
11. Unsplash only; URLs, photographers and pages in `src/data/images.ts`. Photos are hot-linked from images.unsplash.com
    and rendered as duotone + halftone so they read as one set. They could not be loaded in the build sandbox, so the
    final look of the six photos is unverified. Failed photos fall back to a solid Ember/Violet block.
12. Hero MP4 → looping canvas halftone (24s seamless loop). Product illustrations → Unsplash duotone + looping
    SVG/GSAP infographics (assistant node graph; edge network). Background dot image → CSS halftone field with
    scroll-linked horizontal drift.

## Motion
13. The reference is a Framer site (no GSAP on the page). All motion is re-implemented in GSAP.
14. Measured from the reference's own animation data: hero title box x −1000→0 and description box x +1000→0
    (delay 0.6s, 0.7s), y 52→0 (1.4s, 0.4s), opacity + y 32→0 (1.6s, 0.3s); "spring, bounce 0" mapped to power3.out.
    Measured from DOM state: header collapse geometry; stat row / strip / blog cards appear from opacity 0, scale 0.9.
15. Inferred (not timed against the live site): per-character heading stagger, header collapse duration (0.45s),
    logo-strip cycle timing, tab auto-advance (5s), carousel step (0.6s), hover states, parallax amounts.

## Measurement notes
16. First capture recorded the stat cards, logo strip and blog cards mid-appear at scale 0.9; corrected to resting
    sizes (280×251 cards in a 1166px row; 422×445.5 blog cards) and confirmed against the screenshots.
17. Reference button y in the ecosystem block is 1103 (the 1127 first recorded was inconsistent with its own block).
18. Sections block is 747px (not 748) so the footer starts at the reference y of 7989.

## QA method and result (1440×723, sandbox Chromium)
- `node qa/shoot.mjs <port> F <ys> body`: 85 of 86 tagged boxes within 3px of the reference rects; page height 8386
  = reference 8386. The one miss is the first nav link's width ("Home" vs "Rollups").
- `python3 qa/compare.py`: mean-colour similarity against the 13 reference screenshots averages 92.4% (range
  84.4–97.5%); 86.4% of pixels within tolerance. The gap is the different copy, font, artwork and unloaded photos.
- Not a ≥99% pixel replica, and that figure is not reachable with different copy, font and images.
- Skipped: the brainstorming skill (requires asking questions, which the brief forbids).

## Revision 2 — Lorem Ipsum, whole front-facing site (user correction: "nothing to do with Rebirth")
19. Items 4–9 above are superseded: all copy is Lorem Ipsum with word lengths matched to the reference text
    (`src/data/*.ts`); no Rebirth copy, links or branding remain. Placeholder numbers are generic.
20. No reference brand name, logo, partner/investor logo or artwork is used; the logo is a neutral "lorem" mark and
    logo slots are Lorem wordmarks. The result is a layout template, not a copy of the reference brand.
21. Scope: /, /rollups, /metalayer, /era, /blog, /blog/[slug]. The docs link is a separate external site — excluded.
22. /era (a token page on the reference) is a neutral layout: no token name, ticker, price, address, exchange or
    wallet function; all its buttons are inert.
23. Inner-page illustrations and UI mock-ups → Unsplash duotone blocks and custom looping SVG/canvas graphics.
24. Header marks the current page with a 2px Ember underline (measured on inner pages); blog posts light the blog link.
25. Inner pages were captured at a 1440×779 viewport (the window would not resize to 723); /era's hero is
    viewport-height driven, so check it with `VH=779`.

## Revision 3 — scope and delivery (user: main-menu pages only, one directory deep; push to rebirth-wd/caldera)
26. Scope is the five main-menu pages: /, /rollups, /metalayer, /blog, /era. The blog post template was removed (it was
    never measured); blog cards link to `#`. The docs link is an external site and stays a `#` placeholder.
27. `.gitignore` and `wrangler.jsonc` (Cloudflare Workers, static assets from `./dist`, no Worker code) added;
    `npm run deploy` = `astro build && wrangler deploy`. Only `wrangler deploy --dry-run` was run.
28. Reference screenshots are git-ignored: the repository is public and they are images of a third party's site.
    The measurement notes (`REFERENCE.md`, `reference/*/REFERENCE.md`) are committed.
29. /metalayer was captured by the orchestrator (agents could not reach Chrome); its motion was not sampled.
30. /era is viewport-height driven (hero and dark card), verified at 723 and 779 high.

## Final QA (orchestrator's own runs, sandbox Chromium, 1440 wide)
| Page | Tagged boxes within 3px | Page height build / reference | Screenshot similarity (avg) |
|---|---|---|---|
| / | 83 / 86 | 8386 / 8386 | 92.3% over 13 |
| /rollups | 64 / 67 | 7262 / 7261 | 93.2% over 12 |
| /metalayer | 61 / 62 | 6674 / 6674 | 92.3% over 10 |
| /blog | 32 / 34 | 3769 / 3768.6 | 88.0% over 6 |
| /era | 44 / 47 | 5153 / 5152 | 93.1% over 6 |
Every miss is a text-width difference from placeholder words or the substitute display font. Inner-page counts exclude
the shared footer's tags (they carry home-page coordinates; the footer lands at the reference y on every page).
390px: no horizontal overflow and no page errors on any page.
Not a ≥99% pixel replica: copy, display font, photos and all illustrations differ from the reference by design.
Motion: only the home hero's timings come from the reference's animation data; the rest is inferred and was not
compared against the live site in motion.
