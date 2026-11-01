// Draws the app icons from the game's own Rolo artwork.
// Run from the repo root:  node tools/make-icons.js
// (needs Playwright with Chromium installed)
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'icons');

// name, size, style: 'any' = rounded corners, 'full' = full-bleed square,
// 'maskable' = full-bleed with Rolo inside the safe zone (Android crops it to a circle/squircle)
const ICONS = [
  ['icon-512.png', 512, 'any'],
  ['icon-192.png', 192, 'any'],
  ['icon-maskable-512.png', 512, 'maskable'],
  ['icon-maskable-192.png', 192, 'maskable'],
  ['apple-touch-icon.png', 180, 'full'],
  ['favicon-32.png', 32, 'any'],
];

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(ROOT, 'index.html'));
  await page.waitForTimeout(300);
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, size, style] of ICONS) {
    const url = await page.evaluate(([size, style]) => {
      const c = document.createElement('canvas');
      c.width = c.height = size;
      const keep = ctx, keepState = game.state;
      ctx = c.getContext('2d');
      const k = size / 512;
      ctx.scale(k, k);
      if (style === 'any') { roundRect(ctx, 0, 0, 512, 512, 112); ctx.clip(); }
      // a dusky sky, a few stars and a big moon behind him
      const g = ctx.createLinearGradient(0, 0, 0, 512);
      g.addColorStop(0, '#2c2470'); g.addColorStop(0.6, '#6a4aa8'); g.addColorStop(1, '#ff9e7a');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 512, 512);
      ctx.fillStyle = 'rgba(255,240,200,0.9)';
      ctx.beginPath(); ctx.arc(256, style === 'maskable' ? 250 : 262, style === 'maskable' ? 170 : 215, 0, TAU); ctx.fill();
      ctx.fillStyle = 'rgba(230,210,170,0.6)';
      [[150, 180, 22], [380, 330, 16], [120, 360, 12]].forEach(([x, y, r]) => { ctx.beginPath(); ctx.arc(x, y, r, 0, TAU); ctx.fill(); });
      if (size >= 64) [[70, 80], [440, 60], [460, 170], [50, 210], [400, 110]].forEach(([x, y], i) => drawStar(x, y, i % 2 ? 9 : 13, 0.3, '#fff6c8'));
      // Rolo's big grumpy face, his body tucked away below
      game.state = 'title';
      const p = player, saved = {};
      const pose = { stretch: 0, hair: 0, blinkT: 1, facing: 1, belly: 2, arms: -1, helmetOn: false, chewT: 0, ouchT: 0, noTail: true };
      for (const key in pose) { saved[key] = p[key]; p[key] = pose[key]; }
      const sc = style === 'maskable' ? 9 : 11, headY = style === 'maskable' ? 240 : 262;
      ctx.translate(256 - 3 * sc, headY + 33 * sc);       // the head sits 33 units above his feet
      ctx.scale(sc, sc);
      ctx.lineCap = 'round'; ctx.lineJoin = 'round';
      drawCreature(p, 'human');
      Object.assign(p, saved);
      game.state = keepState;
      ctx = keep;
      return c.toDataURL('image/png');
    }, [size, style]);
    fs.writeFileSync(path.join(OUT, name), Buffer.from(url.split(',')[1], 'base64'));
    console.log('wrote icons/' + name);
  }
  await browser.close();
})();
