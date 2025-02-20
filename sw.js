importScripts("./workbox-v7.3.0/workbox-sw.js");workbox.setConfig({modulePathPrefix:"./workbox-v7.3.0/"});const s="/test-pwa",o="pwa-cache-v1",a=[`${s}/`,`${s}/index.html`,`${s}/404.html`,`${s}/code/code.js`,`${s}/code/code.css`,`${s}/code/code-chunk.js`,`${s}/manifest.json`,`${s}/workbox-v7.3.0/workbox-sw.js`,`${s}/assets/icons/16x16.png`,`${s}/assets/icons/32x32.png`,`${s}/assets/icons/48x48.png`,`${s}/assets/icons/192x192.png`,`${s}/assets/icons/512x512.png`,`${s}/assets/icons/INSTALL.png`,`${s}/assets/icons/ADD_TO_HOME_SCREEN.png`,`${s}/assets/icons/APPLE.png`,`${s}/assets/icons/GOOGLE.png`,`${s}/assets/icons/RUSTORE.png`,`${s}/assets/icons/HUAWEI.png`,`${s}/assets/icons/GALAXY_STORE.png`];self.addEventListener("install",e=>{e.waitUntil(caches.open(o).then(c=>{a.forEach(t=>{try{c.add(t).catch(n=>console.log(`Failed to cache ${t}: ${n}`))}catch(n){console.log(`Failed to cache ${t}: ${n}`)}})}).then(()=>self.skipWaiting()))});self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(c=>Promise.all(c.map(t=>{if(t!==o)return caches.delete(t)}))).then(()=>self.clients.claim()))});self.addEventListener("fetch",e=>{e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))});workbox.precaching.precacheAndRoute([{"revision":"9f7d18a6ba81ea4e98d2b2ce911a258a","url":"404.html"},{"revision":"19abcc4a7559f9a5bc9ccdccc31ee777","url":"assets/icons/1024x1024.png"},{"revision":"5f0a7437b2d74a53e46fe61129588843","url":"assets/icons/16x16.png"},{"revision":"723b00c9d48a0587010721029a09b51b","url":"assets/icons/192x192.png"},{"revision":"bcffa18384e82e815aeed137277bd3f3","url":"assets/icons/32x32.png"},{"revision":"4b0fe1be82fe158a26516e36b4486ee4","url":"assets/icons/48x48.png"},{"revision":"0e2266e590a38bb0f9f41574f4a0d7e7","url":"assets/icons/512x512.png"},{"revision":"52d8cbba0a80c4210426a1de3f4a80a2","url":"assets/icons/ADD_TO_HOME_SCREEN.png"},{"revision":"c5e0254693fbc8c45cf62f999f39125f","url":"assets/icons/APPLE.png"},{"revision":"aff14d5332a194759ad162985df6a351","url":"assets/icons/GALAXY_STORE.png"},{"revision":"4d80f684e35c8cf1197ec0fe2dfd7631","url":"assets/icons/GOOGLE.png"},{"revision":"41e4308e2865963aaebee6c060b845c3","url":"assets/icons/HUAWEI.png"},{"revision":"1ffb8f228b09f51cf28363b6b92e6a94","url":"assets/icons/INSTALL.png"},{"revision":"8c97718ce0bd0046faf568577ff7a508","url":"assets/icons/logo.svg"},{"revision":"6087acae75f91c2c60ed3c6ab24189a2","url":"assets/icons/RUSTORE.png"},{"revision":"d1da6583f276c8708876d1d0fa234f93","url":"assets/screenshots/search-tpo-android.png"},{"revision":"4f2a1783c52cd6dd758ab4d6550c9901","url":"assets/screenshots/search-tpo-ios.png"},{"revision":"2fdb5dabf60cb1b84849640674ec7a90","url":"assets/screenshots/search-tpo-wide.png"},{"revision":null,"url":"code/code.js"},{"revision":"e2eb2206814441dc90f013f0392972a5","url":"index.html"},{"revision":"595842039f1722f4d1a7b0677f70cbfb","url":"manifest.json"},{"revision":"048e591a6439826ddc2c13243c56b05b","url":"staticwebapp.config.json"},{"revision":"fdea78e10dc15a4990329b2bc73f4418","url":"workbox-v7.3.0/workbox-background-sync.dev.js"},{"revision":"7df2b4af75f09fd8b18431c69477b127","url":"workbox-v7.3.0/workbox-background-sync.prod.js"},{"revision":"8ebfef1474c401abc98ac889913a8fc9","url":"workbox-v7.3.0/workbox-broadcast-update.dev.js"},{"revision":"c1d6cc1a26b73a488811f841756c1e3c","url":"workbox-v7.3.0/workbox-broadcast-update.prod.js"},{"revision":"98fd7c87ad917a757a80fcb13a0447f7","url":"workbox-v7.3.0/workbox-cacheable-response.dev.js"},{"revision":"a39fe4b9bb1ce7004ff866cc099d4a66","url":"workbox-v7.3.0/workbox-cacheable-response.prod.js"},{"revision":"f4cf052402578b2bdc3862223ee15cd4","url":"workbox-v7.3.0/workbox-core.dev.js"},{"revision":"0f005de088aa3880813a40d4f3a6e2ca","url":"workbox-v7.3.0/workbox-core.prod.js"},{"revision":"0fbf1e2552d85b4ef27d405f08695a33","url":"workbox-v7.3.0/workbox-expiration.dev.js"},{"revision":"855cdca5da43a57ceebc5bc71453053f","url":"workbox-v7.3.0/workbox-expiration.prod.js"},{"revision":"9b8d62a5b332dfd1ca149ae544d86943","url":"workbox-v7.3.0/workbox-navigation-preload.dev.js"},{"revision":"a8b7d0af987ec66a222fd77dd9edde8a","url":"workbox-v7.3.0/workbox-navigation-preload.prod.js"},{"revision":"e0582d1549ee33859a7a539194380aff","url":"workbox-v7.3.0/workbox-offline-ga.dev.js"},{"revision":"193bda9357eb6424434895a7aff8be0e","url":"workbox-v7.3.0/workbox-offline-ga.prod.js"},{"revision":"d38878e5da541af031e060f94cbd7ef5","url":"workbox-v7.3.0/workbox-precaching.dev.js"},{"revision":"311b92de0b058ae6b2564d4cfcb6d0e7","url":"workbox-v7.3.0/workbox-precaching.prod.js"},{"revision":"aaafb1bb11c1b6d8e476d881f3e57652","url":"workbox-v7.3.0/workbox-range-requests.dev.js"},{"revision":"15b201b6b595a97bb0be3d7577b25e9f","url":"workbox-v7.3.0/workbox-range-requests.prod.js"},{"revision":"72ac803e8ae404c639cf8c1526fc14d1","url":"workbox-v7.3.0/workbox-recipes.dev.js"},{"revision":"fab10eeef1a8c9755d5bb38883d4c23d","url":"workbox-v7.3.0/workbox-recipes.prod.js"},{"revision":"018d149d3a27546c153457908042d72c","url":"workbox-v7.3.0/workbox-routing.dev.js"},{"revision":"bc309ea484e6d6e07e8f9216d677f3fe","url":"workbox-v7.3.0/workbox-routing.prod.js"},{"revision":"6b51ad7cf0e44b533b8c617ca0109c63","url":"workbox-v7.3.0/workbox-strategies.dev.js"},{"revision":"41b3f1fa8839eaad412eb38825850272","url":"workbox-v7.3.0/workbox-strategies.prod.js"},{"revision":"da5b52186bde92126440bea1d1f6e459","url":"workbox-v7.3.0/workbox-streams.dev.js"},{"revision":"9259cf1a135007d6a0893b8cde11bfd3","url":"workbox-v7.3.0/workbox-streams.prod.js"},{"revision":"c2eba1515364b627c4f3d5eb6a4bee5b","url":"workbox-v7.3.0/workbox-sw.js"},{"revision":"c9050b3f542e9b1335e5bb4de56a35f2","url":"workbox-v7.3.0/workbox-window.dev.umd.js"},{"revision":"7526eac808d6b2d82b533795861a7220","url":"workbox-v7.3.0/workbox-window.prod.umd.js"}]||[]);
//# sourceMappingURL=sw.js.map
