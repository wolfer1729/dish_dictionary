const fs = require('fs'), path = require('path');
const [ROOT, SP] = process.argv.slice(2);
const ids = ['js/data/india-more-9.js', 'js/data/world-more-10.js'].flatMap((f) => [...fs.readFileSync(path.join(ROOT, f), 'utf8').matchAll(/id: '([a-z0-9-]+)'/g)].map((m) => m[1]));
let s = fs.readFileSync(path.join(SP, 'mobile-audit.js'), 'utf8');
s = s.replace(/const ROUTES = \[[\s\S]*?\n\];/, 'const ROUTES = ' + JSON.stringify(ids.map((id) => [id, '#/dish/' + id])) + ';');
s = s.replace("await send('Page.navigate', { url: base + hash }); await sleep(1300);", "await send('Page.navigate', { url: base + hash }); await sleep(700);");
fs.writeFileSync(path.join(SP, 'audit-dishes5.js'), s); console.log(ids.length, 'routes');
