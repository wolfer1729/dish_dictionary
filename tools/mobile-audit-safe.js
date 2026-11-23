// Phone audit: real mobile emulation, every screen, automated layout checks + screenshots.
// usage: node mobile-audit.js ROOT OUT BROWSER [widths=360,390] [shots=1] [only=name,name]
const fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const [ROOT, OUT, BROWSER, WIDTHS = '360,390', SHOTS = '1', ONLY = ''] = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const ROUTES = [
  ['home', '#/'],
  ['explore', '#/explore'],
  ['filters', '#/explore', `(() => { const b = [...document.querySelectorAll('button')].find((x) => /filter/i.test(x.textContent) || x.dataset.act === 'open-filters'); if (b) b.click(); return b ? b.textContent.trim() : 'no filter button'; })()`],
  ['dish', '#/dish/paneer-butter-masala'],
  ['dish2', '#/dish/chole-bhature'],
  ['cook', '#/cook/paneer-butter-masala'],
  ['pantry', '#/pantry'],
  ['learn', '#/learn'],
  ['lesson', '#/learn/dhaba-secrets'],
  ['planner', '#/planner'],
  ['shopping', '#/shopping'],
  ['me', '#/me'],
  ['add', '#/add'],
  ['palette', '#/', `(() => { const b = document.querySelector('[data-act="palette"]'); if (b) b.click(); return !!b; })()`],
  ['tech', '#/dish/paneer-butter-masala', `(() => { const b = document.querySelector('[data-act="tech"]'); if (b) b.click(); return !!b; })()`],
];
function audit() {
  const W = document.documentElement.clientWidth, out = { innerWidth: window.innerWidth, scrollWidth: document.documentElement.scrollWidth, scale: window.visualViewport ? +visualViewport.scale.toFixed(3) : 1 };
  const vis = (el) => { const s = getComputedStyle(el); if (s.display === 'none' || s.visibility === 'hidden' || +s.opacity === 0) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const inScroller = (el) => { for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) { const s = getComputedStyle(p); if (/(auto|scroll|hidden|clip)/.test(s.overflowX)) return true; } return false; };
  const desc = (el) => { const c = typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).slice(0, 3).join('.') : ''; const t = (el.innerText || el.value || el.placeholder || '').trim().replace(/\s+/g, ' ').slice(0, 28); return el.tagName.toLowerCase() + c + (t ? ' "' + t + '"' : ''); };
  const all = [...document.querySelectorAll('body *')].filter(vis);
  const fixed = (el) => { for (let p = el; p && p !== document.body; p = p.parentElement) if (getComputedStyle(p).position === 'fixed') return true; return false; };
  out.overflow = all.filter((el) => { const r = el.getBoundingClientRect(); return (r.right > W + 1 || r.left < -1) && !inScroller(el) && !fixed(el) && !el.matches('.skip'); }).slice(0, 10).map((el) => { const r = el.getBoundingClientRect(); return desc(el) + ' [' + Math.round(r.left) + '..' + Math.round(r.right) + ']'; });
  out.insideFixed = all.filter((el) => fixed(el) && getComputedStyle(el).position !== 'fixed' && !inScroller(el)).filter((el) => { let p = el; while (p && getComputedStyle(p).position !== 'fixed') p = p.parentElement; const pr = p.getBoundingClientRect(); if (pr.left >= W - 1 || pr.right <= 1) return false; const r = el.getBoundingClientRect(); return r.right > W + 1; }).slice(0, 8).map((el) => desc(el) + ' right=' + Math.round(el.getBoundingClientRect().right));
  out.fixedOverflow = all.filter((el) => getComputedStyle(el).position === 'fixed').filter((el) => { const r = el.getBoundingClientRect(); return r.right > W + 1 || r.left < -1; }).map(desc);
  out.iosZoomInputs = [...document.querySelectorAll('input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=file]), select, textarea')].filter(vis).filter((el) => parseFloat(getComputedStyle(el).fontSize) < 16).slice(0, 8).map((el) => desc(el) + ' ' + getComputedStyle(el).fontSize);
  out.clipped = all.filter((el) => { const s = getComputedStyle(el); return el.children.length === 0 && (el.innerText || '').trim() && /(hidden|clip)/.test(s.overflowX) && s.textOverflow !== 'ellipsis' && el.scrollWidth > el.clientWidth + 2; }).slice(0, 10).map(desc);
  const leaves = all.filter((el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()) && !fixed(el) && !el.closest('.toast,[aria-hidden=true]'));
  const rects = leaves.map((el) => [el, el.getBoundingClientRect()]);
  const ov = [];
  for (let i = 0; i < rects.length && ov.length < 12; i++) for (let j = i + 1; j < rects.length && ov.length < 12; j++) {
    const [a, ra] = rects[i], [b, rb] = rects[j];
    if (a.contains(b) || b.contains(a)) continue;
    const x = Math.min(ra.right, rb.right) - Math.max(ra.left, rb.left), y = Math.min(ra.bottom, rb.bottom) - Math.max(ra.top, rb.top);
    if (x > 3 && y > 3) ov.push(desc(a) + '  X  ' + desc(b) + ' (' + Math.round(x) + 'x' + Math.round(y) + ' @y' + Math.round(ra.top + scrollY) + ')');
  }
  out.overlaps = ov;
  const tab = [...document.querySelectorAll('nav,.tabbar,.tabs-bottom,.bottom-nav')].find((n) => getComputedStyle(n).position === 'fixed' && vis(n) && n.getBoundingClientRect().bottom >= innerHeight - 2);
  if (tab && !document.querySelector('.modal-wrap')) {
    const th = tab.getBoundingClientRect().height; document.documentElement.style.scrollBehavior = 'auto'; window.scrollTo(0, 1e7);
    const last = all.filter((el) => el.children.length === 0 && !fixed(el)).map((el) => el.getBoundingClientRect().bottom).reduce((m, v) => Math.max(m, v), 0);
    out.underTabbar = last > innerHeight - th + 2 ? 'last content ends ' + Math.round(last - (innerHeight - th)) + 'px under the bottom tab bar' : 'ok';
    window.scrollTo(0, 0);
  }
  out.smallTaps = all.filter((el) => el.matches('a.btn,button,[role=button],label.btn,select,input:not([type=hidden]):not([type=checkbox]):not([type=radio])') && !fixed(el)).filter((el) => { const r = el.getBoundingClientRect(); return r.height < 32; }).map(desc).slice(0, 6);
  out.pageHeight = document.documentElement.scrollHeight;
  return out;
}
(async () => {
  const prof = path.join(OUT, 'mobprof'); try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {}
  fs.mkdirSync(path.join(OUT, 'mob'), { recursive: true });
  const br = spawn(BROWSER, ['--headless=new', '--remote-debugging-port=9351', '--user-data-dir=' + prof, '--no-first-run', '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
  let list; for (let i = 0; i < 40; i++) { try { list = await (await fetch('http://127.0.0.1:9351/json/list')).json(); if (list.length) break; } catch (e) {} await sleep(250); }
  const ws = new WebSocket(list.find((t) => t.type === 'page').webSocketDebuggerUrl);
  await new Promise((r) => ws.addEventListener('open', r));
  let id = 0; const pend = {}; const errors = [];
  ws.addEventListener('message', (m) => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) { pend[d.id](d); delete pend[d.id]; } if (d.method === 'Runtime.exceptionThrown') errors.push((d.params.exceptionDetails.exception || {}).description); });
  const send = (method, params = {}) => new Promise((r) => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); setTimeout(() => { if (pend[i]) { delete pend[i]; r({ result: { result: {} } }); } }, 20000); });
  const ev = async (e) => { const r = await send('Runtime.evaluate', { expression: e, awaitPromise: true, returnByValue: true }); return r.result.exceptionDetails ? 'EXC ' + (r.result.exceptionDetails.exception || {}).description : r.result.result.value; };
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setUserAgentOverride', { userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36' });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true, maxTouchPoints: 5 });
  const base = 'file:///' + path.resolve(ROOT, 'index.html').replace(/\\/g, '/');
  for (const w of WIDTHS.split(',').map(Number)) {
    await send('Emulation.setDeviceMetricsOverride', { width: w, height: 780, deviceScaleFactor: 2, mobile: true }); const so = await send('Emulation.setSafeAreaInsetsOverride', { insets: { top: 40, bottom: 30, left: 0, right: 0 } }); console.log('safe-area override:', so.error ? so.error.message : 'ok');
    await send('Page.navigate', { url: base + '#/' }); await sleep(1500);
    for (const [name, hash, act] of ROUTES) {
      if (ONLY && !ONLY.split(',').includes(name)) continue;
      await send('Page.navigate', { url: base + hash }); await sleep(1300);
      let actRes = '';
      if (act) { actRes = await ev(act); await sleep(800); }
      await ev('window.scrollTo(0,0)'); await sleep(200);
      const a = await ev('(' + audit.toString() + ')()');
      if (!a || typeof a !== 'object') { console.log(`[${w}] ${name}: audit failed ${a}`); continue; }
      const issues = [];
      if (a.innerWidth !== w || a.scrollWidth > w || a.scale !== 1) issues.push(`PAGE WIDER THAN PHONE (zooms out): innerWidth=${a.innerWidth} scrollWidth=${a.scrollWidth} scale=${a.scale}`);
      for (const k of ['overflow', 'insideFixed', 'iosZoomInputs', 'clipped', 'overlaps', 'smallTaps']) if (a[k] && a[k].length) issues.push(k + ':\n      ' + a[k].join('\n      '));
      if (a.underTabbar && a.underTabbar !== 'ok') issues.push(a.underTabbar);
      console.log(`[${w}] ${name.padEnd(9)} h=${a.pageHeight}${act ? ' act=' + JSON.stringify(actRes) : ''}` + (issues.length ? '\n    ' + issues.join('\n    ') : '  OK'));
      if (SHOTS === '1') {
        const H = Math.min(a.pageHeight, 2600);
        const s = await send('Page.captureScreenshot', { format: 'jpeg', quality: 72, captureBeyondViewport: true, clip: { x: 0, y: 0, width: w, height: H, scale: 1 } });
        if (s.result && s.result.data) fs.writeFileSync(path.join(OUT, 'mob', 'safe-' + `${w}-${name}.jpg`), Buffer.from(s.result.data, 'base64'));
      }
    }
  }
  console.log('JS errors:', errors.length ? errors.join('\n') : 'NONE');
  ws.close(); br.kill(); setTimeout(() => { try { fs.rmSync(prof, { recursive: true, force: true }); } catch (e) {} process.exit(0); }, 1200);
})();
