(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const it=globalThis,Pt=it.ShadowRoot&&(it.ShadyCSS===void 0||it.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol(),Lt=new WeakMap;let de=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Pt&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Lt.set(e,t))}return t}toString(){return this.cssText}};const pe=s=>new de(typeof s=="string"?s:s+"",void 0,Qt),ue=(s,t)=>{if(Pt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=it.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},Nt=Pt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return pe(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:fe,defineProperty:ge,getOwnPropertyDescriptor:me,getOwnPropertyNames:ve,getOwnPropertySymbols:$e,getPrototypeOf:be}=Object,lt=globalThis,Dt=lt.trustedTypes,ye=Dt?Dt.emptyScript:"",we=lt.reactiveElementPolyfillSupport,V=(s,t)=>s,nt={toAttribute(s,t){switch(t){case Boolean:s=s?ye:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},St=(s,t)=>!fe(s,t),Tt={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:St};Symbol.metadata??=Symbol("metadata"),lt.litPropertyMetadata??=new WeakMap;let j=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Tt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&ge(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=me(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r?.call(this)},set(o){const c=r?.call(this);n.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Tt}static _$Ei(){if(this.hasOwnProperty(V("elementProperties")))return;const t=be(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(V("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(V("properties"))){const e=this.properties,i=[...ve(e),...$e(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(Nt(r))}else t!==void 0&&e.push(Nt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ue(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:nt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:nt;this._$Em=r,this[r]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??St)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};j.elementStyles=[],j.shadowRootOptions={mode:"open"},j[V("elementProperties")]=new Map,j[V("finalized")]=new Map,we?.({ReactiveElement:j}),(lt.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xt=globalThis,ot=xt.trustedTypes,Ut=ot?ot.createPolicy("lit-html",{createHTML:s=>s}):void 0,te="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,ee="?"+P,_e=`<${ee}>`,O=document,q=()=>O.createComment(""),J=s=>s===null||typeof s!="object"&&typeof s!="function",At=Array.isArray,Pe=s=>At(s)||typeof s?.[Symbol.iterator]=="function",ft=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,Bt=/>/g,k=RegExp(`>|${ft}(?:([^\\s"'>=/]+)(${ft}*=${ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ht=/'/g,jt=/"/g,se=/^(?:script|style|textarea|title)$/i,ie=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),l=ie(1),st=ie(2),x=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),zt=new WeakMap,I=O.createTreeWalker(O,129);function re(s,t){if(!At(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}const Se=(s,t)=>{const e=s.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=z;for(let c=0;c<e;c++){const a=s[c];let h,u,d=-1,b=0;for(;b<a.length&&(o.lastIndex=b,u=o.exec(a),u!==null);)b=o.lastIndex,o===z?u[1]==="!--"?o=Rt:u[1]!==void 0?o=Bt:u[2]!==void 0?(se.test(u[2])&&(r=RegExp("</"+u[2],"g")),o=k):u[3]!==void 0&&(o=k):o===k?u[0]===">"?(o=r??z,d=-1):u[1]===void 0?d=-2:(d=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?k:u[3]==='"'?jt:Ht):o===jt||o===Ht?o=k:o===Rt||o===Bt?o=z:(o=k,r=void 0);const _=o===k&&s[c+1].startsWith("/>")?" ":"";n+=o===z?a+_e:d>=0?(i.push(h),a.slice(0,d)+te+a.slice(d)+P+_):a+P+(d===-2?c:_)}return[re(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class Z{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const c=t.length-1,a=this.parts,[h,u]=Se(t,e);if(this.el=Z.createElement(h,i),I.currentNode=this.el.content,e===2||e===3){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=I.nextNode())!==null&&a.length<c;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(te)){const b=u[o++],_=r.getAttribute(d).split(P),et=/([.?@])?(.*)/.exec(b);a.push({type:1,index:n,name:et[2],strings:_,ctor:et[1]==="."?Ae:et[1]==="?"?Ee:et[1]==="@"?Ce:ct}),r.removeAttribute(d)}else d.startsWith(P)&&(a.push({type:6,index:n}),r.removeAttribute(d));if(se.test(r.tagName)){const d=r.textContent.split(P),b=d.length-1;if(b>0){r.textContent=ot?ot.emptyScript:"";for(let _=0;_<b;_++)r.append(d[_],q()),I.nextNode(),a.push({type:2,index:++n});r.append(d[b],q())}}}else if(r.nodeType===8)if(r.data===ee)a.push({type:2,index:n});else{let d=-1;for(;(d=r.data.indexOf(P,d+1))!==-1;)a.push({type:7,index:n}),d+=P.length-1}n++}}static createElement(t,e){const i=O.createElement("template");return i.innerHTML=t,i}}function R(s,t,e=s,i){if(t===x)return t;let r=i!==void 0?e._$Co?.[i]:e._$Cl;const n=J(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=r:e._$Cl=r),r!==void 0&&(t=R(s,r._$AS(s,t.values),r,i)),t}class xe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??O).importNode(e,!0);I.currentNode=r;let n=I.nextNode(),o=0,c=0,a=i[0];for(;a!==void 0;){if(o===a.index){let h;a.type===2?h=new K(n,n.nextSibling,this,t):a.type===1?h=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(h=new ke(n,this,t)),this._$AV.push(h),a=i[++c]}o!==a?.index&&(n=I.nextNode(),o++)}return I.currentNode=O,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class K{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=R(this,t,e),J(t)?t===f||t==null||t===""?(this._$AH!==f&&this._$AR(),this._$AH=f):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Pe(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==f&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(O.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=Z.createElement(re(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const n=new xe(r,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=zt.get(t.strings);return e===void 0&&zt.set(t.strings,e=new Z(t)),e}k(t){At(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new K(this.O(q()),this.O(q()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ct{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=f,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=R(this,t,e,0),o=!J(t)||t!==this._$AH&&t!==x,o&&(this._$AH=t);else{const c=t;let a,h;for(t=n[0],a=0;a<n.length-1;a++)h=R(this,c[i+a],e,a),h===x&&(h=this._$AH[a]),o||=!J(h)||h!==this._$AH[a],h===f?t=f:t!==f&&(t+=(h??"")+n[a+1]),this._$AH[a]=h}o&&!r&&this.j(t)}j(t){t===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ae extends ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===f?void 0:t}}class Ee extends ct{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==f)}}class Ce extends ct{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=R(this,t,e,0)??f)===x)return;const i=this._$AH,r=t===f&&i!==f||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==f&&(i===f||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ke{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){R(this,t)}}const Ie=xt.litHtmlPolyfillSupport;Ie?.(Z,K),(xt.litHtmlVersions??=[]).push("3.2.1");const Oe=(s,t,e)=>{const i=e?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const n=e?.renderBefore??null;i._$litPart$=r=new K(t.insertBefore(q(),n),n,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=globalThis,Et=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ct=Symbol(),Vt=new WeakMap;let ne=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Et&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=Vt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Vt.set(e,t))}return t}toString(){return this.cssText}};const Me=s=>new ne(typeof s=="string"?s:s+"",void 0,Ct),w=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new ne(e,s,Ct)},Le=(s,t)=>{if(Et)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=rt.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},Ft=Et?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Me(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Ne,defineProperty:De,getOwnPropertyDescriptor:Te,getOwnPropertyNames:Ue,getOwnPropertySymbols:Re,getPrototypeOf:Be}=Object,ht=globalThis,Wt=ht.trustedTypes,He=Wt?Wt.emptyScript:"",je=ht.reactiveElementPolyfillSupport,F=(s,t)=>s,bt={toAttribute(s,t){switch(t){case Boolean:s=s?He:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},oe=(s,t)=>!Ne(s,t),qt={attribute:!0,type:String,converter:bt,reflect:!1,hasChanged:oe};Symbol.metadata??=Symbol("metadata"),ht.litPropertyMetadata??=new WeakMap;class U extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=qt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&De(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=Te(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r?.call(this)},set(o){const c=r?.call(this);n.call(this,o),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??qt}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const t=Be(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const e=this.properties,i=[...Ue(e),...Re(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(Ft(r))}else t!==void 0&&e.push(Ft(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Le(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:bt).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:bt;this._$Em=r,this[r]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??oe)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}U.elementStyles=[],U.shadowRootOptions={mode:"open"},U[F("elementProperties")]=new Map,U[F("finalized")]=new Map,je?.({ReactiveElement:U}),(ht.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends U{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return x}};m._$litElement$=!0,m.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:m});const ze=globalThis.litElementPolyfillSupport;ze?.({LitElement:m});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ve={attribute:!0,type:String,converter:nt,reflect:!1,hasChanged:St},Fe=(s=Ve,t,e)=>{const{kind:i,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(o,a,s)},init(c){return c!==void 0&&this.P(o,void 0,s),c}}}if(i==="setter"){const{name:o}=e;return function(c){const a=this[o];t.call(this,c),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+i)};function H(s){return(t,e)=>typeof e=="object"?Fe(s,t,e):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(s){return H({...s,state:!0,attribute:!1})}var We=Object.defineProperty,qe=Object.getOwnPropertyDescriptor,ae=(s,t,e,i)=>{for(var r=i>1?void 0:i?qe(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&We(t,e,r),r};let X=class extends m{constructor(){super(...arguments),this.visible=!1}show(){this.visible=!0}hide(){this.visible=!1}isVisible(){return this.visible}render(){return l`
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
            border-top: 4px solid #882499;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;ae([p()],X.prototype,"visible",2);X=ae([$("loading-overlay")],X);const Je=new X;class g{static{this.instance=null}static initialize(){this.instance||(this.instance=Je,document.body.appendChild(this.instance))}static show(){this.initialize(),this.instance.show()}static hide(){this.instance&&this.instance.hide()}static isVisible(){return this.instance?this.instance.isVisible():!1}}const Ze=(s,t)=>t.some(e=>s instanceof e);let Jt,Zt;function Xe(){return Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ge(){return Zt||(Zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const le=new WeakMap,yt=new WeakMap,ce=new WeakMap,gt=new WeakMap,kt=new WeakMap;function Ke(s){const t=new Promise((e,i)=>{const r=()=>{s.removeEventListener("success",n),s.removeEventListener("error",o)},n=()=>{e(S(s.result)),r()},o=()=>{i(s.error),r()};s.addEventListener("success",n),s.addEventListener("error",o)});return t.then(e=>{e instanceof IDBCursor&&le.set(e,s)}).catch(()=>{}),kt.set(t,s),t}function Ye(s){if(yt.has(s))return;const t=new Promise((e,i)=>{const r=()=>{s.removeEventListener("complete",n),s.removeEventListener("error",o),s.removeEventListener("abort",o)},n=()=>{e(),r()},o=()=>{i(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",n),s.addEventListener("error",o),s.addEventListener("abort",o)});yt.set(s,t)}let wt={get(s,t,e){if(s instanceof IDBTransaction){if(t==="done")return yt.get(s);if(t==="objectStoreNames")return s.objectStoreNames||ce.get(s);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return S(s[t])},set(s,t,e){return s[t]=e,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function Qe(s){wt=s(wt)}function ts(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const i=s.call(mt(this),t,...e);return ce.set(i,t.sort?t.sort():[t]),S(i)}:Ge().includes(s)?function(...t){return s.apply(mt(this),t),S(le.get(this))}:function(...t){return S(s.apply(mt(this),t))}}function es(s){return typeof s=="function"?ts(s):(s instanceof IDBTransaction&&Ye(s),Ze(s,Xe())?new Proxy(s,wt):s)}function S(s){if(s instanceof IDBRequest)return Ke(s);if(gt.has(s))return gt.get(s);const t=es(s);return t!==s&&(gt.set(s,t),kt.set(t,s)),t}const mt=s=>kt.get(s);function vt(s,t,{blocked:e,upgrade:i,blocking:r,terminated:n}={}){const o=indexedDB.open(s,t),c=S(o);return i&&o.addEventListener("upgradeneeded",a=>{i(S(o.result),a.oldVersion,a.newVersion,S(o.transaction),a)}),e&&o.addEventListener("blocked",a=>e(a.oldVersion,a.newVersion,a)),c.then(a=>{n&&a.addEventListener("close",()=>n()),r&&a.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const ss=["get","getKey","getAll","getAllKeys","count"],is=["put","add","delete","clear"],$t=new Map;function Xt(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if($t.get(t))return $t.get(t);const e=t.replace(/FromIndex$/,""),i=t!==e,r=is.includes(e);if(!(e in(i?IDBIndex:IDBObjectStore).prototype)||!(r||ss.includes(e)))return;const n=async function(o,...c){const a=this.transaction(o,r?"readwrite":"readonly");let h=a.store;return i&&(h=h.index(c.shift())),(await Promise.all([h[e](...c),r&&a.done]))[0]};return $t.set(t,n),n}Qe(s=>({...s,get:(t,e,i)=>Xt(t,e)||s.get(t,e,i),has:(t,e)=>!!Xt(t,e)||s.has(t,e)}));class rs{constructor(){this.dbName="authDB",this.storeName="tokens",this.key="auth_token"}async getToken(){return(await vt(this.dbName,1,{upgrade(e){e.createObjectStore("tokens")}})).get(this.storeName,this.key)}async setToken(t){await(await vt(this.dbName,1,{upgrade(i){i.createObjectStore("tokens")}})).put(this.storeName,t,this.key)}async clearToken(){await(await vt(this.dbName,1,{upgrade(e){e.createObjectStore("tokens")}})).delete(this.storeName,this.key)}async isAuthenticated(){const t=await this.getToken();return t?JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now():!1}supportsCredentialsAPI(){return"credentials"in navigator&&"PasswordCredential"in window}async saveCredentials(t,e){if(!v.supportsCredentialsAPI())return;const i=new PasswordCredential({id:t,password:e,name:t});await navigator.credentials.store(i)}async tryRequestCredentials(){return v.supportsCredentialsAPI()?await navigator.credentials.get({password:!0,mediation:"optional"}):null}async logout(){if(this.clearToken(),sessionStorage.clear(),this.supportsCredentialsAPI()){g.show();try{await navigator.credentials.preventSilentAccess(),await new Promise(t=>setTimeout(t,500))}catch(t){window.alert(t),console.error("Failed to prevent silent access: ",t)}g.hide()}window.dispatchEvent(new CustomEvent("navigateto",{detail:{page:"login-page",replace:!0}}))}}const v=new rs;var ns=Object.defineProperty,os=Object.getOwnPropertyDescriptor,dt=(s,t,e,i)=>{for(var r=i>1?void 0:i?os(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ns(t,e,r),r};let M=class extends m{constructor(){super(...arguments),this.message="",this.type="info",this.visible=!1}show(s,t="info",e=3e3){this.message=s,this.type=t,this.visible=!0,this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.hide()},e)}hide(){this.visible=!1}render(){return l`
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
            color: #882499;
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
    `;dt([p()],M.prototype,"message",2);dt([p()],M.prototype,"type",2);dt([p()],M.prototype,"visible",2);M=dt([$("popup-notification")],M);const as=new M;class A{static{this.instance=null}static initialize(){this.instance||(this.instance=as,document.body.appendChild(this.instance))}static show(t,e,i){this.initialize(),this.instance.show(t,e,i)}static hide(){this.instance&&this.instance.hide()}}const C=w`
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
        background-color: #882499;
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
        background-color: #651174;
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
        border-color: #882499;
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
        border: 2px solid #882499;
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
        fill: #882499;
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
`;var ls=Object.defineProperty,cs=Object.getOwnPropertyDescriptor,pt=(s,t,e,i)=>{for(var r=i>1?void 0:i?cs(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ls(t,e,r),r};let L=class extends m{constructor(){super(...arguments),this.heading="",this.message="",this.visible=!1}show(s,t){this.heading=s,this.message=t,this.visible=!0}hide(){this.visible=!1,this.heading="",this.message=""}render(){return l`
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
        `}};L.styles=[C,w`
        .modal-text {
            margin: 16px 0;
            line-height: 1.5;
            white-space: pre-line;
        }
    `];pt([p()],L.prototype,"heading",2);pt([p()],L.prototype,"message",2);pt([p()],L.prototype,"visible",2);L=pt([$("modal-window")],L);const hs=new L;class ds{static{this.instance=null}static initialize(){this.instance||(this.instance=hs,document.body.appendChild(this.instance))}static show(t,e){this.initialize(),this.instance.show(t,e)}static hide(){this.instance&&this.instance.hide()}}var ps=Object.defineProperty,us=Object.getOwnPropertyDescriptor,Y=(s,t,e,i)=>{for(var r=i>1?void 0:i?us(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ps(t,e,r),r};let E=class extends m{constructor(){super(...arguments),this.type="other",this.deferredPrompt=null,this.visible=!1,this.loadedImages={}}get basePath(){return"/test-pwa/"}show(s="other",t=null){this.type=s,this.deferredPrompt=t,this.visible=!0}hide(){this.visible=!1}renderStoreIcon(s,t){const e=this.loadedImages[s];return l`
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
        `}installPWA(){this.deferredPrompt&&this.deferredPrompt.prompt(),this.hide()}showAddToHomeScreen(){ds.show("Добавить на главный экран",`1. Нажмите на кнопку "Поделиться"
2. Выберите "Добавить на главный экран"
3. Нажмите "Добавить"`)}};E.styles=[C,w`
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
  `];Y([p()],E.prototype,"type",2);Y([p()],E.prototype,"deferredPrompt",2);Y([p()],E.prototype,"visible",2);Y([p()],E.prototype,"loadedImages",2);E=Y([$("download-modal-window")],E);const fs=new E;class gs{static{this.instance=null}static initialize(){this.instance||(this.instance=fs,document.body.appendChild(this.instance))}static show(t="other",e=null){this.initialize(),this.instance.show(t,e)}static hide(){this.instance&&this.instance.hide()}}var ms=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,ut=(s,t,e,i)=>{for(var r=i>1?void 0:i?vs(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ms(t,e,r),r};let B=class extends m{constructor(){super(...arguments),this.showInstallButton=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.showBackButton=!1,this.isLoginPage=!1,this.handleBeforeInstallPrompt=s=>{s.preventDefault(),this.deferredPrompt=s,this.showInstallButton=!0},this.handleInstallClick=async()=>{let s=this.isIOS?"ios":this.isAndroid?"android":"other",t=this.deferredPrompt;gs.show(s,t)},this.handleAppInstalled=()=>{this.showInstallButton=!1}}onBack(){window.dispatchEvent(new CustomEvent("navigateto",{detail:{page:""}}))}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}render(){return l`
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
        `}};B.styles=[w`
        :host {
            position: sticky;
            top: 0;
        }

        header {
            display: flex;
            align-items: center;
            padding: 16px;
            background-color: #882499;
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
    `,C];ut([p()],B.prototype,"showInstallButton",2);ut([H({type:Boolean})],B.prototype,"showBackButton",2);ut([H({type:Boolean})],B.prototype,"isLoginPage",2);B=ut([$("app-header")],B);class $s{constructor(){this.baseUrl="https://api.example.com"}async login(t,e){return"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA"}async fetchPaymentHistory(){const t=Math.random()*2e3+1e3;return await new Promise(e=>setTimeout(e,t)),[{id:"1",amount:1e3,date:"2023-10-01",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"2",amount:1500,date:"2023-10-05",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"3",amount:2e3,date:"2023-10-10",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"}]}async fetchTPOList(t,e){const i=Math.random()*2e3+1e3;await new Promise(n=>setTimeout(n,i));const r=Math.floor(Math.random()*10)+1;return Array.from({length:r},(n,o)=>({id:Math.random().toString(36).substring(2,9),amount:Math.floor(Math.random()*1e5)+1e3,date:new Date(Date.now()-Math.random()*31536e6).toISOString().split("T")[0],number:`ТПО-${Math.floor(Math.random()*1e6)}`}))}}const It=new $s;class Ot{static async shareLink(t){try{navigator.share?await navigator.share({title:"Ссылка на платеж",text:"Ссылка для оплаты:",url:t}):(await navigator.clipboard.writeText(t),A.show("Ссылка скопирована в буфер обмена","success"))}catch(e){e.toString().includes("AbortError")||A.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}}}var bs=Object.defineProperty,ys=Object.getOwnPropertyDescriptor,Q=(s,t,e,i)=>{for(var r=i>1?void 0:i?ys(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&bs(t,e,r),r};let N=class extends m{constructor(){super(...arguments),this.tpos=[],this.fio="",this.passportSeriesNumber="",this.isFormValid=!1,this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleSearchTPO(){g.show(),this.tpos=[];try{const s=await It.fetchTPOList(this.fio.trim(),this.passportSeriesNumber);this.tpos=s}catch{A.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}finally{this.clearForm(),g.hide()}}clearForm(){this.fio="",this.passportSeriesNumber="",this.validateForm()}validateForm(){const s=this.fioRegex.test(this.fio),t=this.passportSeriesNumberRegex.test(this.passportSeriesNumber);this.isFormValid=s&&t}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const r=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(r,r)}}),this.validateForm(),t.value=this.fio}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,4),i.length>4&&(r+=" "+i.slice(4,10))),this.passportSeriesNumber=r,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const i=e.length-t.length;return s+i}async generateLink(s){g.show();const t=Math.random()*2e3+1e3;await new Promise(r=>setTimeout(r,t));const e=Math.random().toString(36).substring(2,8),i=this.tpos.map(r=>r.id===s.id?{...r,link:`${window.location.origin}/payment/${e}`}:r);this.tpos=i,g.hide(),A.show("Ссылка успешно создана","success")}render(){return l`
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
                                @click="${()=>Ot.shareLink(s.link)}"
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
        `}};N.styles=[w`
        .search-results {
            margin-top: 20px;
            display: grid;
            gap: 16px;
        }

        .tpo-card {
            padding: 16px;
            border: 1px solid #882499;
            border-radius: 8px;
            background: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
        }

        .tpo-field {
            margin: 8px 0;
        }
      `,C];Q([p()],N.prototype,"tpos",2);Q([p()],N.prototype,"fio",2);Q([p()],N.prototype,"passportSeriesNumber",2);Q([p()],N.prototype,"isFormValid",2);N=Q([$("search-tpo")],N);function Gt(s){return!0}var ws=Object.defineProperty,_s=Object.getOwnPropertyDescriptor,T=(s,t,e,i)=>{for(var r=i>1?void 0:i?_s(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ws(t,e,r),r};let y=class extends m{constructor(){super(...arguments),this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.isFormValid=!1,this.generatedLink="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.innRegex=/^\d{12}$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleGenerateLink(){g.show(),this.generatedLink="";try{const s=Math.random()*2e3+1e3;await new Promise(t=>setTimeout(t,s)),this.generateRandomLink()}catch{A.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}finally{this.clearForm(),g.hide(),A.show("Ссылка успешно создана","success")}}clearForm(){this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.validateForm()}generateRandomLink(){const s=Math.random().toString(36).substring(2,8);this.generatedLink=`${window.location.origin}/payment/${s}`}validateForm(){const s=this.fioRegex.test(this.fio),t=this.innRegex.test(this.inn)&&Gt(this.inn),e=this.passportSeriesNumberRegex.test(this.passportSeriesNumber),i=this.validatePassportIssueDate(this.passportIssueDate);this.isFormValid=s&&t&&e&&i}validatePassportIssueDate(s){return s?new Date(s)<=new Date:!1}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const r=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(r,r)}}),this.validateForm(),t.value=this.fio}handleInnInput(s){this.inn=s.target.value.replace(/\D/g,"");const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,12)),this.inn=r,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.inn}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,4),i.length>4&&(r+=" "+i.slice(4,10))),this.passportSeriesNumber=r,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const i=e.length-t.length;return s+i}handlePassportIssueDateInput(s){this.passportIssueDate=s.target.value,this.validateForm()}render(){return l`
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
                    class="${(!this.innRegex.test(this.inn)||!Gt(this.inn))&&this.inn?"invalid":""}"
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
                    <button class="share-button" @click="${()=>Ot.shareLink(this.generatedLink)}">
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
            `:""}
        `}};y.styles=[C];T([p()],y.prototype,"fio",2);T([p()],y.prototype,"inn",2);T([p()],y.prototype,"passportSeriesNumber",2);T([p()],y.prototype,"passportIssueDate",2);T([p()],y.prototype,"isFormValid",2);T([H({type:String})],y.prototype,"generatedLink",2);y=T([$("advance-payment")],y);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ps=s=>s===null||typeof s!="object"&&typeof s!="function",Ss=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xs={CHILD:2},As=s=>(...t)=>({_$litDirective$:s,values:t});let Es=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),W(i,t);return!0},at=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},he=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Is(t)}};function Cs(s){this._$AN!==void 0?(at(this),this._$AM=s,he(this)):this._$AM=s}function ks(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)W(i[n],!1),at(i[n]);else i!=null&&(W(i,!1),at(i));else W(this,s)}const Is=s=>{s.type==xs.CHILD&&(s._$AP??=ks,s._$AQ??=Cs)};class Os extends Es{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),he(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(W(this,t),at(this))}setValue(t){if(Ss(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ms{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Ls{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Kt=s=>!Ps(s)&&typeof s.then=="function",Yt=1073741823;class Ns extends Os{constructor(){super(...arguments),this._$Cwt=Yt,this._$Cbt=[],this._$CK=new Ms(this),this._$CX=new Ls}render(...t){return t.find(e=>!Kt(e))??x}update(t,e){const i=this._$Cbt;let r=i.length;this._$Cbt=e;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let c=0;c<e.length&&!(c>this._$Cwt);c++){const a=e[c];if(!Kt(a))return this._$Cwt=c,a;c<r&&a===i[c]||(this._$Cwt=Yt,r=0,Promise.resolve(a).then(async h=>{for(;o.get();)await o.get();const u=n.deref();if(u!==void 0){const d=u._$Cbt.indexOf(a);d>-1&&d<u._$Cwt&&(u._$Cwt=d,u.setValue(h))}}))}return x}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const Ds=As(Ns);var Ts=Object.getOwnPropertyDescriptor,Us=(s,t,e,i)=>{for(var r=i>1?void 0:i?Ts(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=o(r)||r);return r};let _t=class extends m{async renderPaymentLinks(){g.show();const s=await It.fetchPaymentHistory(),t=l`${s.map(e=>this.renderPaymentLinkCard(e))}`;return g.hide(),t}renderPaymentLinkCard(s){return l`
            <div class="payment-link-card">
                ${s.amount?l`<div class="payment-link-field"><strong>Сумма: </strong>${s.amount}</div>`:""}
                <div class="payment-link-field"><strong>Дата: </strong>${s.date}</div>
                ${s.number?l`<div class="payment-link-field"><strong>Номер ТПО: </strong>${s.number}</div>`:""}

                ${s.link?l`
                <div class="link-container">
                    <div class="link-field">${s.link}</div>
                    <button
                        class="share-button"
                        @click=${()=>Ot.shareLink(s.link)}
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
                ${Ds(this.renderPaymentLinks(),l``)}
            </div>`}};_t.styles=[w`
        .search-results {
            margin-top: 20px;
            display: grid;
            gap: 16px;
        }

        .payment-link-card {
            padding: 16px;
            border: 1px solid #882499;
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
            background-color: #882499;
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
        `,C];_t=Us([$("payment-history")],_t);var Rs=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,tt=(s,t,e,i)=>{for(var r=i>1?void 0:i?Bs(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&Rs(t,e,r),r};let D=class extends m{constructor(){super(...arguments),this.login="",this.password="",this.rememberMe=!1,this.isFormValid=!1}onSuccessLogin(){window.dispatchEvent(new CustomEvent("navigateto",{detail:{page:"",replace:!0}}))}validateForm(){const s=this.login.length>0,t=this.password.length>0;this.isFormValid=s&&t}async firstUpdated(){if(await v.isAuthenticated()&&this.onSuccessLogin(),v.supportsCredentialsAPI()){const s=await v.tryRequestCredentials();s&&"password"in s&&(this.login=s.id,this.password=s.password??"",this.handleLogin())}}handleLoginInput(s){this.login=s.target.value,this.validateForm()}handlePasswordInput(s){this.password=s.target.value,this.validateForm()}async handleLogin(){g.show();try{if(!this.login||!this.password)return;const s=await It.login(this.login,this.password);await v.setToken(s),this.rememberMe&&v.supportsCredentialsAPI()&&await v.saveCredentials(this.login,this.password),this.onSuccessLogin()}catch{A.show("Ошибка авторизации","error")}finally{g.hide()}}render(){return l`
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
        `}};D.styles=[C,w`
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
            border-color: #882499;
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
        }`];tt([p()],D.prototype,"login",2);tt([p()],D.prototype,"password",2);tt([p()],D.prototype,"rememberMe",2);tt([p()],D.prototype,"isFormValid",2);D=tt([$("login-page")],D);var Hs=Object.defineProperty,js=Object.getOwnPropertyDescriptor,Mt=(s,t,e,i)=>{for(var r=i>1?void 0:i?js(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&Hs(t,e,r),r};let G=class extends m{constructor(){super(...arguments),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.currentPage=window.location.pathname,this.showBackButton=!1,this.handlePopState=async()=>{const s=window.location.pathname,t=this.basePath,e=s.startsWith(t)?s.slice(t.length).replace(/^\//,""):s.replace(/^\//,"");if(e==="login-page"){this.navigateTo("",!0);return}this.currentPage=e||"",this.requestUpdate()},this.handleNavigateTo=s=>{const{page:t,replace:e}=s.detail??{page:""};this.navigateTo(t,e)}}get basePath(){return"/test-pwa/"}async checkAuth(){!await v.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page",!0)}async registerServiceWorker(){if("serviceWorker"in navigator)try{const s=await navigator.serviceWorker.register(`${this.basePath}sw.js`,{scope:this.basePath});console.log("ServiceWorker registration successful with scope:",s.scope)}catch(s){console.error("ServiceWorker registration failed:",s)}}async connectedCallback(){super.connectedCallback(),this.registerServiceWorker(),A.initialize(),g.initialize(),this.handlePopState(),window.addEventListener("navigateto",this.handleNavigateTo),this.setupBackButtonHandler(),window.addEventListener("popstate",this.handlePopState)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("navigateto",this.handleNavigateTo),window.removeEventListener("popstate",this.handlePopState)}async update(s){await this.checkAuth(),super.update(s)}async updated(){await this.checkAuth()}isHomePage(){return this.currentPage==""||this.currentPage=="/"||this.currentPage=="login-page"||this.currentPage==this.basePath}setupBackButtonHandler(){window.onpopstate=s=>{if(this.isInStandaloneMode){if(g.isVisible())return s.preventDefault(),!1;if(this.isHomePage())return s.preventDefault(),this.handleExit(),!1}return this.currentPage==="login-page"?(s.preventDefault(),this.navigateTo("",!0),!1):!0}}handleExit(){this.isInStandaloneMode?window.navigator.app.exitApp():(window.close(),window.stop())}navigateTo(s,t=!1){t?history.replaceState({},"",`${this.basePath}${s}`):history.pushState({},"",`${this.basePath}${s}`),this.currentPage=s,this.requestUpdate()}getPageTitle(){switch(this.currentPage){case"login-page":return"Авторизация";case"search-tpo":return"Поиск квитанций по реквизитам";case"advance-payment":return"Авансовый платеж";case"payment-history":return"История платежей";default:return"ЛК Брокера"}}renderPage(){switch(this.currentPage){case"search-tpo":return l`<search-tpo></search-tpo>`;case"advance-payment":return l`<advance-payment></advance-payment>`;case"payment-history":return l`<payment-history></payment-history>`;case"login-page":return l`<login-page></login-page>`;default:return this.renderHome()}}renderHome(){return l`
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:{page:"search-tpo"}}))}">Поиск квитанций по реквизитам</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:{page:"advance-payment"}}))}">Авансовый платеж</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:{page:"payment-history"}}))}">История платежей</button>
            <button class="action-button" @click="${()=>v.logout()}">Смена пользователя</button>
        `}render(){return l`
            <app-header
                .currentPage="${this.currentPage}"
                .basePath="${this.basePath}"
                .title="${this.getPageTitle()}"
                .showBackButton="${!this.isHomePage()}"
                .isLoginPage="${this.currentPage==="login-page"}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
        `}};G.styles=[C];Mt([H({type:String})],G.prototype,"currentPage",2);Mt([H({type:Boolean})],G.prototype,"showBackButton",2);G=Mt([$("app-home")],G);
//# sourceMappingURL=code.js.map
