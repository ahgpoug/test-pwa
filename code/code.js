(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=globalThis,dt=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pt=Symbol(),bt=new WeakMap;let Nt=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==pt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(dt&&t===void 0){const n=e!==void 0&&e.length===1;n&&(t=bt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&bt.set(e,t))}return t}toString(){return this.cssText}};const Bt=s=>new Nt(typeof s=="string"?s:s+"",void 0,pt),A=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((n,i,o)=>n+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new Nt(e,s,pt)},zt=(s,t)=>{if(dt)s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const n=document.createElement("style"),i=tt.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,s.appendChild(n)}},yt=dt?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return Bt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Vt,defineProperty:jt,getOwnPropertyDescriptor:Ft,getOwnPropertyNames:Wt,getOwnPropertySymbols:qt,getPrototypeOf:Jt}=Object,nt=globalThis,wt=nt.trustedTypes,Zt=wt?wt.emptyScript:"",Xt=nt.reactiveElementPolyfillSupport,B=(s,t)=>s,et={toAttribute(s,t){switch(t){case Boolean:s=s?Zt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ut=(s,t)=>!Vt(s,t),_t={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:ut};Symbol.metadata??=Symbol("metadata"),nt.litPropertyMetadata??=new WeakMap;let H=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=_t){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&jt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){const{get:i,set:o}=Ft(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get(){return i?.call(this)},set(r){const h=i?.call(this);o.call(this,r),this.requestUpdate(t,h,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??_t}static _$Ei(){if(this.hasOwnProperty(B("elementProperties")))return;const t=Jt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(B("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(B("properties"))){const e=this.properties,n=[...Wt(e),...qt(e)];for(const i of n)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(const[e,n]of this.elementProperties){const i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const i of n)e.unshift(yt(i))}else t!==void 0&&e.push(yt(t));return e}static _$Eu(t,e){const n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EC(t,e){const n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){const o=(n.converter?.toAttribute!==void 0?n.converter:et).toAttribute(e,n.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){const n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const o=n.getPropertyOptions(i),r=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:et;this._$Em=i,this[i]=r.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,n){if(t!==void 0){if(n??=this.constructor.getPropertyOptions(t),!(n.hasChanged??ut)(this[t],e))return;this.P(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,n){this._$AL.has(t)||this._$AL.set(t,e),n.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,o]of n)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(e)):this._$EU()}catch(n){throw t=!1,this._$EU(),n}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(e=>this._$EC(e,this[e])),this._$EU()}updated(t){}firstUpdated(t){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[B("elementProperties")]=new Map,H[B("finalized")]=new Map,Xt?.({ReactiveElement:H}),(nt.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=globalThis,st=gt.trustedTypes,xt=st?st.createPolicy("lit-html",{createHTML:s=>s}):void 0,Lt="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,Mt="?"+w,Gt=`<${Mt}>`,I=document,j=()=>I.createComment(""),F=s=>s===null||typeof s!="object"&&typeof s!="function",mt=Array.isArray,Yt=s=>mt(s)||typeof s?.[Symbol.iterator]=="function",ht=`[ 	
\f\r]`,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Pt=/-->/g,At=/>/g,k=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),St=/'/g,Ct=/"/g,Tt=/^(?:script|style|textarea|title)$/i,Ht=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),l=Ht(1),Q=Ht(2),_=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),kt=new WeakMap,E=I.createTreeWalker(I,129);function Dt(s,t){if(!mt(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return xt!==void 0?xt.createHTML(t):t}const Kt=(s,t)=>{const e=s.length-1,n=[];let i,o=t===2?"<svg>":t===3?"<math>":"",r=U;for(let h=0;h<e;h++){const a=s[h];let u,p,c=-1,$=0;for(;$<a.length&&(r.lastIndex=$,p=r.exec(a),p!==null);)$=r.lastIndex,r===U?p[1]==="!--"?r=Pt:p[1]!==void 0?r=At:p[2]!==void 0?(Tt.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=k):p[3]!==void 0&&(r=k):r===k?p[0]===">"?(r=i??U,c=-1):p[1]===void 0?c=-2:(c=r.lastIndex-p[2].length,u=p[1],r=p[3]===void 0?k:p[3]==='"'?Ct:St):r===Ct||r===St?r=k:r===Pt||r===At?r=U:(r=k,i=void 0);const y=r===k&&s[h+1].startsWith("/>")?" ":"";o+=r===U?a+Gt:c>=0?(n.push(u),a.slice(0,c)+Lt+a.slice(c)+w+y):a+w+(c===-2?h:y)}return[Dt(s,o+(s[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class W{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,r=0;const h=t.length-1,a=this.parts,[u,p]=Kt(t,e);if(this.el=W.createElement(u,n),E.currentNode=this.el.content,e===2||e===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(i=E.nextNode())!==null&&a.length<h;){if(i.nodeType===1){if(i.hasAttributes())for(const c of i.getAttributeNames())if(c.endsWith(Lt)){const $=p[r++],y=i.getAttribute(c).split(w),K=/([.?@])?(.*)/.exec($);a.push({type:1,index:o,name:K[2],strings:y,ctor:K[1]==="."?te:K[1]==="?"?ee:K[1]==="@"?se:ot}),i.removeAttribute(c)}else c.startsWith(w)&&(a.push({type:6,index:o}),i.removeAttribute(c));if(Tt.test(i.tagName)){const c=i.textContent.split(w),$=c.length-1;if($>0){i.textContent=st?st.emptyScript:"";for(let y=0;y<$;y++)i.append(c[y],j()),E.nextNode(),a.push({type:2,index:++o});i.append(c[$],j())}}}else if(i.nodeType===8)if(i.data===Mt)a.push({type:2,index:o});else{let c=-1;for(;(c=i.data.indexOf(w,c+1))!==-1;)a.push({type:7,index:o}),c+=w.length-1}o++}}static createElement(t,e){const n=I.createElement("template");return n.innerHTML=t,n}}function D(s,t,e=s,n){if(t===_)return t;let i=n!==void 0?e._$Co?.[n]:e._$Cl;const o=F(t)?void 0:t._$litDirective$;return i?.constructor!==o&&(i?._$AO?.(!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=D(s,i._$AS(s,t.values),i,n)),t}class Qt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:n}=this._$AD,i=(t?.creationScope??I).importNode(e,!0);E.currentNode=i;let o=E.nextNode(),r=0,h=0,a=n[0];for(;a!==void 0;){if(r===a.index){let u;a.type===2?u=new Z(o,o.nextSibling,this,t):a.type===1?u=new a.ctor(o,a.name,a.strings,this,t):a.type===6&&(u=new ie(o,this,t)),this._$AV.push(u),a=n[++h]}r!==a?.index&&(o=E.nextNode(),r++)}return E.currentNode=I,i}p(t){let e=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=D(this,t,e),F(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==g&&F(this._$AH)?this._$AA.nextSibling.data=t:this.T(I.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=W.createElement(Dt(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===i)this._$AH.p(e);else{const o=new Qt(i,this),r=o.u(this.options);o.p(e),this.T(r),this._$AH=o}}_$AC(t){let e=kt.get(t.strings);return e===void 0&&kt.set(t.strings,e=new W(t)),e}k(t){mt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const o of t)i===e.length?e.push(n=new Z(this.O(j()),this.O(j()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ot{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=g}_$AI(t,e=this,n,i){const o=this.strings;let r=!1;if(o===void 0)t=D(this,t,e,0),r=!F(t)||t!==this._$AH&&t!==_,r&&(this._$AH=t);else{const h=t;let a,u;for(t=o[0],a=0;a<o.length-1;a++)u=D(this,h[n+a],e,a),u===_&&(u=this._$AH[a]),r||=!F(u)||u!==this._$AH[a],u===g?t=g:t!==g&&(t+=(u??"")+o[a+1]),this._$AH[a]=u}r&&!i&&this.j(t)}j(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===g?void 0:t}}class ee extends ot{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class se extends ot{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=D(this,t,e,0)??g)===_)return;const n=this._$AH,i=t===g&&n!==g||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==g&&(n===g||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class ie{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){D(this,t)}}const ne=gt.litHtmlPolyfillSupport;ne?.(W,Z),(gt.litHtmlVersions??=[]).push("3.2.1");const oe=(s,t,e)=>{const n=e?.renderBefore??t;let i=n._$litPart$;if(i===void 0){const o=e?.renderBefore??null;n._$litPart$=i=new Z(t.insertBefore(j(),o),o,void 0,e??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let m=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=oe(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return _}};m._$litElement$=!0,m.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:m});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:m});(globalThis.litElementVersions??=[]).push("4.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const v=s=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(s,t)}):customElements.define(s,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae={attribute:!0,type:String,converter:et,reflect:!1,hasChanged:ut},le=(s=ae,t,e)=>{const{kind:n,metadata:i}=e;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(e.name,s),n==="accessor"){const{name:r}=e;return{set(h){const a=t.get.call(this);t.set.call(this,h),this.requestUpdate(r,a,s)},init(h){return h!==void 0&&this.P(r,void 0,s),h}}}if(n==="setter"){const{name:r}=e;return function(h){const a=this[r];t.call(this,h),this.requestUpdate(r,a,s)}}throw Error("Unsupported decorator location: "+n)};function S(s){return(t,e)=>typeof e=="object"?le(s,t,e):((n,i,o)=>{const r=i.hasOwnProperty(o);return i.constructor.createProperty(o,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(i,o):void 0})(s,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(s){return S({...s,state:!0,attribute:!1})}class he{constructor(){this.tokenKey="auth_token"}getToken(){return localStorage.getItem(this.tokenKey)}setToken(t){localStorage.setItem(this.tokenKey,t)}clearToken(){localStorage.removeItem(this.tokenKey)}isAuthenticated(){const t=this.getToken();return t?JSON.parse(atob(t.split(".")[1])).exp*1e3>Date.now():!1}logout(){this.clearToken(),window.dispatchEvent(new CustomEvent("navigateto",{detail:"login-page"}))}}const z=new he;var ce=Object.defineProperty,de=Object.getOwnPropertyDescriptor,rt=(s,t,e,n)=>{for(var i=n>1?void 0:n?de(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&ce(t,e,i),i};let O=class extends m{constructor(){super(...arguments),this.message="",this.type="info",this.visible=!1}show(s,t="info",e=3e3){this.message=s,this.type=t,this.visible=!0,this.timeoutId&&window.clearTimeout(this.timeoutId),this.timeoutId=window.setTimeout(()=>{this.hide()},e)}hide(){this.visible=!1}render(){return l`
            <div class="popup-notification ${this.type} ${this.visible?"popup-notification-visible":"popup-notification-hidden"}">
                <svg class="icon" viewBox="0 0 24 24">
                    ${this.renderIcon()}
                </svg>
                ${this.message}
            </div>
        `}renderIcon(){switch(this.type){case"success":return Q`<path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"/>`;case"error":return Q`<path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm4.242,14.829a1,1,0,0,1,0,1.414,1.026,1.026,0,0,1-1.414,0L12,13.414,9.172,16.243a1.01,1.01,0,0,1-1.414,0,1,1,0,0,1,0-1.414L10.586,12,7.758,9.171A1,1,0,1,1,9.172,7.757L12,10.586l2.828-2.829a1,1,0,1,1,1.414,1.414L13.414,12Z"></path>`;case"warning":return Q`<path d="M12 2L1 21H23M12 6L19.53 19H4.47M11 10V14H13V10M11 16V18H13V16"/>`;default:return Q`<path d="M11 7H13V9H11V7M11 11H13V17H11V11M12 2C6.47 2 2 6.5 2 12C2 17.5 6.5 22 12 22S22 17.5 22 12 17.5 2 12 2M12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4S20 7.58 20 12C20 16.42 16.42 20 12 20Z"/>`}}};O.styles=A`
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
    `;rt([d()],O.prototype,"message",2);rt([d()],O.prototype,"type",2);rt([d()],O.prototype,"visible",2);O=rt([v("popup-notification")],O);const pe=new O;class x{static{this.instance=null}static initialize(){this.instance||(this.instance=pe,document.body.appendChild(this.instance))}static show(t,e,n){this.initialize(),this.instance.show(t,e,n)}static hide(){this.instance&&this.instance.hide()}}var ue=Object.defineProperty,ge=Object.getOwnPropertyDescriptor,Rt=(s,t,e,n)=>{for(var i=n>1?void 0:n?ge(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&ue(t,e,i),i};let q=class extends m{constructor(){super(...arguments),this.visible=!1}show(){this.visible=!0}hide(){this.visible=!1}isVisible(){return this.visible}render(){return l`
            <div class="loading-overlay ${this.visible?"loading-overlay-visible":"loading-overlay-hidden"}">
                <div class="spinner"></div>
            </div>
        `}};q.styles=A`
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
    `;Rt([d()],q.prototype,"visible",2);q=Rt([v("loading-overlay")],q);const me=new q;class f{static{this.instance=null}static initialize(){this.instance||(this.instance=me,document.body.appendChild(this.instance))}static show(){this.initialize(),this.instance.show()}static hide(){this.instance&&this.instance.hide()}static isVisible(){return this.instance?this.instance.isVisible():!1}}const C=A`
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
`;var fe=Object.defineProperty,ve=Object.getOwnPropertyDescriptor,at=(s,t,e,n)=>{for(var i=n>1?void 0:n?ve(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&fe(t,e,i),i};let N=class extends m{constructor(){super(...arguments),this.heading="",this.message="",this.visible=!1}show(s,t){this.heading=s,this.message=t,this.visible=!0}hide(){this.visible=!1,this.heading="",this.message=""}render(){return l`
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
        `}};N.styles=[C,A`
        .modal-text {
            margin: 16px 0;
            line-height: 1.5;
            white-space: pre-line;
        }
    `];at([d()],N.prototype,"heading",2);at([d()],N.prototype,"message",2);at([d()],N.prototype,"visible",2);N=at([v("modal-window")],N);const $e=new N;class be{static{this.instance=null}static initialize(){this.instance||(this.instance=$e,document.body.appendChild(this.instance))}static show(t,e){this.initialize(),this.instance.show(t,e)}static hide(){this.instance&&this.instance.hide()}}var ye=Object.defineProperty,we=Object.getOwnPropertyDescriptor,X=(s,t,e,n)=>{for(var i=n>1?void 0:n?we(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&ye(t,e,i),i};let P=class extends m{constructor(){super(...arguments),this.type="other",this.deferredPrompt=null,this.visible=!1,this.loadedImages={}}get basePath(){return"/test-pwa/"}show(s="other",t=null){this.type=s,this.deferredPrompt=t,this.visible=!0}hide(){this.visible=!1}renderStoreIcon(s,t){const e=this.loadedImages[s];return l`
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
        `}installPWA(){this.deferredPrompt&&this.deferredPrompt.prompt(),this.hide()}showAddToHomeScreen(){be.show("Добавить на главный экран",`1. Нажмите на кнопку "Поделиться"
2. Выберите "Добавить на главный экран"
3. Нажмите "Добавить"`)}};P.styles=[C,A`
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
  `];X([d()],P.prototype,"type",2);X([d()],P.prototype,"deferredPrompt",2);X([d()],P.prototype,"visible",2);X([d()],P.prototype,"loadedImages",2);P=X([v("download-modal-window")],P);const _e=new P;class xe{static{this.instance=null}static initialize(){this.instance||(this.instance=_e,document.body.appendChild(this.instance))}static show(t="other",e=null){this.initialize(),this.instance.show(t,e)}static hide(){this.instance&&this.instance.hide()}}var Pe=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,G=(s,t,e,n)=>{for(var i=n>1?void 0:n?Ae(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Pe(t,e,i),i};let L=class extends m{constructor(){super(...arguments),this.showInstallButton=!1,this.deferredPrompt=null,this.isIOS=/iPad|iPhone|iPod/.test(navigator.userAgent),this.isAndroid=/Android/.test(navigator.userAgent),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.showBackButton=!1,this.isLoginPage=!1,this.onBack=()=>{},this.handleBeforeInstallPrompt=s=>{s.preventDefault(),this.deferredPrompt=s,this.showInstallButton=!0},this.handleInstallClick=async()=>{let s=this.isIOS?"ios":this.isAndroid?"android":"other",t=this.deferredPrompt;xe.show(s,t)},this.handleAppInstalled=()=>{this.showInstallButton=!1}}connectedCallback(){super.connectedCallback(),window.addEventListener("beforeinstallprompt",this.handleBeforeInstallPrompt),window.addEventListener("appinstalled",this.handleAppInstalled)}render(){return l`
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
        `}};L.styles=[A`
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
    `,C];G([d()],L.prototype,"showInstallButton",2);G([S({type:Boolean})],L.prototype,"showBackButton",2);G([S({type:Boolean})],L.prototype,"isLoginPage",2);G([S({type:Function})],L.prototype,"onBack",2);L=G([v("app-header")],L);class Se{constructor(){this.baseUrl="https://api.example.com"}async login(t,e){return"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE3Mzk0MjcwNzgsImV4cCI6MTc3MDk2MzA3OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.jHWRmpyQBaIFL9xd5fk3gqhPe_m0DtnOQx3J_LD-fTA"}async fetchPaymentHistory(){const t=Math.random()*2e3+1e3;return await new Promise(e=>setTimeout(e,t)),[{id:"1",amount:1e3,date:"2023-10-01",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"2",amount:1500,date:"2023-10-05",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"},{id:"3",amount:2e3,date:"2023-10-10",number:"ТПО-123456789012",link:"https://example.com/payment/123456789012",status:"Оплачено"}]}async fetchTPOList(t,e){const n=Math.random()*2e3+1e3;await new Promise(o=>setTimeout(o,n));const i=Math.floor(Math.random()*10)+1;return Array.from({length:i},(o,r)=>({id:Math.random().toString(36).substring(2,9),amount:Math.floor(Math.random()*1e5)+1e3,date:new Date(Date.now()-Math.random()*31536e6).toISOString().split("T")[0],number:`ТПО-${Math.floor(Math.random()*1e6)}`}))}}const ft=new Se;class vt{static async shareLink(t){try{navigator.share?await navigator.share({title:"Ссылка на платеж",text:"Ссылка для оплаты:",url:t}):(await navigator.clipboard.writeText(t),x.show("Ссылка скопирована в буфер обмена","success"))}catch(e){e.toString().includes("AbortError")||x.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}}}var Ce=Object.defineProperty,ke=Object.getOwnPropertyDescriptor,Y=(s,t,e,n)=>{for(var i=n>1?void 0:n?ke(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Ce(t,e,i),i};let M=class extends m{constructor(){super(...arguments),this.tpos=[],this.fio="",this.passportSeriesNumber="",this.isFormValid=!1,this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleSearchTPO(){f.show(),this.tpos=[];try{const s=await ft.fetchTPOList(this.fio.trim(),this.passportSeriesNumber);this.tpos=s}catch{x.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}finally{this.clearForm(),f.hide()}}clearForm(){this.fio="",this.passportSeriesNumber="",this.validateForm()}validateForm(){const s=this.fioRegex.test(this.fio),t=this.passportSeriesNumberRegex.test(this.passportSeriesNumber);this.isFormValid=s&&t}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let n=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=n,requestAnimationFrame(()=>{if(e){const i=this.calculateNewCursorPosition(e,t.value,n);t.setSelectionRange(i,i)}}),this.validateForm(),t.value=this.fio}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let n=t.value.replace(/[^\d]/g,""),i="";n.length>0&&(i=n.slice(0,4),n.length>4&&(i+=" "+n.slice(4,10))),this.passportSeriesNumber=i,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const n=e.length-t.length;return s+n}async generateLink(s){f.show();const t=Math.random()*2e3+1e3;await new Promise(i=>setTimeout(i,t));const e=Math.random().toString(36).substring(2,8),n=this.tpos.map(i=>i.id===s.id?{...i,link:`${window.location.origin}/payment/${e}`}:i);this.tpos=n,f.hide(),x.show("Ссылка успешно создана","success")}render(){return l`
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
                                @click="${()=>vt.shareLink(s.link)}"
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
        `}};M.styles=[A`
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
      `,C];Y([d()],M.prototype,"tpos",2);Y([d()],M.prototype,"fio",2);Y([d()],M.prototype,"passportSeriesNumber",2);Y([d()],M.prototype,"isFormValid",2);M=Y([v("search-tpo")],M);function Et(s){return!0}var Ee=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,T=(s,t,e,n)=>{for(var i=n>1?void 0:n?Ie(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Ee(t,e,i),i};let b=class extends m{constructor(){super(...arguments),this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.isFormValid=!1,this.generatedLink="",this.fioRegex=/^((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}\s(?<![’(),.-]))+((?![\s’(),.-])+[А-Яа-яЁёIV’(),.-]{2,}(?<![\s’(),.-]))+$/,this.innRegex=/^\d{12}$/,this.passportSeriesNumberRegex=/^\d{4}\s\d{6}$/}async handleGenerateLink(){f.show(),this.generatedLink="";try{const s=Math.random()*2e3+1e3;await new Promise(t=>setTimeout(t,s)),this.generateRandomLink()}catch{x.show("Произошла ошибка. Пожалуйста, попробуйте позже","error")}finally{this.clearForm(),f.hide(),x.show("Ссылка успешно создана","success")}}clearForm(){this.fio="",this.inn="",this.passportSeriesNumber="",this.passportIssueDate="",this.validateForm()}generateRandomLink(){const s=Math.random().toString(36).substring(2,8);this.generatedLink=`${window.location.origin}/payment/${s}`}validateForm(){const s=this.fioRegex.test(this.fio),t=this.innRegex.test(this.inn)&&Et(this.inn),e=this.passportSeriesNumberRegex.test(this.passportSeriesNumber),n=this.validatePassportIssueDate(this.passportIssueDate);this.isFormValid=s&&t&&e&&n}validatePassportIssueDate(s){return s?new Date(s)<=new Date:!1}handleFioInput(s){this.fio=s.target.value;const t=s.target,e=t.selectionStart;let n=t.value.replace(/[^А-Яа-яЁёIV’()\s,.-]+/g,"").replace(/\s+/g," ");this.fio=n,requestAnimationFrame(()=>{if(e){const i=this.calculateNewCursorPosition(e,t.value,n);t.setSelectionRange(i,i)}}),this.validateForm(),t.value=this.fio}handleInnInput(s){this.inn=s.target.value.replace(/\D/g,"");const t=s.target,e=t.selectionStart;let n=t.value.replace(/[^\d]/g,""),i="";n.length>0&&(i=n.slice(0,12)),this.inn=i,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.inn}handlePassportSeriesNumberInput(s){const t=s.target,e=t.selectionStart;let n=t.value.replace(/[^\d]/g,""),i="";n.length>0&&(i=n.slice(0,4),n.length>4&&(i+=" "+n.slice(4,10))),this.passportSeriesNumber=i,requestAnimationFrame(()=>{if(e){const o=this.calculateNewCursorPosition(e,t.value,i);t.setSelectionRange(o,o)}}),this.validateForm(),t.value=this.passportSeriesNumber}calculateNewCursorPosition(s,t,e){const n=e.length-t.length;return s+n}handlePassportIssueDateInput(s){this.passportIssueDate=s.target.value,this.validateForm()}render(){return l`
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
                    class="${(!this.innRegex.test(this.inn)||!Et(this.inn))&&this.inn?"invalid":""}"
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
                    <button class="share-button" @click="${()=>vt.shareLink(this.generatedLink)}">
                        <svg class="share-icon" viewBox="0 0 24 24">
                            <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92z"/>
                        </svg>
                    </button>
                </div>
            `:""}
        `}};b.styles=[C];T([d()],b.prototype,"fio",2);T([d()],b.prototype,"inn",2);T([d()],b.prototype,"passportSeriesNumber",2);T([d()],b.prototype,"passportIssueDate",2);T([d()],b.prototype,"isFormValid",2);T([S({type:String})],b.prototype,"generatedLink",2);b=T([v("advance-payment")],b);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oe=s=>s===null||typeof s!="object"&&typeof s!="function",Ne=s=>s.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Le={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Me=s=>(...t)=>({_$litDirective$:s,values:t});let Te=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const V=(s,t)=>{const e=s._$AN;if(e===void 0)return!1;for(const n of e)n._$AO?.(t,!1),V(n,t);return!0},it=s=>{let t,e;do{if((t=s._$AM)===void 0)break;e=t._$AN,e.delete(s),s=t}while(e?.size===0)},Ut=s=>{for(let t;t=s._$AM;s=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(s))break;e.add(s),Re(t)}};function He(s){this._$AN!==void 0?(it(this),this._$AM=s,Ut(this)):this._$AM=s}function De(s,t=!1,e=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)V(n[o],!1),it(n[o]);else n!=null&&(V(n,!1),it(n));else V(this,s)}const Re=s=>{s.type==Le.CHILD&&(s._$AP??=De,s._$AQ??=He)};class Ue extends Te{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),Ut(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(V(this,t),it(this))}setValue(t){if(Ne(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Be{constructor(t){this.Y=t}disconnect(){this.Y=void 0}reconnect(t){this.Y=t}deref(){return this.Y}}class ze{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise(t=>this.q=t)}resume(){this.q?.(),this.Z=this.q=void 0}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=s=>!Oe(s)&&typeof s.then=="function",Ot=1073741823;class Ve extends Ue{constructor(){super(...arguments),this._$Cwt=Ot,this._$Cbt=[],this._$CK=new Be(this),this._$CX=new ze}render(...t){return t.find(e=>!It(e))??_}update(t,e){const n=this._$Cbt;let i=n.length;this._$Cbt=e;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let h=0;h<e.length&&!(h>this._$Cwt);h++){const a=e[h];if(!It(a))return this._$Cwt=h,a;h<i&&a===n[h]||(this._$Cwt=Ot,i=0,Promise.resolve(a).then(async u=>{for(;r.get();)await r.get();const p=o.deref();if(p!==void 0){const c=p._$Cbt.indexOf(a);c>-1&&c<p._$Cwt&&(p._$Cwt=c,p.setValue(u))}}))}return _}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const je=Me(Ve);var Fe=Object.defineProperty,We=Object.getOwnPropertyDescriptor,qe=(s,t,e,n)=>{for(var i=n>1?void 0:n?We(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Fe(t,e,i),i};let ct=class extends m{async renderPaymentLinks(){f.show();const s=await ft.fetchPaymentHistory(),t=l`${s.map(e=>this.renderPaymentLinkCard(e))}`;return f.hide(),t}renderPaymentLinkCard(s){return l`
            <div class="payment-link-card">
                ${s.amount?l`<div class="payment-link-field"><strong>Сумма: </strong>${s.amount}</div>`:""}
                <div class="payment-link-field"><strong>Дата: </strong>${s.date}</div>
                ${s.number?l`<div class="payment-link-field"><strong>Номер ТПО: </strong>${s.number}</div>`:""}

                ${s.link?l`
                <div class="link-container">
                    <div class="link-field">${s.link}</div>
                    <button
                        class="share-button"
                        @click=${()=>vt.shareLink(s.link)}
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
                ${je(this.renderPaymentLinks(),l``)}
            </div>`}};ct.styles=[A`
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
        `,C];ct=qe([v("payment-history")],ct);var Je=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,lt=(s,t,e,n)=>{for(var i=n>1?void 0:n?Ze(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Je(t,e,i),i};let R=class extends m{constructor(){super(...arguments),this.login="",this.password="",this.onSuccessLogin=()=>{}}async handleLogin(){try{const s=await ft.login(this.login,this.password);z.setToken(s),this.onSuccessLogin()}catch{x.show("Ошибка авторизации","error")}}render(){return z.isAuthenticated()&&this.onSuccessLogin(),l`
            <input type="text" .value="${this.login}" @input="${s=>this.login=s.target.value}" placeholder="Логин">
            <input type="password" .value="${this.password}" @input="${s=>this.password=s.target.value}" placeholder="Пароль">
            <button class="action-button" @click="${this.handleLogin}">Войти</button>
        `}};R.styles=[C];lt([d()],R.prototype,"login",2);lt([d()],R.prototype,"password",2);lt([S({type:Function})],R.prototype,"onSuccessLogin",2);R=lt([v("login-page")],R);var Xe=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,$t=(s,t,e,n)=>{for(var i=n>1?void 0:n?Ge(t,e):t,o=s.length-1,r;o>=0;o--)(r=s[o])&&(i=(n?r(t,e,i):r(i))||i);return n&&i&&Xe(t,e,i),i};let J=class extends m{constructor(){super(...arguments),this.isInStandaloneMode=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0||document.referrer.includes("android-app://"),this.currentPage=window.location.pathname,this.showBackButton=!1,this.handlePopState=()=>{const s=window.location.pathname,t=this.basePath,e=s.startsWith(t)?s.slice(t.length).replace(/^\//,""):s.replace(/^\//,"");this.currentPage=e||"",this.checkAuth(),this.requestUpdate()},this.handleNavigateTo=s=>{this.navigateTo(s.detail??"")}}get basePath(){return"/test-pwa/"}checkAuth(){!z.isAuthenticated()&&this.currentPage!=="login-page"&&this.navigateTo("login-page")}async registerServiceWorker(){if("serviceWorker"in navigator)try{const s=await navigator.serviceWorker.register(`${this.basePath}sw.js`,{scope:this.basePath});console.log("ServiceWorker registration successful with scope:",s.scope)}catch(s){console.error("ServiceWorker registration failed:",s)}}connectedCallback(){super.connectedCallback(),this.registerServiceWorker(),x.initialize(),f.initialize(),this.handlePopState(),window.addEventListener("navigateto",this.handleNavigateTo),this.setupBackButtonHandler(),window.addEventListener("popstate",this.handlePopState),this.checkAuth()}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("navigateto",this.handleNavigateTo),window.removeEventListener("popstate",this.handlePopState)}isHomePage(){return this.currentPage==""||this.currentPage=="/"||this.currentPage=="login-page"||this.currentPage==this.basePath}setupBackButtonHandler(){window.onpopstate=s=>{if(this.isInStandaloneMode){if(f.isVisible())return s.preventDefault(),!1;if(this.isHomePage())return s.preventDefault(),this.handleExit(),!1}return!0}}handleExit(){this.isInStandaloneMode?window.navigator.app.exitApp():(window.close(),window.stop())}navigateTo(s){history.pushState({},"",`${this.basePath}${s}`),this.currentPage=s,this.requestUpdate()}getPageTitle(){switch(this.currentPage){case"login-page":return"Авторизация";case"search-tpo":return"Поиск квитанции по реквизитам";case"advance-payment":return"Авансовый платеж";case"payment-history":return"История платежей";default:return"Меню"}}renderPage(){switch(!z.isAuthenticated()&&this.currentPage!=="login-page"&&window.dispatchEvent(new CustomEvent("navigateto",{detail:"login-page"})),this.currentPage){case"search-tpo":return l`<search-tpo></search-tpo>`;case"advance-payment":return l`<advance-payment></advance-payment>`;case"payment-history":return l`<payment-history></payment-history>`;case"login-page":return this.renderLoginPage();default:return this.renderHome()}}renderLoginPage(){return l`<login-page
            .onSuccessLogin="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:""}))}"
        ></login-page>`}renderHome(){return l`
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"search-tpo"}))}">Поиск квитанции по реквизитам</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"advance-payment"}))}">Авансовый платеж</button>
            <button class="action-button" @click="${()=>window.dispatchEvent(new CustomEvent("navigateto",{detail:"payment-history"}))}">История платежей</button>
            <button class="action-button" @click="${()=>z.logout()}">Смена пользователя</button>
        `}render(){f.show();const s=l`
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
        `;return f.hide(),s}};J.styles=[C];$t([S({type:String})],J.prototype,"currentPage",2);$t([S({type:Boolean})],J.prototype,"showBackButton",2);J=$t([v("app-home")],J);
//# sourceMappingURL=code.js.map
