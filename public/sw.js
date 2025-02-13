importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

const CACHE_NAME = 'pwa-cache-v1';
const ASSETS_TO_CACHE = [
    `/`,
    `/index.html`,
    `/404.html`,
    `/src/app-home.js`,
    `/src/components/header.js`,
    `/src/pages/search-tpo.js`,
    `/src/pages/advance-payment.js`,
    `/src/pages/payment-history.js`,
    `/src/pages/login-page.js`,
    `/src/styles/global-styles.js`,
    `/manifest.json`,
    `/icons/16x16.png`,
    `/icons/32x32.png`,
    `/icons/48x48.png`,
    `/icons/192x192.png`,
    `/icons/512x512.png`,
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS_TO_CACHE))
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

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);