!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(function(){return(()=>{"use strict";var t={752:(t,e,n)=>{n.d(e,{g:()=>o,Z:()=>r});class o{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter((t=>t.fn!==e))}find(t){return this._events[t]}run(t,...e){const n=this._events[t]||[];return console.assert(n&&n.length>0,"No subscriber for event: "+t),this._events[t]=n.filter((t=>!t.options.once)),n.forEach((n=>{const{fn:o,options:i}=n;return i.delay?this.delay(t,o,e,i):o.apply(this,e),!n.options.once})),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout((()=>{clearTimeout(o._t),e.apply(this,n)}),o.delay)}}let i;const s="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;s.app&&s._AppRunVersions?i=s.app:(i=new o,s.app=i,s._AppRunVersions="AppRun-2");const r=i},80:(t,e,n)=>{n.r(e),n.d(e,{Component:()=>i.Component,ROUTER_404_EVENT:()=>i.ROUTER_404_EVENT,ROUTER_EVENT:()=>i.ROUTER_EVENT,app:()=>i.app,customElement:()=>i.customElement,default:()=>m,event:()=>i.event,on:()=>i.on,update:()=>i.update});var o,i=n(778),s=n(703),r="undefined"==typeof document?void 0:document,a=!!r&&"content"in r.createElement("template"),c=!!r&&r.createRange&&"createContextualFragment"in r.createRange();function l(t,e){var n,o,i=t.nodeName,s=e.nodeName;return i===s||(n=i.charCodeAt(0),o=s.charCodeAt(0),n<=90&&o>=97?i===s.toUpperCase():o<=90&&n>=97&&s===i.toUpperCase())}function d(t,e,n){t[n]!==e[n]&&(t[n]=e[n],t[n]?t.setAttribute(n,""):t.removeAttribute(n))}var u={OPTION:function(t,e){var n=t.parentNode;if(n){var o=n.nodeName.toUpperCase();"OPTGROUP"===o&&(o=(n=n.parentNode)&&n.nodeName.toUpperCase()),"SELECT"!==o||n.hasAttribute("multiple")||(t.hasAttribute("selected")&&!e.selected&&(t.setAttribute("selected","selected"),t.removeAttribute("selected")),n.selectedIndex=-1)}d(t,e,"selected")},INPUT:function(t,e){d(t,e,"checked"),d(t,e,"disabled"),t.value!==e.value&&(t.value=e.value),e.hasAttribute("value")||t.removeAttribute("value")},TEXTAREA:function(t,e){var n=e.value;t.value!==n&&(t.value=n);var o=t.firstChild;if(o){var i=o.nodeValue;if(i==n||!n&&i==t.placeholder)return;o.nodeValue=n}},SELECT:function(t,e){if(!e.hasAttribute("multiple")){for(var n,o,i=-1,s=0,r=t.firstChild;r;)if("OPTGROUP"===(o=r.nodeName&&r.nodeName.toUpperCase()))r=(n=r).firstChild;else{if("OPTION"===o){if(r.hasAttribute("selected")){i=s;break}s++}!(r=r.nextSibling)&&n&&(r=n.nextSibling,n=null)}t.selectedIndex=i}}};function h(){}function p(t){if(t)return t.getAttribute&&t.getAttribute("id")||t.id}const f=function(t,e,n){if(n||(n={}),"string"==typeof e)if("#document"===t.nodeName||"HTML"===t.nodeName||"BODY"===t.nodeName){var i=e;(e=r.createElement("html")).innerHTML=i}else s=(s=e).trim(),e=a?function(t){var e=r.createElement("template");return e.innerHTML=t,e.content.childNodes[0]}(s):c?function(t){return o||(o=r.createRange()).selectNode(r.body),o.createContextualFragment(t).childNodes[0]}(s):function(t){var e=r.createElement("body");return e.innerHTML=t,e.childNodes[0]}(s);var s,d=n.getNodeKey||p,f=n.onBeforeNodeAdded||h,m=n.onNodeAdded||h,g=n.onBeforeElUpdated||h,b=n.onElUpdated||h,y=n.onBeforeNodeDiscarded||h,v=n.onNodeDiscarded||h,_=n.onBeforeElChildrenUpdated||h,E=!0===n.childrenOnly,w=Object.create(null),A=[];function C(t){A.push(t)}function N(t,e){if(1===t.nodeType)for(var n=t.firstChild;n;){var o=void 0;e&&(o=d(n))?C(o):(v(n),n.firstChild&&N(n,e)),n=n.nextSibling}}function O(t,e,n){!1!==y(t)&&(e&&e.removeChild(t),v(t),N(t,n))}function S(t){m(t);for(var e=t.firstChild;e;){var n=e.nextSibling,o=d(e);if(o){var i=w[o];i&&l(e,i)?(e.parentNode.replaceChild(i,e),T(i,e)):S(e)}else S(e);e=n}}function T(t,e,n){var o=d(e);if(o&&delete w[o],!n){if(!1===g(t,e))return;if(function(t,e){var n,o,i,s,r=e.attributes;if(11!==e.nodeType&&11!==t.nodeType){for(var a=r.length-1;a>=0;a--)o=(n=r[a]).name,i=n.namespaceURI,s=n.value,i?(o=n.localName||o,t.getAttributeNS(i,o)!==s&&("xmlns"===n.prefix&&(o=n.name),t.setAttributeNS(i,o,s))):t.getAttribute(o)!==s&&t.setAttribute(o,s);for(var c=t.attributes,l=c.length-1;l>=0;l--)o=(n=c[l]).name,(i=n.namespaceURI)?(o=n.localName||o,e.hasAttributeNS(i,o)||t.removeAttributeNS(i,o)):e.hasAttribute(o)||t.removeAttribute(o)}}(t,e),b(t),!1===_(t,e))return}"TEXTAREA"!==t.nodeName?function(t,e){var n,o,i,s,a,c=e.firstChild,h=t.firstChild;t:for(;c;){for(s=c.nextSibling,n=d(c);h;){if(i=h.nextSibling,c.isSameNode&&c.isSameNode(h)){c=s,h=i;continue t}o=d(h);var p=h.nodeType,m=void 0;if(p===c.nodeType&&(1===p?(n?n!==o&&((a=w[n])?i===a?m=!1:(t.insertBefore(a,h),o?C(o):O(h,t,!0),h=a):m=!1):o&&(m=!1),(m=!1!==m&&l(h,c))&&T(h,c)):3!==p&&8!=p||(m=!0,h.nodeValue!==c.nodeValue&&(h.nodeValue=c.nodeValue))),m){c=s,h=i;continue t}o?C(o):O(h,t,!0),h=i}if(n&&(a=w[n])&&l(a,c))t.appendChild(a),T(a,c);else{var g=f(c);!1!==g&&(g&&(c=g),c.actualize&&(c=c.actualize(t.ownerDocument||r)),t.appendChild(c),S(c))}c=s,h=i}!function(t,e,n){for(;e;){var o=e.nextSibling;(n=d(e))?C(n):O(e,t,!0),e=o}}(t,h,o);var b=u[t.nodeName];b&&b(t,e)}(t,e):u.TEXTAREA(t,e)}!function t(e){if(1===e.nodeType||11===e.nodeType)for(var n=e.firstChild;n;){var o=d(n);o&&(w[o]=n),t(n),n=n.nextSibling}}(t);var x,Z,j=t,k=j.nodeType,R=e.nodeType;if(!E)if(1===k)1===R?l(t,e)||(v(t),j=function(t,e){for(var n=t.firstChild;n;){var o=n.nextSibling;e.appendChild(n),n=o}return e}(t,(x=e.nodeName,(Z=e.namespaceURI)&&"http://www.w3.org/1999/xhtml"!==Z?r.createElementNS(Z,x):r.createElement(x)))):j=e;else if(3===k||8===k){if(R===k)return j.nodeValue!==e.nodeValue&&(j.nodeValue=e.nodeValue),j;j=e}if(j===e)v(t);else{if(e.isSameNode&&e.isSameNode(j))return;if(T(j,e,E),A)for(var M=0,U=A.length;M<U;M++){var V=w[A[M]];V&&O(V,V.parentNode,!1)}}return!E&&j!==t&&t.parentNode&&(j.actualize&&(j=j.actualize(t.ownerDocument||r)),t.parentNode.replaceChild(j,t)),j};i.default.createElement=s.az,i.default.render=function(t,e,n){if("string"==typeof e)if(e=e.trim(),t.firstChild){const n=t.cloneNode(!1);n.innerHTML=e,f(t,n)}else t.innerHTML=e;else(0,s.yj)(t,e,n)},i.default.Fragment=s.HY;const m=i.default},778:(t,e,n)=>{n.d(e,{Component:()=>m,ROUTER_404_EVENT:()=>b,ROUTER_EVENT:()=>g,app:()=>o.Z,customElement:()=>d,default:()=>_,event:()=>c,on:()=>l,update:()=>c});var o=n(752),i=n(703);const s=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const o=n.observedAttributes||[],i=o.reduce(((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t}),{});this._attrMap=t=>i[t]||t;const s={};Array.from(this.attributes).forEach((t=>s[this._attrMap(t.name)]=t.value)),o.forEach((t=>{void 0!==this[t]&&(s[t]=this[t]),Object.defineProperty(this,t,{get:()=>s[t],set(e){this.attributeChangedCallback(t,s[t],e)},configurable:!0,enumerable:!0})}));const r=this.children?Array.from(this.children):[];if(r.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},s),{children:r})).mount(this._shadowRoot,n),this._component._props=s,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(s,r,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}}disconnectedCallback(){var t,e,n,o;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(o=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===o||o.call(n),this._component=null}attributeChangedCallback(t,n,o){if(this._component){const i=this._attrMap(t);this._component._props[i]=o,this._component.run("attributeChanged",i,n,o),o!==n&&!1!==e.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}},r=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,s(e,n))},a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function c(t,e={}){return(n,o,i)=>{const s=t?t.toString():o;return a.defineMetadata("apprun-update:"+s,{name:s,key:o,options:e},n),i}}function l(t,e={}){return function(n,o){const i=t?t.toString():o;a.defineMetadata("apprun-update:"+i,{name:i,key:o,options:e},n)}}function d(t,e){return function(n){return r(t,n,e),n}}const u=(t,e)=>(e?t.state[e]:t.state)||"",h=(t,e,n)=>{if(e){const o=t.state||{};o[e]=n,t.setState(o)}else t.setState(n)},p={};o.Z.on("get-components",(t=>t.components=p));const f=t=>t;class m{constructor(t,e,n,i){this.state=t,this.view=e,this.update=n,this.options=i,this._app=new o.g,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign(Object.assign({},e),{render:!0}))}render(t,e){o.Z.render(t,e,this)}_view(t,e=null){if(!this.view)return;const n=o.Z.createElement;o.Z.h=o.Z.createElement=(t,e,...i)=>(e&&Object.keys(e).forEach((n=>{n.startsWith("$")&&(((t,e,n,i)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>i.run(t,e);else if("string"==typeof n)e[t]=t=>i.run(n,t);else if("function"==typeof n)e[t]=t=>i.setState(n(i.state,t));else if(Array.isArray(n)){const[o,...s]=n;"string"==typeof o?e[t]=t=>i.run(o,...s,t):"function"==typeof o&&(e[t]=t=>i.setState(o(i.state,...s,t)))}}else if("$bind"===t){const o=e.type||"text",s="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(o){case"checkbox":e.checked=u(i,s),e.onclick=t=>h(i,s||t.target.name,t.target.checked);break;case"radio":e.checked=u(i,s)===e.value,e.onclick=t=>h(i,s||t.target.name,t.target.value);break;case"number":case"range":e.value=u(i,s),e.oninput=t=>h(i,s||t.target.name,Number(t.target.value));break;default:e.value=u(i,s),e.oninput=t=>h(i,s||t.target.name,t.target.value)}else"select"===n?(e.value=u(i,s),e.onchange=t=>{t.target.multiple||h(i,s||t.target.name,t.target.value)}):"option"===n?(e.selected=u(i,s),e.onclick=t=>h(i,s||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=u(i,s),e.oninput=t=>h(i,s||t.target.name,t.target.value))}else o.Z.run("$",{key:t,tag:n,props:e,component:i})})(n,e,t,this),delete e[n])})),n(t,e,...i));const i=e?this.view(t,e):this.view(t);return o.Z.h=o.Z.createElement=n,i}renderState(t,e=null){if(!this.view)return;let n=e||this._view(t);if(o.Z.debug&&o.Z.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const i="string"==typeof this.element?document.getElementById(this.element):this.element;if(i){const t="_c";this.unload?i._component===this&&i.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),i.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(i)||(this.unload(this.state),this.observer.disconnect(),this.observer=null,this.save_vdom=[])}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):i.removeAttribute&&i.removeAttribute(t),i._component=this}e||this.render(i,n),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then((t=>{this.setState(t,e)})).catch((t=>{throw console.error(t),t})),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,i;if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]=f),this.add_actions(),this.state=null!==(i=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==i?i:{},"function"==typeof this.state&&(this.state=this.state()),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),o.Z.debug){const e="string"==typeof t?t:t.id;p[e]=p[e]||[],p[e].push(this)}return this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,((...i)=>{const s=e(this.state,...i);o.Z.debug&&o.Z.run("debug",{component:this,event:t,e:i,state:this.state,newState:s,options:n}),this.setState(s,n)}),n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach((e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}}));const e={};Array.isArray(t)?t.forEach((t=>{const[n,o,i]=t;n.toString().split(",").forEach((t=>e[t.trim()]=[o,i]))})):Object.keys(t).forEach((n=>{const o=t[n];("function"==typeof o||Array.isArray(o))&&n.split(",").forEach((t=>e[t.trim()]=o))})),e["."]||(e["."]=f),Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])}))}run(t,...e){const n=t.toString();return this.is_global_event(n)?o.Z.run(n,...e):this._app.run(n,...e)}on(t,e,n){const i=t.toString();return this._actions.push({name:i,fn:e}),this.is_global_event(i)?o.Z.on(i,e,n):this._app.on(i,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:e,fn:n}=t;this.is_global_event(e)?o.Z.off(e,n):this._app.off(e,n)}))}}m.__isAppRunComponent=!0;const g="//",b="///",y=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");o.Z.run(e,...n)||o.Z.run(b,e,...n),o.Z.run(g,e,...n)}else if(t.startsWith("/")){const[e,n,...i]=t.split("/");o.Z.run("/"+n,...i)||o.Z.run(b,"/"+n,...i),o.Z.run(g,"/"+n,...i)}else o.Z.run(t)||o.Z.run(b,t),o.Z.run(g,t)};o.Z.h=o.Z.createElement=i.az,o.Z.render=function(t,e,n){(0,i.yj)(t,e,n)},o.Z.Fragment=i.HY,o.Z.webComponent=r,o.Z.start=(t,e,n,o,i)=>{const s=Object.assign(Object.assign({},i),{render:!0,global_event:!0}),r=new m(e,n,o);return i&&i.rendered&&(r.rendered=i.rendered),r.mount(t,s),r};const v=t=>{};o.Z.on("$",v),o.Z.on("debug",(t=>v)),o.Z.on(g,v),o.Z.on("#",v),o.Z.route=y,o.Z.on("route",(t=>o.Z.route&&o.Z.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{o.Z.route===y&&(window.onpopstate=()=>y(location.hash),y(location.hash))}));const _=o.Z;"object"==typeof window&&(window.Component=m,window.React=o.Z,window.on=l,window.customElement=d)},703:(t,e,n)=>{n.d(e,{HY:()=>f,az:()=>r,yj:()=>c});var o=n(752);function i(t,e,n=0){var s;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>i(t,e,n++)));let r=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(r=function(t,e,n){const{tag:i,props:s,children:r}=t;let a="_"+n,c=s&&s.id;c?a=c:c=`_${n}${Date.now()}`,e.__componentCache||(e.__componentCache={});let l=e.__componentCache[a];l&&l instanceof i||(l=e.__componentCache[a]=new i(Object.assign(Object.assign({},s),{children:r})).mount(c));let d=l.state;if(l.mounted){const t=l.mounted(s,r,l.state);d=void 0!==t?d=t:l.state}if(d instanceof Promise){const t=t=>{l.element=t,Promise.all([d]).then((t=>{t[0]?l.setState(t[0]):l.setState(l.state)}))};return o.Z.h("section",Object.assign({},s,{ref:e=>t(e),_component:l}))}{const t=l._view(d,s),e=e=>{l.element=e,l.renderState(d,t)};return o.Z.h("section",Object.assign({},s,{ref:t=>e(t),_component:l}),t)}}(t,e,n)),r&&Array.isArray(r.children)){const t=null===(s=r.props)||void 0===s?void 0:s._component;if(t){let e=0;r.children=r.children.map((n=>i(n,t,e++)))}else r.children=r.children.map((t=>i(t,e,n++)))}return r}function s(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:""+t)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>n(t))):n(t)})),e}function r(t,e,...n){const o=s(n);if("string"==typeof t)return{tag:t,props:e,children:o};if(Array.isArray(t))return t;if(void 0===t&&n)return o;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:o};if("function"==typeof t)return t(e,o);throw new Error("Unknown tag in vdom "+t)}const a=new WeakMap,c=function(t,e,n={}){if(null==e||!1===e)return;e=i(e,n);const o="SVG"===(null==t?void 0:t.nodeName);t&&(Array.isArray(e)?d(t,e,o):d(t,[e],o))};function l(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,o=""+(e.tag||"");return n.toUpperCase()===o.toUpperCase()}(t,e)?(!(2&e._op)&&d(t,e.children,n),!(1&e._op)&&p(t,e.props,n)):t.parentNode.replaceChild(h(e,n),t))}function d(t,e,n){var o;const i=(null===(o=t.childNodes)||void 0===o?void 0:o.length)||0,s=(null==e?void 0:e.length)||0,r=Math.min(i,s);for(let o=0;o<r;o++){const i=e[o];if(3===i._op)continue;const s=t.childNodes[o];if("string"==typeof i)s.textContent!==i&&(3===s.nodeType?s.nodeValue=i:t.replaceChild(u(i),s));else if(i instanceof HTMLElement||i instanceof SVGElement)t.insertBefore(i,s);else{const e=i.props&&i.props.key;if(e)if(s.key===e)l(t.childNodes[o],i,n);else{const r=a[e];if(r){const e=r.nextSibling;t.insertBefore(r,s),e?t.insertBefore(s,e):t.appendChild(s)}l(t.childNodes[o],i,n)}else l(t.childNodes[o],i,n)}}let c=t.childNodes.length;for(;c>r;)t.removeChild(t.lastChild),c--;if(s>r){const o=document.createDocumentFragment();for(let t=r;t<e.length;t++)o.appendChild(h(e[t],n));t.appendChild(o)}}function u(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function h(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return u(t);if(!t.tag||"function"==typeof t.tag)return u(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return p(n,t.props,e),t.children&&t.children.forEach((t=>n.appendChild(h(t,e)))),n}function p(t,e,n){const o=t._props||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach((t=>n[t]=null)),e&&Object.keys(e).forEach((t=>n[t]=e[t])),n}(o,e||{}),t._props=e;for(const o in e){const i=e[o];if(o.startsWith("data-")){const e=o.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[e]!==i&&(i||""===i?t.dataset[e]=i:delete t.dataset[e])}else if("style"===o)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof i)t.style.cssText=i;else for(const e in i)t.style[e]!==i[e]&&(t.style[e]=i[e]);else if(o.startsWith("xlink")){const e=o.replace("xlink","").toLowerCase();null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,i)}else o.startsWith("on")?i&&"function"!=typeof i?"string"==typeof i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]=i:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(o)||n?t.getAttribute(o)!==i&&(i?t.setAttribute(o,i):t.removeAttribute(o)):t[o]!==i&&(t[o]=i);"key"===o&&i&&(a[i]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((()=>e.ref(t)))}function f(t,...e){return s(e)}}},e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}return n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n(80)})()}));
//# sourceMappingURL=apprun-html.js.map