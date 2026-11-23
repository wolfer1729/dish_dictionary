const load = require('./load'); const fs = require('fs'), path = require('path');
const ROOT = process.argv[2]; const { DD } = load(ROOT);
const ids = (process.argv[3] || 'js/data/india-more-5.js,js/data/world-more-5.js').split(',').flatMap((f) => [...fs.readFileSync(path.join(ROOT, f), 'utf8').matchAll(/id: '([a-z0-9-]+)'/g)].map((m) => m[1]));
const rows = ids.map((id) => { const d = DD.byId[id]; const n = DD.nutrition(d); const p = n.per; return [id, d.serves, Math.round(p.kcal), p.protein.toFixed(1), Math.round(p.carbs), p.fat.toFixed(1), p.fiber.toFixed(1), Math.round(p.sugar), Math.round(p.sodium), Math.round(n.cover * 100) + '%', d.course, (d.tags.includes('five') ? 'five ' : '') + (d.tags.includes('quick') ? 'quick' : '')]; });
rows.sort((a, b) => b[2] - a[2]);
rows.forEach((r) => console.log(r.map((x, i) => String(x).padEnd(i ? 6 : 22)).join(' ')));
