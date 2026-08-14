import { chromium } from 'playwright';
import fs from 'node:fs';
const outDir = 'C:\\Users\\USER\\AppData\\Local\\Temp\\claude\\C--Users-USER\\ad34afb6-3038-4ec7-b8f5-4e56ac111b56\\scratchpad\\qa-shots5';
fs.mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const errors = {};
page.on('console', (m) => { if (m.type() === 'error') { (errors[page.url()] ??= []).push(m.text()); } });
page.on('pageerror', (e) => { (errors[page.url()] ??= []).push('PAGEERROR: ' + e.message); });

await page.goto('http://localhost:4300/about', { waitUntil: 'networkidle' });
await page.waitForTimeout(300);
await page.screenshot({ path: `${outDir}/about-team.png`, fullPage: true });

console.log('errors:', JSON.stringify(errors, null, 2));
await browser.close();
