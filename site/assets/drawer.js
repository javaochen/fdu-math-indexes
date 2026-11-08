/* 手机侧栏：显式关闭、背景遮罩、焦点管理。桌面目录不变。 */
(function () {
  "use strict";
  const sidebar = document.getElementById("sidebar");
  const main = document.getElementById("main");
  const toggle = document.getElementById("menu-btn");
  const closeButton = document.getElementById("sidebar-close");
  const backdrop = document.getElementById("sidebar-backdrop");
  const mobile = window.matchMedia("(max-width: 860px)");
  let opened = false;
  function sync() {
    const modal = mobile.matches && opened;
    sidebar.classList.toggle("open", modal);
    document.body.classList.toggle("drawer-open", modal);
    backdrop.hidden = !modal;
    toggle.setAttribute("aria-expanded", String(modal));
    toggle.setAttribute("aria-label", modal ? "关闭目录" : "打开目录");
    sidebar.inert = mobile.matches && !modal;
    main.inert = modal;
    if (mobile.matches) sidebar.setAttribute("aria-hidden", String(!modal));
    else sidebar.removeAttribute("aria-hidden");
  }
  function close(restoreFocus = true) {
    const wasOpen = opened;
    opened = false; sync();
    if (wasOpen && restoreFocus) toggle.focus({ preventScroll: true });
  }
  function open() {
    if (!mobile.matches) return;
    opened = true; sync(); closeButton.focus({ preventScroll: true });
  }
  closeButton.addEventListener("click", () => close());
  backdrop.addEventListener("click", () => close());
  sidebar.addEventListener("click", (event) => {
    if (event.target.closest("a[href], .book-btn")) close();
  });
  window.addEventListener("keydown", (event) => {
    if (!opened || !mobile.matches) return;
    if (event.key === "Escape") {
      event.preventDefault(); event.stopPropagation(); close();
    } else if (event.key === "Tab") {
      const focusable = [...sidebar.querySelectorAll('button, a[href], input, [tabindex="0"]')]
        .filter((el) => !el.disabled && el.getClientRects().length);
      const first=focusable[0], last=focusable[focusable.length-1];
      if (!first) return;
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  }, true);
  mobile.addEventListener("change", () => close(false));
  window.addEventListener("hashchange", () => close(false));
  sync();
  window.SiteDrawer = {open, close, toggle: () => opened ? close() : open(), isOpen: () => opened};
})();
