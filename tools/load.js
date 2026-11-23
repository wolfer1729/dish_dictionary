// Loads the app's data into a Node VM (same as the browser order in index.html). Returns { DD, U, ctx }.
const fs = require('fs'), path = require('path'), vm = require('vm');
module.exports = function load(root, extra = []) {
  const ls = {};
  const ctx = { console, window: {}, localStorage: { getItem: (k) => ls[k] || null, setItem: (k, v) => { ls[k] = v; }, removeItem: (k) => { delete ls[k]; } }, document: { dispatchEvent() {}, getElementById() { return null; }, addEventListener() {}, documentElement: { setAttribute() {}, classList: { toggle() {} } } }, CustomEvent: function () {}, navigator: {}, location: { protocol: 'file:' }, setTimeout, clearTimeout };
  ctx.window = ctx; vm.createContext(ctx);
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const files = [...html.matchAll(/<script src="([^"]+)"/g)].map((m) => m[1]).filter((f) => /core\.js|\/data\/|nutrition/.test(f)).concat(extra);
  for (const f of files) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
  return { DD: ctx.DD, U: ctx.U, ctx, files };
};
