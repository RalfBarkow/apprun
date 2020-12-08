!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return(()=>{"use strict";var t={752:(t,e,n)=>{n.d(e,{g:()=>s,Z:()=>r});class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter((t=>t.fn!==e))}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter((t=>!t.options.once)),n.forEach((n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once})),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout((()=>{clearTimeout(s._t),e.apply(this,n)}),s.delay)}}let o;const i="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;i.app&&i._AppRunVersions?o=i.app:(o=new s,i.app=o,i._AppRunVersions="AppRun-2");const r=o},778:(t,e,n)=>{n.r(e),n.d(e,{Component:()=>m,Fragment:()=>o.HY,ROUTER_404_EVENT:()=>g,ROUTER_EVENT:()=>_,app:()=>s.Z,customElement:()=>l,default:()=>v,event:()=>c,on:()=>h,update:()=>c});var s=n(752),o=n(703);const i=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s=n.observedAttributes||[],o=s.reduce(((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t}),{});this._attrMap=t=>o[t]||t;const i={};Array.from(this.attributes).forEach((t=>i[this._attrMap(t.name)]=t.value)),s.forEach((t=>{void 0!==this[t]&&(i[t]=this[t]),Object.defineProperty(this,t,{get:()=>i[t],set(e){this.attributeChangedCallback(t,i[t],e)},configurable:!0,enumerable:!0})}));const r=this.children?Array.from(this.children):[];if(r.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},i),{children:r})).mount(this._shadowRoot,n),this._component._props=i,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(i,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,s;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(s=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===s||s.call(n),this._component=null}attributeChangedCallback(t,n,s){if(this._component){const o=this._attrMap(t);this._component._props[o]=s,this._component.run("attributeChanged",o,n,s),s!==n&&!1!==e.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}},r=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,i(e,n))},a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,s,o)=>{const i=t?t.toString():s;return a.defineMetadata("apprun-update:"+i,{name:i,key:s,options:e},n),o}}function h(t,e={}){return function(n,s){const o=t?t.toString():s;a.defineMetadata("apprun-update:"+o,{name:o,key:s,options:e},n)}}function l(t,e){return function(n){return r(t,n,e),n}}const u=(t,e)=>(e?t.state[e]:t.state)||"",d=(t,e,n)=>{if(e){const s=t.state||{};s[e]=n,t.setState(s)}else t.setState(n)},p={};s.Z.on("get-components",(t=>t.components=p));const f=t=>t;class m{constructor(t,e,n,o){this.state=t,this.view=e,this.update=n,this.options=o,this._app=new s.g,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){s.Z.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=s.Z.createElement;s.Z.h=s.Z.createElement=(t,e,...o)=>(e&&Object.keys(e).forEach((n=>{n.startsWith("$")&&(((t,e,n,o)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>o.run(t,e);else if("string"==typeof n)e[t]=t=>o.run(n,t);else if("function"==typeof n)e[t]=t=>o.setState(n(o.state,t));else if(Array.isArray(n)){const[s,...i]=n;"string"==typeof s?e[t]=t=>o.run(s,...i,t):"function"==typeof s&&(e[t]=t=>o.setState(s(o.state,...i,t)))}}else if("$bind"===t){const s=e.type||"text",i="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(s){case"checkbox":e.checked=u(o,i),e.onclick=t=>d(o,i||t.target.name,t.target.checked);break;case"radio":e.checked=u(o,i)===e.value,e.onclick=t=>d(o,i||t.target.name,t.target.value);break;case"number":case"range":e.value=u(o,i),e.oninput=t=>d(o,i||t.target.name,Number(t.target.value));break;default:e.value=u(o,i),e.oninput=t=>d(o,i||t.target.name,t.target.value)}else"select"===n?(e.value=u(o,i),e.onchange=t=>{t.target.multiple||d(o,i||t.target.name,t.target.value)}):"option"===n?(e.selected=u(o,i),e.onclick=t=>d(o,i||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=u(o,i),e.oninput=t=>d(o,i||t.target.name,t.target.value))}else s.Z.run("$",{key:t,tag:n,props:e,component:o})})(n,e,t,this),delete e[n])})),n(t,e,...o));const o=e?this.view(t,e):this.view(t);return s.Z.h=s.Z.createElement=n,o}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(s.Z.debug&&s.Z.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const o="string"==typeof this.element?document.getElementById(this.element):this.element;if(o){const t="_c";this.unload?o._component===this&&o.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),o.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(o)||(this.unload(this.state),this.observer.disconnect(),this.observer=null,this.save_vdom=[])}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):o.removeAttribute&&o.removeAttribute(t),o._component=this}e||this.render(o,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then((t=>{this.setState(t,e)})).catch((t=>{throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,o;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=f),this.add_actions(),this.state=null!==(o=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==o?o:{},"function"==typeof this.state&&(this.state=this.state()),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),s.Z.debug){const e="string"==typeof t?t:t.id;p[e]=p[e]||[],p[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,((...o)=>{const i=e(this.state,...o);s.Z.debug&&s.Z.run("debug",{component:this,event:t,e:o,state:this.state,newState:i,options:n}),this.setState(i,n)}),n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach((e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}}));const e={};Array.isArray(t)?t.forEach((t=>{const[n,s,o]=t;n.toString().split(",").forEach((t=>e[t.trim()]=[s,o]))})):Object.keys(t).forEach((n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach((t=>e[t.trim()]=s))})),e["."]||(e["."]=f),Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])}))}run(t,...e){const n=t.toString();return this.is_global_event(n)?s.Z.run(n,...e):this._app.run(n,...e)}on(t,e,n){const o=t.toString();return this._actions.push({name:o,fn:e}),this.is_global_event(o)?s.Z.on(o,e,n):this._app.on(o,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:e,fn:n}=t;this.is_global_event(e)?s.Z.off(e,n):this._app.off(e,n)}))}}m.__isAppRunComponent=!0;const _="//",g="///",y=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.Z.run(e,...n)||s.Z.run(g,e,...n),s.Z.run(_,e,...n)}else if(t.startsWith("/")){const[e,n,...o]=t.split("/");s.Z.run("/"+n,...o)||s.Z.run(g,"/"+n,...o),s.Z.run(_,"/"+n,...o)}else s.Z.run(t)||s.Z.run(g,t),s.Z.run(_,t)};s.Z.h=s.Z.createElement=o.az,s.Z.render=function(t,e,n){(0,o.yj)(t,e,n)},s.Z.Fragment=o.HY,s.Z.webComponent=r,s.Z.start=(t,e,n,s,o)=>{const i=Object.assign(Object.assign({},o),{render:!0,global_event:!0}),r=new m(e,n,s);return o&&o.rendered&&(r.rendered=o.rendered),r.mount(t,i),r};const b=t=>{};s.Z.on("$",b),s.Z.on("debug",(t=>b)),s.Z.on(_,b),s.Z.on("#",b),s.Z.route=y,s.Z.on("route",(t=>s.Z.route&&s.Z.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{s.Z.route===y&&(window.onpopstate=()=>y(location.hash),y(location.hash))}));const v=s.Z;"object"==typeof window&&(window.Component=m,window.React=s.Z,window.on=h,window.customElement=l)},703:(t,e,n)=>{n.d(e,{HY:()=>f,az:()=>r,yj:()=>c});var s=n(752);function o(t,e,n=0){var i;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>o(t,e,n++)));let r=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(r=function(t,e,n){const{tag:o,props:i,children:r}=t;let a="_"+n,c=i&&i.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let h=e.__componentCache[a];h&&h instanceof o||(h=e.__componentCache[a]=new o(Object.assign(Object.assign({},i),{children:r})).mount(c));let l=h.state;if(h.mounted){const t=h.mounted(i,r,h.state);l=void 0!==t?l=t:h.state}if(l instanceof Promise){const t=t=>{h.element=t,Promise.all([l]).then((t=>{t[0]?h.setState(t[0]):h.setState(h.state)}))};return s.Z.h("section",Object.assign({},i,{ref:e=>t(e),_component:h}))}{const t=h._view(l,i),e=e=>{h.element=e,h.renderState(l,t)};return s.Z.h("section",Object.assign({},i,{ref:t=>e(t),_component:h}),t)}}(t,e,n)),r&&Array.isArray(r.children)){const t=null===(i=r.props)||void 0===i?void 0:i._component;if(t){let e=0;r.children=r.children.map((n=>o(n,t,e++)))}else r.children=r.children.map((t=>o(t,e,n++)))}return r}function i(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>n(t))):n(t)})),e}function r(t,e,...n){const s=i(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error("Unknown tag in vdom "+t)}const a=new WeakMap,c=function(t,e,n={}){if(null==e||!1===e)return;e=o(e,n);const s="SVG"===(null==t?void 0:t.nodeName);t&&(Array.isArray(e)?l(t,e,s):l(t,[e],s))};function h(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,s=""+(e.tag||"");return n.toUpperCase()===s.toUpperCase()}(t,e)?(!(2&e._op)&&l(t,e.children,n),!(1&e._op)&&p(t,e.props,n)):t.parentNode.replaceChild(d(e,n),t))}function l(t,e,n){var s;const o=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0,i=(null==e?void 0:e.length)||0,r=Math.min(o,i);for(let s=0;s<r;s++){const o=e[s];if(3===o._op)continue;const i=t.childNodes[s];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.nodeValue=o:t.replaceChild(u(o),i));else if(o instanceof HTMLElement||o instanceof SVGElement)t.insertBefore(o,i);else{const e=o.props&&o.props.key;if(e)if(i.key===e)h(t.childNodes[s],o,n);else{const r=a[e];if(r){const e=r.nextSibling;t.insertBefore(r,i),e?t.insertBefore(i,e):t.appendChild(i)}h(t.childNodes[s],o,n)}else h(t.childNodes[s],o,n)}}let c=t.childNodes.length;for(;c>r;)t.removeChild(t.lastChild),c--;if(i>r){const s=document.createDocumentFragment();for(let t=r;t<e.length;t++)s.appendChild(d(e[t],n));t.appendChild(s)}}function u(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function d(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return u(t);if(!t.tag||"function"==typeof t.tag)return u(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props,e),t.children&&t.children.forEach((t=>n.appendChild(d(t,e)))),n}function p(t,e,n){const s=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach((t=>n[t]=null)),e&&Object.keys(e).forEach((t=>n[t]=e[t])),n}(s,e||{}),t._props=e;for(const s in e){const o=e[s];if(s.startsWith("data-")){const e=s.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[e]!==o&&(o||""===o?t.dataset[e]=o:delete t.dataset[e])}else if("style"===s)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof o)t.style.cssText=o;else for(const e in o)t.style[e]!==o[e]&&(t.style[e]=o[e]);else if(s.startsWith("xlink")){const e=s.replace("xlink","").toLowerCase();null==o||!1===o?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,o)}else s.startsWith("on")?o&&"function"!=typeof o?"string"==typeof o&&(o?t.setAttribute(s,o):t.removeAttribute(s)):t[s]=o:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(s)||n?t.getAttribute(s)!==o&&(o?t.setAttribute(s,o):t.removeAttribute(s)):t[s]!==o&&(t[s]=o);"key"===s&&o&&(a[o]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((()=>e.ref(t)))}function f(t,...e){return i(e)}}},e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}return n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(778)})()}));
//# sourceMappingURL=apprun.js.map