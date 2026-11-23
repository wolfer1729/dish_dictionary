// Registers batch-11 files, normalises methods, fixes labels, and adds the new dishes to regional families.
const fs = require('fs'), path = require('path');
const [ROOT, SP] = process.argv.slice(2);
const edit = (f, a, b, l) => { const p = path.isAbsolute(f) ? f : path.join(ROOT, f); const s = fs.readFileSync(p, 'utf8'); if (s.includes(b)) return console.log('already', l); if (!s.includes(a)) throw new Error('not found: ' + l); fs.writeFileSync(p, s.replace(a, b)); console.log('ok', l); };
const FILES = ['js/data/india-more-9.js', 'js/data/world-more-10.js'];
edit('index.html', '  <script src="js/data/regional.js"></script>', FILES.map((f) => `  <script src="${f}"></script>`).join('\n') + '\n  <script src="js/data/regional.js"></script>', 'index');
edit('sw.js', "'js/data/regional.js',", FILES.map((f) => `'${f}'`).join(', ') + ", 'js/data/regional.js',", 'sw');
edit('sw.js', "const CACHE = 'dd-v24';", "const CACHE = 'dd-v25';", 'sw ver');
edit(path.join(SP, 'validate.js'), "'js/data/regional.js', 'js/learn-data.js']", FILES.map((f) => `'${f}'`).join(', ') + ", 'js/data/regional.js', 'js/learn-data.js']", 'validator files');
for (const f of FILES) {
  const p = path.join(ROOT, f); let s = fs.readFileSync(p, 'utf8');
  s = s.replace(/methods: \[([^\]]*)\]/g, (all, inner) => 'methods: [' + [...new Set(inner.split(',').map((x) => x.trim()).filter(Boolean).map((x) => x === "'shallow-fry'" ? "'saute'" : x === "'boil'" ? "'simmer'" : x))].join(', ') + ']');
  fs.writeFileSync(p, s);
}
edit('js/data/india-more-9.js', 'tossed in a sticky red sauce of chili, garlic, ketchup and honey-free sweetener, with sesame.', 'tossed in a sticky red sauce of chili, garlic, ketchup and brown sugar, with sesame.', 'dragon potato desc');
edit('js/data/world-more-6.js', "X(C('United States', '🇺🇸', 'Oceania', { area: 'Hawaii' }), { id: 'haupia'", "X(C('Hawaiʻi (USA)', '🌺', 'Oceania'), { id: 'haupia'", 'haupia label');

const IC = ['veg-manchurian', 'schezwan-fried-rice', 'triple-schezwan-rice', 'american-chopsuey', 'chilli-mushroom', 'chilli-garlic-noodles', 'paneer-65', 'baby-corn-manchurian', 'dragon-potato', 'veg-lollipop', 'chilli-soya-chunks', 'hot-garlic-veg', 'schezwan-chutney', 'chinese-bhel', 'lemon-coriander-soup'];
const block = `  /* ---------------- batch 11 ---------------- */
  F('toffee', 'Toffee, brittle & candy', ['hokey-pokey', 'peanut-chikki', 'brigadeiros', 'bal-mithai'], [
    ['Scotland', 'Tablet: crumbly sugar-butter-condensed-milk fudge.'],
    ['Mexico', 'Cajeta candies and alegría (amaranth-honey bars).'],
  ]);
  ADD('indo-chinese', ${JSON.stringify(IC).replace(/"/g, "'")});
  ADD('fried-rice', ['schezwan-fried-rice', 'triple-schezwan-rice']);
  ADD('noodles', ['american-chopsuey', 'chilli-garlic-noodles']);
  ADD('paneer', ['paneer-65']);
  ADD('chutney', ['schezwan-chutney', 'pikliz']);
  ADD('chaat', ['chinese-bhel']);
  ADD('veg-soups', ['lemon-coriander-soup']);
  ADD('samosa', ['aloo-pie']);
  ADD('fritters', ['pholourie']);
  ADD('stuffed-flatbreads', ['dhalpuri-roti']);
  ADD('chole', ['dhalpuri-roti']);
  ADD('fried-dough-sweets', ['trini-kurma', 'malasadas', 'firi-firi']);
  ADD('bakery-breads', ['coconut-bake', 'johnnycake', 'fairy-bread', 'pumpkin-scones', 'rewena-bread']);
  ADD('fruit-pies', ['gizzada']);
  ADD('cassava', ['bammy', 'vakalavalava']);
  ADD('bean-stews', ['ital-stew']);
  ADD('custards', ['sweet-potato-pudding', 'habichuelas-con-dulce', 'tembleque', 'boniatillo']);
  ADD('porridge', ['funchi', 'cou-cou']);
  ADD('corn-breads', ['funchi']);
  ADD('okra', ['cou-cou']);
  ADD('dips', ['avocado-smash']);
  ADD('pancakes', ['pikelets']);
  ADD('cookies', ['afghan-biscuits', 'louise-slice']);
  ADD('meringue', ['louise-slice']);
  ADD('cheese-melts', ['cheese-rolls']);
  ADD('greens', ['palusami', 'rourou']);
  ADD('rice-cakes', ['butter-mochi']);

  /* ---------------- index ---------------- */`;
const rf = path.join(ROOT, 'js/data/regional.js');
let r = fs.readFileSync(rf, 'utf8');
if (!r.includes('batch 11 ----')) { r = r.replace('  /* ---------------- index ---------------- */', block); fs.writeFileSync(rf, r); console.log('ok families'); }
const ids = FILES.flatMap((f) => [...fs.readFileSync(path.join(ROOT, f), 'utf8').matchAll(/id: '([a-z0-9-]+)'/g)].map((m) => m[1]));
const all = fs.readFileSync(path.join(SP, 'all-ids.txt'), 'utf8').split(/\s+/);
console.log('new ids', ids.length, '| duplicates:', ids.filter((i) => all.includes(i)).join(',') || 'none', '| without family:', ids.filter((id) => !block.includes(`'${id}'`)).join(',') || 'none');
