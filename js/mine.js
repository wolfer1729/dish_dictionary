/* ==========================================================================
   Dish Dictionary — "My recipes": add, edit and delete your own dishes.
   Saved privately in this browser (localStorage key dd:mine).
   ========================================================================== */
'use strict';
(function () {
  const { esc, toast, Store } = U;
  const L = DD.L;

  /* ---------- load saved recipes into the registry ---------- */
  S.mine = Store.get('mine', []);
  const register = (r) => {
    try { DD.add(Object.assign({}, r, { mine: true, ing: r.ing.slice(), steps: r.steps.slice(), diet: (r.diet || []).slice(), tags: (r.tags || []).slice(), styles: (r.styles || []).slice() })); }
    catch (e) { console.warn('Could not load my recipe', r && r.id, e); }
  };
  S.mine.forEach(register);

  const EMOJIS = ['🍛', '🍲', '🥘', '🍜', '🍝', '🍚', '🥗', '🥙', '🌯', '🌮', '🫓', '🥞', '🍳', '🥟', '🧆', '🍢', '🥔', '🍆', '🥦', '🥕', '🌽', '🍄', '🧀', '🥥', '🍅', '🌶️', '🫘', '🍞', '🥧', '🍰', '🍮', '🍩', '🍪', '🍨', '🧁', '🍫', '☕', '🍵', '🧋', '🥤', '🍹', '🥭', '🍋', '🍗', '🐟', '🍤', '🥚'];
  const UNITS = ['', 'g', 'kg', 'ml', 'l', 'tsp', 'tbsp', 'cup', 'clove', 'pinch', 'piece', 'slice', 'handful', 'bunch', 'sprig', 'leaf', 'can', 'stick'];
  const blankIng = () => ['', 'g', '', ''];
  const blankStep = () => ['', '', '', ''];

  function slug(s) { return String(s).toLowerCase().normalize('NFKD').replace(/[^\w]+/g, '-').replace(/^-|-$/g, '').slice(0, 40) || 'dish'; }

  /** Downscale an uploaded photo so it fits comfortably in browser storage. */
  function shrinkImage(file) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const max = 900, k = Math.min(1, max / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(img.src);
        resolve(c.toDataURL('image/jpeg', 0.78));
      };
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  }

  /* ---------- editor view ---------- */
  V.editor = function (editId) {
    const existing = editId ? S.mine.find((r) => r.id === editId) : null;
    if (editId && !existing) return V.notFound();
    const r = existing ? JSON.parse(JSON.stringify(existing)) : {
      name: '', local: '', emoji: '🍛', country: 'India', region: 'South Asia', area: '', course: 'main', level: 1, prep: 15, cook: 30, rest: 0, serves: 4,
      taste: { savory: 3 }, diet: ['vegetarian'], methods: [], tags: [], styles: ['home-style'], desc: '', story: '', equip: [], ing: [blankIng(), blankIng(), blankIng()], steps: [blankStep(), blankStep()],
      tips: [], mistakes: [], vars: [], serve: '', photo: '',
    };
    const countries = [...new Set(DD.dishes.map((d) => d.country))].sort();
    const chipGroup = (name, entries, selected) => `<div class="chips">${entries.map(([v, l]) => `<label class="chip pick ${selected.includes(v) ? 'on' : ''}"><input type="checkbox" name="${name}" value="${esc(v)}" ${selected.includes(v) ? 'checked' : ''} hidden>${esc(l)}</label>`).join('')}</div>`;
    const ingRow = (it) => it === null || typeof it === 'string'
      ? `<div class="ed-row ed-group"><input class="input" data-f="group" value="${esc(String(it || '').replace(/^#\s*/, ''))}" placeholder="Group heading, e.g. For the sauce"><button type="button" class="icon-btn" data-ed="rm" title="Remove">✕</button></div>`
      : `<div class="ed-row ed-ing"><input class="input" data-f="q" inputmode="decimal" value="${it[0] == null ? '' : esc(it[0])}" placeholder="Qty" aria-label="Quantity">
          <select class="select" data-f="u" aria-label="Unit">${UNITS.map((u) => `<option value="${u}" ${u === (it[1] || '') ? 'selected' : ''}>${u || '(count)'}</option>`).join('')}</select>
          <input class="input" data-f="n" value="${esc(it[2] || '')}" placeholder="Ingredient, e.g. paneer" list="pantry-all" aria-label="Ingredient">
          <input class="input" data-f="note" value="${esc(it[3] || '')}" placeholder="Note (optional)" aria-label="Note">
          <button type="button" class="icon-btn" data-ed="rm" title="Remove">✕</button></div>`;
    const stepRow = (s, i) => `<div class="ed-step"><div class="ed-step-n">${i + 1}</div><div class="ed-step-f">
        <input class="input" data-f="t" value="${esc(s[0] || '')}" placeholder="Step title, e.g. Fry the onions" aria-label="Step title">
        <textarea class="input" data-f="x" rows="3" placeholder="What to do, in detail" aria-label="Step instructions">${esc(s[1] || '')}</textarea>
        <div class="ed-row"><input class="input" data-f="tm" inputmode="numeric" value="${s[2] || ''}" placeholder="Timer (min)" style="max-width:130px" aria-label="Timer minutes"><input class="input" data-f="tip" value="${esc(s[3] || '')}" placeholder="Pro tip (optional)" aria-label="Tip"></div>
      </div><button type="button" class="icon-btn" data-ed="rm" title="Remove step">✕</button></div>`;
    const allIngs = [...new Set(DD.dishes.flatMap((d) => d.items.map((i) => U.normName(i[2]))))].sort();

    return {
      title: existing ? 'Edit ' + r.name : 'Add a recipe',
      html: `<div class="page-head"><p class="eyebrow">My recipes</p><h1>${existing ? '✏️ Edit your recipe' : '➕ Add your own recipe'}</h1>
        <p class="lead">Your family recipes, your own creations, dishes you learned somewhere. They get the full Dish Dictionary treatment: filters, scaling, unit conversion, cook mode, timers, shopping lists. Saved privately on this device.</p></div>
      <form class="editor" id="ed" autocomplete="off">
        <datalist id="pantry-all">${allIngs.map((x) => `<option value="${esc(x)}">`).join('')}</datalist>
        <datalist id="countries-all">${countries.map((x) => `<option value="${esc(x)}">`).join('')}</datalist>

        <section class="panel ed-sec"><h2>1 · The basics</h2>
          <div class="ed-grid">
            <label class="fld wide"><span>Dish name *</span><input class="input" name="name" required value="${esc(r.name)}" placeholder="e.g. Mom’s Rajma"></label>
            <label class="fld"><span>Local name</span><input class="input" name="local" value="${esc(r.local || '')}" placeholder="e.g. राजमा"></label>
            <label class="fld"><span>Country</span><input class="input" name="country" list="countries-all" value="${esc(r.country)}"></label>
            <label class="fld"><span>Region</span><select class="select" name="region">${Object.keys(DD.REGIONS).map((x) => `<option ${x === r.region ? 'selected' : ''}>${x}</option>`).join('')}</select></label>
            <label class="fld"><span>State / area</span><input class="input" name="area" value="${esc(r.area || '')}" placeholder="e.g. Punjab"></label>
            <label class="fld"><span>Course</span><select class="select" name="course">${Object.entries(L.course).map(([k, v]) => `<option value="${k}" ${k === r.course ? 'selected' : ''}>${v}</option>`).join('')}</select></label>
            <label class="fld"><span>Skill level</span><select class="select" name="level">${[1, 2, 3].map((x) => `<option value="${x}" ${+r.level === x ? 'selected' : ''}>${L.level[x]}</option>`).join('')}</select></label>
            <label class="fld"><span>Serves</span><input class="input" name="serves" type="number" min="1" max="60" value="${r.serves}"></label>
            <label class="fld"><span>Prep (min)</span><input class="input" name="prep" type="number" min="0" value="${r.prep}"></label>
            <label class="fld"><span>Cook (min)</span><input class="input" name="cook" type="number" min="0" value="${r.cook}"></label>
            <label class="fld"><span>Waiting (soak, marinate…)</span><input class="input" name="rest" type="number" min="0" value="${r.rest || 0}"></label>
          </div>
          <div class="fld" style="margin-top:12px"><span>Icon</span><div class="emoji-pick">${EMOJIS.map((e) => `<button type="button" class="${e === r.emoji ? 'on' : ''}" data-emoji="${e}">${e}</button>`).join('')}</div></div>
          <div class="fld" style="margin-top:12px"><span>Photo (optional)</span>
            <div class="ed-photo"><img id="phPrev" src="${r.photo || ''}" alt="" ${r.photo ? '' : 'hidden'}><label class="btn sm">📷 ${r.photo ? 'Change' : 'Add'} photo<input type="file" accept="image/*" id="phIn" hidden></label><button type="button" class="btn sm ghost danger" id="phRm" ${r.photo ? '' : 'hidden'}>Remove</button></div></div>
          <label class="fld" style="margin-top:12px"><span>Short description</span><input class="input" name="desc" value="${esc(r.desc)}" placeholder="One line that makes people hungry"></label>
          <label class="fld" style="margin-top:12px"><span>Story / where it comes from</span><textarea class="input" name="story" rows="3" placeholder="Grandma’s Sunday special from Amritsar…">${esc(r.story)}</textarea></label>
        </section>

        <section class="panel ed-sec"><h2>2 · Ingredients *</h2>
          <p class="small muted">Quantities scale automatically and convert between metric and US. Leave quantity empty for “to taste”.</p>
          <div id="edIng">${r.ing.map(ingRow).join('')}</div>
          <div class="btn-row"><button type="button" class="btn sm" data-ed="add-ing">+ Ingredient</button><button type="button" class="btn sm ghost" data-ed="add-group">+ Group heading</button></div>
          <label class="fld" style="margin-top:14px"><span>Equipment (one per line)</span><textarea class="input" name="equip" rows="2">${esc((r.equip || []).join('\n'))}</textarea></label>
        </section>

        <section class="panel ed-sec"><h2>3 · Method *</h2>
          <p class="small muted">Add a timer (minutes) and it becomes a one-tap kitchen timer in cook mode.</p>
          <div id="edSteps">${r.steps.map(stepRow).join('')}</div>
          <button type="button" class="btn sm" data-ed="add-step">+ Step</button>
        </section>

        <section class="panel ed-sec"><h2>4 · Diet, taste & tags</h2>
          <div class="fld"><span>Diet</span>${chipGroup('diet', Object.entries(L.diet).filter(([k]) => k !== 'nut-free' && k !== 'pescatarian'), r.diet || [])}</div>
          <div class="fld"><span>Cuisine style</span>${chipGroup('styles', Object.entries(L.styles), r.styles || [])}</div>
          <div class="fld"><span>Cooking method</span>${chipGroup('methods', Object.entries(L.methods), r.methods || [])}</div>
          <div class="fld"><span>Situations</span>${chipGroup('tags', Object.entries(L.tags).filter(([k]) => k !== 'quick'), r.tags || [])}</div>
          <div class="fld"><span>Flavor profile (0–5)</span><div class="taste-ed">${Object.entries(L.tastes).map(([k, v]) => `<label><span>${v} <b data-tv="${k}">${(r.taste || {})[k] || 0}</b></span><input type="range" min="0" max="5" name="taste-${k}" value="${(r.taste || {})[k] || 0}"></label>`).join('')}</div></div>
        </section>

        <section class="panel ed-sec"><h2>5 · Pro notes (optional)</h2>
          <div class="ed-grid">
            <label class="fld wide"><span>💡 Secrets & tips (one per line)</span><textarea class="input" name="tips" rows="3">${esc((r.tips || []).join('\n'))}</textarea></label>
            <label class="fld wide"><span>⚠️ Common mistakes (one per line)</span><textarea class="input" name="mistakes" rows="3">${esc((r.mistakes || []).join('\n'))}</textarea></label>
            <label class="fld wide"><span>🔀 Variations (one per line)</span><textarea class="input" name="vars" rows="3">${esc((r.vars || []).join('\n'))}</textarea></label>
            <label class="fld wide"><span>🍽️ Serve with</span><input class="input" name="serve" value="${esc(r.serve || '')}"></label>
          </div>
        </section>

        <div class="ed-actions"><button class="btn primary lg" type="submit">💾 ${existing ? 'Save changes' : 'Save recipe'}</button><a class="btn lg ghost" href="${existing ? '#/dish/' + existing.id : '#/me'}">Cancel</a></div>
      </form>`,
      mount(root) {
        const $ = (s) => root.querySelector(s);
        let photo = r.photo || '', emoji = r.emoji;
        const form = $('#ed');

        root.addEventListener('click', (e) => {
          const em = e.target.closest('[data-emoji]');
          if (em) { emoji = em.dataset.emoji; root.querySelectorAll('[data-emoji]').forEach((b) => b.classList.toggle('on', b === em)); return; }
          const b = e.target.closest('[data-ed]');
          if (!b) return;
          const act = b.dataset.ed;
          if (act === 'rm') { b.parentElement.closest('.ed-row, .ed-step').remove(); renumber(); }
          else if (act === 'add-ing') { $('#edIng').insertAdjacentHTML('beforeend', ingRow(blankIng())); $('#edIng').lastElementChild.querySelector('[data-f="n"]').focus(); }
          else if (act === 'add-group') { $('#edIng').insertAdjacentHTML('beforeend', ingRow('')); }
          else if (act === 'add-step') { $('#edSteps').insertAdjacentHTML('beforeend', stepRow(blankStep(), 0)); renumber(); $('#edSteps').lastElementChild.querySelector('[data-f="t"]').focus(); }
        });
        const renumber = () => root.querySelectorAll('.ed-step-n').forEach((n, i) => { n.textContent = i + 1; });
        root.addEventListener('change', (e) => {
          const cb = e.target.closest('.chip.pick input');
          if (cb) cb.parentElement.classList.toggle('on', cb.checked);
        });
        root.addEventListener('input', (e) => {
          if (e.target.type === 'range') root.querySelector(`[data-tv="${e.target.name.slice(6)}"]`).textContent = e.target.value;
        });
        $('#phIn').addEventListener('change', async (e) => {
          const f = e.target.files[0];
          if (!f) return;
          try { photo = await shrinkImage(f); $('#phPrev').src = photo; $('#phPrev').hidden = false; $('#phRm').hidden = false; }
          catch (er) { toast('⚠️ That image could not be read'); }
        });
        $('#phRm').addEventListener('click', () => { photo = ''; $('#phPrev').hidden = true; $('#phRm').hidden = true; });

        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const fd = new FormData(form);
          const lines = (k) => String(fd.get(k) || '').split('\n').map((s) => s.trim()).filter(Boolean);
          const num = (k, d) => { const v = parseFloat(fd.get(k)); return isNaN(v) ? d : Math.max(0, v); };
          const ing = [...root.querySelectorAll('#edIng > div')].map((row) => {
            if (row.classList.contains('ed-group')) { const g = row.querySelector('[data-f="group"]').value.trim(); return g ? '#' + g : null; }
            const name = row.querySelector('[data-f="n"]').value.trim();
            if (!name) return null;
            const qs = row.querySelector('[data-f="q"]').value.trim().replace(',', '.');
            const frac = qs.match(/^(\d+)\s*\/\s*(\d+)$/);
            const q = qs === '' ? null : frac ? +frac[1] / +frac[2] : parseFloat(qs);
            const note = row.querySelector('[data-f="note"]').value.trim();
            const it = [isNaN(q) ? null : q, row.querySelector('[data-f="u"]').value, name];
            if (note) it.push(note);
            return it;
          }).filter(Boolean);
          const steps = [...root.querySelectorAll('#edSteps .ed-step')].map((row) => {
            const t = row.querySelector('[data-f="t"]').value.trim(), x = row.querySelector('[data-f="x"]').value.trim();
            if (!t && !x) return null;
            const tm = parseFloat(row.querySelector('[data-f="tm"]').value);
            const tip = row.querySelector('[data-f="tip"]').value.trim();
            return [t || 'Step', x || t, isNaN(tm) || tm <= 0 ? 0 : tm, tip];
          }).filter(Boolean);
          const name = String(fd.get('name') || '').trim();
          if (!name) return toast('Please give your dish a name');
          if (!ing.some(Array.isArray)) return toast('Add at least one ingredient');
          if (!steps.length) return toast('Add at least one step');
          const country = String(fd.get('country') || '').trim() || 'My kitchen';
          const known = DD.dishes.find((d) => d.country.toLowerCase() === country.toLowerCase());
          const taste = {};
          Object.keys(L.tastes).forEach((k) => { const v = +fd.get('taste-' + k); if (v) taste[k] = v; });
          const rec = {
            id: existing ? existing.id : 'my-' + slug(name) + '-' + Date.now().toString(36),
            name, local: String(fd.get('local') || '').trim(), emoji, photo,
            country: known ? known.country : country, flag: known ? known.flag : '🍽️',
            region: fd.get('region'), area: String(fd.get('area') || '').trim() || undefined,
            course: fd.get('course'), level: +fd.get('level'), serves: Math.max(1, num('serves', 4)),
            prep: num('prep', 0), cook: num('cook', 0), rest: num('rest', 0),
            taste: Object.keys(taste).length ? taste : { savory: 3 },
            diet: fd.getAll('diet'), styles: fd.getAll('styles'), methods: fd.getAll('methods'), tags: fd.getAll('tags'),
            desc: String(fd.get('desc') || '').trim() || 'A recipe from my own kitchen.',
            story: String(fd.get('story') || '').trim() || 'A personal recipe saved in my Dish Dictionary.',
            equip: lines('equip'), ing, steps, tips: lines('tips'), mistakes: lines('mistakes'), vars: lines('vars'),
            serve: String(fd.get('serve') || '').trim(), created: existing ? existing.created : Date.now(), updated: Date.now(),
          };
          if (rec.diet.includes('vegan') && !rec.diet.includes('vegetarian')) rec.diet.push('vegetarian');
          const list = existing ? S.mine.map((x) => (x.id === rec.id ? rec : x)) : [rec, ...S.mine];
          try { Store.set('mine', list); localStorage.getItem('dd:mine'); } catch (er) { return toast('⚠️ Storage is full. Try a smaller photo.'); }
          if (JSON.stringify(Store.get('mine', [])).length < JSON.stringify(list).length - 10) return toast('⚠️ Could not save (storage full). Try removing the photo.');
          S.mine = list;
          if (existing) DD.remove(rec.id);
          register(rec);
          toast(existing ? '✅ Recipe updated' : '🎉 Recipe added to your Dish Dictionary!');
          location.hash = '#/dish/' + rec.id;
        });
      },
    };
  };

  /* ---------- your own photo on any built-in dish ---------- */
  S.myphotos = Store.get('myphotos', {});
  const applyPhoto = (id) => {
    const d = DD.byId[id];
    if (!d || !S.myphotos[id]) return;
    if (!d.userPhoto) d.origPhoto = { photo: d.photo, credit: d.photoCredit };
    d.photo = S.myphotos[id]; d.photoCredit = null; d.userPhoto = true;
  };
  Object.keys(S.myphotos).forEach(applyPhoto);

  V.setDishPhoto = function (id) {
    const inp = document.createElement('input');
    inp.type = 'file'; inp.accept = 'image/*';
    inp.onchange = async () => {
      const f = inp.files[0];
      if (!f) return;
      try {
        const data = await shrinkImage(f);
        const next = Object.assign({}, S.myphotos, { [id]: data });
        Store.set('myphotos', next);
        if (!localStorage.getItem('dd:myphotos') || localStorage.getItem('dd:myphotos').length < data.length) return toast('⚠️ Storage is full. Try removing some photos.');
        S.myphotos = next; applyPhoto(id);
        toast('📷 Photo saved'); App.refresh();
      } catch (e) { toast('⚠️ That image could not be read'); }
    };
    inp.click();
  };
  V.resetDishPhoto = function (id) {
    const d = DD.byId[id];
    delete S.myphotos[id]; Store.set('myphotos', S.myphotos);
    if (d && d.origPhoto) { d.photo = d.origPhoto.photo; d.photoCredit = d.origPhoto.credit; }
    if (d) d.userPhoto = false;
    toast('Photo reset'); App.refresh();
  };

  V.deleteMine = function (id) {
    const r = S.mine.find((x) => x.id === id);
    if (!r || !confirm(`Delete “${r.name}” permanently?`)) return;
    S.mine = S.mine.filter((x) => x.id !== id);
    Store.set('mine', S.mine);
    DD.remove(id);
    S.favs = S.favs.filter((x) => x !== id); S.save('favs');
    toast('🗑️ Recipe deleted');
    location.hash = '#/me';
  };
})();
