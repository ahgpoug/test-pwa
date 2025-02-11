(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,Z=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),et=new WeakMap;let pt=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Z&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=et.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&et.set(e,t))}return t}toString(){return this.cssText}};const _t=i=>new pt(typeof i=="string"?i:i+"",void 0,G),dt=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,s,o)=>r+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+i[o+1],i[0]);return new pt(e,i,G)},vt=(i,t)=>{if(Z)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),s=R.litNonce;s!==void 0&&r.setAttribute("nonce",s),r.textContent=e.cssText,i.appendChild(r)}},st=Z?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return _t(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:bt,defineProperty:At,getOwnPropertyDescriptor:wt,getOwnPropertyNames:Pt,getOwnPropertySymbols:St,getPrototypeOf:Et}=Object,V=globalThis,rt=V.trustedTypes,xt=rt?rt.emptyScript:"",Ct=V.reactiveElementPolyfillSupport,T=(i,t)=>i,j={toAttribute(i,t){switch(t){case Boolean:i=i?xt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},Q=(i,t)=>!bt(i,t),it={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Q};Symbol.metadata??=Symbol("metadata"),V.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=it){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(t,r,e);s!==void 0&&At(this.prototype,t,s)}}static getPropertyDescriptor(t,e,r){const{get:s,set:o}=wt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s?.call(this)},set(n){const l=s?.call(this);o.call(this,n),this.requestUpdate(t,l,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??it}static _$Ei(){if(this.hasOwnProperty(T("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(T("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(T("properties"))){const e=this.properties,r=[...Pt(e),...St(e)];for(const s of r)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,s]of e)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const s=this._$Eu(e,r);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const s of r)e.unshift(st(s))}else t!==void 0&&e.push(st(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,r);if(s!==void 0&&r.reflect===!0){const o=(r.converter?.toAttribute!==void 0?r.converter:j).toAttribute(e,r.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const r=this.constructor,s=r._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=r.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=s,this[s]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??Q)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[s,o]of r)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[T("elementProperties")]=new Map,A[T("finalized")]=new Map,Ct?.({ReactiveElement:A}),(V.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=globalThis,L=X.trustedTypes,ot=L?L.createPolicy("lit-html",{createHTML:i=>i}):void 0,ut="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,$t="?"+y,Ot=`<${$t}>`,b=document,U=()=>b.createComment(""),D=i=>i===null||typeof i!="object"&&typeof i!="function",Y=Array.isArray,Tt=i=>Y(i)||typeof i?.[Symbol.iterator]=="function",J=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,at=/>/g,_=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,lt=/"/g,ft=/^(?:script|style|textarea|title)$/i,Ut=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),u=Ut(1),w=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ct=new WeakMap,v=b.createTreeWalker(b,129);function gt(i,t){if(!Y(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const Dt=(i,t)=>{const e=i.length-1,r=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=O;for(let l=0;l<e;l++){const a=i[l];let c,d,h=-1,g=0;for(;g<a.length&&(n.lastIndex=g,d=n.exec(a),d!==null);)g=n.lastIndex,n===O?d[1]==="!--"?n=nt:d[1]!==void 0?n=at:d[2]!==void 0?(ft.test(d[2])&&(s=RegExp("</"+d[2],"g")),n=_):d[3]!==void 0&&(n=_):n===_?d[0]===">"?(n=s??O,h=-1):d[1]===void 0?h=-2:(h=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?_:d[3]==='"'?lt:ht):n===lt||n===ht?n=_:n===nt||n===at?n=O:(n=_,s=void 0);const m=n===_&&i[l+1].startsWith("/>")?" ":"";o+=n===O?a+Ot:h>=0?(r.push(c),a.slice(0,h)+ut+a.slice(h)+y+m):a+y+(h===-2?l:m)}return[gt(i,o+(i[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class B{constructor({strings:t,_$litType$:e},r){let s;this.parts=[];let o=0,n=0;const l=t.length-1,a=this.parts,[c,d]=Dt(t,e);if(this.el=B.createElement(c,r),v.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=v.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ut)){const g=d[n++],m=s.getAttribute(h).split(y),k=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:k[2],strings:m,ctor:k[1]==="."?Ht:k[1]==="?"?Nt:k[1]==="@"?Mt:W}),s.removeAttribute(h)}else h.startsWith(y)&&(a.push({type:6,index:o}),s.removeAttribute(h));if(ft.test(s.tagName)){const h=s.textContent.split(y),g=h.length-1;if(g>0){s.textContent=L?L.emptyScript:"";for(let m=0;m<g;m++)s.append(h[m],U()),v.nextNode(),a.push({type:2,index:++o});s.append(h[g],U())}}}else if(s.nodeType===8)if(s.data===$t)a.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(y,h+1))!==-1;)a.push({type:7,index:o}),h+=y.length-1}o++}}static createElement(t,e){const r=b.createElement("template");return r.innerHTML=t,r}}function P(i,t,e=i,r){if(t===w)return t;let s=r!==void 0?e._$Co?.[r]:e._$Cl;const o=D(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(i),s._$AT(i,e,r)),r!==void 0?(e._$Co??=[])[r]=s:e._$Cl=s),s!==void 0&&(t=P(i,s._$AS(i,t.values),s,r)),t}class Bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,s=(t?.creationScope??b).importNode(e,!0);v.currentNode=s;let o=v.nextNode(),n=0,l=0,a=r[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new N(o,o.nextSibling,this,t):a.type===1?c=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(c=new kt(o,this,t)),this._$AV.push(c),a=r[++l]}n!==a?.index&&(o=v.nextNode(),n++)}return v.currentNode=b,s}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class N{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=P(this,t,e),D(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==w&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&D(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,s=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=B.createElement(gt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new Bt(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=ct.get(t.strings);return e===void 0&&ct.set(t.strings,e=new B(t)),e}k(t){Y(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,s=0;for(const o of t)s===e.length?e.push(r=new N(this.O(U()),this.O(U()),this,this.options)):r=e[s],r._$AI(o),s++;s<e.length&&(this._$AR(r&&r._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=p}_$AI(t,e=this,r,s){const o=this.strings;let n=!1;if(o===void 0)t=P(this,t,e,0),n=!D(t)||t!==this._$AH&&t!==w,n&&(this._$AH=t);else{const l=t;let a,c;for(t=o[0],a=0;a<o.length-1;a++)c=P(this,l[r+a],e,a),c===w&&(c=this._$AH[a]),n||=!D(c)||c!==this._$AH[a],c===p?t=p:t!==p&&(t+=(c??"")+o[a+1]),this._$AH[a]=c}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ht extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Nt extends W{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Mt extends W{constructor(t,e,r,s,o){super(t,e,r,s,o),this.type=5}_$AI(t,e=this){if((t=P(this,t,e,0)??p)===w)return;const r=this._$AH,s=t===p&&r!==p||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==p&&(r===p||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class kt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t)}}const Rt=X.litHtmlPolyfillSupport;Rt?.(B,N),(X.litHtmlVersions??=[]).push("3.2.1");const jt=(i,t,e)=>{const r=e?.renderBefore??t;let s=r._$litPart$;if(s===void 0){const o=e?.renderBefore??null;r._$litPart$=s=new N(t.insertBefore(U(),o),o,void 0,e??{})}return s._$AI(i),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return w}};f._$litElement$=!0,f.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:f});const Lt=globalThis.litElementPolyfillSupport;Lt?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=i=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(i,t)}):customElements.define(i,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Q},It=(i=zt,t,e)=>{const{kind:r,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,i),r==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,i)},init(l){return l!==void 0&&this.P(n,void 0,i),l}}}if(r==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,i)}}throw Error("Unsupported decorator location: "+r)};function $(i){return(t,e)=>typeof e=="object"?It(i,t,e):((r,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...r,wrapped:!0}:r),n?Object.getOwnPropertyDescriptor(s,o):void 0})(i,t,e)}const M=dt`
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

    button.nav-button {
        display: block;
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        font-size: 1rem;
        background-color: #6200ee;
        color: white;
        border: none;
        border-radius: 8px;
        text-align: left;
        cursor: pointer;
        transition: background-color 0.3s ease;
        box-sizing: border-box;
    }

    button.nav-button:hover {
        background-color: #3700b3; /* Darker shade for hover */
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
`;var Vt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,q=(i,t,e,r)=>{for(var s=r>1?void 0:r?Wt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Vt(t,e,s),s};let S=class extends f{constructor(){super(...arguments),this.title="",this.showBackButton=!1,this.onBack=()=>{}}render(){return u`
            <header>
                ${this.showBackButton?u`<button class="back-button" @click="${this.onBack}">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/>
                            </svg>
                        </button>`:""}
                <div class="title">${this.title}</div>
            </header>
        `}};S.styles=dt`
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
    `;q([$({type:String})],S.prototype,"title",2);q([$({type:Boolean})],S.prototype,"showBackButton",2);q([$({type:Function})],S.prototype,"onBack",2);S=q([C("app-header")],S);var qt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,tt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Ft(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&qt(t,e,s),s};let H=class extends f{constructor(){super(...arguments),this.surname="",this.passportNumber=""}handleSearch(){console.log("Поиск ТПО:",this.surname,this.passportNumber)}render(){return u`
            <input type="text" .value="${this.surname}" @input="${i=>this.surname=i.target.value}" placeholder="Фамилия">
            <input type="text" .value="${this.passportNumber}" @input="${i=>this.passportNumber=i.target.value}" placeholder="Номер паспорта">
            <button class="nav-button" @click="${this.handleSearch}">Поиск</button>
        `}};H.styles=[M];tt([$({type:String})],H.prototype,"surname",2);tt([$({type:String})],H.prototype,"passportNumber",2);H=tt([C("search-tpo")],H);var Kt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,mt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Jt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Kt(t,e,s),s};let z=class extends f{constructor(){super(...arguments),this.passportDetails={series:"",number:"",issuedBy:"",issueDate:"",birthDate:""}}handleCreateLink(){console.log("Создание ссылки:",this.passportDetails)}render(){return u`
            <input type="text" .value="${this.passportDetails.series}" @input="${i=>this.passportDetails.series=i.target.value}" placeholder="Серия паспорта">
            <input type="text" .value="${this.passportDetails.number}" @input="${i=>this.passportDetails.number=i.target.value}" placeholder="Номер паспорта">
            <input type="text" .value="${this.passportDetails.issuedBy}" @input="${i=>this.passportDetails.issuedBy=i.target.value}" placeholder="Кем выдан">
            <input type="date" .value="${this.passportDetails.issueDate}" @input="${i=>this.passportDetails.issueDate=i.target.value}" placeholder="Дата выдачи">
            <input type="date" .value="${this.passportDetails.birthDate}" @input="${i=>this.passportDetails.birthDate=i.target.value}" placeholder="Дата рождения">
            <button class="nav-button" @click="${this.handleCreateLink}">Создать ссылку</button>
        `}};z.styles=[M];mt([$({type:Object})],z.prototype,"passportDetails",2);z=mt([C("advance-payment")],z);var Zt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,F=(i,t,e,r)=>{for(var s=r>1?void 0:r?Gt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Zt(t,e,s),s};let E=class extends f{constructor(){super(...arguments),this.oldPassword="",this.newPassword="",this.confirmPassword=""}handleChangePassword(){this.newPassword===this.confirmPassword?console.log("Смена пароля:",this.oldPassword,this.newPassword):console.error("Пароли не совпадают")}render(){return u`
            <h2>Смена пароля</h2>
            <input type="password" .value="${this.oldPassword}" @input="${i=>this.oldPassword=i.target.value}" placeholder="Старый пароль">
            <input type="password" .value="${this.newPassword}" @input="${i=>this.newPassword=i.target.value}" placeholder="Новый пароль">
            <input type="password" .value="${this.confirmPassword}" @input="${i=>this.confirmPassword=i.target.value}" placeholder="Подтвердите пароль">
            <button class="nav-button" @click="${this.handleChangePassword}">Сменить пароль</button>
        `}};E.styles=[M];F([$({type:String})],E.prototype,"oldPassword",2);F([$({type:String})],E.prototype,"newPassword",2);F([$({type:String})],E.prototype,"confirmPassword",2);E=F([C("change-password")],E);var Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,yt=(i,t,e,r)=>{for(var s=r>1?void 0:r?Xt(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Qt(t,e,s),s};let I=class extends f{constructor(){super(...arguments),this.payments=[{id:1,amount:1e3,date:"2023-10-01"},{id:2,amount:1500,date:"2023-10-05"},{id:3,amount:2e3,date:"2023-10-10"}]}render(){return u`
            <h2>История платежей</h2>
            <ul>
                ${this.payments.map(i=>u`
                    <li>${i.date} - ${i.amount} руб.</li>
                `)}
            </ul>
        `}};I.styles=[M];yt([$({type:Array})],I.prototype,"payments",2);I=yt([C("payment-history")],I);var Yt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,K=(i,t,e,r)=>{for(var s=r>1?void 0:r?te(t,e):t,o=i.length-1,n;o>=0;o--)(n=i[o])&&(s=(r?n(t,e,s):n(s))||s);return r&&s&&Yt(t,e,s),s};let x=class extends f{constructor(){super(...arguments),this.currentPage="home",this.pageTitle="Главная страница",this.showBackButton=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",()=>this.handlePopState())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",()=>this.handlePopState())}handlePopState(){const i=history.state||{page:"home",title:"Главная страница"};this.currentPage=i.page,this.pageTitle=i.title,this.showBackButton=i.page!=="home"}navigateTo(i,t){this.currentPage=i,this.pageTitle=t,this.showBackButton=i!=="home",history.pushState({page:i,title:t},"",`#${i}`)}goBack(){history.back()}renderPage(){switch(this.currentPage){case"search-tpo":return u`<search-tpo></search-tpo>`;case"advance-payment":return u`<advance-payment></advance-payment>`;case"change-password":return u`<change-password></change-password>`;case"payment-history":return u`<payment-history></payment-history>`;case"home":default:return u`
                    <button class="nav-button" @click="${()=>this.navigateTo("search-tpo","Поиск квитанции по реквизитам")}">Поиск квитанции по реквизитам</button>
                    <button class="nav-button" @click="${()=>this.navigateTo("advance-payment","Авансовый платеж")}">Авансовый платеж</button>
                    <button class="nav-button" @click="${()=>this.navigateTo("change-password","Сменить пароль")}">Сменить пароль</button>
                    <button class="nav-button" @click="${()=>this.navigateTo("payment-history","История платежей")}">История платежей</button>
                `}}render(){return u`
            <app-header
                .title="${this.pageTitle}"
                .showBackButton="${this.showBackButton}"
                .onBack="${()=>this.goBack()}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
        `}};x.styles=[M];K([$({type:String})],x.prototype,"currentPage",2);K([$({type:String})],x.prototype,"pageTitle",2);K([$({type:Boolean})],x.prototype,"showBackButton",2);x=K([C("app-home")],x);
//# sourceMappingURL=index-CWqIDZQE.js.map
