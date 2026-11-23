// Replace accidental backspace characters (0x08) with the literal regex escape \b.
const fs = require('fs');
for (const f of process.argv.slice(2)) {
  const s = fs.readFileSync(f, 'utf8');
  const n = (s.match(/\x08/g) || []).length;
  if (n) fs.writeFileSync(f, s.replace(/\x08/g, '\\b'));
  console.log(f, 'backspaces fixed:', n);
}
