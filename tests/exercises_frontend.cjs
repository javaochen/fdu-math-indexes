/* Run: node tests/exercises_frontend.cjs
 * Uses the generated site data and a small DOM stub; no browser dependencies.
 * This checks routing/state/data contracts, not CSS layout or image legibility.
 */
"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const site = path.join(root, "site");
const readJSON = (name) => JSON.parse(fs.readFileSync(path.join(site, "data", name), "utf8"));
const bookData = readJSON("books.json");
const fanhan = bookData.books.find((book) => book.id === "fanhan");
const records = readJSON("fanhan-exercises.json").sections;
const sections = fanhan.chapters.flatMap((chapter) => chapter.sections);
const ready = sections.filter((section) => section.exercises.status === "ready");
const source = fs.readFileSync(path.join(site, "assets", "app.js"), "utf8");

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

async function start({ hash = "#/fanhan/1.1/exercises", search = "" } = {}) {
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
    body: new Element(), documentElement: new Element(), events: {},
    querySelector: element,
    querySelectorAll(selector) {
      if (selector === ".mode" || selector === ".mode[data-mode]") return modes;
      if (selector === ".mode, #src-btn") return [...modes, src];
      return [];
    },
    addEventListener(name, callback) { this.events[name] = callback; },
    getElementById(id) {
      const escaped = id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (!new RegExp(`id="${escaped}"`).test(element("#view").innerHTML)) return null;
      const el = new Element(); el.scrollIntoView = () => jumps.push(id); return el;
    },
  };
  const window = {
    events: {}, addEventListener(name, callback) { this.events[name] = callback; },
    scrollTo() {},
  };
  const location = { hash, search, href: `http://localhost/${search}${hash}` };
  const requests = [];
  const context = {
    document, window, location, URLSearchParams, URL, Map, Set, console,
    // Execute the search debounce without sleeping for wall-clock time.
    setTimeout(callback) { queueMicrotask(callback); return 1; }, clearTimeout() {},
    localStorage: { getItem() { return null; }, setItem() {} },
    history: { replaceState() {} },
    async fetch(url) {
      requests.push(url);
      const target = path.resolve(site, url);
      assert.ok(target.startsWith(site + path.sep), `Unexpected fetch path: ${url}`);
      const exists = fs.existsSync(target);
      return { ok: exists, json: async () => JSON.parse(fs.readFileSync(target, "utf8")) };
    },
  };
  vm.runInNewContext(source, context, { filename: "site/assets/app.js" });
  await settle();
  return {
    element, modes, src, document, location, requests, jumps,
    html: () => element("#view").innerHTML,
    async navigate(hash) { location.hash = hash; window.events.hashchange(); await settle(); },
    async search(value) { element("#search").value = value; element("#search").events.input(); await settle(); },
    async key(key, { shiftKey = false, input = false } = {}) {
      document.events.keydown({ key, shiftKey, target: { matches: () => input }, preventDefault() {} });
      await settle();
    },
  };
}

async function main() {
  assert.equal(ready.length, 24, "Expected all 24 exercise groups in Functional Analysis");
  assert.equal(ready.reduce((sum, section) => sum + section.exercises.count, 0), 315);
  for (const [id, count] of [["C", 5], ["D", 3], ["E", 11]]) {
    assert.equal(records[id].status, "ready");
    assert.equal(records[id].count, count);
  }
  for (const section of ready) {
    const record = records[section.id];
    assert.equal(record.count, section.exercises.count);
    assert.equal(record.pages, section.exercises.pages);
    for (const scan of record.scans) {
      assert.ok(fs.existsSync(path.join(site, scan.src)), `Missing scan: ${scan.src}`);
      assert.ok(scan.width > 0 && scan.height > 0);
    }
  }

  const app = await start();
  assert.match(app.html(), /class="exercise-scans"/);
  assert.match(app.html(), /loading="lazy"/);
  assert.ok(app.document.body.classList.contains("exercise-mode"));
  assert.ok(app.modes.every((el) => el.disabled) && app.src.disabled);
  assert.deepEqual(app.requests, ["data/books.json", "data/fanhan-exercises.json"]);
  await app.key("r");
  assert.match(app.html(), /class="exercise-scans"/);
  await app.navigate("#/fanhan/1.1/exercises/p9");
  assert.ok(app.jumps.includes("exercise-p9"));

  for (const section of ready) {
    await app.navigate(`#/fanhan/${section.id}/exercises`);
    assert.equal((app.html().match(/class="exercise-scan"/g) || []).length, records[section.id].scans.length);
    assert.ok(app.document.body.classList.contains("exercise-mode"));
  }
  assert.equal(app.requests.filter((url) => url === "data/fanhan-exercises.json").length, 1);

  await app.navigate("#/fanhan/A/exercises");
  assert.match(app.html(), /\u5df2\u6838\u5bf9\u539f\u4e66/);
  const unrecordedBook = bookData.books.find((book) => book.chapters.some((chapter) =>
    chapter.sections.some((section) => section.exercises.status === "unrecorded")));
  const unrecorded = unrecordedBook.chapters.flatMap((chapter) => chapter.sections)
    .find((section) => section.exercises.status === "unrecorded");
  await app.navigate(`#/${unrecordedBook.id}/${unrecorded.id}/exercises`);
  assert.match(app.html(), /\u5c1a\u672a\u5f55\u5165/);
  assert.ok(!app.requests.includes(`data/${unrecordedBook.id}-exercises.json`));

  await app.navigate("#/fanhan/1.1/exercises");
  const searchEntry = readJSON("search.json").find((entry) => entry[0] === "fanhan" && entry[5]);
  await app.search(searchEntry[5]);
  assert.match(app.html(), /class="hit"/);
  assert.ok(!app.document.body.classList.contains("exercise-mode"));
  assert.ok(app.modes.every((el) => !el.disabled) && !app.src.disabled);
  await app.search("");
  assert.match(app.html(), /class="exercise-scans"/);
  assert.ok(app.document.body.classList.contains("exercise-mode"));
  await app.search(searchEntry[5]);
  await app.navigate(`#/${searchEntry[0]}/${searchEntry[1]}/${searchEntry[2]}`);
  assert.match(app.html(), /class="item/);
  assert.ok(!app.document.body.classList.contains("exercise-mode"));
  await app.navigate("#/fanhan/1.1");
  assert.match(app.html(), /class="section-tabs"/);
  assert.match(app.html(), /class="item/);
  await app.navigate("#/fanhan");
  assert.match(app.html(), /class="bh-exercises"/);

  // Regression: the prior card preference must not render a lightweight,
  // empty exercise section after searching and pressing Escape outside input.
  const cardApp = await start({ search: "?mode=card" });
  await cardApp.search(searchEntry[5]);
  await cardApp.key("Escape");
  assert.ok(!/class="empty"/.test(cardApp.html()),
    "Escape after searching from exercises rendered an empty statement section (current.items was empty)");

  console.log("PASS: actual data (24 groups / 315 questions, appendices C/D/E), scan assets, lazy loading, deep links, empty states, search/clear/statement navigation, controls and card-mode regression.");
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
