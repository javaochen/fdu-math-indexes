/* Drawer state/focus regression; run with node tests/mobile_drawer.cjs. */
const assert=require('node:assert/strict'), fs=require('node:fs'), vm=require('node:vm'), path=require('node:path');
const elements=new Map(), windowEvents={};
let active=null;
function element(id){if(!elements.has(id)){const names=new Set();elements.set(id,{id,attrs:{},events:{},hidden:false,inert:false,
  classList:{toggle(n,on){if(on)names.add(n);else names.delete(n);},contains:n=>names.has(n)},
  setAttribute(n,v){this.attrs[n]=v;},removeAttribute(n){delete this.attrs[n];},
  addEventListener(n,fn){this.events[n]=fn;},focus(){active=this;},getClientRects(){return [{}];}});}return elements.get(id);}
const media={matches:true,addEventListener(n,fn){this.change=fn;}};
const document={body:element('body'),getElementById:element,get activeElement(){return active;}};
const sidebar=element('sidebar'), closeButton=element('sidebar-close'), toggle=element('menu-btn'), last=element('last-link');
sidebar.querySelectorAll=()=>[closeButton,last];
const window={matchMedia:()=>media,addEventListener(n,fn){windowEvents[n]=fn;}};
vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../site/assets/drawer.js'),'utf8'),{window,document});
const drawer=window.SiteDrawer;
assert(sidebar.inert);assert(!element('main').inert);assert(element('sidebar-backdrop').hidden);
drawer.open();assert(drawer.isOpen());assert.equal(active,closeButton);assert(element('main').inert);assert(!sidebar.inert);assert.equal(toggle.attrs['aria-expanded'],'true');
active=last;let prevented=false;
windowEvents.keydown({key:'Tab',shiftKey:false,preventDefault(){prevented=true;}});assert(prevented);assert.equal(active,closeButton);
active=closeButton;windowEvents.keydown({key:'Tab',shiftKey:true,preventDefault(){}});assert.equal(active,last);
element('sidebar-backdrop').events.click();assert(!drawer.isOpen());assert.equal(active,toggle);assert(!element('main').inert);
drawer.open();let stopped=false;windowEvents.keydown({key:'Escape',preventDefault(){},stopPropagation(){stopped=true;}});assert(stopped);assert(!drawer.isOpen());
drawer.open();closeButton.events.click();assert(!drawer.isOpen());assert(element('sidebar-backdrop').hidden);
drawer.open();sidebar.events.click({target:{closest:()=>last}});assert(!drawer.isOpen());
drawer.open();media.matches=false;media.change();assert(!drawer.isOpen());assert(!sidebar.inert);assert(!element('main').inert);assert(!('aria-hidden' in sidebar.attrs));
media.matches=true;media.change();assert(sidebar.inert);
drawer.open();windowEvents.hashchange();assert(!drawer.isOpen());
console.log('PASS: close button, backdrop, Escape, focus trap/return, navigation, resize and desktop accessibility.');
