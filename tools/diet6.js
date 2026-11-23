const fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const change = { 'bajre-ki-khichdi': -1, 'nimona': -1, 'avarekalu-saaru': -1, 'gallo-pinto': -1, 'strukli': 1 };
for (const f of ['js/data/india-more-6.js', 'js/data/world-more-6.js']) {
  const p = path.join(ROOT, f); let s = fs.readFileSync(p, 'utf8');
  for (const [id, dir] of Object.entries(change)) {
    const i = s.indexOf(`id: '${id}'`); if (i < 0) continue;
    const j = s.indexOf('diet: [', i), k = s.indexOf(']', j);
    let arr = s.slice(j + 7, k).split(',').map((x) => x.trim()).filter(Boolean);
    arr = arr.filter((x) => x !== "'high-protein'"); if (dir > 0) arr.push("'high-protein'");
    s = s.slice(0, j + 7) + arr.join(', ') + s.slice(k); console.log(id, '->', arr.join(', '));
  }
  fs.writeFileSync(p, s);
}
