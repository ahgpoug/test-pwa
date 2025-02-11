(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,G=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Q=Symbol(),it=new WeakMap;let ut=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==Q)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&it.set(e,t))}return t}toString(){return this.cssText}};const bt=r=>new ut(typeof r=="string"?r:r+"",void 0,Q),X=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ut(e,r,Q)},_t=(r,t)=>{if(G)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=R.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},rt=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return bt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:wt,defineProperty:At,getOwnPropertyDescriptor:Pt,getOwnPropertyNames:xt,getOwnPropertySymbols:St,getPrototypeOf:Et}=Object,W=globalThis,ot=W.trustedTypes,Ct=ot?ot.emptyScript:"",Ot=W.reactiveElementPolyfillSupport,D=(r,t)=>r,j={toAttribute(r,t){switch(t){case Boolean:r=r?Ct:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},Y=(r,t)=>!wt(r,t),nt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Y};Symbol.metadata??=Symbol("metadata"),W.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&At(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:o}=Pt(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s?.call(this)},set(n){const h=s?.call(this);o.call(this,n),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const t=Et(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,i=[...xt(e),...St(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(rt(s))}else t!==void 0&&e.push(rt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const o=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:j;this._$Em=s,this[s]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??Y)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,o]of i)o.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[D("elementProperties")]=new Map,A[D("finalized")]=new Map,Ot?.({ReactiveElement:A}),(W.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,z=tt.trustedTypes,at=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,$t="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+y,kt=`<${ft}>`,_=document,M=()=>_.createComment(""),B=r=>r===null||typeof r!="object"&&typeof r!="function",et=Array.isArray,Dt=r=>et(r)||typeof r?.[Symbol.iterator]=="function",Z=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lt=/-->/g,ht=/>/g,v=RegExp(`>|${Z}(?:([^\\s"'>=/]+)(${Z}*=${Z}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ct=/'/g,dt=/"/g,gt=/^(?:script|style|textarea|title)$/i,Mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=Mt(1),P=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pt=new WeakMap,b=_.createTreeWalker(_,129);function mt(r,t){if(!et(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}const Bt=(r,t)=>{const e=r.length-1,i=[];let s,o=t===2?"<svg>":t===3?"<math>":"",n=k;for(let h=0;h<e;h++){const a=r[h];let d,u,l=-1,g=0;for(;g<a.length&&(n.lastIndex=g,u=n.exec(a),u!==null);)g=n.lastIndex,n===k?u[1]==="!--"?n=lt:u[1]!==void 0?n=ht:u[2]!==void 0?(gt.test(u[2])&&(s=RegExp("</"+u[2],"g")),n=v):u[3]!==void 0&&(n=v):n===v?u[0]===">"?(n=s??k,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?v:u[3]==='"'?dt:ct):n===dt||n===ct?n=v:n===lt||n===ht?n=k:(n=v,s=void 0);const m=n===v&&r[h+1].startsWith("/>")?" ":"";o+=n===k?a+kt:l>=0?(i.push(d),a.slice(0,l)+$t+a.slice(l)+y+m):a+y+(l===-2?h:m)}return[mt(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class T{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let o=0,n=0;const h=t.length-1,a=this.parts,[d,u]=Bt(t,e);if(this.el=T.createElement(d,i),b.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=b.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith($t)){const g=u[n++],m=s.getAttribute(l).split(y),N=/([.?@])?(.*)/.exec(g);a.push({type:1,index:o,name:N[2],strings:m,ctor:N[1]==="."?Ut:N[1]==="?"?Ht:N[1]==="@"?Lt:q}),s.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:o}),s.removeAttribute(l));if(gt.test(s.tagName)){const l=s.textContent.split(y),g=l.length-1;if(g>0){s.textContent=z?z.emptyScript:"";for(let m=0;m<g;m++)s.append(l[m],M()),b.nextNode(),a.push({type:2,index:++o});s.append(l[g],M())}}}else if(s.nodeType===8)if(s.data===ft)a.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:o}),l+=y.length-1}o++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function x(r,t,e=r,i){if(t===P)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const o=B(t)?void 0:t._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=x(r,s._$AS(r,t.values),s,i)),t}class Tt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??_).importNode(e,!0);b.currentNode=s;let o=b.nextNode(),n=0,h=0,a=i[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new H(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new It(o,this,t)),this._$AV.push(d),a=i[++h]}n!==a?.index&&(o=b.nextNode(),n++)}return b.currentNode=_,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),B(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Dt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&B(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=T.createElement(mt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const o=new Tt(s,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=pt.get(t.strings);return e===void 0&&pt.set(t.strings,e=new T(t)),e}k(t){et(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const o of t)s===e.length?e.push(i=new H(this.O(M()),this.O(M()),this,this.options)):i=e[s],i._$AI(o),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class q{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const o=this.strings;let n=!1;if(o===void 0)t=x(this,t,e,0),n=!B(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const h=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=x(this,h[i+a],e,a),d===P&&(d=this._$AH[a]),n||=!B(d)||d!==this._$AH[a],d===p?t=p:t!==p&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ut extends q{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ht extends q{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Lt extends q{constructor(t,e,i,s,o){super(t,e,i,s,o),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??p)===P)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const Nt=tt.litHtmlPolyfillSupport;Nt?.(T,H),(tt.litHtmlVersions??=[]).push("3.2.1");const Rt=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const o=e?.renderBefore??null;i._$litPart$=s=new H(t.insertBefore(M(),o),o,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Rt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};f._$litElement$=!0,f.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:f});const jt=globalThis.litElementPolyfillSupport;jt?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:Y},Vt=(r=zt,t,e)=>{const{kind:i,metadata:s}=e;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),o.set(e.name,r),i==="accessor"){const{name:n}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(n,a,r)},init(h){return h!==void 0&&this.P(n,void 0,r),h}}}if(i==="setter"){const{name:n}=e;return function(h){const a=this[n];t.call(this,h),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+i)};function $(r){return(t,e)=>typeof e=="object"?Vt(r,t,e):((i,s,o)=>{const n=s.hasOwnProperty(o);return s.constructor.createProperty(o,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function yt(r){return $({...r,state:!0,attribute:!1})}const L=X`
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
`;var Wt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,I=(r,t,e,i)=>{for(var s=i>1?void 0:i?qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Wt(t,e,s),s};let w=class extends f{constructor(){super(...arguments),this.showInstallButton=!1,this.showInstallModal=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||document.referrer.includes("android-app://"),this.showBackButton=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=r=>{r.preventDefault(),this.deferredPrompt=r,this.showInstallButton=!0},this.handleInstallClick=async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:r}=await this.deferredPrompt.userChoice;r==="accepted"&&(this.showInstallButton=!1)}else this.showInstallModal=!0},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}renderInstallModal(){return c`
            <div class="install-modal" @click="${()=>this.showInstallModal=!1}">
                <div class="modal-content" @click="${r=>r.stopPropagation()}">
                    <button class="close-button" @click="${()=>this.showInstallModal=!1}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                        </svg>
                    </button>

                    ${this.isIOS?c`
                        <h3>Создать ярлык на домашнем экране</h3>
                        <div class="instructions">
                            1. Нажмите на кнопку "Поделиться"<br>
                            2. Выберите 'На экран "Домой"'<br>
                            3. Нажмите "Добавить"
                        </div>
                    `:this.isAndroid?c`
                        <h3>Создать ярлык на домашнем экране</h3>
                        <div class="instructions">
                            1. Откройте меню браузера (три точки)<br>
                            2. Выберите "Установить приложение"<br>
                            3. Подтвердите установку
                        </div>
                    `:c`
                        <h3>Сохранить в закладки</h3>
                        <div class="instructions">
                            Нажмите Ctrl+D чтобы добавить в закладки<br>
                            Или используйте меню браузера
                        </div>
                    `}
                </div>
            </div>
        `}render(){return console.log(this.deferredPrompt),c`
            <header>
                ${this.showBackButton?c`<button class="back-button" @click="${this.onBack}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/>
					</svg>
                </button>`:""}

                <div class="title">${this.title}</div>

                ${!this.isInStandaloneMode&&(this.showInstallButton||!this.deferredPrompt)?c`
                    <button class="install-button" @click="${this.handleInstallClick}">
                        ${this.deferredPrompt?"Установить":"Ярлык"}
                    </button>
                `:""}
            </header>

            ${this.showInstallModal?this.renderInstallModal():""}
        `}};w.styles=X`
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

        .install-button {
            background: none;
            border: none;
            color: white;
            font-size: 14px;
            cursor: pointer;
            padding: 8px 16px;
            border-radius: 20px;
            border: 1px solid white;
            transition: background-color 0.3s ease;
        }

        .install-button:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }

        .install-button:active {
            background-color: rgba(255, 255, 255, 0.2);
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
    `;I([yt()],w.prototype,"showInstallButton",2);I([yt()],w.prototype,"showInstallModal",2);I([$({type:Boolean})],w.prototype,"showBackButton",2);I([$({type:Function})],w.prototype,"onBack",2);w=I([O("app-header")],w);var Ft=Object.defineProperty,Kt=Object.getOwnPropertyDescriptor,F=(r,t,e,i)=>{for(var s=i>1?void 0:i?Kt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Ft(t,e,s),s};let S=class extends f{constructor(){super(...arguments),this.surname="",this.passportNumber="",this.paymentDetails={fio:"",docData:""}}handleSearch(){console.log("Поиск ТПО:",this.surname,this.passportNumber)}render(){return c`
            <input type="text" .value="${this.paymentDetails.fio}" @input="${r=>this.paymentDetails.fio=r.target.value}" placeholder="ФИО плательшика">
            <input type="text" .value="${this.paymentDetails.docData}" @input="${r=>this.paymentDetails.docData=r.target.value}" placeholder="Серия и номер паспорта РФ плательщика">
            <button class="nav-button" @click="${this.handleSearch}">Поиск</button>
        `}};S.styles=[L];F([$({type:String})],S.prototype,"surname",2);F([$({type:String})],S.prototype,"passportNumber",2);F([$({type:Object})],S.prototype,"paymentDetails",2);S=F([O("search-tpo")],S);var Jt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,st=(r,t,e,i)=>{for(var s=i>1?void 0:i?Zt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Jt(t,e,s),s};let U=class extends f{constructor(){super(...arguments),this.generatedLink="",this.paymentDetails={fio:"",inn:"",docData:"",docDate:""}}generateRandomLink(){const r=Math.random().toString(36).substr(2,8);this.generatedLink=`${window.location.origin}/payment/${r}`}async shareLink(){try{navigator.share?await navigator.share({title:"Авансовый платеж",text:"Ссылка для авансового платежа:",url:this.generatedLink}):(await navigator.clipboard.writeText(this.generatedLink),alert("Ссылка скопирована в буфер обмена!"))}catch(r){console.error("Ошибка при попытке поделиться:",r)}}render(){return c`
            <input type="text" .value="${this.paymentDetails.fio}" @input="${r=>this.paymentDetails.fio=r.target.value}" placeholder="ФИО плательщика">
            <input type="text" .value="${this.paymentDetails.inn}" @input="${r=>this.paymentDetails.inn=r.target.value}" placeholder="ИНН плательщика">
            <input type="text" .value="${this.paymentDetails.docData}" @input="${r=>this.paymentDetails.docData=r.target.value}" placeholder="Серия и номер паспорта РФ плательщика">
            <input type="date" .value="${this.paymentDetails.docDate}" @input="${r=>this.paymentDetails.docDate=r.target.value}" placeholder="Дата выдачи паспорта РФ плательщика">
            <button class="nav-button" @click="${this.generateRandomLink}">Создать ссылку</button>

            ${this.generatedLink?c`
                <div class="link-container">
                    <div class="link-field">${this.generatedLink}</div>
                    <button class="share-button" @click=${this.shareLink}>
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
            `:""}
        `}};U.styles=[X`
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
    `,L];st([$({type:String})],U.prototype,"generatedLink",2);st([$({type:Object})],U.prototype,"paymentDetails",2);U=st([O("advance-payment")],U);var Gt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,K=(r,t,e,i)=>{for(var s=i>1?void 0:i?Qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Gt(t,e,s),s};let E=class extends f{constructor(){super(...arguments),this.oldPassword="",this.newPassword="",this.confirmPassword=""}handleChangePassword(){this.newPassword===this.confirmPassword?console.log("Смена пароля:",this.oldPassword,this.newPassword):console.error("Пароли не совпадают")}render(){return c`
            <input type="password" .value="${this.oldPassword}" @input="${r=>this.oldPassword=r.target.value}" placeholder="Старый пароль">
            <input type="password" .value="${this.newPassword}" @input="${r=>this.newPassword=r.target.value}" placeholder="Новый пароль">
            <input type="password" .value="${this.confirmPassword}" @input="${r=>this.confirmPassword=r.target.value}" placeholder="Подтвердите пароль">
            <button class="nav-button" @click="${this.handleChangePassword}">Сменить пароль</button>
        `}};E.styles=[L];K([$({type:String})],E.prototype,"oldPassword",2);K([$({type:String})],E.prototype,"newPassword",2);K([$({type:String})],E.prototype,"confirmPassword",2);E=K([O("change-password")],E);var Xt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,vt=(r,t,e,i)=>{for(var s=i>1?void 0:i?Yt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Xt(t,e,s),s};let V=class extends f{constructor(){super(...arguments),this.payments=[{id:1,amount:1e3,date:"2023-10-01"},{id:2,amount:1500,date:"2023-10-05"},{id:3,amount:2e3,date:"2023-10-10"}]}render(){return c`
            <ul>
                ${this.payments.map(r=>c`
                    <li>${r.date} - ${r.amount} руб.</li>
                `)}
            </ul>
        `}};V.styles=[L];vt([$({type:Array})],V.prototype,"payments",2);V=vt([O("payment-history")],V);var te=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,J=(r,t,e,i)=>{for(var s=i>1?void 0:i?ee(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&te(t,e,s),s};let C=class extends f{constructor(){super(...arguments),this.currentPage="home",this.pageTitle="Главная страница",this.showBackButton=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",()=>this.handlePopState())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",()=>this.handlePopState())}handlePopState(){const r=history.state||{page:"home",title:"Главная страница"};this.currentPage=r.page,this.pageTitle=r.title,this.showBackButton=r.page!=="home"}navigateTo(r,t){this.currentPage=r,this.pageTitle=t,this.showBackButton=r!=="home",history.pushState({page:r,title:t},"",`#${r}`)}goBack(){history.back()}renderPage(){switch(this.currentPage){case"search-tpo":return c`<search-tpo></search-tpo>`;case"advance-payment":return c`<advance-payment></advance-payment>`;case"change-password":return c`<change-password></change-password>`;case"payment-history":return c`<payment-history></payment-history>`;case"home":default:return c`
                    <button class="nav-button" @click="${()=>this.navigateTo("search-tpo","Поиск квитанции по реквизитам")}">Поиск квитанции по реквизитам</button>
                    <button class="nav-button" @click="${()=>this.navigateTo("advance-payment","Авансовый платеж")}">Авансовый платеж</button>
                    <button class="nav-button" @click="${()=>this.navigateTo("change-password","Сменить пароль")}">Сменить пароль</button>
                    <button class="nav-button" @click="${()=>this.navigateTo("payment-history","История платежей")}">История платежей</button>
                `}}render(){return c`
            <app-header
                .title="${this.pageTitle}"
                .showBackButton="${this.showBackButton}"
                .onBack="${()=>this.goBack()}"
            ></app-header>
            <main>
                ${this.renderPage()}
            </main>
        `}};C.styles=[L];J([$({type:String})],C.prototype,"currentPage",2);J([$({type:String})],C.prototype,"pageTitle",2);J([$({type:Boolean})],C.prototype,"showBackButton",2);C=J([O("app-home")],C);
//# sourceMappingURL=index-PALMrvnq.js.map
