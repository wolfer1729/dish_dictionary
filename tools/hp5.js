const load = require('./load'); const fs = require('fs'), path = require('path');
const ROOT = process.argv[2]; const { DD } = load(ROOT);
const ids = (process.argv[3] || 'js/data/india-more-5.js,js/data/world-more-5.js').split(',').flatMap((f) => [...fs.readFileSync(path.join(ROOT, f), 'utf8').matchAll(/id: '([a-z0-9-]+)'/g)].map((m) => m[1]));
for (const id of ids) { const d = DD.byId[id]; const p = DD.nutrition(d).per; const hp = d.diet.includes('high-protein'); const pk = p.protein * 4 / p.kcal;
  if (hp || p.protein >= 20) console.log(id.padEnd(22), hp ? 'HP' : '--', p.protein.toFixed(1).padStart(5), 'g', (pk * 100).toFixed(0) + '% kcal', d.course); }
