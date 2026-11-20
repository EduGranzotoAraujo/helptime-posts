const { chromium } = require('playwright');
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  await p.goto('file://' + process.cwd() + '/reel.html');
  await p.evaluate(() => document.fonts.ready);
  const fps = 30, n = Math.round(11.0 * fps);
  for (let i = 0; i < n; i++) {
    await p.evaluate(t => window.render(t), i / fps);
    await p.screenshot({ path: `frames/f${String(i).padStart(4, '0')}.jpg`, type: 'jpeg', quality: 92 });
  }
  await b.close();
})();
