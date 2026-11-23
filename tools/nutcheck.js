// Checks nutrition coverage and sanity across every dish.
const fs = require('fs'), path = require('path');
const load = require('./load');
const ROOT = process.argv[2], OUT = process.argv[3];
const { DD } = load(ROOT);
const miss = new Map(), map = [];
const seen = new Set();
for (const d of DD.dishes) {
  const n = DD.nutrition(d);
  n.miss.forEach((m) => miss.set(m, (miss.get(m) || 0) + 1));
  for (const it of d.items) {
    const k = String(it[2]).toLowerCase();
    if (seen.has(k)) continue; seen.add(k);
    const f = DD.NUT.find(it[2]);
    map.push(`${k}  =>  ${f ? f.row[0].source.slice(0, 60) + (f.cooked ? ' [cooked]' : '') : '??'}`);
  }
}
fs.writeFileSync(path.join(OUT, 'nutmap.txt'), map.join('\n'));
console.log('UNMATCHED (with quantity):', miss.size ? [...miss.entries()].sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} (${v})`).join(' | ') : 'none');
const f = (n) => `${String(Math.round(n.per.kcal)).padStart(5)} kcal  P ${n.per.protein.toFixed(1).padStart(5)}  C ${n.per.carbs.toFixed(0).padStart(4)}  F ${n.per.fat.toFixed(1).padStart(5)}  Fi ${n.per.fiber.toFixed(1).padStart(4)}  Su ${n.per.sugar.toFixed(0).padStart(3)}  Na ${String(Math.round(n.per.sodium)).padStart(5)}  ~${Math.round(n.weight)}g  cover ${Math.round(n.cover * 100)}%`;
const SAMPLE = ['paneer-butter-masala', 'dal-makhani', 'masala-dosa', 'chole-bhature', 'palak-paneer', 'rajma-chawal', 'aloo-paratha', 'poha', 'idli', 'gulab-jamun', 'jalebi', 'samosa', 'pav-bhaji', 'butter-chicken', 'hyderabadi-biryani', 'veg-biryani', 'margherita-pizza', 'spaghetti-carbonara', 'pad-thai', 'greek-salad', 'hummus', 'falafel', 'guacamole', 'french-fries', 'tiramisu', 'masala-chai', 'mango-lassi', 'cold-coffee', 'miso-soup', 'tomato-soup', 'fish-and-chips', 'pani-puri', 'mac-and-cheese', 'kimchi', 'sushi'];
console.log('\nSAMPLE DISHES (per serving):');
for (const id of SAMPLE) { const d = DD.byId[id]; if (d) console.log(id.padEnd(22), `x${d.serves}`.padEnd(4), f(DD.nutrition(d))); }
const all = DD.dishes.map((d) => [d, DD.nutrition(d)]).sort((a, b) => b[1].per.kcal - a[1].per.kcal);
console.log('\nHIGHEST kcal:'); all.slice(0, 12).forEach(([d, n]) => console.log(d.id.padEnd(30), `x${d.serves}`.padEnd(4), f(n)));
console.log('\nLOWEST kcal:'); all.slice(-10).forEach(([d, n]) => console.log(d.id.padEnd(30), `x${d.serves}`.padEnd(4), f(n)));
console.log('\nHIGHEST sodium:'); [...all].sort((a, b) => b[1].per.sodium - a[1].per.sodium).slice(0, 8).forEach(([d, n]) => console.log(d.id.padEnd(30), `x${d.serves}`.padEnd(4), f(n)));
const ks = all.map(([, n]) => n.per.kcal).sort((a, b) => a - b);
console.log('\nkcal median', Math.round(ks[ks.length >> 1]), '| flags:', Object.keys(DD.NUT.flags).map((k) => k + '=' + all.filter(([, n]) => n.flags.includes(k)).length).join(' '));
const lowCover = all.filter(([, n]) => n.cover < 0.9);
console.log('dishes under 90% matched:', lowCover.length, lowCover.slice(0, 10).map(([d, n]) => d.id + ':' + n.miss.join('/')).join(' | '));
