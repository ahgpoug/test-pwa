this.workbox=this.workbox||{},this.workbox.broadcastUpdate=function(t,s,a,e){"use strict";try{self["workbox:broadcast-update:7.2.0"]&&_()}catch(t){}const n=(t,s,a)=>!a.some((a=>t.headers.has(a)&&s.headers.has(a)))||a.every((a=>{const e=t.headers.has(a)===s.headers.has(a),n=t.headers.get(a)===s.headers.get(a);return e&&n})),i=["content-length","etag","last-modified"],o=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);function c(t){return{cacheName:t.cacheName,updatedURL:t.request.url}}class r{constructor({generatePayload:t,headersToCheck:s,notifyAllClients:a}={}){this.C=s||i,this.A=t||c,this.U=null==a||a}async notifyIfUpdated(t){if(t.oldResponse&&!n(t.oldResponse,t.newResponse,this.C)){const e={type:"CACHE_UPDATED",meta:"workbox-broadcast-update",payload:this.A(t)};if("navigate"===t.request.mode){let e;t.event instanceof FetchEvent&&(e=t.event.resultingClientId);await a.resultingClientExists(e)&&!o||await s.timeout(3500)}if(this.U){const t=await self.clients.matchAll({type:"window"});for(const s of t)s.postMessage(e)}else if(t.event instanceof FetchEvent){const s=await self.clients.get(t.event.clientId);null==s||s.postMessage(e)}}}}return t.BroadcastCacheUpdate=r,t.BroadcastUpdatePlugin=class{constructor(t){this.cacheDidUpdate=async t=>{e.dontWaitFor(this.F.notifyIfUpdated(t))},this.F=new r(t)}},t.responsesAreSame=n,t}({},workbox.core._private,workbox.core._private,workbox.core._private);
//# sourceMappingURL=workbox-broadcast-update.prod.js.map
