/* 仅以目录元数据生成跳转入口；不读取正文或全文搜索索引。 */
(function () {
  "use strict";
  const esc = (s) => String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function entries(books) {
    const result=[];
    for(const b of books) for(const ch of b.chapters || []) {
      function add(label,href,kind){result.push({bookId:b.id,book:b.title,chapter:ch.title,label,href,kind});}
      for(const s of ch.sections) {
        add(`${s.id} ${s.title}`,`#/${b.id}/${s.id}`,'正文');
        if(s.exercises && s.exercises.status==='ready') add(`${s.id} ${s.title} · 习题`,`#/${b.id}/${s.id}/exercises`,'习题');
      }
      const ex=ch.exercises;
      if(ex && ex.status==='ready') {
        const id=ex.id || `chapter-${ch.no}`;
        add(`第${ch.no}章 ${ch.title} · 习题`,`#/${b.id}/${id}/exercises`,'章习题');
        for(const group of ex.groups || []) add(`第${ch.no}章 · ${group.title}`,`#/${b.id}/${id}/exercises/topic-${group.id}`,'习题主题');
      }
    }
    return result;
  }
  function filter(items,query,bookId='') {
    const words=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    return items.filter(item=>(!bookId || item.bookId===bookId) && words.every(word=>`${item.book} ${item.chapter} ${item.label} ${item.kind}`.toLowerCase().includes(word)));
  }
  let initialized=false;
  function init(books) {
    if(initialized) return;
    initialized=true;
    const dialog=document.getElementById('quick-jump'), trigger=document.getElementById('jump-btn');
    const input=document.getElementById('jump-query'), select=document.getElementById('jump-book');
    const results=document.getElementById('jump-results'), count=document.getElementById('jump-count');
    const items=entries(books);
    select.innerHTML='<option value="">全部书籍</option>'+books.map(b=>`<option value="${esc(b.id)}">${esc(b.title)}</option>`).join('');
    function paint(){
      const matches=filter(items,input.value,select.value), shown=matches.slice(0,120);
      count.textContent=`${matches.length} 个页面${matches.length>shown.length ? '，显示前 120 个；可选书籍或输入标题缩小范围' : ''}`;
      results.innerHTML=shown.length ? shown.map(item=>`<a href="${esc(item.href)}"><span class="jump-result-label">${esc(item.label)}</span><span class="jump-result-source">${esc(item.book)} · ${esc(item.kind)}</span></a>`).join('') : '<p class="jump-empty">没有匹配的页面标题。查题干或术语请使用页面内的全文搜索。</p>';
    }
    trigger.addEventListener('click',()=>{
      if(window.SiteDrawer) window.SiteDrawer.close(false);
      paint();dialog.showModal();trigger.setAttribute('aria-expanded','true');input.focus();
    });
    input.addEventListener('input',paint);select.addEventListener('change',paint);
    results.addEventListener('click',event=>{if(event.target.closest('a[href]'))dialog.close();});
    dialog.addEventListener('close',()=>{trigger.setAttribute('aria-expanded','false');trigger.focus({preventScroll:true});});
    dialog.addEventListener('click',event=>{
      if(event.target!==dialog) return;
      const r=dialog.getBoundingClientRect();
      if(event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom)dialog.close();
    });
    dialog.addEventListener('keydown',event=>{
      event.stopPropagation();
      if(event.key==='Escape'){event.preventDefault();dialog.close();return;}
      const links=[...results.querySelectorAll('a[href]')];
      if(event.target===input && event.key==='Enter' && links[0]){event.preventDefault();links[0].click();}
      else if((event.key==='ArrowDown' || event.key==='ArrowUp') && links.length && (event.target===input || results.contains(event.target))){
        event.preventDefault();const i=links.indexOf(document.activeElement), forward=event.key==='ArrowDown';
        links[i<0 ? (forward ? 0 : links.length-1) : (i+(forward?1:-1)+links.length)%links.length].focus();
      }
    },true);
  }
  window.PageJump={entries,filter,init};
})();
