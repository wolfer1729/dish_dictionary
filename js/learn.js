/* ==========================================================================
   Dish Dictionary — cooking school views + technique modal
   ========================================================================== */
'use strict';
(function () {
  const { esc, rich, fmtMin, fmtNum, temp, openModal, toast } = U;

  const TOOLS = [
    ['fix', '🩹', 'Fix my dish', 'Too salty? Too spicy? Split sauce? Rescues for every disaster.'],
    ['subs', '🔁', 'Substitutions', 'Missing an ingredient? What to use instead.'],
    ['temps', '🌡️', 'Temperature guide', 'Meat doneness, frying oil and oven temperatures.'],
    ['heat', '🔥', 'Stove heat guide', 'What low, medium and high really look and sound like.'],
    ['convert', '⚖️', 'Converter', 'Cups ↔ grams by ingredient, °C ↔ °F, oz ↔ g.'],
    ['pantry', '🫙', 'World pantry', 'What to stock to cook each cuisine.'],
    ['glossary', '📖', 'Technique glossary', `All ${DD.techList.length} techniques with step-by-step how-tos.`],
    ['path', '🧭', "Beginner's path", 'Recipes in order, each teaching a new skill.'],
  ];

  function block(b) {
    const [type, v] = b;
    if (type === 'h') return `<h2>${esc(v)}</h2>`;
    if (type === 'p') return `<p>${rich(v)}</p>`;
    if (type === 'ul') return `<ul>${v.map((x) => `<li>${rich(x)}</li>`).join('')}</ul>`;
    if (type === 'ol') return `<ol>${v.map((x) => `<li>${rich(x)}</li>`).join('')}</ol>`;
    if (type === 'tip') return `<div class="callout tip"><b>Pro tip</b>${rich(v)}</div>`;
    if (type === 'warn') return `<div class="callout warn"><b>Watch out</b>${rich(v)}</div>`;
    return '';
  }

  const back = `<nav class="crumbs"><a href="#/learn">← Cooking school</a></nav>`;
  const head = (eyebrow, title, lead) => `${back}<div class="page-head"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}</div>`;
  const miniDish = (d) => `<a class="chip" href="#/dish/${d.id}">${d.emoji} ${esc(d.name)}</a>`;

  /* ---------- technique modal (global) ---------- */
  V.techModal = function (id) {
    const t = DD.tech[id];
    if (!t) return;
    const uses = DD.pool().filter((d) => d.techs.includes(id));
    openModal(`
      <div class="tech-head"><span class="ico">${t.icon}</span><div><div class="eyebrow" style="margin:0;color:var(--blue)">Technique</div><h2 style="margin:0">${esc(t.name)}</h2></div></div>
      <p class="lead" style="font-size:1.02rem">${rich(t.short)}</p>
      <h4>How to do it</h4>
      <ol class="howto">${t.how.map((s) => `<li>${rich(s)}</li>`).join('')}</ol>
      ${t.tips.map((x) => `<div class="callout tip"><b>Pro tip</b>${rich(x)}</div>`).join('')}
      ${t.mistake ? `<div class="callout warn"><b>Common mistake</b>${rich(t.mistake)}</div>` : ''}
      ${uses.length ? `<h4 style="margin-top:18px">Practice it in ${uses.length} ${uses.length === 1 ? 'dish' : 'dishes'}</h4><div class="mini-dishes">${uses.slice(0, 12).map(miniDish).join('')}</div>` : ''}
    `, { label: t.name });
  };

  /* ---------- tools ---------- */
  function toolFix() {
    return {
      title: 'Fix my dish',
      html: head('Toolkit', '🩹 Fix my dish', 'Every cook ruins dishes. Great cooks know how to rescue them. Find your problem below.') +
        `<div class="fix-list">${DD.tools.fix.map(([e, p, fixes], i) => `<details class="fix" ${i === 0 ? 'open' : ''}><summary><span class="e">${e}</span>${esc(p)}</summary><div class="body"><ol>${fixes.map((f) => `<li>${rich(f)}</li>`).join('')}</ol></div></details>`).join('')}</div>`,
    };
  }
  function toolSubs() {
    const rows = (q) => DD.tools.subs.filter((r) => !q || r.join(' ').toLowerCase().includes(q)).map(([a, b, c]) => `<tr><td><b>${esc(a)}</b></td><td>${esc(b)}</td><td class="muted">${esc(c)}</td></tr>`).join('') || '<tr><td colspan="3" class="muted">No substitution found. Try another word.</td></tr>';
    return {
      title: 'Substitutions',
      html: head('Toolkit', '🔁 Ingredient substitutions', 'Out of something? Most ingredients have a good stand-in.') +
        `<div class="searchbox" style="max-width:420px;margin-bottom:14px"><input class="input" id="subq" type="search" placeholder="Search e.g. buttermilk, fish sauce…" aria-label="Search substitutions"></div>
        <div class="table-wrap"><table class="t"><thead><tr><th>If you don't have</th><th>Use</th><th>Best for</th></tr></thead><tbody id="subrows">${rows('')}</tbody></table></div>`,
      mount(root) { root.querySelector('#subq').addEventListener('input', (e) => { root.querySelector('#subrows').innerHTML = rows(e.target.value.toLowerCase().trim()); }); },
    };
  }
  function toolTemps() {
    const t = DD.tools.temps;
    const table = (title, rows) => `<h2 style="margin-top:28px">${title}</h2><div class="table-wrap"><table class="t"><thead><tr><th>What</th><th>Temperature</th><th>Notes</th></tr></thead><tbody>${rows.map(([a, c, n]) => `<tr><td><b>${esc(a)}</b></td><td><b>${temp(c)}</b></td><td class="muted">${esc(n)}</td></tr>`).join('')}</tbody></table></div>`;
    return {
      title: 'Temperature guide',
      html: head('Toolkit', '🌡️ Temperature guide', 'An instant-read thermometer turns guesswork into precision. Here are the numbers chefs use. Switch units with the button at the top.') +
        table('🥩 Meat & fish (internal)', t.meat) + table('🍟 Frying oil', t.oil) + table('♨️ Oven', t.oven) +
        `<div class="callout info" style="margin-top:20px"><b>Carryover cooking</b>Meat keeps rising 2–5 °C after you take it off the heat. Pull it a few degrees early and let it [[rest]].</div>`.replace('[[rest]]', rich('[[rest]]')),
    };
  }
  function toolHeat() {
    return {
      title: 'Stove heat guide',
      html: head('Toolkit', '🔥 Stove heat guide', 'Every stove is different. Learn to read the pan, not the dial.') +
        `<div class="heat-scale">${DD.tools.heat.map(([l, n, look, use]) => `<div class="heat-row"><div><div class="lvl">${'🔥'.repeat(n)} ${l}</div><div class="flame" style="width:${n * 20}%"></div></div><div><b>Looks like:</b> ${esc(look)}<br><span class="muted"><b>Use for:</b> ${esc(use)}</span></div></div>`).join('')}</div>
        <div class="callout tip" style="margin-top:18px"><b>The water test</b>Flick a few drops of water into the empty, preheating pan. Sizzle and evaporate slowly: medium. Dance and skitter like mercury: hot enough to sear.</div>`,
    };
  }
  function toolConvert() {
    return {
      title: 'Kitchen converter',
      html: head('Toolkit', '⚖️ Kitchen converter', 'Volume and weight are not the same: a cup of flour weighs half as much as a cup of sugar. Convert accurately here.') + `
      <div class="conv">
        <div class="panel"><h3>Cups → grams</h3>
          <select class="select" id="cvIng" aria-label="Ingredient">${DD.tools.cups.map(([n, g], i) => `<option value="${i}">${esc(n)}</option>`).join('')}</select>
          <div style="display:flex;gap:8px;margin-top:8px"><input class="input" id="cvCups" type="number" step="0.25" min="0" value="1" aria-label="Cups"><span style="align-self:center">cups</span></div>
          <div class="conv-out" id="cvOut1"></div></div>
        <div class="panel"><h3>Temperature</h3>
          <div style="display:flex;gap:8px"><input class="input" id="cvC" type="number" value="180" aria-label="Celsius"><span style="align-self:center">°C</span></div>
          <div style="display:flex;gap:8px;margin-top:8px"><input class="input" id="cvF" type="number" value="356" aria-label="Fahrenheit"><span style="align-self:center">°F</span></div>
          <p class="small muted" style="margin:10px 0 0">Gas mark ≈ (°C − 120) ÷ 14</p><div class="conv-out" id="cvGas"></div></div>
        <div class="panel"><h3>Weight & volume</h3>
          <div style="display:flex;gap:8px"><input class="input" id="cvN" type="number" value="100" aria-label="Amount">
          <select class="select" id="cvU" style="width:auto" aria-label="Unit"><option value="g">g</option><option value="oz">oz</option><option value="lb">lb</option><option value="ml">ml</option><option value="cup">cup</option><option value="tbsp">tbsp</option><option value="tsp">tsp</option><option value="floz">fl oz</option></select></div>
          <div class="conv-out" id="cvOut3"></div></div>
      </div>
      <h2 style="margin-top:30px">Handy equivalents</h2>
      <div class="table-wrap"><table class="t"><tbody>
        <tr><td><b>1 tbsp</b></td><td>3 tsp = 15 ml</td></tr><tr><td><b>1 cup (US)</b></td><td>16 tbsp = 240 ml</td></tr><tr><td><b>1 stick butter (US)</b></td><td>113 g = 8 tbsp</td></tr>
        <tr><td><b>1 oz</b></td><td>28.35 g</td></tr><tr><td><b>1 lb</b></td><td>454 g</td></tr><tr><td><b>Pinch</b></td><td>about 1/16 tsp, what you can hold between thumb and finger</td></tr>
        <tr><td><b>1 garlic clove</b></td><td>about 1 tsp minced</td></tr><tr><td><b>1 medium onion</b></td><td>about 150 g, 1 cup chopped</td></tr><tr><td><b>Juice of 1 lemon</b></td><td>about 3 tbsp / 45 ml</td></tr>
      </tbody></table></div>`,
      mount(root) {
        const $ = (s) => root.querySelector(s);
        const f1 = () => {
          const [n, g] = DD.tools.cups[$('#cvIng').value]; const c = +$('#cvCups').value || 0;
          $('#cvOut1').innerHTML = `<div><span>${fmtNum(c) || 0} cup ${esc(n.toLowerCase())}</span><b>${Math.round(c * g)} g</b></div><div><span>1 tbsp</span><b>${Math.round(g / 16)} g</b></div>`;
        };
        const gas = () => { const c = +$('#cvC').value; const gm = Math.round((c - 121) / 14); $('#cvGas').innerHTML = `<div><span>Gas mark</span><b>${c < 135 ? '½ or lower' : Math.max(1, Math.min(10, gm))}</b></div><div><span>Fan oven</span><b>${c - 20} °C</b></div>`; };
        $('#cvC').addEventListener('input', () => { $('#cvF').value = Math.round(+$('#cvC').value * 9 / 5 + 32); gas(); });
        $('#cvF').addEventListener('input', () => { $('#cvC').value = Math.round((+$('#cvF').value - 32) * 5 / 9); gas(); });
        const toBase = { g: [1, 'w'], oz: [28.3495, 'w'], lb: [453.592, 'w'], ml: [1, 'v'], cup: [240, 'v'], tbsp: [15, 'v'], tsp: [5, 'v'], floz: [29.5735, 'v'] };
        const f3 = () => {
          const n = +$('#cvN').value || 0, [k, type] = toBase[$('#cvU').value], b = n * k;
          const r = (x) => (Math.round(x * 100) / 100).toString();
          $('#cvOut3').innerHTML = type === 'w'
            ? `<div><span>grams</span><b>${r(b)} g</b></div><div><span>ounces</span><b>${r(b / 28.3495)} oz</b></div><div><span>pounds</span><b>${r(b / 453.592)} lb</b></div><div><span>kilograms</span><b>${r(b / 1000)} kg</b></div>`
            : `<div><span>milliliters</span><b>${r(b)} ml</b></div><div><span>cups</span><b>${r(b / 240)}</b></div><div><span>tablespoons</span><b>${r(b / 15)}</b></div><div><span>teaspoons</span><b>${r(b / 5)}</b></div><div><span>fluid ounces</span><b>${r(b / 29.5735)}</b></div>`;
        };
        ['#cvIng', '#cvCups'].forEach((s) => $(s).addEventListener('input', f1));
        ['#cvN', '#cvU'].forEach((s) => $(s).addEventListener('input', f3));
        f1(); gas(); f3();
      },
    };
  }
  function toolPantry() {
    return {
      title: 'World pantry',
      html: head('Toolkit', '🫙 The world pantry', 'Stock a handful of key ingredients and a whole cuisine opens up. Start with the region you love most.') +
        `<div class="learn-grid">${DD.tools.pantry.map(([r, items]) => `<div class="panel"><h3>${esc(r)}</h3><ul style="margin:0;padding-left:18px;color:var(--ink-2);font-size:.92rem">${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('')}</div>`,
    };
  }
  function toolGlossary() {
    const grid = (q) => DD.techList.filter((t) => !q || (t.name + ' ' + t.short).toLowerCase().includes(q)).map((t) => `<button class="gloss" data-act="tech" data-id="${t.id}"><span class="ico">${t.icon}</span><span><b>${esc(t.name)}</b><small>${esc(t.short.replace(/\{\{.*?\}\}|\[\[|\]\]/g, ''))}</small></span></button>`).join('');
    return {
      title: 'Technique glossary',
      html: head('Toolkit', '📖 Technique glossary', 'Every technique used in our recipes, explained step by step. You can also tap any blue word inside a recipe.') +
        `<div class="searchbox" style="max-width:420px;margin-bottom:16px"><input class="input" id="gq" type="search" placeholder="Search techniques…" aria-label="Search techniques"></div><div class="gloss-grid" id="gg">${grid('')}</div>`,
      mount(root) { root.querySelector('#gq').addEventListener('input', (e) => { root.querySelector('#gg').innerHTML = grid(e.target.value.toLowerCase().trim()); }); },
    };
  }
  function toolPath() {
    const done = DD.path.filter((p) => S.cooked[p.id]).length;
    return {
      title: "Beginner's path",
      html: head('Learn by cooking', "🧭 The Beginner's Path", `Cook these ${DD.path.length} dishes in order. Each one adds a new professional skill on top of the last. Mark each as cooked to track progress. <b>${done}/${DD.path.length} complete.</b>`) +
        `<div class="history">${DD.path.map((p, i) => {
          const d = DD.byId[p.id];
          if (!d) return '';
          const c = S.cooked[d.id];
          return `<a class="hist" href="#/dish/${d.id}" style="${c ? 'border-color:var(--green)' : ''}">
            <span class="pct" style="--p:${c ? 100 : 0};--c:var(--green);width:48px;height:48px;font-size:.85rem;flex-shrink:0"><span>${c ? '✓' : i + 1}</span></span>
            <span class="e">${d.emoji}</span>
            <span class="info"><b>${esc(d.name)}</b> <span class="muted small">${d.flag} ${fmtMin(d.total)}</span><small>${esc(p.why)}</small></span>
            <span class="tag ${c ? 'green' : ''}">${c ? 'Cooked' : DD.L.level[d.level]}</span></a>`;
        }).join('')}</div>`,
    };
  }

  /* ---------- lesson page ---------- */
  function lessonView(l) {
    const i = DD.lessons.indexOf(l);
    const prev = DD.lessons[i - 1], next = DD.lessons[i + 1];
    const done = S.lessons.includes(l.id);
    return {
      title: l.title,
      html: `<div class="lesson">${back}
        <div class="page-head"><p class="eyebrow">Lesson ${i + 1} of ${DD.lessons.length} · ${l.mins} min read</p><h1>${l.icon} ${esc(l.title)}</h1><p class="lead">${esc(l.sum)}</p></div>
        <div class="lesson-body">${l.body.map(block).join('')}</div>
        ${l.tech && l.tech.length ? `<h2>Techniques in this lesson</h2><div class="chips">${l.tech.filter((t) => DD.tech[t]).map((t) => `<button class="chip" data-act="tech" data-id="${t}">${DD.tech[t].icon} ${esc(DD.tech[t].name)}</button>`).join('')}</div>` : ''}
        ${l.practice && l.practice.length ? `<h2 style="margin-top:28px">Practice with these dishes</h2><div class="grid">${l.practice.map((id) => DD.byId[id]).filter(Boolean).map(V.card).join('')}</div>` : ''}
        <div style="text-align:center;margin-top:32px"><button class="btn lg ${done ? 'on' : 'primary'}" data-do="done">${done ? '✓ Lesson completed' : 'Mark lesson as complete'}</button></div>
        <div class="lesson-nav">${prev ? `<a class="btn ghost" href="#/learn/${prev.id}">← ${esc(prev.title)}</a>` : '<span></span>'}${next ? `<a class="btn" href="#/learn/${next.id}">${esc(next.title)} →</a>` : '<a class="btn" href="#/learn">Back to school</a>'}</div>
      </div>`,
      mount(root) {
        root.querySelector('[data-do="done"]').addEventListener('click', (e) => {
          const on = S.lessons.includes(l.id);
          S.lessons = on ? S.lessons.filter((x) => x !== l.id) : [...S.lessons, l.id];
          S.save('lessons');
          e.target.className = 'btn lg ' + (on ? 'primary' : 'on');
          e.target.textContent = on ? 'Mark lesson as complete' : '✓ Lesson completed';
          if (!on) toast(next ? `🎓 Nice! Next up: ${next.title}` : '🎓 You finished the whole course!');
        });
      },
    };
  }

  /* ---------- hub ---------- */
  V.learn = function (sub) {
    if (sub) {
      const tools = { fix: toolFix, subs: toolSubs, temps: toolTemps, heat: toolHeat, convert: toolConvert, pantry: toolPantry, glossary: toolGlossary, path: toolPath };
      if (tools[sub]) return tools[sub]();
      const l = DD.lessons.find((x) => x.id === sub);
      return l ? lessonView(l) : V.notFound();
    }
    const doneN = S.lessons.length;
    const nextL = DD.lessons.find((l) => !S.lessons.includes(l.id));
    return {
      title: 'Cooking school',
      html: `<div class="page-head"><p class="eyebrow">Cooking school</p><h1>Learn to cook like a pro</h1>
        <p class="lead">Short, practical lessons that teach the <em>why</em> behind cooking, plus tools for when things go wrong. Every lesson links to real dishes to practice.</p>
        ${nextL ? `<a class="btn primary lg" href="#/learn/${nextL.id}">${doneN ? 'Continue' : 'Start'}: ${esc(nextL.title)} →</a>` : '<span class="tag green">🎓 Course complete!</span>'}
      </div>
      <div class="section-title"><h2>Foundations course</h2><span class="line"></span><span class="small muted">${doneN}/${DD.lessons.length} done</span></div>
      <div class="learn-grid">${DD.lessons.map((l, i) => `<a class="lesson-card ${S.lessons.includes(l.id) ? 'done' : ''}" href="#/learn/${l.id}"><span class="ico">${l.icon}</span><span><span class="n">Lesson ${i + 1} · ${l.mins} min</span><h3>${esc(l.title)}</h3><p>${esc(l.sum)}</p></span></a>`).join('')}</div>
      <div class="section-title"><h2>Kitchen toolkit</h2><span class="line"></span></div>
      <div class="tool-grid">${TOOLS.map(([id, ico, t, s]) => `<a class="tool" href="#/learn/${id}"><span class="ico">${ico}</span><b>${t}</b><small>${s}</small></a>`).join('')}</div>
      <div class="section-title"><h2>Most-used techniques</h2><span class="line"></span><a class="small" href="#/learn/glossary" style="color:var(--accent);font-weight:600;text-decoration:none">All ${DD.techList.length} →</a></div>
      <div class="gloss-grid">${DD.techList.map((t) => [t, DD.dishes.filter((d) => d.techs.includes(t.id)).length]).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([t, n]) => `<button class="gloss" data-act="tech" data-id="${t.id}"><span class="ico">${t.icon}</span><span><b>${esc(t.name)}</b><small>Used in ${n} dishes</small></span></button>`).join('')}</div>`,
    };
  };
})();
