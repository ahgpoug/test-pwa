(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=globalThis,et=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),at=new WeakMap;let vt=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(et&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=at.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&at.set(e,t))}return t}toString(){return this.cssText}};const Pt=r=>new vt(typeof r=="string"?r:r+"",void 0,st),K=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new vt(e,r,st)},xt=(r,t)=>{if(et)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=J.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},lt=et?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Pt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:St,defineProperty:At,getOwnPropertyDescriptor:kt,getOwnPropertyNames:Ct,getOwnPropertySymbols:It,getPrototypeOf:Et}=Object,Q=globalThis,ht=Q.trustedTypes,Ot=ht?ht.emptyScript:"",Nt=Q.reactiveElementPolyfillSupport,U=(r,t)=>r,q={toAttribute(r,t){switch(t){case Boolean:r=r?Ot:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},it=(r,t)=>!St(r,t),ct={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:it};Symbol.metadata??=Symbol("metadata"),Q.litPropertyMetadata??=new WeakMap;class I extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&At(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=kt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s?.call(this)},set(n){const c=s?.call(this);o.call(this,n),this.requestUpdate(t,c,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??ct}static _$Ei(){if(this.hasOwnProperty(U("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(U("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(U("properties"))){const e=this.properties,i=[...Ct(e),...It(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(lt(s))}else t!==void 0&&e.push(lt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:q).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:q;this._$Em=s,this[s]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??it)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}I.elementStyles=[],I.shadowRootOptions={mode:"open"},I[U("elementProperties")]=new Map,I[U("finalized")]=new Map,Nt?.({ReactiveElement:I}),(Q.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rt=globalThis,X=rt.trustedTypes,pt=X?X.createPolicy("lit-html",{createHTML:r=>r}):void 0,$t="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,bt="?"+y,Mt=`<${bt}>`,S=document,H=()=>S.createComment(""),B=r=>r===null||typeof r!="object"&&typeof r!="function",ot=Array.isArray,Lt=r=>ot(r)||typeof r?.[Symbol.iterator]=="function",tt=`[ 	
\f\r]`,R=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ut=/>/g,P=RegExp(`>|${tt}(?:([^\\s"'>=/]+)(${tt}*=${tt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),gt=/'/g,ft=/"/g,yt=/^(?:script|style|textarea|title)$/i,Tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),l=Tt(1),O=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),mt=new WeakMap,x=S.createTreeWalker(S,129);function wt(r,t){if(!ot(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return pt!==void 0?pt.createHTML(t):t}const Dt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=R;for(let c=0;c<e;c++){const a=r[c];let p,u,h=-1,v=0;for(;v<a.length&&(n.lastIndex=v,u=n.exec(a),u!==null);)v=n.lastIndex,n===R?u[1]==="!--"?n=dt:u[1]!==void 0?n=ut:u[2]!==void 0?(yt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=P):u[3]!==void 0&&(n=P):n===P?u[0]===">"?(n=s??R,h=-1):u[1]===void 0?h=-2:(h=n.lastIndex-u[2].length,p=u[1],n=u[3]===void 0?P:u[3]==='"'?ft:gt):n===ft||n===gt?n=P:n===dt||n===ut?n=R:(n=P,s=void 0);const b=n===P&&r[c+1].startsWith("/>")?" ":"";o+=n===R?a+Mt:h>=0?(i.push(p),a.slice(0,h)+$t+a.slice(h)+y+b):a+y+(h===-2?c:b)}return[wt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[p,u]=Dt(t,e);if(this.el=j.createElement(p,i),x.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=x.nextNode())!==null&&a.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith($t)){const v=u[n++],b=s.getAttribute(h).split(y),W=/([.?@])?(.*)/.exec(v);a.push({type:1,index:o,name:W[2],strings:b,ctor:W[1]==="."?Ut:W[1]==="?"?Ht:W[1]==="@"?Bt:G}),s.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(yt.test(s.tagName)){const h=s.textContent.split(y),v=h.length-1;if(v>0){s.textContent=X?X.emptyScript:"";for(let b=0;b<v;b++)s.append(h[b],H()),x.nextNode(),a.push({type:2,index:++o});s.append(h[v],H())}}}else if(s.nodeType===8)if(s.data===bt)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){const i=S.createElement("template");return i.innerHTML=t,i}}function N(r,t,e=r,i){if(t===O)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=B(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=N(r,s._$AS(r,t.values),s,i)),t}class Rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??S).importNode(e,!0);x.currentNode=s;let o=x.nextNode(),n=0,c=0,a=i[0];for(;a!==void 0;){if(n===a.index){let p;a.type===2?p=new z(o,o.nextSibling,this,t):a.type===1?p=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(p=new jt(o,this,t)),this._$AV.push(p),a=i[++c]}n!==a?.index&&(o=x.nextNode(),n++)}return x.currentNode=S,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),B(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=j.createElement(wt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new Rt(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=mt.get(t.strings);return e===void 0&&mt.set(t.strings,e=new j(t)),e}k(t){ot(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new z(this.O(H()),this.O(H()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class G{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=d}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=N(this,t,e,0),n=!B(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const c=t;let a,p;for(t=o[0],a=0;a<o.length-1;a++)p=N(this,c[i+a],e,a),p===O&&(p=this._$AH[a]),n||=!B(p)||p!==this._$AH[a],p===d?t=d:t!==d&&(t+=(p??"")+o[a+1]),this._$AH[a]=p}n&&!s&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends G{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class Ht extends G{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class Bt extends G{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??d)===O)return;const i=this._$AH,s=t===d&&i!==d||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==d&&(i===d||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class jt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Ft=rt.litHtmlPolyfillSupport;Ft?.(j,z),(rt.litHtmlVersions??=[]).push("3.2.1");const zt=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new z(t.insertBefore(H(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends I{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=zt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};m._$litElement$=!0,m.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:m});const Vt=globalThis.litElementPolyfillSupport;Vt?.({LitElement:m});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const k=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:it},Jt=(r=Wt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,r)},init(c){return c!==void 0&&this.P(n,void 0,r),c}}}if(i==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function f(r){return(t,e)=>typeof e=="object"?Jt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(r){return f({...r,state:!0,attribute:!1})}const L=K`
    :host {
        display: block;
        font-family: 'Roboto', sans-serif;
        background-color: #f5f5f5;
        min-height: 100vh;
    }

    main {
        padding: 1rem;
        max-width: 600px;
        margin: 0 auto;
        min-height: calc(100vh - 120px); /* Учитываем высоту header и footer */
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
`;class qt{constructor(){this.tokenKey="auth_token"}getToken(){return localStorage.getItem(this.tokenKey)}setToken(t){localStorage.setItem(this.tokenKey,t)}clearToken(){localStorage.removeItem(this.tokenKey)}isAuthenticated(){const t=this.getToken();return t?(console.log(JSON.parse(atob(t.split(".")[1]))),JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now()):!1}}const E=new qt;var Xt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,T=(r,t,e,i)=>{for(var s=i>1?void 0:i?Zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Xt(t,e,s),s};let w=class extends m{constructor(){super(...arguments),this.showInstallButton=!1,this.showInstallModal=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.showBackButton=!1,this.isLoginPage=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=r=>{r.preventDefault(),this.deferredPrompt=r,this.showInstallButton=!0},this.handleInstallClick=async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:r}=await this.deferredPrompt.userChoice;r==="accepted"&&(this.showInstallButton=!1)}else this.showInstallModal=!0},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}renderInstallModal(){return l`
            <div class="install-modal" @click="${()=>this.showInstallModal=!1}">
                <div class="modal-content" @click="${r=>r.stopPropagation()}">
                    <button class="close-button" @click="${()=>this.showInstallModal=!1}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                        </svg>
                    </button>

                    ${this.isIOS?l`
                        <h3>Добавить на экран "Домой"</h3>
                        <div class="instructions">
                            1. Нажмите на кнопку "Поделиться"<br>
                            2. Выберите 'На экран "Домой"'<br>
                            3. Нажмите "Добавить"
                        </div>
                    `:this.isAndroid?l`
                        <h3>Добавить на главный экран</h3>
                        <div class="instructions">
                            1. Откройте меню браузера (три точки)<br>
                            2. Выберите "Добавить на главный экран"<br>
                            3. Нажмите "Добавить"
                        </div>
                    `:l`
                        <h3>Сохранить в закладки</h3>
                        <div class="instructions">
                            Нажмите Ctrl+D чтобы добавить в закладки<br>
                            Или используйте меню браузера
                        </div>
                    `}
                </div>
            </div>
        `}render(){return l`
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
        `}};w.styles=K`
        :host {
            display: block;
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
    `;T([g()],w.prototype,"showInstallButton",2);T([g()],w.prototype,"showInstallModal",2);T([f({type:Boolean})],w.prototype,"showBackButton",2);T([f({type:Boolean})],w.prototype,"isLoginPage",2);T([f({type:Function})],w.prototype,"onBack",2);w=T([k("app-header")],w);var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,D=(r,t,e,i)=>{for(var s=i>1?void 0:i?Qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Kt(t,e,s),s};let _=class extends m{constructor(){super(...arguments),this.tpoCards=[],this.fio="",this.passportSeriesNumber="",this.isFormValid=!1,this.error="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}handleSearch(){(Math.floor(Math.random()*10)+1)%2?(this.tpoCards=[],this.error="ТПО для оплаты не найдены"):(this.error="",this.generateRandomCards())}validateForm(){const r=this.fioRegex.test(this.fio),t=this.passportSeriesNumberRegex.test(this.passportSeriesNumber);this.isFormValid=r&&t}handleFioInput(r){this.fio=r.target.value;const t=r.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const s=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(s,s)}}),this.validateForm(),t.value=this.fio}handlePassportSeriesNumberInput(r){const t=r.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),s="";i.length>0&&(s=i.slice(0,4),i.length>4&&(s+=" "+i.slice(4,10))),this.passportSeriesNumber=s,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,s);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(r,t,e){const i=e.length-t.length;return r+i}generateRandomCards(){const r=Math.floor(Math.random()*10)+1,t=[];for(let e=0;e<r;e++)t.push({id:Math.random().toString(36).substring(2,9),amount:Math.floor(Math.random()*1e5)+1e3,date:new Date(Date.now()-Math.random()*31536e6).toISOString().split("T")[0],number:`ТПО-${Math.floor(Math.random()*1e6)}`});this.tpoCards=t}generateLink(r){const t=Math.random().toString(36).substring(2,8),e=this.tpoCards.map(i=>i.id===r.id?{...i,link:`${window.location.origin}/payment/${t}`}:i);this.tpoCards=e}async shareLink(r){try{navigator.share?await navigator.share({title:"Ссылка на платеж ТПО",text:"Ссылка для оплаты ТПО:",url:r}):(await navigator.clipboard.writeText(r),alert("Ссылка скопирована в буфер обмена!"))}catch(t){console.error("Ошибка при попытке поделиться:",t)}}render(){return l`
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
                ?disabled="${!this.isFormValid}"
                @click="${()=>this.handleSearch()}"
            >
                Поиск
            </button>
            ${this.error?l`<div class="error">${this.error}</div>`:""}

            <div class="search-results">
                ${this.tpoCards.map(r=>l`
                <div class="tpo-card">
                    <div class="tpo-field"><strong>Сумма: </strong>${r.amount} руб.</div>
                    <div class="tpo-field"><strong>Дата: </strong>${r.date}</div>
                    <div class="tpo-field"><strong>Номер ТПО: </strong>${r.number}</div>

                    <button
                        class="action-button"
                        @click="${()=>this.generateLink(r)}"
                    >
                        Создать ссылку
                    </button>

                    ${r.link?l`
                    <div class="link-container">
                        <div class="link-field">${r.link}</div>
                        <button
                            class="share-button"
                            @click=${()=>this.shareLink(r.link)}
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
        `}};_.styles=[K`
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
        }

        .tpo-field {
            margin: 8px 0;
        }

        .link-container {
            margin-top: 12px;
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .link-field {
            flex-grow: 1;
            padding: 8px 12px;
            border: 2px solid #6200ee;
            border-radius: 6px;
            background: #f8f8f8;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .share-button {
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .share-icon {
            width: 20px;
            height: 20px;
            fill: #6200ee;
        }
      `,L];D([g()],_.prototype,"tpoCards",2);D([g()],_.prototype,"fio",2);D([g()],_.prototype,"passportSeriesNumber",2);D([g()],_.prototype,"isFormValid",2);D([g()],_.prototype,"error",2);_=D([k("search-tpo")],_);var Gt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,C=(r,t,e,i)=>{for(var s=i>1?void 0:i?Yt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Gt(t,e,s),s};let $=class extends m{constructor(){super(...arguments),this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.isFormValid=!1,this.generatedLink="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.innRegex=/^\d{12}$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}generateRandomLink(){const r=Math.random().toString(36).substring(2,8);this.generatedLink=`${window.location.origin}/payment/${r}`}validateForm(){const r=this.fioRegex.test(this.fio),t=this.innRegex.test(this.inn),e=this.passportSeriesNumberRegex.test(this.passportSeriesNumber),i=this.validatePassportIssueDate(this.passportIssueDate);this.isFormValid=r&&t&&e&&i}validatePassportIssueDate(r){return r?new Date(r)<=new Date:!1}handleFioInput(r){this.fio=r.target.value;const t=r.target,e=t.selectionStart;let i=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=i,requestAnimationFrame(()=>{if(e){const s=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(s,s)}}),this.validateForm(),t.value=this.fio}handleInnInput(r){this.inn=r.target.value.replace(/\D/g,"");const t=r.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),s="";i.length>0&&(s=i.slice(0,12)),this.inn=s,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,s);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.inn}handlePassportSeriesNumberInput(r){const t=r.target,e=t.selectionStart;let i=t.value.replace(/[^\d]/g,""),s="";i.length>0&&(s=i.slice(0,4),i.length>4&&(s+=" "+i.slice(4,10))),this.passportSeriesNumber=s,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,s);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(r,t,e){const i=e.length-t.length;return r+i}handlePassportIssueDateInput(r){this.passportIssueDate=r.target.value,this.validateForm()}async shareLink(){try{navigator.share?await navigator.share({title:"Авансовый платеж",text:"Ссылка для авансового платежа:",url:this.generatedLink}):(await navigator.clipboard.writeText(this.generatedLink),alert("Ссылка скопирована в буфер обмена!"))}catch(r){console.error("Ошибка при попытке поделиться:",r)}}render(){return l`
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
                    class="${!this.innRegex.test(this.inn)&&this.inn?"invalid":""}"
                    placeholder="123456789012"
                    inputmode="numeric"
                    pattern="${this.innRegex}"
                    maxlength="12"
                />
                <div class="error-message">ИНН должен состоять из 12 цифр</div>
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
                @click="${this.generateRandomLink}"
                ?disabled="${!this.isFormValid}"
            >
                Создать ссылку
            </button>

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
        `}};$.styles=[K`
        .link-container {
            margin-top: 20px;
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .link-field {
            flex-grow: 1;
            padding: 12px 16px;
            border: 2px solid #6200ee;
            border-radius: 8px;
            font-size: 14px;
            color: #333;
            background: #f8f8f8;
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
    `,L];C([g()],$.prototype,"fio",2);C([g()],$.prototype,"inn",2);C([g()],$.prototype,"passportSeriesNumber",2);C([g()],$.prototype,"passportIssueDate",2);C([g()],$.prototype,"isFormValid",2);C([f({type:String})],$.prototype,"generatedLink",2);$=C([k("advance-payment")],$);var te=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,Y=(r,t,e,i)=>{for(var s=i>1?void 0:i?ee(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&te(t,e,s),s};let M=class extends m{constructor(){super(...arguments),this.oldPassword="",this.newPassword="",this.confirmPassword=""}handleChangePassword(){this.newPassword===this.confirmPassword?console.log("Смена пароля:",this.oldPassword,this.newPassword):console.error("Пароли не совпадают")}render(){return l`
            <input type="password" .value="${this.oldPassword}" @input="${r=>this.oldPassword=r.target.value}" placeholder="Старый пароль">
            <input type="password" .value="${this.newPassword}" @input="${r=>this.newPassword=r.target.value}" placeholder="Новый пароль">
            <input type="password" .value="${this.confirmPassword}" @input="${r=>this.confirmPassword=r.target.value}" placeholder="Подтвердите пароль">
            <button class="action-button" @click="${this.handleChangePassword}">Сменить пароль</button>
        `}};M.styles=[L];Y([f({type:String})],M.prototype,"oldPassword",2);Y([f({type:String})],M.prototype,"newPassword",2);Y([f({type:String})],M.prototype,"confirmPassword",2);M=Y([k("change-password")],M);var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,_t=(r,t,e,i)=>{for(var s=i>1?void 0:i?ie(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&se(t,e,s),s};let Z=class extends m{constructor(){super(...arguments),this.payments=[{id:1,amount:1e3,date:"2023-10-01"},{id:2,amount:1500,date:"2023-10-05"},{id:3,amount:2e3,date:"2023-10-10"}]}render(){return l`
            <ul>
                ${this.payments.map(r=>l`
                    <li>${r.date} - ${r.amount} руб.</li>
                `)}
            </ul>
        `}};Z.styles=[L];_t([f({type:Array})],Z.prototype,"payments",2);Z=_t([k("payment-history")],Z);class re{constructor(){this.baseUrl="https://api.example.com"}async login(t,e){return"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA"}async fetchProtectedData(){const t=E.getToken();if(!t)throw new Error("Требуется авторизация");const e=await fetch(`${this.baseUrl}/protected`,{headers:{Authorization:`Bearer ${t}`}});if(!e.ok)throw new Error("Ошибка запроса");return e.json()}}const oe=new re;var ne=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,V=(r,t,e,i)=>{for(var s=i>1?void 0:i?ae(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&ne(t,e,s),s};let A=class extends m{constructor(){super(...arguments),this.login="",this.password="",this.error="",this.onSuccessLogin=()=>{}}async handleLogin(){try{const r=await oe.login(this.login,this.password);E.setToken(r),this.onSuccessLogin()}catch{this.error="Ошибка авторизации"}}render(){return E.isAuthenticated()&&this.onSuccessLogin(),l`
            <input type="text" .value="${this.login}" @input="${r=>this.login=r.target.value}" placeholder="Логин">
            <input type="password" .value="${this.password}" @input="${r=>this.password=r.target.value}" placeholder="Пароль">
            <button class="action-button" @click="${this.handleLogin}">Войти</button>
            ${this.error?l`<div class="error">${this.error}</div>`:""}
        `}};A.styles=[L];V([g()],A.prototype,"login",2);V([g()],A.prototype,"password",2);V([g()],A.prototype,"error",2);V([f({type:Function})],A.prototype,"onSuccessLogin",2);A=V([k("login-page")],A);var le=Object.defineProperty,he=Object.getOwnPropertyDescriptor,nt=(r,t,e,i)=>{for(var s=i>1?void 0:i?he(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&le(t,e,s),s};let F=class extends m{constructor(){super(...arguments),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.currentPage=window.location.pathname,this.showBackButton=!1,this.handlePopState=()=>{const r=window.location.pathname,t=this.basePath,e=r.startsWith(t)?r.slice(t.length).replace(/^\//,""):r.replace(/^\//,"");this.currentPage=e||"",this.checkAuth(),this.requestUpdate()}}get basePath(){return"/test-pwa/"}checkAuth(){!E.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page")}async registerServiceWorker(){if("serviceWorker"in navigator)try{const r=await navigator.serviceWorker.register(`${this.basePath}sw.js`,{scope:this.basePath});console.log("ServiceWorker registration successful with scope:",r.scope)}catch(r){console.error("ServiceWorker registration failed:",r)}}connectedCallback(){super.connectedCallback(),this.registerServiceWorker(),this.handlePopState(),this.setupBackButtonHandler(),window.addEventListener("popstate",this.handlePopState),this.checkAuth()}isHomePage(){return this.currentPage==""||this.currentPage=="/"||this.currentPage=="login-page"||this.currentPage==this.basePath}setupBackButtonHandler(){window.onpopstate=r=>this.isInStandaloneMode&&this.isHomePage()?(r.preventDefault(),this.handleExit(),!1):!0}handleExit(){this.isInStandaloneMode?window.navigator.app.exitApp():(window.close(),window.stop())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.handlePopState)}navigateTo(r){console.log(`Navigate to ${this.basePath}${r}`),history.pushState({},"",`${this.basePath}${r}`),this.currentPage=r,this.requestUpdate()}logout(){E.clearToken(),this.navigateTo("login-page")}getPageTitle(){switch(this.currentPage){case"login-page":return"Авторизация";case"search-tpo":return"Поиск квитанции по реквизитам";case"advance-payment":return"Авансовый платеж";case"change-password":return"Сменить пароль";case"payment-history":return"История платежей";default:return"Меню"}}renderPage(){switch(!E.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page"),this.currentPage){case"search-tpo":return l`<search-tpo></search-tpo>`;case"advance-payment":return l`<advance-payment></advance-payment>`;case"change-password":return l`<change-password></change-password>`;case"payment-history":return l`<payment-history></payment-history>`;case"login-page":return this.renderLoginPage();default:return this.renderHome()}}renderLoginPage(){return l`<login-page
            .onSuccessLogin="${()=>this.navigateTo("")}"
        ></login-page>`}renderHome(){return l`
            <button class="action-button" @click="${()=>this.navigateTo("search-tpo")}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${()=>this.navigateTo("advance-payment")}">Авансовый платеж</button>
            <button class="action-button" @click="${()=>this.navigateTo("change-password")}">Сменить пароль</button>
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
        `}};F.styles=[L];nt([f({type:String})],F.prototype,"currentPage",2);nt([f({type:Boolean})],F.prototype,"showBackButton",2);F=nt([k("app-home")],F);
//# sourceMappingURL=index-lk6CHV6O.js.map
