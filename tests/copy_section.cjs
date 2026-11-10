/* Run: node tests/copy_section.cjs
 * Checks the "复制本小节" action against the generated site data with a small DOM stub.
 * This checks the copy payload and wiring, not CSS layout.
 */
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const site = path.join(root, "site");
const readJSON = (name) => JSON.parse(fs.readFileSync(path.join(site, "data", name), "utf8"));
const fanhan = readJSON("fanhan.json");
const findSection = (id) => fanhan.chapters.flatMap((ch) => ch.sections).find((s) => s.id === id);

class Element {
  constructor() {
    this.innerHTML = "";
    this.dataset = {};
    this.events = {};
    this.attributes = {};
    this.hidden = false;
    this.disabled = false;
    this.value = "";
    this.scrollTop = 0;
    this.clientHeight = 800;
    const names = new Set();
    this.classList = {
      add: (...xs) => xs.forEach((x) => names.add(x)),
      remove: (...xs) => xs.forEach((x) => names.delete(x)),
      contains: (x) => names.has(x),
      toggle: (x, force) => {
        const on = force === undefined ? !names.has(x) : force;
        if (on) names.add(x); else names.delete(x);
        return on;
      },
    };
  }
  addEventListener(name, callback) { this.events[name] = callback; }
  setAttribute(name, value) { this.attributes[name] = value; }
  getAttribute(name) { return this.attributes[name]; }
  querySelectorAll() { return []; }
  blur() {}
  focus() {}
  scrollIntoView() {}
}

async function settle() {
  for (let i = 0; i < 10; i++) await new Promise((resolve) => setImmediate(resolve));
}

async function start({ hash = "#/fanhan/1.1", search = "" } = {}) {
  const elements = new Map();
  const element = (selector) => {
    if (!elements.has(selector)) elements.set(selector, new Element());
    return elements.get(selector);
  };
  const modes = ["read", "card", "random"].map((mode) => {
    const el = new Element(); el.dataset.mode = mode; return el;
  });
  const src = element("#src-btn");
  const jumps = [];
  const document = {
    body: new Element(), documentElement: new Element(), events: {}, listeners: {},
    querySelector: element,
    querySelectorAll(selector) {
      if (selector === ".mode" || selector === ".mode[data-mode]") return modes;
      if (selector === ".mode, #src-btn") return [...modes, src];
      return [];
    },
    addEventListener(name, callback) {
      (this.listeners[name] ||= []).push(callback);
      this.events[name] = (event) => Promise.all(this.listeners[name].map((listener) => listener(event)));
    },
    getElementById(id) {
      if (id === "data-btn") return element("#data-btn");
      const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`id="${escaped}"`).test(element("#view").innerHTML)) return null;
      const el = new Element(); el.scrollIntoView = () => jumps.push(id); return el;
    },
  };
  const window = {
    events: {}, addEventListener(name, callback) { this.events[name] = callback; },
    scrollTo() {}, isSecureContext: true,
  };
  const location = { hash, search, href: `http://localhost/${search}${hash}` };
  const requests = [];
  const clipboard = [];
  const context = {
    document, window, location, URLSearchParams, URL, Map, Set, console,
    setTimeout(callback) { queueMicrotask(callback); return 1; }, clearTimeout() {},
    localStorage: { getItem() { return null; }, setItem() {} },
    navigator: { clipboard: { async writeText(text) { clipboard.push(text); } } },
    history: { replaceState() {} },
    async fetch(url) {
      requests.push(url);
      const target = path.resolve(site, url);
      assert.ok(target.startsWith(site + path.sep), `Unexpected fetch path: ${url}`);
      const exists = fs.existsSync(target);
      return { ok: exists, json: async () => JSON.parse(fs.readFileSync(target, "utf8")) };
    },
  };
  vm.runInNewContext(fs.readFileSync(path.join(site, "assets/probability-network.js"), "utf8"), context,
    { filename: "site/assets/probability-network.js" });
  vm.runInNewContext(fs.readFileSync(path.join(site, "assets/app.js"), "utf8"), context,
    { filename: "site/assets/app.js" });
  await settle();
  return {
    element, document, location, requests, jumps, clipboard,
    html: () => element("#view").innerHTML,
    async navigate(hash) { location.hash = hash; window.events.hashchange(); await settle(); },
    async copySection() {
      const button = new Element();
      button.closest = (selector) => selector === "[data-copy-section]" ? button : null;
      await document.events.click({ target: button });
      await settle();
    },
    async filter(name) {
      const chip = new Element();
      chip.dataset.filter = name;
      chip.closest = (selector) => selector === "[data-filter]" ? chip : null;
      await document.events.click({ target: chip });
      await settle();
    },
  };
}

function srcFromHtml(html) {
  const paras = [];
  const re = /<p>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(String(html || "")))) paras.push(m[1]);
  return paras.map((p) => p
    .replace(/<strong>/g, "**").replace(/<\/strong>/g, "**")
    .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")).join("\n\n");
}

// Independent reconstruction of the documented section payload.
function expectedSectionSrc(s) {
  const items = s.items || [];
  const blocks = Array.isArray(s.blocks) ? s.blocks : [];
  const byItem = new Map();
  for (const block of blocks) {
    const at = Math.max(0, Math.min(items.length, block.before | 0));
    if (!byItem.has(at)) byItem.set(at, []);
    byItem.get(at).push(block);
  }
  const parts = [`## ${s.id}${s.title ? ` ${s.title}` : ""}`];
  for (let i = 0; i <= items.length; i++) {
    for (const block of byItem.get(i) || []) {
      if (block.kind === "heading") {
        const h = `## ${block.number ? `${block.number} ` : ""}${block.title}`;
        parts.push(block.page ? `${h} @${block.page}` : h);
      } else parts.push(srcFromHtml(block.html));
    }
    if (i >= items.length) break;
    const it = items[i];
    let h = `### ${it.type}`;
    if (it.number) h += ` ${it.number}`;
    if (it.title) h += ` (${it.title})`;
    if (it.page) h += ` @${it.page}`;
    parts.push(h);
    parts.push(it.src || srcFromHtml(it.html));
  }
  return parts.filter(Boolean).join("\n\n");
}

async function main() {
  // Exact payload for a one-item section without subheadings.
  const single = findSection("C");
  const singleApp = await start({ hash: "#/fanhan/C" });
  assert.match(singleApp.html(), /data-copy-section/, "Section header must offer the copy action");
  await singleApp.copySection();
  const expectedSingle = "## C Stone-Weierstrass 定理\n\n"
    + "### 定理 C.1 (Stone-Weierstrass) @209\n\n"
    + srcFromHtml(single.items[0].html);
  assert.equal(singleApp.clipboard.at(-1), expectedSingle);
  assert.equal(singleApp.clipboard.length, 1);

  // Full section with subheadings and prose.
  const dense = findSection("1.1");
  const app = await start({ hash: "#/fanhan/1.1" });
  assert.match(app.html(), /data-copy-section/);
  await app.copySection();
  const copied = app.clipboard.at(-1);
  assert.equal(copied, expectedSectionSrc(dense), "Copy payload must match the documented section source");
  assert.ok(copied.startsWith("## 1.1 度量空间\n\n"));
  assert.ok(copied.includes("## 定义与例子 @2\n\n"));
  assert.ok(copied.includes("### 定义 1.1.1 (度量空间) @2\n\n设 $X$ 是一个非空集合"));
  assert.ok(copied.includes("## 极限 @5\n\n### 定义 1.1.2 (极限) @5"));
  assert.equal((copied.match(/### /g) || []).length, dense.items.length, "Every item header must be present");
  assert.ok(!/<p>|<strong>|&lt;|&amp;/.test(copied), "Copy must be Markdown/LaTeX, not rendered HTML");

  // The copy is the whole section, not the active type filter.
  await app.filter("定理");
  assert.match(app.html(), /class="chip active" type="button" data-filter="定理"/);
  await app.copySection();
  const filtered = app.clipboard.at(-1);
  assert.equal((filtered.match(/### /g) || []).length, dense.items.length,
    "Copy must ignore the type filter and include every item");

  // Card mode shares the same header and action.
  const cardApp = await start({ hash: "#/fanhan/1.1", search: "?mode=card" });
  assert.match(cardApp.html(), /data-copy-section/);
  await cardApp.copySection();
  assert.equal(cardApp.clipboard.at(-1), expectedSectionSrc(dense));

  // A section without subheadings still copies cleanly.
  const plain = findSection("3.1");
  const plainApp = await start({ hash: "#/fanhan/3.1" });
  await plainApp.copySection();
  const plainCopied = plainApp.clipboard.at(-1);
  assert.equal(plainCopied, expectedSectionSrc(plain));
  assert.ok(plainCopied.startsWith("## 3.1 Baire 纲定理\n\n"));
  assert.ok(!plainCopied.includes("\n## "), "A section without subheadings must not invent them");

  console.log(`PASS: 复制本小节 payload for ${dense.items.length}-item and ${plain.items.length}-item sections, subheadings, card mode and filter-independent copy.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
