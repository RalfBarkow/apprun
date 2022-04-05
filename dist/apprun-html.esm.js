class t{constructor(){this._events={}}on(t,i,s={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:i,options:s})}off(t,i){const s=this._events[t]||[];this._events[t]=s.filter((t=>t.fn!==i))}find(t){return this._events[t]}run(t,...i){const s=this.getSubscribers(t,this._events);return console.assert(s&&s.length>0,"No subscriber for event: "+t),s.forEach((s=>{const{fn:n,options:e}=s;return e.delay?this.delay(t,n,i,e):Object.keys(e).length>0?n.apply(this,[...i,e]):n.apply(this,i),!s.options.once})),s.length}once(t,i,s={}){this.on(t,i,Object.assign(Object.assign({},s),{once:!0}))}delay(t,i,s,n){n._t&&clearTimeout(n._t),n._t=setTimeout((()=>{clearTimeout(n._t),Object.keys(n).length>0?i.apply(this,[...s,n]):i.apply(this,s)}),n.delay)}query(t,...i){const s=this.getSubscribers(t,this._events);console.assert(s&&s.length>0,"No subscriber for event: "+t);const n=s.map((t=>{const{fn:s,options:n}=t;return Object.keys(n).length>0?s.apply(this,[...i,n]):s.apply(this,i)}));return Promise.all(n)}getSubscribers(t,i){const s=i[t]||[];return i[t]=s.filter((t=>!t.options.once)),Object.keys(i).filter((i=>i.endsWith("*")&&t.startsWith(i.replace("*","")))).sort(((t,i)=>i.length-t.length)).forEach((n=>s.push(...i[n].map((i=>Object.assign(Object.assign({},i),{options:Object.assign(Object.assign({},i.options),{event:t})})))))),s}}let i;const s="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;s.app&&s._AppRunVersions?i=s.app:(i=new t,s.app=i,s._AppRunVersions="AppRun-3");var n=i;const e=(t,i)=>(i?t.state[i]:t.state)||"",o=(t,i,s)=>{if(i){const n=t.state||{};n[i]=s,t.setState(n)}else t.setState(s)},r=(t,i)=>{if(Array.isArray(t))return t.map((t=>r(t,i)));{let{tag:s,props:h,children:c}=t;return s?(h&&Object.keys(h).forEach((t=>{t.startsWith("$")&&(((t,i,s,r)=>{if(t.startsWith("$on")){const s=i[t];if(t=t.substring(1),"boolean"==typeof s)i[t]=i=>r.run?r.run(t,i):n.run(t,i);else if("string"==typeof s)i[t]=t=>r.run?r.run(s,t):n.run(s,t);else if("function"==typeof s)i[t]=t=>r.setState(s(r.state,t));else if(Array.isArray(s)){const[e,...o]=s;"string"==typeof e?i[t]=t=>r.run?r.run(e,...o,t):n.run(e,...o,t):"function"==typeof e&&(i[t]=t=>r.setState(e(r.state,...o,t)))}}else if("$bind"===t){const n=i.type||"text",h="string"==typeof i[t]?i[t]:i.name;if("input"===s)switch(n){case"checkbox":i.checked=e(r,h),i.onclick=t=>o(r,h||t.target.name,t.target.checked);break;case"radio":i.checked=e(r,h)===i.value,i.onclick=t=>o(r,h||t.target.name,t.target.value);break;case"number":case"range":i.value=e(r,h),i.oninput=t=>o(r,h||t.target.name,Number(t.target.value));break;default:i.value=e(r,h),i.oninput=t=>o(r,h||t.target.name,t.target.value)}else"select"===s?(i.value=e(r,h),i.onchange=t=>{t.target.multiple||o(r,h||t.target.name,t.target.value)}):"option"===s?(i.selected=e(r,h),i.onclick=t=>o(r,h||t.target.name,t.target.selected)):"textarea"===s&&(i.innerHTML=e(r,h),i.oninput=t=>o(r,h||t.target.name,t.target.value))}else n.run("$",{key:t,tag:s,props:i,component:r})})(t,h,s,i),delete h[t])})),c&&(c=r(c,i)),{tag:s,props:h,children:c}):t}};function h(t,...i){return c(i)}function c(t){const i=[],s=t=>{null!=t&&""!==t&&!1!==t&&i.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>s(t))):s(t)})),i}function l(t,i,...s){const n=c(s);if("string"==typeof t)return{tag:t,props:i,children:n};if(Array.isArray(t))return t;if(void 0===t&&s)return n;if(Object.getPrototypeOf(t).t)return{tag:t,props:i,children:n};if("function"==typeof t)return t(i,n);throw new Error(`Unknown tag in vdom ${t}`)}const u=new WeakMap,a=(t,i,s={})=>{null!=i&&!1!==i&&function(t,i,s={}){if(null==i||!1===i)return;i=g(i,s);const n="SVG"===(null==t?void 0:t.nodeName);if(!t)return;Array.isArray(i)?f(t,i,n):f(t,[i],n)}(t,i=r(i,s),s)};function d(t,i,s){3!==i._op&&(s=s||"svg"===i.tag,!function(t,i){const s=t.nodeName,n=`${i.tag||""}`;return s.toUpperCase()===n.toUpperCase()}(t,i)?t.parentNode.replaceChild(y(i,s),t):(!(2&i._op)&&f(t,i.children,s),!(1&i._op)&&b(t,i.props,s)))}function f(t,i,s){var n;const e=(null===(n=t.childNodes)||void 0===n?void 0:n.length)||0,o=(null==i?void 0:i.length)||0,r=Math.min(e,o);for(let n=0;n<r;n++){const e=i[n];if(3===e._op)continue;const o=t.childNodes[n];if("string"==typeof e)o.textContent!==e&&(3===o.nodeType?o.nodeValue=e:t.replaceChild(p(e),o));else if(e instanceof HTMLElement||e instanceof SVGElement)t.insertBefore(e,o);else{const i=e.props&&e.props.key;if(i)if(o.key===i)d(t.childNodes[n],e,s);else{const r=u[i];if(r){const i=r.nextSibling;t.insertBefore(r,o),i?t.insertBefore(o,i):t.appendChild(o),d(t.childNodes[n],e,s)}else t.replaceChild(y(e,s),o)}else d(t.childNodes[n],e,s)}}let h=t.childNodes.length;for(;h>r;)t.removeChild(t.lastChild),h--;if(o>r){const n=document.createDocumentFragment();for(let t=r;t<i.length;t++)n.appendChild(y(i[t],s));t.appendChild(n)}}const v=t=>{const i=document.createElement("section");return i.insertAdjacentHTML("afterbegin",t),Array.from(i.childNodes)};function p(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const i=document.createElement("div");return i.insertAdjacentHTML("afterbegin",t.substring(6)),i}return document.createTextNode(null!=t?t:"")}function y(t,i){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return p(t);if(!t.tag||"function"==typeof t.tag)return p(JSON.stringify(t));const s=(i=i||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return b(s,t.props,i),t.children&&t.children.forEach((t=>s.appendChild(y(t,i)))),s}function b(t,i,s){const n=t._props||{};i=function(t,i){i.class=i.class||i.className,delete i.className;const s={};return t&&Object.keys(t).forEach((t=>s[t]=null)),i&&Object.keys(i).forEach((t=>s[t]=i[t])),s}(n,i||{}),t._props=i;for(const n in i){const e=i[n];if(n.startsWith("data-")){const i=n.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[i]!==e&&(e||""===e?t.dataset[i]=e:delete t.dataset[i])}else if("style"===n)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof e)t.style.cssText=e;else for(const i in e)t.style[i]!==e[i]&&(t.style[i]=e[i]);else if(n.startsWith("xlink")){const i=n.replace("xlink","").toLowerCase();null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",i):t.setAttributeNS("http://www.w3.org/1999/xlink",i,e)}else n.startsWith("on")?e&&"function"!=typeof e?"string"==typeof e&&(e?t.setAttribute(n,e):t.removeAttribute(n)):t[n]=e:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(n)||s?t.getAttribute(n)!==e&&(e?t.setAttribute(n,e):t.removeAttribute(n)):t[n]!==e&&(t[n]=e);"key"===n&&e&&(u[e]=t)}i&&"function"==typeof i.ref&&window.requestAnimationFrame((()=>i.ref(t)))}function g(t,i,s=0){var n;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>g(t,i,s++)));let e=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(e=function(t,i,s){const{tag:n,props:e,children:o}=t;let r=`_${s}`,h=e&&e.id;h?r=h:h=`_${s}${Date.now()}`;let c="section";e&&e.as&&(c=e.as,delete e.as),i.i||(i.i={});let l=i.i[r];if(!(l&&l instanceof n&&l.element)){const t=document.createElement(c);l=i.i[r]=new n(Object.assign(Object.assign({},e),{children:o})).start(t)}if(l.mounted){const t=l.mounted(e,o,l.state);void 0!==t&&l.setState(t)}return b(l.element,e,!1),l.element}(t,i,s)),e&&Array.isArray(e.children)){const t=null===(n=e.props)||void 0===n?void 0:n._component;if(t){let i=0;e.children=e.children.map((s=>g(s,t,i++)))}else e.children=e.children.map((t=>g(t,i,s++)))}return e}const w=(t,i={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(i.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const s=i||{};this._shadowRoot=s.shadow?this.attachShadow({mode:"open"}):this;const n=s.observedAttributes||[],e=n.reduce(((t,i)=>{const s=i.toLowerCase();return s!==i&&(t[s]=i),t}),{});this._attrMap=t=>e[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),n.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(i){this.attributeChangedCallback(t,o[t],i)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const i=this.children?Array.from(this.children):[];if(i.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},o),{children:i})).mount(this._shadowRoot,s),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,i,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==s.render&&this._component.run(".")}))}}disconnectedCallback(){var t,i,s,n;null===(i=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===i||i.call(t),null===(n=null===(s=this._component)||void 0===s?void 0:s.unmount)||void 0===n||n.call(s),this._component=null}attributeChangedCallback(t,s,n){if(this._component){const e=this._attrMap(t);this._component._props[e]=n,this._component.run("attributeChanged",e,s,n),n!==s&&!1!==i.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}};var m=(t,i,s)=>{"undefined"!=typeof customElements&&customElements.define(t,w(i,s))};const $={meta:new WeakMap,defineMetadata(t,i,s){this.meta.has(s)||this.meta.set(s,{}),this.meta.get(s)[t]=i},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,i){return i=Object.getPrototypeOf(i),this.meta.get(i)?this.meta.get(i)[t]:null}};function j(t,i={}){return(s,n,e)=>{const o=t?t.toString():n;return $.defineMetadata(`apprun-update:${o}`,{name:o,key:n,options:i},s),e}}function A(t,i={}){return function(s,n){const e=t?t.toString():n;$.defineMetadata(`apprun-update:${e}`,{name:e,key:n,options:i},s)}}function O(t,i){return function(s){return m(t,s,i),s}}const _=new Map;n.on("get-components",(t=>t.components=_));const x=t=>t;class k{constructor(i,s,n,e){this.state=i,this.view=s,this.update=n,this.options=e,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,i)=>this.mount(t,Object.assign({render:!0},i))}renderState(t,i=null){if(!this.view)return;let s=i||this.view(t);if(n.debug&&n.run("debug",{component:this,_:s?".":"-",state:t,vdom:s,el:this.element}),"object"!=typeof document)return;const e="string"==typeof this.element?document.getElementById(this.element):this.element;if(e){const t="_c";this.unload?e._component===this&&e.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),e.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(e)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):e.removeAttribute&&e.removeAttribute(t),e._component=this}!i&&s&&(s=r(s,this),n.render(e,s,this)),this.rendered&&this.rendered(this.state)}setState(t,i={render:!0,history:!1}){if(t instanceof Promise)Promise.all([t,this._state]).then((t=>{t[0]&&this.setState(t[0])})).catch((t=>{throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==i.render&&this.renderState(t),!1!==i.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof i.callback&&i.callback(this.state)}}mount(t=null,i){var s,e;return console.assert(!this.element,"Component already mounted."),this.options=i=Object.assign(Object.assign({},this.options),i),this.element=t,this.global_event=i.global_event,this.enable_history=!!i.history,this.enable_history&&(this.on(i.history.prev||"history-prev",this._history_prev),this.on(i.history.next||"history-next",this._history_next)),i.route&&(this.update=this.update||{},this.update[i.route]||(this.update[i.route]=x)),this.add_actions(),this.state=null!==(e=null!==(s=this.state)&&void 0!==s?s:this.model)&&void 0!==e?e:{},"function"==typeof this.state&&(this.state=this.state()),i.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),n.debug&&(_.get(t)?_.get(t).push(this):_.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,i,s={}){i&&"function"==typeof i&&(s.global&&this._global_events.push(t),this.on(t,((...e)=>{n.debug&&n.run("debug",{component:this,_:">",event:t,p:e,current_state:this.state,options:s});const o=i(this.state,...e);n.debug&&n.run("debug",{component:this,_:"<",event:t,p:e,newState:o,state:this.state,options:s}),this.setState(o,s)}),s))}add_actions(){const t=this.update||{};$.getMetadataKeys(this).forEach((i=>{if(i.startsWith("apprun-update:")){const s=$.getMetadata(i,this);t[s.name]=[this[s.key].bind(this),s.options]}}));const i={};Array.isArray(t)?t.forEach((t=>{const[s,n,e]=t;s.toString().split(",").forEach((t=>i[t.trim()]=[n,e]))})):Object.keys(t).forEach((s=>{const n=t[s];("function"==typeof n||Array.isArray(n))&&s.split(",").forEach((t=>i[t.trim()]=n))})),i["."]||(i["."]=x),Object.keys(i).forEach((t=>{const s=i[t];"function"==typeof s?this.add_action(t,s):Array.isArray(s)&&this.add_action(t,s[0],s[1])}))}run(t,...i){const s=t.toString();return this.is_global_event(s)?n.run(s,...i):this._app.run(s,...i)}on(t,i,s){const e=t.toString();return this._actions.push({name:e,fn:i}),this.is_global_event(e)?n.on(e,i,s):this._app.on(e,i,s)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:i,fn:s}=t;this.is_global_event(i)?n.off(i,s):this._app.off(i,s)}))}}k.t=!0;const T="//",M="///",E=t=>{if(t||(t="#"),t.startsWith("#")){const[i,...s]=t.split("/");n.run(i,...s)||n.run("///",i,...s),n.run("//",i,...s)}else if(t.startsWith("/")){const[i,s,...e]=t.split("/");n.run("/"+s,...e)||n.run("///","/"+s,...e),n.run("//","/"+s,...e)}else n.run(t)||n.run("///",t),n.run("//",t)};n.h=n.createElement=l,n.render=a,n.Fragment=h,n.webComponent=m,n.start=(t,i,s,n,e)=>{const o=Object.assign({render:!0,global_event:!0},e),r=new k(i,s,n);return e&&e.rendered&&(r.rendered=e.rendered),r.mount(t,o),r};const C=t=>{};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var S;n.on("$",C),n.on("debug",(t=>C)),n.on("//",C),n.on("#",C),n.route=E,n.on("route",(t=>n.route&&n.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{n.route===E&&(window.onpopstate=()=>E(location.hash),document.body.hasAttribute("apprun-no-init")||E(location.hash))})),"object"==typeof window&&(window.Component=k,window.React=n,window.on=A,window.customElement=O);const N=globalThis.trustedTypes,L=N?N.createPolicy("lit-html",{createHTML:t=>t}):void 0,U=`lit$${(Math.random()+"").slice(9)}$`,H="?"+U,D=`<${H}>`,I=document,V=(t="")=>I.createComment(t),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,W=/-->/g,q=/>/g,z=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,F=/'/g,Z=/"/g,J=/^(?:script|style|textarea|title)$/i,K=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),B=K(1),Q=K(2),X=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),tt=new WeakMap,it=(t,i,s)=>{var n,e;const o=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:i;let r=o._$litPart$;if(void 0===r){const t=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:null;o._$litPart$=r=new ht(i.insertBefore(V(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r},st=I.createTreeWalker(I,129,null,!1),nt=(t,i)=>{const s=t.length-1,n=[];let e,o=2===i?"<svg>":"",r=R;for(let i=0;i<s;i++){const s=t[i];let h,c,l=-1,u=0;for(;u<s.length&&(r.lastIndex=u,c=r.exec(s),null!==c);)u=r.lastIndex,r===R?"!--"===c[1]?r=W:void 0!==c[1]?r=q:void 0!==c[2]?(J.test(c[2])&&(e=RegExp("</"+c[2],"g")),r=z):void 0!==c[3]&&(r=z):r===z?">"===c[0]?(r=null!=e?e:R,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,h=c[1],r=void 0===c[3]?z:'"'===c[3]?Z:F):r===Z||r===F?r=z:r===W||r===q?r=R:(r=z,e=void 0);const a=r===z&&t[i+1].startsWith("/>")?" ":"";o+=r===R?s+D:l>=0?(n.push(h),s.slice(0,l)+"$lit$"+s.slice(l)+U+a):s+U+(-2===l?(n.push(void 0),i):a)}const h=o+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==L?L.createHTML(h):h,n]};class et{constructor({strings:t,_$litType$:i},s){let n;this.parts=[];let e=0,o=0;const r=t.length-1,h=this.parts,[c,l]=nt(t,i);if(this.el=et.createElement(c,s),st.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(n=st.nextNode())&&h.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const i of n.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(U)){const s=l[o++];if(t.push(i),void 0!==s){const t=n.getAttribute(s.toLowerCase()+"$lit$").split(U),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:e,name:i[2],strings:t,ctor:"."===i[1]?lt:"?"===i[1]?at:"@"===i[1]?dt:ct})}else h.push({type:6,index:e})}for(const i of t)n.removeAttribute(i)}if(J.test(n.tagName)){const t=n.textContent.split(U),i=t.length-1;if(i>0){n.textContent=N?N.emptyScript:"";for(let s=0;s<i;s++)n.append(t[s],V()),st.nextNode(),h.push({type:2,index:++e});n.append(t[i],V())}}}else if(8===n.nodeType)if(n.data===H)h.push({type:2,index:e});else{let t=-1;for(;-1!==(t=n.data.indexOf(U,t+1));)h.push({type:7,index:e}),t+=U.length-1}e++}}static createElement(t,i){const s=I.createElement("template");return s.innerHTML=t,s}}function ot(t,i,s=t,n){var e,o,r,h;if(i===X)return i;let c=void 0!==n?null===(e=s._$Cl)||void 0===e?void 0:e[n]:s._$Cu;const l=G(i)?void 0:i._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,s,n)),void 0!==n?(null!==(r=(h=s)._$Cl)&&void 0!==r?r:h._$Cl=[])[n]=c:s._$Cu=c),void 0!==c&&(i=ot(t,c._$AS(t,i.values),c,n)),i}class rt{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:n}=this._$AD,e=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:I).importNode(s,!0);st.currentNode=e;let o=st.nextNode(),r=0,h=0,c=n[0];for(;void 0!==c;){if(r===c.index){let i;2===c.type?i=new ht(o,o.nextSibling,this,t):1===c.type?i=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(i=new ft(o,this,t)),this.v.push(i),c=n[++h]}r!==(null==c?void 0:c.index)&&(o=st.nextNode(),r++)}return e}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class ht{constructor(t,i,s,n){var e;this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=n,this._$Cg=null===(e=null==n?void 0:n.isConnected)||void 0===e||e}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=ot(this,t,i),G(t)?t===Y||null==t||""===t?(this._$AH!==Y&&this._$AR(),this._$AH=Y):t!==this._$AH&&t!==X&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var i;return P(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==Y&&G(this._$AH)?this._$AA.nextSibling.data=t:this.k(I.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:n}=t,e="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=et.createElement(n.h,this.options)),n);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===e)this._$AH.m(s);else{const t=new rt(e,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=tt.get(t.strings);return void 0===i&&tt.set(t.strings,i=new et(t)),i}S(t){P(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const e of t)n===i.length?i.push(s=new ht(this.A(V()),this.A(V()),this,this.options)):s=i[n],s._$AI(e),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class ct{constructor(t,i,s,n,e){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=e,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Y}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,n){const e=this.strings;let o=!1;if(void 0===e)t=ot(this,t,i,0),o=!G(t)||t!==this._$AH&&t!==X,o&&(this._$AH=t);else{const n=t;let r,h;for(t=e[0],r=0;r<e.length-1;r++)h=ot(this,n[s+r],i,r),h===X&&(h=this._$AH[r]),o||(o=!G(h)||h!==this._$AH[r]),h===Y?t=Y:t!==Y&&(t+=(null!=h?h:"")+e[r+1]),this._$AH[r]=h}o&&!n&&this.C(t)}C(t){t===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class lt extends ct{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===Y?void 0:t}}const ut=N?N.emptyScript:"";class at extends ct{constructor(){super(...arguments),this.type=4}C(t){t&&t!==Y?this.element.setAttribute(this.name,ut):this.element.removeAttribute(this.name)}}class dt extends ct{constructor(t,i,s,n,e){super(t,i,s,n,e),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=ot(this,t,i,0))&&void 0!==s?s:Y)===X)return;const n=this._$AH,e=t===Y&&n!==Y||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==Y&&(n===Y||e);e&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class ft{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const vt=window.litHtmlPolyfillSupport;null==vt||vt(et,ht),(null!==(S=globalThis.litHtmlVersions)&&void 0!==S?S:globalThis.litHtmlVersions=[]).push("2.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=2,yt=5,bt=t=>(...i)=>({_$litDirective$:t,values:i});class gt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class wt extends gt{constructor(t){if(super(t),this.it=Y,t.type!==pt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===Y||null==t)return this.ft=void 0,this.it=t;if(t===X)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const i=[t];return i.raw=i,this.ft={_$litType$:this.constructor.resultType,strings:i,values:[]}}}wt.directiveName="unsafeHTML",wt.resultType=1;const mt=bt(wt);function $t(t,i,s){i&&("string"==typeof i?(t._$litPart$||t.replaceChildren(),it(B`${mt(i)}`,t)):"_$litType$"in i?(t._$litPart$||t.replaceChildren(),it(i,t)):(a(t,i,s),t._$litPart$=void 0))}const jt=bt(class extends gt{constructor(t){if(super(t),t.type!==yt)throw new Error("${run} can only be used in event handlers")}update(t,i){let{element:s,name:e}=t;const o=()=>{let t=s._component;for(;!t&&s;)s=s.parentElement,t=s&&s._component;return console.assert(!!t,"Component not found."),t},[r,...h]=i;return"string"==typeof r?s[`on${e}`]=t=>{const i=o();i?i.run(r,...h,t):n.run(r,...h,t)}:"function"==typeof r&&(s[`on${e}`]=t=>o().setState(r(o().state,...h,t))),this.render()}render(){return X}});n.createElement=l,n.render=$t,n.Fragment=h,"object"==typeof window&&(window.html=B,window.svg=Q,window.run=jt);export{k as Component,M as ROUTER_404_EVENT,T as ROUTER_EVENT,n as app,O as customElement,n as default,j as event,B as html,A as on,$t as render,jt as run,v as safeHTML,Q as svg,j as update};
//# sourceMappingURL=apprun-html.esm.js.map
