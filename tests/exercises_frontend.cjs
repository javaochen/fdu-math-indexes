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
    // Execute the search debounce without sleeping for wall-clock time.
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
  vm.runInNewContext(fs.readFileSync(path.join(site, 'assets/probability-network.js'), 'utf8'), context,
    { filename: 'site/assets/probability-network.js' });
  vm.runInNewContext(source, context, { filename: "site/assets/app.js" });
  await settle();
  return {
    element, modes, src, document, location, requests, jumps, clipboard,
    html: () => element("#view").innerHTML,
    async navigate(hash) { location.hash = hash; window.events.hashchange(); await settle(); },
    async search(value) { element("#search").value = value; element("#search").events.input(); await settle(); },
    async key(key, { shiftKey = false, input = false } = {}) {
      await document.events.keydown({ key, shiftKey, target: { matches: () => input }, preventDefault() {} });
      await settle();
    },
    async copy(key) {
      const button = new Element(); button.dataset.copySrc = key;
      button.closest = (selector) => selector === "[data-copy-src]" || selector === "button" ? button : null;
      await document.events.click({ target: button }); await settle();
    },
  };
}

async function main() {
  const appearanceHTML = fs.readFileSync(path.join(site, 'index.html'), 'utf8');
  assert.ok(!/data-accent-opt|class="swatch"/.test(appearanceHTML), 'Retired accent controls must not appear');
  const legacyPalette = await start({search:'?accent=plum&theme=dark'});
  assert.equal(legacyPalette.document.documentElement.dataset.theme, 'dark');
  assert.equal(legacyPalette.document.documentElement.dataset.accent, undefined,
    'Old accent parameters must not re-enable retired palettes');
  assert.equal(ready.length, 24, "Expected all 24 exercise groups in Functional Analysis");
  assert.equal(ready.reduce((sum, section) => sum + section.exercises.count, 0), 315);
  assert.equal(readJSON("search.json").filter((entry) => entry[0] === 'fanhan' && entry[3] === '习题').length, 315);
  for (const [id, count] of [["C", 5], ["D", 3], ["E", 11]]) {
    assert.equal(records[id].status, "ready");
    assert.equal(records[id].count, count);
  }
  for (const section of ready) {
    const record = records[section.id];
    assert.equal(record.count, section.exercises.count);
    assert.equal(record.pages, section.exercises.pages);
    assert.equal(record.items.length, record.count);
    assert.ok(!('scans' in record));
    for (const item of record.items) {
      assert.ok(item.src && item.html && item.page > 0);
      assert.ok(!/assets\/exercises|<img|pdf_page/.test(item.src));
    }
  }

  const app = await start();
  assert.match(app.element('#toc').innerHTML, /class="toc-section-row"><a[\s\S]*?href="#\/fanhan\/1\.1"[\s\S]*?<\/a><a class="sec-link toc-exercises toc-exercises-inline"/,
    'Section exercises must be a sibling link beside the section title');
  assert.match(app.html(), /class="exercise-items"/);
  assert.match(app.html(), /data-copy-src=/);
  const imgSrcs = [...app.html().matchAll(/<img[^>]+src="([^"]*)"/g)].map((m) => m[1]);
  assert.ok(imgSrcs.every((src) => src.startsWith("assets/authors/")), "Only author avatars may appear on exercise pages");
  assert.ok(!/查看原图|扫描图/.test(app.html()));
  assert.match(app.html(), /class="sec-body"/);
  assert.match(app.html(), /class="sec-avatar"/, "Exercise pages must show the same author avatar as section pages");
  assert.ok(app.document.body.classList.contains("exercise-mode"));
  assert.ok(app.modes.every((el) => el.disabled) && app.src.disabled);
  assert.deepEqual(app.requests, ["data/books.json", "data/fanhan-exercises.json"]);
  await app.key("r");
  assert.match(app.html(), /class="exercise-items"/);
  await app.navigate("#/fanhan/1.1/exercises/p9");
  assert.ok(app.jumps.some((id) => id.startsWith("i-fanhan-1.1/exercises-")));
  await app.navigate("#/fanhan/1.1/exercises/习题-2");
  assert.ok(app.jumps.includes("i-fanhan-1.1/exercises-习题-2"));

  for (const section of ready) {
    await app.navigate(`#/fanhan/${section.id}/exercises`);
    assert.equal((app.html().match(/class="item(?:\s|")/g) || []).length, records[section.id].items.length);
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
  assert.match(app.html(), /class="exercise-items"/);
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

  const exerciseHit = readJSON("search.json").find((entry) => entry[3] === "习题" && entry[5]);
  assert.ok(exerciseHit, 'Exercises must be searchable');
  await app.search(exerciseHit[5]);
  assert.ok(app.html().includes(`href="#/${exerciseHit[0]}/${exerciseHit[1]}/${exerciseHit[2]}"`),
    'Searching an exercise title should link to its independent exercise page');
  await app.navigate(`#/${exerciseHit[0]}/${exerciseHit[1]}/${exerciseHit[2]}`);
  assert.match(app.html(), /class="exercise-items"/);
  assert.ok(app.jumps.some((id) => id.endsWith(exerciseHit[2].split('/').pop())));
  // Random view uses the shared page header (title row + avatar) and keeps 换一条.
  const randomApp = await start({ hash: "#/fanhan/1.1", search: "?mode=random" });
  assert.match(randomApp.html(), /class="sec-body"/);
  assert.match(randomApp.html(), /class="sec-title-row"/);
  assert.match(randomApp.html(), /class="sec-avatar"/, "Random view must show the author avatar");
  assert.match(randomApp.html(), /id="again"/);

  await checkProbabilityChapters();
  const probabilityTotal = bookData.books.find((book) => book.id === "gailv").exercise_count;
  console.log(`PASS: Functional Analysis 315 questions; Probability ${probabilityTotal} questions in 10 chapters; original numbering, topic/question routes, cross-topic search/copy, chapter links/counts, lazy loading, empty states, controls and card-mode regression.`);
}

async function checkProbabilityChapters() {
  const probability = bookData.books.find((book) => book.id === "gailv");
  const data = readJSON("gailv-exercises.json").sections;
  const chapters = probability.chapters.filter((chapter) => chapter.exercises && chapter.exercises.scope === "chapter");
  assert.equal(chapters.length, 10);
  assert.equal(fanhan.exercise_count, 315);
  const total = chapters.reduce((sum, chapter) => sum + chapter.exercises.count, 0);
  assert.equal(probability.exercise_count, total);
  assert.equal(chapters.reduce((sum, chapter) => sum + chapter.exercises.groups.length, 0), 30);
  assert.equal(readJSON("search.json").filter((entry) => entry[0] === "gailv" && entry[3] === "习题").length, total);

  const app = await start({ hash: "#/gailv/chapter-2/exercises" });
  assert.deepEqual(app.requests, ["data/books.json", "data/gailv-exercises.json"]);
  const itemAnchors = () => Array.from(app.html().matchAll(/data-anchor="([^"]+)"/g), (match) => match[1]);
  for (const chapter of chapters) {
    const info = chapter.exercises;
    const record = data[info.id];
    assert.equal(record.count, info.count);
    assert.deepEqual(record.groups, info.groups);
    assert.equal(record.items.length, info.count);
    assert.ok(!chapter.sections.some((section) => section.id === info.id), "Chapter exercises must not create a fake statement section");
    for (const section of chapter.sections) assert.equal(section.exercises.chapter_id, info.id);
    const numbers = record.groups.flatMap((group) => group.numbers);
    assert.equal(new Set(numbers).size, record.count, "Each question must belong to exactly one topic");
    assert.deepEqual([...numbers].sort((a, b) => a - b), record.items.map((item) => parseInt(item.number, 10)));

    await app.navigate(`#/gailv/${info.id}/exercises`);
    assert.deepEqual(itemAnchors(), record.items.filter((item) => record.groups[0].numbers.includes(parseInt(item.number, 10))).map((item) => item.anchor), "Chapter entry defaults to the first topic");
    for (const [i, group] of record.groups.entries()) {
      await app.navigate(`#/gailv/${info.id}/exercises/topic-${group.id}`);
      const expected = record.items.filter((item) => group.numbers.includes(parseInt(item.number, 10)));
      assert.equal(expected.length, group.count);
      assert.deepEqual(itemAnchors(), expected.map((item) => item.anchor));
      assert.ok(app.html().includes(`第${chapter.no}章 · ${group.title} · 习题`));
      assert.equal((app.html().match(/class="in-topic"/g) || []).length, group.count);
      for (const item of record.items) assert.ok(app.html().includes(`/exercises/${item.anchor}\"`), "All chapter question numbers remain navigable");
      assert.ok(app.html().includes(`href="#/gailv/${info.id}\">返回本章`));
      if (i) assert.ok(app.html().includes(`/exercises/topic-${record.groups[i - 1].id}\"`));
      if (i + 1 < record.groups.length) assert.ok(app.html().includes(`/exercises/topic-${record.groups[i + 1].id}\"`));
    }
    for (const item of record.items) {
      await app.navigate(`#/gailv/${info.id}/exercises/${item.anchor}`);
      const group = record.groups.find((group) => group.numbers.includes(parseInt(item.number, 10)));
      assert.ok(app.html().includes(`第${chapter.no}章 · ${group.title} · 习题`));
      assert.ok(app.jumps.includes(`i-gailv-${info.id}/exercises-${item.anchor}`));
      assert.deepEqual(itemAnchors(), record.items.filter((it) => group.numbers.includes(parseInt(it.number, 10))).map((it) => it.anchor));
    }

    const lastItem = record.items[record.items.length - 1];
    await app.copy(`gailv/${info.id}/exercises/${lastItem.anchor}`);
    assert.equal(app.clipboard.at(-1), lastItem.src, "Copy must use original Markdown/LaTeX after topic switching");
    await app.navigate(`#/gailv/${info.id}`);
    assert.match(app.html(), /class="book-home"/);
    assert.ok(app.jumps.includes(info.id), "Returning to a chapter scrolls to its real book index entry");
    for (const group of record.groups) assert.ok(app.html().includes(`#/gailv/${info.id}/exercises/topic-${group.id}`));

    const section = chapter.sections[0];
    await app.navigate(`#/gailv/${section.id}`);
    assert.ok(app.html().includes(`href="#/gailv/${info.id}/exercises\"`));
    assert.ok(app.html().includes(`本章习题 ${info.count} 题`));
    await app.navigate(`#/gailv/${section.id}/exercises`);
    assert.equal(app.location.hash, `#/gailv/${info.id}/exercises`);
    assert.match(app.html(), /class="exercise-items"/);
  }

  // Chapter 5's density group contains nonconsecutive original numbers.
  const density = data["chapter-5"].groups.find((group) => group.id === "density");
  assert.ok(density.numbers.some((number, i) => i && number !== density.numbers[i - 1] + 1));
  await app.navigate("#/gailv/chapter-5/exercises/topic-density");
  assert.deepEqual(itemAnchors(), data["chapter-5"].items.filter((item) => density.numbers.includes(parseInt(item.number, 10))).map((item) => item.anchor));
  assert.equal(itemAnchors().length, 11, "One topic is a whole page without secondary pagination");

  const hit = readJSON("search.json").find((entry) => entry[0] === "gailv" && entry[1] === "chapter-2" && entry[4] === "21");
  assert.ok(hit);
  const question21 = data["chapter-2"].items.find((item) => item.number === "21");
  await app.navigate("#/gailv/chapter-2/exercises/topic-events");
  const searchTerm = hit[7].slice(-50);
  await app.search(searchTerm);
  assert.ok(app.html().includes(`href="#/${hit[0]}/${hit[1]}/${hit[2]}\"`));
  const sourceLabels = Array.from(app.html().matchAll(/<span class="hit-src">([^<]*)<\/span>/g), (match) => match[1]);
  assert.ok(sourceLabels.some((label) => label.includes("第2章")));
  assert.ok(sourceLabels.every((label) => !label.includes("chapter-")), "Search results must display chapter names, not technical route IDs");
  await app.navigate(`#/${hit[0]}/${hit[1]}/${hit[2]}`);
  assert.ok(app.html().includes("/exercises/topic-distributions\" aria-current=\"page\""));
  assert.ok(app.jumps.includes("i-gailv-chapter-2/exercises-习题-21"));
  await app.search(searchTerm);
  await app.search("");
  assert.ok(app.html().includes("/exercises/topic-distributions\" aria-current=\"page\""));
  assert.ok(app.document.body.classList.contains("exercise-mode"));
  await app.key("r");
  assert.match(app.html(), /class="exercise-items"/);
  await app.navigate("#/gailv");
  assert.ok(app.html().includes(`习题 ${probability.exercise_count} 题`));
  assert.match(app.element("#data-btn").href, /\/site\/data\/gailv\.json$/, "Footer data link must follow the current book");
  assert.ok(!app.html().includes("习题 138 题"), "Chapter summaries must not be counted once per section");
  await app.navigate("#/");
  assert.match(app.element("#data-btn").href, /\/site\/data\/books\.json$/, "Home must fall back to the catalog data");
  const expectedTotal = bookData.books.reduce((sum, book) => sum + (book.exercise_count || 0), 0);
  assert.ok(app.html().includes(`${expectedTotal} 道习题`));
}

main().catch((error) => { console.error(error); process.exitCode = 1; });
