(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,G=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),ot=new WeakMap;let ft=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(G&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(e,t))}return t}toString(){return this.cssText}};const wt=r=>new ft(typeof r=="string"?r:r+"",void 0,Y),tt=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,o)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new ft(e,r,Y)},xt=(r,t)=>{if(G)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=W.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},nt=G?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return wt(e)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Pt,defineProperty:St,getOwnPropertyDescriptor:At,getOwnPropertyNames:kt,getOwnPropertySymbols:It,getPrototypeOf:Ct}=Object,Z=globalThis,at=Z.trustedTypes,Et=at?at.emptyScript:"",Ot=Z.reactiveElementPolyfillSupport,R=(r,t)=>r,J={toAttribute(r,t){switch(t){case Boolean:r=r?Et:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},et=(r,t)=>!Pt(r,t),lt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&St(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:o}=At(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return i?.call(this)},set(n){const c=i?.call(this);o.call(this,n),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Ct(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,s=[...kt(e),...It(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(nt(i))}else t!==void 0&&e.push(nt(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const o=(s.converter?.toAttribute!==void 0?s.converter:J).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=s.getPropertyOptions(i),n=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:J;this._$Em=i,this[i]=n.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??=this.constructor.getPropertyOptions(t),!(s.hasChanged??et)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,o]of s)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[R("elementProperties")]=new Map,C[R("finalized")]=new Map,Ot?.({ReactiveElement:C}),(Z.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=globalThis,q=st.trustedTypes,ht=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,mt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,vt="?"+_,Nt=`<${vt}>`,S=document,U=()=>S.createComment(""),H=r=>r===null||typeof r!="object"&&typeof r!="function",it=Array.isArray,Lt=r=>it(r)||typeof r?.[Symbol.iterator]=="function",Q=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ct=/-->/g,dt=/>/g,x=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ut=/"/g,bt=/^(?:script|style|textarea|title)$/i,Mt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),h=Mt(1),O=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),gt=new WeakMap,P=S.createTreeWalker(S,129);function $t(r,t){if(!it(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}const Tt=(r,t)=>{const e=r.length-1,s=[];let i,o=t===2?"<svg>":t===3?"<math>":"",n=D;for(let c=0;c<e;c++){const a=r[c];let d,u,l=-1,m=0;for(;m<a.length&&(n.lastIndex=m,u=n.exec(a),u!==null);)m=n.lastIndex,n===D?u[1]==="!--"?n=ct:u[1]!==void 0?n=dt:u[2]!==void 0?(bt.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=x):u[3]!==void 0&&(n=x):n===x?u[0]===">"?(n=i??D,l=-1):u[1]===void 0?l=-2:(l=n.lastIndex-u[2].length,d=u[1],n=u[3]===void 0?x:u[3]==='"'?ut:pt):n===ut||n===pt?n=x:n===ct||n===dt?n=D:(n=x,i=void 0);const y=n===x&&r[c+1].startsWith("/>")?" ":"";o+=n===D?a+Nt:l>=0?(s.push(d),a.slice(0,l)+mt+a.slice(l)+_+y):a+_+(l===-2?c:y)}return[$t(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class B{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let o=0,n=0;const c=t.length-1,a=this.parts,[d,u]=Tt(t,e);if(this.el=B.createElement(d,s),P.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=P.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(mt)){const m=u[n++],y=i.getAttribute(l).split(_),V=/([.?@])?(.*)/.exec(m);a.push({type:1,index:o,name:V[2],strings:y,ctor:V[1]==="."?Rt:V[1]==="?"?Ut:V[1]==="@"?Ht:K}),i.removeAttribute(l)}else l.startsWith(_)&&(a.push({type:6,index:o}),i.removeAttribute(l));if(bt.test(i.tagName)){const l=i.textContent.split(_),m=l.length-1;if(m>0){i.textContent=q?q.emptyScript:"";for(let y=0;y<m;y++)i.append(l[y],U()),P.nextNode(),a.push({type:2,index:++o});i.append(l[m],U())}}}else if(i.nodeType===8)if(i.data===vt)a.push({type:2,index:o});else{let l=-1;for(;(l=i.data.indexOf(_,l+1))!==-1;)a.push({type:7,index:o}),l+=_.length-1}o++}}static createElement(t,e){const s=S.createElement("template");return s.innerHTML=t,s}}function N(r,t,e=r,s){if(t===O)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const o=H(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=N(r,i._$AS(r,t.values),i,s)),t}class Dt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??S).importNode(e,!0);P.currentNode=i;let o=P.nextNode(),n=0,c=0,a=s[0];for(;a!==void 0;){if(n===a.index){let d;a.type===2?d=new j(o,o.nextSibling,this,t):a.type===1?d=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(d=new Bt(o,this,t)),this._$AV.push(d),a=s[++c]}n!==a?.index&&(o=P.nextNode(),n++)}return P.currentNode=S,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class j{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==O&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Lt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.T(S.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=B.createElement($t(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new Dt(i,this),n=o.u(this.options);o.p(e),this.T(n),this._$AH=o}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new B(t)),e}k(t){it(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const o of t)i===e.length?e.push(s=new j(this.O(U()),this.O(U()),this,this.options)):s=e[i],s._$AI(o),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class K{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=p}_$AI(t,e=this,s,i){const o=this.strings;let n=!1;if(o===void 0)t=N(this,t,e,0),n=!H(t)||t!==this._$AH&&t!==O,n&&(this._$AH=t);else{const c=t;let a,d;for(t=o[0],a=0;a<o.length-1;a++)d=N(this,c[s+a],e,a),d===O&&(d=this._$AH[a]),n||=!H(d)||d!==this._$AH[a],d===p?t=p:t!==p&&(t+=(d??"")+o[a+1]),this._$AH[a]=d}n&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Rt extends K{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class Ut extends K{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Ht extends K{constructor(t,e,s,i,o){super(t,e,s,i,o),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??p)===O)return;const s=this._$AH,i=t===p&&s!==p||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==p&&(s===p||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Bt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const Ft=st.litHtmlPolyfillSupport;Ft?.(B,j),(st.litHtmlVersions??=[]).push("3.2.1");const jt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const o=e?.renderBefore??null;s._$litPart$=i=new j(t.insertBefore(U(),o),o,void 0,e??{})}return i._$AI(r),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=jt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return O}};f._$litElement$=!0,f.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:f});const zt=globalThis.litElementPolyfillSupport;zt?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const L=r=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(r,t)}):customElements.define(r,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Vt={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:et},Wt=(r=Vt,t,e)=>{const{kind:s,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,r),s==="accessor"){const{name:n}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(n,a,r)},init(c){return c!==void 0&&this.P(n,void 0,r),c}}}if(s==="setter"){const{name:n}=e;return function(c){const a=this[n];t.call(this,c),this.requestUpdate(n,a,r)}}throw Error("Unsupported decorator location: "+s)};function $(r){return(t,e)=>typeof e=="object"?Wt(r,t,e):((s,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(i,o):void 0})(r,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function g(r){return $({...r,state:!0,attribute:!1})}const M=tt`
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
`;class Jt{constructor(){this.tokenKey="auth_token"}getToken(){return localStorage.getItem(this.tokenKey)}setToken(t){localStorage.setItem(this.tokenKey,t)}clearToken(){localStorage.removeItem(this.tokenKey)}isAuthenticated(){const t=this.getToken();return t?JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now():!1}}const E=new Jt;var qt=Object.defineProperty,Xt=Object.getOwnPropertyDescriptor,T=(r,t,e,s)=>{for(var i=s>1?void 0:s?Xt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&qt(t,e,i),i};let w=class extends f{constructor(){super(...arguments),this.showInstallButton=!1,this.showInstallModal=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.showBackButton=!1,this.isLoginPage=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=r=>{r.preventDefault(),this.deferredPrompt=r,this.showInstallButton=!0},this.handleInstallClick=async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:r}=await this.deferredPrompt.userChoice;r==="accepted"&&(this.showInstallButton=!1)}else this.showInstallModal=!0},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}renderInstallModal(){return h`
            <div class="install-modal" @click="${()=>this.showInstallModal=!1}">
                <div class="modal-content" @click="${r=>r.stopPropagation()}">
                    <button class="close-button" @click="${()=>this.showInstallModal=!1}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                        </svg>
                    </button>

                    ${this.isIOS?h`
                        <h3>Добавить на экран "Домой"</h3>
                        <div class="instructions">
                            1. Нажмите на кнопку "Поделиться"<br>
                            2. Выберите 'На экран "Домой"'<br>
                            3. Нажмите "Добавить"
                        </div>
                    `:this.isAndroid?h`
                        <h3>Добавить на главный экран</h3>
                        <div class="instructions">
                            1. Откройте меню браузера (три точки)<br>
                            2. Выберите "Добавить на главный экран"<br>
                            3. Нажмите "Добавить"
                        </div>
                    `:h`
                        <h3>Сохранить в закладки</h3>
                        <div class="instructions">
                            Нажмите Ctrl+D чтобы добавить в закладки<br>
                            Или используйте меню браузера
                        </div>
                    `}
                </div>
            </div>
        `}render(){return h`
            <header>
                ${this.showBackButton?h`<button class="back-button" @click="${this.onBack}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" fill="white"/>
					</svg>
                </button>`:""}

                <div class="title">${this.title}</div>

                ${!this.isInStandaloneMode&&!this.isLoginPage&&(this.showInstallButton||!this.deferredPrompt)?h`
                    <button class="install-button" @click="${this.handleInstallClick}">
                        <svg class="install-icon" viewBox="0 0 24 24">
                            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
                        </svg>
                    </button>
                `:""}
            </header>

            ${this.showInstallModal?this.renderInstallModal():""}
        `}};w.styles=[tt`
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
    `,M];T([g()],w.prototype,"showInstallButton",2);T([g()],w.prototype,"showInstallModal",2);T([$({type:Boolean})],w.prototype,"showBackButton",2);T([$({type:Boolean})],w.prototype,"isLoginPage",2);T([$({type:Function})],w.prototype,"onBack",2);w=T([L("app-header")],w);class Zt{constructor(){this.baseUrl="https://api.example.com"}async login(t,e){return"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA"}async fetchTPOList(t){const e=Math.random()*2e3+1e3;await new Promise(i=>setTimeout(i,e));const s=Math.floor(Math.random()*10)+1;return Array.from({length:s},(i,o)=>({id:Math.random().toString(36).substring(2,9),amount:Math.floor(Math.random()*1e5)+1e3,date:new Date(Date.now()-Math.random()*31536e6).toISOString().split("T")[0],number:`ТПО-${Math.floor(Math.random()*1e6)}`}))}async fetchProtectedData(){const t=E.getToken();if(!t)throw new Error("Требуется авторизация");const e=await fetch(`${this.baseUrl}/protected`,{headers:{Authorization:`Bearer ${t}`}});if(!e.ok)throw new Error("Ошибка запроса");return e.json()}}const yt=new Zt;var Kt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor,k=(r,t,e,s)=>{for(var i=s>1?void 0:s?Qt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Kt(t,e,i),i};let v=class extends f{constructor(){super(...arguments),this.tpoCards=[],this.fio="",this.passportSeriesNumber="",this.isFormValid=!1,this.error="",this.isLoading=!1,this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleSearchTPO(){if(!this.isLoading){this.isLoading=!0,this.tpoCards=[],this.error="";try{const r=await yt.fetchTPOList({fio:this.fio.trim(),passportSeriesNumber:this.passportSeriesNumber});this.tpoCards=r}catch{this.error="Ошибка поиска"}finally{this.clearForm(),this.isLoading=!1}}}clearForm(){this.fio="",this.passportSeriesNumber="",this.validateForm()}validateForm(){const r=this.fioRegex.test(this.fio),t=this.passportSeriesNumberRegex.test(this.passportSeriesNumber);this.isFormValid=r&&t}handleFioInput(r){this.fio=r.target.value;const t=r.target,e=t.selectionStart;let s=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=s,requestAnimationFrame(()=>{if(e){const i=this.calculateNewCursorPosition(e,t.value,s);t.setSelectionRange(i,i)}}),this.validateForm(),t.value=this.fio}handlePassportSeriesNumberInput(r){const t=r.target,e=t.selectionStart;let s=t.value.replace(/[^\d]/g,""),i="";s.length>0&&(i=s.slice(0,4),s.length>4&&(i+=" "+s.slice(4,10))),this.passportSeriesNumber=i,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(r,t,e){const s=e.length-t.length;return r+s}generateLink(r){const t=Math.random().toString(36).substring(2,8),e=this.tpoCards.map(s=>s.id===r.id?{...s,link:`${window.location.origin}/payment/${t}`}:s);this.tpoCards=e}async shareLink(r){try{navigator.share?await navigator.share({title:"Ссылка на платеж ТПО",text:"Ссылка для оплаты ТПО:",url:r}):(await navigator.clipboard.writeText(r),alert("Ссылка скопирована в буфер обмена!"))}catch(t){console.error("Ошибка при попытке поделиться:",t)}}render(){return h`
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
                ?disabled="${!this.isFormValid||this.isLoading}"
                @click="${()=>this.handleSearchTPO()}"
            >
                ${this.isLoading?"Поиск...":"Поиск"}
            </button>
            ${this.error?h`<div class="error-container"><div class="error">${this.error}</div></div>`:""}

            ${this.isLoading?h`
                <div class="loading-overlay">
                  <div class="spinner"></div>
                </div>
              `:""}

            <div class="search-results">
                ${this.tpoCards.map(r=>h`
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

                    ${r.link?h`
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
        `}};v.styles=[tt`
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
      `,M];k([g()],v.prototype,"tpoCards",2);k([g()],v.prototype,"fio",2);k([g()],v.prototype,"passportSeriesNumber",2);k([g()],v.prototype,"isFormValid",2);k([g()],v.prototype,"error",2);k([g()],v.prototype,"isLoading",2);v=k([L("search-tpo")],v);var Gt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,I=(r,t,e,s)=>{for(var i=s>1?void 0:s?Yt(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&Gt(t,e,i),i};let b=class extends f{constructor(){super(...arguments),this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.isFormValid=!1,this.generatedLink="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.innRegex=/^\d{12}$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}generateRandomLink(){const r=Math.random().toString(36).substring(2,8);this.generatedLink=`${window.location.origin}/payment/${r}`}validateForm(){const r=this.fioRegex.test(this.fio),t=this.innRegex.test(this.inn),e=this.passportSeriesNumberRegex.test(this.passportSeriesNumber),s=this.validatePassportIssueDate(this.passportIssueDate);this.isFormValid=r&&t&&e&&s}validatePassportIssueDate(r){return r?new Date(r)<=new Date:!1}handleFioInput(r){this.fio=r.target.value;const t=r.target,e=t.selectionStart;let s=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=s,requestAnimationFrame(()=>{if(e){const i=this.calculateNewCursorPosition(e,t.value,s);t.setSelectionRange(i,i)}}),this.validateForm(),t.value=this.fio}handleInnInput(r){this.inn=r.target.value.replace(/\D/g,"");const t=r.target,e=t.selectionStart;let s=t.value.replace(/[^\d]/g,""),i="";s.length>0&&(i=s.slice(0,12)),this.inn=i,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.inn}handlePassportSeriesNumberInput(r){const t=r.target,e=t.selectionStart;let s=t.value.replace(/[^\d]/g,""),i="";s.length>0&&(i=s.slice(0,4),s.length>4&&(i+=" "+s.slice(4,10))),this.passportSeriesNumber=i,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(r,t,e){const s=e.length-t.length;return r+s}handlePassportIssueDateInput(r){this.passportIssueDate=r.target.value,this.validateForm()}async shareLink(){try{navigator.share?await navigator.share({title:"Авансовый платеж",text:"Ссылка для авансового платежа:",url:this.generatedLink}):(await navigator.clipboard.writeText(this.generatedLink),alert("Ссылка скопирована в буфер обмена!"))}catch(r){console.error("Ошибка при попытке поделиться:",r)}}render(){return h`
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

            ${this.generatedLink?h`
                <div class="link-container">
                    <div class="link-field">${this.generatedLink}</div>
                    <button class="share-button" @click=${this.shareLink}>
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
            `:""}
        `}};b.styles=[M];I([g()],b.prototype,"fio",2);I([g()],b.prototype,"inn",2);I([g()],b.prototype,"passportSeriesNumber",2);I([g()],b.prototype,"passportIssueDate",2);I([g()],b.prototype,"isFormValid",2);I([$({type:String})],b.prototype,"generatedLink",2);b=I([L("advance-payment")],b);var te=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,_t=(r,t,e,s)=>{for(var i=s>1?void 0:s?ee(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&te(t,e,i),i};let X=class extends f{constructor(){super(...arguments),this.payments=[{id:1,amount:1e3,date:"2023-10-01"},{id:2,amount:1500,date:"2023-10-05"},{id:3,amount:2e3,date:"2023-10-10"}]}render(){return h`
            <ul>
                ${this.payments.map(r=>h`
                    <li>${r.date} - ${r.amount} руб.</li>
                `)}
            </ul>
        `}};X.styles=[M];_t([$({type:Array})],X.prototype,"payments",2);X=_t([L("payment-history")],X);var se=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,z=(r,t,e,s)=>{for(var i=s>1?void 0:s?ie(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&se(t,e,i),i};let A=class extends f{constructor(){super(...arguments),this.login="",this.password="",this.error="",this.onSuccessLogin=()=>{}}async handleLogin(){try{const r=await yt.login(this.login,this.password);E.setToken(r),this.onSuccessLogin()}catch{this.error="Ошибка авторизации"}}render(){return E.isAuthenticated()&&this.onSuccessLogin(),h`
            <input type="text" .value="${this.login}" @input="${r=>this.login=r.target.value}" placeholder="Логин">
            <input type="password" .value="${this.password}" @input="${r=>this.password=r.target.value}" placeholder="Пароль">
            <button class="action-button" @click="${this.handleLogin}">Войти</button>
            ${this.error?h`<div class="error">${this.error}</div>`:""}
        `}};A.styles=[M];z([g()],A.prototype,"login",2);z([g()],A.prototype,"password",2);z([g()],A.prototype,"error",2);z([$({type:Function})],A.prototype,"onSuccessLogin",2);A=z([L("login-page")],A);var re=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,rt=(r,t,e,s)=>{for(var i=s>1?void 0:s?oe(t,e):t,o=r.length-1,n;o>=0;o--)(n=r[o])&&(i=(s?n(t,e,i):n(i))||i);return s&&i&&re(t,e,i),i};let F=class extends f{constructor(){super(...arguments),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.currentPage=window.location.pathname,this.showBackButton=!1,this.handlePopState=()=>{const r=window.location.pathname,t=this.basePath,e=r.startsWith(t)?r.slice(t.length).replace(/^\//,""):r.replace(/^\//,"");this.currentPage=e||"",this.checkAuth(),this.requestUpdate()}}get basePath(){return"/test-pwa/"}checkAuth(){!E.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page")}async registerServiceWorker(){if("serviceWorker"in navigator)try{const r=await navigator.serviceWorker.register(`${this.basePath}sw.js`,{scope:this.basePath});console.log("ServiceWorker registration successful with scope:",r.scope)}catch(r){console.error("ServiceWorker registration failed:",r)}}connectedCallback(){super.connectedCallback(),this.registerServiceWorker(),this.handlePopState(),this.setupBackButtonHandler(),window.addEventListener("popstate",this.handlePopState),this.checkAuth()}isHomePage(){return this.currentPage==""||this.currentPage=="/"||this.currentPage=="login-page"||this.currentPage==this.basePath}setupBackButtonHandler(){window.onpopstate=r=>this.isInStandaloneMode&&this.isHomePage()?(r.preventDefault(),this.handleExit(),!1):!0}handleExit(){this.isInStandaloneMode?window.navigator.app.exitApp():(window.close(),window.stop())}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("popstate",this.handlePopState)}navigateTo(r){history.pushState({},"",`${this.basePath}${r}`),this.currentPage=r,this.requestUpdate()}logout(){E.clearToken(),this.navigateTo("login-page")}getPageTitle(){switch(this.currentPage){case"login-page":return"Авторизация";case"search-tpo":return"Поиск квитанции по реквизитам";case"advance-payment":return"Авансовый платеж";case"payment-history":return"История платежей";default:return"Меню"}}renderPage(){switch(!E.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page"),this.currentPage){case"search-tpo":return h`<search-tpo></search-tpo>`;case"advance-payment":return h`<advance-payment></advance-payment>`;case"payment-history":return h`<payment-history></payment-history>`;case"login-page":return this.renderLoginPage();default:return this.renderHome()}}renderLoginPage(){return h`<login-page
            .onSuccessLogin="${()=>this.navigateTo("")}"
        ></login-page>`}renderHome(){return h`
            <button class="action-button" @click="${()=>this.navigateTo("search-tpo")}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${()=>this.navigateTo("advance-payment")}">Авансовый платеж</button>
            <button class="action-button" @click="${()=>this.navigateTo("payment-history")}">История платежей</button>
            <button class="action-button" @click="${()=>this.logout()}">Смена пользователя</button>
        `}render(){return h`
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
        `}};F.styles=[M];rt([$({type:String})],F.prototype,"currentPage",2);rt([$({type:Boolean})],F.prototype,"showBackButton",2);F=rt([L("app-home")],F);
//# sourceMappingURL=index-BP4_DoW-.js.map
