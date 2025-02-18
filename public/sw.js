importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

const BASE_URL = '/test-pwa'
const CACHE_NAME = 'pwa-cache-v1';
const ASSETS_TO_CACHE = [
    `${BASE_URL}/`,
    `${BASE_URL}/index.html`,
    `${BASE_URL}/404.html`,
    `${BASE_URL}/src/app-home.js`,
    `${BASE_URL}/src/components/header.js`,
    `${BASE_URL}/src/components/loading-overlay.js`,
    `${BASE_URL}/src/components/modal-window.js`,
    `${BASE_URL}/src/components/popup-notification.js`,
    `${BASE_URL}/src/pages/search-tpo.js`,
    `${BASE_URL}/src/pages/advance-payment.js`,
    `${BASE_URL}/src/pages/payment-history.js`,
    `${BASE_URL}/src/pages/login-page.js`,
    `${BASE_URL}/src/services/bcrypt-service.js`,
    `${BASE_URL}/src/services/inn-checker.js`,
    `${BASE_URL}/src/services/loading-overlay-service.js`,
    `${BASE_URL}/src/services/modal-window-service.js`,
    `${BASE_URL}/src/services/popup-notification-service.js`,
    `${BASE_URL}/src/services/share-service.js`,
    `${BASE_URL}/src/styles/global-styles.js`,
    `${BASE_URL}/manifest.json`,
    `${BASE_URL}/icons/16x16.png`,
    `${BASE_URL}/icons/32x32.png`,
    `${BASE_URL}/icons/48x48.png`,
    `${BASE_URL}/icons/192x192.png`,
    `${BASE_URL}/icons/512x512.png`,
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