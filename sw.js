importScripts("https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js");const a="pwa-cache-v1",c=["/","/index.html","/404.html","/src/app.js","/src/components/header.js","/src/pages/search-tpo.js","/src/pages/advance-payment.js","/src/pages/change-password.js","/src/pages/payment-history.js","/src/styles/global-styles.js","/manifest.json","/icons/192x192.png","/icons/512x512.png"];self.addEventListener("install",s=>{s.waitUntil(caches.open(a).then(e=>e.addAll(c)).then(()=>self.skipWaiting()))});self.addEventListener("activate",s=>{s.waitUntil(caches.keys().then(e=>Promise.all(e.map(t=>{if(t!==a)return caches.delete(t)}))).then(()=>self.clients.claim()))});self.addEventListener("fetch",s=>{s.respondWith(caches.match(s.request).then(e=>e||fetch(s.request)))});workbox.precaching.precacheAndRoute([{"revision":"e0d03737eeb8ae985cafe71ea0a12ccd","url":"404.html"},{"revision":"19abcc4a7559f9a5bc9ccdccc31ee777","url":"assets/icons/1024x1024.png"},{"revision":"5f0a7437b2d74a53e46fe61129588843","url":"assets/icons/16x16.png"},{"revision":"723b00c9d48a0587010721029a09b51b","url":"assets/icons/192x192.png"},{"revision":"bcffa18384e82e815aeed137277bd3f3","url":"assets/icons/32x32.png"},{"revision":"4b0fe1be82fe158a26516e36b4486ee4","url":"assets/icons/48x48.png"},{"revision":"0e2266e590a38bb0f9f41574f4a0d7e7","url":"assets/icons/512x512.png"},{"revision":null,"url":"code/index-C-hiu1DH.js"},{"revision":"d3813100805fa4828cf411347ebd9f57","url":"index.html"},{"revision":"08d99549d96f9680923f8c8f8ac8fe45","url":"manifest.json"},{"revision":"048e591a6439826ddc2c13243c56b05b","url":"staticwebapp.config.json"}]||[]);
//# sourceMappingURL=sw.js.map
