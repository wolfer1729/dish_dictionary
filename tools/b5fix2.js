// Removes wrong batch-5 retry photos; stores full Commons titles (from the URL) in the reject list.
const fs = require('fs'), path = require('path');
const ROOT = process.argv[2];
const pf = path.join(ROOT, 'js/data/photos.js');
let s = fs.readFileSync(pf, 'utf8');
const m = s.match(/DD\.PHOTOS = (\{[\s\S]*?\});\n/); const P = JSON.parse(m[1]);
const bad = ['bubble-and-squeak', 'buddhas-delight', 'ema-datshi', 'jackfruit-rendang', 'khao-soi', 'llapingachos', 'mofongo', 'nadru-yakhni', 'salmorejo', 'soupe-au-pistou'];
const rf = path.join(__dirname, 'rejected.json');
const rej = new Set(JSON.parse(fs.readFileSync(rf, 'utf8')));
for (const id of bad) {
  if (!P[id]) { console.log('no photo', id); continue; }
  rej.add(decodeURIComponent(P[id].u.split('/wiki/')[1]).replace(/_/g, ' '));
  delete P[id]; try { fs.unlinkSync(path.join(ROOT, 'assets/photos', id + '.jpg')); } catch (e) {}
}
fs.writeFileSync(rf, JSON.stringify([...rej], null, 1));
s = s.replace(m[0], 'DD.PHOTOS = ' + JSON.stringify(Object.fromEntries(Object.keys(P).sort().map((k) => [k, P[k]]))).replace(/\},"/g, '},\n"') + ';\n');
fs.writeFileSync(pf, s);
console.log('removed', bad.length, '| rejected list', rej.size, '| photos now', Object.keys(P).length);
// orphan check: every photo file referenced exists, no stray batch files
const missing = Object.entries(P).filter(([, v]) => !fs.existsSync(path.join(ROOT, v.f))).map(([k]) => k);
const files = fs.readdirSync(path.join(ROOT, 'assets/photos')).filter((f) => f.endsWith('.jpg')).map((f) => f.slice(0, -4));
const stray = files.filter((f) => !P[f]);
console.log('missing files:', missing.join(',') || 'none', '| stray files:', stray.join(',') || 'none');
