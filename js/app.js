/* ==========================================================================
   Dish Dictionary — router, global actions, search palette, boot
   ========================================================================== */
'use strict';
(function () {
  const { esc, toast, openModal, closeModal, fmtMin } = U;
  const app = document.getElementById('app');
  let current = null;

  const ROUTES = [
    [/^\/?$/, () => V.home()],
    [/^\/explore$/, (m, qs) => V.explore(qs)],
    [/^\/dish\/([\w-]+)$/, (m) => V.dish(m[1])],
    [/^\/cook\/([\w-]+)$/, (m) => V.cook(m[1])],
    [/^\/pantry$/, () => V.pantry()],
    [/^\/learn$/, () => V.learn()],
    [/^\/learn\/([\w-]+)$/, (m) => V.learn(m[1])],
    [/^\/planner$/, () => V.planner()],
    [/^\/shopping$/, () => V.shopping()],
    [/^\/me$/, () => V.me()],
    [/^\/add$/, () => V.editor()],
    [/^\/edit\/([\w-]+)$/, (m) => V.editor(m[1])],
  ];

  function render(keepScroll) {
    const raw = decodeURI(location.hash.slice(1) || '/');
    const [path, qs] = raw.split('?');
    let view = null;
    for (const [re, fn] of ROUTES) { const m = path.match(re); if (m) { view = fn(m, qs); break; } }
    view = view || V.notFound();
    if (current && current.unmount) current.unmount();
    const y = window.scrollY;
    const page = document.createElement('div');
    page.className = 'page';
    page.innerHTML = view.html;
    app.replaceChildren(page);
    current = view;
    document.title = (view.title ? view.title + ' · ' : '') + 'Dish Dictionary';
    if (view.mount) view.mount(page);
    window.scrollTo(0, keepScroll ? y : 0);
    const section = path.split('/')[1] || 'home';
    const navKey = section === 'dish' || section === 'cook' ? 'explore' : section === 'add' || section === 'edit' ? 'me' : section;
    document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === navKey));
    if (!keepScroll) closeModal(true);
  }

  function syncVeg() {
    const on = !!S.prefs.veg;
    document.documentElement.classList.toggle('veg-mode', on);
    document.querySelectorAll('[data-veg-btn]').forEach((b) => { b.classList.toggle('on', on); b.setAttribute('aria-checked', on); });
  }
  window.App = { refresh: () => render(true), syncVeg };

  /* ---------------- global actions ---------------- */
  const actions = {
    fav(el) {
      const id = el.dataset.id;
      const on = S.toggleFav(id);
      document.querySelectorAll(`[data-act="fav"][data-id="${id}"]`).forEach((b) => {
        b.classList.toggle('on', on);
        if (b.hasAttribute('data-label')) b.textContent = on ? '♥ Saved' : '♡ Save';
        else { b.textContent = on ? '♥' : '♡'; b.setAttribute('aria-pressed', on); }
      });
      toast(on ? '♥ Saved to your kitchen' : 'Removed from saved', on ? { href: '#/me', label: 'View' } : null);
    },
    tech(el) { V.techModal(el.dataset.id); },
    timer(el) { Timers.start(el.dataset.label, +el.dataset.min); },
    plan(el) { V.planModal(el.dataset.id); },
    cooked(el) { V.cookedModal(el.dataset.id); },
    surprise() {
      const pool = DD.pool(); const d = pool[Math.floor(Math.random() * pool.length)];
      location.hash = '#/dish/' + d.id;
      setTimeout(() => toast(`🎲 Let's go to ${d.flag} ${d.country}!`), 200);
    },
    palette: openPalette,
    'toggle-units'() { setUnits(S.prefs.units === 'metric' ? 'us' : 'metric'); },
    'set-units'(el) { setUnits(el.dataset.v); },
    'toggle-theme'() {
      const dark = document.documentElement.getAttribute('data-theme') === 'dark' || (!document.documentElement.getAttribute('data-theme') && matchMedia('(prefers-color-scheme: dark)').matches);
      setTheme(dark ? 'light' : 'dark');
    },
    'set-theme'(el) { setTheme(el.dataset.v); App.refresh(); },
    'delete-mine'(el) { V.deleteMine(el.dataset.id); },
    'dish-photo'(el) { V.setDishPhoto(el.dataset.id); },
    'dish-photo-rm'(el) { V.resetDishPhoto(el.dataset.id); },
    'toggle-veg'() {
      S.prefs.veg = !S.prefs.veg; S.save('prefs');
      syncVeg();
      // keep the user on a dish page; everywhere else lists re-filter instantly
      App.refresh();
      toast(S.prefs.veg ? `🟢 Pure veg mode: showing ${DD.pool().length} vegetarian dishes${S.prefs.eggVeg ? ' (incl. egg)' : ''}` : `Showing all ${DD.dishes.length} dishes`);
    },
  };

  function setUnits(u) {
    S.prefs.units = u; S.save('prefs');
    updateUnitsBtn();
    App.refresh();
    toast(u === 'us' ? '🇺🇸 Showing US units (oz, cups, °F)' : '📏 Showing metric units (g, ml, °C)');
  }
  function updateUnitsBtn() {
    const b = document.querySelector('[data-units-label]');
    b.textContent = S.prefs.units === 'us' ? 'oz' : 'g';
    b.setAttribute('aria-label', 'Units: ' + (S.prefs.units === 'us' ? 'US' : 'metric') + '. Click to switch.');
  }
  function setTheme(t) {
    S.prefs.theme = t; S.save('prefs');
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
  }

  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el || !actions[el.dataset.act]) return;
    e.preventDefault();
    e.stopPropagation();
    actions[el.dataset.act](el, e);
  });

  /* ---------------- search palette ---------------- */
  function openPalette() {
    let sel = 0, items = [];
    const search = (q) => {
      q = q.toLowerCase().trim();
      const out = [];
      if (!q) {
        out.push(['Quick picks', '➕', 'Add your own recipe', 'Save a family recipe or your own creation', '#/add']);
        DD.SITUATIONS.slice(0, 6).forEach((s) => out.push(['Quick picks', s.icon, s.t, s.s, '#/explore?' + s.q]));
        DD.pool().slice().sort(() => Math.random() - 0.5).slice(0, 5).forEach((d) => out.push(['Try something new', d.emoji, d.name, `${d.flag} ${d.country} · ${fmtMin(d.total)}`, '#/dish/' + d.id]));
        return out;
      }
      const ds = DD.pool().map((d) => {
        const n = d.name.toLowerCase();
        const s = n.startsWith(q) ? 3 : n.includes(q) ? 2 : (d.local || '').toLowerCase().includes(q) || d.country.toLowerCase().includes(q) ? 1.5 : q.split(/\s+/).every((t) => d.search.includes(t)) ? 1 : 0;
        return [d, s];
      }).filter((x) => x[1]).sort((a, b) => b[1] - a[1]).slice(0, 8);
      ds.forEach(([d]) => out.push(['Dishes', d.emoji, d.name, `${d.vclass === 'veg' ? '🟢' : d.vclass === 'egg' ? '🟡' : '🔴'} ${d.flag} ${d.area ? d.area + ', ' : ''}${d.country} · ${fmtMin(d.total)} · ${DD.L.level[d.level]}`, '#/dish/' + d.id]));
      V.countries().filter((c) => c.name.toLowerCase().includes(q)).slice(0, 4).forEach((c) => out.push(['Countries', c.flag, c.name, `${c.n} ${c.n === 1 ? 'dish' : 'dishes'}`, '#/explore?country=' + encodeURIComponent(c.name)]));
      Object.keys(DD.REGIONS).filter((r) => r.toLowerCase().includes(q)).forEach((r) => out.push(['Regions', DD.REGIONS[r].emoji, r, DD.REGIONS[r].blurb, '#/explore?region=' + encodeURIComponent(r)]));
      DD.techList.filter((t) => t.name.toLowerCase().includes(q)).slice(0, 4).forEach((t) => out.push(['Techniques', t.icon, t.name, t.short.replace(/\{\{.*?\}\}|\[\[|\]\]/g, '').slice(0, 70) + '…', 'tech:' + t.id]));
      DD.lessons.filter((l) => (l.title + ' ' + l.sum).toLowerCase().includes(q)).slice(0, 3).forEach((l) => out.push(['Lessons', l.icon, l.title, l.sum, '#/learn/' + l.id]));
      const ingHits = DD.pool().filter((d) => d.items.some((i) => i[2].toLowerCase().includes(q))).length;
      if (ingHits && q.length > 2) out.push(['Ingredients', '🥕', `Dishes with “${q}”`, `${ingHits} dishes use it`, '#/explore?q=' + encodeURIComponent(q)]);
      return out;
    };
    const renderList = (m) => {
      const list = m.querySelector('.palette-list');
      if (!items.length) { list.innerHTML = '<div class="empty" style="border:0">No results. Try a country, ingredient or technique.</div>'; return; }
      let lastSec = '';
      list.innerHTML = items.map(([sec, e, t, s, href], i) => {
        const h = sec !== lastSec ? `<div class="palette-sec">${esc(sec)}</div>` : '';
        lastSec = sec;
        return h + `<a class="pal-item ${i === sel ? 'sel' : ''}" data-i="${i}" href="${href.startsWith('tech:') ? '#' : href}" role="option" aria-selected="${i === sel}"><span class="e">${e}</span><span><b>${esc(t)}</b><small>${esc(s)}</small></span></a>`;
      }).join('');
      const s = list.querySelector('.sel');
      if (s) s.scrollIntoView({ block: 'nearest' });
    };
    const go = (i) => {
      const it = items[i];
      if (!it) return;
      closeModal(true);
      if (it[4].startsWith('tech:')) V.techModal(it[4].slice(5));
      else location.hash = it[4];
    };
    openModal(`<div class="palette-input"><span>🔍</span><input placeholder="Search dishes, countries, techniques, lessons…" aria-label="Search everything" autofocus></div><div class="palette-list" role="listbox"></div><div class="palette-foot"><span><kbd>↑</kbd> <kbd>↓</kbd> navigate</span><span><kbd>Enter</kbd> open</span><span><kbd>Esc</kbd> close</span></div>`, {
      cls: 'palette', label: 'Search', noClose: true,
      mount(m) {
        const input = m.querySelector('input');
        items = search(''); renderList(m);
        input.addEventListener('input', () => { sel = 0; items = search(input.value); renderList(m); });
        input.addEventListener('keydown', (e) => {
          if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(items.length - 1, sel + 1); renderList(m); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); renderList(m); }
          else if (e.key === 'Enter') { e.preventDefault(); go(sel); }
        });
        m.querySelector('.palette-list').addEventListener('click', (e) => { const a = e.target.closest('[data-i]'); if (a) { e.preventDefault(); go(+a.dataset.i); } });
      },
    });
  }

  /* ---------------- keyboard ---------------- */
  document.addEventListener('keydown', (e) => {
    const t = e.target;
    const typing = !!(t && t.matches && t.matches('input, textarea, select, [contenteditable]'));
    if (e.key === 'Escape' && document.querySelector('.modal-wrap')) { closeModal(); return; }
    if (typing) return;
    if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) { e.preventDefault(); openPalette(); }
  });

  /* ---------------- badges ---------------- */
  function updateBadges() {
    const n = S.shop.filter((x) => !x.done).length;
    document.querySelectorAll('[data-shop-count]').forEach((b) => { b.textContent = n || ''; });
  }
  document.addEventListener('dd:state', (e) => { if (e.detail === 'shop') updateBadges(); });

  /* ---------------- boot ---------------- */
  window.addEventListener('hashchange', () => render(false));
  updateUnitsBtn();
  syncVeg();
  updateBadges();
  render(false);

  // Offline copy for phones: only when opened from a web address (GitHub Pages). Opening the file on a PC is already offline.
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol)) {
    navigator.serviceWorker.addEventListener('message', (e) => {
      const m = e.data || {};
      if (m.type !== 'dd-offline-ready') return;
      toast(m.total && m.saved >= m.total
        ? `📱 Saved on this device: all ${m.total} photos. Works without internet now.`
        : `📱 Saved for offline (${m.saved} of ${m.total} photos). Open again online to finish.`, { href: '#/me', label: 'Details' });
    });
    if (navigator.serviceWorker.startMessages) navigator.serviceWorker.startMessages();
    window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
  }
})();
