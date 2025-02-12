importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

const BASE_PATH = '/test-pwa';
const CACHE_NAME = 'pwa-cache-v1';
const ASSETS_TO_CACHE = [
    `${BASE_PATH}/`,
    `${BASE_PATH}/index.html`,
    `${BASE_PATH}/404.html`,
    `${BASE_PATH}/src/app.js`,
    `${BASE_PATH}/src/components/header.js`,
    `${BASE_PATH}/src/pages/search-tpo.js`,
    `${BASE_PATH}/src/pages/advance-payment.js`,
    `${BASE_PATH}/src/pages/change-password.js`,
    `${BASE_PATH}/src/pages/payment-history.js`,
    `${BASE_PATH}/src/styles/global-styles.js`,
    `${BASE_PATH}/manifest.json`,
    `${BASE_PATH}/icons/icon-192x192.png`,
    `${BASE_PATH}/icons/icon-512x512.png`,
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