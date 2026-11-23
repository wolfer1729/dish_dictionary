// Build contact-sheet pages of downloaded photos and screenshot them for review.
const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const ROOT = process.argv[2], OUT = process.argv[3], BROWSER = process.argv[4];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const src = fs.readFileSync(path.join(ROOT, 'js/data/photos.js'), 'utf8');
const photos = JSON.parse(src.match(/DD\.PHOTOS = (\{[\s\S]*?\});\n/)[1]);
const ONLY = process.argv[5] ? process.argv[5].split(",") : null;
const ids = Object.keys(photos).filter((k) => !ONLY || ONLY.includes(k));
const per = 60;
const pages = [];
for (let i = 0; i < ids.length; i += per) {
  const html = `<!doctype html><meta charset="utf-8"><style>body{margin:0;font:11px sans-serif;background:#fff}.g{display:grid;grid-template-columns:repeat(10,1fr);gap:4px;padding:4px}.c img{width:100%;height:110px;object-fit:cover;display:block}.c div{height:26px;overflow:hidden;line-height:13px}</style><div class="g">` +
    ids.slice(i, i + per).map((id) => `<div class="c"><img src="file:///${path.resolve(ROOT, photos[id].f).replace(/\\/g, '/')}"><div><b>${id}</b><br>${(photos[id].p || '').slice(0, 30)}</div></div>`).join('') + '</div>';
  const f = path.join(OUT, `sheet-${process.argv[6]||""}-${pages.length}.html`);
  fs.writeFileSync(f, html); pages.push(f);
}
(async () => {
  const prof = path.join(OUT, 'profile4'); fs.rmSync(prof, { recursive: true, force: true });
  const br = spawn(BROWSER, ['--headless=new', '--remote-debugging-port=9336', '--allow-file-access-from-files', '--user-data-dir=' + prof, '--window-size=1400,900', 'about:blank'], { stdio: 'ignore' });
  let list; for (let i = 0; i < 40; i++) { try { list = await (await fetch('http://127.0.0.1:9336/json/list')).json(); if (list.length) break; } catch (e) {} await sleep(250); }
  const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pend = {};
  ws.addEventListener('message', (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id]; } });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1400, height: 1000, deviceScaleFactor: 1, mobile: false });
  for (let p = 0; p < pages.length; p++) {
    await send('Page.navigate', { url: 'file:///' + pages[p].replace(/\\/g, '/') }); await sleep(2500);
    const r = await send('Page.captureScreenshot', { format: 'jpeg', quality: 70, captureBeyondViewport: true, clip: { x: 0, y: 0, width: 1400, height: 1000, scale: 1 } });
    fs.writeFileSync(path.join(OUT, `sheet-${process.argv[6]||""}-${p}.jpg`), Buffer.from(r.result.data, 'base64'));
  }
  console.log('pages:', pages.length, 'photos:', ids.length);
  ws.close(); br.kill(); setTimeout(() => { try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {} process.exit(0); }, 500);
})();
