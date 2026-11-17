# Reference measurements — blog index (/blog), captured 2026-11-17

Viewport 1440×723. Document height 3768.6. Rects are `x,y,w,h` in page coordinates. Screenshots (0.5 scale):
`ref-y0.jpg, ref-y560.jpg, ref-y1160.jpg, ref-y1760.jpg, ref-y2360.jpg, ref-y3045.jpg`, plus
`ref-filter-zoom.png` (filter bar close-up) and `ref-viewmore-hover.png`.
Section stack (y/height): header-space 0/112 · section-hero 112/817.4 · section-articles 929.4/2442.5 · footer 3371.9/396.7.
Header identical to home; the current page's menu link has a 2px Ember underline (r 10) at y=66.4 instead of the hover line.

## Hero (section 0,112,1440,817.4; padding 0 56; column gap 16)
- Banner `56,112,1328,363.4`: Sulfur #f5f28e, radius 40, padding 56, overflow hidden, row, align centre.
  - info `112,168,677,251.4` column gap 32: title two `<p>` lines `112,168,677,82.7` and `112,250.7,…` display 88px/82.72px obsidian
    ("Explore" 7 chars / "our news" 8 chars); paragraph `112,365.4,506,54` DM Sans 18px/27px, 2 lines, 113 chars.
  - illustration image `714,36,630,516` (object-fit cover; clipped by the banner to y 112–475): black/white line-art
    object (stack of discs on a diagonal axis running into a boxy body) — flat obsidian fills, white strokes. Static PNG in
    the reference. Here: custom looping SVG in the same position.
- Featured post card `56,491.4,1328,438`: Limestone #f7f6f2, radius 40, padding 32 40 32 32, row gap 56.
  - image link `88,523.4,665.7,374` radius 18 (cover art).
  - info `809.7,523.4,534.3,374` column space-between, padding 8 0: date `809.7,531.4,·,24.8` DM Sans 16/24.8 (11 chars);
    inner `809.7,635.4,534.3,254` gap 24: tag pill `809.7,635.4,125.7,35` Sulfur, radius 24, padding 7 12, DM Sans 14/21 (12 chars);
    title `809.7,694.4,534.3,123` display 41px/41px, 3 lines, 64 chars; button `809.7,841.4,159.5,48` dotted pill
    (1.5px dotted, radius 800, padding 12 20, gap 18, label 16/20 "Read article" 12 chars, 12×16.6 play-triangle arrow).

## Articles (section 0,929.4,1440,2442.5; padding 160 56 120)
- h2 `56,1089.4,1328,88` display 80px/88px centred (14 chars). 64px gap.
- Filter bar `56,1241.4,1328,80`: transparent, dotted obsidian outline, radius 40, padding 8 0 8 8, five equal slots of 264:
  pill `254×64` radius 48 padding 8 16 gap 8 (32px glyph + label DM Sans 18/27, centred) then 8px gap and a 2×51.2 dotted
  vertical divider. Pills at x=64,328,592,856,1120; dividers at x=326,590,854,1118,1382 (the ones next to the active pill
  and the last one are opacity 0). Active pill: Ember bg, label #f7f6f2, white glyph. Inactive: transparent, obsidian.
  Labels: "All news" (8) · "Customer" (8) · "Leadership" (10) · "Integration" (11) · "Product" (7).
  Glyphs: 2×2 dots · person bust · trophy · four-point spark · round badge with star. No visible hover change on a tab.
- 24px gap, then grid at `56,1345.4,1328,1794.5`: 2 columns of 656, gap 16, three rows shown (6 cards), row step 603.5.
  Card (whole card is a link) `656×587.5`, Limestone, radius 40, padding 16:
  image `+16,+16,624,350.9` radius 20; info padding 32 16 16: tag pill at `+32,+398.9` h 22.8 (Sulfur, radius 24, padding 3 8,
  DM Sans 14/16.8); title h5 `+32,+437.7,592,77` display 32px/38.4px letter-spacing 0.64px (1–2 lines; 21–79 chars);
  date `+32,+530.7` DM Sans 16/24.8. No visible hover change captured on a card.
  Title lengths in order: 79, 37, 38, 21, 40, 50. Tags: 5× "Customer", 1× "Leadership".
- "View more" `614,3195.9,212,56`: Obsidian pill, radius 800, DM Sans 18/20 #f7f6f2, centred, 56px below the grid
  (inside the grid wrapper's 112px bottom padding). Hover: slightly lighter obsidian (≈#1c1c1c).
- Not exercised (read-only capture, no clicks): what a filter tab or "View more" does. Built as inference:
  tab filters the grid by category; "View more" reveals six more cards.

## Motion
- Framer appear data holds one entry only: opacity 0.001→1, y −32→0, tween 0.4s ease [0.37,0.97,0.64,1] (header-style drop-in).
- No tickers, carousels or videos on this page.
