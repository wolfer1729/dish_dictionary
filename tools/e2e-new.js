const http = require('http'), fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const ROOT = process.argv[2], OUT = process.argv[3], BROWSER = process.argv[4];
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json' };
const srv = http.createServer((q, r) => { let p = decodeURIComponent(q.url.split('?')[0]); if (p === '/') p = '/index.html'; const f = path.join(ROOT, p); fs.readFile(f, (e, b) => { if (e) { r.writeHead(404); return r.end(); } r.writeHead(200, { 'Content-Type': types[path.extname(f)] || 'application/octet-stream' }); r.end(b); }); }).listen(8766);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const prof = path.join(OUT, 'profile3'); fs.rmSync(prof, { recursive: true, force: true });
  const br = spawn(BROWSER, ['--headless=new', '--remote-debugging-port=9335', '--user-data-dir=' + prof, '--window-size=1366,900', 'about:blank'], { stdio: 'ignore' });
  let list; for (let i = 0; i < 40; i++) { try { list = await (await fetch('http://127.0.0.1:9335/json/list')).json(); if (list.length) break; } catch (e) {} await sleep(250); }
  const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pend = {}; const errors = [];
  ws.addEventListener('message', (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id]; }
    if (d.method === 'Runtime.exceptionThrown') errors.push('EXC: ' + ((d.params.exceptionDetails.exception || {}).description || d.params.exceptionDetails.text));
    if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') errors.push('CONSOLE: ' + d.params.args.map((a) => a.value || a.description).join(' '));
    if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error') errors.push('LOG: ' + d.params.entry.text + ' ' + (d.params.entry.url || '')); });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => { const r = await send('Runtime.evaluate', { expression: e, awaitPromise: true, returnByValue: true }); if (r.result.exceptionDetails) { errors.push('EVAL: ' + e.slice(0, 60) + ' -> ' + (r.result.exceptionDetails.exception || {}).description); return null; } return r.result.result.value; };
  const shot = async (n) => { const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(path.join(OUT, n + '.png'), Buffer.from(r.result.data, 'base64')); };
  const go = async (h, ms = 400) => { await ev('location.hash=' + JSON.stringify(h)); await sleep(ms); };
  await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable');
  await send('Page.navigate', { url: 'http://127.0.0.1:8766/#/' }); await sleep(2000);
  const rep = [];
  rep.push('Dishes: ' + await ev('DD.dishes.length') + ' | beef dishes: ' + await ev("DD.dishes.filter(d=>d.items.some(i=>/\\b(beef|veal)\\b/i.test(i[2]))).length") + ' | with photo: ' + await ev('DD.dishes.filter(d=>d.photo).length'));
  const routes = ['#/', '#/explore', '#/explore?course=drink', '#/explore?course=soup', '#/explore?course=dessert&diet=vegetarian', '#/dish/dal-makhani', '#/dish/mushroom-wellington', '#/dish/kimchi', '#/cook/masala-dosa', '#/pantry', '#/learn', '#/learn/path', '#/me', '#/add', '#/planner', '#/shopping'];
  for (const r of routes) { await go(r); rep.push(r.padEnd(42) + (await ev("(document.querySelector('#count')||{}).innerText || document.title"))); }
  // veg mode counts
  await go('#/explore'); await ev("document.querySelector('[data-veg-btn]').click()"); await sleep(300);
  rep.push('Veg mode explore: ' + await ev("document.querySelector('#count').innerText"));
  await ev("document.querySelector('[data-veg-btn]').click()"); await sleep(200);
  // essentials
  await go('#/pantry');
  for (const it of ['paneer', 'peas']) await ev("document.querySelector('#pin').value=" + JSON.stringify(it) + "; document.querySelector('[data-do=\"add-form\"]').requestSubmit()");
  await sleep(200);
  rep.push('Essentials count: ' + await ev("document.querySelector('#essCount').innerText") + ' | top: ' + await ev("[...document.querySelectorAll('.match')].slice(0,4).map(m=>m.querySelector('h3 a').innerText+' '+m.querySelector('.pct').innerText).join(', ')"));
  await ev("document.querySelector('[data-do=ess-add][data-v=\"soy sauce\"]').click()"); await sleep(150);
  rep.push('After +soy sauce: ' + await ev("document.querySelector('#essCount').innerText") + ' | saved: ' + await ev("S.prefs.essentials.includes('soy sauce')"));
  await ev("document.querySelector('#essDetails').open=true"); await sleep(100); await shot('n-pantry');
  // editor: create a recipe
  await go('#/add', 500);
  await ev(`(()=>{const f=document.querySelector('#ed');
    f.name.value='Nani’s Aloo Sabzi'; f.desc.value='Grandma’s simple potato curry.';
    const ings=[...document.querySelectorAll('#edIng .ed-ing')];
    ings[0].querySelector('[data-f=q]').value='500'; ings[0].querySelector('[data-f=n]').value='potatoes';
    ings[1].querySelector('[data-f=q]').value='1'; ings[1].querySelector('[data-f=u]').value='tsp'; ings[1].querySelector('[data-f=n]').value='cumin seeds';
    ings[2].querySelector('[data-f=q]').value='1/2'; ings[2].querySelector('[data-f=u]').value='tsp'; ings[2].querySelector('[data-f=n]').value='turmeric';
    const st=[...document.querySelectorAll('#edSteps .ed-step')];
    st[0].querySelector('[data-f=t]').value='Temper'; st[0].querySelector('[data-f=x]').value='Crackle cumin in oil.';
    st[1].querySelector('[data-f=t]').value='Cook'; st[1].querySelector('[data-f=x]').value='Add potatoes and turmeric, cover and cook.'; st[1].querySelector('[data-f=tm]').value='12';
  })()`);
  await shot('n-editor');
  await ev("document.querySelector('#ed').requestSubmit()"); await sleep(600);
  rep.push('After save: ' + await ev("location.hash + ' | ' + document.querySelector('h1').innerText + ' | qty: ' + document.querySelector('#ingList .q').innerText + ' | timer btn: ' + !!document.querySelector('.timer-btn') + ' | edit btn: ' + !!document.querySelector('a[href^=\"#/edit/\"]')"));
  await shot('n-mydish');
  await go('#/explore?source=mine'); rep.push('Explore mine: ' + await ev("document.querySelector('#count').innerText"));
  // reload persists
  await send('Page.reload'); await sleep(1500);
  rep.push('After reload, mine: ' + await ev('DD.dishes.filter(d=>d.mine).length') + ' | S.mine: ' + await ev('S.mine.length'));
  // edit
  const myId = await ev('S.mine[0].id');
  await go('#/edit/' + myId, 500);
  await ev("document.querySelector('#ed').name.value='Nani’s Aloo Sabzi (Updated)'; document.querySelector('#ed').requestSubmit()"); await sleep(500);
  rep.push('After edit: ' + await ev("document.querySelector('h1').innerText + ' | count mine ' + DD.dishes.filter(d=>d.mine).length"));
  await go('#/', 600); await shot('n-home');
  await go('#/dish/dal-makhani', 600); await shot('n-dish-photo');
  await go('#/explore?region=Europe', 800); await shot('n-explore');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  for (const r of ['#/', '#/add', '#/pantry', '#/dish/' + myId]) { await go(r, 500); rep.push('Mobile ' + r + ' ' + await ev('document.documentElement.scrollWidth') + '/' + await ev('innerWidth')); }
  await go('#/add', 500); await shot('n-editor-mobile');
  console.log(rep.join('\n'));
  console.log(errors.length ? 'ERRORS:\n' + [...new Set(errors)].join('\n') : 'NO RUNTIME ERRORS');
  ws.close(); br.kill(); srv.close(); setTimeout(() => { try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {} process.exit(0); }, 500);
})();
