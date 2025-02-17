(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=globalThis,ht=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ct=Symbol(),mt=new WeakMap;let Et=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==ct)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ht&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=mt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&mt.set(e,t))}return t}toString(){return this.cssText}};const Rt=s=>new Et(typeof s=="string"?s:s+"",void 0,ct),L=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((r,i,n)=>r+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[n+1],s[0]);return new Et(e,s,ct)},Ut=(s,t)=>{if(ht)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),i=G.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=e.cssText,s.appendChild(r)}},vt=ht?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return Rt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Bt,defineProperty:zt,getOwnPropertyDescriptor:Vt,getOwnPropertyNames:Ft,getOwnPropertySymbols:jt,getPrototypeOf:Wt}=Object,st=globalThis,$t=st.trustedTypes,qt=$t?$t.emptyScript:"",Jt=st.reactiveElementPolyfillSupport,R=(s,t)=>s,Q={toAttribute(s,t){switch(t){case Boolean:s=s?qt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},dt=(s,t)=>!Bt(s,t),bt={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:dt};Symbol.metadata??=Symbol("metadata"),st.litPropertyMetadata??=new WeakMap;let T=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=bt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,e);i!==void 0&&zt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,r){const{get:i,set:n}=Vt(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i?.call(this)},set(o){const h=i?.call(this);n.call(this,o),this.requestUpdate(t,h,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??bt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;const t=Wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){const e=this.properties,r=[...Ft(e),...jt(e)];for(const i of r)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,i]of e)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const i=this._$Eu(e,r);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)e.unshift(vt(i))}else t!==void 0&&e.push(vt(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ut(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EC(t,e){const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const n=(r.converter?.toAttribute!==void 0?r.converter:Q).toAttribute(e,r.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=r.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Q;this._$Em=i,this[i]=o.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??dt)(this[t],e))return;this.P(t,e,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,n]of r)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};T.elementStyles=[],T.shadowRootOptions={mode:"open"},T[R("elementProperties")]=new Map,T[R("finalized")]=new Map,Jt?.({ReactiveElement:T}),(st.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pt=globalThis,tt=pt.trustedTypes,yt=tt?tt.createPolicy("lit-html",{createHTML:s=>s}):void 0,It="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Ot="?"+w,Zt=`<${Ot}>`,C=document,z=()=>C.createComment(""),V=s=>s===null||typeof s!="object"&&typeof s!="function",ut=Array.isArray,Xt=s=>ut(s)||typeof s?.[Symbol.iterator]=="function",ot=`[ 	
\f\r]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,wt=/-->/g,_t=/>/g,A=RegExp(`>|${ot}(?:([^\\s"'>=/]+)(${ot}*=${ot}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xt=/'/g,Pt=/"/g,Nt=/^(?:script|style|textarea|title)$/i,Lt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),l=Lt(1),Y=Lt(2),_=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),At=new WeakMap,S=C.createTreeWalker(C,129);function Mt(s,t){if(!ut(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return yt!==void 0?yt.createHTML(t):t}const Kt=(s,t)=>{const e=s.length-1,r=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=D;for(let h=0;h<e;h++){const a=s[h];let u,d,c=-1,$=0;for(;$<a.length&&(o.lastIndex=$,d=o.exec(a),d!==null);)$=o.lastIndex,o===D?d[1]==="!--"?o=wt:d[1]!==void 0?o=_t:d[2]!==void 0?(Nt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=A):d[3]!==void 0&&(o=A):o===A?d[0]===">"?(o=i??D,c=-1):d[1]===void 0?c=-2:(c=o.lastIndex-d[2].length,u=d[1],o=d[3]===void 0?A:d[3]==='"'?Pt:xt):o===Pt||o===xt?o=A:o===wt||o===_t?o=D:(o=A,i=void 0);const y=o===A&&s[h+1].startsWith("/>")?" ":"";n+=o===D?a+Zt:c>=0?(r.push(u),a.slice(0,c)+It+a.slice(c)+w+y):a+w+(c===-2?h:y)}return[Mt(s,n+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),r]};class F{constructor({strings:t,_$litType$:e},r){let i;this.parts=[];let n=0,o=0;const h=t.length-1,a=this.parts,[u,d]=Kt(t,e);if(this.el=F.createElement(u,r),S.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=S.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(It)){const $=d[o++],y=i.getAttribute(c).split(w),K=/([.?@])?(.*)/.exec($);a.push({type:1,index:n,name:K[2],strings:y,ctor:K[1]==="."?Gt:K[1]==="?"?Qt:K[1]==="@"?te:it}),i.removeAttribute(c)}else c.startsWith(w)&&(a.push({type:6,index:n}),i.removeAttribute(c));if(Nt.test(i.tagName)){const c=i.textContent.split(w),$=c.length-1;if($>0){i.textContent=tt?tt.emptyScript:"";for(let y=0;y<$;y++)i.append(c[y],z()),S.nextNode(),a.push({type:2,index:++n});i.append(c[$],z())}}}else if(i.nodeType===8)if(i.data===Ot)a.push({type:2,index:n});else{let c=-1;for(;(c=i.data.indexOf(w,c+1))!==-1;)a.push({type:7,index:n}),c+=w.length-1}n++}}static createElement(t,e){const r=C.createElement("template");return r.innerHTML=t,r}}function H(s,t,e=s,r){if(t===_)return t;let i=r!==void 0?e._$Co?.[r]:e._$Cl;const n=V(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(s),i._$AT(s,e,r)),r!==void 0?(e._$Co??=[])[r]=i:e._$Cl=i),i!==void 0&&(t=H(s,i._$AS(s,t.values),i,r)),t}class Yt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,i=(t?.creationScope??C).importNode(e,!0);S.currentNode=i;let n=S.nextNode(),o=0,h=0,a=r[0];for(;a!==void 0;){if(o===a.index){let u;a.type===2?u=new q(n,n.nextSibling,this,t):a.type===1?u=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(u=new ee(n,this,t)),this._$AV.push(u),a=r[++h]}o!==a?.index&&(n=S.nextNode(),o++)}return S.currentNode=C,i}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class q{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,r,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=H(this,t,e),V(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&V(this._$AH)?this._$AA.nextSibling.data=t:this.T(C.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=F.createElement(Mt(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new Yt(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=At.get(t.strings);return e===void 0&&At.set(t.strings,e=new F(t)),e}k(t){ut(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,i=0;for(const n of t)i===e.length?e.push(r=new q(this.O(z()),this.O(z()),this,this.options)):r=e[i],r._$AI(n),i++;i<e.length&&(this._$AR(r&&r._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class it{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,i,n){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,e=this,r,i){const n=this.strings;let o=!1;if(n===void 0)t=H(this,t,e,0),o=!V(t)||t!==this._$AH&&t!==_,o&&(this._$AH=t);else{const h=t;let a,u;for(t=n[0],a=0;a<n.length-1;a++)u=H(this,h[r+a],e,a),u===_&&(u=this._$AH[a]),o||=!V(u)||u!==this._$AH[a],u===g?t=g:t!==g&&(t+=(u??"")+n[a+1]),this._$AH[a]=u}o&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Gt extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class Qt extends it{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class te extends it{constructor(t,e,r,i,n){super(t,e,r,i,n),this.type=5}_$AI(t,e=this){if((t=H(this,t,e,0)??g)===_)return;const r=this._$AH,i=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,n=t!==g&&(r===g||i);i&&this.element.removeEventListener(this.name,this,r),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ee{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){H(this,t)}}const se=pt.litHtmlPolyfillSupport;se?.(F,q),(pt.litHtmlVersions??=[]).push("3.2.1");const ie=(s,t,e)=>{const r=e?.renderBefore??t;let i=r._$litPart$;if(i===void 0){const n=e?.renderBefore??null;r._$litPart$=i=new q(t.insertBefore(z(),n),n,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let f=class extends T{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ie(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}};f._$litElement$=!0,f.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:f});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:f});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ne={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:dt},oe=(s=ne,t,e)=>{const{kind:r,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),n.set(e.name,s),r==="accessor"){const{name:o}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(o,a,s)},init(h){return h!==void 0&&this.P(o,void 0,s),h}}}if(r==="setter"){const{name:o}=e;return function(h){const a=this[o];t.call(this,h),this.requestUpdate(o,a,s)}}throw Error("Unsupported decorator location: "+r)};function x(s){return(t,e)=>typeof e=="object"?oe(s,t,e):((r,i,n)=>{const o=i.hasOwnProperty(n);return i.constructor.createProperty(n,o?{...r,wrapped:!0}:r),o?Object.getOwnPropertyDescriptor(i,n):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(s){return x({...s,state:!0,attribute:!1})}class ae{constructor(){this.tokenKey="auth_token"}getToken(){return localStorage.getItem(this.tokenKey)}setToken(t){localStorage.setItem(this.tokenKey,t)}clearToken(){localStorage.removeItem(this.tokenKey)}isAuthenticated(){const t=this.getToken();return t?JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now():!1}logout(){this.clearToken(),window.dispatchEvent(new CustomEvent("navigateto",{detail:"login-page"}))}}const U=new ae;var le=Object.defineProperty,he=Object.getOwnPropertyDescriptor,rt=(s,t,e,r)=>{for(var i=r>1?void 0:r?he(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&le(t,e,i),i};let k=class extends f{constructor(){super(...arguments),this.message="",this.type="info",this.visible=!1}show(s,t="info",e=3e3){this.message=s,this.type=t,this.visible=!0,this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.hide()},e)}hide(){this.visible=!1}render(){return l`
            <div class="popup-notification ${this.type} ${this.visible?"popup-notification-visible":"popup-notification-hidden"}">
                <svg class="icon" viewBox="0 0 24 24">
                    ${this.renderIcon()}
                </svg>
                ${this.message}
            </div>
        `}renderIcon(){switch(this.type){case"success":return Y`<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>`;case"error":return Y`<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm4.242,14.829a1,1,0,0,1,0,1.414,1.026,1.026,0,0,1-1.414,0L12,13.414,9.172,16.243a1.01,1.01,0,0,1-1.414,0,1,1,0,0,1,0-1.414L10.586,12,7.758,9.171A1,1,0,1,1,9.172,7.757L12,10.586l2.828-2.829a1,1,0,1,1,1.414,1.414L13.414,12Z"></path>`;case"warning":return Y`<path d="M12 2L1 21H23M12 6L19.53 19H4.47M11 10V14H13V10M11 16V18H13V16"/>`;default:return Y`<path d="M11 7H13V9H11V7M11 11H13V17H11V11M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>`}}};k.styles=L`
        :host {
            position: fixed;
            left: 0;
            right: 0;
            bottom: 20px; /* Отступ от низа экрана */
            z-index: 9000;
            display: flex;
            justify-content: center;
            pointer-events: none;
            font-family: 'Roboto', sans-serif;
        }

        .popup-notification {
            padding: 12px 24px;
            border-radius: 28px;
            background-color: #6200ee;
            color: white;
            font-size: 14px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            pointer-events: auto;
        }

        .popup-notification-hidden {
            transform: translateY(calc(100% + 20px)); /* Уезжает за пределы экрана + отступ */
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
            fill:rgb(255, 255, 255) !important;
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
    `;rt([p()],k.prototype,"message",2);rt([p()],k.prototype,"type",2);rt([p()],k.prototype,"visible",2);k=rt([b("popup-notification")],k);const ce=new k;class Tt{static{this.instance=null}static initialize(){this.instance||(this.instance=ce,document.body.appendChild(this.instance))}static show(t,e,r){this.initialize(),this.instance.show(t,e,r)}static hide(){this.instance&&this.instance.hide()}}var de=Object.defineProperty,pe=Object.getOwnPropertyDescriptor,Ht=(s,t,e,r)=>{for(var i=r>1?void 0:r?pe(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&de(t,e,i),i};let j=class extends f{constructor(){super(...arguments),this.visible=!1}show(){this.visible=!0}hide(){this.visible=!1}isVisible(){return this.visible}render(){return this.visible?l`
            <div class="loading-overlay">
                <div class="spinner"></div>
            </div>
        `:l``}};j.styles=L`
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
    `;Ht([p()],j.prototype,"visible",2);j=Ht([b("loading-overlay")],j);const ue=new j;class m{static{this.instance=null}static initialize(){this.instance||(this.instance=ue,document.body.appendChild(this.instance))}static show(){this.initialize(),this.instance.show()}static hide(){this.instance&&this.instance.hide()}static isVisible(){return this.instance?this.instance.isVisible():!1}}const M=L`
    :host {
        display: block;
        font-family: 'Roboto', sans-serif;
    }

    main {
        padding: 1rem;
        padding-top: 100px; /* Высота header + отступ */
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
`;var ge=Object.defineProperty,fe=Object.getOwnPropertyDescriptor,nt=(s,t,e,r)=>{for(var i=r>1?void 0:r?fe(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&ge(t,e,i),i};let E=class extends f{constructor(){super(...arguments),this.heading="",this.message="",this.visible=!1}show(s,t){this.heading=s,this.message=t,this.visible=!0}hide(){this.visible=!1,this.heading="",this.message=""}render(){return this.visible?l`
            <div class="modal" @click="${this.hide}">
                <div class="modal-content" @click="${s=>s.stopPropagation()}">
                    <button class="modal-close-button" @click="${()=>this.visible=!1}">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M18 6L6 18M6 6l12 12" stroke-width="2"/>
                        </svg>
                    </button>

                    <h3>${this.heading}</h3>
                    <div class="modal-text">${this.message}</div>
                </div>
            </div>
        `:l``}};E.styles=[M,L`
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
        }

        .modal-content {
            background: white;
            padding: 24px;
            border-radius: 12px;
            max-width: 400px;
            width: 90%;
            position: relative;
        }

        .modal-close-button {
            position: absolute;
            top: 12px;
            right: 12px;
            background: none;
            border: none;
            cursor: pointer;
            padding: 4px;
        }

        .modal-text {
            margin: 16px 0;
            line-height: 1.5;
            white-space: pre-line;
        }
    `];nt([p()],E.prototype,"heading",2);nt([p()],E.prototype,"message",2);nt([p()],E.prototype,"visible",2);E=nt([b("modal-window")],E);const me=new E;class at{static{this.instance=null}static initialize(){this.instance||(this.instance=me,document.body.appendChild(this.instance))}static show(t,e){this.initialize(),this.instance.show(t,e)}static hide(){this.instance&&this.instance.hide()}}var ve=Object.defineProperty,$e=Object.getOwnPropertyDescriptor,J=(s,t,e,r)=>{for(var i=r>1?void 0:r?$e(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&ve(t,e,i),i};let I=class extends f{constructor(){super(...arguments),this.showInstallButton=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.showBackButton=!1,this.isLoginPage=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=s=>{s.preventDefault(),this.deferredPrompt=s,this.showInstallButton=!0},this.handleInstallClick=async()=>{if(this.deferredPrompt){this.deferredPrompt.prompt();const{outcome:s}=await this.deferredPrompt.userChoice;s==="accepted"&&(this.showInstallButton=!1)}else this.showInstallModal()},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}showInstallModal(){this.isIOS?at.show('Добавить на экран "Домой"',`Нажмите Ctrl+D чтобы добавить в закладки
1. Нажмите на кнопку "Поделиться"
2. Выберите "Добавить на экран "Домой""
3. Нажмите "Добавить"`):this.isAndroid?at.show("Добавить на главный экран",`1. Откройте меню браузера (три точки)
2. Выберите "Добавить на главный экран"
3. Нажмите "Добавить"`):at.show("Добавить на главный экран",`Нажмите Ctrl+D чтобы добавить в закладки
Или используйте меню браузера`)}render(){return l`
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
        `}};I.styles=[L`
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
            height: 48px; /* Увеличиваем высоту для лучшего отображения */
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
    `,M];J([p()],I.prototype,"showInstallButton",2);J([x({type:Boolean})],I.prototype,"showBackButton",2);J([x({type:Boolean})],I.prototype,"isLoginPage",2);J([x({type:Function})],I.prototype,"onBack",2);I=J([b("app-header")],I);class be{constructor(){this.baseUrl="https://api.example.com"}async login(t,e){return"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA"}async fetchPaymentHistory(){const t=Math.random()*2e3+1e3;return await new Promise(e=>setTimeout(e,t)),[{id:"1",amount:1e3,date:"2023-10-01",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"2",amount:1500,date:"2023-10-05",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"3",amount:2e3,date:"2023-10-10",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"}]}async fetchTPOList(t,e){const r=Math.random()*2e3+1e3;await new Promise(n=>setTimeout(n,r));const i=Math.floor(Math.random()*10)+1;return Array.from({length:i},(n,o)=>({id:Math.random().toString(36).substring(2,9),amount:Math.floor(Math.random()*1e5)+1e3,date:new Date(Date.now()-Math.random()*31536e6).toISOString().split("T")[0],number:`ТПО-${Math.floor(Math.random()*1e6)}`}))}}const gt=new be;var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,Z=(s,t,e,r)=>{for(var i=r>1?void 0:r?we(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&ye(t,e,i),i};let O=class extends f{constructor(){super(...arguments),this.tpos=[],this.fio="",this.passportSeriesNumber="",this.isFormValid=!1,this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleSearchTPO(){m.show(),this.tpos=[];try{const s=await gt.fetchTPOList(this.fio.trim(),this.passportSeriesNumber);this.tpos=s}catch{Tt.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}finally{this.clearForm(),m.hide()}}clearForm(){this.fio="",this.passportSeriesNumber="",this.validateForm()}validateForm(){const s=this.fioRegex.test(this.fio),t=this.passportSeriesNumberRegex.test(this.passportSeriesNumber);this.isFormValid=s&&t}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let r=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=r,requestAnimationFrame(()=>{if(e){const i=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(i,i)}}),this.validateForm(),t.value=this.fio}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let r=t.value.replace(/[^\d]/g,""),i="";r.length>0&&(i=r.slice(0,4),r.length>4&&(i+=" "+r.slice(4,10))),this.passportSeriesNumber=i,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const r=e.length-t.length;return s+r}async generateLink(s){m.show();const t=Math.random()*2e3+1e3;await new Promise(i=>setTimeout(i,t));const e=Math.random().toString(36).substring(2,8),r=this.tpos.map(i=>i.id===s.id?{...i,link:`${window.location.origin}/payment/${e}`}:i);this.tpos=r,m.hide()}async shareLink(s){try{navigator.share?await navigator.share({title:"Ссылка на платеж ТПО",text:"Ссылка для оплаты ТПО:",url:s}):(await navigator.clipboard.writeText(s),alert("Ссылка скопирована в буфер обмена!"))}catch(t){console.error("Ошибка при попытке поделиться:",t)}}render(){return l`
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
        `}};O.styles=[L`
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
      `,M];Z([p()],O.prototype,"tpos",2);Z([p()],O.prototype,"fio",2);Z([p()],O.prototype,"passportSeriesNumber",2);Z([p()],O.prototype,"isFormValid",2);O=Z([b("search-tpo")],O);function St(s){return!0}var _e=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,P=(s,t,e,r)=>{for(var i=r>1?void 0:r?xe(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&_e(t,e,i),i};let v=class extends f{constructor(){super(...arguments),this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.isFormValid=!1,this.error="",this.generatedLink="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.innRegex=/^\d{12}$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleGenerateLink(){m.show(),this.generatedLink="",this.error="";try{const s=Math.random()*2e3+1e3;await new Promise(t=>setTimeout(t,s)),this.generateRandomLink()}catch{this.error="Ошибка создания ссылки"}finally{this.clearForm(),m.hide()}}clearForm(){this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.validateForm()}generateRandomLink(){const s=Math.random().toString(36).substring(2,8);this.generatedLink=`${window.location.origin}/payment/${s}`}validateForm(){const s=this.fioRegex.test(this.fio),t=this.innRegex.test(this.inn)&&St(this.inn),e=this.passportSeriesNumberRegex.test(this.passportSeriesNumber),r=this.validatePassportIssueDate(this.passportIssueDate);this.isFormValid=s&&t&&e&&r}validatePassportIssueDate(s){return s?new Date(s)<=new Date:!1}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let r=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=r,requestAnimationFrame(()=>{if(e){const i=this.calculateNewCursorPosition(e,t.value,r);t.setSelectionRange(i,i)}}),this.validateForm(),t.value=this.fio}handleInnInput(s){this.inn=s.target.value.replace(/\D/g,"");const t=s.target,e=t.selectionStart;let r=t.value.replace(/[^\d]/g,""),i="";r.length>0&&(i=r.slice(0,12)),this.inn=i,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.inn}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let r=t.value.replace(/[^\d]/g,""),i="";r.length>0&&(i=r.slice(0,4),r.length>4&&(i+=" "+r.slice(4,10))),this.passportSeriesNumber=i,requestAnimationFrame(()=>{if(e){const n=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(n,n)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const r=e.length-t.length;return s+r}handlePassportIssueDateInput(s){this.passportIssueDate=s.target.value,this.validateForm()}async shareLink(){try{navigator.share?await navigator.share({title:"Авансовый платеж",text:"Ссылка для авансового платежа:",url:this.generatedLink}):(await navigator.clipboard.writeText(this.generatedLink),alert("Ссылка скопирована в буфер обмена!"))}catch(s){console.error("Ошибка при попытке поделиться:",s)}}render(){return l`
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
                    class="${(!this.innRegex.test(this.inn)||!St(this.inn))&&this.inn?"invalid":""}"
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
        `}};v.styles=[M];P([p()],v.prototype,"fio",2);P([p()],v.prototype,"inn",2);P([p()],v.prototype,"passportSeriesNumber",2);P([p()],v.prototype,"passportIssueDate",2);P([p()],v.prototype,"isFormValid",2);P([p()],v.prototype,"error",2);P([x({type:String})],v.prototype,"generatedLink",2);v=P([b("advance-payment")],v);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pe=s=>s===null||typeof s!="object"&&typeof s!="function",Ae=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Se={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ce=s=>(...t)=>({_$litDirective$:s,values:t});let ke=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this._$Ct=t,this._$AM=e,this._$Ci=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const r of e)r._$AO?.(t,!1),B(r,t);return!0},et=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Dt=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Oe(t)}};function Ee(s){this._$AN!==void 0?(et(this),this._$AM=s,Dt(this)):this._$AM=s}function Ie(s,t=!1,e=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let n=e;n<r.length;n++)B(r[n],!1),et(r[n]);else r!=null&&(B(r,!1),et(r));else B(this,s)}const Oe=s=>{s.type==Se.CHILD&&(s._$AP??=Ie,s._$AQ??=Ee)};class Ne extends ke{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,r){super._$AT(t,e,r),Dt(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(B(this,t),et(this))}setValue(t){if(Ae(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Le{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class Me{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=s=>!Pe(s)&&typeof s.then=="function",kt=1073741823;class Te extends Ne{constructor(){super(...arguments),this._$Cwt=kt,this._$Cbt=[],this._$CK=new Le(this),this._$CX=new Me}render(...t){return t.find(e=>!Ct(e))??_}update(t,e){const r=this._$Cbt;let i=r.length;this._$Cbt=e;const n=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<e.length&&!(h>this._$Cwt);h++){const a=e[h];if(!Ct(a))return this._$Cwt=h,a;h<i&&a===r[h]||(this._$Cwt=kt,i=0,Promise.resolve(a).then(async u=>{for(;o.get();)await o.get();const d=n.deref();if(d!==void 0){const c=d._$Cbt.indexOf(a);c>-1&&c<d._$Cwt&&(d._$Cwt=c,d.setValue(u))}}))}return _}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const He=Ce(Te);var De=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ue=(s,t,e,r)=>{for(var i=r>1?void 0:r?Re(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&De(t,e,i),i};let lt=class extends f{async shareLink(s){try{navigator.share?await navigator.share({title:"Ссылка на платеж",text:"Ссылка для оплаты:",url:s}):(await navigator.clipboard.writeText(s),alert("Ссылка скопирована в буфер обмена!"))}catch(t){console.error("Ошибка при попытке поделиться:",t)}}async renderPaymentLinks(){m.show();const s=await gt.fetchPaymentHistory(),t=l`${s.map(e=>this.renderPaymentLinkCard(e))}`;return m.hide(),t}renderPaymentLinkCard(s){return l`
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
                ${He(this.renderPaymentLinks(),l``)}
            </div>`}};lt.styles=[L`
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
        `,M];lt=Ue([b("payment-history")],lt);var Be=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,X=(s,t,e,r)=>{for(var i=r>1?void 0:r?ze(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Be(t,e,i),i};let N=class extends f{constructor(){super(...arguments),this.login="",this.password="",this.error="",this.onSuccessLogin=()=>{}}async handleLogin(){try{const s=await gt.login(this.login,this.password);U.setToken(s),this.onSuccessLogin()}catch{this.error="Ошибка авторизации"}}render(){return U.isAuthenticated()&&this.onSuccessLogin(),l`
            <input type="text" .value="${this.login}" @input="${s=>this.login=s.target.value}" placeholder="Логин">
            <input type="password" .value="${this.password}" @input="${s=>this.password=s.target.value}" placeholder="Пароль">
            <button class="action-button" @click="${this.handleLogin}">Войти</button>
            ${this.error?l`<div class="error">${this.error}</div>`:""}
        `}};N.styles=[M];X([p()],N.prototype,"login",2);X([p()],N.prototype,"password",2);X([p()],N.prototype,"error",2);X([x({type:Function})],N.prototype,"onSuccessLogin",2);N=X([b("login-page")],N);var Ve=Object.defineProperty,Fe=Object.getOwnPropertyDescriptor,ft=(s,t,e,r)=>{for(var i=r>1?void 0:r?Fe(t,e):t,n=s.length-1,o;n>=0;n--)(o=s[n])&&(i=(r?o(t,e,i):o(i))||i);return r&&i&&Ve(t,e,i),i};let W=class extends f{constructor(){super(...arguments),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.currentPage=window.location.pathname,this.showBackButton=!1,this.handlePopState=()=>{const s=window.location.pathname,t=this.basePath,e=s.startsWith(t)?s.slice(t.length).replace(/^\//,""):s.replace(/^\//,"");this.currentPage=e||"",this.checkAuth(),this.requestUpdate()},this.handleNavigateTo=s=>{this.navigateTo(s.detail??"")}}get basePath(){return"/test-pwa/"}checkAuth(){!U.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page")}async registerServiceWorker(){if("serviceWorker"in navigator)try{const s=await navigator.serviceWorker.register(`${this.basePath}sw.js`,{scope:this.basePath});console.log("ServiceWorker registration successful with scope:",s.scope)}catch(s){console.error("ServiceWorker registration failed:",s)}}connectedCallback(){super.connectedCallback(),this.registerServiceWorker(),Tt.initialize(),m.initialize(),this.handlePopState(),window.addEventListener("navigateto",this.handleNavigateTo),this.setupBackButtonHandler(),window.addEventListener("popstate",this.handlePopState),this.checkAuth()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("navigateto",this.handleNavigateTo),window.removeEventListener("popstate",this.handlePopState)}isHomePage(){return this.currentPage==""||this.currentPage=="/"||this.currentPage=="login-page"||this.currentPage==this.basePath}setupBackButtonHandler(){window.onpopstate=s=>{if(this.isInStandaloneMode){if(m.isVisible())return s.preventDefault(),!1;if(this.isHomePage())return s.preventDefault(),this.handleExit(),!1}return!0}}handleExit(){this.isInStandaloneMode?window.navigator.app.exitApp():(window.close(),window.stop())}navigateTo(s){history.pushState({},"",`${this.basePath}${s}`),this.currentPage=s,this.requestUpdate()}getPageTitle(){switch(this.currentPage){case"login-page":return"Авторизация";case"search-tpo":return"Поиск квитанции по реквизитам";case"advance-payment":return"Авансовый платеж";case"payment-history":return"История платежей";default:return"Меню"}}renderPage(){switch(m.hide(),!U.isAuthenticated()&&this.currentPage!=="login-page"&&window.dispatchEvent(new CustomEvent("navigateto",{detail:"login-page"})),this.currentPage){case"search-tpo":return l`<search-tpo></search-tpo>`;case"advance-payment":return l`<advance-payment></advance-payment>`;case"payment-history":return l`<payment-history></payment-history>`;case"login-page":return this.renderLoginPage();default:return this.renderHome()}}renderLoginPage(){return l`<login-page
            .onSuccessLogin="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:""}))}"
        ></login-page>`}renderHome(){return l`
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"search-tpo"}))}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"advance-payment"}))}">Авансовый платеж</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"payment-history"}))}">История платежей</button>
            <button class="action-button" @click="${()=>U.logout()}">Смена пользователя</button>
        `}render(){return l`
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
        `}};W.styles=[M];ft([x({type:String})],W.prototype,"currentPage",2);ft([x({type:Boolean})],W.prototype,"showBackButton",2);W=ft([b("app-home")],W);
//# sourceMappingURL=index-BttjpE9g.js.map
