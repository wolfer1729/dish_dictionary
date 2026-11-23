const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const ROOT = process.argv[2], OUT = process.argv[3], BROWSER = process.argv[4];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
(async () => {
  const prof = path.join(OUT, 'profile2'); fs.rmSync(prof, { recursive: true, force: true });
  const br = spawn(BROWSER, ['--headless=new', '--remote-debugging-port=9334', '--user-data-dir=' + prof, '--window-size=1366,900', 'about:blank'], { stdio: 'ignore' });
  let list; for (let i = 0; i < 40; i++) { try { list = await (await fetch('http://127.0.0.1:9334/json/list')).json(); if (list.length) break; } catch (e) {} await sleep(250); }
  const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pend = {}; const external = [], errors = [];
  ws.addEventListener('message', (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id]; }
    if (d.method === 'Network.requestWillBeSent' && !/^(file|data|blob|about|chrome)/.test(d.params.request.url)) external.push(d.params.request.url);
    if (d.method === 'Runtime.exceptionThrown') errors.push((d.params.exceptionDetails.exception || {}).description);
    if (d.method === 'Log.entryAdded' && d.params.entry.level === 'error') errors.push(d.params.entry.text + ' ' + (d.params.entry.url || ''));
  });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  const ev = async (e) => (await send('Runtime.evaluate', { expression: e, awaitPromise: true, returnByValue: true })).result.result.value;
  await send('Network.enable'); await send('Runtime.enable'); await send('Log.enable'); await send('Page.enable');
  // simulate no internet at all
  await send('Network.emulateNetworkConditions', { offline: true, latency: 0, downloadThroughput: 0, uploadThroughput: 0 });
  const url = 'file:///' + path.resolve(ROOT, 'index.html').replace(/\\/g, '/') + '#/';
  await send('Page.navigate', { url }); await sleep(2000);
  for (const r of ['#/dish/dal-makhani', '#/dish/greek-salad', '#/dish/pho-bo', '#/explore', '#/']) { await ev('location.hash=' + JSON.stringify(r)); await sleep(500); }
  await ev('document.fonts.ready');
  const fonts = await ev("[...document.fonts].filter(f=>f.status==='loaded').map(f=>f.family.replace(/\"/g,'')).filter((v,i,a)=>a.indexOf(v)===i).join(', ')");
  const check = await ev("JSON.stringify({inter: document.fonts.check('16px Inter'), fraunces: document.fonts.check('600 20px Fraunces'), flags: document.fonts.check('16px \"Twemoji Country Flags\"', '🇮🇳'), dishes: DD.dishes.length})");
  const r = await send('Page.captureScreenshot', { format: 'png' }); fs.writeFileSync(path.join(OUT, 'offline.png'), Buffer.from(r.result.data, 'base64'));
  console.log('Opened:', url);
  console.log('Fonts loaded:', fonts, check);
  console.log('Internet requests:', external.length ? external.join('\n') : 'NONE');
  console.log('Errors:', errors.length ? errors.join('\n') : 'NONE');
  ws.close(); br.kill(); setTimeout(() => { fs.rmSync(prof, { recursive: true, force: true }); process.exit(0); }, 500);
})();
