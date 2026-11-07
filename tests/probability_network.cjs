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
const edges=network.connections();
assert.equal(new Set(edges.map(e=>e.from+'/'+e.to)).size,edges.length);
const reached=new Set([nodes[0].id]);
for(let i=0;i<nodes.length;i++) for(const edge of edges){
  assert(byId.has(edge.from) && byId.has(edge.to));
  assert.notEqual(edge.from,edge.to);
  assert(edge.reason.length>8);
  if(reached.has(edge.from)||reached.has(edge.to)){reached.add(edge.from);reached.add(edge.to);}
}
assert.equal(reached.size,36,'All section nodes must belong to one connected network');
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
assert(host.innerHTML.includes('pn-connections'));
host.onclick({type:'click',target:{closest:s=>s==='[data-pn-node]'?{dataset:{pnNode:'1.2'}}:null}});
assert(host.innerHTML.includes('计数方法用于计算古典概率'));
assert(host.innerHTML.includes('data-pn-node="1.3"'));
console.log(`PASS: 36 connected section nodes, ${edges.length} explained connections, 4 application paths, links, neighbor exploration and keyboard interaction.`);
