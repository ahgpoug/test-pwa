importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js");const t="my-pwa-cache-v1",c=["/","/index.html","/src/app-home.ts","/src/pages/search-tpo.ts","/src/pages/create-payment-link.ts","/src/pages/change-password.ts","/src/pages/payment-history.ts","/src/components/header.ts","/src/components/footer.ts","/src/styles/global-styles.ts"];self.addEventListener("install",s=>{s.waitUntil(caches.open(t)).then(e=>e.addAll(c))});self.addEventListener("fetch",s=>{s.respondWith(caches.match(s.request).then(e=>e||fetch(s.request)))});workbox.precaching.precacheAndRoute([{"revision":"fe970448513b18d0c37b4b671ca94a06","url":"assets/icons/192x192.png"},{"revision":"5b1c195400df0f16c3f6cb2aa4665622","url":"assets/icons/24x24.png"},{"revision":"c3f013b68eae92565e8337ee50472cdc","url":"assets/icons/48x48.png"},{"revision":"e2a009c0f6aaa11d03a8e0728869b583","url":"assets/icons/512x512.png"},{"revision":"a80ffffb8d3a555b25a0f19a0a9878f1","url":"assets/icons/icon_192.png"},{"revision":"04fa5b0f5827d885b678f0d131406aab","url":"assets/icons/icon_24.png"},{"revision":"3dbd388868265c8498acfe676ef27811","url":"assets/icons/icon_48.png"},{"revision":"414aacb61ad294e75f267554db7e9368","url":"assets/icons/icon_512.png"},{"revision":null,"url":"code/index-781QoL1e.js"},{"revision":null,"url":"code/index-BDby_LO8.css"},{"revision":"ed8834cb17578663ddec872e366c730e","url":"index.html"},{"revision":"c3408ca3c5eb6c38b26affb22c5c8817","url":"manifest.json"},{"revision":"b1a4910d7cbaa47fcc8f72ecb2028ff1","url":"staticwebapp.config.json"}]||[]);
//# sourceMappingURL=sw.js.map
