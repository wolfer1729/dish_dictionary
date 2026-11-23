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

  const routes = ['#/', '#/explore', '#/explore?region=Africa&tastes=spicy', '#/explore?tags=quick&diet=vegan', '#/dish/pad-thai', '#/dish/beef-bourguignon',
    '#/pantry', '#/learn', '#/learn/knife-skills', '#/learn/fix', '#/learn/subs', '#/learn/temps', '#/learn/heat', '#/learn/convert', '#/learn/pantry',
    '#/learn/glossary', '#/learn/path', '#/planner', '#/shopping', '#/me', '#/cook/carbonara', '#/nope'];
  const report = [];
  for (const r of routes) {
    await go(r);
    const info = await ev("({t:document.title, len:document.getElementById('app').innerText.length})");
    report.push(r.padEnd(40) + ' ' + (info && info.len) + ' chars | ' + (info && info.t));
  }

  // explore
  await go('#/explore');
  const c0 = await ev("document.querySelector('#count').innerText");
  await ev("document.querySelector('[data-do=toggle][data-k=region][data-v=\"South Asia\"]').click()"); await sleep(100);
  await ev("document.querySelector('[data-do=toggle][data-k=diet][data-v=\"vegetarian\"]').click()"); await sleep(100);
  const c1 = await ev("document.querySelector('#count').innerText + ' | ' + location.hash");
  await ev("(()=>{const s=document.querySelector('#fsort'); s.value='quick'; s.dispatchEvent(new Event('change'));})()"); await sleep(100);
  const firstQuick = await ev("[...document.querySelectorAll('#results .card h3')].map(x=>x.innerText).join(', ')");
  report.push('', 'Explore all: ' + c0, 'South Asia + vegetarian: ' + c1, 'Sorted quickest: ' + firstQuick);
  await go('#/explore?q=chicken'); report.push('Search chicken: ' + await ev("document.querySelector('#count').innerText"));
  await go('#/explore?avoid=peanut,pork'); report.push('Avoid peanut,pork: ' + await ev("document.querySelector('#count').innerText"));

  // dish
  await go('#/dish/pad-thai');
  const before = await ev("document.querySelector('#ingList .q').innerText");
  await ev("document.querySelector('[data-do=serv][data-v=\"1\"]').click(); document.querySelector('[data-do=serv][data-v=\"1\"]').click()"); await sleep(100);
  const after = await ev("document.querySelector('#servOut').innerText + ' -> ' + document.querySelector('#ingList .q').innerText");
  await ev("document.querySelector('[data-act=\"toggle-units\"]').click()"); await sleep(300);
  const usUnits = await ev("[...document.querySelectorAll('#ingList .q')].slice(0,8).map(x=>x.innerText).join(' | ')");
  await ev("document.querySelector('[data-act=\"toggle-units\"]').click()"); await sleep(300);
  await ev("document.querySelector('[data-do=shop]').click()"); await sleep(100);
  await ev("document.querySelector('.dish-actions [data-act=fav]').click()"); await sleep(100);
  await ev("document.querySelector('.steps .tech').click()"); await sleep(200);
  const techModal = await ev("document.querySelector('.modal h2') && document.querySelector('.modal h2').innerText");
  await ev("document.querySelector('[data-modal-close]').click()");
  await ev("document.querySelector('.timer-btn').click()"); await sleep(400);
  const timer = await ev("document.querySelector('#timerDock').innerText.replace(/\\n/g,' ')");
  report.push('', 'Pad thai first qty: ' + before + ' / scaled: ' + after, 'US units: ' + usUnits, 'Tech modal: ' + techModal, 'Timer dock: ' + timer,
    'Shop badge: ' + await ev("document.querySelector('[data-shop-count]').innerText"));
  await ev("document.querySelector('[data-t=x]').click()");
  await shot('dish-desktop');
  await ev("document.querySelector('.dish-actions [data-act=cooked]').click()"); await sleep(200);
  await ev("document.querySelector('[data-star=\"5\"]').click(); document.querySelector('#cnotes').value='Great!'; document.querySelector('[data-save]').click()"); await sleep(300);

  // pantry
  await go('#/pantry');
  for (const it of ['chicken', 'rice', 'eggs', 'garlic', 'onion', 'soy sauce', 'scallions']) await ev("document.querySelector('#pin').value=" + JSON.stringify(it) + "; document.querySelector('[data-do=\"add-form\"]').requestSubmit()");
  await sleep(200);
  report.push('', 'Pantry top: ' + await ev("[...document.querySelectorAll('.match')].slice(0,6).map(m=>m.querySelector('h3 a').innerText+' '+m.querySelector('.pct').innerText).join(', ')"));
  await shot('pantry');

  // planner + shopping
  await go('#/planner'); await ev("document.querySelector('[data-do=auto]').click()"); await sleep(200);
  report.push('Planner: ' + await ev("document.querySelector('#planSummary').innerText"));
  await ev("document.querySelector('[data-do=\"shop-all\"]').click()"); await sleep(200);
  await go('#/shopping');
  report.push('Shopping cats: ' + await ev("[...document.querySelectorAll('.shop-cat h3')].map(x=>x.innerText).join(' / ')"));
  await shot('shopping');
  await go('#/me'); report.push('Me: ' + await ev("document.querySelector('h1').innerText + ' | stamps: ' + document.querySelectorAll('.stamp.on').length"));

  // cook mode
  await go('#/cook/carbonara', 400);
  await ev("document.querySelector('[data-c=next]').click()"); await sleep(150);
  await ev("document.dispatchEvent(new KeyboardEvent('keydown',{key:'ArrowRight'}))"); await sleep(150);
  report.push('Cook mode: ' + await ev("document.querySelector('.cook-step-n').innerText + ' / ' + document.querySelector('.cook-inner h2').innerText + ' | cooking=' + document.body.classList.contains('cooking')"));
  await shot('cook');
  await go('#/', 400);
  report.push('After exit cook: cooking=' + await ev("document.body.classList.contains('cooking')"));

  // palette
  await ev("document.dispatchEvent(new KeyboardEvent('keydown',{key:'/'}))"); await sleep(200);
  await ev("(()=>{const i=document.querySelector('.palette input'); i.value='jap'; i.dispatchEvent(new Event('input'));})()"); await sleep(100);
  report.push('Palette jap: ' + await ev("[...document.querySelectorAll('.pal-item b')].map(x=>x.innerText).join(', ')"));
  await shot('palette');
  await ev("document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape'}))"); await sleep(200);
  await shot('home-desktop');

  // mobile + dark
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  for (const r of ['#/', '#/dish/butter-chicken', '#/explore', '#/pantry', '#/planner', '#/learn', '#/learn/convert', '#/me', '#/shopping']) {
    await go(r, 450);
    report.push('Mobile ' + r.padEnd(24) + ' scrollWidth ' + await ev('document.documentElement.scrollWidth') + ' / ' + await ev('innerWidth'));
  }
  await go('#/', 400); await shot('home-mobile');
  await go('#/dish/butter-chicken', 400); await shot('dish-mobile');
  await ev("document.querySelector('[data-act=\"toggle-theme\"]').click()"); await sleep(200);
  await go('#/dish/pho-bo', 400); await shot('dish-mobile-dark');
  await send('Emulation.clearDeviceMetricsOverride');
  await go('#/explore', 500); await shot('explore-dark');

  console.log(report.join('\n'));
  console.log('\n' + (errors.length ? 'ERRORS:\n' + [...new Set(errors)].join('\n') : 'NO RUNTIME ERRORS'));
  ws.close(); br.kill(); srv.close(); process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
