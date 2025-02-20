(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,mt=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Vt=Symbol(),xt=new WeakMap;let Yt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(mt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=xt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&xt.set(e,t))}return t}toString(){return this.cssText}};const Qt=s=>new Yt(typeof s=="string"?s:s+"",void 0,Vt),te=(s,t)=>{if(mt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=it.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},At=mt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Qt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ee,defineProperty:se,getOwnPropertyDescriptor:ie,getOwnPropertyNames:re,getOwnPropertySymbols:oe,getPrototypeOf:ne}=Object,lt=globalThis,Ct=lt.trustedTypes,ae=Ct?Ct.emptyScript:"",le=lt.reactiveElementPolyfillSupport,j=(s,t)=>s,ot={toAttribute(s,t){switch(t){case Boolean:s=s?ae:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},vt=(s,t)=>!ee(s,t),Et={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:vt};Symbol.metadata??=Symbol("metadata"),lt.litPropertyMetadata??=new WeakMap;let F=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Et){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&se(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=ie(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){const h=r?.call(this);o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Et}static _$Ei(){if(this.hasOwnProperty(j("elementProperties")))return;const t=ne(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(j("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(j("properties"))){const e=this.properties,i=[...re(e),...oe(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(At(r))}else t!==void 0&&e.push(At(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return te(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:ot).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:ot;this._$Em=r,this[r]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??vt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[j("elementProperties")]=new Map,F[j("finalized")]=new Map,le?.({ReactiveElement:F}),(lt.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $t=globalThis,nt=$t.trustedTypes,kt=nt?nt.createPolicy("lit-html",{createHTML:s=>s}):void 0,jt="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,Bt="?"+P,he=`<${Bt}>`,L=document,q=()=>L.createComment(""),J=s=>s===null||typeof s!="object"&&typeof s!="function",bt=Array.isArray,ce=s=>bt(s)||typeof s?.[Symbol.iterator]=="function",ut=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,It=/>/g,O=RegExp(`>|${ut}(?:([^\\s"'>=/]+)(${ut}*=${ut}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,Mt=/"/g,Wt=/^(?:script|style|textarea|title)$/i,qt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),l=qt(1),st=qt(2),S=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Nt=new WeakMap,I=L.createTreeWalker(L,129);function Jt(s,t){if(!bt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return kt!==void 0?kt.createHTML(t):t}const de=(s,t)=>{const e=s.length-1,i=[];let r,o=t===2?"<svg>":t===3?"<math>":"",n=V;for(let h=0;h<e;h++){const a=s[h];let u,p,c=-1,b=0;for(;b<a.length&&(n.lastIndex=b,p=n.exec(a),p!==null);)b=n.lastIndex,n===V?p[1]==="!--"?n=Ot:p[1]!==void 0?n=It:p[2]!==void 0?(Wt.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=O):p[3]!==void 0&&(n=O):n===O?p[0]===">"?(n=r??V,c=-1):p[1]===void 0?c=-2:(c=n.lastIndex-p[2].length,u=p[1],n=p[3]===void 0?O:p[3]==='"'?Mt:Lt):n===Mt||n===Lt?n=O:n===Ot||n===It?n=V:(n=O,r=void 0);const _=n===O&&s[h+1].startsWith("/>")?" ":"";o+=n===V?a+he:c>=0?(i.push(u),a.slice(0,c)+jt+a.slice(c)+P+_):a+P+(c===-2?h:_)}return[Jt(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[u,p]=de(t,e);if(this.el=Z.createElement(u,i),I.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=I.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(jt)){const b=p[n++],_=r.getAttribute(c).split(P),et=/([.?@])?(.*)/.exec(b);a.push({type:1,index:o,name:et[2],strings:_,ctor:et[1]==="."?ue:et[1]==="?"?ge:et[1]==="@"?fe:ht}),r.removeAttribute(c)}else c.startsWith(P)&&(a.push({type:6,index:o}),r.removeAttribute(c));if(Wt.test(r.tagName)){const c=r.textContent.split(P),b=c.length-1;if(b>0){r.textContent=nt?nt.emptyScript:"";for(let _=0;_<b;_++)r.append(c[_],q()),I.nextNode(),a.push({type:2,index:++o});r.append(c[b],q())}}}else if(r.nodeType===8)if(r.data===Bt)a.push({type:2,index:o});else{let c=-1;for(;(c=r.data.indexOf(P,c+1))!==-1;)a.push({type:7,index:o}),c+=P.length-1}o++}}static createElement(t,e){const i=L.createElement("template");return i.innerHTML=t,i}}function H(s,t,e=s,i){if(t===S)return t;let r=i!==void 0?e._$Co?.[i]:e._$Cl;const o=J(t)?void 0:t._$litDirective$;return r?.constructor!==o&&(r?._$AO?.(!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=r:e._$Cl=r),r!==void 0&&(t=H(s,r._$AS(s,t.values),r,i)),t}class pe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??L).importNode(e,!0);I.currentNode=r;let o=I.nextNode(),n=0,h=0,a=i[0];for(;a!==void 0;){if(n===a.index){let u;a.type===2?u=new G(o,o.nextSibling,this,t):a.type===1?u=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(u=new me(o,this,t)),this._$AV.push(u),a=i[++h]}n!==a?.index&&(o=I.nextNode(),n++)}return I.currentNode=L,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class G{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),J(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):ce(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(L.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Z.createElement(Jt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const o=new pe(r,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=Nt.get(t.strings);return e===void 0&&Nt.set(t.strings,e=new Z(t)),e}k(t){bt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const o of t)r===e.length?e.push(i=new G(this.O(q()),this.O(q()),this,this.options)):i=e[r],i._$AI(o),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=g}_$AI(t,e=this,i,r){const o=this.strings;let n=!1;if(o===void 0)t=H(this,t,e,0),n=!J(t)||t!==this._$AH&&t!==S,n&&(this._$AH=t);else{const h=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=H(this,h[i+a],e,a),u===S&&(u=this._$AH[a]),n||=!J(u)||u!==this._$AH[a],u===g?t=g:t!==g&&(t+=(u??"")+o[a+1]),this._$AH[a]=u}n&&!r&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class ue extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class ge extends ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class fe extends ht{constructor(t,e,i,r,o){super(t,e,i,r,o),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??g)===S)return;const i=this._$AH,r=t===g&&i!==g||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==g&&(i===g||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class me{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const ve=$t.litHtmlPolyfillSupport;ve?.(Z,G),($t.litHtmlVersions??=[]).push("3.2.1");const $e=(s,t,e)=>{const i=e?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const o=e?.renderBefore??null;i._$litPart$=r=new G(t.insertBefore(q(),o),o,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=globalThis,yt=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),Ut=new WeakMap;let Zt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Ut.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Ut.set(e,t))}return t}toString(){return this.cssText}};const be=s=>new Zt(typeof s=="string"?s:s+"",void 0,wt),w=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new Zt(e,s,wt)},ye=(s,t)=>{if(yt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=rt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},Tt=yt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return be(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:we,defineProperty:_e,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Se,getOwnPropertySymbols:xe,getPrototypeOf:Ae}=Object,ct=globalThis,Rt=ct.trustedTypes,Ce=Rt?Rt.emptyScript:"",Ee=ct.reactiveElementPolyfillSupport,B=(s,t)=>s,gt={toAttribute(s,t){switch(t){case Boolean:s=s?Ce:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Xt=(s,t)=>!we(s,t),Dt={attribute:!0,type:String,converter:gt,reflect:!1,hasChanged:Xt};Symbol.metadata??=Symbol("metadata"),ct.litPropertyMetadata??=new WeakMap;class D extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&_e(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:o}=Pe(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return r?.call(this)},set(n){const h=r?.call(this);o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Dt}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const t=Ae(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const e=this.properties,i=[...Se(e),...xe(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(Tt(r))}else t!==void 0&&e.push(Tt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ye(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:gt).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const o=i.getPropertyOptions(r),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:gt;this._$Em=r,this[r]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??Xt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[B("elementProperties")]=new Map,D[B("finalized")]=new Map,Ee?.({ReactiveElement:D}),(ct.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$e(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return S}};f._$litElement$=!0,f.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:f});const ke=globalThis.litElementPolyfillSupport;ke?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:vt},Ie=(s=Oe,t,e)=>{const{kind:i,metadata:r}=e;let o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,s),i==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,s)},init(h){return h!==void 0&&this.P(n,void 0,s),h}}}if(i==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,s)}}throw Error("Unsupported decorator location: "+i)};function E(s){return(t,e)=>typeof e=="object"?Ie(s,t,e):((i,r,o)=>{const n=r.hasOwnProperty(o);return r.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(r,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(s){return E({...s,state:!0,attribute:!1})}class Le{constructor(){this.tokenKey="auth_token"}getToken(){return localStorage.getItem(this.tokenKey)}setToken(t){localStorage.setItem(this.tokenKey,t)}clearToken(){localStorage.removeItem(this.tokenKey)}isAuthenticated(){const t=this.getToken();return t?JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now():!1}supportsCredentialsAPI(){return"credentials"in navigator&&"PasswordCredential"in window}async saveCredentials(t,e){if(!v.supportsCredentialsAPI())return;const i=new PasswordCredential({id:t,password:e,name:t});await navigator.credentials.store(i)}async tryRequestCredentials(){return v.supportsCredentialsAPI()?await navigator.credentials.get({password:!0,mediation:"optional"}):null}async logout(){if(this.supportsCredentialsAPI())try{await navigator.credentials.preventSilentAccess(),console.log("preventSilentAccess")}catch(t){window.alert(t),console.error("Failed to prevent silent access: ",t)}this.clearToken(),console.log("Navigate to"),window.dispatchEvent(new CustomEvent("navigateto",{detail:"login-page"}))}}const v=new Le;var Me=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,dt=(s,t,e,i)=>{for(var r=i>1?void 0:i?Ne(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Me(t,e,r),r};let M=class extends f{constructor(){super(...arguments),this.message="",this.type="info",this.visible=!1}show(s,t="info",e=3e3){this.message=s,this.type=t,this.visible=!0,this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.hide()},e)}hide(){this.visible=!1}render(){return l`
            <div class="popup-notification ${this.type} ${this.visible?"popup-notification-visible":"popup-notification-hidden"}">
                <svg class="icon" viewBox="0 0 24 24">
                    ${this.renderIcon()}
                </svg>
                ${this.message}
            </div>
        `}renderIcon(){switch(this.type){case"success":return st`<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>`;case"error":return st`<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm4.242,14.829a1,1,0,0,1,0,1.414,1.026,1.026,0,0,1-1.414,0L12,13.414,9.172,16.243a1.01,1.01,0,0,1-1.414,0,1,1,0,0,1,0-1.414L10.586,12,7.758,9.171A1,1,0,1,1,9.172,7.757L12,10.586l2.828-2.829a1,1,0,1,1,1.414,1.414L13.414,12Z"></path>`;case"warning":return st`<path d="M12 2L1 21H23M12 6L19.53 19H4.47M11 10V14H13V10M11 16V18H13V16"/>`;default:return st`<path d="M11 7H13V9H11V7M11 11H13V17H11V11M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>`}}};M.styles=w`
        :host {
            position: fixed;
            left: 0;
            right: 0;
            top: 10px; /* Отступ от верха экрана */
            z-index: 9000;
            display: flex;
            justify-content: center;
            pointer-events: none;
            font-family: 'Roboto', sans-serif;
        }

        .popup-notification {
            padding: 12px 24px;
            border-radius: 28px;
            background-color: white;
            color: #6200ee;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            pointer-events: auto;
        }

        .popup-notification-hidden {
            transform: translateY(calc(-10px)); /* Уезжает за пределы экрана + отступ */
            opacity: 0;
            transition:
                transform 0.3s ease,
                opacity 0.3s ease;
        }

        .popup-notification-visible {
            transform: translateY(0);
            opacity: 1;
        }

       .popup-notification.success svg path {
            fill: #4CAF50 !important;
        }

        .popup-notification.error svg path {
            fill: #F44336 !important;
        }

        .popup-notification.info svg path {
            fill:#000000 !important;
        }

        .popup-notification.warning svg path {
            fill: #FF9800 !important;
        }

        .icon {
            width: 24px;
            height: 24px;
            /* Убираем наследование, явно задаем цвет по умолчанию */
            fill: white;
        }
    `;dt([d()],M.prototype,"message",2);dt([d()],M.prototype,"type",2);dt([d()],M.prototype,"visible",2);M=dt([$("popup-notification")],M);const Ue=new M;class x{static{this.instance=null}static initialize(){this.instance||(this.instance=Ue,document.body.appendChild(this.instance))}static show(t,e,i){this.initialize(),this.instance.show(t,e,i)}static hide(){this.instance&&this.instance.hide()}}var Te=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Kt=(s,t,e,i)=>{for(var r=i>1?void 0:i?Re(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Te(t,e,r),r};let X=class extends f{constructor(){super(...arguments),this.visible=!1}show(){this.visible=!0}hide(){this.visible=!1}isVisible(){return this.visible}render(){return l`
            <div class="loading-overlay ${this.visible?"loading-overlay-visible":"loading-overlay-hidden"}">
                <div class="spinner"></div>
            </div>
        `}};X.styles=w`
        :host {
        }

        .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(3px);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            transition:
                transform 0.3s ease,
                opacity 0.3s ease;
        }

        .loading-overlay-hidden {
            pointer-events: none;
            opacity: 0;
        }

        .loading-overlay-visible {
            opacity: 1;
        }

        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #6200ee;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;Kt([d()],X.prototype,"visible",2);X=Kt([$("loading-overlay")],X);const De=new X;class m{static{this.instance=null}static initialize(){this.instance||(this.instance=De,document.body.appendChild(this.instance))}static show(){this.initialize(),this.instance.show()}static hide(){this.instance&&this.instance.hide()}static isVisible(){return this.instance?this.instance.isVisible():!1}}const k=w`
    :host {
        display: block;
        font-family: 'Roboto', sans-serif;
    }

    main {
        padding: 1rem;
        padding-top: 90px; /* Высота header + отступ */
        max-width: 600px;
        margin: 0 auto;
    }

    button.action-button {
        display: block;
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        font-size: 1rem;
        background-color: #6200ee;
        color: white;
        border: none;
        border-radius: 8px;
        text-align: center;
        cursor: pointer;
        transition: background-color 0.3s ease;
        box-sizing: border-box;
    }

    button.action-button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }

    button.action-button:not(:disabled):hover {
        background-color: #3700b3;
    }

    input:not([type=checkbox]) {
        width: 100%;
        padding: 0.75rem;
        margin: 0.5rem 0;
        border: 1px solid #ccc;
        border-radius: 8px;
        font-size: 1rem;
        box-sizing: border-box;
    }

    input:focus {
        border-color: #6200ee;
        outline: none;
    }

    input.invalid {
        border-color: #ff4444;
    }

    .error-message {
        color: #ff4444;
        font-size: 12px;
        margin-top: 4px;
        display: none;
    }

    input.invalid + .error-message {
        display: block;
    }

    .form-group {
        margin-bottom: 16px;
    }

    .link-container {
        margin-top: 15px;
        display: flex;
        gap: 8px;
        align-items: center;
        box-sizing: border-box;
    }

    .link-field {
        flex-grow: 1;
        padding: 0.75rem;
        margin: 0.5rem 0;
        border: 2px solid #6200ee;
        border-radius: 8px;
        font-size: 1rem;
        color: #333;
        cursor: text;
        user-select: all;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .share-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    .share-icon {
        width: 24px;
        height: 24px;
        fill: #6200ee;
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1001;
        transition:
            transform 0.3s ease,
            opacity 0.3s ease;
    }

    .modal-hidden {
        pointer-events: none;
        opacity: 0;
    }

    .modal-visible {
        opacity: 1;
    }

    .modal-content {
        background: white;
        padding: 24px;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        position: relative;
        padding-top: 48px;
    }

    .modal-header-container {
        display: flex;
        align-items: center;
        position: absolute;
        top: 24px;
        left: 24px;
        right: 24px;
    }

    .modal-header-text {
        margin: 0;
    }

    .modal-header-close-button {
        position: static;
        margin-left: auto;
        background: none;
        border: none;
        cursor: pointer;
    }

    label {
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #333;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 1rem;
        border-bottom: 1px solid #eee;
    }

    h2 {
        margin-top: 0;
        color: #333;
    }
`;var He=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,pt=(s,t,e,i)=>{for(var r=i>1?void 0:i?ze(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&He(t,e,r),r};let N=class extends f{constructor(){super(...arguments),this.heading="",this.message="",this.visible=!1}show(s,t){this.heading=s,this.message=t,this.visible=!0}hide(){this.visible=!1,this.heading="",this.message=""}render(){return l`
            <div class="modal ${this.visible?"modal-visible":"modal-hidden"}" @click="${this.hide}">
                <div class="modal-content" @click="${s=>s.stopPropagation()}">
                    <div class="modal-header-container">
                        <h3 class="modal-header-text">${this.heading}</h3>
                        <button class="modal-header-close-button" @click="${()=>this.visible=!1}">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>
                    <div class="modal-text">${this.message}</div>
                </div>
            </div>
        `}};N.styles=[k,w`
        .modal-text {
            margin: 16px 0;
            line-height: 1.5;
            white-space: pre-line;
        }
    `];pt([d()],N.prototype,"heading",2);pt([d()],N.prototype,"message",2);pt([d()],N.prototype,"visible",2);N=pt([$("modal-window")],N);const Fe=new N;class Ve{static{this.instance=null}static initialize(){this.instance||(this.instance=Fe,document.body.appendChild(this.instance))}static show(t,e){this.initialize(),this.instance.show(t,e)}static hide(){this.instance&&this.instance.hide()}}var je=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,Y=(s,t,e,i)=>{for(var r=i>1?void 0:i?Be(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&je(t,e,r),r};let A=class extends f{constructor(){super(...arguments),this.type="other",this.deferredPrompt=null,this.visible=!1,this.loadedImages={}}get basePath(){return"/test-pwa/"}show(s="other",t=null){this.type=s,this.deferredPrompt=t,this.visible=!0}hide(){this.visible=!1}renderStoreIcon(s,t){const e=this.loadedImages[s];return l`
            <div class="image-container">
                ${e?"":l`<div class="skeleton"></div>`}
                <img
                    src=${s}
                    class="store-icon ${e?"loaded":""}"
                    type="image/png"
                    alt=${t}
                    @load=${()=>this.handleImageLoad(s)}
                />
          </div>
        `}handleImageLoad(s){this.loadedImages={...this.loadedImages,[s]:!0}}render(){return l`
            <div class="modal ${this.visible?"modal-visible":"modal-hidden"}" @click="${this.hide}">
                <div class="modal-content" @click="${s=>s.stopPropagation()}">
                    <div class="modal-header-container">
                        <h3 class="modal-header-text">Скачать приложение</h3>
                        <button class="modal-header-close-button" @click="${()=>this.visible=!1}">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                            </svg>
                        </button>
                    </div>

                    <div class="platform-section">
                        ${this.renderPlatformSection()}
                    </div>

                </div>
            </div>
        `}renderPlatformSection(){return l`
            ${this.deferredPrompt?l`
                <a @click="${this.installPWA}" class="store-link">
                    ${this.renderStoreIcon(this.basePath+"/assets/icons/INSTALL.png","Установить сейчас")}
                </a>
            `:""}

            ${this.type==="android"||this.type==="other"?l`
                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store" class="store-link">
                    ${this.renderStoreIcon(this.basePath+"/assets/icons/GOOGLE.png","Google Play")}
                </a>
            `:""}

            ${this.type==="android"||this.type==="other"?l`
                <a target="_blank" rel="noopener noreferrer" href="https://apps.rustore.ru" class="store-link">
                    ${this.renderStoreIcon(this.basePath+"/assets/icons/RUSTORE.png","RuStore")}
                </a>
            `:""}

            ${this.type==="android"||this.type==="other"?l`
                <a target="_blank" rel="noopener noreferrer" href="https://galaxystore.ru/" class="store-link">
                    ${this.renderStoreIcon(this.basePath+"/assets/icons/GALAXY_STORE.png","Galaxy Store")}
                </a>
            `:""}

            ${this.type==="android"||this.type==="other"?l`
                <a target="_blank" rel="noopener noreferrer" href="https://appgallery.huawei.com" class="store-link">
                    ${this.renderStoreIcon(this.basePath+"/assets/icons/HUAWEI.png","Huawei AppGallery")}
                </a>
            `:""}

            ${this.type==="ios"||this.type==="other"?l`
                <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com" class="store-link">
                    ${this.renderStoreIcon(this.basePath+"/assets/icons/APPLE.png","App Store")}
                </a>
            `:""}

            ${this.type==="ios"?l`
                <a @click="${this.showAddToHomeScreen}" class="store-link">
                    ${this.renderStoreIcon(this.basePath+"/assets/icons/ADD_TO_HOME_SCREEN.png","Добавить на главный экран")}
                </a>
            `:""}
        `}installPWA(){this.deferredPrompt&&this.deferredPrompt.prompt(),this.hide()}showAddToHomeScreen(){Ve.show("Добавить на главный экран",`1. Нажмите на кнопку "Поделиться"
2. Выберите "Добавить на главный экран"
3. Нажмите "Добавить"`)}};A.styles=[k,w`
        .platform-section {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            align-items: center;
            justify-items: center;
            text-align: center;
            padding-top: 20px;
        }

        .store-link {
            cursor: pointer;
            margin: auto;
            width: 100%; /* Чтобы ссылки занимали всю ширину ячейки */
        }

        .image-container {
            position: relative;
            width: auto;
            height: auto;
        }

        .skeleton {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #e0e0e0;
            border-radius: 8px;
            animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
            0% { opacity: 0.8; }
            50% { opacity: 0.5; }
            100% { opacity: 0.8; }
        }

        .store-icon {
            width: 100%;
            max-width: 195px;
            height: auto;
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .store-icon.loaded {
            opacity: 1;
        }
  `];Y([d()],A.prototype,"type",2);Y([d()],A.prototype,"deferredPrompt",2);Y([d()],A.prototype,"visible",2);Y([d()],A.prototype,"loadedImages",2);A=Y([$("download-modal-window")],A);const We=new A;class qe{static{this.instance=null}static initialize(){this.instance||(this.instance=We,document.body.appendChild(this.instance))}static show(t="other",e=null){this.initialize(),this.instance.show(t,e)}static hide(){this.instance&&this.instance.hide()}}var Je=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Q=(s,t,e,i)=>{for(var r=i>1?void 0:i?Ze(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Je(t,e,r),r};let U=class extends f{constructor(){super(...arguments),this.showInstallButton=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.showBackButton=!1,this.isLoginPage=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=s=>{s.preventDefault(),this.deferredPrompt=s,this.showInstallButton=!0},this.handleInstallClick=async()=>{let s=this.isIOS?"ios":this.isAndroid?"android":"other",t=this.deferredPrompt;qe.show(s,t)},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}render(){return l`
            <header>
                ${this.showBackButton?l`<button class="back-button" @click="${this.onBack}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/>
					</svg>
                </button>`:""}

                <div class="title">${this.title}</div>

                ${!this.isInStandaloneMode&&!this.isLoginPage&&(this.showInstallButton||!this.deferredPrompt)?l`
                    <button class="install-button" @click="${this.handleInstallClick}">
                        <svg class="install-icon" viewBox="0 0 24 24">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </svg>
                    </button>
                `:""}
            </header>
        `}};U.styles=[w`
        :host {
            position: sticky;
            top: 0;
        }

        header {
            display: flex;
            align-items: center;
            padding: 16px;
            background-color: #6200ee;
            color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            height: 32px; /* Увеличиваем высоту для лучшего отображения */
        }

        .back-button {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 8px;
            margin-right: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .back-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .back-button:active {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .title {
            font-size: 20px;
            font-weight: 500;
            flex-grow: 1;
        }

        .install-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: background-color 0.3s ease;
        }

        .install-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .install-button:active {
            background-color: rgba(255, 255, 255, 0.2);
        }

        .install-icon {
            width: 24px;
            height: 24px;
            fill: white;
        }
    `,k];Q([d()],U.prototype,"showInstallButton",2);Q([E({type:Boolean})],U.prototype,"showBackButton",2);Q([E({type:Boolean})],U.prototype,"isLoginPage",2);Q([E({type:Function})],U.prototype,"onBack",2);U=Q([$("app-header")],U);class Xe{constructor(){this.baseUrl="https://api.example.com"}async login(t,e){return"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA"}async fetchPaymentHistory(){const t=Math.random()*2e3+1e3;return await new Promise(e=>setTimeout(e,t)),[{id:"1",amount:1e3,date:"2023-10-01",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"2",amount:1500,date:"2023-10-05",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"3",amount:2e3,date:"2023-10-10",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"}]}async fetchTPOList(t,e){const i=Math.random()*2e3+1e3;await new Promise(o=>setTimeout(o,i));const r=Math.floor(Math.random()*10)+1;return Array.from({length:r},(o,n)=>({id:Math.random().toString(36).substring(2,9),amount:Math.floor(Math.random()*1e5)+1e3,date:new Date(Date.now()-Math.random()*31536e6).toISOString().split("T")[0],number:`ТПО-${Math.floor(Math.random()*1e6)}`}))}}const _t=new Xe;class Pt{static async shareLink(t){try{navigator.share?await navigator.share({title:"Ссылка на платеж",text:"Ссылка для оплаты:",url:t}):(await navigator.clipboard.writeText(t),x.show("Ссылка скопирована в буфер обмена","success"))}catch(e){e.toString().includes("AbortError")||x.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}}}var Ke=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,tt=(s,t,e,i)=>{for(var r=i>1?void 0:i?Ge(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ke(t,e,r),r};let T=class extends f{constructor(){super(...arguments),this.tpos=[],this.fio="",this.passportSeriesNumber="",this.isFormValid=!1,this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleSearchTPO(){m.show(),this.tpos=[];try{const s=await _t.fetchTPOList(this.fio.trim(),this.passportSeriesNumber);this.tpos=s}catch{x.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}finally{this.clearForm(),m.hide()}}clearForm(){this.fio="",this.passportSeriesNumber="",this.validateForm()}validateForm(){const s=this.fioRegex.test(this.fio),t=this.passportSeriesNumberRegex.test(this.passportSeriesNumber);this.isFormValid=s&&t}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const r=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(r,r)}}),this.validateForm(),t.value=this.fio}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,4),i.length>4&&(r+=" "+i.slice(4,10))),this.passportSeriesNumber=r,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const i=e.length-t.length;return s+i}async generateLink(s){m.show();const t=Math.random()*2e3+1e3;await new Promise(r=>setTimeout(r,t));const e=Math.random().toString(36).substring(2,8),i=this.tpos.map(r=>r.id===s.id?{...r,link:`${window.location.origin}/payment/${e}`}:r);this.tpos=i,m.hide(),x.show("Ссылка успешно создана","success")}render(){return l`
            <div class="form-group">
                <label for="fio">ФИО плательщика</label>
                <input
                    id="fio"
                    type="text"
                    .value="${this.fio}"
                    @input="${this.handleFioInput}"
                    class="${!this.fioRegex.test(this.fio)&&this.fio?"invalid":""}"
                    placeholder="Иванов Иван Иванович"
                />
                <div class="error-message">Введите корректное ФИО (например, Иванов Иван Иванович)</div>
            </div>

            <div class="form-group">
                <label for="passport">Серия и номер паспорта РФ плательщика</label>
                <input
                    id="passport"
                    type="text"
                    .value="${this.passportSeriesNumber}"
                    @input="${this.handlePassportSeriesNumberInput}"
                    class="${!this.passportSeriesNumberRegex.test(this.passportSeriesNumber)&&this.passportSeriesNumber?"invalid":""}"
                    placeholder="1234 567890"
                    inputmode="numeric"
                    pattern="${this.passportSeriesNumberRegex}"
                    maxlength="11"
                />
                <div class="error-message">Введите серию и номер паспорта РФ в формате "1234 567890"</div>
            </div>

            <button
                class="action-button"
                @click="${this.handleSearchTPO}"
                ?disabled="${!this.isFormValid}"
            >
                Поиск
            </button>

            <div class="search-results">
                ${this.tpos.map(s=>l`
                <div class="tpo-card">
                    <div class="tpo-field"><strong>Сумма: </strong>${s.amount} руб.</div>
                    <div class="tpo-field"><strong>Дата: </strong>${s.date}</div>
                    <div class="tpo-field"><strong>Номер ТПО: </strong>${s.number}</div>

                    <button
                        class="action-button"
                        @click="${()=>this.generateLink(s)}"
                        ?disabled="${s.link}"
                    >
                        Создать ссылку
                    </button>

                    ${s.link?l`
                        <div class="link-container">
                            <div class="link-field">${s.link}</div>
                            <button
                                class="share-button"
                                @click="${()=>Pt.shareLink(s.link)}"
                            >
                                <svg class="share-icon" viewBox="0 0 24 24">
                                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                                </svg>
                            </button>
                        </div>
                    `:""}
                </div>
                `)}
            </div>
        `}};T.styles=[w`
        .search-results {
            margin-top: 20px;
            display: grid;
            gap: 16px;
        }

        .tpo-card {
            padding: 16px;
            border: 1px solid #6200ee;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .tpo-field {
            margin: 8px 0;
        }
      `,k];tt([d()],T.prototype,"tpos",2);tt([d()],T.prototype,"fio",2);tt([d()],T.prototype,"passportSeriesNumber",2);tt([d()],T.prototype,"isFormValid",2);T=tt([$("search-tpo")],T);function Ht(s){return!0}var Ye=Object.defineProperty,Qe=Object.getOwnPropertyDescriptor,R=(s,t,e,i)=>{for(var r=i>1?void 0:i?Qe(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&Ye(t,e,r),r};let y=class extends f{constructor(){super(...arguments),this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.isFormValid=!1,this.generatedLink="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.innRegex=/^\d{12}$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleGenerateLink(){m.show(),this.generatedLink="";try{const s=Math.random()*2e3+1e3;await new Promise(t=>setTimeout(t,s)),this.generateRandomLink()}catch{x.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}finally{this.clearForm(),m.hide(),x.show("Ссылка успешно создана","success")}}clearForm(){this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.validateForm()}generateRandomLink(){const s=Math.random().toString(36).substring(2,8);this.generatedLink=`${window.location.origin}/payment/${s}`}validateForm(){const s=this.fioRegex.test(this.fio),t=this.innRegex.test(this.inn)&&Ht(this.inn),e=this.passportSeriesNumberRegex.test(this.passportSeriesNumber),i=this.validatePassportIssueDate(this.passportIssueDate);this.isFormValid=s&&t&&e&&i}validatePassportIssueDate(s){return s?new Date(s)<=new Date:!1}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const r=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(r,r)}}),this.validateForm(),t.value=this.fio}handleInnInput(s){this.inn=s.target.value.replace(/\D/g,"");const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,12)),this.inn=r,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.inn}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,4),i.length>4&&(r+=" "+i.slice(4,10))),this.passportSeriesNumber=r,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const i=e.length-t.length;return s+i}handlePassportIssueDateInput(s){this.passportIssueDate=s.target.value,this.validateForm()}render(){return l`
            <div class="form-group">
                <label for="fio">ФИО плательщика</label>
                <input
                    id="fio"
                    type="text"
                    .value="${this.fio}"
                    @input="${this.handleFioInput}"
                    class="${!this.fioRegex.test(this.fio)&&this.fio?"invalid":""}"
                    placeholder="Иванов Иван Иванович"
                />
                <div class="error-message">Введите корректное ФИО (например, Иванов Иван Иванович)</div>
            </div>

            <div class="form-group">
                <label for="inn">ИНН плательщика</label>
                <input
                    id="inn"
                    type="text"
                    .value="${this.inn}"
                    @input="${this.handleInnInput}"
                    class="${(!this.innRegex.test(this.inn)||!Ht(this.inn))&&this.inn?"invalid":""}"
                    placeholder="123456789012"
                    inputmode="numeric"
                    pattern="${this.innRegex}"
                    maxlength="12"
                />
                <div class="error-message">Введите корректный ИНН физического лица</div>
            </div>

            <div class="form-group">
                <label for="passport">Серия и номер паспорта РФ плательщика</label>
                <input
                    id="passport"
                    type="text"
                    .value="${this.passportSeriesNumber}"
                    @input="${this.handlePassportSeriesNumberInput}"
                    class="${!this.passportSeriesNumberRegex.test(this.passportSeriesNumber)&&this.passportSeriesNumber?"invalid":""}"
                    placeholder="1234 567890"
                    inputmode="numeric"
                    pattern="${this.passportSeriesNumberRegex}"
                    maxlength="11"
                />
                <div class="error-message">Введите серию и номер паспорта РФ в формате "1234 567890"</div>
            </div>

            <div class="form-group">
                <label for="issue-date">Дата выдачи паспорта РФ плательщика</label>
                <input
                    id="issue-date"
                    type="date"
                    .value="${this.passportIssueDate}"
                    @input="${this.handlePassportIssueDateInput}"
                    class="${!this.validatePassportIssueDate(this.passportIssueDate)&&this.passportIssueDate?"invalid":""}"
                    max="${new Date().toISOString().split("T")[0]}"
                />
                <div class="error-message">Дата выдачи паспорта РФ не может быть позже текущей</div>
            </div>

            <button
                class="action-button"
                @click="${this.handleGenerateLink}"
                ?disabled="${!this.isFormValid}"
            >
                Создать ссылку
            </button>

            ${this.generatedLink?l`
                <div class="link-container">
                    <div class="link-field">${this.generatedLink}</div>
                    <button class="share-button" @click="${()=>Pt.shareLink(this.generatedLink)}">
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
            `:""}
        `}};y.styles=[k];R([d()],y.prototype,"fio",2);R([d()],y.prototype,"inn",2);R([d()],y.prototype,"passportSeriesNumber",2);R([d()],y.prototype,"passportIssueDate",2);R([d()],y.prototype,"isFormValid",2);R([E({type:String})],y.prototype,"generatedLink",2);y=R([$("advance-payment")],y);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts=s=>s===null||typeof s!="object"&&typeof s!="function",es=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ss={CHILD:2},is=s=>(...t)=>({_$litDirective$:s,values:t});let rs=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),W(i,t);return!0},at=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Gt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),as(t)}};function os(s){this._$AN!==void 0?(at(this),this._$AM=s,Gt(this)):this._$AM=s}function ns(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let o=e;o<i.length;o++)W(i[o],!1),at(i[o]);else i!=null&&(W(i,!1),at(i));else W(this,s)}const as=s=>{s.type==ss.CHILD&&(s._$AP??=ns,s._$AQ??=os)};class ls extends rs{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),Gt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(W(this,t),at(this))}setValue(t){if(es(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class hs{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class cs{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=s=>!ts(s)&&typeof s.then=="function",Ft=1073741823;class ds extends ls{constructor(){super(...arguments),this._$Cwt=Ft,this._$Cbt=[],this._$CK=new hs(this),this._$CX=new cs}render(...t){return t.find(e=>!zt(e))??S}update(t,e){const i=this._$Cbt;let r=i.length;this._$Cbt=e;const o=this._$CK,n=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<e.length&&!(h>this._$Cwt);h++){const a=e[h];if(!zt(a))return this._$Cwt=h,a;h<r&&a===i[h]||(this._$Cwt=Ft,r=0,Promise.resolve(a).then(async u=>{for(;n.get();)await n.get();const p=o.deref();if(p!==void 0){const c=p._$Cbt.indexOf(a);c>-1&&c<p._$Cwt&&(p._$Cwt=c,p.setValue(u))}}))}return S}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const ps=is(ds);var us=Object.getOwnPropertyDescriptor,gs=(s,t,e,i)=>{for(var r=i>1?void 0:i?us(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=n(r)||r);return r};let ft=class extends f{async renderPaymentLinks(){m.show();const s=await _t.fetchPaymentHistory(),t=l`${s.map(e=>this.renderPaymentLinkCard(e))}`;return m.hide(),t}renderPaymentLinkCard(s){return l`
            <div class="payment-link-card">
                ${s.amount?l`<div class="payment-link-field"><strong>Сумма: </strong>${s.amount}</div>`:""}
                <div class="payment-link-field"><strong>Дата: </strong>${s.date}</div>
                ${s.number?l`<div class="payment-link-field"><strong>Номер ТПО: </strong>${s.number}</div>`:""}

                ${s.link?l`
                <div class="link-container">
                    <div class="link-field">${s.link}</div>
                    <button
                        class="share-button"
                        @click=${()=>Pt.shareLink(s.link)}
                    >
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
                `:""}

                <div class="payment-link-status-container">
                    <div class="payment-link-status-field">${s.status}</div>
                </div>
            </div>
        `}render(){return l`
            <div class="search-results">
                ${ps(this.renderPaymentLinks(),l``)}
            </div>`}};ft.styles=[w`
        .search-results {
            margin-top: 20px;
            display: grid;
            gap: 16px;
        }

        .payment-link-card {
            padding: 16px;
            border: 1px solid #6200ee;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .payment-link-field {
            margin: 8px 0;
        }

        .payment-link-status-container {
            display: block;
            width: 100%;
            padding: 1rem;
            margin: 0.5rem 0;
            font-size: 1rem;
            background-color: #6200ee;
            color: white;
            border: none;
            border-radius: 8px;
            text-align: center;
            transition: background-color 0.3s ease;
            box-sizing: border-box;
            cursor: inherit;
        }

        .payment-link-status-field {
            text-align: center;
            box-sizing: border-box;
        }
        `,k];ft=gs([$("payment-history")],ft);var fs=Object.defineProperty,ms=Object.getOwnPropertyDescriptor,z=(s,t,e,i)=>{for(var r=i>1?void 0:i?ms(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&fs(t,e,r),r};let C=class extends f{constructor(){super(...arguments),this.login="",this.password="",this.rememberMe=!1,this.isFormValid=!1,this.onSuccessLogin=()=>{}}validateForm(){const s=this.login.length>0,t=this.password.length>0;this.isFormValid=s&&t}async firstUpdated(){if(v.supportsCredentialsAPI()){const s=await v.tryRequestCredentials();s&&"password"in s&&(this.login=s.id,this.password=s.password??"",this.handleLogin())}}handleLoginInput(s){this.login=s.target.value,this.validateForm()}handlePasswordInput(s){this.password=s.target.value,this.validateForm()}async handleLogin(){try{if(!this.login||!this.password)return;const s=await _t.login(this.login,this.password);v.setToken(s),this.rememberMe&&v.supportsCredentialsAPI()&&await v.saveCredentials(this.login,this.password),this.onSuccessLogin()}catch{x.show("Ошибка авторизации","error")}}render(){return v.isAuthenticated()&&this.onSuccessLogin(),l`
            <input id="login"
                type="text"
                .value="${this.login}"
                @input="${this.handleLoginInput}"
                @change="${this.validateForm}"
                placeholder="Логин">

            <input id="password"
                type="password"
                .value="${this.password}"
                @input="${this.handlePasswordInput}"
                @change="${this.validateForm}"
                placeholder="Пароль">

            ${v.supportsCredentialsAPI()?l`
                <label class="remember-me">
                    <input type="checkbox"
                        .checked="${this.rememberMe}"
                        @change="${s=>this.rememberMe=s.target.checked}">
                    Запомнить меня
                </label>
            `:""}

            <button class="action-button"
                @click="${this.handleLogin}"
                ?disabled="${!this.isFormValid}"
            >Войти</button>
        `}};C.styles=[k,w`
        .remember-me {
            display: flex;
            align-items: center;
            margin: 0.5rem 0;
            padding: 0.75rem;
            cursor: pointer;
            transition: border-color 0.3s ease;
            user-select: none;
        }

        .remember-me:hover {
            border-color: #6200ee;
        }

        .remember-me input[type="checkbox"] {
            margin: 0 0.75rem 0 0;
            width: 20px;
            height: 20px;
            cursor: pointer;
        }

        /* Для мобильных устройств */
        @media (max-width: 480px) {
            .remember-me {
                padding: 1rem;
            }

            .remember-me input[type="checkbox"] {
                width: 24px;
                height: 24px;
            }
        }`];z([d()],C.prototype,"login",2);z([d()],C.prototype,"password",2);z([d()],C.prototype,"rememberMe",2);z([d()],C.prototype,"isFormValid",2);z([E({type:Function})],C.prototype,"onSuccessLogin",2);C=z([$("login-page")],C);var vs=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,St=(s,t,e,i)=>{for(var r=i>1?void 0:i?$s(t,e):t,o=s.length-1,n;o>=0;o--)(n=s[o])&&(r=(i?n(t,e,r):n(r))||r);return i&&r&&vs(t,e,r),r};let K=class extends f{constructor(){super(...arguments),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.currentPage=window.location.pathname,this.showBackButton=!1,this.handlePopState=()=>{const s=window.location.pathname,t=this.basePath,e=s.startsWith(t)?s.slice(t.length).replace(/^\//,""):s.replace(/^\//,"");this.currentPage=e||"",this.checkAuth(),this.requestUpdate()},this.handleNavigateTo=s=>{this.navigateTo(s.detail??"")}}get basePath(){return"/test-pwa/"}checkAuth(){!v.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page")}async registerServiceWorker(){if("serviceWorker"in navigator)try{const s=await navigator.serviceWorker.register(`${this.basePath}sw.js`,{scope:this.basePath});console.log("ServiceWorker registration successful with scope:",s.scope)}catch(s){console.error("ServiceWorker registration failed:",s)}}connectedCallback(){super.connectedCallback(),this.registerServiceWorker(),x.initialize(),m.initialize(),this.handlePopState(),window.addEventListener("navigateto",this.handleNavigateTo),this.setupBackButtonHandler(),window.addEventListener("popstate",this.handlePopState),this.checkAuth()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("navigateto",this.handleNavigateTo),window.removeEventListener("popstate",this.handlePopState)}isHomePage(){return this.currentPage==""||this.currentPage=="/"||this.currentPage=="login-page"||this.currentPage==this.basePath}setupBackButtonHandler(){window.onpopstate=s=>{if(this.isInStandaloneMode){if(m.isVisible())return s.preventDefault(),!1;if(this.isHomePage())return s.preventDefault(),this.handleExit(),!1}return!0}}handleExit(){this.isInStandaloneMode?window.navigator.app.exitApp():(window.close(),window.stop())}navigateTo(s){history.pushState({},"",`${this.basePath}${s}`),this.currentPage=s,this.requestUpdate()}getPageTitle(){switch(this.currentPage){case"login-page":return"Авторизация";case"search-tpo":return"Поиск квитанции по реквизитам";case"advance-payment":return"Авансовый платеж";case"payment-history":return"История платежей";default:return"Меню"}}renderPage(){switch(this.checkAuth(),this.currentPage){case"search-tpo":return l`<search-tpo></search-tpo>`;case"advance-payment":return l`<advance-payment></advance-payment>`;case"payment-history":return l`<payment-history></payment-history>`;case"login-page":return this.renderLoginPage();default:return this.renderHome()}}renderLoginPage(){return l`<login-page
            .onSuccessLogin="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:""}))}"
        ></login-page>`}renderHome(){return l`
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"search-tpo"}))}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"advance-payment"}))}">Авансовый платеж</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"payment-history"}))}">История платежей</button>
            <button class="action-button" @click="${()=>v.logout()}">Смена пользователя</button>
        `}render(){m.show();const s=l`
            <app-header
                .currentPage="${this.currentPage}"
                .basePath="${this.basePath}"
                .title="${this.getPageTitle()}"
                .showBackButton="${!this.isHomePage()}"
                .isLoginPage="${this.currentPage==="login-page"}"
                .onBack="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:""}))}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
        `;return m.hide(),s}};K.styles=[k];St([E({type:String})],K.prototype,"currentPage",2);St([E({type:Boolean})],K.prototype,"showBackButton",2);K=St([$("app-home")],K);
//# sourceMappingURL=code.js.map
