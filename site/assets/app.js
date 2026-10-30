/* 数学命题索引 —— 纯静态前端（支持多本书） */
(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);

  let DATA = null;
  let BOOKS = [];              // 每本：{...book, sections: [...]}
  let INDEX = new Map();       // "bookId/anchor" -> {item, section, book}
  let mode = "read";
  let currentBook = null;
  let current = null;          // 当前节
  let query = "";
  let randomItem = null;

  /* ---------------- 工具 ---------------- */
  const stripTags = (h) => h.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const bookItems = (b) => b.sections.flatMap((s) => s.items);

  function typeset(el) {
    if (!window.renderMathInElement) return;
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
        { left: "\\(", right: "\\)", display: false },
      ],
      throwOnError: false,
      strict: false,
      trust: true,
    });
  }

  /* ---------------- 数据 ---------------- */
  async function load() {
    const res = await fetch("data/index.json", { cache: "no-cache" });
    if (!res.ok) throw new Error("无法加载 data/index.json");
    DATA = await res.json();
    BOOKS = (DATA.books || []).map((b) => {
      const sections = [];
      for (const ch of b.chapters) {
        for (const s of ch.sections) {
          const sec = { ...s, chapter: ch.no, chapterTitle: ch.title, book: b };
          sections.push(sec);
          for (const it of sec.items) INDEX.set(`${b.id}/${it.anchor}`, { item: it, section: sec, book: b });
        }
      }
      return { ...b, sections };
    });
    if (DATA.site && DATA.site.title) document.title = DATA.site.title;
    buildBooks();
  }

  function buildBooks() {
    $("#books").innerHTML = BOOKS.map((b) => {
      const n = bookItems(b).length;
      return `<button class="book-btn" type="button" data-book="${esc(b.id)}">
        ${esc(b.title)}<span class="cnt">${n || "待录入"}</span></button>`;
    }).join("");
  }

  function setBook(b) {
    currentBook = b;
    document.querySelectorAll(".book-btn").forEach((x) => x.classList.toggle("active", x.dataset.book === b.id));
    buildToc();
  }

  function buildToc() {
    const nav = $("#toc");
    if (!currentBook) { nav.innerHTML = ""; return; }
    if (!currentBook.sections.length) {
      nav.innerHTML = `<div class="toc-empty">本书尚未录入条目。</div>`;
      return;
    }
    let html = "";
    let lastCh = null;
    for (const s of currentBook.sections) {
      if (s.chapterTitle !== lastCh) {
        html += `<div class="chap-title">${esc(s.chapterTitle)}</div>`;
        lastCh = s.chapterTitle;
      }
      html += `<a class="sec-link" href="#/${esc(currentBook.id)}/${esc(s.id)}" data-sec="${esc(s.id)}">
        <span>${esc(s.id)}&nbsp;${esc(s.title)}</span><span class="n">${s.items.length}</span></a>`;
    }
    nav.innerHTML = html;
  }

  function markActive() {
    document.querySelectorAll(".sec-link").forEach((a) => {
      a.classList.toggle("active", !!(current && currentBook && a.dataset.sec === current.id && a.getAttribute("href").includes(`/${currentBook.id}/`)));
    });
  }

  /* ---------------- 条目渲染 ---------------- */
  function itemHtml(it, opts = {}) {
    const head = `
      <div class="item-head">
        <span class="badge">${esc(it.type)}</span>
        ${it.number ? `<span class="num">${esc(it.number)}</span>` : ""}
        ${it.title ? `<span class="title">${esc(it.title)}</span>` : ""}
        <span class="head-right">${opts.src ? `<span class="sr-src">${esc(opts.src)}</span>` : ""}<span class="pageref">p.${it.page}</span></span>
      </div>`;
    const hide = opts.hidden && !!it.title;
    const body = hide
      ? `<div class="stmt hidden-stmt">${it.html}</div>
         <div class="reveal">点击或按 <kbd>空格</kbd> 显示陈述</div>`
      : `<div class="stmt">${it.html}</div>`;
    return `<article class="item${hide ? "" : " revealed"}"
      data-type="${esc(it.type)}" data-anchor="${esc(it.anchor)}" id="i-${esc(it.bookId || "")}${esc(it.anchor)}">${head}${body}</article>`;
  }

  function renderSection(s) {
    const b = s.book;
    const head = `
      <div class="sec-head">
        <h1>${esc(s.id)}&nbsp;&nbsp;${esc(s.title)}</h1>
        <div class="meta">
          <span>${esc(b.title)}${b.author && b.author !== "待确认" ? ` · ${esc(b.author)}` : ""}</span>
          <span>${esc(s.chapterTitle)}</span>
          <span>${s.items.length} 个条目</span>
          ${s.pages ? `<span>原书 p.${esc(s.pages)}</span>` : ""}
        </div>
      </div>`;
    const body = s.items.map((it) => itemHtml({ ...it, bookId: b.id }, { hidden: mode === "test" })).join("");
    $("#view").innerHTML = head + body;
    typeset($("#view"));
    $("#crumbs").innerHTML = `<b>${esc(b.title)}</b> · ${esc(s.id)} ${esc(s.title)}`;
    markActive();
    window.scrollTo({ top: 0 });
  }

  function renderEmptyBook(b) {
    $("#view").innerHTML = `
      <div class="sec-head"><h1>${esc(b.title)}</h1>
        <div class="meta"><span>${esc(b.source || "")}</span></div>
      </div>
      <div class="empty">这本书还没有录入条目。录入时在 <code>content/${esc(b.id)}/</code> 下按节新建 Markdown 文件即可。</div>`;
    $("#crumbs").innerHTML = `<b>${esc(b.title)}</b>`;
    markActive();
  }

  function renderRandom() {
    let pool = currentBook ? bookItems(currentBook) : BOOKS.flatMap(bookItems);
    if (!pool.length) { renderEmptyBook(currentBook || BOOKS[0]); return; }
    const it = pool[Math.floor(Math.random() * pool.length)];
    randomItem = it;
    const rec = INDEX.get(`${currentBook ? currentBook.id : BOOKS[0].id}/${it.anchor}`);
    const s = (rec && rec.section) || current;
    const b = (rec && rec.book) || currentBook;
    $("#view").innerHTML = `
      <div class="sec-head">
        <h1>随机自测</h1>
        <div class="meta"><span>来自 ${esc(b.title)} ${esc(s.id)} ${esc(s.title)}</span><span>共 ${pool.length} 个条目</span></div>
      </div>
      ${itemHtml({ ...it, bookId: b.id }, { hidden: true })}
      <p style="margin-top:18px"><button id="again" class="ghost-btn" type="button">换一条（r）</button></p>`;
    typeset($("#view"));
    $("#crumbs").innerHTML = `<b>随机</b> · ${esc(b.title)} ${esc(s.id)}`;
    $("#again").onclick = renderRandom;
    markActive();
  }

  function renderSearch(q) {
    const needle = q.trim().toLowerCase();
    const hits = [];
    for (const b of BOOKS) {
      for (const s of b.sections) {
        for (const it of s.items) {
          const hay = `${it.type} ${it.number} ${it.title} ${stripTags(it.html)}`.toLowerCase();
          if (hay.includes(needle)) hits.push({ it, s, b });
        }
      }
    }
    const shown = hits.slice(0, 60);
    $("#view").innerHTML = `
      <div class="sec-head"><h1>搜索</h1>
        <div class="meta"><span>“${esc(q)}” 命中 ${hits.length} 条${hits.length > shown.length ? `，显示前 ${shown.length} 条` : ""}</span></div>
      </div>` +
      (shown.map(({ it, s, b }) => itemHtml({ ...it, bookId: b.id }, { src: `${b.title} ${s.id}` })).join("") ||
        `<div class="empty">没有匹配的条目。</div>`);
    typeset($("#view"));
    $("#crumbs").innerHTML = `<b>搜索</b> “${esc(q)}”`;
    markActive();
  }

  /* ---------------- 路由 ---------------- */
  function parseHash() {
    const parts = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/").filter(Boolean);
    let book = BOOKS.find((b) => b.id === parts[0]);
    if (book) return { book, secId: parts[1], anchor: parts[2] };
    return { book: null, secId: parts[0], anchor: parts[1] };
  }

  function route() {
    if (!BOOKS.length) {
      $("#view").innerHTML = `<div class="empty">还没有任何书。请在 content/ 下新建书目录。</div>`;
      return;
    }
    const { book: hb, secId, anchor } = parseHash();
    const book = hb || currentBook || BOOKS[0];
    setBook(book);

    if (anchor) {
      const rec = INDEX.get(`${book.id}/${anchor}`);
      if (rec) {
        current = rec.section;
        renderSection(rec.section);
        const el = document.getElementById(`i-${book.id}${anchor}`);
        if (el) { el.classList.add("revealed", "flash"); el.scrollIntoView({ block: "center" }); }
        return;
      }
    }
    const s = book.sections.find((x) => x.id === secId) || book.sections[0];
    if (!s) { current = null; renderEmptyBook(book); return; }
    current = s;
    if (mode === "random") renderRandom();
    else renderSection(s);
  }

  /* ---------------- 交互 ---------------- */
  document.addEventListener("click", (e) => {
    const bookBtn = e.target.closest(".book-btn");
    if (bookBtn) {
      const b = BOOKS.find((x) => x.id === bookBtn.dataset.book);
      if (b) {
        const first = b.sections[0];
        location.hash = first ? `#/${b.id}/${encodeURIComponent(first.id)}` : `#/${b.id}`;
        if (!first) { setBook(b); current = null; renderEmptyBook(b); }
      }
      return;
    }

    const reveal = e.target.closest(".reveal");
    if (reveal) {
      const card = reveal.closest(".item");
      card.classList.add("revealed");
      reveal.remove();
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
      else if (current) renderSection(current);
      else route();
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
    }, 140);
  });

  function firstHidden() {
    return document.querySelector(".item:not(.revealed)");
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) {
      if (e.key === "Escape") { searchEl.value = ""; query = ""; searchEl.blur(); route(); }
      return;
    }
    if (e.key === "Escape") { $("#modal").hidden = true; return; }
    if (e.key === "/") { e.preventDefault(); searchEl.focus(); return; }
    if (e.key === "r") {
      mode = "random";
      document.querySelectorAll(".mode[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === "random"));
      renderRandom();
      return;
    }
    if (e.key === " ") {
      const card = firstHidden();
      if (card) { e.preventDefault(); card.classList.add("revealed"); card.querySelector(".reveal")?.remove(); }
      return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      const cards = [...document.querySelectorAll(".item")];
      if (!cards.length) return;
      const vis = cards.findIndex((c) => c.getBoundingClientRect().top > 40);
      const i = Math.max(0, Math.min(cards.length - 1, (vis < 0 ? cards.length - 1 : vis) + (e.key === "ArrowRight" ? 1 : -1)));
      cards[i].scrollIntoView({ block: "center", behavior: "smooth" });
      cards[i].classList.add("flash");
    }
  });

  $("#about-btn").addEventListener("click", () => { $("#modal").hidden = false; });
  $("#modal-close").addEventListener("click", () => { $("#modal").hidden = true; });
  $("#modal").addEventListener("click", (e) => { if (e.target.id === "modal") $("#modal").hidden = true; });
  $("#menu-btn").addEventListener("click", () => $("#sidebar").classList.toggle("open"));
  $("#toc").addEventListener("click", () => $("#sidebar").classList.remove("open"));

  window.addEventListener("hashchange", () => { query = ""; searchEl.value = ""; route(); });

  /* ---------------- 启动 ---------------- */
  load()
    .then(() => {
      const qm = new URLSearchParams(location.search).get("mode");
      if (["read", "test", "random"].includes(qm)) mode = qm;
      document.querySelectorAll(".mode[data-mode]").forEach((x) =>
        x.classList.toggle("active", x.dataset.mode === mode));
      const qb = new URLSearchParams(location.search).get("book");
      if (qb) { const b = BOOKS.find((x) => x.id === qb); if (b) currentBook = b; }
      route();
    })
    .catch((err) => {
      $("#view").innerHTML = `<div class="empty">加载失败：${esc(err.message)}<br><br>
        如果是直接双击打开的本地文件，请改用本地服务器：<code>python -m http.server 8000 -d site</code></div>`;
    });
})();
