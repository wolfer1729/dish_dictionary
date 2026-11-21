/* ==========================================================================
   Dish Dictionary — cook mode, kitchen timers, voice, wake lock
   ========================================================================== */
'use strict';
(function () {
  const { esc, rich, plain, fmtMin, toast, Store } = U;

  /* ---------------- audio alarm ---------------- */
  let actx = null;
  function audio() {
    try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); } catch (e) { actx = null; }
    return actx;
  }
  function beep() {
    const a = audio();
    if (!a) return;
    [0, 0.18, 0.36].forEach((t) => {
      const o = a.createOscillator(), g = a.createGain();
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, a.currentTime + t);
      g.gain.exponentialRampToValueAtTime(0.35, a.currentTime + t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, a.currentTime + t + 0.15);
      o.connect(g).connect(a.destination);
      o.start(a.currentTime + t); o.stop(a.currentTime + t + 0.16);
    });
  }
  function askNotify() {
    if ('Notification' in window && Notification.permission === 'default') { try { Notification.requestPermission(); } catch (e) {} }
  }

  /* ---------------- timers ---------------- */
  const CIRC = 2 * Math.PI * 17;
  const mmss = (ms) => { const s = Math.ceil(ms / 1000), h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : m) + ':' + String(r).padStart(2, '0'); };
  const baseTitle = () => document.title.replace(/^⏰ .*? · /, '');

  const Timers = (window.Timers = {
    list: [],
    tick: null,
    alarmT: null,
    start(label, min) {
      audio(); askNotify();
      const ms = min * 60000;
      this.list.push({ id: String(Date.now() + Math.random()), label, total: ms, end: Date.now() + ms, paused: null, done: false });
      if (!this.tick) this.tick = setInterval(() => this.update(), 250);
      this.render();
      toast(`⏲ ${fmtMin(min)} timer started`);
    },
    left(t) { return t.paused != null ? t.paused : Math.max(0, t.end - Date.now()); },
    update() {
      let ringing = false;
      for (const t of this.list) {
        if (!t.done && t.paused == null && this.left(t) <= 0) {
          t.done = true; t.doneAt = Date.now();
          this.render();
          if ('Notification' in window && Notification.permission === 'granted') { try { new Notification('⏰ Timer done', { body: t.label }); } catch (e) {} }
          if (navigator.vibrate) navigator.vibrate([400, 200, 400, 200, 400]);
        }
        if (t.done && Date.now() - t.doneAt < 90000) ringing = true;
      }
      if (ringing && !this.alarmT) { beep(); this.alarmT = setInterval(beep, 1400); }
      if (!ringing && this.alarmT) { clearInterval(this.alarmT); this.alarmT = null; }
      const dock = document.getElementById('timerDock');
      this.list.forEach((t) => {
        const el = dock.querySelector(`[data-tid="${t.id}"]`);
        if (!el) return;
        const l = this.left(t);
        el.querySelector('b').textContent = t.done ? "Time's up!" : mmss(l);
        el.querySelector('.fg').style.strokeDashoffset = String(CIRC * (1 - l / t.total));
      });
      const active = this.list.filter((t) => !t.done).sort((a, b) => this.left(a) - this.left(b))[0];
      const done = this.list.find((t) => t.done);
      const bt = baseTitle();
      document.title = done ? `⏰ DONE · ${bt}` : active ? `⏰ ${mmss(this.left(active))} · ${bt}` : bt;
      if (!this.list.length) { clearInterval(this.tick); this.tick = null; }
    },
    render() {
      const dock = document.getElementById('timerDock');
      dock.innerHTML = this.list.map((t) => `
        <div class="timer ${t.done ? 'done' : ''} ${t.paused != null ? 'paused' : ''}" data-tid="${t.id}" role="timer">
          <svg class="ring" viewBox="0 0 40 40" aria-hidden="true"><circle class="bg" cx="20" cy="20" r="17"/><circle class="fg" cx="20" cy="20" r="17" stroke-dasharray="${CIRC}" stroke-dashoffset="0"/></svg>
          <div class="t"><b>${t.done ? "Time's up!" : mmss(this.left(t))}</b><small title="${esc(t.label)}">${esc(t.label)}</small></div>
          ${t.done ? '' : `<button data-t="add" title="Add 1 minute">+1</button><button data-t="pause" title="${t.paused != null ? 'Resume' : 'Pause'}">${t.paused != null ? '▶' : '❚❚'}</button>`}
          <button data-t="x" title="${t.done ? 'Dismiss' : 'Cancel'}">${t.done ? '✓' : '✕'}</button>
        </div>`).join('');
      this.update();
    },
    act(id, a) {
      const t = this.list.find((x) => x.id === id);
      if (!t) return;
      if (a === 'x') this.list = this.list.filter((x) => x !== t);
      else if (a === 'add') { if (t.paused != null) t.paused += 60000; else t.end += 60000; t.total += 60000; }
      else if (a === 'pause') { if (t.paused != null) { t.end = Date.now() + t.paused; t.paused = null; } else t.paused = this.left(t); }
      this.render();
    },
  });
  document.getElementById('timerDock').addEventListener('click', (e) => {
    const b = e.target.closest('[data-t]');
    if (b) Timers.act(b.closest('[data-tid]').dataset.tid, b.dataset.t);
  });

  /* ---------------- cook mode ---------------- */
  V.cook = function (id) {
    const d = DD.byId[id];
    if (!d) return V.notFound();
    const serv = S.servings[d.id] || d.serves;
    const scale = serv / d.serves;
    const steps = [{ k: 'mise' }, ...d.steps.map((s) => ({ k: 'step', s })), { k: 'done' }];
    let idx = 0, speaking = Store.get('cookSpeak', false), fontScale = Store.get('cookScale', 1), wake = null;
    const seen = new Set([0]);
    let cleanup = [];

    function stepHTML() {
      const st = steps[idx];
      if (st.k === 'mise') {
        return `<div class="cook-step-n">Before you start</div><h2>Mise en place</h2>
          <p class="cook-text">Professional cooks never start the heat until everything is measured, chopped and within reach. Read every step once, then gather and prep the ingredients below. It's ${fmtMin(d.prep)} of prep for <b>${serv} ${serv === 1 ? 'serving' : 'servings'}</b>.</p>
          <div class="mise">${V.ingHTML(d, scale)}</div>
          ${d.equip && d.equip.length ? `<div class="callout info"><b>Equipment</b>${d.equip.map(esc).join(' · ')}</div>` : ''}
          ${d.rest ? `<div class="callout warn"><b>Plan ahead</b>This recipe includes ${fmtMin(d.rest)} of waiting (marinating, resting or proving). Check the steps for when it happens.</div>` : ''}`;
      }
      if (st.k === 'done') {
        const c = S.cooked[d.id];
        return `<div class="cook-finish"><div class="big">${d.emoji}</div><div class="cook-step-n">Finished</div><h2>Bon appétit!</h2>
          <p class="cook-text">You just cooked <b>${esc(d.name)}</b> from ${d.flag} ${esc(d.country)}.</p>
          ${d.serve ? `<div class="callout tip" style="text-align:left"><b>Serve it with</b>${rich(d.serve)}</div>` : ''}
          <div class="btn-row" style="justify-content:center;margin-top:24px">
            <button class="btn primary lg" data-act="cooked" data-id="${d.id}">${c ? '✓ Log it again' : '🛂 Rate it & get your stamp'}</button>
            <a class="btn lg" href="#/dish/${d.id}">Back to recipe</a>
          </div></div>`;
      }
      const [t, txt, tm, tip] = st.s;
      return `<div class="cook-step-n">Step ${idx} of ${d.steps.length}</div><h2>${esc(t)}</h2>
        <p class="cook-text">${rich(txt)}</p>
        ${tm ? `<button class="timer-btn" style="font-size:1rem;padding:10px 18px" data-act="timer" data-min="${tm}" data-label="${esc(d.name + ': ' + t)}">⏲ Start ${fmtMin(tm)} timer</button>` : ''}
        ${tip ? `<div class="callout tip"><b>Pro tip</b>${rich(tip)}</div>` : ''}`;
    }

    function speak() {
      if (!('speechSynthesis' in window)) return;
      speechSynthesis.cancel();
      if (!speaking) return;
      const st = steps[idx];
      let text;
      if (st.k === 'mise') text = 'Mise en place. Gather and prepare: ' + d.items.map((i) => U.qtyStr(i[0], i[1], scale) + ' ' + i[2]).join(', ');
      else if (st.k === 'done') text = 'All done. Bon appétit!';
      else text = `Step ${idx}. ${st.s[0]}. ${plain(st.s[1])}` + (st.s[3] ? ` Pro tip: ${plain(st.s[3])}` : '');
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 0.98;
      speechSynthesis.speak(u);
    }

    function render(root) {
      root.querySelector('.cook-inner').outerHTML = `<div class="cook-inner" style="--cook-scale:${fontScale}">${stepHTML()}</div>`;
      root.querySelector('.cook-progress div').style.width = (idx / (steps.length - 1)) * 100 + '%';
      root.querySelector('.cook-dots').innerHTML = steps.map((_, i) => `<button class="${i === idx ? 'on' : seen.has(i) ? 'seen' : ''}" data-go="${i}" aria-label="Go to step ${i}"></button>`).join('');
      root.querySelector('[data-c="prev"]').disabled = idx === 0;
      const nx = root.querySelector('[data-c="next"]');
      nx.textContent = idx === 0 ? "I'm ready. Let's cook →" : idx === steps.length - 2 ? 'Finish 🎉' : idx === steps.length - 1 ? 'Exit' : 'Next step →';
      root.querySelector('.cook-main').scrollTop = 0;
      speak();
    }
    function go(root, i) {
      if (i < 0) return;
      if (i >= steps.length) { location.hash = '#/dish/' + d.id; return; }
      idx = i; seen.add(i); render(root);
    }

    async function lock() {
      try { if ('wakeLock' in navigator) wake = await navigator.wakeLock.request('screen'); } catch (e) { wake = null; }
    }

    return {
      title: 'Cooking: ' + d.name,
      html: `<div class="cook" role="region" aria-label="Cook mode">
        <div class="cook-top">
          <a class="icon-btn" href="#/dish/${d.id}" aria-label="Exit cook mode">✕</a>
          <div class="ttl"><b>${d.emoji} ${esc(d.name)}</b><small>${d.flag} ${serv} servings · screen stays awake</small></div>
          <button class="icon-btn" data-c="smaller" aria-label="Smaller text">A−</button>
          <button class="icon-btn" data-c="bigger" aria-label="Bigger text">A+</button>
          <button class="icon-btn" data-c="speak" aria-pressed="${speaking}" title="Read steps aloud">${speaking ? '🔊' : '🔈'}</button>
          <button class="btn sm" data-c="ing">🧾 Ingredients</button>
        </div>
        <div class="cook-progress"><div></div></div>
        <div class="cook-main"><div class="cook-inner"></div><div class="cook-dots"></div></div>
        <div class="cook-bottom"><button class="btn" data-c="prev">← Back</button><button class="btn primary" data-c="next">Next →</button></div>
      </div>
      <aside class="cook-drawer" aria-label="Ingredients">
        <div style="display:flex;justify-content:space-between;align-items:center"><h3 style="margin:0">Ingredients</h3><button class="icon-btn" data-c="ing" aria-label="Close">✕</button></div>
        <p class="small muted">${serv} servings</p>${V.ingHTML(d, scale)}
      </aside>`,
      mount(root) {
        document.body.classList.add('cooking');
        render(root);
        lock();
        const onVis = () => { if (document.visibilityState === 'visible') lock(); };
        document.addEventListener('visibilitychange', onVis);
        const onKey = (e) => {
          if ((e.target && e.target.matches && e.target.matches('input, textarea')) || document.querySelector('.modal-wrap')) return;
          if (e.key === 'ArrowRight' || e.key === 'PageDown') { e.preventDefault(); go(root, idx + 1); }
          else if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); go(root, idx - 1); }
          else if (e.key === 'Escape') location.hash = '#/dish/' + d.id;
        };
        document.addEventListener('keydown', onKey);
        let sx = null, sy = null;
        const main = root.querySelector('.cook-main');
        main.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
        main.addEventListener('touchend', (e) => {
          if (sx == null) return;
          const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
          if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) go(root, idx + (dx < 0 ? 1 : -1));
          sx = null;
        });
        root.addEventListener('click', (e) => {
          const g = e.target.closest('[data-go]');
          if (g) return go(root, +g.dataset.go);
          const b = e.target.closest('[data-c]');
          if (!b) return;
          const c = b.dataset.c;
          if (c === 'next') go(root, idx + 1);
          else if (c === 'prev') go(root, idx - 1);
          else if (c === 'ing') root.querySelector('.cook-drawer').classList.toggle('open');
          else if (c === 'bigger' || c === 'smaller') {
            fontScale = Math.max(0.8, Math.min(1.8, fontScale + (c === 'bigger' ? 0.15 : -0.15)));
            Store.set('cookScale', fontScale);
            root.querySelector('.cook-inner').style.setProperty('--cook-scale', fontScale);
          } else if (c === 'speak') {
            if (!('speechSynthesis' in window)) return toast('Read-aloud is not supported in this browser');
            speaking = !speaking; Store.set('cookSpeak', speaking);
            b.textContent = speaking ? '🔊' : '🔈'; b.setAttribute('aria-pressed', speaking);
            toast(speaking ? '🔊 Steps will be read aloud' : '🔈 Read-aloud off');
            speak();
          }
        });
        cleanup = [() => document.removeEventListener('keydown', onKey), () => document.removeEventListener('visibilitychange', onVis)];
      },
      unmount() {
        document.body.classList.remove('cooking');
        cleanup.forEach((f) => f());
        if ('speechSynthesis' in window) speechSynthesis.cancel();
        if (wake) { wake.release().catch(() => {}); wake = null; }
      },
    };
  };
})();
