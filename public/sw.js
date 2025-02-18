importScripts("./workbox-v7.3.0/workbox-sw.js");

workbox.setConfig({modulePathPrefix: './workbox-v7.3.0/'});

const BASE_URL = '/test-pwa'
const CACHE_NAME = 'pwa-cache-v1';
const ASSETS_TO_CACHE = [
    `${BASE_URL}/`,
    `${BASE_URL}/index.html`,
    `${BASE_URL}/404.html`,
    `${BASE_URL}/code/code.js`,
    `${BASE_URL}/code/code.css`,
    `${BASE_URL}/code/code-chunk.js`,
    `${BASE_URL}/manifest.json`,
    `${BASE_URL}/workbox-v7.3.0/workbox-sw.js`,
    `${BASE_URL}/assets/icons/16x16.png`,
    `${BASE_URL}/assets/icons/32x32.png`,
    `${BASE_URL}/assets/icons/48x48.png`,
    `${BASE_URL}/assets/icons/192x192.png`,
    `${BASE_URL}/assets/icons/512x512.png`,
    `${BASE_URL}/assets/icons/INSTALL.png`,
    `${BASE_URL}/assets/icons/ADD_TO_HOME_SCREEN.png`,
    `${BASE_URL}/assets/icons/APPLE.png`,
    `${BASE_URL}/assets/icons/GOOGLE.png`,
    `${BASE_URL}/assets/icons/RUSTORE.png`,
    `${BASE_URL}/assets/icons/HUAWEI.png`,
    `${BASE_URL}/assets/icons/GALAXY_STORE.png`,
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                ASSETS_TO_CACHE.forEach(asset => {
                    try {
                        cache.add(asset).catch(e => console.log(`Failed to cache ${asset}: ${e}`));
                    } catch (e) {
                        console.log(`Failed to cache ${asset}: ${e}`);
                    }
                });
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// network first cache
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(event.request);
        })
    );
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);