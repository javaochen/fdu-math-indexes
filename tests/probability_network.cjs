/* Data, accessibility and interaction checks for the probability opening page. */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'site/assets/probability-network.js'), 'utf8'), context);
const network = context.window.ProbabilityNetwork;
const meta = JSON.parse(fs.readFileSync(path.join(root, 'site/data/books.json'), 'utf8')).books.find(b=>b.id==='gailv');
const {nodes, byId} = network.model(meta);
assert.equal(nodes.length, 36);
assert.equal(new Set(nodes.map(n=>n.id)).size, 36);
for (const app of network.applications) {
  for (const [id, reason] of app.steps) { assert(byId.has(id), id); assert(reason.length>5); }
  const html = network.render(meta, app.id);
  assert.equal((html.match(/class="pn-node[ "]/g)||[]).length, 36);
  assert.equal((html.match(/data-pn-application=/g)||[]).length, 4);
  assert(html.includes(`data-pn-app="${app.id}"`));
  assert(html.includes('aria-live="polite"'));
  assert(html.includes('chapter-2/exercises'));
  assert(html.includes('chapter-5/exercises'));
  assert(!html.includes('undefined'));
}
const host = { innerHTML:'', querySelector(selector) {
  if (selector === '.pn-home') return {dataset:{pnApp:this.innerHTML.match(/data-pn-app="([^"]+)"/)[1]}};
  return {focus(){}};
}};
network.mount(host, meta);
host.onclick({type:'click',target:{closest:s=>s==='[data-pn-node]'?{dataset:{pnNode:'5.3'}}:null}});
assert(host.innerHTML.includes('data-pn-selected="5.3"'));
assert(host.innerHTML.includes('href="#/gailv/5.3"'));
host.onclick({type:'click',target:{closest:s=>s==='[data-pn-application]'?{dataset:{pnApplication:'normal'}}:null}});
assert(host.innerHTML.includes('data-pn-app="normal"'));
assert(host.innerHTML.includes('data-pn-selected="4.3"'));
let prevented = false;
host.onkeydown({type:'keydown',key:'Enter',preventDefault(){prevented=true;},target:{closest:s=>s==='[data-pn-node]'?{dataset:{pnNode:'9.2'}}:null}});
assert(prevented);
assert(host.innerHTML.includes('data-pn-selected="9.2"'));
assert(host.innerHTML.includes('href="#/gailv/9.2"'));
console.log('PASS: 36 section nodes, 4 application paths, valid links, exercise entries, selection and keyboard interaction.');
