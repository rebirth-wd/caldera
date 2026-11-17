// Usage: node qa/shoot.mjs <port> <prefix> <y1,y2,...> [selector-for-geometry-root]
// Screenshots 1440x723 viewport at each scrollY into qa/out/<prefix>-y<Y>.png (compare with reference/ref-y<Y>.jpg)
// and prints, for every element carrying data-ref="x,y,w,h" (reference rect in page coords), the delta vs. the build.
import { chromium } from 'playwright-core'; import fs from 'node:fs';
const [port, prefix, ys = '0', sel = 'body', path = '/'] = process.argv.slice(2);
fs.mkdirSync('qa/out', { recursive: true });
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: Number(process.env.VW||1440), height: Number(process.env.VH||779) } });
p.on('pageerror', (e) => console.log('PAGEERROR', e.message));
await p.goto(`http://localhost:${port}${path}`, { waitUntil: 'load' }); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(3000);
for (const y of ys.split(',').map(Number)) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(2200); await p.screenshot({ path: `qa/out/${prefix}-y${y}.png` }); }
await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(1500);
const rows = await p.evaluate((sel) => { const out = []; let bad = 0, n = 0;
  document.querySelector(sel).querySelectorAll('[data-ref]').forEach((e) => { const r = e.getBoundingClientRect(); const got = [r.x, r.y + scrollY, r.width, r.height].map(Math.round); const want = e.dataset.ref.split(',').map(Number); const d = got.map((v, i) => v - want[i]); n++; const off = d.some((v) => Math.abs(v) > 3); if (off) bad++; out.push(`${off ? 'OFF ' : 'ok  '}${(e.dataset.qa || e.tagName + '.' + (e.className + '').slice(0, 24)).padEnd(34)} want ${want} got ${got} d ${d}`); });
  out.push(`-- ${n - bad}/${n} tagged elements within 3px; docH=${document.documentElement.scrollHeight}`); return out; }, sel);
console.log(rows.join('\n')); await b.close();
