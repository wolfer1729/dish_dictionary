// Tests the phone (service worker) copy: first save, update to a new version, then offline use.
const http = require('http'), fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const [ROOT, OUT, BROWSER] = process.argv.slice(2);
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json', '.jpg': 'image/jpeg', '.png': 'image/png', '.woff2': 'font/woff2' };
let ver = 'a', down = false;
const srv = http.createServer((q, r) => {
  if (down) return q.socket.destroy();
  let p = decodeURIComponent(q.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  fs.readFile(f, (e, b) => {
    if (e) { r.writeHead(404); return r.end(); }
    if (p === '/sw.js') b = Buffer.from(String(b).replace(/const CACHE = '[^']+';/, `const CACHE = 'dd-test-${ver}';`));
    if (p === '/css/styles.css') b = Buffer.from(String(b) + `\n:root { --test-ver: ${ver}; }\n`);
    r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream', 'Cache-Control': 'no-cache' }); r.end(b);
  });
}).listen(8766);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const prof = path.join(OUT, 'swprof'); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {}
  const br = spawn(BROWSER, ['--headless=new', '--remote-debugging-port=9360', '--user-data-dir=' + prof, '--no-first-run', 'about:blank'], { stdio: 'ignore' });
  let list; for (let i = 0; i < 40; i++) { try { list = await (await fetch('http://127.0.0.1:9360/json/list')).json(); if (list.length) break; } catch (e) {} await sleep(250); }
  const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pend = {}; const errors = [];
  ws.addEventListener('message', (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id]; } if (d.method === 'Runtime.exceptionThrown') errors.push((d.params.exceptionDetails.exception || {}).description || d.params.exceptionDetails.text); });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); setTimeout(() => { if (pend[i]) { delete pend[i]; r({ result: { result: {} } }); } }, 30000); });
  const ev = async (e) => { const r = await send('Runtime.evaluate', { expression: e, awaitPromise: true, returnByValue: true }); return r.result && r.result.result ? r.result.result.value : undefined; };
  const until = async (expr, ms, label) => { const t = Date.now(); while (Date.now() - t < ms) { const v = await ev(expr).catch(() => null); if (v) return v; await sleep(500); } return 'TIMEOUT ' + label; };
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 800, deviceScaleFactor: 2, mobile: true });
  const tv = "getComputedStyle(document.documentElement).getPropertyValue('--test-ver').trim()";
  const photos = "caches.open('dd-photos').then(c => c.keys()).then(k => k.length)";

  await send('Page.navigate', { url: 'http://127.0.0.1:8766/#/' });
  console.log('1. controlled by service worker:', await until('!!navigator.serviceWorker.controller', 30000, 'controller'));
  const total = await ev('Object.keys(DD.PHOTOS).length');
  const t0 = Date.now();
  await until(`${photos}.then(n => n >= ${total})`, 120000, 'photos');
  console.log(`   photos saved: ${await ev(photos)} of ${total} in ${Math.round((Date.now() - t0) / 1000)}s | version shown: ${await ev(tv)}`);

  ver = 'b';
  await ev("navigator.serviceWorker.getRegistration().then(r => r.update()).then(() => true)");
  const shown = await until(`${tv} === 'b' ? 'b' : ''`, 30000, 'update');
  console.log('2. after publishing an update, the open app now shows version:', shown);
  console.log('   caches:', JSON.stringify(await ev('caches.keys()')), '| photos kept:', await ev(photos));

  down = true; // the internet is gone
  await send('Page.reload', { ignoreCache: false }); await sleep(3000);
  const off = await ev(`(async () => { location.hash = '#/dish/masala-dosa'; await new Promise(r => setTimeout(r, 1500)); const img = document.querySelector('.dish-hero img, img[src*="assets/photos"]'); return { dishes: DD.dishes.length, version: ${tv}, title: (document.querySelector('h1') || {}).textContent, photo: img ? (img.complete && img.naturalWidth > 0) : 'no img' }; })()`);
  console.log('3. offline reopen:', JSON.stringify(off));
  console.log('JS errors:', errors.length ? errors.join('\n') : 'NONE');
  ws.close(); br.kill(); srv.close(); setTimeout(() => process.exit(0), 800);
})();
