// Per-ingredient calorie breakdown for named dishes.
const load = require('./load');
const ROOT = process.argv[2];
const { DD } = load(ROOT);
for (const id of process.argv.slice(3)) {
  const d = DD.byId[id]; if (!d) { console.log('no', id); continue; }
  console.log(`\n== ${id} (serves ${d.serves}) total per serving ${Math.round(DD.nutrition(d).per.kcal)} kcal, Na ${Math.round(DD.nutrition(d).per.sodium)}`);
  for (const it of d.items) {
    const one = { items: [it], serves: d.serves };
    const n = DD.nutrition(one);
    const f = DD.NUT.find(it[2]);
    if (n.per.kcal >= 15 || n.per.sodium >= 150) console.log(`  ${String(Math.round(n.per.kcal)).padStart(5)} kcal  Na ${String(Math.round(n.per.sodium)).padStart(5)}  | ${it[0]} ${it[1] || '#'} ${it[2]}${it[3] ? ' (' + it[3] + ')' : ''}  -> ${f ? f.row[0].source.slice(0, 40) : '??'}`);
  }
}
