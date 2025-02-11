const CACHE_NAME = 'my-pwa-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/src/app.js',
    '/src/pages/search-tpo.js',
    '/src/pages/create-payment-link.js',
    '/src/pages/change-password.js',
    '/src/pages/payment-history.js',
    '/src/components/header.js',
    '/src/components/footer.js',
    '/src/styles/global-styles.js'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(urlsToCache))
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => response || fetch(event.request))
    );
});