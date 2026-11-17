# Reference measurements — /era page, captured 2026-11-18

Viewport 1440×**779** (this capture's Chrome gave 779, not the home page's 723; `resize_window` did not change it).
Document height 5264. Rects are `x,y,w,h` in page coordinates. Reference is a Framer site.
Hero and the dark "address" card are viewport-height driven (hero wrapper = 100vh = 779; header-space = 10vh = 77.9;
section-hero = 90vh = 701.1; dark card height 779). All numbers below are for a 779px-tall viewport —
verify with a 1440×779 viewport (`reference/era/shoot779.mjs`), not the 723 of `qa/shoot.mjs`.

Section stack (y, height): hero 0/779 · features 779/1449.6 · reserve 2228.6/800 · address 3028.6/891 ·
community ("buy") 3919.6/948 · footer 4867.6/396.7.

## Header (fixed, orange variant "Desktop Wide - Orange")
Same geometry as home (wrapper `40,24,1360,64`, logo `64,40,152,32`, menu x=284 …). Differences on this page at top:
menu links are Limestone #f7f6f2 (over the ember hero), CTA pill `1256,32,136,48` is Limestone fill with Ember text,
current-page link has a 2px Ember line (radius 10) at y=66.4 under it (`516,66,39,2`).

## Hero (0,0,1440,779; padding 16)
- Wrapper `16,16,1408,747` ember #fc5000, radius 32. Inside, full-bleed halftone texture image at opacity 0.5
  (dark-orange dot field, bands of larger/smaller dots — see ref-y0.jpg). Here: custom canvas halftone.
- section-hero `0,77.9,1440,701.1` flex column, centred, gap 8, padding 0 56:
  - line 1 h1 `547.6,166.6,344.8,112.8` display 120px/112.8px obsidian, 5 chars ("X XXX")
  - line 2 h1 `374.5,287.4,691,282` display 300px/282px colour #e2e2df (pumice), 4 chars
  - line 3 h1 `520.1,577.4,399.8,112.8` display 120px/112.8px obsidian, 7 chars ("XX XXXX")
- Appear data (Framer): (a) opacity 0.001→1, y −32→0, tween 0.4s ease [0.37,0.97,0.64,1] (header, translateX(-50%));
  (b) opacity 0.001→1, spring bounce 0.2, 0.4s.

## Features (0,779,1440,1449.6; padding 56; container 56,835,1328,1337.6 column gap 64)
- Heading block `56,835,1328,273.6` padding 24: two left-aligned lines, each `80,·,1280,112.8` display 120px/112.8px
  obsidian at y=859 and 971.8. Texts: 16 chars and 18 chars.
- Cards area `56,1172.6,1328,1000` flex row, three wrappers 442.7 wide, padding 24 each.
  Cards 394.7×520, radius 24, padding 40, **staircase**: resting y = 1196.6, 1412.6, 1628.6 (step 216), x = 80, 522.7, 965.3.
  (Captured at scroll 0 with each card at opacity 0 / translateY(+1000) — they rise in on scroll.)
  - card 1 ember #fc5000, text #f7f6f2, icon tile 83×83 #f7f6f2 radius 16 with 64×64 ember glyph (mask) inset 9.5
  - card 2 sulfur #f5f28e, text #151317, icon tile #151317 with sulfur glyph
  - card 3 violet #524ae9, text #f7f6f2, icon tile #f7f6f2 with violet glyph
  - inner wrapper 314.7×440 space-between: tile at top; info block h=252 at bottom (24px bottom padding, gap 24):
    h3 display 48px/48px two lines (96 high), p DM Sans 18px/27px four lines (108 high).
  - text lengths: h3 19 / 16 / 18 chars; p 131 / 106 / 118 chars.

## Reserve (0,2228.6,1440,800; padding 200px 56px 160px; row, centred)
- Centre container resting 900×530 (captured at scale 0.7, opacity 0.4): `270,2383.6,900,530`, radius 24, padding 80,
  column gap 32, centred: h2 display 80px/88px centred (17 chars, one line); p DM Sans 18px/27px centred, 492 chars
  (6 lines at 740 wide); pill button obsidian, radius 200, padding 17px 24px, DM Sans 18px/21.6px #f7f6f3, 9 chars.
- Left artwork 401×320 and right artwork 522×320 at y≈2595.6, captured translated off-screen
  (x −331 and +360): they slide in from the sides as the section scrolls into view; the centre scales 0.7→1.

## Address (0,3028.6,1440,891; padding 56)
- Dark card `56,3084.6,1328,779` #151317 radius 32.
- Centre line-art svg `468,3178.1,504,592`.
- Top-left block `144,3172.6,277,124` (column, gap 4, left aligned): h5 display 32px/32px ls 0.64px #e2e2df (16 chars) at
  `148,3176.6`; row `144,3216.6,·,38` padding 4 gap 8: DM Sans 20px/30px w900 #e2e2df text (12 chars) + 24px icon;
  link row `144,3258.6,·,38`: ember text 20px/30px w900 (9 chars) + 24px icon.
- Bottom-right block `1009.6,3651.6,286.4,124` (right aligned): h5 (17 chars) `1013.6,3655.6,278.4,32`;
  row at y=3695.6: icon then text (11 chars), right edge 1296; link row y=3737.6: icon + ember text (7 chars).

## Community / "buy" (0,3919.6,1440,948; padding 160px 56px 100px)
- Drifting dot background as on home.
- Heading h2 `553.3,4079.6,333.3,88` display 80px/88px centred (8 chars).
- Content `251,4247.6,938,520` padding 16, column gap 16: three rows of two Limestone cards 445×152
  (x=267, 728; y=4263.6, 4431.6, 4599.6), radius 40, padding 40px 24px, centred 216×72 mark slot.
  Reference: exchange logos linking out. Here: inert Lorem wordmark pills, href="#".

## Footer (0,4867.6,1440,396.7) — same as home.

## Second capture at 1440×723 (`v723/ref-y{700,1400,2100,2800,3500,4200}.jpg`, taken by the orchestrator)
- Document height 5152 at 723 vs 5264 at 779: two blocks are viewport-height driven — the hero (100vh) and the dark
  card (100vh; its section = 100vh + 112). Everything else is fixed px. So at 723: features start y=723, reserve 2173,
  dark-card section 2973 (card 56,3029,1328,723), marks section 3808, footer 4756.
- The component `data-ref` values are these 723-viewport rects (derived from the 779 dump with that model) so that
  `qa/shoot.mjs` reports them directly; `shoot779.mjs` (same script at 1440×779) will show the −56 / −112 offsets.
- Seen in v723: reserve side art = stacks of striped discs, at rest by scroll 2100 (left visible to x≈230, right from
  x≈1225); dark-card centre = one large tilted disc with a striped rim, vertically centred in the card; address rows
  have a small icon after (top-left) / before (bottom-right) the text. Dark card colour reads as #151317.

## Still not captured
- Scroll samples of the card / reserve transforms (only the scroll-0 start values are measured), hover states.
- `measure.mjs` measures placeholder word widths in the build's display font.
