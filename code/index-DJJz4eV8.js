(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,Q=R.ShadowRoot&&(R.ShadyCSS===void 0||R.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),rt=new WeakMap;let $t=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(Q&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&rt.set(e,t))}return t}toString(){return this.cssText}};const _t=r=>new $t(typeof r=="string"?r:r+"",void 0,X),Y=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((i,s,n)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[n+1],r[0]);return new $t(e,r,X)},wt=(r,t)=>{if(Q)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=R.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,r.appendChild(i)}},nt=Q?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _t(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:At,defineProperty:Pt,getOwnPropertyDescriptor:xt,getOwnPropertyNames:St,getOwnPropertySymbols:Et,getPrototypeOf:Ct}=Object,q=globalThis,ot=q.trustedTypes,Ot=ot?ot.emptyScript:"",kt=q.reactiveElementPolyfillSupport,D=(r,t)=>r,j={toAttribute(r,t){switch(t){case Boolean:r=r?Ot:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},tt=(r,t)=>!At(r,t),at={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:tt};Symbol.metadata??=Symbol("metadata"),q.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=at){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Pt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=xt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s?.call(this)},set(o){const h=s?.call(this);n.call(this,o),this.requestUpdate(t,h,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??at}static _$Ei(){if(this.hasOwnProperty(D("elementProperties")))return;const t=Ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(D("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(D("properties"))){const e=this.properties,i=[...St(e),...Et(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(nt(s))}else t!==void 0&&e.push(nt(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(i.converter?.toAttribute!==void 0?i.converter:j).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:j;this._$Em=s,this[s]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??tt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[s,n]of this._$Ep)this[s]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[s,n]of i)n.wrapped!==!0||this._$AL.has(s)||this[s]===void 0||this.P(s,this[s],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(i=>i.hostUpdate?.()),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[D("elementProperties")]=new Map,A[D("finalized")]=new Map,kt?.({ReactiveElement:A}),(q.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const et=globalThis,z=et.trustedTypes,lt=z?z.createPolicy("lit-html",{createHTML:r=>r}):void 0,ft="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,gt="?"+y,Dt=`<${gt}>`,_=document,B=()=>_.createComment(""),T=r=>r===null||typeof r!="object"&&typeof r!="function",st=Array.isArray,Bt=r=>st(r)||typeof r?.[Symbol.iterator]=="function",G=`[ 	
\f\r]`,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ht=/-->/g,ct=/>/g,v=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),dt=/'/g,pt=/"/g,mt=/^(?:script|style|textarea|title)$/i,Tt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),c=Tt(1),P=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ut=new WeakMap,b=_.createTreeWalker(_,129);function yt(r,t){if(!st(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return lt!==void 0?lt.createHTML(t):t}const Mt=(r,t)=>{const e=r.length-1,i=[];let s,n=t===2?"<svg>":t===3?"<math>":"",o=k;for(let h=0;h<e;h++){const a=r[h];let d,u,l=-1,g=0;for(;g<a.length&&(o.lastIndex=g,u=o.exec(a),u!==null);)g=o.lastIndex,o===k?u[1]==="!--"?o=ht:u[1]!==void 0?o=ct:u[2]!==void 0?(mt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=v):u[3]!==void 0&&(o=v):o===v?u[0]===">"?(o=s??k,l=-1):u[1]===void 0?l=-2:(l=o.lastIndex-u[2].length,d=u[1],o=u[3]===void 0?v:u[3]==='"'?pt:dt):o===pt||o===dt?o=v:o===ht||o===ct?o=k:(o=v,s=void 0);const m=o===v&&r[h+1].startsWith("/>")?" ":"";n+=o===k?a+Dt:l>=0?(i.push(d),a.slice(0,l)+ft+a.slice(l)+y+m):a+y+(l===-2?h:m)}return[yt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),i]};class M{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[d,u]=Mt(t,e);if(this.el=M.createElement(d,i),b.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=b.nextNode())!==null&&a.length<h;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ft)){const g=u[o++],m=s.getAttribute(l).split(y),N=/([.?@])?(.*)/.exec(g);a.push({type:1,index:n,name:N[2],strings:m,ctor:N[1]==="."?Ht:N[1]==="?"?Lt:N[1]==="@"?It:F}),s.removeAttribute(l)}else l.startsWith(y)&&(a.push({type:6,index:n}),s.removeAttribute(l));if(mt.test(s.tagName)){const l=s.textContent.split(y),g=l.length-1;if(g>0){s.textContent=z?z.emptyScript:"";for(let m=0;m<g;m++)s.append(l[m],B()),b.nextNode(),a.push({type:2,index:++n});s.append(l[g],B())}}}else if(s.nodeType===8)if(s.data===gt)a.push({type:2,index:n});else{let l=-1;for(;(l=s.data.indexOf(y,l+1))!==-1;)a.push({type:7,index:n}),l+=y.length-1}n++}}static createElement(t,e){const i=_.createElement("template");return i.innerHTML=t,i}}function x(r,t,e=r,i){if(t===P)return t;let s=i!==void 0?e._$Co?.[i]:e._$Cl;const n=T(t)?void 0:t._$litDirective$;return s?.constructor!==n&&(s?._$AO?.(!1),n===void 0?s=void 0:(s=new n(r),s._$AT(r,e,i)),i!==void 0?(e._$Co??=[])[i]=s:e._$Cl=s),s!==void 0&&(t=x(r,s._$AS(r,t.values),s,i)),t}class Ut{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??_).importNode(e,!0);b.currentNode=s;let n=b.nextNode(),o=0,h=0,a=i[0];for(;a!==void 0;){if(o===a.index){let d;a.type===2?d=new H(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new Nt(n,this,t)),this._$AV.push(d),a=i[++h]}o!==a?.index&&(n=b.nextNode(),o++)}return b.currentNode=_,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class H{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=x(this,t,e),T(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&T(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=M.createElement(yt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const n=new Ut(s,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new M(t)),e}k(t){st(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new H(this.O(B()),this.O(B()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class F{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(n===void 0)t=x(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==P,o&&(this._$AH=t);else{const h=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=x(this,h[i+a],e,a),d===P&&(d=this._$AH[a]),o||=!T(d)||d!==this._$AH[a],d===p?t=p:t!==p&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}o&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Ht extends F{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Lt extends F{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class It extends F{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=x(this,t,e,0)??p)===P)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Nt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){x(this,t)}}const Rt=et.litHtmlPolyfillSupport;Rt?.(M,H),(et.litHtmlVersions??=[]).push("3.2.1");const jt=(r,t,e)=>{const i=e?.renderBefore??t;let s=i._$litPart$;if(s===void 0){const n=e?.renderBefore??null;i._$litPart$=s=new H(t.insertBefore(B(),n),n,void 0,e??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return P}};f._$litElement$=!0,f.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:f});const zt=globalThis.litElementPolyfillSupport;zt?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:tt},Wt=(r=Vt,t,e)=>{const{kind:i,metadata:s}=e;let n=globalThis.litPropertyMetadata.get(s);if(n===void 0&&globalThis.litPropertyMetadata.set(s,n=new Map),n.set(e.name,r),i==="accessor"){const{name:o}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,a,r)},init(h){return h!==void 0&&this.P(o,void 0,r),h}}}if(i==="setter"){const{name:o}=e;return function(h){const a=this[o];t.call(this,h),this.requestUpdate(o,a,r)}}throw Error("Unsupported decorator location: "+i)};function $(r){return(t,e)=>typeof e=="object"?Wt(r,t,e):((i,s,n)=>{const o=s.hasOwnProperty(n);return s.constructor.createProperty(n,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,n):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(r){return $({...r,state:!0,attribute:!1})}const L=Y`
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
`;var qt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,I=(r,t,e,i)=>{for(var s=i>1?void 0:i?Ft(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&qt(t,e,s),s};let w=class extends f{constructor(){super(...arguments),this.showInstallButton=!1,this.showInstallModal=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.showBackButton=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=r=>{r.preventDefault(),this.deferredPrompt=r,this.showInstallButton=!0},this.handleInstallClick=async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:r}=await this.deferredPrompt.userChoice;r==="accepted"&&(this.showInstallButton=!1)}else this.showInstallModal=!0},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}renderInstallModal(){return c`
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

                ${this.showInstallButton||!this.deferredPrompt?c`
                    <button class="install-button" @click="${this.handleInstallClick}">
                        ${this.deferredPrompt?"Установить":"Ярлык"}
                    </button>
                `:""}
            </header>

            ${this.showInstallModal?this.renderInstallModal():""}
        `}};w.styles=Y`
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
    `;I([vt()],w.prototype,"showInstallButton",2);I([vt()],w.prototype,"showInstallModal",2);I([$({type:Boolean})],w.prototype,"showBackButton",2);I([$({type:Function})],w.prototype,"onBack",2);w=I([O("app-header")],w);var Kt=Object.defineProperty,Jt=Object.getOwnPropertyDescriptor,K=(r,t,e,i)=>{for(var s=i>1?void 0:i?Jt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Kt(t,e,s),s};let S=class extends f{constructor(){super(...arguments),this.surname="",this.passportNumber="",this.paymentDetails={fio:"",docData:""}}handleSearch(){console.log("Поиск ТПО:",this.surname,this.passportNumber)}render(){return c`
            <input type="text" .value="${this.paymentDetails.fio}" @input="${r=>this.paymentDetails.fio=r.target.value}" placeholder="ФИО плательшика">
            <input type="text" .value="${this.paymentDetails.docData}" @input="${r=>this.paymentDetails.docData=r.target.value}" placeholder="Серия и номер паспорта РФ плательщика">
            <button class="nav-button" @click="${this.handleSearch}">Поиск</button>
        `}};S.styles=[L];K([$({type:String})],S.prototype,"surname",2);K([$({type:String})],S.prototype,"passportNumber",2);K([$({type:Object})],S.prototype,"paymentDetails",2);S=K([O("search-tpo")],S);var Zt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,it=(r,t,e,i)=>{for(var s=i>1?void 0:i?Gt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Zt(t,e,s),s};let U=class extends f{constructor(){super(...arguments),this.generatedLink="",this.paymentDetails={fio:"",inn:"",docData:"",docDate:""}}generateRandomLink(){const r=Math.random().toString(36).substr(2,8);this.generatedLink=`${window.location.origin}/payment/${r}`}async shareLink(){try{navigator.share?await navigator.share({title:"Авансовый платеж",text:"Ссылка для авансового платежа:",url:this.generatedLink}):(await navigator.clipboard.writeText(this.generatedLink),alert("Ссылка скопирована в буфер обмена!"))}catch(r){console.error("Ошибка при попытке поделиться:",r)}}render(){return c`
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
        `}};U.styles=[Y`
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
    `,L];it([$({type:String})],U.prototype,"generatedLink",2);it([$({type:Object})],U.prototype,"paymentDetails",2);U=it([O("advance-payment")],U);var Qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,J=(r,t,e,i)=>{for(var s=i>1?void 0:i?Xt(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Qt(t,e,s),s};let E=class extends f{constructor(){super(...arguments),this.oldPassword="",this.newPassword="",this.confirmPassword=""}handleChangePassword(){this.newPassword===this.confirmPassword?console.log("Смена пароля:",this.oldPassword,this.newPassword):console.error("Пароли не совпадают")}render(){return c`
            <input type="password" .value="${this.oldPassword}" @input="${r=>this.oldPassword=r.target.value}" placeholder="Старый пароль">
            <input type="password" .value="${this.newPassword}" @input="${r=>this.newPassword=r.target.value}" placeholder="Новый пароль">
            <input type="password" .value="${this.confirmPassword}" @input="${r=>this.confirmPassword=r.target.value}" placeholder="Подтвердите пароль">
            <button class="nav-button" @click="${this.handleChangePassword}">Сменить пароль</button>
        `}};E.styles=[L];J([$({type:String})],E.prototype,"oldPassword",2);J([$({type:String})],E.prototype,"newPassword",2);J([$({type:String})],E.prototype,"confirmPassword",2);E=J([O("change-password")],E);var Yt=Object.defineProperty,te=Object.getOwnPropertyDescriptor,bt=(r,t,e,i)=>{for(var s=i>1?void 0:i?te(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&Yt(t,e,s),s};let V=class extends f{constructor(){super(...arguments),this.payments=[{id:1,amount:1e3,date:"2023-10-01"},{id:2,amount:1500,date:"2023-10-05"},{id:3,amount:2e3,date:"2023-10-10"}]}render(){return c`
            <ul>
                ${this.payments.map(r=>c`
                    <li>${r.date} - ${r.amount} руб.</li>
                `)}
            </ul>
        `}};V.styles=[L];bt([$({type:Array})],V.prototype,"payments",2);V=bt([O("payment-history")],V);const W=document.querySelector("#install");window.addEventListener("beforeinstallprompt",r=>{r.preventDefault(),W&&W.removeAttribute("hidden")});window.addEventListener("appinstalled",()=>{ee()});function ee(){W&&W.setAttribute("hidden","")}var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,Z=(r,t,e,i)=>{for(var s=i>1?void 0:i?ie(t,e):t,n=r.length-1,o;n>=0;n--)(o=r[n])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&se(t,e,s),s};let C=class extends f{constructor(){super(...arguments),this.currentPage="home",this.pageTitle="Главная страница",this.showBackButton=!1}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",()=>this.handlePopState())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",()=>this.handlePopState())}handlePopState(){const r=history.state||{page:"home",title:"Главная страница"};this.currentPage=r.page,this.pageTitle=r.title,this.showBackButton=r.page!=="home"}navigateTo(r,t){this.currentPage=r,this.pageTitle=t,this.showBackButton=r!=="home",history.pushState({page:r,title:t},"",`#${r}`)}goBack(){history.back()}renderPage(){switch(this.currentPage){case"search-tpo":return c`<search-tpo></search-tpo>`;case"advance-payment":return c`<advance-payment></advance-payment>`;case"change-password":return c`<change-password></change-password>`;case"payment-history":return c`<payment-history></payment-history>`;case"home":default:return c`
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
        `}};C.styles=[L];Z([$({type:String})],C.prototype,"currentPage",2);Z([$({type:String})],C.prototype,"pageTitle",2);Z([$({type:Boolean})],C.prototype,"showBackButton",2);C=Z([O("app-home")],C);
//# sourceMappingURL=index-DJJz4eV8.js.map
