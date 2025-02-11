importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/7.3.0/workbox-sw.js'
);

const CACHE_NAME = 'pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/app-home.ts',
    '/src/pages/search-tpo.ts',
    '/src/pages/advance-payment.ts',
    '/src/pages/change-password.ts',
    '/src/pages/payment-history.ts',
    '/src/components/header.ts',
    '/src/styles/global-styles.ts'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache)))
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);