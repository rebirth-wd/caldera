// Copy for /era. Lorem Ipsum only; lengths follow reference/era/REFERENCE.md (character counts in comments).
// Every link on this page is an inert placeholder (href="#").
export const era = {
  meta: { title: 'Enim — Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  hero: { top: 'E REM', big: 'QUIS', bottom: 'UT NISI' },            // ref 5 / 4 / 7 chars
  features: {
    lines: ['Duis aute irure.', 'Lorem ipsum dolor.'],                 // 16 / 18
    cards: [
      { tone: 'ember', glyph: 'bolt', title: 'Labore Et Dolore Ut',    // 19 / 131
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.' },
      { tone: 'sulfur', glyph: 'rings', title: 'Veniam Quis Nisi',     // 16 / 106
        body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo sed amet.' },
      { tone: 'violet', glyph: 'shield', title: 'Ullamco Laboris Ex',  // 18 / 118
        body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint.' },
    ],
  },
  reserve: {
    title: 'Consectetur Minim',                                        // 17
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus est.', // 492
    button: { label: 'Sed Ipsum', href: '#' },                         // 9
  },
  details: {
    a: { title: 'Cupidatat Non Est', value: 'Dolore…Magna', link: { label: 'Consequat', href: '#' } },   // 16 / 12 / 9
    b: { title: 'Laborum Sed Dolor', value: 'Lorem…Ipsum', link: { label: 'Aliquam', href: '#' } },     // 17 / 11 / 7
  },
  marks: {
    title: 'Sed Enim',                                                 // 8
    items: ['Lorem', 'Ipsum', 'Dolor', 'Tempor', 'Magna', 'Aliqua'].map((label) => ({ label, href: '#' })),
  },
};
