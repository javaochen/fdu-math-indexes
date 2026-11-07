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
  let lastFoldCard = null;
  let typeFilter = "all";
  let currentMeta = null;
  let current = null;
  let query = "";
  let mathObserver = null;
  let loadToken = 0;
  let exerciseView = false;
  const EXERCISES = new Map(); // 单独懒加载，正文与搜索无需读取习题图片
  const collapsedChapters = new Set(); // `${bookId}/${chapterNo}`

  /* ---------------- 工具 ---------------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const norm = (s) => String(s).toLowerCase().replace(/\\/g, "").replace(/\$/g, "").replace(/\s+/g, " ");

  // 作者头像：只显示有图的作者，无图不占位、不显示文字
  function avatar(b, cls = "") {
    const src = b && b.author_img ? b.author_img : "";
    if (!src) return "";
    const name = (b && b.author) || "";
    return `<span class="avatar ${cls}" title="${esc(name)}" aria-label="${esc(name)}">
      <img src="${esc(src)}" alt="" loading="lazy" onerror="this.parentNode.remove()">
    </span>`;
  }
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
        const listed = (meta.chapters || []).flatMap((c) => c.sections).find((x) => x.id === s.id);
        const sec = { ...s, exercises: listed && listed.exercises, chapter: ch.no, chapterTitle: ch.title, book: meta };
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

  async function ensureExercises(id) {
    if (EXERCISES.has(id)) return EXERCISES.get(id);
    const res = await fetch(`data/${id}-exercises.json`, { cache: "no-cache" });
    if (!res.ok) throw new Error("无法加载本书习题，请稍后重试");
    const data = await res.json();
    for (const [sid, record] of Object.entries(data.sections || {})) {
      for (const it of record.items || []) {
        const key = `${id}/${sid}/exercises/${it.anchor}`;
        INDEX.set(key, { item: it });
        SRC.set(key, it.src || "");
      }
    }
    EXERCISES.set(id, data.sections || {});
    return data.sections || {};
  }

  function setExerciseView(on) {
    document.body.classList.remove("network-home");
    exerciseView = on;
    document.body.classList.toggle("exercise-mode", on);
    document.querySelectorAll(".mode, #src-btn").forEach((el) => { el.disabled = on; });
  }

  function sectionUrl(bookId, sectionId, exercises = false) {
    return `#/${encodeURIComponent(bookId)}/${encodeURIComponent(sectionId)}${exercises ? "/exercises" : ""}`;
  }

  function exerciseInfo(s) {
    return s.exercises || { status: "unrecorded", count: 0, pages: "" };
  }

  function chapterExerciseId(chapter) {
    return chapter.exercises && chapter.exercises.id || `chapter-${chapter.no}`;
  }

  function chapterExerciseForSection(s) {
    const id = exerciseInfo(s).chapter_id;
    return id && (s.book.chapters || []).find((ch) => chapterExerciseId(ch) === id);
  }

  function topicUrl(bookId, chapterId, groupId) {
    return `${sectionUrl(bookId, chapterId, true)}/topic-${encodeURIComponent(groupId)}`;
  }

  function exerciseLabel(s) {
    const info = exerciseInfo(s);
    return info.status === "ready" ? `习题 ${info.count} 题`
      : info.status === "none" ? "无独立习题" : "习题未录入";
  }

  function sectionTabs(s, exercises = false) {
    const chapter = chapterExerciseForSection(s);
    const chapterInfo = chapter && chapter.exercises;
    const exerciseId = chapterInfo ? chapterExerciseId(chapter) : s.id;
    const label = chapterInfo ? `本章习题 ${chapterInfo.count} 题` : exerciseLabel(s);
    return `<nav class="section-tabs" aria-label="本节内容">
      <a href="${esc(sectionUrl(s.book.id, s.id))}"${exercises ? "" : ' aria-current="page"'}>正文</a>
      <a href="${esc(sectionUrl(s.book.id, exerciseId, true))}"${exercises ? ' aria-current="page"' : ""}>${esc(label)}</a>
    </nav>`;
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
    let html = "";
    for (const ch of meta.chapters) {
      const key = `${meta.id}/${ch.no}`;
      const holdsCurrent = !!(current && currentMeta && currentMeta.id === meta.id &&
        (ch.sections.some((s) => s.id === current.id) || current.scope === "chapter" && String(current.chapter) === String(ch.no)));
      const collapsed = !holdsCurrent && collapsedChapters.has(key);
      html += `<div class="chap${collapsed ? " collapsed" : ""}" data-ch="${esc(String(ch.no))}">
        <div class="chap-title" role="button" tabindex="0" aria-expanded="${collapsed ? "false" : "true"}">
          <span class="ch-name">${esc(ch.title || "未命名章")}</span><span class="ch-meta">${ch.sections.length} 节</span>
        </div><div class="chap-secs">`;
      for (const s of ch.sections) {
        html += `<a class="sec-link" href="#/${esc(meta.id)}/${esc(s.id)}" data-sec="${esc(s.id)}">
          <span>${esc(s.id)}&nbsp;${esc(s.title)}</span><span class="n">${s.count}</span></a>`;
        if (exerciseInfo(s).status === "ready") {
          html += `<a class="sec-link toc-exercises" href="${esc(sectionUrl(meta.id, s.id, true))}" data-sec="${esc(s.id)}" data-exercises="1">
            <span>${esc(s.id)} 习题</span><span class="n">${exerciseInfo(s).count} 题</span></a>`;
        }
      }
      if (ch.exercises && ch.exercises.status === "ready") {
        const id = chapterExerciseId(ch);
        html += `<a class="sec-link toc-exercises chapter-exercises" href="${esc(sectionUrl(meta.id, id, true))}" data-sec="${esc(id)}" data-exercises="1">
          <span>本章习题</span><span class="n">${ch.exercises.count} 题</span></a>`;
        html += (ch.exercises.groups || []).map((group) => `<a class="sec-link toc-exercise-topic" href="${esc(topicUrl(meta.id, id, group.id))}" data-sec="${esc(id)}" data-exercises="1" data-topic="${esc(group.id)}">
          <span>${esc(group.title)}</span><span class="n">${group.count} 题</span></a>`).join("");
      }
      html += `</div></div>`;
    }
    nav.innerHTML = html;
    nav.scrollTop = 0;
  }

  function toggleChapter(head) {
    const chap = head.parentElement;
    chap.classList.toggle("collapsed");
    const on = !chap.classList.contains("collapsed");
    head.setAttribute("aria-expanded", on ? "true" : "false");
    const key = `${currentMeta ? currentMeta.id : ""}/${chap.dataset.ch}`;
    if (on) collapsedChapters.delete(key); else collapsedChapters.add(key);
  }

  function bindToc() {
    const nav = $("#toc");
    nav.addEventListener("click", (e) => {
      const head = e.target.closest(".chap-title");
      if (head) toggleChapter(head);
    });
    nav.addEventListener("keydown", (e) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      const head = e.target.closest(".chap-title");
      if (!head) return;
      e.preventDefault();
      toggleChapter(head);
    });
  }

  function setBook(meta) {
    currentMeta = meta;
    document.querySelectorAll(".book-btn").forEach((x) => x.classList.toggle("active", x.dataset.book === meta.id));
    buildToc(meta);
  }

  function markActive() {
    let active = null;
    const markExercises = exerciseView && current && exerciseInfo(current).status === "ready";
    document.querySelectorAll(".sec-link").forEach((a) => {
      const on = !!(current && a.dataset.sec === current.id &&
        a.getAttribute("href").includes(`/${currentMeta.id}/`) &&
        Boolean(a.dataset.exercises) === Boolean(markExercises) &&
        (a.dataset.topic || "") === (current.exerciseGroup || ""));
      a.classList.toggle("active", on);
      if (on) active = a;
    });
    if (!active) return;

    // 当前节所在章若被折叠，自动展开
    const chap = active.closest(".chap");
    if (chap && chap.classList.contains("collapsed")) {
      chap.classList.remove("collapsed");
      const head = chap.querySelector(".chap-title");
      if (head) head.setAttribute("aria-expanded", "true");
      collapsedChapters.delete(`${currentMeta.id}/${chap.dataset.ch}`);
    }

    // 当前节不在滑动窗可视范围时，滚到中间
    const nav = $("#toc");
    const r = active.getBoundingClientRect();
    const nr = nav.getBoundingClientRect();
    if (r.top < nr.top + 24 || r.bottom > nr.bottom - 8) {
      nav.scrollTo({ top: nav.scrollTop + (r.top - nr.top) - nav.clientHeight / 2 + r.height / 2, behavior: "auto" });
    }
  }

  /* ---------------- 条目 ---------------- */
  function srcBlock(key) {
    return `<pre class="src">${esc(SRC.get(key) || "")}</pre>`;
  }

  function itemHtml(it, opts = {}) {
    const key = `${it.bookId || ""}/${it.secId || ""}/${it.anchor}`;
    const showSrc = srcAll || srcSet.has(key);
    const foldable = !!opts.foldable;
    const folded = foldable && !!opts.folded;
    const head = `
      <div class="item-head">
        <span class="badge">${esc(it.type)}</span>
        ${it.number ? `<span class="num">${esc(it.number)}</span>` : ""}
        ${it.title ? `<span class="title">${esc(it.title)}</span>` : ""}
        <span class="head-right">
          ${opts.label ? `<span class="sr-src">${esc(opts.label)}</span>` : ""}
          <span class="pageref">p.${it.page}</span>
          ${foldable ? `<button class="src-toggle fold-btn" type="button" data-fold="${esc(key)}"
            title="展开/收起该条">${folded ? "展开" : "收起"}</button>` : ""}
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
      : `<div class="stmt">${inner}</div>${foldable ? `<div class="fold-hint">点击条目或“展开”查看陈述</div>` : ""}`;
    return `<article class="item${hide ? "" : " revealed"}${folded ? " folded" : ""}"${foldable ? ' data-foldable="1"' : ""}
      data-type="${esc(it.type)}" data-anchor="${esc(it.anchor)}" data-key="${esc(key)}"
      id="i-${esc(it.bookId || "")}-${esc(it.secId || "")}-${esc(it.anchor)}">${head}${body}</article>`;
  }

  function toggleFold(card) {
    if (!card) return;
    card.classList.toggle("folded");
    lastFoldCard = card;
    const btn = card.querySelector("[data-fold]");
    if (btn) btn.textContent = card.classList.contains("folded") ? "展开" : "收起";
  }

  function spaceTarget() {
    if (mode === "card") return document.querySelector(".item[data-foldable]");
    if (lastFoldCard && document.contains(lastFoldCard)) {
      const r = lastFoldCard.getBoundingClientRect();
      if (r.bottom > 8 && r.top < window.innerHeight - 8) return lastFoldCard;
    }
    const cards = [...document.querySelectorAll(".item[data-foldable]")];
    if (!cards.length) return document.querySelector(".item:not(.revealed)");
    const mid = window.innerHeight / 2;
    let best = cards[0], bestD = Infinity;
    for (const el of cards) {
      const r = el.getBoundingClientRect();
      const d = Math.abs((r.top + r.bottom) / 2 - mid);
      if (d < bestD) { best = el; bestD = d; }
    }
    return best;
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
    setExerciseView(false);
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
        <div class="sec-body">
          <div class="sec-main">
            <h1>${esc(s.id)}&nbsp;&nbsp;${esc(s.title)}</h1>
            <div class="meta">
              <span>${esc(b.title)}${b.author ? ` · ${esc(b.author)}` : ""}</span>
              <span>${esc(s.chapterTitle)}</span>
              <span>${s.items.length} 个条目${items.length !== s.items.length ? `（当前显示 ${items.length}）` : ""}</span>
              ${s.pages ? `<span>原书 p.${esc(s.pages)}</span>` : ""}
            </div>
            ${b.note ? `<p class="book-note">${esc(b.note)}</p>` : ""}
            ${sectionTabs(s)}
            <div class="filters">${chips}${defsBtn}</div>
          </div>
          ${b.author_img ? `<div class="sec-avatar">${avatar(b, "avatar-xl")}</div>` : ""}
        </div>
      </div>`;
  }

  function renderSection(s) {
    const b = s.book;
    const items = filterItems(s.items);
    const body = items.length
      ? items.map((it) => itemHtml({ ...it, bookId: b.id, secId: s.id },
          { foldable: it.type === "定义", folded: !defsOpen && it.type === "定义" })).join("")
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
        ${itemHtml({ ...it, bookId: b.id, secId: current.id }, { foldable: true, folded: true })}
        <p class="card-hint">← → 翻动 · 空格 显示/隐藏 · Esc 回到阅读</p>
      </div>`;
    typesetLazy($("#view"));
    $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <b>${esc(b.short || b.title)}</b> · ${esc(current.id)} 卡片`;
    markActive();
    window.scrollTo({ top: 0 });
  }

  function renderBookHome(meta, chapterNo = "") {
    setExerciseView(false);
    document.body.classList.remove("home-mode", "card-mode");
    if (meta.id === "gailv" && !chapterNo && window.ProbabilityNetwork) {
      document.body.classList.add("network-home");
      window.ProbabilityNetwork.mount($("#view"), meta);
      $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <b>${esc(meta.title)}</b>`;
      window.scrollTo({ top: 0 });
      return;
    }
    const secs = (meta.chapters || []).flatMap((c) => c.sections);
    const exerciseCount = meta.exercise_count || 0;
    const first = secs[0];
    const blocks = (meta.chapters || []).map((ch) => `
      <section class="bh-chap" id="chapter-${esc(String(ch.no))}">
        <h2 class="bh-chap-head"><span class="bh-chap-no">${esc(String(ch.no))}</span>
          <span class="bh-chap-name">${esc(ch.title || "未命名章")}</span>
          <span class="bh-chap-count">${ch.sections.length} 节</span></h2>
        <ul class="bh-secs">
          ${ch.sections.map((s) => `<li><a href="#/${esc(meta.id)}/${esc(s.id)}">
            <span class="bh-sec-id">${esc(s.id)}</span>
            <span class="bh-sec-title">${esc(s.title)}</span>
            <span class="bh-sec-count">${s.count}</span></a>
            ${exerciseInfo(s).status === "ready" ? `<a class="bh-exercises" href="${esc(sectionUrl(meta.id, s.id, true))}">${esc(exerciseLabel(s))} →</a>` : ""}</li>`).join("")}
        </ul>
        ${ch.exercises && ch.exercises.status === "ready" ? `<div class="bh-chapter-exercises">
          <a class="bh-exercises" href="${esc(sectionUrl(meta.id, chapterExerciseId(ch), true))}">本章习题 · ${ch.exercises.count} 题 →</a>
          <ul class="bh-exercise-topics">${(ch.exercises.groups || []).map((group) => `<li><a href="${esc(topicUrl(meta.id, chapterExerciseId(ch), group.id))}"><span>${esc(group.title)}</span><span>${group.count} 题</span></a></li>`).join("")}</ul>
        </div>` : ""}
      </section>`).join("");
    $("#view").innerHTML = `
      <div class="book-home">
        <header class="bh-head">
          ${avatar(meta, "avatar-xl")}
          <div class="bh-info">
            <h1>${esc(meta.title)}</h1>
            <div class="bh-meta">${esc(meta.author || "作者待确认")} · ${(meta.chapters || []).length} 章 · ${secs.length} 节 · ${meta.count || 0} 条${exerciseCount ? ` · 习题 ${exerciseCount} 题` : ""}</div>
            ${meta.note ? `<p class="book-note">${esc(meta.note)}</p>` : ""}
          </div>
        </header>
        ${first ? `<p class="bh-start"><a href="#/${esc(meta.id)}/${esc(first.id)}">开始阅读 →</a></p>` : `<div class="empty">这本书还没有录入条目。</div>`}
        <div class="bh-index">${blocks}</div>
      </div>`;
    $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <b>${esc(meta.short || meta.title)}</b>`;
    document.querySelectorAll(".book-btn").forEach((x) => x.classList.toggle("active", x.dataset.book === meta.id));
    document.querySelectorAll(".sec-link").forEach((x) => x.classList.remove("active"));
    const chapterElement = chapterNo && document.getElementById(`chapter-${chapterNo}`);
    if (chapterElement) chapterElement.scrollIntoView({ block: "start" });
    else window.scrollTo({ top: 0 });
  }

  function renderEmptyBook(meta) {
    setExerciseView(false);
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
    setExerciseView(false);
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
    const token = ++loadToken;
    if (exerciseView) current = null;
    setExerciseView(false);
    document.body.classList.remove("home-mode");
    await loadSearch();
    if (token !== loadToken) return;
    const terms = norm(q).split(" ").filter(Boolean);
    const hitIdx = [];
    for (let i = 0; i < SEARCH.length && hitIdx.length < 200; i++) {
      if (terms.every((t) => SEARCH_N[i].includes(t))) hitIdx.push(i);
    }
    const shown = hitIdx.slice(0, 80);
    const rows = shown.map((i) => {
      const e = SEARCH[i];
      const book = BOOKS.find((b) => b.id === e[0]);
      const sourceChapter = book && (book.chapters || []).find((ch) => chapterExerciseId(ch) === e[1]);
      const sourceLocation = sourceChapter ? `第${sourceChapter.no}章` : e[1];
      return `<a class="hit" href="#/${esc(e[0])}/${esc(e[1])}/${esc(e[2])}">
        <span class="badge" data-type="${esc(e[3])}">${esc(e[3])}</span>
        <b>${esc(e[4] || "")}</b>
        <span class="hit-title">${esc(e[5] || "")}</span>
        <span class="hit-src">${esc(book ? book.short || book.title : e[0])} · ${esc(sourceLocation)}</span>
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
    ++loadToken;
    setExerciseView(false);
    document.body.classList.add("home-mode");
    document.title = SITE.title || "数学命题索引";
    const total = BOOKS.reduce((a, b) => a + b.count, 0);
    const exerciseTotal = BOOKS.reduce((sum, b) => sum + (b.exercise_count || 0), 0);
    const cards = BOOKS.map((b) => {
      const first = b.chapters && b.chapters[0] && b.chapters[0].sections[0];
      const href = `#/${b.id}`;
      const secCount = (b.chapters || []).reduce((a, c) => a + c.sections.length, 0);
      const exerciseCount = b.exercise_count || 0;
      return `<a class="book-card${b.count ? "" : " empty"}" href="${href}" title="${esc(b.title)} ${b.author ? "· " + esc(b.author) : ""}">
        <div class="bc-head">${avatar(b)}<span class="bc-title">${esc(b.title)}</span></div>
        <div class="bc-author">${esc(b.author || "")}</div>
        <div class="bc-meta">${b.chapters.length} 章 · ${secCount} 节 · ${b.count ? `${b.count} 条` : "待录入"}${exerciseCount ? ` · 习题 ${exerciseCount} 题` : ""}</div>
        ${b.note ? `<p class="bc-note">${esc(b.note)}</p>` : ""}
      </a>`;
    }).join("");
    $("#view").innerHTML = `
      <div class="home">
        <div class="home-head">
          <h1>${esc(SITE.title || "数学命题索引")}</h1>
          <p class="home-sub">${esc(SITE.subtitle || "")}</p>
          <p class="home-stat">共 ${BOOKS.length} 本书 · ${total} 条命题${exerciseTotal ? ` · ${exerciseTotal} 道习题` : ""} · 正文只含陈述，习题独立阅读</p>
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

  function renderExercises(s, record, anchor = "", error = "") {
    if (s.scope === "chapter") { renderChapterExercises(s, record, anchor, error); return; }
    setExerciseView(true);
    document.body.classList.remove("home-mode", "card-mode");
    if (mathObserver) { mathObserver.disconnect(); mathObserver = null; }
    const info = exerciseInfo(s);
    const items = record && record.items || [];
    const sections = (s.book.chapters || []).flatMap((ch) => ch.sections);
    const i = sections.findIndex((sec) => sec.id === s.id);
    const previous = sections[i - 1], next = sections[i + 1];
    const navigation = `<nav class="exercise-navigation" aria-label="习题节导航">
      ${previous ? `<a href="${esc(sectionUrl(s.book.id, previous.id, true))}">← ${esc(previous.id)} 习题</a>` : "<span></span>"}
      <a href="${esc(sectionUrl(s.book.id, s.id))}">返回本节正文</a>
      ${next ? `<a href="${esc(sectionUrl(s.book.id, next.id, true))}">${esc(next.id)} 习题 →</a>` : "<span></span>"}
    </nav>`;
    let body;
    if (error) {
      body = `<div class="empty" role="alert">${esc(error)} <button type="button" class="ghost-btn" data-exercise-retry>重新加载</button></div>`;
    } else if (info.status === "none") {
      body = `<div class="empty">已核对原书，本节没有独立习题。</div>`;
    } else if (info.status !== "ready") {
      body = `<div class="empty">本节习题尚未录入。</div>`;
    } else if (!items.length) {
      body = `<div class="empty" role="alert">习题数据暂不可用，请稍后重试。</div>`;
    } else {
      body = `<p class="exercise-note">保留原书题号与小问，只录题目，不附解答。页码均为书内印刷页码。</p>
        <nav class="exercise-question-links" aria-label="本节习题">${items.map((it) =>
          `<a href="${esc(sectionUrl(s.book.id, s.id, true))}/${esc(it.anchor)}">${esc(it.number)}</a>`).join("")}</nav>
        <div class="exercise-items">${items.map((it) => itemHtml({ ...it, bookId: s.book.id, secId: `${s.id}/exercises` })).join("")}</div>`;
    }
    $("#view").innerHTML = `<div class="sec-head">
      <h1>${esc(s.id)}&nbsp;&nbsp;${esc(s.title)} · 习题</h1>
      <div class="meta"><span>${esc(s.book.title)}</span><span>${esc(s.chapterTitle || "")}</span>
        <span>${esc(exerciseLabel(s))}</span>${info.pages ? `<span>原书 p.${esc(info.pages)}</span>` : ""}</div>
      ${sectionTabs(s, true)}
    </div>${navigation}${body}${items.length ? navigation : ""}`;
    $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <a class="crumb-home" href="#/${esc(s.book.id)}">${esc(s.book.short || s.book.title)}</a> · ${esc(s.id)} 习题`;
    markActive();
    typesetLazy($("#view"));
    const target = /^p\d+$/.test(anchor) ? items.find((it) => it.page === Number(anchor.slice(1))) : items.find((it) => it.anchor === anchor);
    const el = target && document.getElementById(`i-${s.book.id}-${s.id}/exercises-${target.anchor}`);
    if (el) { el.classList.add("flash"); el.scrollIntoView({ block: "start" }); }
    else window.scrollTo({ top: 0 });
  }

  function renderChapterExercises(s, record, anchor = "", error = "") {
    setExerciseView(true);
    document.body.classList.remove("home-mode", "card-mode");
    if (mathObserver) { mathObserver.disconnect(); mathObserver = null; }
    const info = exerciseInfo(s);
    const allItems = record && record.items || [];
    const groups = record && record.groups || info.groups || [];
    const target = /^p\d+$/.test(anchor) ? allItems.find((it) => it.page === Number(anchor.slice(1)))
      : allItems.find((it) => it.anchor === anchor);
    const group = anchor.startsWith("topic-") ? groups.find((g) => g.id === anchor.slice(6)) || groups[0]
      : target ? groups.find((g) => g.numbers.includes(parseInt(target.number, 10))) || groups[0] : groups[0];
    const numbers = new Set(group && group.numbers || []);
    const items = group ? allItems.filter((it) => numbers.has(parseInt(it.number, 10))) : allItems;
    s.exerciseGroup = group ? group.id : "";
    const index = groups.indexOf(group);
    const previous = groups[index - 1], next = groups[index + 1];
    const navigation = `<nav class="exercise-navigation" aria-label="习题主题导航">
      ${previous ? `<a href="${esc(topicUrl(s.book.id, s.id, previous.id))}">← ${esc(previous.title)}</a>` : "<span></span>"}
      <a href="${esc(sectionUrl(s.book.id, s.id))}">返回本章</a>
      ${next ? `<a href="${esc(topicUrl(s.book.id, s.id, next.id))}">${esc(next.title)} →</a>` : "<span></span>"}
    </nav>`;
    let body;
    if (error) {
      body = `<div class="empty" role="alert">${esc(error)} <button type="button" class="ghost-btn" data-exercise-retry>重新加载</button></div>`;
    } else if (info.status === "none") {
      body = `<div class="empty">已核对原书，本章没有独立习题。</div>`;
    } else if (info.status !== "ready") {
      body = `<div class="empty">本章习题尚未录入。</div>`;
    } else if (!items.length) {
      body = `<div class="empty" role="alert">习题数据暂不可用，请稍后重试。</div>`;
    } else {
      body = `<p class="exercise-note">本章习题按主题分组，保留原书题号与小问，不附解答。页码均为书内印刷页码。</p>
        <nav class="exercise-topic-links" aria-label="本章习题主题">${groups.map((g) => `<a href="${esc(topicUrl(s.book.id, s.id, g.id))}"${g === group ? ' aria-current="page"' : ""}>${esc(g.title)}<span>${g.count} 题</span></a>`).join("")}</nav>
        <nav class="exercise-question-links" aria-label="本章全部习题题号">${allItems.map((it) => `<a href="${esc(sectionUrl(s.book.id, s.id, true))}/${esc(it.anchor)}"${numbers.has(parseInt(it.number, 10)) ? ' class="in-topic"' : ""}>${esc(it.number)}</a>`).join("")}</nav>
        <div class="exercise-items">${items.map((it) => itemHtml({ ...it, bookId: s.book.id, secId: `${s.id}/exercises` })).join("")}</div>`;
    }
    $("#view").innerHTML = `<div class="sec-head">
      <h1>第${esc(s.chapter)}章${group ? ` · ${esc(group.title)}` : ""} · 习题</h1>
      <div class="meta"><span>${esc(s.book.title)}</span><span>${esc(s.chapterTitle || "")}</span>
        <span>${group ? `本主题 ${items.length} 题 · ` : ""}全章 ${info.count} 题</span>${info.pages ? `<span>原书 p.${esc(info.pages)}</span>` : ""}</div>
      <nav class="section-tabs" aria-label="本章内容"><a href="${esc(sectionUrl(s.book.id, s.id))}">本章正文</a><a href="${esc(sectionUrl(s.book.id, s.id, true))}" aria-current="page">本章习题</a></nav>
    </div>${navigation}${body}${items.length ? navigation : ""}`;
    $("#crumbs").innerHTML = `<a class="crumb-home" href="#/">书目</a> · <a class="crumb-home" href="#/${esc(s.book.id)}">${esc(s.book.short || s.book.title)}</a> · 第${esc(s.chapter)}章${group ? ` · ${esc(group.title)}` : ""}`;
    markActive();
    typesetLazy($("#view"));
    const el = target && document.getElementById(`i-${s.book.id}-${s.id}/exercises-${target.anchor}`);
    if (el) { el.classList.add("flash"); el.scrollIntoView({ block: "start" }); }
    else window.scrollTo({ top: 0 });
  }

  /* ---------------- 路由 ---------------- */
  /* 旧 id 别名：fanyan 是早期拼写错误（泛函 = fanhan），保留以兼容已分享的链接 */
  const BOOK_ALIAS = { fanyan: "fanhan" };

  function parseHash() {
    const parts = decodeURIComponent(location.hash.replace(/^#\/?/, "")).split("/").filter(Boolean);
    if (parts[0] && BOOK_ALIAS[parts[0]]) parts[0] = BOOK_ALIAS[parts[0]];
    const book = BOOKS.find((b) => b.id === parts[0]);
    if (book) return { bookId: book.id, secId: parts[1], exercises: parts[2] === "exercises", anchor: parts[2] === "exercises" ? parts[3] : parts[2] };
    return { bookId: (BOOKS[0] || {}).id, secId: parts[0], anchor: parts[1] };
  }

  async function route() {
    const token = ++loadToken;
    document.body.classList.remove("network-home");
    if (!BOOKS.length) {
      $("#view").innerHTML = `<div class="empty">还没有任何书。请在 content/ 下新建书目录。</div>`;
      return;
    }
    const raw = location.hash.replace(/^#\/?/, "");
    if (!raw) { renderHome(); return; }
    const { bookId, secId, anchor, exercises } = parseHash();
    const meta = BOOKS.find((b) => b.id === bookId) || BOOKS[0];
    setBook(meta);
    if (!secId) { current = null; renderBookHome(meta); return; }
    const exerciseChapter = (meta.chapters || []).find((ch) => chapterExerciseId(ch) === secId);
    if (exerciseChapter && !exercises) {
      current = null; renderBookHome(meta, exerciseChapter.no); return;
    }
    if (exercises) {
      const chapter = exerciseChapter || (meta.chapters || []).find((ch) => ch.sections.some((s) => s.id === secId));
      const listed = exerciseChapter ? { id: secId, scope: "chapter", exercises: chapter.exercises }
        : chapter && chapter.sections.find((s) => s.id === secId);
      setExerciseView(true);
      if (!listed) {
        current = null;
        $("#view").innerHTML = `<div class="empty">没有找到这一节。<a href="#/${esc(meta.id)}">返回书目索引</a></div>`;
        return;
      }
      const section = { ...listed, book: meta, chapter: chapter.no, chapterTitle: chapter.title, items: [] };
      if (!exerciseChapter && exerciseInfo(section).chapter_id) {
        location.hash = `${sectionUrl(meta.id, exerciseInfo(section).chapter_id, true)}${anchor ? `/${encodeURIComponent(anchor)}` : ""}`;
        route();
        return;
      }
      current = section;
      if (exerciseInfo(section).status !== "ready") { renderExercises(section, null); return; }
      showLoading();
      try {
        const records = await ensureExercises(meta.id);
        if (token === loadToken) renderExercises(section, records[secId], anchor);
      } catch (err) {
        if (token === loadToken) renderExercises(section, null, "", err.message);
      }
      return;
    }
    setExerciseView(false);
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
    if (e.target.closest("[data-exercise-retry]")) { route(); return; }
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

    const foldBtn = e.target.closest("[data-fold]");
    if (foldBtn) { toggleFold(foldBtn.closest(".item")); return; }

    const foldableCard = e.target.closest(".item[data-foldable]");
    if (foldableCard && !e.target.closest("button, a")) {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed) { toggleFold(foldableCard); return; }
    }

    const defsBtn = e.target.closest("[data-defs]");
    if (defsBtn) {
      const y = window.scrollY;
      defsOpen = !defsOpen;
      if (current) { if (mode === "card") renderCard(cardIdx); else renderSection(current); }
      window.scrollTo({ top: y });
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
        const target = `#/${b.id}`;
        if (location.hash === target) {
          current = null;
          setBook(b);
          renderBookHome(b);
        } else {
          location.hash = target;
        }
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
      if (exerciseView) return;
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

  function jumpSection(dir) {
    if (!current || !currentMeta) return;
    if (exerciseView && current.scope === "chapter") {
      const groups = exerciseInfo(current).groups || [];
      const i = groups.findIndex((group) => group.id === current.exerciseGroup);
      const j = Math.max(0, Math.min(groups.length - 1, i + dir));
      if (i >= 0 && j !== i) location.hash = topicUrl(currentMeta.id, current.id, groups[j].id);
      return;
    }
    const sections = (currentMeta.chapters || []).flatMap((ch) => ch.sections);
    const i = sections.findIndex((s) => s.id === current.id);
    const j = Math.max(0, Math.min(sections.length - 1, i + dir));
    if (i >= 0 && j !== i) location.hash = sectionUrl(currentMeta.id, sections[j].id, exerciseView);
  }

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, textarea")) {
      if (e.key === "Escape") { searchEl.value = ""; query = ""; searchEl.blur(); route(); }
      return;
    }
    if (e.key === "Escape") {
      $("#modal").hidden = true;
      if (!exerciseView && mode === "card" && current) {
        mode = "read";
        document.querySelectorAll(".mode[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === "read"));
        renderSection(current);
      }
      return;
    }
    if (e.key === "/") { e.preventDefault(); searchEl.focus(); return; }
    if (exerciseView) {
      if (e.shiftKey && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        e.preventDefault(); jumpSection(e.key === "ArrowRight" ? 1 : -1);
      }
      return;
    }
    if (e.key === "s") { e.preventDefault(); setSrcAll(!srcAll); return; }
    if (e.key === "r") {
      mode = "random";
      document.querySelectorAll(".mode[data-mode]").forEach((x) => x.classList.toggle("active", x.dataset.mode === "random"));
      renderRandom();
      return;
    }
    if (e.key === " ") {
      if (e.repeat) return;
      const card = spaceTarget();
      if (!card) return;
      e.preventDefault();
      if (card.hasAttribute("data-foldable")) { toggleFold(card); return; }
      card.classList.add("revealed");
      card.querySelector(".reveal")?.remove();
      if (!card.classList.contains("math-done")) { typeset(card); card.classList.add("math-done"); }
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

  const lookBtn = $("#look-btn");
  const lookPanel = $("#look-panel");
  const THEMES = ["auto", "light", "dark"];
  function applyTheme(t) {
    if (t === "auto") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = t;
    try { localStorage.setItem("fa.theme", t); } catch (_) { /* 忽略 */ }
    document.querySelectorAll("[data-theme-opt]").forEach((b) => b.classList.toggle("active", b.dataset.themeOpt === t));
  }
  function applyCardSize(s) {
    document.documentElement.dataset.cardSize = s;
    try { localStorage.setItem("fa.cardSize", s); } catch (_) { /* 忽略 */ }
    document.querySelectorAll("[data-card-size]").forEach((b) => b.classList.toggle("active", b.dataset.cardSize === s));
  }
  lookBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    lookPanel.hidden = !lookPanel.hidden;
    lookBtn.setAttribute("aria-expanded", String(!lookPanel.hidden));
  });
  lookPanel.addEventListener("click", (e) => {
    const t = e.target.closest("[data-theme-opt]");
    const c = e.target.closest("[data-card-size]");
    if (t) applyTheme(t.dataset.themeOpt);
    else if (c) applyCardSize(c.dataset.cardSize);
    else return;
    e.stopPropagation();
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".look")) lookPanel.hidden = true;
    const b = e.target.closest("button");
    if (b && !b.closest("#look-panel")) b.blur();
  });

  const srcBtn = $("#src-btn");
  function setSrcAll(v) {
    if (exerciseView) return;
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
  $("#toc").addEventListener("click", (e) => {
    if (e.target.closest(".sec-link")) $("#sidebar").classList.remove("open");
  });
  bindToc();

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
      let savedTheme = "auto", savedCard = "l";
      try {
        savedTheme = localStorage.getItem("fa.theme") || "auto";
        savedCard = localStorage.getItem("fa.cardSize") || "l";
      } catch (_) { /* 忽略 */ }
      const qt = qs.get("theme");
      applyTheme(THEMES.includes(qt) ? qt : savedTheme);
      const qtype = qs.get("type");
      if (["定理", "定义", "例", "其他"].includes(qtype)) typeFilter = qtype;
      applyCardSize(qs.get("card") || savedCard);
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
