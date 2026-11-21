/* ==========================================================================
   Dish Dictionary — core: data registry, state, units, helpers
   ========================================================================== */
'use strict';
(function () {
  /* ---------------- registry ---------------- */
  const DD = (window.DD = {
    dishes: [],
    byId: Object.create(null),
    tech: Object.create(null),
    techList: [],
    lessons: [],
    path: [],
    tools: {},
  });

  DD.REGIONS = {
    'East Asia':      { emoji: '🏯', hue: 352, blurb: 'Umami, balance and precise knife work' },
    'Southeast Asia': { emoji: '🌴', hue: 135, blurb: 'Sweet, sour, salty and hot in every bite' },
    'South Asia':     { emoji: '🪔', hue: 32,  blurb: 'Layered spices, slow simmered depth' },
    'Middle East':    { emoji: '🏜️', hue: 42,  blurb: 'Herbs, grains, tahini and charcoal' },
    'Africa':         { emoji: '🌍', hue: 16,  blurb: 'Bold stews, spice blends and one-pot rice' },
    'Europe':         { emoji: '🏰', hue: 215, blurb: 'Butter, wine, pasta and patient technique' },
    'North America':  { emoji: '🗽', hue: 0,   blurb: 'Comfort classics and backyard heroes' },
    'Latin America':  { emoji: '🌶️', hue: 8,   blurb: 'Chiles, corn, citrus and fire' },
    'Caribbean':      { emoji: '🏝️', hue: 175, blurb: 'Allspice, scotch bonnet and island smoke' },
    'Oceania':        { emoji: '🌊', hue: 195, blurb: 'Fresh catch, coconut and pavlova' },
  };

  DD.L = {
    course: {
      main: 'Main course', soup: 'Soup & stew', starter: 'Starter & small plate', salad: 'Salad',
      side: 'Side dish', breakfast: 'Breakfast & brunch', snack: 'Snack & street food',
      bread: 'Bread & dough', sauce: 'Sauce & dip', dessert: 'Dessert & sweet', drink: 'Drink',
    },
    tastes: {
      savory: 'Savory', umami: 'Umami', spicy: 'Spicy', sweet: 'Sweet', sour: 'Tangy & sour',
      rich: 'Rich & creamy', herby: 'Fresh & herby', aromatic: 'Warm spices', smoky: 'Smoky', bitter: 'Bitter',
    },
    diet: {
      vegetarian: '🥕 Vegetarian', vegan: '🌱 Vegan', pescatarian: '🐟 Pescatarian',
      'gluten-free': '🌾 Gluten-free', 'dairy-free': '🥛 Dairy-free', 'nut-free': '🥜 Nut-free',
      'high-protein': '💪 High protein',
    },
    level: { 1: 'Beginner', 2: 'Intermediate', 3: 'Advanced' },
    styles: {
      dhaba: '🛻 Dhaba style', continental: '🍽️ Continental', mughlai: '👑 Mughlai & royal', tandoori: '🔥 Tandoori',
      'south-indian': '🥥 South Indian', 'indo-chinese': '🥢 Indo-Chinese', chaat: '🛺 Chaat & street', 'home-style': '🏠 Ghar ka khana',
      'restaurant': '🍛 Restaurant style', 'sweets': '🍬 Mithai & sweets',
    },
    methods: {
      'stir-fry': 'Stir-fry', saute: 'Sauté / pan-fry', simmer: 'Simmer & boil', braise: 'Braise & stew',
      roast: 'Roast & bake', grill: 'Grill & char', 'deep-fry': 'Deep-fry', steam: 'Steam',
      'no-cook': 'No-cook', bake: 'Baking (pastry/bread)',
    },
    tags: {
      quick: '⚡ Ready in 30 min', weeknight: '🌙 Weeknight', comfort: '🛋️ Comfort food', budget: '💰 Budget',
      party: '🎉 Feeds a crowd', 'date-night': '🕯️ Date night', impress: '🏆 Impress guests',
      kids: '🧒 Kid friendly', 'meal-prep': '📦 Meal prep', 'one-pot': '🍲 One pot', healthy: '🥗 Light & healthy',
      summer: '☀️ Hot day', winter: '❄️ Cold day', 'rainy-day': '🌧️ Rainy day', brunch: '🥞 Weekend brunch',
      'street-food': '🛺 Street food', festive: '🎊 Festive', 'make-ahead': '🗓️ Make ahead',
    },
  };

  DD.SITUATIONS = [
    { icon: '⚡', t: 'I have 20 minutes', s: 'Fast, no-fuss and still delicious', q: 'time=20' },
    { icon: '🌙', t: 'Weeknight dinner', s: 'Reliable, under an hour', q: 'tags=weeknight&time=45' },
    { icon: '🛋️', t: 'Need comfort', s: 'Warm, hearty, soul-hugging', q: 'tags=comfort' },
    { icon: '🕯️', t: 'Date night', s: 'Romantic and a little special', q: 'tags=date-night' },
    { icon: '🎉', t: 'Feeding a crowd', s: 'Scales up, crowd-pleasing', q: 'tags=party' },
    { icon: '💰', t: 'Tight budget', s: 'Cheap ingredients, big flavor', q: 'tags=budget' },
    { icon: '🥗', t: 'Eating light', s: 'Fresh and good for you', q: 'tags=healthy' },
    { icon: '🌱', t: 'Plant-based', s: 'Vegan dishes from everywhere', q: 'diet=vegan' },
    { icon: '🧒', t: 'Kids at the table', s: 'Mild and friendly flavors', q: 'tags=kids&heat=1' },
    { icon: '🌧️', t: 'Rainy day', s: 'Soups, stews and slow pots', q: 'tags=rainy-day' },
    { icon: '☀️', t: 'Scorching hot', s: 'Cool, fresh, no oven', q: 'tags=summer' },
    { icon: '🏆', t: 'Impress someone', s: 'Showstoppers worth the effort', q: 'tags=impress' },
    { icon: '🌶️', t: 'Bring the heat', s: 'Fiery dishes for chili lovers', q: 'tastes=spicy&sort=hot' },
    { icon: '🍰', t: 'Something sweet', s: 'Desserts and treats', q: 'course=dessert' },
    { icon: '🎓', t: 'First time cooking', s: 'Beginner-proof recipes', q: 'level=1&sort=easy' },
    { icon: '🛻', t: 'Dhaba style', s: 'Highway-dhaba flavor: ghee, smoke, butter', q: 'styles=dhaba' },
    { icon: '🍽️', t: 'Continental', s: 'Pastas, gratins, soups and grills', q: 'styles=continental' },
    { icon: '🥥', t: 'South Indian', s: 'Dosa, idli, sambar and more', q: 'styles=south-indian' },
    { icon: '🥢', t: 'Indo-Chinese', s: 'Manchurian, chilli paneer, Hakka', q: 'styles=indo-chinese' },
    { icon: '📦', t: 'Meal prep Sunday', s: 'Keeps well all week', q: 'tags=meal-prep' },
  ];

  const NUTS = /\b(peanut|almond|cashew|pistachio|walnut|hazelnut|pecan|pine nut|macadamia|groundnut)/i;
  const TECH_RE = /\[\[([\w-]+)(?:\|[^\]]+)?\]\]/g;

  // House rule: no beef or veal dishes in this cookbook.
  const COW = /\b(beef|veal|oxtail|brisket|ribeye|sirloin)\b/i;
  DD.add = function (d) {
    if (d.ing.some((i) => Array.isArray(i) && COW.test(i[2]))) { console.warn('Skipped (contains beef/veal):', d.id); return; }
    const r = DD.REGIONS[d.region] || { hue: 20 };
    d.hue = (r.hue + (hash(d.id) % 36) - 18 + 360) % 360;
    d.prep = d.prep || 0; d.cook = d.cook || 0; d.rest = d.rest || 0;
    d.total = d.prep + d.cook + d.rest;
    d.taste = d.taste || {};
    d.spice = d.taste.spicy || 0;
    d.tastes = Object.keys(d.taste).filter((k) => d.taste[k] >= 3);
    d.diet = (d.diet || []).slice();
    const has = (x) => d.diet.includes(x);
    if (has('vegan')) { if (!has('vegetarian')) d.diet.push('vegetarian'); if (!has('dairy-free')) d.diet.push('dairy-free'); }
    if (has('vegetarian') && !has('pescatarian')) d.diet.push('pescatarian');
    d.items = d.ing.filter(Array.isArray);
    if (!d.items.some((i) => NUTS.test(i[2]))) d.diet.push('nut-free');
    d.tags = d.tags || [];
    if (d.total <= 30 && !d.tags.includes('quick')) d.tags.push('quick');
    d.methods = d.methods || [];
    const techs = new Set();
    d.steps.forEach((s) => { (s[1] + ' ' + (s[3] || '')).replace(TECH_RE, (_, id) => techs.add(id)); });
    d.techs = [...techs];
    d.styles = d.styles || [];
    // Indian-style food marking: veg (green), egg (amber), non-veg (red)
    d.hasEgg = d.items.some((i) => EGG.test(i[2]) && !(i[3] && /optional/i.test(i[3])));
    d.vclass = !d.diet.includes('vegetarian') ? 'nonveg' : d.hasEgg ? 'egg' : 'veg';
    d.search = [d.name, d.local, d.country, d.region, d.area, d.desc, d.course, ...d.items.map((i) => i[2]), ...d.tags, ...d.styles, ...(d.aka || [])]
      .join(' ').toLowerCase();
    DD.dishes.push(d);
    DD.byId[d.id] = d;
  };
  const EGG = /\b(eggs?|egg yolks?|egg whites?|mayonnaise)\b/i;

  DD.remove = function (id) {
    const i = DD.dishes.findIndex((d) => d.id === id);
    if (i >= 0) DD.dishes.splice(i, 1);
    delete DD.byId[id];
  };

  /** Tag existing dishes with a cuisine style, e.g. DD.addStyle('continental', ['carbonara', ...]) */
  DD.addStyle = function (style, ids) {
    ids.forEach((id) => {
      const d = DD.byId[id];
      if (d && !d.styles.includes(style)) { d.styles.push(style); d.search += ' ' + style; }
    });
  };

  /** Veg mode: pure veg by default (eggs excluded, like Indian “pure veg”), eggs optional via settings. */
  DD.vegOk = (d) => d.vclass === 'veg' || (d.vclass === 'egg' && S.prefs.eggVeg);
  DD.pool = () => (S.prefs.veg ? DD.dishes.filter(DD.vegOk) : DD.dishes);
  DD.vmark = (d) => `<span class="vmark ${d.vclass}" title="${d.vclass === 'veg' ? 'Vegetarian' : d.vclass === 'egg' ? 'Contains egg' : 'Non-vegetarian'}" aria-label="${d.vclass === 'veg' ? 'Vegetarian' : d.vclass === 'egg' ? 'Contains egg' : 'Non-vegetarian'}"></span>`;

  DD.addTech = function (t) { DD.tech[t.id] = t; DD.techList.push(t); };

  /* ---------------- helpers ---------------- */
  function hash(s) { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0; return h; }
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  function fmtMin(m) {
    if (!m) return '0 min';
    if (m < 60) return m + ' min';
    const h = Math.floor(m / 60), r = m % 60;
    if (h >= 24) { const dd = Math.round(m / 1440 * 2) / 2; return dd + (dd === 1 ? ' day' : ' days'); }
    return h + ' h' + (r ? ' ' + r + ' min' : '');
  }

  const FR = [[1/8, '⅛'], [1/4, '¼'], [1/3, '⅓'], [3/8, '⅜'], [1/2, '½'], [5/8, '⅝'], [2/3, '⅔'], [3/4, '¾'], [7/8, '⅞']];
  function fmtNum(n) {
    if (n == null || isNaN(n)) return '';
    if (n >= 20) return String(Math.round(n));
    if (n >= 5) { const v = Math.round(n * 2) / 2; return String(Math.floor(v)) + (v % 1 ? '½' : ''); }
    const w = Math.floor(n), f = n - w;
    if (f < 0.07) return w ? String(w) : String(+n.toFixed(2));
    if (f > 0.93) return String(w + 1);
    let best = '', bd = 1;
    for (const [v, s] of FR) { const dd = Math.abs(f - v); if (dd < bd) { bd = dd; best = s; } }
    if (bd <= 0.045) return (w || '') + best;
    return String(Math.round(n * 10) / 10);
  }

  const PLURAL = { cup: 'cups', clove: 'cloves', can: 'cans', bunch: 'bunches', slice: 'slices', sprig: 'sprigs', stalk: 'stalks',
    handful: 'handfuls', leaf: 'leaves', pinch: 'pinches', stick: 'sticks', sheet: 'sheets', piece: 'pieces', head: 'heads',
    knob: 'knobs', strip: 'strips', fillet: 'fillets', thigh: 'thighs', pod: 'pods', drop: 'drops', dash: 'dashes', block: 'blocks', lb: 'lb', ball: 'balls', scoop: 'scoops' };

  /** Format a quantity for display, honoring scale and unit system. Returns [qty, unit]. */
  function qty(q, unit, scale) {
    if (q == null) return ['', ''];
    let n = q * (scale || 1), u = unit || '';
    const us = S.prefs.units === 'us';
    if (us) {
      if (u === 'g' && n >= 15) { const oz = n / 28.35; return oz >= 16 ? [fmtNum(Math.round(oz / 16 * 4) / 4), 'lb'] : [fmtNum(oz >= 4 ? Math.round(oz * 2) / 2 : oz), 'oz']; }
      if (u === 'kg') return [fmtNum(Math.round(n * 2.2046 * 4) / 4), 'lb'];
      if (u === 'ml') { if (n >= 60) return [fmtNum(Math.round(n / 240 * 8) / 8), n / 240 > 1.05 ? 'cups' : 'cup']; if (n >= 15) return [fmtNum(n / 15), 'tbsp']; return [fmtNum(n / 5), 'tsp']; }
      if (u === 'l') return [fmtNum(Math.round(n * 4.227 * 4) / 4), 'cups'];
      if (u === 'cm') return [fmtNum(n / 2.54), 'in'];
    } else {
      if (u === 'cup') { n *= 240; u = 'ml'; }
      if (u === 'ml' && n >= 1000) { n /= 1000; u = 'l'; }
      else if (u === 'g' && n >= 1000) { n /= 1000; u = 'kg'; }
      else if ((u === 'g' || u === 'ml') && n >= 100) n = Math.round(n / 5) * 5;
      else if ((u === 'g' || u === 'ml') && n >= 10) n = Math.round(n);
      if (u === 'kg' || u === 'l') return [String(Math.round(n * 100) / 100), u];
    }
    return [fmtNum(n), n > 1.05 && PLURAL[u] ? PLURAL[u] : u];
  }
  const qtyStr = (q, u, s) => { const [a, b] = qty(q, u, s); return (a + ' ' + b).trim(); };

  function temp(c) {
    // Oven temps snap to the familiar 25 °F steps (180 °C → 350 °F) when close; precise temps keep 5 °F steps.
    const exact = c * 9 / 5 + 32, by25 = Math.round(exact / 25) * 25;
    const f = c >= 150 && Math.abs(by25 - exact) <= 8 ? by25 : Math.round(exact / 5) * 5;
    return S.prefs.units === 'us' ? `${f}°F (${c}°C)` : `${c}°C (${f}°F)`;
  }
  function len(cm) { return S.prefs.units === 'us' ? fmtNum(cm / 2.54) + ' in' : cm + ' cm'; }

  /** Render recipe markup: [[tech|label]], {{180C}}, {{2cm}}, **bold** */
  function rich(s) {
    return esc(s)
      .replace(/\[\[([\w-]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => {
        const t = DD.tech[id];
        const text = label || (t ? t.name.toLowerCase() : id);
        return t ? `<button type="button" class="tech" data-act="tech" data-id="${id}" title="Tap to learn: ${esc(t.name)}">${text}</button>` : text;
      })
      .replace(/\{\{(\d+)C\}\}/g, (_, c) => `<b>${temp(+c)}</b>`)
      .replace(/\{\{([\d.]+)cm\}\}/g, (_, c) => len(+c))
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  }
  /** Plain text version (for speech, copying). */
  function plain(s) {
    return String(s || '')
      .replace(/\[\[([\w-]+)(?:\|([^\]]+))?\]\]/g, (_, id, label) => label || (DD.tech[id] ? DD.tech[id].name.toLowerCase() : id))
      .replace(/\{\{(\d+)C\}\}/g, (_, c) => temp(+c))
      .replace(/\{\{([\d.]+)cm\}\}/g, (_, c) => len(+c))
      .replace(/\*\*(.+?)\*\*/g, '$1');
  }

  const dayIndex = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
  function seeded(seed) { let s = seed >>> 0 || 1; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }
  function debounce(fn, ms) { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; }
  const levelDots = (l) => `<span class="dots l${l}" title="${DD.L.level[l]}" aria-label="${DD.L.level[l]}">${[1, 2, 3].map((i) => `<i class="${i <= l ? 'on' : ''}"></i>`).join('')}</span>`;
  const heat = (n) => (n ? '🌶️'.repeat(Math.min(5, n)) : '');

  /* ---------------- storage + state ---------------- */
  const Store = {
    get(k, def) { try { const v = localStorage.getItem('dd:' + k); return v ? JSON.parse(v) : def; } catch (e) { return def; } },
    set(k, v) { try { localStorage.setItem('dd:' + k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  };

  const S = (window.S = {
    prefs: Object.assign({ units: 'metric', theme: 'auto', staples: true, veg: false, eggVeg: false }, Store.get('prefs', {})),
    favs: Store.get('favs', []),
    cooked: Store.get('cooked', {}),
    plan: Store.get('plan', {}),
    shop: Store.get('shop', []),
    pantry: Store.get('pantry', []),
    lessons: Store.get('lessons', []),
    servings: {},
    save(k) { Store.set(k, this[k]); document.dispatchEvent(new CustomEvent('dd:state', { detail: k })); },
    isFav(id) { return this.favs.includes(id); },
    toggleFav(id) {
      const i = this.favs.indexOf(id);
      if (i >= 0) this.favs.splice(i, 1); else this.favs.unshift(id);
      this.save('favs');
      return i < 0;
    },
    scaleFor(d) { return (this.servings[d.id] || d.serves) / d.serves; },
  });

  /* ---------------- shopping helpers ---------------- */
  const CAT = [
    ['🧂 Spices & seasonings', /\b(salt|black pepper|white pepper|peppercorns?|ground |powder|flakes|paprika|turmeric|cinnamon|cardamom|nutmeg|garam masala|saffron|star anise|sumac|za'atar|five-spice|cayenne|allspice|spice|dried oregano|dried thyme|bay lea|whole cloves|cumin seeds|mustard seeds|fennel seeds|coriander seeds|fenugreek|kasuri|berbere|ras el hanout|msg|bouillon|stock cube|vanilla)\b/],
    ['🫙 Pantry, sauces & cans', /\b(vinegar|sauce|paste|stock|broth|oil|wine|coconut milk|coconut cream|peanut butter|tahini|honey|syrup|sugar|molasses|mirin|sake|shaoxing|miso|gochujang|doubanjiang|tamarind|canned|tinned|chopped tomatoes|passata|beans|lentils|chickpeas|dal\b|split peas|baking|cocoa|chocolate|cornstarch|cornflour|gelatin|olives|capers|anchovies|kecap|ketchup|mustard|mayonnaise|jam|nuts?\b|peanuts|almonds|cashews|pistachios|walnuts|sesame seeds|raisins|dates|coconut, desiccated|desiccated|dried)\b/],
    ['🥩 Meat & seafood', /\b(chicken|beef|pork|lamb|mutton|goat|bacon|pancetta|guanciale|sausage|chorizo|mince|steak|veal|fish|salmon|tuna|cod|haddock|prawns?|shrimp|squid|mussels|clams|ham|turkey|duck|brisket|chuck|ribs|oxtail|tilapia|snapper|sea bass|crab|lobster|scallops|anchov)/],
    ['🧀 Dairy & eggs', /\b(eggs?|milk|butter|cream|cheese|yogh?urt|paneer|ghee|parmesan|pecorino|mozzarella|feta|mascarpone|buttermilk|crème|ricotta|gruyère|cheddar|halloumi|labneh|condensed)/],
    ['🌾 Grains, bread & noodles', /\b(rice|noodles?|pasta|spaghetti|penne|macaroni|lasagne|flour|bread|tortillas?|couscous|bulgur|oats|semolina|panko|breadcrumbs|pastry|phyllo|filo|cornmeal|masa|yeast|buns?|pita|naan|wrappers|polenta|quinoa|barley|teff|injera|arborio)/],
    ['🥬 Produce', /./],
  ];
  const CAT_ORDER = [1, 2, 0, 4, 3, 5]; // pantry, meat, spices, grains, dairy, produce
  function category(name) {
    const n = name.toLowerCase();
    for (const i of CAT_ORDER) if (CAT[i][1].test(n)) return CAT[i][0];
    return '🥬 Produce';
  }
  const normName = (n) => n.toLowerCase().replace(/\(.*?\)/g, '').replace(/,.*$/, '').replace(/\s+/g, ' ').trim();

  function addToShop(d, scale, filter) {
    let added = 0;
    for (const it of d.items) {
      const [q, u, name, note] = it;
      if (filter && !filter(it)) continue;
      if (note && /optional|to serve|garnish/i.test(note) && !filter) continue;
      const key = normName(name) + '|' + (u || '');
      const ex = S.shop.find((x) => x.key === key && !x.done);
      if (ex) {
        if (q != null && ex.qty != null) ex.qty += q * scale;
        if (!ex.from.includes(d.id)) ex.from.push(d.id);
      } else {
        S.shop.push({ key, name: normName(name), qty: q == null ? null : q * scale, unit: u || '', from: [d.id], done: false, cat: category(name) });
      }
      added++;
    }
    S.save('shop');
    return added;
  }

  /* ---------------- toast + modal ---------------- */
  let toastT;
  function toast(msg, action) {
    const el = document.getElementById('toast');
    el.innerHTML = `<span>${msg}</span>` + (action ? `<a href="${action.href}">${esc(action.label)}</a>` : '');
    el.classList.add('show');
    clearTimeout(toastT);
    toastT = setTimeout(() => el.classList.remove('show'), 3200);
  }

  let lastFocus = null;
  function openModal(html, opts = {}) {
    closeModal(true);
    lastFocus = document.activeElement;
    const root = document.getElementById('modalRoot');
    root.innerHTML = `<div class="modal-wrap" data-modal-bg><div class="modal ${opts.cls || ''}" role="dialog" aria-modal="true" aria-label="${esc(opts.label || 'Dialog')}">
      ${opts.noClose ? '' : '<button class="modal-close" data-modal-close aria-label="Close">✕</button>'}${html}</div></div>`;
    const wrap = root.firstElementChild;
    wrap.addEventListener('click', (e) => {
      if (e.target === wrap || e.target.closest('[data-modal-close]')) closeModal();
    });
    const m = wrap.querySelector('.modal');
    if (opts.mount) opts.mount(m);
    const f = m.querySelector('[autofocus]') || m.querySelector('input, button:not(.modal-close), a');
    if (f) setTimeout(() => f.focus(), 30);
    return m;
  }
  function closeModal(silent) {
    const root = document.getElementById('modalRoot');
    if (!root || !root.firstChild) return;
    root.innerHTML = '';
    if (!silent && lastFocus && lastFocus.focus) lastFocus.focus();
  }

  window.U = { hash, esc, escRe, fmtMin, fmtNum, qty, qtyStr, temp, rich, plain, dayIndex, seeded, debounce, levelDots, heat, Store, toast, openModal, closeModal, addToShop, category, normName };
})();
