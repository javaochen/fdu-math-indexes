/* 数学命题索引 —— 纯静态前端（按书懒加载） */
(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);

  let SITE = { title: "数学命题索引" };
  let BOOKS = [];              // 目录元数据（不含正文）
  let CACHE = new Map();       // bookId -> { ...meta, sections: [含 items] }
  let INDEX = new Map();       // "book/section/anchor" -> {item, section, book}
  let SRC = new Map();         // 同上 -> Markdown 源码
  let SEARCH = null;           // search.json 原始数组
  let SEARCH_N = null;         // 归一化后的检索串
  let srcSet = new Set();
  let srcAll = false;
  let mode = "read";
  let cardIdx = 0;
  let defsOpen = false;
  let typeFilter = "all";
  let currentMeta = null;
  let current = null;
  let query = "";
  let mathObserver = null;
  let loadToken = 0;

  /* ---------------- 工具 ---------------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (s) => String(s).toLowerCase().replace(/\\/g, "").replace(/\$/g, "").replace(/\s+/g, " ");
  const FILTERS = [
    ["all", "全部", null],
    ["定理", "定理", ["定理"]],
    ["定义", "定义", ["定义"]],
    ["例", "例", ["例", "反例"]],
    ["其他", "其他", ["命题", "引理", "推论", "注", "构造", "公理"]],
  ];

  function typeset(el) {
    if (!window.renderMathInElement) return;
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false, strict: false, trust: true,
    });
  }

  // 只渲染视口附近的条目，长节首屏更快
  function typesetLazy(root, sel = ".item") {
    if (!window.renderMathInElement) return;
    if (mathObserver) { mathObserver.disconnect(); mathObserver = null; }
    const items = [...root.querySelectorAll(sel)];
    if (!items.length) return;
    mathObserver = new IntersectionObserver((entries, ob) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          typeset(en.target);
          en.target.classList.add("math-done");
          ob.unobserve(en.target);
        }
      });
    }, { rootMargin: "400px 0px" });
    items.forEach((el, i) => {
      if (i < 6) { typeset(el); el.classList.add("math-done"); }
      else mathObserver.observe(el);
    });
  }

  function copyText(text, btn) {
    const done = () => {
      const old = btn.textContent;
      btn.textContent = "已复制";
      btn.classList.add("copied");
      setTimeout(() => { btn.textContent = old; btn.classList.remove("copied"); }, 1400);
    };
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (_) { /* 忽略 */ }
      ta.remove();
    };
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else fallback();
  }

  /* ---------------- 数据 ---------------- */
  async function loadBooks() {
    const res = await fetch("data/books.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("无法加载 data/books.json");
    const data = await res.json();
    SITE = data.site || SITE;
    BOOKS = data.books || [];
    document.title = SITE.title;
    buildBooks();
  }

  async function ensureBook(id) {
    if (CACHE.has(id)) return CACHE.get(id);
    const meta = BOOKS.find((b) => b.id === id);
    if (!meta) throw new Error(`未知的书 ${id}`);
    const res = await fetch(`data/${id}.json`, { cache: "no-cache" });
    if (!res.ok) throw new Error(`无法加载 ${id}.json`);
    const data = await res.json();
    const sections = [];
    for (const ch of data.chapters) {
      for (const s of ch.sections) {
        const sec = { ...s, chapter: ch.no, chapterTitle: ch.title, book: meta };
        sections.push(sec);
        for (const it of sec.items) {
          INDEX.set(`${id}/${sec.id}/${it.anchor}`, { item: it, section: sec, book: meta });
          SRC.set(`${id}/${sec.id}/${it.anchor}`, it.src || "");
        }
      }
    }
    const loaded = { ...meta, chapters: data.chapters, sections };
    CACHE.set(id, loaded);
    return loaded;
  }

  async function loadSearch() {
    if (SEARCH) return;
    const res = await fetch("data/search.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("无法加载 search.json");
    SEARCH = await res.json();
    SEARCH_N = SEARCH.map((e) => e[7] || norm(`${e[3]} ${e[4]} ${e[5]} ${e[6]}`));
  }

  /* ---------------- 侧栏 ---------------- */
  function buildBooks() {
    $("#books").innerHTML = BOOKS.map((b) => `
      <button class="book-btn" type="button" data-book="${esc(b.id)}" title="${esc(b.title)}">
        <span class="bk-name">${esc(b.short || b.title)}</span><span class="cnt">${b.count || "待录入"}</span></button>`).join("");
  }

  function buildToc(meta) {
    const nav = $("#toc");
    if (!meta) { nav.innerHTML = ""; return; }
    if (!meta.chapters || !meta.chapters.length) {
      nav.innerHTML = `<div class="toc-empty">本书尚未录入条目。</div>`;
      return;
    }
    let html = "", lastCh = null;
    for (const ch of meta.chapters) {
      for (const s of ch.sections) {
        if (ch.title !== lastCh) { html += `<div class="chap-title">${esc(ch.title)}</div>`; lastCh = ch.title; }
        html += `<a class="sec-link" href="#/${esc(meta.id)}/${esc(s.id)}" data-sec="${esc(s.id)}">
          <span>${esc(s.id)}&nbsp;${esc(s.title)}</span><span class="n">${s.count}</span></a>`;
      }
    }
    nav.innerHTML = html;
  }

  function setBook(meta) {
    currentMeta = meta;
    document.querySelectorAll(".book-btn").forEach((x) => x.classList.toggle("active", x.dataset.book === meta.id));
    buildToc(meta);
  }

  function markActive() {
    document.querySelectorAll(".sec-link").forEach((a) => {
      a.classList.toggle("active", !!(current && a.dataset.sec === current.id && a.getAttribute("href").includes(`/${currentMeta.id}/`)));
    });
  }

  /* ---------------- 条目 ---------------- */
  function srcBlock(key) {
    return `<pre class="src">${esc(SRC.get(key) || "")}</pre>`;
  }

  function itemHtml(it, opts = {}) {
    const key = `${it.bookId || ""}/${it.secId || ""}/${it.anchor}`;
    const showSrc = srcAll || srcSet.has(key);
    const head = `
      <div class="item-head">
        <span class="badge">${esc(it.type)}</span>
        ${it.number ? `<span class="num">${esc(it.number)}</span>` : ""}
        ${it.title ? `<span class="title">${esc(it.title)}</span>` : ""}
        <span class="head-right">
          ${opts.label ? `<span class="sr-src">${esc(opts.label)}</span>` : ""}
          <span class="pageref">p.${it.page}</span>
          <button class="src-copy" type="button" data-copy-src="${esc(key)}"
            title="复制该条的 Markdown/LaTeX 源码">复制</button>
          <button class="src-toggle" type="button" data-src-toggle="${esc(key)}"
            title="在渲染结果与 Markdown/LaTeX 源码之间切换">${showSrc ? "渲染" : "源码"}</button>
        </span>
      </div>`;
    const inner = showSrc ? srcBlock(key) : it.html;
    const hide = opts.hidden && (opts.force || !!it.title);
    const body = hide
      ? `<div class="stmt hidden-stmt">${inner}</div>
         <div class="reveal">点击或按 <kbd>空格</kbd> 显示陈述</div>`
      : `<div class="stmt">${inner}</div>`;
    return `<article class="item${hide ? "" : " revealed"}"
      data-type="${esc(it.type)}" data-anchor="${esc(it.anchor)}" data-key="${esc(key)}"
      id="i-${esc(it.bookId || "")}-${esc(it.secId || "")}-${esc(it.anchor)}">${head}${body}</article>`;
  }

  function paintCard(card) {
    if (!card) return;
    const key = card.dataset.key;
    const rec = INDEX.get(key);
    if (!rec) return;
    const show = srcAll || srcSet.has(key);
    const stmt = card.querySelector(".stmt");
    if (!stmt) return;
    stmt.innerHTML = show ? srcBlock(key) : rec.item.html;
    if (!show) typeset(stmt);
    const btn = card.querySelector("[data-src-toggle]");
    if (btn) btn.textContent = show ? "渲染" : "源码";
  }

  function filterItems(items) {
    const f = FILTERS.find((x) => x[0] === typeFilter);
    if (!f || !f[2]) return items;
    return items.filter((it) => f[2].includes(it.type));
  }

  function sectionHead(s, items) {
    document.body.classList.remove("home-mode");
    document.body.classList.remove("card-mode");
    const b = s.book;
    const chips = FILTERS.map(([key, label, types]) => {
      const n = types ? s.items.filter((it) => types.includes(it.type)).length : s.items.length;
      return `<button class="chip${typeFilter === key ? " active" : ""}" type="button" data-filter="${key}">${label}<em>${n}</em></button>`;
    }).join("");
    const defsBtn = `<button class="chip${defsOpen ? " active" : ""}" type="button" data-defs>${defsOpen ? "收起定义" : "展开定义"}</button>`;
    return `
      <div class="sec-head">
        <h1>${esc(s.id)}&nbsp;&nbsp;${esc(s.title)}</h1>
        <div class="meta">
          <span>${esc(b.title)}${b.author ? ` · ${esc(b.author)}` : ""}</span>
          <span>${esc(s.chapterTitle)}</span>
          <span>${s.items.length} 个条目${items.length !== s.items.length ? `（当前显示 ${items.length}）` : ""}</span>
          ${s.pages ? `<span>原书 p.${esc(s.pages)}</span>` : ""}
        </div>
        ${b.note ? `<p class="book-note">${esc(b.note)}</p>` : ""}
        <div class="filters">${chips}${defsBtn}</div>
      </div>`;
  }

  function renderSection(s) {
    const b = s.book;
    const items = filterItems(s.items);
    const body = items.length
      ? items.map((it) => itemHtml({ ...it, bookId: b.id, secId: s.id }, { hidden: !defsOpen && it.type === "定义", force: true })).join("")
      : `<div class="empty">这一节没有该类型的条目。</div>`;
    $("#view").innerHTML = sectionHead(s, items) + body;
    typesetLazy($("#view"));
    $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <b>${esc(b.short || b.title)}</b> · ${esc(s.id)} ${esc(s.title)}`;
    markActive();
    window.scrollTo({ top: 0 });
  }

  function renderCard(idx) {
    if (!current) { route(); return; }
    const items = filterItems(current.items);
    if (!items.length) { renderSection(current); return; }
    cardIdx = Math.max(0, Math.min(items.length - 1, idx | 0));
    const it = items[cardIdx];
    const b = current.book;
    const head = sectionHead(current, items);
    document.body.classList.add("card-mode");
    $("#view").innerHTML = head + `
      <div class="card-view">
        <div class="card-bar">
          <button class="card-nav" type="button" data-card="-1" ${cardIdx === 0 ? "disabled" : ""}>← 上一条</button>
          <span class="card-count">${cardIdx + 1} / ${items.length}</span>
          <button class="card-nav" type="button" data-card="1" ${cardIdx === items.length - 1 ? "disabled" : ""}>下一条 →</button>
        </div>
        ${itemHtml({ ...it, bookId: b.id, secId: current.id }, { hidden: true })}
        <p class="card-hint">← → 翻动 · 空格 显示/隐藏 · Esc 回到阅读</p>
      </div>`;
    typesetLazy($("#view"));
    $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <b>${esc(b.short || b.title)}</b> · ${esc(current.id)} 卡片`;
    markActive();
    window.scrollTo({ top: 0 });
  }

  function renderEmptyBook(meta) {
    document.body.classList.remove("home-mode");
    $("#view").innerHTML = `
      <div class="sec-head"><h1>${esc(meta.title)}</h1>
        <div class="meta"><span>${esc(meta.author || "")}</span></div>
        ${meta.note ? `<p class="book-note">${esc(meta.note)}</p>` : ""}
      </div>
      <div class="empty">这本书还没有录入条目。录入时在 <code>content/${esc(meta.id)}/</code> 下按节新建 Markdown 文件即可。</div>`;
    $("#crumbs").innerHTML = `<b>${esc(meta.short || meta.title)}</b>`;
    markActive();
  }

  async function renderRandom() {
    document.body.classList.remove("home-mode");
    const meta = currentMeta || BOOKS[0];
    if (!meta) return;
    const book = await ensureBook(meta.id);
    const pool = book.sections.flatMap((s) => s.items.map((it) => ({ it, s })));
    if (!pool.length) { renderEmptyBook(meta); return; }
    const { it, s } = pool[Math.floor(Math.random() * pool.length)];
    $("#view").innerHTML = `
      <div class="sec-head">
        <h1>随机自测</h1>
        <div class="meta"><span>来自 ${esc(book.short || book.title)} ${esc(s.id)} ${esc(s.title)}</span><span>本节书共 ${pool.length} 个条目</span></div>
      </div>
      ${itemHtml({ ...it, bookId: book.id, secId: s.id }, { hidden: true })}
      <p style="margin-top:18px"><button id="again" class="ghost-btn" type="button">换一条（r）</button></p>`;
    typesetLazy($("#view"));
    $("#crumbs").innerHTML = `<b>随机</b> · ${esc(book.short || book.title)} ${esc(s.id)}`;    $("#again").onclick = renderRandom;
    markActive();
  }

  function highlight(text, terms) {
    const t = terms.filter(Boolean).map((x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    // 切成"普通文本/公式"交替的片段，只在普通文本里加高亮，避免破坏 KaTeX
    const parts = String(text).split(/(\$\$[\s\S]*?\$\$|\$[^$]*\$)/g);
    return parts.map((p, i) => {
      if (i % 2) return esc(p);
      const safe = esc(p);
      if (!t.length) return safe;
      try { return safe.replace(new RegExp(`(${t.join("|")})`, "gi"), "<mark>$1</mark>"); }
      catch (_) { return safe; }
    }).join("");
  }

  async function renderSearch(q) {
    document.body.classList.remove("home-mode");
    await loadSearch();
    const terms = norm(q).split(" ").filter(Boolean);
    const hitIdx = [];
    for (let i = 0; i < SEARCH.length && hitIdx.length < 200; i++) {
      if (terms.every((t) => SEARCH_N[i].includes(t))) hitIdx.push(i);
    }
    const shown = hitIdx.slice(0, 80);
    const rows = shown.map((i) => {
      const e = SEARCH[i];
      const book = BOOKS.find((b) => b.id === e[0]);
      return `<a class="hit" href="#/${esc(e[0])}/${esc(e[1])}/${esc(e[2])}">
        <span class="badge" data-type="${esc(e[3])}">${esc(e[3])}</span>
        <b>${esc(e[4] || "")}</b>
        <span class="hit-title">${esc(e[5] || "")}</span>
        <span class="hit-src">${esc(book ? book.short || book.title : e[0])} · ${esc(e[1])}</span>
        <p class="hit-text">${highlight(e[6], terms)}</p>
      </a>`;
    }).join("");
    $("#view").innerHTML = `
      <div class="sec-head"><h1>搜索</h1>
        <div class="meta"><span>“${esc(q)}” 命中 ${hitIdx.length} 条${hitIdx.length > shown.length ? `（显示前 ${shown.length} 条）` : ""}</span></div>
      </div>` + (rows || `<div class="empty">没有匹配的条目。</div>`);
    $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <b>搜索</b> “${esc(q)}”`;
    typesetLazy($("#view"), ".hit");
    markActive();
  }

  function renderHome() {
    document.body.classList.add("home-mode");
    document.title = SITE.title || "数学命题索引";
    const total = BOOKS.reduce((a, b) => a + b.count, 0);
    const cards = BOOKS.map((b) => {
      const first = b.chapters && b.chapters[0] && b.chapters[0].sections[0];
      const href = b.count && first ? `#/${b.id}/${encodeURIComponent(first.id)}` : `#/${b.id}`;
      const secCount = (b.chapters || []).reduce((a, c) => a + c.sections.length, 0);
      return `<a class="book-card${b.count ? "" : " empty"}" href="${href}">
        <div class="bc-head"><span class="bc-title">${esc(b.title)}</span>
          <span class="bc-count">${b.count ? `${b.count} 条` : "待录入"}</span></div>
        <div class="bc-author">${esc(b.author || "")}</div>
        <div class="bc-meta">${b.chapters.length} 章 · ${secCount} 节</div>
        ${b.note ? `<p class="bc-note">${esc(b.note)}</p>` : ""}
      </a>`;
    }).join("");
    $("#view").innerHTML = `
      <div class="home">
        <div class="home-head">
          <h1>${esc(SITE.title || "数学命题索引")}</h1>
          <p class="home-sub">${esc(SITE.subtitle || "")}</p>
          <p class="home-stat">共 ${BOOKS.length} 本书 · ${total} 条命题 · 只含陈述，不含证明与习题</p>
        </div>
        <div class="book-grid">${cards}</div>
        <p class="home-tip">点击书名进入。<kbd>/</kbd> 搜索全部条目，<kbd>s</kbd> 切换源码，条目右上角“复制”直接取走 Markdown/LaTeX。</p>
      </div>`;
    $("#crumbs").innerHTML = `<b>全部书目</b>`;
    document.querySelectorAll(".book-btn").forEach((x) => x.classList.remove("active"));
    document.querySelectorAll(".sec-link").forEach((x) => x.classList.remove("active"));
    window.scrollTo({ top: 0 });
  }

  function showLoading() {
    $("#view").innerHTML = `<div class="empty">加载中…</div>`;
  }

  /* ---------------- 路由 ---------------- */
  function parseHash() {
    const parts = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/").filter(Boolean);
    const book = BOOKS.find((b) => b.id === parts[0]);
    if (book) return { bookId: book.id, secId: parts[1], anchor: parts[2] };
    return { bookId: (BOOKS[0] || {}).id, secId: parts[0], anchor: parts[1] };
  }

  async function route() {
    if (!BOOKS.length) {
      $("#view").innerHTML = `<div class="empty">还没有任何书。请在 content/ 下新建书目录。</div>`;
      return;
    }
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) { renderHome(); return; }
    const token = ++loadToken;
    const { bookId, secId, anchor } = parseHash();
    const meta = BOOKS.find((b) => b.id === bookId) || BOOKS[0];
    setBook(meta);
    if (!meta.count) { current = null; renderEmptyBook(meta); return; }
    showLoading();
    try {
      const book = await ensureBook(meta.id);
      if (token !== loadToken) return;
      if (anchor) {
        const rec = INDEX.get(`${meta.id}/${secId}/${anchor}`);
        if (rec) {
          current = rec.section;
          renderSection(rec.section);
          const el = document.getElementById(`i-${meta.id}-${secId}-${anchor}`);
          if (el) { el.classList.add("revealed", "flash"); el.scrollIntoView({ block: "center" }); }
          return;
        }
      }
      const s = book.sections.find((x) => x.id === secId) || book.sections[0];
      current = s;
      if (mode === "card") renderCard(0);
      else if (mode === "random") await renderRandom();
      else renderSection(s);
    } catch (err) {
      if (token === loadToken) $("#view").innerHTML = `<div class="empty">加载失败：${esc(err.message)}</div>`;
    }
  }

  /* ---------------- 交互 ---------------- */
  document.addEventListener("click", async (e) => {
    const srcBtn = e.target.closest("[data-src-toggle]");
    if (srcBtn) {
      const key = srcBtn.dataset.srcToggle;
      if (srcSet.has(key)) srcSet.delete(key); else srcSet.add(key);
      paintCard(srcBtn.closest(".item"));
      return;
    }

    const copyBtn = e.target.closest("[data-copy]");
    if (copyBtn) { copyText(SRC.get(copyBtn.dataset.copy) || "", copyBtn); return; }

    const copySrc = e.target.closest("[data-copy-src]");
    if (copySrc) { copyText(SRC.get(copySrc.dataset.copySrc) || "", copySrc); return; }

    const cardBtn = e.target.closest("[data-card]");
    if (cardBtn) { renderCard(cardIdx + Number(cardBtn.dataset.card)); return; }

    const defsBtn = e.target.closest("[data-defs]");
    if (defsBtn) {
      defsOpen = !defsOpen;
      if (current) { if (mode === "card") renderCard(cardIdx); else renderSection(current); }
      return;
    }

    const chip = e.target.closest("[data-filter]");
    if (chip) {
      typeFilter = chip.dataset.filter;
      if (current) { if (mode === "card") renderCard(0); else renderSection(current); }
      return;
    }

    const bookBtn = e.target.closest(".book-btn");
    if (bookBtn) {
      const b = BOOKS.find((x) => x.id === bookBtn.dataset.book);
      if (b) {
        $("#sidebar").classList.remove("open");
        if (!b.count) { setBook(b); current = null; renderEmptyBook(b); location.hash = `#/${b.id}`; return; }
        const first = b.chapters[0].sections[0];
        location.hash = `#/${b.id}/${encodeURIComponent(first.id)}`;
        if (decodeURIComponent(location.hash) === `#/${b.id}/${first.id}`) route();
      }
      return;
    }

    const reveal = e.target.closest(".reveal");
    if (reveal) {
      const card = reveal.closest(".item");
      card.classList.add("revealed");
      reveal.remove();
      if (!card.classList.contains("math-done")) { typeset(card); card.classList.add("math-done"); }
    }
  });

  document.querySelectorAll(".mode").forEach((b) => {
    b.addEventListener("click", () => {
      const m = b.dataset.mode;
      if (!m) return;
      mode = m;
      document.querySelectorAll(".mode[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === m));
      if (m === "random") renderRandom();
      else if (query) renderSearch(query);
      else if (!current) route();
      else if (m === "card") renderCard(0);
      else renderSection(current);
    });
  });

  const searchEl = $("#search");
  let timer = null;
  searchEl.addEventListener("input", () => {
    clearTimeout(timer);
    const v = searchEl.value;
    timer = setTimeout(() => {
      query = v.trim();
      if (!query) { route(); return; }
      renderSearch(query);
    }, 160);
  });

  function firstHidden() { return document.querySelector(".item:not(.revealed)"); }

  function jumpSection(dir) {
    if (!current || !currentMeta) return;
    const book = CACHE.get(currentMeta.id);
    if (!book) return;
    const i = book.sections.findIndex((s) => s.id === current.id);
    const j = Math.max(0, Math.min(book.sections.length - 1, i + dir));
    if (j !== i) location.hash = `#/${currentMeta.id}/${encodeURIComponent(book.sections[j].id)}`;
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) {
      if (e.key === "Escape") { searchEl.value = ""; query = ""; searchEl.blur(); route(); }
      return;
    }
    if (e.key === "Escape") {
      $("#modal").hidden = true;
      if (mode === "card" && current) {
        mode = "read";
        document.querySelectorAll(".mode[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === "read"));
        renderSection(current);
      }
      return;
    }
    if (e.key === "/") { e.preventDefault(); searchEl.focus(); return; }
    if (e.key === "s") { e.preventDefault(); setSrcAll(!srcAll); return; }
    if (e.key === "r") {
      mode = "random";
      document.querySelectorAll(".mode[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === "random"));
      renderRandom();
      return;
    }
    if (e.key === " ") {
      const card = firstHidden();
      if (card) {
        e.preventDefault();
        card.classList.add("revealed");
        card.querySelector(".reveal")?.remove();
        if (!card.classList.contains("math-done")) { typeset(card); card.classList.add("math-done"); }
      }
      return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      if (e.shiftKey) { e.preventDefault(); jumpSection(e.key === "ArrowRight" ? 1 : -1); return; }
      if (mode === "card" && current) { e.preventDefault(); renderCard(cardIdx + (e.key === "ArrowRight" ? 1 : -1)); return; }
      const cards = [...document.querySelectorAll(".item")];
      if (!cards.length) return;
      const vis = cards.findIndex((c) => c.getBoundingClientRect().top > 40);
      const i = Math.max(0, Math.min(cards.length - 1, (vis < 0 ? cards.length - 1 : vis) + (e.key === "ArrowRight" ? 1 : -1)));
      cards[i].scrollIntoView({ block: "center", behavior: "smooth" });
      cards[i].classList.add("flash");
    }
  });

  const themeBtn = $("#theme-btn");
  const THEMES = ["auto", "light", "dark"];
  const THEME_LABEL = { auto: "主题：自动", light: "主题：浅色", dark: "主题：深色" };
  function applyTheme(t) {
    if (t === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = t;
    try { localStorage.setItem("fa.theme", t); } catch (_) { /* 忽略 */ }
    themeBtn.textContent = THEME_LABEL[t] || THEME_LABEL.auto;
  }
  themeBtn.addEventListener("click", () => {
    const cur = document.documentElement.dataset.theme || "auto";
    applyTheme(THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length]);
  });

  const srcBtn = $("#src-btn");
  function setSrcAll(v) {
    srcAll = v;
    srcBtn.classList.toggle("active", v);
    document.querySelectorAll(".item").forEach(paintCard);
    try {
      const u = new URL(location.href);
      if (v) u.searchParams.set("src", "1"); else u.searchParams.delete("src");
      history.replaceState(null, "", u);
    } catch (_) { /* file:// 等场景忽略 */ }
  }
  srcBtn.addEventListener("click", () => setSrcAll(!srcAll));

  $("#about-btn").addEventListener("click", () => { $("#modal").hidden = false; });
  $(".brand").addEventListener("click", () => {
    if (location.hash === "#/" || !location.hash) { renderHome(); } else { location.hash = "#/"; }
  });
  $("#home-btn").addEventListener("click", () => {
    $("#sidebar").classList.remove("open");
    if (location.hash === "#/" || !location.hash) { renderHome(); } else { location.hash = "#/"; }
  });
  $("#modal-close").addEventListener("click", () => { $("#modal").hidden = true; });
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") $("#modal").hidden = true; });
  $("#menu-btn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#toc").addEventListener("click", () => $("#sidebar").classList.remove("open"));

  window.addEventListener("hashchange", () => {
    query = "";
    searchEl.value = "";
    route();
  });

  /* ---------------- 启动 ---------------- */
  loadBooks()
    .then(() => {
      const qs = new URLSearchParams(location.search);
      const qm = qs.get("mode");
      if (["read", "card", "random"].includes(qm)) mode = qm;
      if (qm === "test") mode = "read";
      document.querySelectorAll(".mode[data-mode]").forEach((x) =>
        x.classList.toggle("active", x.dataset.mode === mode));
      let savedTheme = "auto";
      try { savedTheme = localStorage.getItem("fa.theme") || "auto"; } catch (_) { /* 忽略 */ }
      const qt = qs.get("theme");
      applyTheme(THEMES.includes(qt) ? qt : savedTheme);
      if (qs.get("src") === "1") setSrcAll(true);
      const qq = qs.get("q");
      if (qq) { searchEl.value = qq; query = qq; renderSearch(qq); return; }
      const qb = qs.get("book");
      if (qb) {
        const b = BOOKS.find((x) => x.id === qb);
        if (b && !location.hash) { location.hash = `#/${b.id}`; return; }
      }
      route();
    })
    .catch((err) => {
      $("#view").innerHTML = `<div class="empty">加载失败：${esc(err.message)}<br><br>
        如果是直接双击打开的本地文件，请改用本地服务器：<code>python -m http.server 8000 -d site</code></div>`;
    });
})();
