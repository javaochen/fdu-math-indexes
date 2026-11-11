/* Run: node tests/copy_section.cjs
 * Checks the copy actions against the generated site data with a small DOM stub:
 * the section page copies statements + section-level exercises, and the exercise
 * pages copy the section/chapter question list. Not CSS layout.
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
const gailv = readJSON("gailv.json");
const fanhanEx = readJSON("fanhan-exercises.json").sections;
const gailvEx = readJSON("gailv-exercises.json").sections;
const findSection = (data, id) => data.chapters.flatMap((ch) => ch.sections).find((s) => s.id === id);

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
    async copyExercises() {
      const button = new Element();
      button.closest = (selector) => selector === "[data-copy-exercises]" ? button : null;
      await document.events.click({ target: button });
      await settle();
    },
    async copyTopbar() {
      const button = element("#copy-btn");
      button.closest = (selector) => {
        if (selector === "[data-copy-section]" && button.dataset.copySection !== undefined) return button;
        if (selector === "[data-copy-exercises]" && button.dataset.copyExercises !== undefined) return button;
        return null;
      };
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

function itemHeadSrc(it) {
  let h = `### ${it.type}`;
  if (it.number) h += ` ${it.number}`;
  if (it.title) h += ` (${it.title})`;
  if (it.page) h += ` @${it.page}`;
  return h;
}

// Independent reconstruction of the documented statement payload.
function expectedStatements(s) {
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
    parts.push(itemHeadSrc(it));
    parts.push(it.src || srcFromHtml(it.html));
  }
  return parts.filter(Boolean).join("\n\n");
}

function expectedExerciseSrc(s, record) {
  const head = s.scope === "chapter"
    ? `## 第${s.chapter}章${s.chapterTitle ? ` ${s.chapterTitle}` : ""} · 习题`
    : `## ${s.id}${s.title ? ` ${s.title}` : ""} · 习题`;
  const parts = [head];
  for (const it of record.items) {
    parts.push(itemHeadSrc(it));
    parts.push(it.src || srcFromHtml(it.html));
  }
  return parts.filter(Boolean).join("\n\n");
}

function expectedSectionText(s) {
  const ex = s.exercises && s.exercises.status === "ready" ? fanhanEx[s.id] : null;
  const statements = expectedStatements(s);
  return ex ? `${statements}\n\n${expectedExerciseSrc(s, ex)}` : statements;
}

function statementsPart(text, s) {
  const exHead = `## ${s.id}${s.title ? ` ${s.title}` : ""} · 习题`;
  const idx = text.indexOf(`\n\n${exHead}`);
  return idx < 0 ? text : text.slice(0, idx);
}

async function main() {
  // Section with no independent exercises: statements only, exact payload.
  const none = findSection(fanhan, "F");
  const noneApp = await start({ hash: "#/fanhan/F" });
  assert.match(noneApp.html(), /data-copy-section/, "Section header must offer the copy action");
  await noneApp.copySection();
  assert.equal(noneApp.clipboard.at(-1), expectedSectionText(none));
  assert.equal(noneApp.clipboard.at(-1), expectedStatements(none), "A section without exercises must copy statements only");
  assert.equal(noneApp.clipboard.length, 1);
  assert.ok(!noneApp.requests.includes("data/fanhan-exercises.json"),
    "A section without exercises must not load the exercise data");

  // Section with exercises: statements + section-level exercises, exact payload.
  const withEx = findSection(fanhan, "C");
  const withExRecord = fanhanEx["C"];
  const withExApp = await start({ hash: "#/fanhan/C" });
  await withExApp.copySection();
  const withExCopied = withExApp.clipboard.at(-1);
  assert.equal(withExCopied, expectedSectionText(withEx));
  assert.ok(withExApp.requests.includes("data/fanhan-exercises.json"));
  assert.ok(withExCopied.startsWith("## C Stone-Weierstrass 定理\n\n"));
  assert.ok(withExCopied.includes("\n\n## C Stone-Weierstrass 定理 · 习题\n\n### 习题 1 @"));
  assert.equal((withExCopied.match(/### /g) || []).length, withEx.items.length + withExRecord.items.length);

  // Full section with subheadings and prose.
  const dense = findSection(fanhan, "1.1");
  const denseEx = fanhanEx["1.1"];
  const app = await start({ hash: "#/fanhan/1.1" });
  assert.match(app.html(), /data-copy-section/);
  await app.copySection();
  const copied = app.clipboard.at(-1);
  assert.equal(copied, expectedSectionText(dense), "Copy payload must match the documented section source");
  assert.ok(copied.startsWith("## 1.1 度量空间\n\n"));
  assert.ok(copied.includes("## 定义与例子 @2\n\n"));
  assert.ok(copied.includes("### 定义 1.1.1 (度量空间) @2\n\n设 $X$ 是一个非空集合"));
  assert.ok(copied.includes("## 极限 @5\n\n### 定义 1.1.2 (极限) @5"));
  assert.equal((statementsPart(copied, dense).match(/### /g) || []).length, dense.items.length,
    "Every item header must be present");
  const exIdx = copied.indexOf(`\n\n## 1.1 度量空间 · 习题`);
  assert.ok(exIdx > 0, "Exercises must follow the statements under their own heading");
  assert.equal((copied.slice(exIdx).match(/### /g) || []).length, denseEx.items.length,
    "Every exercise header must be present");
  assert.ok(!/<p>|<strong>|&lt;|&amp;/.test(copied), "Copy must be Markdown/LaTeX, not rendered HTML");

  // The copy is the whole section, not the active type filter.
  await app.filter("定理");
  assert.match(app.html(), /class="chip active" type="button" data-filter="定理"/);
  await app.copySection();
  const filtered = app.clipboard.at(-1);
  assert.equal((statementsPart(filtered, dense).match(/### /g) || []).length, dense.items.length,
    "Copy must ignore the type filter and include every item");

  // Card mode shares the same header and action.
  const cardApp = await start({ hash: "#/fanhan/1.1", search: "?mode=card" });
  assert.match(cardApp.html(), /data-copy-section/);
  await cardApp.copySection();
  assert.equal(cardApp.clipboard.at(-1), expectedSectionText(dense));

  // The topbar button mirrors the section/exercise action and hides elsewhere.
  const topApp = await start({ hash: "#/fanhan/1.1" });
  const topBtn = topApp.element("#copy-btn");
  assert.equal(topBtn.hidden, false);
  assert.ok("copySection" in topBtn.dataset);
  assert.equal(topBtn.textContent, "复制小节");
  await topApp.copyTopbar();
  assert.equal(topApp.clipboard.at(-1), expectedSectionText(dense));
  await topApp.navigate("#/");
  assert.equal(topBtn.hidden, true, "The topbar copy button must disappear outside section pages");

  const topExApp = await start({ hash: "#/fanhan/1.1/exercises" });
  const topExBtn = topExApp.element("#copy-btn");
  assert.equal(topExBtn.hidden, false);
  assert.ok("copyExercises" in topExBtn.dataset);
  assert.equal(topExBtn.textContent, "复制习题");
  await topExApp.copyTopbar();
  assert.equal(topExApp.clipboard.at(-1), expectedExerciseSrc(dense, denseEx));

  const topChApp = await start({ hash: "#/gailv/chapter-2/exercises" });
  assert.equal(topChApp.element("#copy-btn").textContent, "复制本章");

  // Chapter-level exercise books: a section copy must not append the whole chapter's questions.
  const gailvSec = findSection(gailv, "1.2");
  const gailvApp = await start({ hash: "#/gailv/1.2" });
  await gailvApp.copySection();
  assert.equal(gailvApp.clipboard.at(-1), expectedSectionText(gailvSec));
  assert.equal(gailvApp.clipboard.at(-1), expectedStatements(gailvSec));
  assert.ok(!gailvApp.requests.includes("data/gailv-exercises.json"),
    "Chapter-level exercise books must not append chapter exercises to a section copy");

  // A section without subheadings still copies cleanly.
  const plain = findSection(fanhan, "3.1");
  const plainApp = await start({ hash: "#/fanhan/3.1" });
  await plainApp.copySection();
  const plainCopied = plainApp.clipboard.at(-1);
  assert.equal(plainCopied, expectedSectionText(plain));
  assert.ok(plainCopied.startsWith("## 3.1 Baire 纲定理\n\n"));
  assert.ok(!statementsPart(plainCopied, plain).includes("\n## "),
    "A section without subheadings must not invent them");

  // Exercise page: copy the whole section question list.
  const exApp = await start({ hash: "#/fanhan/1.1/exercises" });
  assert.match(exApp.html(), /data-copy-exercises/);
  assert.match(exApp.html(), /复制本节习题/);
  await exApp.copyExercises();
  assert.equal(exApp.clipboard.at(-1), expectedExerciseSrc(dense, denseEx));
  assert.ok(exApp.clipboard.at(-1).startsWith("## 1.1 度量空间 · 习题\n\n### 习题 1 @"));

  // Chapter exercise page: copy every question across all topics.
  const ch2 = gailv.chapters.find((ch) => String(ch.no) === "2");
  const ch2Record = gailvEx["chapter-2"];
  const chapterSection = { id: "chapter-2", scope: "chapter", chapter: "2", chapterTitle: ch2.title, title: "", items: [] };
  const chApp = await start({ hash: "#/gailv/chapter-2/exercises" });
  assert.match(chApp.html(), /data-copy-exercises/);
  assert.match(chApp.html(), /复制本章习题/);
  await chApp.copyExercises();
  const chCopied = chApp.clipboard.at(-1);
  assert.equal(chCopied, expectedExerciseSrc(chapterSection, ch2Record));
  assert.ok(chCopied.startsWith("## 第2章 概率空间与随机变量 · 习题\n\n"));
  assert.equal((chCopied.match(/### /g) || []).length, ch2Record.items.length,
    "Chapter copy must include every topic");

  // No copy button when there is nothing to copy.
  const noneExApp = await start({ hash: "#/fanhan/A/exercises" });
  assert.match(noneExApp.html(), /已核对原书，本节没有独立习题/);
  assert.ok(!/data-copy-exercises/.test(noneExApp.html()), "A section without exercises must not offer the exercise copy");
  const unrecordedApp = await start({ hash: "#/gaodai/1.1/exercises" });
  assert.match(unrecordedApp.html(), /本节习题尚未录入/);
  assert.ok(!/data-copy-exercises/.test(unrecordedApp.html()), "An unrecorded section must not offer the exercise copy");

  console.log(`PASS: 复制本小节 (statements + section exercises), 复制本节习题, 复制本章习题; ${dense.items.length} statements + ${denseEx.items.length} questions, chapter ${ch2Record.items.length} questions; no button without exercises.`);
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
