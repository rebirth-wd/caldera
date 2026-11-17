import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
const p = await b.newPage({ viewport: { width: 1440, height: 779 } });
await p.goto('http://localhost:4413/era', { waitUntil: 'load' }); await p.evaluate(() => document.fonts.ready);
const sets = JSON.parse(process.argv[2]);
console.log(await p.evaluate((sets) => sets.map(([size, ls, words]) => words.map((w) => { const s = document.createElement('span'); s.className = 'display'; s.style.cssText = `font-size:${size}px;letter-spacing:${ls}px;white-space:nowrap;position:absolute`; s.textContent = w; document.body.append(s); const r = s.getBoundingClientRect().width; s.remove(); return w + ' ' + r.toFixed(0); }).join(' | ')).join('\n'), sets));
await b.close();
