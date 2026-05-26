// ╔══════════════════════════════════════════════════════════╗
// ║  SERVICE WORKER — Aryan's Grammar & Vocab Book          ║
// ║  Offline support + fast loading                         ║
// ╚══════════════════════════════════════════════════════════╝

const CACHE_NAME = 'grammar-book-v1';

// Yeh saari files cache ho jaayengi — offline bhi kaam karengi
const FILES_TO_CACHE = [
  './',
  './index.html',
  './grammar-data.js',
  './vocab-data.js',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital,wght@0,400;0,500;1,400&display=swap'
];

// ── INSTALL: Cache all files ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[SW] Caching all files...');
      // Cache local files — Google Fonts may fail in some envs, that's ok
      return cache.addAll([
        './',
        './index.html',
        './grammar-data.js',
        './vocab-data.js',
        './manifest.json',
      ]).then(() => self.skipWaiting());
    })
  );
});

// ── ACTIVATE: Delete old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('[SW] Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => self.clients.claim())
  );
});

// ── FETCH: Cache first, then network ──
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      // Return cached version if available
      if (cachedResponse) {
        return cachedResponse;
      }

      // Otherwise fetch from network and cache it
      return fetch(event.request).then(networkResponse => {
        // Only cache valid responses
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      }).catch(() => {
        // If both cache and network fail — show offline page
        if (event.request.destination === 'document') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
