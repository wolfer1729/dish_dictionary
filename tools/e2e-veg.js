const http = require('http'), fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const ROOT = process.argv[2], OUT = process.argv[3], BROWSER = process.argv[4];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.webmanifest': 'application/manifest+json' };
const srv = http.createServer((q, r) => {
  let p = decodeURIComponent(q.url.split('?')[0]); if (p === '/') p = '/index.html';
  const f = path.join(ROOT, p);
  fs.readFile(f, (e, b) => { if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); r.end(b); });
}).listen(8765);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const prof = path.join(OUT, 'profile'); fs.rmSync(prof, { recursive: true, force: true });
  const br = spawn(BROWSER, ['--headless=new', '--remote-debugging-port=9333', '--user-data-dir=' + prof, '--no-first-run', '--window-size=1366,900', 'about:blank'], { stdio: 'ignore' });
  let list; for (let i = 0; i < 40; i++) { try { list = await (await fetch('http://127.0.0.1:9333/json/list')).json(); if (list.length) break; } catch (e) {} await sleep(250); }
  const page = list.find((t) => t.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pend = {}; const errors = [];
  ws.addEventListener('message', (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id]; }
    if (d.method === 'Runtime.exceptionThrown') errors.push('EXCEPTION: ' + ((d.params.exceptionDetails.exception || {}).description || d.params.exceptionDetails.text));
    if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errors.push('CONSOLE: ' + d.params.args.map((a) => a.value || a.description).join(' '));
    if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error' && !/fonts\.g/.test(d.params.entry.url || '')) errors.push('LOG: ' + d.params.entry.text + ' ' + (d.params.entry.url || ''));
  });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (expr) => {
    const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
    if (r.result.exceptionDetails) { errors.push('EVAL: ' + expr.slice(0, 70) + ' -> ' + (r.result.exceptionDetails.exception || {}).description); return null; }
    return r.result.result.value;
  };
  const shot = async (name) => { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(path.join(OUT, name + '.png'), Buffer.from(r.result.data, 'base64')); };
  const go = async (h, ms = 350) => { await ev('location.hash=' + JSON.stringify(h)); await sleep(ms); };

  await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable');
  await send('Page.navigate', { url: 'http://127.0.0.1:8765/#/' }); await sleep(1500);

  const report = [];
  const cnt = () => ev("document.querySelector('#count') && document.querySelector('#count').innerText");
  await go('#/explore'); report.push('All: ' + await cnt());
  await ev("document.querySelector('[data-veg-btn]').click()"); await sleep(400);
  report.push('Veg on: ' + await cnt() + ' | btn aria-checked=' + await ev("document.querySelector('[data-veg-btn]').getAttribute('aria-checked')") + ' | non-veg cards visible: ' + await ev("document.querySelectorAll('#results .vmark.nonveg, #results .vmark.egg').length") + ' | banner: ' + await ev("!!document.querySelector('.veg-chip')"));
  await go('#/explore?styles=dhaba'); report.push('Veg + dhaba: ' + await cnt() + ' → ' + await ev("[...document.querySelectorAll('#results h3')].map(x=>x.innerText).slice(0,30).join(', ')"));
  await go('#/explore?styles=continental'); report.push('Veg + continental: ' + await cnt());
  await go('#/explore?area=Tamil%20Nadu'); report.push('Veg + Tamil Nadu: ' + await cnt());
  await go('#/', 500); report.push('Home india section: ' + await ev("(document.querySelector('.india h2')||{}).innerText + ' | ' + (document.querySelector('.india p')||{}).innerText"));
  await shot('v-home-veg');
  await go('#/pantry'); for (const it of ['paneer','onion','tomato','butter']) await ev("document.querySelector('#pin').value=" + JSON.stringify(it) + "; document.querySelector('[data-do=\"add-form\"]').requestSubmit()"); await sleep(200);
  report.push('Veg pantry top: ' + await ev("[...document.querySelectorAll('.match')].slice(0,5).map(m=>m.querySelector('h3 a').innerText+' '+m.querySelector('.pct').innerText).join(', ')"));
  await ev("document.querySelector('[data-veg-btn]').click()"); await sleep(300);
  await go('#/explore?styles=dhaba'); report.push('Veg off, dhaba: ' + await cnt());
  await go('#/explore'); await shot('v-explore');
  for (const id of ['dal-makhani','masala-dosa','pani-puri','veg-au-gratin','chole-bhature','gulab-jamun']) { await go('#/dish/' + id); report.push(id + ': ' + await ev("document.querySelector('.dish-title .card-kicker').innerText + ' | steps ' + document.querySelectorAll('.step').length")); }
  await go('#/dish/dal-makhani'); await shot('v-dish');
  await go('#/learn/dhaba-secrets'); report.push('Lesson: ' + await ev("document.querySelector('h1').innerText"));
  await go('#/cook/masala-dosa', 400); await ev("document.querySelector('[data-c=next]').click()"); await sleep(150); report.push('Cook dosa: ' + await ev("document.querySelector('.cook-inner h2').innerText"));
  await go('#/me'); await ev("document.querySelector('[data-pref=eggVeg]').click()"); await sleep(300); report.push('eggVeg pref: ' + await ev('S.prefs.eggVeg'));
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await ev("document.querySelector('[data-veg-btn]').click()"); await sleep(200);
  for (const r of ['#/', '#/explore', '#/dish/paneer-butter-masala', '#/me']) { await go(r, 450); report.push('Mobile ' + r + ' width ' + await ev('document.documentElement.scrollWidth') + '/' + await ev('innerWidth')); }
  await go('#/', 500); await shot('v-mobile');
  console.log(report.join('\n'));
  console.log('\n' + (errors.length ? 'ERRORS:\n' + [...new Set(errors)].join('\n') : 'NO RUNTIME ERRORS'));
  ws.close(); br.kill(); srv.close(); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
