(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=e(r);fetch(r.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const q=globalThis,st=q.ShadowRoot&&(q.ShadyCSS===void 0||q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),lt=new WeakMap;let _t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(st&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&lt.set(e,t))}return t}toString(){return this.cssText}};const Ct=s=>new _t(typeof s=="string"?s:s+"",void 0,it),K=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,r,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[n+1],s[0]);return new _t(e,s,it)},kt=(s,t)=>{if(st)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),r=q.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=e.cssText,s.appendChild(i)}},ht=st?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Ct(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Et,defineProperty:It,getOwnPropertyDescriptor:Nt,getOwnPropertyNames:Ot,getOwnPropertySymbols:Lt,getPrototypeOf:Mt}=Object,Y=globalThis,ct=Y.trustedTypes,Tt=ct?ct.emptyScript:"",Dt=Y.reactiveElementPolyfillSupport,R=(s,t)=>s,J={toAttribute(s,t){switch(t){case Boolean:s=s?Tt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},rt=(s,t)=>!Et(s,t),dt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:rt};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;class E extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=dt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,e);r!==void 0&&It(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){const{get:r,set:n}=Nt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r?.call(this)},set(o){const h=r?.call(this);n.call(this,o),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??dt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,i=[...Ot(e),...Lt(e)];for(const r of i)this.createProperty(r,e[r])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,r]of e)this.elementProperties.set(i,r)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const r=this._$Eu(e,i);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const r of i)e.unshift(ht(r))}else t!==void 0&&e.push(ht(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return kt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,i);if(r!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:J).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,r=i._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=i.getPropertyOptions(r),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:J;this._$Em=r,this[r]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??rt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[R("elementProperties")]=new Map,E[R("finalized")]=new Map,Dt?.({ReactiveElement:E}),(Y.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nt=globalThis,X=nt.trustedTypes,pt=X?X.createPolicy("lit-html",{createHTML:s=>s}):void 0,wt="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,xt="?"+b,Rt=`<${xt}>`,C=document,B=()=>C.createComment(""),F=s=>s===null||typeof s!="object"&&typeof s!="function",ot=Array.isArray,Ht=s=>ot(s)||typeof s?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ut=/-->/g,gt=/>/g,P=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),mt=/'/g,ft=/"/g,At=/^(?:script|style|textarea|title)$/i,Ut=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),l=Ut(1),y=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),$t=new WeakMap,S=C.createTreeWalker(C,129);function Pt(s,t){if(!ot(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}const Bt=(s,t)=>{const e=s.length-1,i=[];let r,n=t===2?"<svg>":t===3?"<math>":"",o=D;for(let h=0;h<e;h++){const a=s[h];let p,d,c=-1,$=0;for(;$<a.length&&(o.lastIndex=$,d=o.exec(a),d!==null);)$=o.lastIndex,o===D?d[1]==="!--"?o=ut:d[1]!==void 0?o=gt:d[2]!==void 0?(At.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=P):d[3]!==void 0&&(o=P):o===P?d[0]===">"?(o=r??D,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,p=d[1],o=d[3]===void 0?P:d[3]==='"'?ft:mt):o===ft||o===mt?o=P:o===ut||o===gt?o=D:(o=P,r=void 0);const v=o===P&&s[h+1].startsWith("/>")?" ":"";n+=o===D?a+Rt:c>=0?(i.push(p),a.slice(0,c)+wt+a.slice(c)+b+v):a+b+(c===-2?h:v)}return[Pt(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class z{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[p,d]=Bt(t,e);if(this.el=z.createElement(p,i),S.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(r=S.nextNode())!==null&&a.length<h;){if(r.nodeType===1){if(r.hasAttributes())for(const c of r.getAttributeNames())if(c.endsWith(wt)){const $=d[o++],v=r.getAttribute(c).split(b),W=/([.?@])?(.*)/.exec($);a.push({type:1,index:n,name:W[2],strings:v,ctor:W[1]==="."?zt:W[1]==="?"?jt:W[1]==="@"?Vt:G}),r.removeAttribute(c)}else c.startsWith(b)&&(a.push({type:6,index:n}),r.removeAttribute(c));if(At.test(r.tagName)){const c=r.textContent.split(b),$=c.length-1;if($>0){r.textContent=X?X.emptyScript:"";for(let v=0;v<$;v++)r.append(c[v],B()),S.nextNode(),a.push({type:2,index:++n});r.append(c[$],B())}}}else if(r.nodeType===8)if(r.data===xt)a.push({type:2,index:n});else{let c=-1;for(;(c=r.data.indexOf(b,c+1))!==-1;)a.push({type:7,index:n}),c+=b.length-1}n++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function I(s,t,e=s,i){if(t===y)return t;let r=i!==void 0?e._$Co?.[i]:e._$Cl;const n=F(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),n===void 0?r=void 0:(r=new n(s),r._$AT(s,e,i)),i!==void 0?(e._$Co??=[])[i]=r:e._$Cl=r),r!==void 0&&(t=I(s,r._$AS(s,t.values),r,i)),t}class Ft{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,r=(t?.creationScope??C).importNode(e,!0);S.currentNode=r;let n=S.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let p;a.type===2?p=new j(n,n.nextSibling,this,t):a.type===1?p=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(p=new Wt(n,this,t)),this._$AV.push(p),a=i[++h]}o!==a?.index&&(n=S.nextNode(),o++)}return S.currentNode=C,r}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class j{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,r){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=I(this,t,e),F(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==y&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ht(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==u&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=z.createElement(Pt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===r)this._$AH.p(e);else{const n=new Ft(r,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=$t.get(t.strings);return e===void 0&&$t.set(t.strings,e=new z(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new j(this.O(B()),this.O(B()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,r,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(t,e=this,i,r){const n=this.strings;let o=!1;if(n===void 0)t=I(this,t,e,0),o=!F(t)||t!==this._$AH&&t!==y,o&&(this._$AH=t);else{const h=t;let a,p;for(t=n[0],a=0;a<n.length-1;a++)p=I(this,h[i+a],e,a),p===y&&(p=this._$AH[a]),o||=!F(p)||p!==this._$AH[a],p===u?t=u:t!==u&&(t+=(p??"")+n[a+1]),this._$AH[a]=p}o&&!r&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zt extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}class jt extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==u)}}class Vt extends G{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){if((t=I(this,t,e,0)??u)===y)return;const i=this._$AH,r=t===u&&i!==u||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==u&&(i===u||r);r&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Wt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){I(this,t)}}const qt=nt.litHtmlPolyfillSupport;qt?.(z,j),(nt.litHtmlVersions??=[]).push("3.2.1");const Jt=(s,t,e)=>{const i=e?.renderBefore??t;let r=i._$litPart$;if(r===void 0){const n=e?.renderBefore??null;i._$litPart$=r=new j(t.insertBefore(B(),n),n,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return y}};m._$litElement$=!0,m.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:m});const Xt=globalThis.litElementPolyfillSupport;Xt?.({LitElement:m});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:rt},Kt=(s=Zt,t,e)=>{const{kind:i,metadata:r}=e;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),n.set(e.name,s),i==="accessor"){const{name:o}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,a,s)},init(h){return h!==void 0&&this.P(o,void 0,s),h}}}if(i==="setter"){const{name:o}=e;return function(h){const a=this[o];t.call(this,h),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+i)};function x(s){return(t,e)=>typeof e=="object"?Kt(s,t,e):((i,r,n)=>{const o=r.hasOwnProperty(n);return r.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(r,n):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(s){return x({...s,state:!0,attribute:!1})}const L=K`
    :host {
        display: block;
        font-family: 'Roboto', sans-serif;
    }

    main {
        padding: 1rem;
        max-width: 600px;
        margin: 0 auto;
        min-height: calc(-32px); /* Учитываем высоту header */
        padding-top: 32px;
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

    input {
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

    .error-container {
        padding: 16px;
        border: 1px solid #6200ee;
        border-radius: 8px;
        background: white;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .error {
        color: #6200ee;
        text-align: center;
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
`;class Yt{constructor(){this.tokenKey="auth_token"}getToken(){return localStorage.getItem(this.tokenKey)}setToken(t){localStorage.setItem(this.tokenKey,t)}clearToken(){localStorage.removeItem(this.tokenKey)}isAuthenticated(){const t=this.getToken();return t?JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now():!1}}const H=new Yt;var Gt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,M=(s,t,e,i)=>{for(var r=i>1?void 0:i?Qt(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&Gt(t,e,r),r};let _=class extends m{constructor(){super(...arguments),this.showInstallButton=!1,this.showInstallModal=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.showBackButton=!1,this.isLoginPage=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=s=>{s.preventDefault(),this.deferredPrompt=s,this.showInstallButton=!0},this.handleInstallClick=async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:s}=await this.deferredPrompt.userChoice;s==="accepted"&&(this.showInstallButton=!1)}else this.showInstallModal=!0},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}renderInstallModal(){return l`
            <div class="install-modal" @click="${()=>this.showInstallModal=!1}">
                <div class="modal-content" @click="${s=>s.stopPropagation()}">
                    <button class="close-button" @click="${()=>this.showInstallModal=!1}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                        </svg>
                    </button>

                    ${this.isIOS?this.renderIOSContent():this.isAndroid?this.renderAndroidContent():this.renderDesktopContent()}
                </div>
            </div>
        `}renderIOSContent(){return l`
            <h3>Добавить на экран "Домой"</h3>
            <div class="instructions">
                1. Нажмите на кнопку "Поделиться"<br>
                2. Выберите 'На экран "Домой"'<br>
                3. Нажмите "Добавить"
            </div>`}renderAndroidContent(){return l`
            <h3>Добавить на главный экран</h3>
            <div class="instructions">
                1. Откройте меню браузера (три точки)<br>
                2. Выберите "Добавить на главный экран"<br>
                3. Нажмите "Добавить"
            </div>`}renderDesktopContent(){return l`
            <h3>Сохранить в закладки</h3>
            <div class="instructions">
                Нажмите Ctrl+D чтобы добавить в закладки<br>
                Или используйте меню браузера
            </div>`}render(){return l`
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

            ${this.showInstallModal?this.renderInstallModal():""}
        `}};_.styles=[K`
        :host {
            position: sticky;
            top: 0;
        }

        header {
            display: flex;
            align-items: center;
            padding: 16px;
            background-color: #6200ee; /* Material Design primary color */
            color: white;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            position: sticky;
            top: 0;
            z-index: 1000;
            height: 32px;
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

        .install-modal {
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
        }

        .modal-content {
            background: white;
            padding: 24px;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            position: relative;
        }

        .close-button {
            position: absolute;
            top: 12px;
            right: 12px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .instructions {
            margin: 16px 0;
            line-height: 1.5;
        }
    `,L];M([g()],_.prototype,"showInstallButton",2);M([g()],_.prototype,"showInstallModal",2);M([x({type:Boolean})],_.prototype,"showBackButton",2);M([x({type:Boolean})],_.prototype,"isLoginPage",2);M([x({type:Function})],_.prototype,"onBack",2);_=M([O("app-header")],_);class te{constructor(){this.baseUrl="https://api.example.com"}async login(t,e){return"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA"}async fetchPaymentHistory(){const t=Math.random()*2e3+1e3;return await new Promise(e=>setTimeout(e,t)),[{id:"1",amount:1e3,date:"2023-10-01",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"2",amount:1500,date:"2023-10-05",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"3",amount:2e3,date:"2023-10-10",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"}]}async fetchTPOList(t,e){const i=Math.random()*2e3+1e3;await new Promise(n=>setTimeout(n,i));const r=Math.floor(Math.random()*10)+1;return Array.from({length:r},(n,o)=>({id:Math.random().toString(36).substring(2,9),amount:Math.floor(Math.random()*1e5)+1e3,date:new Date(Date.now()-Math.random()*31536e6).toISOString().split("T")[0],number:`ТПО-${Math.floor(Math.random()*1e6)}`}))}}const at=new te;var ee=Object.defineProperty,se=Object.getOwnPropertyDescriptor,T=(s,t,e,i)=>{for(var r=i>1?void 0:i?se(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ee(t,e,r),r};let w=class extends m{constructor(){super(...arguments),this.tpos=[],this.fio="",this.passportSeriesNumber="",this.isFormValid=!1,this.error="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleSearchTPO(){window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!0})),this.tpos=[],this.error="";try{const s=await at.fetchTPOList(this.fio.trim(),this.passportSeriesNumber);this.tpos=s}catch{this.error="Ошибка поиска"}finally{this.clearForm(),window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!1}))}}clearForm(){this.fio="",this.passportSeriesNumber="",this.validateForm()}validateForm(){const s=this.fioRegex.test(this.fio),t=this.passportSeriesNumberRegex.test(this.passportSeriesNumber);this.isFormValid=s&&t}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const r=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(r,r)}}),this.validateForm(),t.value=this.fio}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,4),i.length>4&&(r+=" "+i.slice(4,10))),this.passportSeriesNumber=r,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const i=e.length-t.length;return s+i}async generateLink(s){window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!0}));const t=Math.random()*2e3+1e3;await new Promise(r=>setTimeout(r,t));const e=Math.random().toString(36).substring(2,8),i=this.tpos.map(r=>r.id===s.id?{...r,link:`${window.location.origin}/payment/${e}`}:r);this.tpos=i,window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!1}))}async shareLink(s){try{navigator.share?await navigator.share({title:"Ссылка на платеж ТПО",text:"Ссылка для оплаты ТПО:",url:s}):(await navigator.clipboard.writeText(s),alert("Ссылка скопирована в буфер обмена!"))}catch(t){console.error("Ошибка при попытке поделиться:",t)}}render(){return l`
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
            ${this.error?l`<div class="error-container"><div class="error">${this.error}</div></div>`:""}

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
                            @click=${()=>this.shareLink(s.link)}
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
        `}};w.styles=[K`
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
      `,L];T([g()],w.prototype,"tpos",2);T([g()],w.prototype,"fio",2);T([g()],w.prototype,"passportSeriesNumber",2);T([g()],w.prototype,"isFormValid",2);T([g()],w.prototype,"error",2);w=T([O("search-tpo")],w);function vt(s){return!0}var ie=Object.defineProperty,re=Object.getOwnPropertyDescriptor,A=(s,t,e,i)=>{for(var r=i>1?void 0:i?re(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ie(t,e,r),r};let f=class extends m{constructor(){super(...arguments),this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.isFormValid=!1,this.error="",this.generatedLink="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.innRegex=/^\d{12}$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleGenerateLink(){window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!0})),this.generatedLink="",this.error="";try{const s=Math.random()*2e3+1e3;await new Promise(t=>setTimeout(t,s)),this.generateRandomLink()}catch{this.error="Ошибка создания ссылки"}finally{this.clearForm(),window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!1}))}}clearForm(){this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.validateForm()}generateRandomLink(){const s=Math.random().toString(36).substring(2,8);this.generatedLink=`${window.location.origin}/payment/${s}`}validateForm(){const s=this.fioRegex.test(this.fio),t=this.innRegex.test(this.inn)&&vt(this.inn),e=this.passportSeriesNumberRegex.test(this.passportSeriesNumber),i=this.validatePassportIssueDate(this.passportIssueDate);this.isFormValid=s&&t&&e&&i}validatePassportIssueDate(s){return s?new Date(s)<=new Date:!1}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const r=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(r,r)}}),this.validateForm(),t.value=this.fio}handleInnInput(s){this.inn=s.target.value.replace(/\D/g,"");const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,12)),this.inn=r,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.inn}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),r="";i.length>0&&(r=i.slice(0,4),i.length>4&&(r+=" "+i.slice(4,10))),this.passportSeriesNumber=r,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const i=e.length-t.length;return s+i}handlePassportIssueDateInput(s){this.passportIssueDate=s.target.value,this.validateForm()}async shareLink(){try{navigator.share?await navigator.share({title:"Авансовый платеж",text:"Ссылка для авансового платежа:",url:this.generatedLink}):(await navigator.clipboard.writeText(this.generatedLink),alert("Ссылка скопирована в буфер обмена!"))}catch(s){console.error("Ошибка при попытке поделиться:",s)}}render(){return l`
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
                    class="${(!this.innRegex.test(this.inn)||!vt(this.inn))&&this.inn?"invalid":""}"
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
            ${this.error?l`<div class="error-container"><div class="error">${this.error}</div></div>`:""}

            ${this.generatedLink?l`
                <div class="link-container">
                    <div class="link-field">${this.generatedLink}</div>
                    <button class="share-button" @click=${this.shareLink}>
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
            `:""}
        `}};f.styles=[L];A([g()],f.prototype,"fio",2);A([g()],f.prototype,"inn",2);A([g()],f.prototype,"passportSeriesNumber",2);A([g()],f.prototype,"passportIssueDate",2);A([g()],f.prototype,"isFormValid",2);A([g()],f.prototype,"error",2);A([x({type:String})],f.prototype,"generatedLink",2);f=A([O("advance-payment")],f);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne=s=>s===null||typeof s!="object"&&typeof s!="function",oe=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},le=s=>(...t)=>({_$litDirective$:s,values:t});let he=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const i of e)i._$AO?.(t,!1),U(i,t);return!0},Z=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},St=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),pe(t)}};function ce(s){this._$AN!==void 0?(Z(this),this._$AM=s,St(this)):this._$AM=s}function de(s,t=!1,e=0){const i=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(i))for(let n=e;n<i.length;n++)U(i[n],!1),Z(i[n]);else i!=null&&(U(i,!1),Z(i));else U(this,s)}const pe=s=>{s.type==ae.CHILD&&(s._$AP??=de,s._$AQ??=ce)};class ue extends he{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),St(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(U(this,t),Z(this))}setValue(t){if(oe(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ge{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class me{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bt=s=>!ne(s)&&typeof s.then=="function",yt=1073741823;class fe extends ue{constructor(){super(...arguments),this._$Cwt=yt,this._$Cbt=[],this._$CK=new ge(this),this._$CX=new me}render(...t){return t.find(e=>!bt(e))??y}update(t,e){const i=this._$Cbt;let r=i.length;this._$Cbt=e;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<e.length&&!(h>this._$Cwt);h++){const a=e[h];if(!bt(a))return this._$Cwt=h,a;h<r&&a===i[h]||(this._$Cwt=yt,r=0,Promise.resolve(a).then(async p=>{for(;o.get();)await o.get();const d=n.deref();if(d!==void 0){const c=d._$Cbt.indexOf(a);c>-1&&c<d._$Cwt&&(d._$Cwt=c,d.setValue(p))}}))}return y}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const $e=le(fe);var ve=Object.defineProperty,be=Object.getOwnPropertyDescriptor,ye=(s,t,e,i)=>{for(var r=i>1?void 0:i?be(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&ve(t,e,r),r};let et=class extends m{async shareLink(s){try{navigator.share?await navigator.share({title:"Ссылка на платеж",text:"Ссылка для оплаты:",url:s}):(await navigator.clipboard.writeText(s),alert("Ссылка скопирована в буфер обмена!"))}catch(t){console.error("Ошибка при попытке поделиться:",t)}}async renderPaymentLinks(){window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!0}));const s=await at.fetchPaymentHistory(),t=l`${s.map(e=>this.renderPaymentLinkCard(e))}`;return window.dispatchEvent(new CustomEvent("setloadingstate",{detail:!1})),t}renderPaymentLinkCard(s){return l`
            <div class="payment-link-card">
                ${s.amount?l`<div class="payment-link-field"><strong>Сумма: </strong>${s.amount}</div>`:""}
                <div class="payment-link-field"><strong>Дата: </strong>${s.date}</div>
                ${s.number?l`<div class="payment-link-field"><strong>Номер ТПО: </strong>${s.number}</div>`:""}

                ${s.link?l`
                <div class="link-container">
                    <div class="link-field">${s.link}</div>
                    <button
                        class="share-button"
                        @click=${()=>this.shareLink(s.link)}
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
                ${$e(this.renderPaymentLinks(),l``)}
            </div>`}};et.styles=[K`
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
        `,L];et=ye([O("payment-history")],et);var _e=Object.defineProperty,we=Object.getOwnPropertyDescriptor,V=(s,t,e,i)=>{for(var r=i>1?void 0:i?we(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&_e(t,e,r),r};let k=class extends m{constructor(){super(...arguments),this.login="",this.password="",this.error="",this.onSuccessLogin=()=>{}}async handleLogin(){try{const s=await at.login(this.login,this.password);H.setToken(s),this.onSuccessLogin()}catch{this.error="Ошибка авторизации"}}render(){return H.isAuthenticated()&&this.onSuccessLogin(),l`
            <input type="text" .value="${this.login}" @input="${s=>this.login=s.target.value}" placeholder="Логин">
            <input type="password" .value="${this.password}" @input="${s=>this.password=s.target.value}" placeholder="Пароль">
            <button class="action-button" @click="${this.handleLogin}">Войти</button>
            ${this.error?l`<div class="error">${this.error}</div>`:""}
        `}};k.styles=[L];V([g()],k.prototype,"login",2);V([g()],k.prototype,"password",2);V([g()],k.prototype,"error",2);V([x({type:Function})],k.prototype,"onSuccessLogin",2);k=V([O("login-page")],k);var xe=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,Q=(s,t,e,i)=>{for(var r=i>1?void 0:i?Ae(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(r=(i?o(t,e,r):o(r))||r);return i&&r&&xe(t,e,r),r};let N=class extends m{constructor(){super(...arguments),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.isLoading=!1,this.currentPage=window.location.pathname,this.showBackButton=!1,this.handlePopState=()=>{const s=window.location.pathname,t=this.basePath,e=s.startsWith(t)?s.slice(t.length).replace(/^\//,""):s.replace(/^\//,"");this.currentPage=e||"",this.checkAuth(),this.requestUpdate()},this.handleLoadingState=s=>{this.isLoading=s.detail||!1}}get basePath(){return"/test-pwa/"}checkAuth(){!H.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page")}async registerServiceWorker(){if("serviceWorker"in navigator)try{const s=await navigator.serviceWorker.register(`${this.basePath}sw.js`,{scope:this.basePath});console.log("ServiceWorker registration successful with scope:",s.scope)}catch(s){console.error("ServiceWorker registration failed:",s)}}connectedCallback(){super.connectedCallback(),this.registerServiceWorker(),this.handlePopState(),window.addEventListener("setloadingstate",this.handleLoadingState),this.setupBackButtonHandler(),window.addEventListener("popstate",this.handlePopState),this.checkAuth()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.handlePopState),window.removeEventListener("setloadingstate",this.handleLoadingState)}isHomePage(){return this.currentPage==""||this.currentPage=="/"||this.currentPage=="login-page"||this.currentPage==this.basePath}setupBackButtonHandler(){window.onpopstate=s=>this.isInStandaloneMode&&this.isHomePage()?(s.preventDefault(),this.handleExit(),!1):!0}handleExit(){this.isInStandaloneMode?window.navigator.app.exitApp():(window.close(),window.stop())}navigateTo(s){history.pushState({},"",`${this.basePath}${s}`),this.currentPage=s,this.requestUpdate()}logout(){H.clearToken(),this.navigateTo("login-page")}getPageTitle(){switch(this.currentPage){case"login-page":return"Авторизация";case"search-tpo":return"Поиск квитанции по реквизитам";case"advance-payment":return"Авансовый платеж";case"payment-history":return"История платежей";default:return"Меню"}}renderPage(){switch(!H.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page"),this.currentPage){case"search-tpo":return l`<search-tpo></search-tpo>`;case"advance-payment":return l`<advance-payment></advance-payment>`;case"payment-history":return l`<payment-history></payment-history>`;case"login-page":return this.renderLoginPage();default:return this.renderHome()}}renderLoginPage(){return l`<login-page
            .onSuccessLogin="${()=>this.navigateTo("")}"
        ></login-page>`}renderHome(){return l`
            <button class="action-button" @click="${()=>this.navigateTo("search-tpo")}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${()=>this.navigateTo("advance-payment")}">Авансовый платеж</button>
            <button class="action-button" @click="${()=>this.navigateTo("payment-history")}">История платежей</button>
            <button class="action-button" @click="${()=>this.logout()}">Смена пользователя</button>
        `}render(){return l`
            <app-header
                .currentPage="${this.currentPage}"
                .basePath="${this.basePath}"
                .title="${this.getPageTitle()}"
                .showBackButton="${!this.isHomePage()}"
                .isLoginPage="${this.currentPage==="login-page"}"
                .onBack="${()=>this.navigateTo("")}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
            ${this.isLoading?l`
                <div class="loading-overlay">
                  <div class="spinner"></div>
                </div>
              `:""}
        `}};N.styles=[L];Q([g()],N.prototype,"isLoading",2);Q([x({type:String})],N.prototype,"currentPage",2);Q([x({type:Boolean})],N.prototype,"showBackButton",2);N=Q([O("app-home")],N);
//# sourceMappingURL=index-DgRV3uL-.js.map
