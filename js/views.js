/* ==========================================================================
   Dish Dictionary — views (home, explore, dish, pantry, planner, shopping, me)
   ========================================================================== */
'use strict';
(function () {
  const { esc, fmtMin, qty, rich, levelDots, heat, dayIndex, seeded, debounce, toast, openModal, closeModal } = U;
  const L = DD.L;
  const V = (window.V = {});
  const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const MEALS = ['breakfast', 'lunch', 'dinner'];

  /* ---------------- shared bits ---------------- */
  function countries() {
    const m = {};
    DD.pool().forEach((d) => { (m[d.country] = m[d.country] || { name: d.country, flag: d.flag, region: d.region, n: 0 }).n++; });
    return Object.values(m).sort((a, b) => a.name.localeCompare(b.name));
  }
  V.countries = countries;

  function card(d, i) {
    const fav = S.isFav(d.id), cooked = S.cooked[d.id];
    return `<article class="card" style="--h:${d.hue};animation-delay:${Math.min(i || 0, 12) * 30}ms">
      <a class="card-art ${d.photo ? 'has-photo' : ''}" href="#/dish/${d.id}" tabindex="-1" aria-hidden="true">
        ${d.photo ? `<img class="card-photo" src="${esc(d.photo)}" alt="" loading="lazy" decoding="async" onerror="this.parentElement.classList.remove('has-photo');this.remove()">` : ''}
        <span class="card-emoji">${d.emoji}</span><span class="card-flag">${d.flag}</span>
        ${d.mine ? '<span class="card-pill mine">👩‍🍳 My recipe</span>' : d.level === 1 ? '<span class="card-pill">Beginner</span>' : ''}
        ${cooked ? `<span class="card-pill cooked">✓ Cooked${cooked.rating ? ' · ' + '★'.repeat(cooked.rating) : ''}</span>` : ''}
      </a>
      <button class="fav ${fav ? 'on' : ''}" data-act="fav" data-id="${d.id}" aria-pressed="${fav}" aria-label="${fav ? 'Remove from' : 'Save to'} favorites">${fav ? '♥' : '♡'}</button>
      <div class="card-body">
        <div class="card-kicker">${DD.vmark(d)}${esc(d.area || d.country)} · ${esc((L.course[d.course] || '').split(' ')[0])}</div>
        <h3><a href="#/dish/${d.id}">${esc(d.name)}</a></h3>
        <p class="card-desc">${esc(d.desc)}</p>
        <div class="card-meta"><span>⏱ ${fmtMin(d.total)}</span>${levelDots(d.level)}${d.spice ? `<span title="Heat ${d.spice}/5">${heat(Math.ceil(d.spice / 2))}</span>` : ''}<span>🍽 ${d.serves}</span></div>
      </div>
    </article>`;
  }
  V.card = card;
  const cards = (list) => list.map(card).join('');

  /* ---------------- HOME ---------------- */
  V.home = function () {
    const ds = DD.pool();
    const nC = countries().length;
    const today = ds[dayIndex() % ds.length];
    const rnd = seeded(dayIndex());
    const orbit = [...ds].sort(() => rnd() - 0.5).slice(0, 5);
    const pos = [[2, 8], [78, 4], [88, 52], [64, 86], [-2, 60]];
    const quick = ds.filter((d) => d.total <= 30).sort(() => rnd() - 0.5).slice(0, 10);
    const comfort = ds.filter((d) => d.tags.includes('comfort')).sort(() => rnd() - 0.5).slice(0, 10);
    const regions = Object.entries(DD.REGIONS).map(([r, info]) => {
      const list = ds.filter((d) => d.region === r);
      const flags = [...new Set(list.map((d) => d.flag))].slice(0, 7).join('');
      return { r, info, n: list.length, flags };
    }).filter((x) => x.n);
    const cookedN = Object.keys(S.cooked).length;
    const pathDone = DD.path.filter((p) => S.cooked[p.id]).length;

    return {
      title: 'Cook the world',
      html: `
      <section class="hero">
        <div>
          <p class="eyebrow">The world's kitchen, explained</p>
          <h1>Cook the whole world,<br><em>one dish at a time.</em></h1>
          <p class="lead">Authentic recipes from every corner of the globe, written so a complete beginner can cook them like a professional, with step-by-step cook mode, built-in timers, technique lessons and filters for every situation.</p>
          <form class="hero-search" data-do="hero-search" role="search">
            <span aria-hidden="true">🔍</span>
            <input name="q" placeholder="Try “curry”, “Mexico”, “chickpeas”, “no-cook”…" aria-label="Search recipes" autocomplete="off">
            <button class="btn primary">Search</button>
          </form>
          <div class="hero-actions">
            <button class="btn soft" data-act="surprise">🎲 Surprise me</button>
            <a class="btn soft" href="#/pantry">🥕 Cook from my fridge</a>
            <a class="btn soft" href="#/learn">🎓 Start cooking school</a>
            <a class="btn soft" href="#/add">➕ Add your recipe</a>
          </div>
          <div class="stats-row">
            <div class="stat"><b>${ds.length}</b><span>world dishes</span></div>
            <div class="stat"><b>${nC}</b><span>countries</span></div>
            <div class="stat"><b>${DD.techList.length}</b><span>techniques explained</span></div>
            <div class="stat"><b>${DD.lessons.length}</b><span>cooking lessons</span></div>
          </div>
        </div>
        <div class="hero-plate" aria-hidden="true">
          <div class="plate"><span>${today.emoji}</span></div>
          ${orbit.map((d, i) => `<span class="orbit" style="left:${pos[i][0]}%;top:${pos[i][1]}%;animation-delay:${i * -1.2}s">${d.emoji}</span>`).join('')}
          <a class="label" href="#/dish/${today.id}" tabindex="-1">${today.flag} ${esc(today.name)}</a>
        </div>
      </section>

      <section class="block">
        <div class="block-head"><div><h2>What's the situation?</h2><p>Pick a moment and we'll find the right dish.</p></div><a href="#/explore">All filters →</a></div>
        <div class="sit-grid">${DD.SITUATIONS.map((s) => `<a class="sit" href="#/explore?${s.q}"><span class="sit-ico">${s.icon}</span><b>${s.t}</b><small>${s.s}</small></a>`).join('')}</div>
      </section>

      <section class="block feature" style="--h:${today.hue}">
        <a class="feature-art ${today.photo ? 'has-photo' : ''}" href="#/dish/${today.id}" aria-label="${esc(today.name)}">${today.photo ? `<img class="card-photo" src="${esc(today.photo)}" alt="" onerror="this.parentElement.classList.remove('has-photo');this.remove()">` : ''}<span class="ribbon">⭐ Dish of the day</span><span class="fe">${today.emoji}</span></a>
        <div class="feature-body">
          <div class="card-kicker">${today.flag} ${esc(today.country)} · ${esc(L.level[today.level])} · ${fmtMin(today.total)}</div>
          <h2><a href="#/dish/${today.id}">${esc(today.name)}</a></h2>
          <p class="lead">${esc(today.desc)}</p>
          <p class="muted small">${esc(today.story.split('. ').slice(0, 2).join('. '))}.</p>
          <div class="btn-row"><a class="btn primary" href="#/dish/${today.id}">See the recipe</a><a class="btn" href="#/cook/${today.id}">👩‍🍳 Cook it now</a></div>
        </div>
      </section>

      <section class="block">
        <div class="block-head"><div><h2>Travel by region</h2><p>Every cuisine has its own logic. Pick a destination.</p></div></div>
        <div class="region-grid">${regions.map(({ r, info, n, flags }) => `
          <a class="region" style="--h:${info.hue}" href="#/explore?region=${encodeURIComponent(r)}">
            <span class="r-emoji" aria-hidden="true">${info.emoji}</span>
            <b>${esc(r)}</b><small>${n} dishes · ${esc(info.blurb)}</small><span class="flags">${flags}</span>
          </a>`).join('')}</div>
      </section>

      ${(() => {
        const india = ds.filter((d) => d.country === 'India');
        if (!india.length) return '';
        const states = [...new Set(india.map((d) => d.area).filter(Boolean))].sort();
        const vegN = india.filter((d) => d.vclass === 'veg').length;
        const dhaba = ds.filter((d) => d.styles.includes('dhaba')).sort(() => rnd() - 0.5).slice(0, 12);
        return `<section class="block india">
          <div class="block-head"><div><h2>🇮🇳 The Indian kitchen</h2><p>${S.prefs.veg ? `${india.length} pure veg Indian dishes` : `${india.length} Indian dishes, ${vegN} of them pure veg`}, from dhaba classics to South Indian breakfasts.</p></div><a href="#/explore?country=India">All Indian →</a></div>
          <div class="chips" style="margin-bottom:12px">${['dhaba', 'mughlai', 'tandoori', 'south-indian', 'indo-chinese', 'chaat', 'home-style', 'sweets'].map((s) => `<a class="chip" href="#/explore?styles=${s}">${L.styles[s]} <span class="ct">${ds.filter((d) => d.styles.includes(s)).length}</span></a>`).join('')}
            <a class="chip" href="#/explore?country=India&diet=vegetarian">${DD.vmark({ vclass: 'veg' })} Indian veg <span class="ct">${vegN}</span></a></div>
          <div class="chips">${states.map((s) => `<a class="chip" href="#/explore?area=${encodeURIComponent(s)}">📍 ${esc(s)} <span class="ct">${india.filter((d) => d.area === s).length}</span></a>`).join('')}</div>
          ${dhaba.length ? `<h3 style="margin:26px 0 12px">🛻 Straight from the dhaba</h3><div class="rail">${cards(dhaba)}</div>` : ''}
        </section>`;
      })()}

      ${(() => {
        const cont = ds.filter((d) => d.styles.includes('continental')).sort(() => rnd() - 0.5).slice(0, 12);
        return cont.length ? `<section class="block"><div class="block-head"><div><h2>🍽️ Continental classics</h2><p>Pastas, gratins, creamy soups and grills, the café-menu favorites.</p></div><a href="#/explore?styles=continental">See all →</a></div><div class="rail">${cards(cont)}</div></section>` : '';
      })()}

      <section class="block">
        <div class="block-head"><div><h2>Browse by course</h2><p>From the first sip to the last spoon.</p></div></div>
        <div class="sit-grid">${[['soup', '🥣'], ['starter', '🍢'], ['salad', '🥗'], ['main', '🍛'], ['side', '🥔'], ['bread', '🫓'], ['sauce', '🫙'], ['breakfast', '🍳'], ['snack', '🛺'], ['dessert', '🍰'], ['drink', '🥤']]
          .map(([k, ico]) => [k, ico, ds.filter((d) => d.course === k).length]).filter((x) => x[2])
          .map(([k, ico, n]) => `<a class="sit" href="#/explore?course=${k}"><span class="sit-ico">${ico}</span><b>${esc(L.course[k])}</b><small>${n} ${n === 1 ? 'recipe' : 'recipes'}</small></a>`).join('')}</div>
      </section>

      <section class="block">
        <div class="block-head"><div><h2>Crave a taste</h2><p>Start from the flavor you're in the mood for.</p></div></div>
        <div class="chips">${Object.entries(L.tastes).map(([k, v]) => `<a class="chip" href="#/explore?tastes=${k}">${v} <span class="ct">${ds.filter((d) => d.tastes.includes(k)).length}</span></a>`).join('')}</div>
      </section>

      <section class="block path-cta">
        <div>
          <p class="eyebrow" style="color:var(--green)">Zero to confident cook</p>
          <h2>The Beginner's Path</h2>
          <p>${DD.path.length} hand-picked recipes in order. Each one teaches a new core skill, from boiling an egg to building a curry. ${pathDone ? `<b>You've done ${pathDone}/${DD.path.length}.</b>` : 'Cook them in sequence and you will cook anything.'}</p>
          <a class="btn primary" href="#/learn/path">Start the path →</a>
        </div>
        <div class="path-steps">${DD.path.slice(0, 8).map((p, i) => { const d = DD.byId[p.id]; return d ? `<a class="path-step ${S.cooked[d.id] ? 'done' : ''}" href="#/dish/${d.id}"><span class="n">${S.cooked[d.id] ? '✓' : i + 1}</span>${d.emoji} ${esc(d.name)}</a>` : ''; }).join('')}</div>
      </section>

      <section class="block">
        <div class="block-head"><div><h2>⚡ Ready in 30 minutes</h2><p>Fast enough for a Tuesday.</p></div><a href="#/explore?time=30&sort=quick">See all →</a></div>
        <div class="rail">${cards(quick)}</div>
      </section>

      <section class="block">
        <div class="block-head"><div><h2>🛋️ Comfort from around the world</h2><p>Bowls and pots that feel like a hug.</p></div><a href="#/explore?tags=comfort">See all →</a></div>
        <div class="rail">${cards(comfort)}</div>
      </section>

      ${cookedN ? '' : `<section class="block panel" style="text-align:center;padding:36px">
        <h2>Your culinary passport is empty ✈️</h2>
        <p class="muted">Cook any dish and tap <b>“I cooked this”</b> to collect a stamp from that country. ${nC} countries to collect.</p>
        <a class="btn" href="#/me">Open my kitchen</a></section>`}
      <p class="footer">Dish Dictionary · works offline · your data stays on this device</p>`,
      mount(root) {
        root.querySelector('[data-do="hero-search"]').addEventListener('submit', (e) => {
          e.preventDefault();
          const q = e.target.q.value.trim();
          location.hash = '#/explore' + (q ? '?q=' + encodeURIComponent(q) : '');
        });
      },
    };
  };

  /* ---------------- EXPLORE ---------------- */
  const GROUPS = [
    { k: 'region', label: 'Region', opts: () => Object.keys(DD.REGIONS).map((r) => [r, DD.REGIONS[r].emoji + ' ' + r]), get: (d) => [d.region] },
    { k: 'styles', label: 'Cuisine style', opts: () => Object.entries(L.styles), get: (d) => d.styles },
    { k: 'country', label: 'Country', scroll: true, opts: () => countries().map((c) => [c.name, c.flag + ' ' + c.name]), get: (d) => [d.country] },
    { k: 'area', label: 'Indian state / area', scroll: true, opts: () => [...new Set(DD.pool().map((d) => d.area).filter(Boolean))].sort().map((a) => [a, a]), get: (d) => (d.area ? [d.area] : []) },
    { k: 'tags', label: 'Situation & mood', opts: () => Object.entries(L.tags), get: (d) => d.tags },
    { k: 'course', label: 'Course', opts: () => Object.entries(L.course), get: (d) => [d.course] },
    { k: 'tastes', label: 'Taste', hint: 'match all', all: true, opts: () => Object.entries(L.tastes), get: (d) => d.tastes },
    { k: 'diet', label: 'Diet & allergies', hint: 'match all', all: true, opts: () => Object.entries(L.diet), get: (d) => d.diet },
    { k: 'level', label: 'Skill level', opts: () => Object.entries(L.level), get: (d) => [String(d.level)] },
    { k: 'source', label: 'Source', opts: () => [['mine', '👩‍🍳 My own recipes'], ['photo', '📷 Has a photo']], get: (d) => [d.mine ? 'mine' : '', d.photo ? 'photo' : ''] },
    { k: 'methods', label: 'Cooking method', opts: () => Object.entries(L.methods), get: (d) => d.methods },
  ];
  const TIMES = [[0, 'Any'], [20, '≤ 20 min'], [30, '≤ 30 min'], [45, '≤ 45 min'], [60, '≤ 1 h'], [120, '≤ 2 h']];
  const HEATS = [[null, 'Any'], [0, 'None'], [1, 'Mild'], [3, 'Medium'], [5, 'Hot']];
  const SORTS = {
    rec: ['Recommended', null],
    az: ['Name A → Z', (a, b) => a.name.localeCompare(b.name)],
    quick: ['Quickest first', (a, b) => a.total - b.total],
    easy: ['Easiest first', (a, b) => a.level - b.level || a.total - b.total],
    hard: ['Most challenging', (a, b) => b.level - a.level || b.total - a.total],
    few: ['Fewest ingredients', (a, b) => a.items.length - b.items.length],
    hot: ['Spiciest first', (a, b) => b.spice - a.spice],
    mild: ['Mildest first', (a, b) => a.spice - b.spice],
    country: ['By country', (a, b) => a.country.localeCompare(b.country) || a.name.localeCompare(b.name)],
    rated: ['My top rated', (a, b) => ((S.cooked[b.id] || {}).rating || 0) - ((S.cooked[a.id] || {}).rating || 0)],
  };

  function parseF(qs) {
    const p = new URLSearchParams(qs || '');
    const F = { q: p.get('q') || '', avoid: p.get('avoid') || '', time: +p.get('time') || 0, heat: p.has('heat') ? +p.get('heat') : null, sort: p.get('sort') || 'rec', view: p.get('view') || 'grid' };
    GROUPS.forEach((g) => { F[g.k] = p.get(g.k) ? p.get(g.k).split(',') : []; });
    return F;
  }
  function serializeF(F) {
    const p = new URLSearchParams();
    if (F.q) p.set('q', F.q);
    GROUPS.forEach((g) => { if (F[g.k].length) p.set(g.k, F[g.k].join(',')); });
    if (F.time) p.set('time', F.time);
    if (F.heat != null) p.set('heat', F.heat);
    if (F.avoid) p.set('avoid', F.avoid);
    if (F.sort !== 'rec') p.set('sort', F.sort);
    if (F.view !== 'grid') p.set('view', F.view);
    return p.toString().replace(/%2C/g, ',');
  }
  function passes(d, F, skip) {
    if (F.q) {
      const terms = F.q.toLowerCase().split(/\s+/).filter(Boolean);
      if (!terms.every((t) => d.search.includes(t))) return false;
    }
    for (const g of GROUPS) {
      if (g.k === skip) continue;
      const sel = F[g.k];
      if (!sel.length) continue;
      const vals = g.get(d);
      if (g.all ? !sel.every((v) => vals.includes(v)) : !sel.some((v) => vals.includes(v))) return false;
    }
    if (F.time && d.total > F.time) return false;
    if (F.heat != null && d.spice > F.heat) return false;
    if (F.avoid) {
      const bad = F.avoid.toLowerCase().split(',').map((s) => s.trim()).filter(Boolean);
      if (bad.some((b) => d.items.some((i) => i[2].toLowerCase().includes(b)))) return false;
    }
    return true;
  }
  V.filterDishes = (F) => DD.pool().filter((d) => passes(d, F));
  V.parseF = parseF;

  V.explore = function (qs) {
    const F = parseF(qs);
    return {
      title: 'Explore recipes',
      html: `
      <div class="page-head"><p class="eyebrow">Explore</p><h1>Find the perfect dish</h1>
        <p class="lead">Mix and match filters: where it's from, how it tastes, what you're avoiding, how much time you have, and the mood you're in.</p></div>
      <div class="explore">
        <aside class="filters" id="filters" aria-label="Filters">
          <div class="filters-head"><h3>Filters</h3><div class="btn-row"><button class="btn sm ghost" data-do="clear">Reset</button><button class="btn sm close-filters" data-do="close-filters">✕</button></div></div>
          <div class="searchbox" style="margin-bottom:12px"><input class="input" id="fq" type="search" placeholder="Dish, country, ingredient…" value="${esc(F.q)}" aria-label="Search recipes"></div>
          <div class="fgroup"><div style="font-weight:600;font-size:.9rem;margin-bottom:10px">⏱ Total time</div><div class="chips" id="ftime"></div></div>
          <div class="fgroup"><div style="font-weight:600;font-size:.9rem;margin-bottom:10px">🌶️ Max heat</div><div class="chips" id="fheat"></div></div>
          <div id="fgroups"></div>
          <div class="fgroup"><div style="font-weight:600;font-size:.9rem;margin-bottom:6px">🚫 Avoid ingredients</div>
            <input class="input" id="favoid" placeholder="e.g. pork, peanut, coriander" value="${esc(F.avoid)}" aria-label="Ingredients to avoid">
            <p class="small muted" style="margin:6px 0 0">Comma separated. Great for allergies and dislikes.</p></div>
          <div class="apply-bar"><button class="btn primary" data-do="close-filters" id="applyBtn">Show results</button></div>
        </aside>
        <section>
          <div class="results-bar">
            <div class="count" id="count"></div>
            <button class="btn sm filter-toggle" data-do="open-filters">⚙️ Filters <span class="badge" id="fcount"></span></button>
            <select class="select" id="fsort" aria-label="Sort">${Object.entries(SORTS).map(([k, [l]]) => `<option value="${k}" ${F.sort === k ? 'selected' : ''}>${l}</option>`).join('')}</select>
            <div class="seg" role="group" aria-label="Layout"><button data-do="view" data-v="grid" class="${F.view === 'grid' ? 'on' : ''}" aria-label="Grid">▦</button><button data-do="view" data-v="list" class="${F.view === 'list' ? 'on' : ''}" aria-label="List">☰</button></div>
            <button class="btn sm" data-do="random" title="Random dish from these results">🎲</button>
          </div>
          <div class="chips active-chips" id="active"></div>
          <div id="results"></div>
        </section>
      </div>`,
      mount(root) {
        const $ = (s) => root.querySelector(s);
        const sync = () => history.replaceState(null, '', '#/explore' + (serializeF(F) ? '?' + serializeF(F) : ''));

        function renderControls() {
          $('#ftime').innerHTML = TIMES.map(([v, l]) => `<button class="chip ${F.time === v ? 'on' : ''}" data-do="time" data-v="${v}">${l}</button>`).join('');
          $('#fheat').innerHTML = HEATS.map(([v, l]) => `<button class="chip ${F.heat === v ? 'on' : ''}" data-do="heat" data-v="${v == null ? '' : v}">${l}</button>`).join('');
          const openState = {};
          root.querySelectorAll('#fgroups details').forEach((el) => { openState[el.dataset.k] = el.open; });
          $('#fgroups').innerHTML = GROUPS.map((g) => {
            const base = DD.pool().filter((d) => passes(d, F, g.k));
            const opts = g.opts().map(([v, l]) => {
              const n = base.filter((d) => { const vals = g.get(d); return vals.includes(v) && (!g.all || F[g.k].every((s) => vals.includes(s))); }).length;
              const on = F[g.k].includes(v);
              return { v, l, n, on };
            }).filter((o) => o.n || o.on || g.k !== 'country');
            const isOpen = openState[g.k] != null ? openState[g.k] : (F[g.k].length > 0 || ['region', 'styles', 'tags', 'diet'].includes(g.k));
            return `<details class="fgroup" data-k="${g.k}" ${isOpen ? 'open' : ''}>
              <summary>${g.label}${g.hint ? `<span class="hint">(${g.hint})</span>` : ''}${F[g.k].length ? ` <span class="badge">${F[g.k].length}</span>` : ''}</summary>
              <div class="chips ${g.scroll ? 'scroll' : ''}">${opts.map((o) => `<button class="chip ${o.on ? 'on' : ''} ${!o.n && !o.on ? 'zero' : ''}" data-do="toggle" data-k="${g.k}" data-v="${esc(o.v)}" aria-pressed="${o.on}">${esc(o.l)} <span class="ct">${o.n}</span></button>`).join('')}</div>
            </details>`;
          }).join('');
        }

        function activeList() {
          const a = [];
          if (F.q) a.push(['q', '', `“${F.q}”`]);
          GROUPS.forEach((g) => F[g.k].forEach((v) => { const o = g.opts().find((x) => x[0] === v); a.push([g.k, v, o ? o[1] : v]); }));
          if (F.time) a.push(['time', '', '≤ ' + fmtMin(F.time)]);
          if (F.heat != null) a.push(['heat', '', 'Heat: ' + HEATS.find((h) => h[0] === F.heat)[1]]);
          if (F.avoid) a.push(['avoid', '', 'No ' + F.avoid]);
          return a;
        }

        function renderResults() {
          let list = DD.pool().filter((d) => passes(d, F));
          if (F.sort === 'rec') {
            const rnd = seeded(dayIndex() + 7);
            const r = new Map(DD.dishes.map((d) => [d.id, rnd()]));
            const q = F.q.toLowerCase();
            list.sort((a, b) => (q ? (b.name.toLowerCase().includes(q) - a.name.toLowerCase().includes(q)) : 0) || r.get(a.id) - r.get(b.id));
          } else list.sort(SORTS[F.sort][1]);
          root._list = list;
          const act = activeList();
          $('#count').innerHTML = `${list.length} ${list.length === 1 ? 'dish' : 'dishes'} <span>of ${DD.pool().length}${S.prefs.veg ? ' veg' : ''}</span>`;
          $('#fcount').textContent = act.length || '';
          $('#applyBtn').textContent = `Show ${list.length} ${list.length === 1 ? 'dish' : 'dishes'}`;
          $('#active').innerHTML = (S.prefs.veg ? `<button class="chip veg-chip" data-act="toggle-veg">${DD.vmark({ vclass: 'veg' })} Pure veg mode is on · show all</button>` : '') + (act.length ? act.map(([k, v, l]) => `<button class="chip on x" data-do="remove" data-k="${k}" data-v="${esc(v)}">${esc(l)}</button>`).join('') + '<button class="chip" data-do="clear">Clear all</button>' : '');
          $('#results').innerHTML = list.length
            ? `<div class="grid ${F.view === 'list' ? 'list' : ''}">${cards(list)}</div>`
            : `<div class="empty"><div class="big">🍽️</div><h3>No dishes match all of that</h3><p>Try removing a filter. Here's what's closest:</p>
               <div class="chips" style="justify-content:center">${act.slice(0, 6).map(([k, v, l]) => `<button class="chip x" data-do="remove" data-k="${k}" data-v="${esc(v)}">Remove ${esc(l)}</button>`).join('')}</div></div>`;
        }

        function update(controls = true) { sync(); if (controls) renderControls(); renderResults(); }
        update();

        $('#fq').addEventListener('input', debounce((e) => { F.q = e.target.value.trim(); update(); }, 160));
        $('#favoid').addEventListener('input', debounce((e) => { F.avoid = e.target.value.trim(); update(); }, 250));
        $('#fsort').addEventListener('change', (e) => { F.sort = e.target.value; update(false); });

        root.addEventListener('click', (e) => {
          const b = e.target.closest('[data-do]');
          if (!b) return;
          const { do: act, k, v } = b.dataset;
          if (act === 'toggle') { const arr = F[k]; const i = arr.indexOf(v); i >= 0 ? arr.splice(i, 1) : arr.push(v); update(); }
          else if (act === 'time') { F.time = +v; update(); }
          else if (act === 'heat') { F.heat = v === '' ? null : +v; update(); }
          else if (act === 'remove') {
            if (k === 'q') { F.q = ''; $('#fq').value = ''; }
            else if (k === 'time') F.time = 0;
            else if (k === 'heat') F.heat = null;
            else if (k === 'avoid') { F.avoid = ''; $('#favoid').value = ''; }
            else F[k] = F[k].filter((x) => x !== v);
            update();
          } else if (act === 'clear') {
            Object.assign(F, parseF(''), { sort: F.sort, view: F.view });
            $('#fq').value = ''; $('#favoid').value = '';
            update();
          } else if (act === 'view') { F.view = v; root.querySelectorAll('[data-do="view"]').forEach((x) => x.classList.toggle('on', x.dataset.v === v)); update(false); }
          else if (act === 'random') { const l = root._list || []; if (l.length) location.hash = '#/dish/' + l[Math.floor(Math.random() * l.length)].id; }
          else if (act === 'open-filters') { $('#filters').classList.add('open'); }
          else if (act === 'close-filters') { $('#filters').classList.remove('open'); }
        });
      },
    };
  };

  /* ---------------- DISH ---------------- */
  function ingHTML(d, scale) {
    let out = '', open = false;
    for (const it of d.ing) {
      if (typeof it === 'string') {
        if (open) out += '</ul>';
        out += `<h4 class="ing-group">${esc(it.replace(/^#\s*/, ''))}</h4><ul class="ing">`;
        open = true; continue;
      }
      if (!open) { out += '<ul class="ing">'; open = true; }
      const [q, u, name, note] = it;
      const [n, uu] = qty(q, u, scale);
      out += `<li><label><input type="checkbox"><span class="q">${q == null ? '' : esc(n + ' ' + uu)}</span><span><span class="n">${esc(name)}</span>${note ? ` <span class="note">${esc(note)}</span>` : ''}${q == null ? ' <span class="note">(to taste)</span>' : ''}</span></label></li>`;
    }
    return out + (open ? '</ul>' : '');
  }
  V.ingHTML = ingHTML;

  function similar(d) {
    return DD.pool().filter((x) => x.id !== d.id).map((x) => {
      let s = 0;
      if (x.region === d.region) s += 2;
      if (x.country === d.country) s += 1;
      if (x.course === d.course) s += 1.5;
      s += x.tastes.filter((t) => d.tastes.includes(t)).length * 0.8;
      s += x.methods.filter((t) => d.methods.includes(t)).length * 0.5;
      return [x, s + (U.hash(x.id + d.id) % 10) / 20];
    }).sort((a, b) => b[1] - a[1]).slice(0, 4).map((x) => x[0]);
  }

  V.dish = function (id) {
    const d = DD.byId[id];
    if (!d) return V.notFound();
    const serv = S.servings[d.id] || d.serves;
    const fav = S.isFav(d.id);
    const c = S.cooked[d.id];
    const tasteBars = Object.entries(d.taste).sort((a, b) => b[1] - a[1]).map(([k, v]) => `<div class="tbar"><div><span>${L.tastes[k] || k}</span><span>${v}/5</span></div><div class="track"><div class="fill" style="width:${v * 20}%"></div></div></div>`).join('');
    const dietTags = d.diet.map((x) => `<span class="tag green">${L.diet[x] || x}</span>`).join(' ');
    const sitTags = d.tags.map((x) => `<a class="tag" href="#/explore?tags=${x}" style="text-decoration:none">${L.tags[x] || x}</a>`).join(' ');

    return {
      title: d.name,
      html: `
      <nav class="crumbs" aria-label="Breadcrumb"><a href="#/explore">Explore</a>›<a href="#/explore?region=${encodeURIComponent(d.region)}">${esc(d.region)}</a>›<a href="#/explore?country=${encodeURIComponent(d.country)}">${d.flag} ${esc(d.country)}</a></nav>
      <section class="dish-hero" style="--h:${d.hue}">
        <figure class="dish-fig">
          <div class="dish-art ${d.photo ? 'has-photo' : ''}">${d.photo ? `<img class="card-photo" src="${esc(d.photo)}" alt="${esc(d.name)}" onerror="this.parentElement.classList.remove('has-photo');this.remove()">` : ''}<span class="flag">${d.flag}</span><span class="de" aria-hidden="true">${d.emoji}</span></div>
          ${d.photoCredit ? `<figcaption class="photo-credit">📷 ${esc(d.photoCredit.author || 'Unknown')} · ${esc(d.photoCredit.license || '')} · <a href="${esc(d.photoCredit.url)}" target="_blank" rel="noopener">source</a></figcaption>` : d.photo ? `<figcaption class="photo-credit">📷 ${d.userPhoto || d.mine ? 'Your photo' : 'Reference photo'}</figcaption>` : ''}
          ${d.mine ? '' : `<div class="photo-actions no-print"><button class="btn sm ghost" data-act="dish-photo" data-id="${d.id}">📷 ${d.userPhoto ? 'Change my photo' : d.photo ? 'Use my own photo' : 'Add a photo'}</button>${d.userPhoto ? `<button class="btn sm ghost" data-act="dish-photo-rm" data-id="${d.id}">↺ Reset</button>` : ''}</div>`}
        </figure>
        <div class="dish-title">
          <div class="card-kicker">${DD.vmark(d)}${esc(L.course[d.course])} · ${d.area ? esc(d.area) + ', ' : ''}${esc(d.country)}${d.styles.length ? ' · ' + d.styles.map((s) => esc((L.styles[s] || s).replace(/^\S+ /, ''))).join(', ') : ''}</div>
          <h1>${esc(d.name)}</h1>
          ${d.local && d.local.toLowerCase() !== d.name.toLowerCase() ? `<p class="local">${esc(d.local)}</p>` : ''}
          <p class="lead">${esc(d.desc)}</p>
          <div class="meta-grid">
            <div class="meta"><small>Prep</small><b>${fmtMin(d.prep)}</b></div>
            <div class="meta"><small>Cook</small><b>${fmtMin(d.cook)}</b></div>
            ${d.rest ? `<div class="meta"><small>Rest / wait</small><b>${fmtMin(d.rest)}</b></div>` : ''}
            <div class="meta"><small>Total</small><b>${fmtMin(d.total)}</b></div>
            <div class="meta"><small>Level</small><b>${L.level[d.level]}</b></div>
            <div class="meta"><small>Heat</small><b>${d.spice ? heat(Math.ceil(d.spice / 2)) : 'None'}</b></div>
          </div>
          <div class="dish-actions">
            <a class="btn primary lg" href="#/cook/${d.id}">👩‍🍳 Start cook mode</a>
            <button class="btn ${fav ? 'on' : ''}" data-act="fav" data-id="${d.id}" data-label>${fav ? '♥ Saved' : '♡ Save'}</button>
            <button class="btn" data-act="plan" data-id="${d.id}">📅 Plan</button>
            <button class="btn" data-do="shop">🛒 Add to list</button>
            <button class="btn ${c ? 'on' : ''}" data-act="cooked" data-id="${d.id}">${c ? '✓ Cooked ×' + c.n : '✓ I cooked this'}</button>
            ${d.mine ? `<a class="btn" href="#/edit/${d.id}">✏️ Edit</a><button class="btn danger" data-act="delete-mine" data-id="${d.id}">🗑️ Delete</button>` : ''}
            <button class="btn" data-do="print" title="Print recipe">🖨️</button>
            <button class="btn" data-do="share" title="Share">🔗</button>
          </div>
        </div>
      </section>

      <div class="dish-body">
        <aside class="ing-panel panel" aria-label="Ingredients">
          <h2 style="font-size:1.4rem">Ingredients</h2>
          <div class="ing-tools">
            <div class="stepper" role="group" aria-label="Servings"><button data-do="serv" data-v="-1" aria-label="Fewer servings">−</button><output id="servOut">${serv} ${serv === 1 ? 'serving' : 'servings'}</output><button data-do="serv" data-v="1" aria-label="More servings">+</button></div>
            <div class="seg"><button data-act="set-units" data-v="metric" class="${S.prefs.units === 'metric' ? 'on' : ''}">Metric</button><button data-act="set-units" data-v="us" class="${S.prefs.units === 'us' ? 'on' : ''}">US</button></div>
          </div>
          <div id="ingList">${ingHTML(d, serv / d.serves)}</div>
          <p class="small muted" style="margin-top:12px">Tick items off as you gather them. This is your <button class="tech" data-act="tech" data-id="mise-en-place">mise en place</button>.</p>
          ${d.equip && d.equip.length ? `<div class="equip"><b>🍳 Equipment</b><ul>${d.equip.map((e) => `<li>${esc(e)}</li>`).join('')}</ul></div>` : ''}
        </aside>

        <article>
          <div class="section-title"><h2>Flavor profile</h2><span class="line"></span></div>
          <div class="taste-bars">${tasteBars}</div>
          <div class="chips" style="margin-top:16px">${dietTags} ${sitTags}</div>

          <div class="section-title"><h2>The story</h2><span class="line"></span></div>
          <div class="story"><p>${esc(d.story)}</p></div>

          ${d.techs.length ? `<div class="callout info"><b>Skills you'll practice</b>${d.techs.filter((t) => DD.tech[t]).map((t) => `<button class="tech" data-act="tech" data-id="${t}">${DD.tech[t].icon} ${esc(DD.tech[t].name)}</button>`).join(' ')}</div>` : ''}

          <div class="section-title"><h2>Method</h2><span class="line"></span><span class="small muted">Tap a number to mark a step done</span></div>
          <ol class="steps">${d.steps.map(([t, txt, tm, tip], i) => `
            <li class="step" id="step-${i + 1}">
              <button class="step-n" data-do="step" aria-label="Mark step ${i + 1} done"><span>${i + 1}</span></button>
              <div><h4>${esc(t)}</h4><p>${rich(txt)}</p>
                ${tm ? `<button class="timer-btn" data-act="timer" data-min="${tm}" data-label="${esc(d.name + ': ' + t)}">⏲ Start ${fmtMin(tm)} timer</button>` : ''}
                ${tip ? `<div class="callout tip"><b>Pro tip</b>${rich(tip)}</div>` : ''}
              </div>
            </li>`).join('')}</ol>

          <div class="section-title"><h2>Cook like a pro</h2><span class="line"></span></div>
          <div class="pro-grid">
            ${d.tips && d.tips.length ? `<div class="pro-card tips"><h3>💡 Chef's secrets</h3><ul>${d.tips.map((x) => `<li>${rich(x)}</li>`).join('')}</ul></div>` : ''}
            ${d.mistakes && d.mistakes.length ? `<div class="pro-card mist"><h3>⚠️ Common mistakes</h3><ul>${d.mistakes.map((x) => `<li>${rich(x)}</li>`).join('')}</ul></div>` : ''}
            ${d.vars && d.vars.length ? `<div class="pro-card vars"><h3>🔀 Variations & swaps</h3><ul>${d.vars.map((x) => `<li>${rich(x)}</li>`).join('')}</ul></div>` : ''}
            ${d.serve ? `<div class="pro-card serve"><h3>🍽️ Serve it with</h3><p style="margin:0;font-size:.92rem;color:var(--ink-2)">${rich(d.serve)}</p>${d.store ? `<p style="margin:10px 0 0;font-size:.88rem;color:var(--ink-3)"><b>Storage:</b> ${esc(d.store)}</p>` : ''}</div>` : ''}
          </div>
          ${c && (c.notes || c.rating) ? `<div class="my-notes"><b>📝 Your notes</b> ${c.rating ? '<span style="color:var(--gold)">' + '★'.repeat(c.rating) + '</span>' : ''}<p style="margin:6px 0 0">${esc(c.notes || '')}</p></div>` : ''}

          <div class="similar">
            <div class="section-title"><h2>You might also love</h2><span class="line"></span></div>
            <div class="grid">${cards(similar(d))}</div>
          </div>
        </article>
      </div>`,
      mount(root) {
        root.addEventListener('click', (e) => {
          const b = e.target.closest('[data-do]');
          if (!b) return;
          const act = b.dataset.do;
          if (act === 'serv') {
            const cur = S.servings[d.id] || d.serves;
            const nx = Math.max(1, Math.min(60, cur + +b.dataset.v));
            S.servings[d.id] = nx;
            root.querySelector('#servOut').textContent = nx + (nx === 1 ? ' serving' : ' servings');
            root.querySelector('#ingList').innerHTML = ingHTML(d, nx / d.serves);
          } else if (act === 'step') {
            b.closest('.step').classList.toggle('done');
          } else if (act === 'shop') {
            const n = U.addToShop(d, S.scaleFor(d));
            toast(`🛒 Added ${n} items for ${S.servings[d.id] || d.serves} servings`, { href: '#/shopping', label: 'View list' });
          } else if (act === 'print') {
            window.print();
          } else if (act === 'share') {
            const url = location.href;
            if (navigator.share) navigator.share({ title: d.name, text: d.desc, url }).catch(() => {});
            else if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => toast('🔗 Link copied'));
          }
        });
      },
    };
  };

  /* ---------------- PANTRY: what can I cook? ---------------- */
  const SYN = [['scallion', 'spring onion', 'green onion'], ['cilantro', 'coriander leaves', 'fresh coriander'], ['eggplant', 'aubergine'], ['zucchini', 'courgette'],
    ['bell pepper', 'capsicum', 'sweet pepper', 'red pepper', 'green pepper'], ['chickpea', 'garbanzo'], ['shrimp', 'prawn'], ['ground beef', 'minced beef', 'beef mince'],
    ['chili', 'chilli', 'chile'], ['yogurt', 'yoghurt'], ['cornstarch', 'cornflour'], ['all-purpose flour', 'plain flour', 'flour'], ['heavy cream', 'double cream', 'cream'],
    ['stock', 'broth'], ['ground pork', 'pork mince', 'minced pork'], ['ground lamb', 'lamb mince', 'minced lamb'], ['noodle', 'noodles'], ['potato', 'potatoes'], ['tomato', 'tomatoes']];
  const STAPLE = /^(fine |sea |kosher |flaky )?salt\b|black pepper|^water|ice water|^(neutral|vegetable|olive|extra-virgin olive|sunflower|canola) oil|^(white |granulated )?sugar$/i;
  function termREs(term) {
    const t = term.toLowerCase().trim().replace(/s$/, '');
    const set = new Set([t]);
    SYN.forEach((g) => { if (g.some((x) => x.replace(/s$/, '') === t)) g.forEach((x) => set.add(x.replace(/s$/, ''))); });
    return [...set].map((x) => new RegExp('\\b' + U.escRe(x) + '(e?s)?\\b', 'i'));
  }
  /* Kitchen essentials: things almost every kitchen always has. Editable, saved in prefs. */
  V.DEFAULT_ESSENTIALS = ['salt', 'black pepper', 'oil', 'ghee', 'butter', 'sugar', 'water', 'onion', 'tomato', 'garlic', 'ginger', 'ginger-garlic paste',
    'green chili', 'chili powder', 'chili flakes', 'dried red chili', 'turmeric', 'cumin', 'ground coriander', 'garam masala', 'mustard seeds', 'asafoetida', 'curry leaves', 'bay leaf', 'lemon'];
  const ESSENTIAL_IDEAS = ['soy sauce', 'vinegar', 'honey', 'jaggery', 'milk', 'yogurt', 'besan', 'rice', 'atta', 'all-purpose flour', 'cornstarch', 'baking soda', 'baking powder',
    'mustard oil', 'coconut oil', 'sesame oil', 'olive oil', 'kasuri methi', 'amchur', 'chaat masala', 'black salt', 'cardamom', 'cloves', 'cinnamon', 'cilantro', 'mint', 'tamarind', 'ketchup', 'dried oregano'];
  const essentials = () => (Array.isArray(S.prefs.essentials) ? S.prefs.essentials : V.DEFAULT_ESSENTIALS);
  const isEssential = (name, res) => /^(ice )?water\b/i.test(name) || res.some((rs) => rs.some((r) => r.test(name)));

  V.matchPantry = function (have, useEssentials) {
    const res = have.map(termREs);
    const ess = useEssentials ? essentials().map(termREs) : [];
    return DD.pool().map((d) => {
      const all = d.items.filter((i) => !(i[3] && /optional|to serve|garnish/i.test(i[3])));
      const req = all.filter((i) => !(useEssentials && isEssential(i[2], ess)));
      const got = [], miss = [];
      req.forEach((i) => (res.some((rs) => rs.some((r) => r.test(i[2]))) ? got : miss).push(i[2]));
      return { d, got, miss, ess: all.length - req.length, pct: req.length ? Math.round((got.length / req.length) * 100) : 0 };
    }).filter((m) => m.got.length).sort((a, b) => b.pct - a.pct || a.miss.length - b.miss.length);
  };

  V.pantry = function () {
    const all = new Map();
    DD.dishes.forEach((d) => d.items.forEach((i) => { const n = U.normName(i[2]); if (n.length < 28 && !STAPLE.test(n)) all.set(n, (all.get(n) || 0) + 1); }));
    const suggestions = [...all.entries()].sort((a, b) => b[1] - a[1]).map((x) => x[0]);
    const QUICK = ['paneer', 'potatoes', 'cauliflower', 'spinach', 'green peas', 'chickpeas', 'kidney beans', 'lentils', 'urad dal', 'toor dal', 'rice', 'atta', 'yogurt', 'milk', 'cheese', 'tofu',
      'mushrooms', 'bell pepper', 'carrots', 'cabbage', 'eggplant', 'okra', 'coconut', 'coconut milk', 'besan', 'semolina', 'poha', 'noodles', 'pasta', 'bread', 'eggs', 'chicken', 'prawns', 'fish', 'mutton'];

    return {
      title: 'What can I cook?',
      html: `
      <div class="page-head"><p class="eyebrow">Fridge raid</p><h1>What can I cook right now?</h1>
        <p class="lead">Add what's in your fridge and pantry. We'll rank every dish by how much you already have and tell you exactly what's missing.</p></div>
      <div class="two-col pantry-cols">
        <div class="panel pantry-box">
          <form class="pantry-input" data-do="add-form">
            <input class="input" id="pin" list="pantry-sug" placeholder="Type an ingredient…" autocomplete="off" aria-label="Add ingredient">
            <button class="btn primary">Add</button>
          </form>
          <datalist id="pantry-sug">${suggestions.map((s) => `<option value="${esc(s)}">`).join('')}</datalist>
          <div><div class="small muted" style="margin-bottom:6px">I have:</div><div class="chips have-chips" id="have"></div></div>
          <div class="ess-box">
            <label class="switch"><input type="checkbox" id="staples" ${S.prefs.staples ? 'checked' : ''}> <b>Always count my kitchen essentials</b></label>
            <details id="essDetails">
              <summary>🧂 My essentials <span class="badge" id="essCount"></span> <span class="small muted">· tap to edit</span></summary>
              <p class="small muted" style="margin:8px 0">These are always treated as “I have it”, so you never need to add them. Tap ✕ to remove one.</p>
              <div class="chips" id="essChips"></div>
              <form data-do="ess-form" style="display:flex;gap:6px;margin-top:10px"><input class="input" id="essIn" list="pantry-sug" placeholder="Add an essential, e.g. soy sauce" style="padding:8px 12px" aria-label="Add an essential"><button class="btn sm">Add</button></form>
              <div class="small muted" style="margin:10px 0 6px">Ideas:</div><div class="chips" id="essIdeas"></div>
              <button class="btn sm ghost" data-do="ess-reset" style="margin-top:10px">Reset to default essentials</button>
            </details>
          </div>
          <div><div class="small muted" style="margin-bottom:6px">Quick add:</div><div class="chips quick-chips" id="quick"></div></div>
          <button class="btn sm ghost danger" data-do="clear" style="justify-self:start">Clear everything</button>
        </div>
        <div id="matches"></div>
      </div>`,
      mount(root) {
        const $ = (s) => root.querySelector(s);
        function render() {
          $('#have').innerHTML = S.pantry.length ? S.pantry.map((p) => `<button class="chip x" data-do="rm" data-v="${esc(p)}">${esc(p)}</button>`).join('') : '<span class="small muted">Nothing yet. Add a few things!</span>';
          $('#quick').innerHTML = QUICK.filter((q) => !S.pantry.includes(q)).map((q) => `<button class="chip" data-do="add" data-v="${q}">+ ${q}</button>`).join('');
          const es = essentials();
          $('#essCount').textContent = es.length;
          $('#essChips').innerHTML = es.map((x) => `<button class="chip x ess" data-do="ess-rm" data-v="${esc(x)}">${esc(x)}</button>`).join('') || '<span class="small muted">No essentials. Everything must be added manually.</span>';
          $('#essIdeas').innerHTML = ESSENTIAL_IDEAS.filter((x) => !es.includes(x)).map((x) => `<button class="chip" data-do="ess-add" data-v="${esc(x)}">+ ${esc(x)}</button>`).join('');
          $('#essDetails').style.opacity = S.prefs.staples ? 1 : 0.5;
          const out = $('#matches');
          if (!S.pantry.length) {
            out.innerHTML = `<div class="empty"><div class="big">🧺</div><h3>Your basket is empty</h3><p>Add at least one ingredient, like <b>paneer</b>, <b>potatoes</b> or <b>rice</b>.</p></div>`;
            return;
          }
          const m = V.matchPantry(S.pantry, S.prefs.staples);
          const ready = m.filter((x) => x.pct === 100).length;
          out.innerHTML = `<div class="results-bar"><div class="count">${m.length} dishes use your ingredients <span>· ${ready} you can cook right now</span></div></div>` +
            (m.length ? m.slice(0, 60).map(({ d, got, miss, pct, ess }) => `
            <div class="match" style="--h:${d.hue}">
              <a class="art" href="#/dish/${d.id}" aria-hidden="true" tabindex="-1">${d.emoji}</a>
              <div>
                <h3><a href="#/dish/${d.id}" style="text-decoration:none">${esc(d.name)}</a> <span class="small muted">${d.flag} ${fmtMin(d.total)}</span></h3>
                <div class="have">✓ ${esc(got.map(U.normName).join(', '))}${ess ? ` <span class="muted">+ ${ess} essentials 🧂</span>` : ''}</div>
                ${miss.length ? `<div class="miss">Missing ${miss.length}: <b>${esc(miss.slice(0, 6).map(U.normName).join(', '))}${miss.length > 6 ? '…' : ''}</b>
                  <button class="btn sm ghost" style="padding:2px 8px;margin-left:4px" data-do="shop-miss" data-id="${d.id}">+ list</button></div>` : '<div class="have"><b>🎉 You have everything!</b></div>'}
              </div>
              <div class="pct" style="--p:${pct};--c:${pct === 100 ? 'var(--green)' : pct >= 60 ? 'var(--gold)' : 'var(--accent)'}"><span>${pct}%</span></div>
            </div>`).join('') : `<div class="empty"><div class="big">🤔</div><h3>No matches yet</h3><p>Try more common ingredients like onion or garlic.</p></div>`);
        }
        const add = (v) => {
          v.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean).forEach((x) => { if (!S.pantry.includes(x)) S.pantry.push(x); });
          S.save('pantry'); render();
        };
        render();
        $('[data-do="add-form"]').addEventListener('submit', (e) => { e.preventDefault(); add($('#pin').value); $('#pin').value = ''; $('#pin').focus(); });
        $('#staples').addEventListener('change', (e) => { S.prefs.staples = e.target.checked; S.save('prefs'); render(); });
        $('[data-do="ess-form"]').addEventListener('submit', (e) => {
          e.preventDefault();
          const vals = $('#essIn').value.split(',').map((s) => s.trim().toLowerCase()).filter(Boolean);
          if (vals.length) { S.prefs.essentials = [...new Set([...essentials(), ...vals])]; S.save('prefs'); render(); }
          $('#essIn').value = '';
        });
        root.addEventListener('click', (e) => {
          const b = e.target.closest('[data-do]');
          if (!b) return;
          const { do: act, v } = b.dataset;
          const setEss = (list) => { S.prefs.essentials = list; S.save('prefs'); render(); };
          if (act === 'ess-rm') return setEss(essentials().filter((x) => x !== v));
          if (act === 'ess-add') return setEss([...essentials(), v]);
          if (act === 'ess-reset') { delete S.prefs.essentials; S.save('prefs'); return render(); }
          if (act === 'add') add(v);
          else if (act === 'rm') { S.pantry = S.pantry.filter((x) => x !== v); S.save('pantry'); render(); }
          else if (act === 'clear') { S.pantry = []; S.save('pantry'); render(); }
          else if (act === 'shop-miss') {
            e.preventDefault();
            const d = DD.byId[b.dataset.id];
            const m = V.matchPantry(S.pantry, S.prefs.staples).find((x) => x.d.id === d.id);
            const missSet = new Set(m ? m.miss : []);
            const n = U.addToShop(d, 1, (it) => missSet.has(it[2]));
            toast(`🛒 Added ${n} missing items`, { href: '#/shopping', label: 'View list' });
          }
        });
      },
    };
  };

  /* ---------------- modals used globally ---------------- */
  V.planModal = function (id) {
    const d = DD.byId[id];
    const html = `<h2>Add ${esc(d.name)} to your week</h2><p class="muted">Pick a day and meal. Tapping a filled slot replaces it.</p>
      <div class="plan-pick"><span></span>${MEALS.map((m) => `<span class="h">${m}</span>`).join('')}
      ${DAYS.map((day, i) => `<span class="d">${day}</span>${MEALS.map((m) => { const cur = DD.byId[S.plan[i + '|' + m]]; return `<button class="${cur ? 'filled' : ''}" data-slot="${i}|${m}">${cur ? cur.emoji + ' ' + esc(cur.name) : '+'}</button>`; }).join('')}`).join('')}
      </div>`;
    openModal(html, {
      label: 'Plan', mount(m) {
        m.addEventListener('click', (e) => {
          const b = e.target.closest('[data-slot]');
          if (!b) return;
          S.plan[b.dataset.slot] = id; S.save('plan'); closeModal();
          const [day, meal] = b.dataset.slot.split('|');
          toast(`📅 ${d.name} → ${DAYS[day]} ${meal}`, { href: '#/planner', label: 'Open planner' });
        });
      },
    });
  };

  V.cookedModal = function (id) {
    const d = DD.byId[id];
    const prev = S.cooked[id] || {};
    let rating = prev.rating || 0;
    const html = `<div style="font-size:3rem">${d.flag}</div><h2>You cooked ${esc(d.name)}!</h2>
      <p class="muted">${prev.n ? `This will be time #${prev.n + 1}.` : `This earns you a passport stamp for <b>${esc(d.country)}</b>.`} How did it turn out?</p>
      <div class="stars" role="radiogroup" aria-label="Rating">${[1, 2, 3, 4, 5].map((i) => `<button data-star="${i}" class="${i <= rating ? 'on' : ''}" aria-label="${i} stars">★</button>`).join('')}</div>
      <label class="small muted" for="cnotes" style="display:block;margin:16px 0 6px">Notes for next time (what you changed, what to fix)</label>
      <textarea class="input" id="cnotes" placeholder="e.g. Used 2 chilies instead of 4, needed 5 more minutes…">${esc(prev.notes || '')}</textarea>
      <div class="btn-row" style="margin-top:16px"><button class="btn primary" data-save>Save to my kitchen</button>${prev.n ? '<button class="btn ghost danger" data-del>Remove record</button>' : ''}</div>`;
    openModal(html, {
      label: 'Cooked', mount(m) {
        m.addEventListener('click', (e) => {
          const s = e.target.closest('[data-star]');
          if (s) { rating = +s.dataset.star; m.querySelectorAll('[data-star]').forEach((x) => x.classList.toggle('on', +x.dataset.star <= rating)); }
          if (e.target.closest('[data-save]')) {
            const first = !Object.keys(S.cooked).some((k) => DD.byId[k] && DD.byId[k].country === d.country);
            S.cooked[id] = { n: (prev.n || 0) + 1, rating, notes: m.querySelector('#cnotes').value.trim(), last: Date.now() };
            S.save('cooked'); closeModal();
            toast(first ? `🛂 New passport stamp: ${d.flag} ${d.country}!` : '✅ Saved to your kitchen', { href: '#/me', label: 'My kitchen' });
            if (!location.hash.startsWith("#/cook")) App.refresh();
          }
          if (e.target.closest('[data-del]')) { delete S.cooked[id]; S.save('cooked'); closeModal(); if (!location.hash.startsWith("#/cook")) App.refresh(); }
        });
      },
    });
  };

  /* ---------------- PLANNER ---------------- */
  V.planner = function () {
    const todayI = (new Date().getDay() + 6) % 7;
    function weekHTML() {
      return DAYS.map((day, i) => `<div class="day ${i === todayI ? 'today' : ''}"><h3>${day}${i === todayI ? '<span style="color:var(--accent)">Today</span>' : ''}</h3>
        ${MEALS.map((m) => {
          const d = DD.byId[S.plan[i + '|' + m]];
          return d ? `<div class="slot filled" style="--h:${d.hue}"><span class="ml">${m}</span><a href="#/dish/${d.id}">${d.emoji} ${esc(d.name)}</a><span class="muted">${d.flag} ${fmtMin(d.total)}</span><button class="rm" data-do="rm" data-slot="${i}|${m}" aria-label="Remove">✕</button></div>`
            : `<button class="slot empty-slot" data-do="pick" data-slot="${i}|${m}"><span class="ml">${m}</span>+ Add dish</button>`;
        }).join('')}</div>`).join('');
    }
    const planned = () => Object.values(S.plan).map((id) => DD.byId[id]).filter(Boolean);
    return {
      title: 'Meal planner',
      html: `<div class="page-head"><p class="eyebrow">Plan</p><h1>Your week of food</h1>
        <p class="lead">Plan meals across the globe, then turn the whole week into one smart shopping list.</p></div>
        <div class="btn-row" style="margin-bottom:18px">
          <button class="btn primary" data-do="shop-all">🛒 Build shopping list from plan</button>
          <button class="btn" data-do="auto">✨ Auto-fill empty dinners</button>
          <button class="btn ghost danger" data-do="clear">Clear week</button>
        </div>
        <div class="week" id="week">${weekHTML()}</div>
        <p class="small muted" style="margin-top:14px" id="planSummary"></p>`,
      mount(root) {
        const rerender = () => {
          root.querySelector('#week').innerHTML = weekHTML();
          const p = planned();
          const regions = new Set(p.map((d) => d.country));
          root.querySelector('#planSummary').textContent = p.length ? `${p.length} meals planned across ${regions.size} ${regions.size === 1 ? 'country' : 'countries'} · about ${fmtMin(p.reduce((s, d) => s + d.prep + d.cook, 0))} of hands-on and cooking time.` : 'Tip: open any recipe and tap 📅 Plan, or use the + buttons above.';
        };
        rerender();
        root.addEventListener('click', (e) => {
          const b = e.target.closest('[data-do]');
          if (!b) return;
          const act = b.dataset.do;
          if (act === 'rm') { delete S.plan[b.dataset.slot]; S.save('plan'); rerender(); }
          else if (act === 'pick') pickModal(b.dataset.slot, rerender);
          else if (act === 'clear') { if (confirm('Clear every meal from this week?')) { S.plan = {}; S.save('plan'); rerender(); } }
          else if (act === 'auto') {
            const used = new Set(Object.values(S.plan));
            const pool = DD.pool().filter((d) => ['main', 'soup'].includes(d.course) && !used.has(d.id)).sort(() => Math.random() - 0.5);
            const regionsUsed = new Set();
            let n = 0;
            for (let i = 0; i < 7; i++) {
              const k = i + '|dinner';
              if (S.plan[k]) continue;
              const weekend = i >= 5;
              const pickD = pool.find((d) => !regionsUsed.has(d.region) && (weekend ? true : d.total <= 60)) || pool[0];
              if (!pickD) break;
              pool.splice(pool.indexOf(pickD), 1); regionsUsed.add(pickD.region);
              S.plan[k] = pickD.id; n++;
            }
            S.save('plan'); rerender();
            toast(n ? `✨ Added ${n} dinners from ${n} different regions` : 'All dinners are already planned');
          } else if (act === 'shop-all') {
            const p = planned();
            if (!p.length) return toast('Plan a few meals first');
            let n = 0; p.forEach((d) => { n += U.addToShop(d, 1); });
            toast(`🛒 Added ingredients for ${p.length} meals`, { href: '#/shopping', label: 'View list' });
          }
        });
      },
    };
  };

  function pickModal(slot, done) {
    const [day, meal] = slot.split('|');
    const pref = meal === 'breakfast' ? ['breakfast'] : meal === 'lunch' ? ['salad', 'soup', 'snack', 'main'] : ['main', 'soup'];
    const listHTML = (q) => {
      const ql = q.toLowerCase();
      return DD.pool().filter((d) => !ql || d.search.includes(ql))
        .sort((a, b) => (pref.includes(b.course) - pref.includes(a.course)) || a.name.localeCompare(b.name))
        .slice(0, 50).map((d) => `<button class="pick-item" data-id="${d.id}"><span class="e">${d.emoji}</span><span><b>${esc(d.name)}</b><small>${d.flag} ${esc(d.country)} · ${fmtMin(d.total)} · ${L.level[d.level]}</small></span></button>`).join('');
    };
    openModal(`<h2>${DAYS[day]} · ${meal}</h2><input class="input" placeholder="Search dishes…" data-q autofocus><div class="pick-list">${listHTML('')}</div>`, {
      label: 'Pick a dish', mount(m) {
        m.querySelector('[data-q]').addEventListener('input', (e) => { m.querySelector('.pick-list').innerHTML = listHTML(e.target.value); });
        m.addEventListener('click', (e) => { const b = e.target.closest('[data-id]'); if (b) { S.plan[slot] = b.dataset.id; S.save('plan'); closeModal(); done(); } });
      },
    });
  }

  /* ---------------- SHOPPING ---------------- */
  V.shopping = function () {
    function listHTML() {
      if (!S.shop.length) return `<div class="empty"><div class="big">🛒</div><h3>Your list is empty</h3><p>Add ingredients from any recipe, your meal plan, or the fridge matcher.</p><a class="btn" href="#/explore">Find a recipe</a></div>`;
      const cats = {};
      S.shop.forEach((it, i) => { (cats[it.cat] = cats[it.cat] || []).push([it, i]); });
      const order = ['🥬 Produce', '🥩 Meat & seafood', '🧀 Dairy & eggs', '🌾 Grains, bread & noodles', '🫙 Pantry, sauces & cans', '🧂 Spices & seasonings', '📝 Other'];
      return Object.keys(cats).sort((a, b) => order.indexOf(a) - order.indexOf(b)).map((c) => `
        <div class="shop-cat"><h3>${c} <span class="muted small">(${cats[c].length})</span></h3>
        ${cats[c].sort((a, b) => a[0].done - b[0].done || a[0].name.localeCompare(b[0].name)).map(([it, i]) => `
          <label class="shop-item ${it.done ? 'done' : ''}"><input type="checkbox" data-i="${i}" ${it.done ? 'checked' : ''}>
            <span class="nm">${esc(it.name)}<small>${it.from.map((id) => DD.byId[id] ? DD.byId[id].emoji + ' ' + esc(DD.byId[id].name) : 'Added by you').join(', ')}</small></span>
            <span class="q">${it.qty != null ? esc(U.qtyStr(it.qty, it.unit, 1)) : ''}</span>
            <button class="rm" data-rm="${i}" aria-label="Remove ${esc(it.name)}">✕</button></label>`).join('')}</div>`).join('');
    }
    const asText = () => S.shop.filter((x) => !x.done).map((x) => `☐ ${x.qty != null ? U.qtyStr(x.qty, x.unit, 1) + ' ' : ''}${x.name}`).join('\n');
    return {
      title: 'Shopping list',
      html: `<div class="page-head"><p class="eyebrow">Shop</p><h1>Shopping list</h1><p class="lead">Grouped by aisle. Quantities from different recipes are merged automatically.</p></div>
      <div class="shop-layout"><div id="shopList"></div>
        <aside class="panel" style="position:sticky;top:calc(var(--top-h) + 16px)">
          <form data-do="add-form" style="display:flex;gap:8px;margin-bottom:14px"><input class="input" name="item" placeholder="Add an item…" aria-label="Add item"><button class="btn primary">Add</button></form>
          <div style="display:grid;gap:8px">
            <button class="btn" data-do="copy">📋 Copy as text</button>
            <button class="btn" data-do="share">📤 Share list</button>
            <button class="btn" data-do="clear-done">🧹 Remove checked</button>
            <button class="btn ghost danger" data-do="clear">Clear entire list</button>
          </div>
          <p class="small muted" style="margin:14px 0 0">Units follow your metric / US setting (top right).</p>
        </aside></div>`,
      mount(root) {
        const render = () => { root.querySelector('#shopList').innerHTML = listHTML(); };
        render();
        root.addEventListener('change', (e) => { if (e.target.dataset.i != null) { const it = S.shop[+e.target.dataset.i]; it.done = e.target.checked; S.save('shop'); render(); } });
        root.addEventListener('click', (e) => {
          const rm = e.target.closest('[data-rm]');
          if (rm) { e.preventDefault(); S.shop.splice(+rm.dataset.rm, 1); S.save('shop'); render(); return; }
          const b = e.target.closest('[data-do]');
          if (!b) return;
          const act = b.dataset.do;
          if (act === 'clear-done') { S.shop = S.shop.filter((x) => !x.done); S.save('shop'); render(); }
          else if (act === 'clear') { if (confirm('Clear the whole shopping list?')) { S.shop = []; S.save('shop'); render(); } }
          else if (act === 'copy') { navigator.clipboard && navigator.clipboard.writeText(asText()).then(() => toast('📋 Copied to clipboard')); }
          else if (act === 'share') { if (navigator.share) navigator.share({ title: 'Shopping list', text: asText() }).catch(() => {}); else navigator.clipboard && navigator.clipboard.writeText(asText()).then(() => toast('📋 Copied. Paste it anywhere')); }
        });
        root.querySelector('[data-do="add-form"]').addEventListener('submit', (e) => {
          e.preventDefault();
          const v = e.target.item.value.trim();
          if (!v) return;
          S.shop.push({ key: 'custom|' + Date.now(), name: v, qty: null, unit: '', from: [], done: false, cat: U.category(v) });
          S.save('shop'); e.target.reset(); render();
        });
      },
    };
  };

  /* ---------------- ME: my kitchen ---------------- */
  V.me = function () {
    const cookedIds = Object.keys(S.cooked).filter((id) => DD.byId[id]);
    const stamped = new Set(cookedIds.map((id) => DD.byId[id].country));
    const allC = countries();
    const techs = new Set(); cookedIds.forEach((id) => DD.byId[id].techs.forEach((t) => techs.add(t)));
    const regionsDone = new Set(cookedIds.map((id) => DD.byId[id].region));
    const favs = S.favs.map((id) => DD.byId[id]).filter(Boolean);
    const hist = cookedIds.map((id) => [DD.byId[id], S.cooked[id]]).sort((a, b) => b[1].last - a[1].last);
    const rank = cookedIds.length >= 40 ? ['🏆', 'Master Chef'] : cookedIds.length >= 20 ? ['🥇', 'Head Chef'] : cookedIds.length >= 10 ? ['🥈', 'Sous Chef'] : cookedIds.length >= 4 ? ['🥉', 'Line Cook'] : ['🔪', 'Kitchen Apprentice'];
    const bar = (n, of) => `<div class="bar"><div style="width:${Math.round((n / of) * 100)}%"></div></div>`;
    return {
      title: 'My kitchen',
      html: `<div class="page-head"><p class="eyebrow">My kitchen</p><h1>${rank[0]} ${rank[1]}</h1><p class="lead">Your cooking journey: stamps, skills, saved recipes and notes. Everything is stored privately on this device.</p></div>
      <div class="me-stats">
        <div class="me-stat"><b>${cookedIds.length}</b><span>dishes cooked of ${DD.dishes.length}</span>${bar(cookedIds.length, DD.dishes.length)}</div>
        <div class="me-stat"><b>${stamped.size}</b><span>passport stamps of ${allC.length}</span>${bar(stamped.size, allC.length)}</div>
        <div class="me-stat"><b>${techs.size}</b><span>techniques practiced of ${DD.techList.length}</span>${bar(techs.size, DD.techList.length)}</div>
        <div class="me-stat"><b>${regionsDone.size}</b><span>regions explored of ${Object.keys(DD.REGIONS).length}</span>${bar(regionsDone.size, Object.keys(DD.REGIONS).length)}</div>
        <div class="me-stat"><b>${S.lessons.length}</b><span>lessons completed of ${DD.lessons.length}</span>${bar(S.lessons.length, DD.lessons.length)}</div>
      </div>

      <div class="section-title"><h2>🛂 Culinary passport</h2><span class="line"></span></div>
      <div class="passport">${allC.map((c) => `<a class="stamp ${stamped.has(c.name) ? 'on' : ''}" href="#/explore?country=${encodeURIComponent(c.name)}"><span class="f">${c.flag}</span>${esc(c.name)}</a>`).join('')}</div>

      <div class="section-title"><h2>👩‍🍳 My own recipes</h2><span class="line"></span><a class="btn sm primary" href="#/add">➕ Add recipe</a></div>
      ${(() => { const mine = DD.dishes.filter((d) => d.mine); return mine.length ? `<div class="grid">${cards(mine)}</div>` : '<div class="empty"><div class="big">📝</div><h3>Add your first recipe</h3><p>Family recipes, your own creations, anything. They get scaling, unit conversion, cook mode and timers too.</p><a class="btn primary" href="#/add">➕ Add a recipe</a></div>'; })()}

      <div class="section-title"><h2>♥ Saved recipes</h2><span class="line"></span></div>
      ${favs.length ? `<div class="grid">${cards(favs)}</div>` : '<div class="empty"><div class="big">♡</div><p>Tap the heart on any dish to save it here.</p></div>'}

      <div class="section-title"><h2>📖 Cooking history</h2><span class="line"></span></div>
      ${hist.length ? `<div class="history">${hist.map(([d, c]) => `<a class="hist" href="#/dish/${d.id}"><span class="e">${d.emoji}</span><span class="info"><b>${esc(d.name)}</b><small>${d.flag} ${esc(d.country)} · cooked ${c.n}× · last ${new Date(c.last).toLocaleDateString()}${c.notes ? ' · “' + esc(c.notes.slice(0, 60)) + (c.notes.length > 60 ? '…' : '') + '”' : ''}</small></span><span class="st">${'★'.repeat(c.rating || 0)}</span></a>`).join('')}</div>` : '<div class="empty"><div class="big">📖</div><p>When you cook a dish, tap <b>“I cooked this”</b> to log it with a rating and notes.</p></div>'}

      <div class="section-title"><h2>⚙️ Settings & data</h2><span class="line"></span></div>
      <div class="panel" style="max-width:640px">
        <div class="kv"><span>Units</span><div class="seg"><button data-act="set-units" data-v="metric" class="${S.prefs.units === 'metric' ? 'on' : ''}">Metric (g, ml, °C)</button><button data-act="set-units" data-v="us" class="${S.prefs.units === 'us' ? 'on' : ''}">US (oz, cups, °F)</button></div></div>
        <div class="kv"><span>${DD.vmark({ vclass: 'veg' })} Pure veg mode<br><small class="muted">Hide non-veg dishes everywhere</small></span><label class="switch"><input type="checkbox" data-pref="veg" ${S.prefs.veg ? 'checked' : ''}></label></div>
        <div class="kv"><span>${DD.vmark({ vclass: 'egg' })} Count eggs as veg<br><small class="muted">Show egg dishes in veg mode (eggetarian)</small></span><label class="switch"><input type="checkbox" data-pref="eggVeg" ${S.prefs.eggVeg ? 'checked' : ''}></label></div>
        <div class="kv"><span>Theme</span><div class="seg">${['auto', 'light', 'dark'].map((t) => `<button data-act="set-theme" data-v="${t}" class="${S.prefs.theme === t ? 'on' : ''}">${t[0].toUpperCase() + t.slice(1)}</button>`).join('')}</div></div>
        <div class="kv"><span>📱 Offline copy<br><small class="muted" data-offline>Checking…</small></span></div>
        <div class="kv"><span>Backup<br><small class="muted">Move your recipes, photos & history between PC and phone</small></span><div class="btn-row"><button class="btn sm" data-do="export">⬇️ Export</button><label class="btn sm">⬆️ Import<input type="file" accept="application/json,.json" data-do="import" hidden></label></div></div>
        <div class="kv" style="border:0"><span>Reset</span><button class="btn sm ghost danger" data-do="reset">Erase all my data</button></div>
      </div>`,
      mount(root) {
        const off = root.querySelector('[data-offline]');
        const totalPhotos = Object.keys(DD.PHOTOS || {}).length;
        if (location.protocol === 'file:') off.textContent = 'Opened from the files on this computer: everything already works without internet.';
        else if (!window.isSecureContext || !('caches' in window) || !('serviceWorker' in navigator)) off.textContent = 'This browser cannot keep an offline copy from this address. Use the https:// link.';
        else caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('dd-')).map((k) => caches.open(k).then((c) => c.keys())))).then((all) => {
          const best = all.reduce((m, reqs) => Math.max(m, reqs.filter((r) => r.url.includes('/assets/photos/')).length), 0);
          off.textContent = best >= totalPhotos ? `✅ Saved on this device: the full app and all ${totalPhotos} photos. Works with no internet.`
            : best ? `Saving… ${best} of ${totalPhotos} photos so far. Keep the app open on Wi-Fi for a minute.` : 'Not saved yet. Keep this page open on the internet for a minute.';
        }).catch(() => { off.textContent = 'Could not check the offline copy.'; });
        root.addEventListener('click', (e) => {
          const b = e.target.closest('[data-do]');
          if (!b) return;
          if (b.dataset.do === 'export') {
            const data = { v: 2, at: new Date().toISOString(), prefs: S.prefs, favs: S.favs, cooked: S.cooked, plan: S.plan, shop: S.shop, pantry: S.pantry, lessons: S.lessons, mine: S.mine, myphotos: S.myphotos };
            const a = document.createElement('a');
            a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
            a.download = 'dish-dictionary-backup.json'; a.click();
            setTimeout(() => URL.revokeObjectURL(a.href), 1000);
          } else if (b.dataset.do === 'reset') {
            if (confirm('Erase favorites, history, plan, shopping list and settings on this device?')) {
              ['prefs', 'favs', 'cooked', 'plan', 'shop', 'pantry', 'lessons', 'mine', 'myphotos'].forEach((k) => { try { localStorage.removeItem('dd:' + k); } catch (er) {} });
              location.reload();
            }
          }
        });
        root.querySelectorAll('[data-pref]').forEach((el) => el.addEventListener('change', () => {
          S.prefs[el.dataset.pref] = el.checked; S.save('prefs'); App.syncVeg(); App.refresh();
        }));
        root.querySelector('[data-do="import"]').addEventListener('change', (e) => {
          const f = e.target.files[0];
          if (!f) return;
          f.text().then((t) => {
            const data = JSON.parse(t);
            ['prefs', 'favs', 'cooked', 'plan', 'shop', 'pantry', 'lessons', 'mine', 'myphotos'].forEach((k) => { if (data[k] != null) { S[k] = data[k]; S.save(k); } });
            toast('✅ Backup restored'); setTimeout(() => location.reload(), 600);
          }).catch(() => toast('⚠️ That file could not be read'));
        });
      },
    };
  };

  V.notFound = () => ({ title: 'Not found', html: `<div class="empty" style="margin-top:40px"><div class="big">🥄</div><h3>That page fell off the plate</h3><p>We couldn't find what you were looking for.</p><a class="btn primary" href="#/">Go home</a></div>` });
})();
