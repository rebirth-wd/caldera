import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/usr/bin/google-chrome', args: ['--no-sandbox'] });
for (const path of ['/', '/rollups', '/metalayer', '/blog', '/era']) { const m = await b.newPage({ viewport: { width: 390, height: 800 } }); const errs=[]; m.on('pageerror',e=>errs.push(e.message)); await m.goto('http://localhost:4321'+path); await m.waitForTimeout(2500);
  console.log(path, 'mobile overflow px:', await m.evaluate(() => document.documentElement.scrollWidth - innerWidth), 'errors:', errs.length); await m.close(); }
await b.close();
