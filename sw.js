importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js");const a="pwa-cache-v1",c=["/","/index.html","/404.html","/src/app.js","/src/components/header.js","/src/pages/search-tpo.js","/src/pages/advance-payment.js","/src/pages/change-password.js","/src/pages/payment-history.js","/src/styles/global-styles.js","/manifest.json","/icons/icon-192x192.png","/icons/icon-512x512.png"];self.addEventListener("install",s=>{s.waitUntil(caches.open(a).then(e=>e.addAll(c)).then(()=>self.skipWaiting()))});self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(e=>Promise.all(e.map(t=>{if(t!==a)return caches.delete(t)}))).then(()=>self.clients.claim()))});self.addEventListener("fetch",s=>{s.respondWith(caches.match(s.request).then(e=>e||fetch(s.request)))});workbox.precaching.precacheAndRoute([{"revision":"3bbdc4117e14ed99d12b633e078abaf6","url":"404.html"},{"revision":"fe970448513b18d0c37b4b671ca94a06","url":"assets/icons/192x192.png"},{"revision":"5b1c195400df0f16c3f6cb2aa4665622","url":"assets/icons/24x24.png"},{"revision":"c3f013b68eae92565e8337ee50472cdc","url":"assets/icons/48x48.png"},{"revision":"e2a009c0f6aaa11d03a8e0728869b583","url":"assets/icons/512x512.png"},{"revision":"a80ffffb8d3a555b25a0f19a0a9878f1","url":"assets/icons/icon_192.png"},{"revision":"04fa5b0f5827d885b678f0d131406aab","url":"assets/icons/icon_24.png"},{"revision":"3dbd388868265c8498acfe676ef27811","url":"assets/icons/icon_48.png"},{"revision":"414aacb61ad294e75f267554db7e9368","url":"assets/icons/icon_512.png"},{"revision":null,"url":"code/index-CEBc7CyM.js"},{"revision":"ce485a14b04f255654a1e7d9f65927b8","url":"index.html"},{"revision":"a1414c2769fbc690c19d54912304977d","url":"manifest.json"},{"revision":"048e591a6439826ddc2c13243c56b05b","url":"staticwebapp.config.json"}]||[]);
//# sourceMappingURL=sw.js.map
