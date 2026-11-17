// Blog index + post placeholder data. Lorem Ipsum only; lengths follow reference/blog/REFERENCE.md and
// reference/blog-post/REFERENCE.md. Image keys point at src/data/images.ts (verified Unsplash photos, reused).
export const blogHero = {
  lines: ['Laboris', 'sed enim'],
  sub: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  read: 'Sed laboris',
};
export const blogList = { title: 'Tempor aliquam', more: 'Sed magna' };
export type Cat = 'all' | 'voluptate' | 'consequat' | 'commodo' | 'pulvinar' | 'exercitationem';
export const categories: { key: Cat; label: string; glyph: string }[] = [
  { key: 'all', label: 'Aliquam', glyph: 'grid' },
  { key: 'voluptate', label: 'Voluptate', glyph: 'person' },
  { key: 'consequat', label: 'Consequat', glyph: 'trophy' },
  { key: 'commodo', label: 'Commodo', glyph: 'spark' },
  { key: 'pulvinar', label: 'Pulvinar', glyph: 'badge' },
];
export const catLabel: Record<string, string> = {
  voluptate: 'Voluptate', consequat: 'Consequat', commodo: 'Commodo', pulvinar: 'Pulvinar', exercitationem: 'Exercitationem',
};
export type Post = { slug: string; cat: Exclude<Cat, 'all'>; title: string; date: string; image: string; tone: 'ember' | 'violet' };
// posts[0] is the featured post in the index hero; the rest fill the grid (six shown, "more" reveals six at a time).
export const posts: Post[] = [
  { slug: 'lorem-ipsum-dolor-sit-amet', cat: 'exercitationem', title: 'Consectetur Sed Tempor: Ut Laboris Enim Dui Lorem Aliquam Pulvinar', date: 'Feb 4, 2026', image: 'news1', tone: 'ember' },
  { slug: 'tempor-incididunt-ut-labore', cat: 'voluptate', title: 'Tempor incididunt ut Labore Dolore, et magna Aliquam-enim Veniam', date: 'Nov 25, 2025', image: 'news2', tone: 'violet' },
  { slug: 'veniam-quis-nostrud', cat: 'voluptate', title: 'Veniam Quis Nostrud Sed Ullamco Laboris', date: 'Nov 5, 2025', image: 'news3', tone: 'ember' },
  { slug: 'duis-aute-irure-dolor', cat: 'voluptate', title: 'Duis Aute Irure Dolor Reprehenderit Sed', date: 'Nov 3, 2025', image: 'productA', tone: 'violet' },
  { slug: 'velit-esse-cillum', cat: 'voluptate', title: 'Velit Esse - Cillum Eu', date: 'Oct 31, 2025', image: 'news4', tone: 'ember' },
  { slug: 'excepteur-sint-occaecat', cat: 'voluptate', title: 'Excepteur Sint Occaecat Cupidatat Non Sed', date: 'Oct 23, 2025', image: 'productB', tone: 'violet' },
  { slug: 'sunt-in-culpa-qui-officia', cat: 'consequat', title: 'Sunt In Culpa Qui Officia Deserunt Mollit Anim Laborum', date: 'Oct 17, 2025', image: 'news1', tone: 'ember' },
  { slug: 'sed-ut-perspiciatis-unde', cat: 'commodo', title: 'Sed Ut Perspiciatis Unde Omnis Iste Natus Error', date: 'Oct 9, 2025', image: 'news3', tone: 'violet' },
  { slug: 'nemo-enim-ipsam-voluptatem', cat: 'pulvinar', title: 'Nemo Enim Ipsam Voluptatem Quia Voluptas', date: 'Sep 30, 2025', image: 'news2', tone: 'ember' },
  { slug: 'neque-porro-quisquam-est', cat: 'commodo', title: 'Neque Porro Quisquam Est Qui Dolorem', date: 'Sep 18, 2025', image: 'productB', tone: 'violet' },
  { slug: 'quis-autem-vel-eum-iure', cat: 'consequat', title: 'Quis Autem Vel Eum Iure Reprehenderit Qui In Ea Voluptate', date: 'Sep 4, 2025', image: 'news4', tone: 'ember' },
  { slug: 'at-vero-eos-et-accusamus', cat: 'pulvinar', title: 'At Vero Eos Et Accusamus', date: 'Aug 21, 2025', image: 'productA', tone: 'violet' },
  { slug: 'temporibus-autem-quibusdam', cat: 'commodo', title: 'Temporibus Autem Quibusdam Et Aut Officiis Debitis Rerum', date: 'Aug 7, 2025', image: 'news1', tone: 'ember' },
];

// Post template body: same block structure as the reference post (3 intro paragraphs, three h2 sections, two 3-item lists,
// bold runs), Lorem Ipsum with matched word counts. **x** marks a bold run. Every placeholder post renders this body.
export type Block = { t: 'p' | 'h2'; text: string } | { t: 'ul'; items: string[] };
export const postBody: Block[] = [
  {
    "t": "p",
    "text": "Ad id do exercitation esse, sit amet proident duis. Adipiscing quis in sit, mollit commodo ut."
  },
  {
    "t": "p",
    "text": "**Do, duis elit irure** enim, aute proident eu tempor adipiscing in irure velit incididunt quis adipiscing. Aute nulla amet irure sit voluptate ut ea eu duis. Laboris occaecat ad aliquip in anim aliquip quis enim et cupidatat tempor fugiat. Occaecat et consectetur irure enim consequat ea officia minim pariatur nisi aliqua reprehenderit laborum amet elit. Commodo ullamco eiusmod sint minim do anim ea ullamco dolor est cillum amet sint aute. Irure cupidatat officia proident ad minim fugiat veniam reprehenderit ea."
  },
  {
    "t": "p",
    "text": "Aliquip ex ex, enim consectetur do adipiscing excepteur minim excepteur dolore ex sunt fugiat. Eiusmod consequat ipsum ut id id."
  },
  {
    "t": "h2",
    "text": "Sed Ut Lorem Ipsum?"
  },
  {
    "t": "p",
    "text": "**Et proident** exercitation excepteur non labore incididunt consequat ea veniam pariatur ipsum ipsum cupidatat. Magna ex dolore incididunt fugiat reprehenderit est veniam nisi non anim."
  },
  {
    "t": "p",
    "text": "Exercitation, excepteur id consectetur pariatur eiusmod eiusmod sed ipsum do, in. Deserunt aliquip non esse do voluptate proident reprehenderit laborum ex cillum anim veniam do."
  },
  {
    "t": "p",
    "text": "Commodo sed duis do consequat commodo ipsum qui:"
  },
  {
    "t": "ul",
    "items": [
      "Sit ad eu consequat consequat aute.",
      "Occaecat adipiscing commodo nisi aute ipsum sint deserunt mollit amet nisi.",
      "Id anim dolore anim aute deserunt id incididunt."
    ]
  },
  {
    "t": "p",
    "text": "Cupidatat elit deserunt occaecat do id nulla esse cillum quis do dolore officia sed, est."
  },
  {
    "t": "p",
    "text": "Aute aliquip nisi nulla ipsum nostrud:"
  },
  {
    "t": "ul",
    "items": [
      "**Labore laborum** officia adipiscing consectetur dolore magna dolor.",
      "**Mollit commodo** irure ea fugiat ad consectetur magna, sit non.",
      "**Aliquip, lorem** minim aute ullamco anim mollit magna voluptate."
    ]
  },
  {
    "t": "p",
    "text": "Consequat sint ut aliqua nisi commodo eu tempor magna. Veniam non ipsum dolore dolor lorem."
  },
  {
    "t": "h2",
    "text": "Voluptate Sed Enim: Laboris"
  },
  {
    "t": "p",
    "text": "Labore minim incididunt **sunt officia** nulla pariatur, velit sed exercitation. Veniam laborum sit sunt sed lorem amet velit excepteur. Officia dolore laboris eiusmod sit."
  },
  {
    "t": "p",
    "text": "Et commodo occaecat lorem consectetur dolore proident, consectetur do. Exercitation in dolor exercitation, ipsum, enim enim velit labore consectetur in est consequat culpa. Sint do cillum deserunt nulla cupidatat officia reprehenderit nostrud sint. Ad pariatur ea do, aliqua pariatur voluptate esse do dolor proident sunt nulla deserunt commodo. Velit laboris pariatur fugiat non commodo sed mollit consequat sint commodo irure."
  },
  {
    "t": "p",
    "text": "Ipsum aliqua aliquip amet proident commodo est nisi magna nostrud, **ut. Mollit id, anim** ut amet in consectetur do excepteur consequat, dolore id quis. Sed reprehenderit proident velit commodo magna officia elit nulla quis labore. Ea deserunt, officia ea exercitation ipsum eiusmod lorem, id ea eu nisi exercitation enim pariatur."
  },
  {
    "t": "p",
    "text": "Laborum esse dolore exercitation esse et enim ex, aute cillum exercitation elit. Eiusmod esse eiusmod, amet ut commodo deserunt non ea aute labore nisi. Mollit minim sint nisi laboris sed."
  },
  {
    "t": "h2",
    "text": "Ut Aliquam Consectetur, Dolor Magna"
  },
  {
    "t": "p",
    "text": "**Est ipsum sed dolor laboris nulla** sint deserunt non ex est in ea, lorem amet exercitation anim."
  },
  {
    "t": "p",
    "text": "Esse nulla enim est sed velit dolore, consequat velit laboris fugiat sint. Elit adipiscing amet, enim consequat id in incididunt nostrud dolore labore cupidatat reprehenderit lorem lorem. Duis enim aliquip magna est ad esse sunt."
  },
  {
    "t": "p",
    "text": "Ea ullamco mollit cillum sit id reprehenderit do, anim exercitation sit ut ipsum laborum. Reprehenderit do ullamco sit nulla sit tempor exercitation nisi deserunt nulla."
  }
];
export const postUi = { back: 'Amet', related: 'Lorem sed ipsum' };
