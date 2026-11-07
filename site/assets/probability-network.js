/* 概率论开卷页：应用导览为编辑组织，不表示严格先修关系。 */
(function () {
  "use strict";
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const applications = [
    { id: "simulate", title: "让随机数，长成你要的分布。", short: "随机模拟", text: "从一个均匀随机数出发，构造不同的随机世界。", steps: [
      ["2.3", "先描述目标：随机变量的分布是什么？"], ["5.2", "给定分布函数，如何构造对应的随机变量？"],
      ["5.3", "利用密度理解连续分布及其变换。"], ["6.3", "进一步求随机向量的函数的分布。"]] },
    { id: "average", title: "一次不可知，一万次呢？", short: "大量观测", text: "连接期望与收敛，理解平均值何以稳定。", steps: [
      ["4.1", "用期望刻画随机变量的平均水平。"], ["4.5", "考察大量独立观测的平均行为。"],
      ["7.1", "分清不同的收敛意义。"], ["7.2", "进入强大数定律。"], ["7.3", "进一步研究不等式与强大数律。"]] },
    { id: "normal", title: "为什么，总会遇见那条钟形曲线？", short: "正态与极限", text: "从一个具体分布，走向大量随机量的极限。", steps: [
      ["4.3", "先用方差度量波动的大小。"], ["6.2", "认识正态分布及随机向量。"],
      ["8.1", "用特征函数研究分布。"], ["8.3", "连接特征函数与分布收敛。"],
      ["9.2", "研究独立同分布情形的中心极限定理。"], ["9.3", "继续考察更一般的中心极限定理。"]] },
    { id: "information", title: "知道更多，如何改变判断？", short: "信息与条件", text: "从条件概率，走向条件期望与鞅。", steps: [
      ["3.2", "在已知事件发生的条件下讨论概率。"], ["3.3", "利用全概率公式与 Bayes 公式组织信息。"],
      ["10.1", "准备处理一般事件类的工具。"], ["10.3", "把条件概率的思想推进到条件期望。"], ["10.4", "认识随信息演进的鞅。"]] }
  ];
  // 这些联系仅在选定应用的导览内突出显示，不自动推断教材先修。
  function model(meta) {
    const nodes = meta.chapters.flatMap((ch, ci) => ch.sections.map((s, si) => ({
      ...s, chapter: String(ch.no), chapterTitle: ch.title,
      x: 37 + (ci % 5) * 198, y: 104 + Math.floor(ci / 5) * 326 + si * 48
    })));
    return { nodes, byId: new Map(nodes.map((n) => [n.id, n])) };
  }
  function lines(text, length = 11) {
    const words = text.replace(/（\*）/g, " *").match(/[A-Za-z][A-Za-z0-9-]*|./gu) || [];
    const result = [""]; let width = 0;
    for (const word of words) {
      const size = /^[\x00-\x7f]+$/.test(word) ? word.length * .55 : 1;
      if (width + size > length && result.length === 1) { result.push(""); width = 0; }
      result[result.length-1] += word; width += size;
    }
    return result;
  }
  function render(meta, appId = "simulate", selectedId = "") {
    const {nodes, byId} = model(meta);
    const app = applications.find((a) => a.id === appId) || applications[0];
    const selected = byId.get(selectedId) || byId.get(app.steps[0][0]);
    const active = new Set(app.steps.map(([id]) => id));
    const edgeKeys = new Set();
    const edges = applications.flatMap((a) => a.steps.slice(1).map(([id], i) => {
      const from = a.steps[i][0], key = `${from}/${id}`;
      if (edgeKeys.has(key)) return "";
      edgeKeys.add(key);
      const p = byId.get(from), q = byId.get(id);
      if (!p || !q) return "";
      const on = app.steps.some(([n], j) => j && n === id && app.steps[j-1][0] === from);
      const middle = (p.y+q.y)/2;
      return `<path class="pn-edge${on ? " is-active" : ""}" d="M${p.x},${p.y} C${p.x},${middle} ${q.x},${middle} ${q.x},${q.y}"/>`;
    })).join("");
    const chapter = meta.chapters.find((ch) => String(ch.no) === selected.chapter);
    const exercise = chapter && chapter.exercises;
    const practice = meta.chapters.filter((ch) => ch.exercises && ch.exercises.status === "ready");
    return `<div class="pn-home" data-pn-app="${app.id}" data-pn-selected="${esc(selected.id)}">
      <header class="pn-hero">
        <div class="pn-hero-copy"><p class="pn-eyebrow">概率论 / ${esc(meta.author)}</p>
          <h1><span>偶然之中，</span><span>看见规律。</span></h1>
          <p class="pn-lede">从一个你在意的问题出发。<br>让分散的概念，连成可以走进去的世界。</p>
          <div class="pn-hero-meta"><span>${meta.chapters.length} 章 · ${nodes.length} 个小节</span><span>${meta.count} 条命题 · 习题 ${meta.exercise_count || 0} 题</span></div>
        </div>
        <svg class="pn-orbit" viewBox="0 0 330 260" aria-hidden="true"><defs><linearGradient id="pn-hero-ink"><stop stop-color="#43877d"/><stop offset="1" stop-color="#d6ac63"/></linearGradient></defs>
          <g fill="none" stroke="url(#pn-hero-ink)"><ellipse cx="165" cy="135" rx="144" ry="64" transform="rotate(-29 165 135)" opacity=".38"/><ellipse cx="165" cy="135" rx="110" ry="94" transform="rotate(24 165 135)" opacity=".24"/>
          <path d="M22 188 C80 188 105 186 130 122 S170 35 194 116 S228 187 308 188" stroke-width="2.5"/>
          <path d="M20 190H310M165 211V39" opacity=".2"/></g><circle cx="165" cy="83" r="5" fill="#c49b55"/><text x="196" y="61" font-family="Georgia,serif" font-style="italic" font-size="26" fill="#43877d">P</text></svg>
      </header>
      <div class="pn-apps" role="group" aria-label="选择一个应用问题">${applications.map((a,i) => `<button class="pn-app" type="button" data-pn-application="${a.id}" aria-pressed="${a===app}"><small>0${i+1} / ${a.short}</small><strong>${a.title}</strong><span>${a.text}</span></button>`).join("")}</div>
      <section class="pn-stage" aria-label="概率论小节知识网络">
        <div class="pn-map-head"><h2>知识在这里相遇。</h2><span>选一个小节，看它通向哪里。<br>亮线：当前问题的阅读导览</span></div>
        <div class="pn-map-scroll"><svg class="pn-map" viewBox="0 0 1000 690" role="group" aria-label="全书小节网络，按章节排列，亮色表示当前问题关联小节">
          <defs><radialGradient id="pn-map-glow"><stop stop-color="#367366" stop-opacity=".3"/><stop offset="1" stop-color="#102b2b" stop-opacity="0"/></radialGradient></defs><circle cx="500" cy="330" r="350" fill="url(#pn-map-glow)"/>
          ${meta.chapters.map((ch,i) => `<text class="pn-cluster-label" x="${25+i%5*198}" y="${48+Math.floor(i/5)*326}"><tspan>${String(ch.no).padStart(2,"0")}</tspan><tspan x="${25+i%5*198}" dy="20">${esc(ch.title)}</tspan></text>`).join("")}
          <g fill="none">${edges}</g>
          ${nodes.map((n) => `<g class="pn-node${active.has(n.id) ? " is-active" : " is-muted"}${n.id===selected.id ? " is-selected" : ""}" data-pn-node="${n.id}" role="button" tabindex="0" aria-label="${esc(n.id+' '+n.title)}" aria-pressed="${n.id===selected.id}"><title>${esc(n.id+' '+n.title)}</title><circle cx="${n.x}" cy="${n.y}" r="${n.id===selected.id ? 7 : 4}"/><text x="${n.x+14}" y="${n.y-3}"><tspan class="pn-node-id">${esc(n.id)} </tspan>${lines(n.title).map((line,i) => `<tspan${i ? ` x="${n.x+14}" dy="15"` : ""}>${esc(line)}</tspan>`).join("")}</text></g>`).join("")}
        </svg></div>
      </section>
      <section class="pn-workbench"><div class="pn-path"><p class="pn-eyebrow">沿着问题，向前一步</p><h2>${app.title}</h2><ol>${app.steps.map(([id,reason],i) => `<li><button type="button" data-pn-node="${id}" aria-pressed="${selected.id===id}"><small>0${i+1}</small><strong>${esc(byId.get(id).title)}</strong><span>${reason}</span></button></li>`).join("")}</ol></div>
        <aside class="pn-detail" aria-live="polite"><p class="pn-detail-kicker">第 ${selected.chapter} 章 / ${esc(selected.chapterTitle)}</p><h3><small>${esc(selected.id)}</small>${esc(selected.title)}</h3>
          <p>${esc((app.steps.find(([id]) => id===selected.id)||[])[1] || "这也是全书网络中的一个节点。可以直接进入本节，或选择上方的问题，观察另一组知识联系。")}</p>
          <div class="pn-detail-links"><a href="#/${meta.id}/${selected.id}">阅读本节 <span>↗</span></a>${exercise && exercise.status==='ready' ? `<a href="#/${meta.id}/${exercise.id}/exercises">本章习题 · ${exercise.count} 题 <span>↗</span></a>` : ""}</div>
          <p class="pn-detail-kicker">本节收录 ${selected.count} 条 · 书内 p.${esc(selected.pages)}</p>
        </aside></section>
      <section class="pn-practice" aria-label="已整理的章末习题">${practice.map((ch) => `<div class="bh-chapter-exercises"><a class="pn-practice-card" href="#/${meta.id}/${ch.exercises.id}/exercises"><small>把理解，交给一道题</small><h3>第 ${ch.no} 章 · ${esc(ch.title)}</h3><p>${ch.exercises.count} 道原书习题 / ${ch.exercises.groups.length} 个主题</p><span>进入练习 ↗</span></a><ul class="bh-exercise-topics">${ch.exercises.groups.map((g) => `<li><a href="#/${meta.id}/${ch.exercises.id}/exercises/topic-${g.id}">${esc(g.title)}<span>${g.count} 题</span></a></li>`).join("")}</ul></div>`).join("")}</section>
      <p class="pn-footer">这是一张问题导向的阅读地图，连线不表示严格的先修关系。完整目录始终在左侧。</p>
    </div>`;
  }
  function mount(root, meta) {
    root.innerHTML = render(meta);
    function select(event) {
      const appButton = event.target.closest("[data-pn-application]");
      const nodeButton = event.target.closest("[data-pn-node]");
      if (!appButton && !nodeButton) return;
      if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
      if (event.type === "keydown") event.preventDefault();
      const state = root.querySelector(".pn-home");
      const appId = appButton ? appButton.dataset.pnApplication : state.dataset.pnApp;
      const selectedId = nodeButton ? nodeButton.dataset.pnNode : "";
      root.innerHTML = render(meta, appId, selectedId);
      const selector = appButton ? `[data-pn-application="${appId}"]` : `.pn-map [data-pn-node="${selectedId}"]`;
      const focused = root.querySelector(selector);
      if (focused) focused.focus({ preventScroll: true });
    }
    // 节点选择只替换本组件内容，事件委托保留；离开首页后不会干预其他页面。
    root.onclick = select;
    root.onkeydown = select;
  }
  window.ProbabilityNetwork = { render, mount, model, applications };
})();
