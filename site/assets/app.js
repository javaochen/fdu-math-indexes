/* 泛函分析 · 命题索引 —— 纯静态前端 */
(function () {
  "use strict";

  const $ = (s) => document.querySelector(s);

  let DATA = null;
  let SECTIONS = [];          // 扁平章节列表
  let INDEX = new Map();      // anchor -> {item, section}
  let mode = "read";
  let current = null;         // 当前 section
  let query = "";
  let randomItem = null;

  /* ---------------- 工具 ---------------- */
  const stripTags = (h) => h.replace(/<[^>]+>/g, " ").replace(/&[a-z]+;/g, " ");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

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
    SECTIONS = [];
    for (const ch of DATA.chapters) {
      for (const sec of ch.sections) {
        const s = { ...sec, chapter: ch.no, chapterTitle: ch.title, items: sec.items };
        SECTIONS.push(s);
        for (const it of sec.items) INDEX.set(it.anchor, { item: it, section: s });
      }
    }
    buildToc();
  }

  function buildToc() {
    const nav = $("#toc");
    let html = "";
    let lastCh = null;
    for (const s of SECTIONS) {
      if (s.chapterTitle !== lastCh) {
        html += `<div class="chap-title">${esc(s.chapterTitle)}</div>`;
        lastCh = s.chapterTitle;
      }
      html += `<a class="sec-link" href="#/${esc(s.id)}" data-sec="${esc(s.id)}">
        <span>${esc(s.id)}&nbsp;${esc(s.title)}</span><span class="n">${s.items.length}</span></a>`;
    }
    nav.innerHTML = html;
  }

  function markActive() {
    document.querySelectorAll(".sec-link").forEach((a) => {
      a.classList.toggle("active", current && a.dataset.sec === current.id);
    });
  }

  /* ---------------- 条目渲染 ---------------- */
  function itemHtml(it, opts = {}) {
    const head = `
      <div class="item-head">
        <span class="badge">${esc(it.type)}</span>
        ${it.number ? `<span class="num">${esc(it.number)}</span>` : ""}
        ${it.title ? `<span class="title">${esc(it.title)}</span>` : ""}
        <span class="head-right">
          <span class="pageref">p.${it.page}</span>
        </span>
      </div>`;
    const hide = opts.hidden && !!it.title;
    const body = hide
      ? `<div class="stmt hidden-stmt">${it.html}</div>
         <div class="reveal">点击或按 <kbd>空格</kbd> 显示陈述</div>`
      : `<div class="stmt">${it.html}</div>`;
    return `<article class="item${hide ? "" : " revealed"}"
      data-type="${esc(it.type)}" data-anchor="${esc(it.anchor)}" id="i-${esc(it.anchor)}">${head}${body}</article>`;
  }

  function renderSection(s) {
    const head = `
      <div class="sec-head">
        <h1>${esc(s.id)}&nbsp;&nbsp;${esc(s.title)}</h1>
        <div class="meta">
          <span>${esc(s.chapterTitle)}</span>
          <span>${s.items.length} 个条目</span>
          ${s.pages ? `<span>原书 p.${esc(s.pages)}</span>` : ""}
        </div>
      </div>`;
    const body = s.items.map((it) => itemHtml(it, { hidden: mode === "test" })).join("");
    $("#view").innerHTML = head + body;
    typeset($("#view"));
    $("#crumbs").innerHTML = `<b>${esc(s.id)} ${esc(s.title)}</b> · 第${esc(s.chapter)}章 ${esc(s.chapterTitle)}`;
    markActive();
    window.scrollTo({ top: 0 });
  }

  function renderRandom() {
    const pool = current ? current.items : SECTIONS.flatMap((s) => s.items);
    const it = pool[Math.floor(Math.random() * pool.length)];
    randomItem = it;
    const s = INDEX.get(it.anchor).section;
    $("#view").innerHTML = `
      <div class="sec-head">
        <h1>随机自测</h1>
        <div class="meta"><span>来自 ${esc(s.id)} ${esc(s.title)}</span><span>共 ${pool.length} 个条目</span></div>
      </div>
      ${itemHtml(it, { hidden: true })}
      <p style="margin-top:18px"><button id="again" class="mode" style="border:1px solid var(--line);border-radius:8px;padding:6px 14px" type="button">换一条（r）</button></p>`;
    typeset($("#view"));
    $("#crumbs").innerHTML = `<b>随机</b> · ${esc(s.id)} ${esc(s.title)}`;
    $("#again").onclick = renderRandom;
    markActive();
  }

  function renderSearch(q) {
    const needle = q.trim().toLowerCase();
    const hits = [];
    for (const s of SECTIONS) {
      for (const it of s.items) {
        const hay = `${it.type} ${it.number} ${it.title} ${stripTags(it.html)}`.toLowerCase();
        if (hay.includes(needle)) hits.push({ it, s });
      }
    }
    const shown = hits.slice(0, 60);
    $("#view").innerHTML = `
      <div class="sec-head"><h1>搜索</h1>
        <div class="meta"><span>“${esc(q)}” 命中 ${hits.length} 条${hits.length > shown.length ? `，显示前 ${shown.length} 条` : ""}</span></div>
      </div>` +
      shown.map(({ it, s }) => itemHtml(it, { hidden: false })).join("") ||
      `<div class="empty">没有匹配的条目。</div>`;
    typeset($("#view"));
    $("#crumbs").innerHTML = `<b>搜索</b> “${esc(q)}”`;
    markActive();
  }

  /* ---------------- 路由 ---------------- */
  function route() {
    const h = decodeURIComponent(location.hash.replace(/^#\/?/, ""));
    const [secId, anchor] = h.split("/");
    if (anchor && INDEX.has(anchor)) {
      const rec = INDEX.get(anchor);
      current = rec.section;
      renderSection(rec.section);
      const el = document.getElementById(`i-${anchor}`);
      if (el) {
        el.classList.add("revealed", "flash");
        el.scrollIntoView({ block: "center" });
      }
      return;
    }
    const s = SECTIONS.find((x) => x.id === secId) || SECTIONS[0];
    if (!s) return;
    current = s;
    if (mode === "random") renderRandom();
    else renderSection(s);
  }

  function goSection(id) {
    location.hash = `#/${encodeURIComponent(id)}`;
    if (location.hash === `#/${encodeURIComponent(id)}`) route();
  }

  /* ---------------- 交互 ---------------- */
  document.addEventListener("click", (e) => {
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

  function revealedCard() {
    return document.querySelector(".item:not(.revealed)");
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) {
      if (e.key === "Escape") { searchEl.value = ""; query = ""; searchEl.blur(); route(); }
      return;
    }
    if (e.key === "Escape") { $("#modal").hidden = true; return; }
    if (e.key === "/") { e.preventDefault(); searchEl.focus(); return; }
    if (e.key === "r") { mode = "random"; document.querySelectorAll(".mode[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === "random")); renderRandom(); return; }
    if (e.key === " ") {
      const card = revealedCard();
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
  document.querySelectorAll(".sec-link, #toc").forEach((el) =>
    el.addEventListener("click", () => $("#sidebar").classList.remove("open")));

  window.addEventListener("hashchange", () => { query = ""; searchEl.value = ""; route(); });

  /* ---------------- 启动 ---------------- */
  load()
    .then(() => {
      const qm = new URLSearchParams(location.search).get("mode");
      if (["read", "test", "random"].includes(qm)) mode = qm;
      document.querySelectorAll(".mode[data-mode]").forEach((x) =>
        x.classList.toggle("active", x.dataset.mode === mode));
      route();
    })
    .catch((err) => {
      $("#view").innerHTML = `<div class="empty">加载失败：${esc(err.message)}<br><br>
        如果是直接双击打开的本地文件，请改用本地服务器：<code>python -m http.server 8000 -d site</code></div>`;
    });
})();
