/**
  References:
  1. https://developers.google.com/web/fundamentals/primers/service-workers
  2. https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook
*/

const CACHE_VERSION = 'v1';
const CACHE_NAME = `meme-blog-${CACHE_VERSION}`;

// Install event: Skip waiting to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event: Clean up old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event: Handle requests with different strategies
self.addEventListener('fetch', (event) => {
  // Ignore cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  const { request } = event;

  // Strategy 1: HTML Pages (Navigation) -> Network First
  // We want to show the latest blog content, so we try the network first.
  if (request.mode === 'navigate' || request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          // Verify response is valid
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          // Clone and cache the fresh response
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return networkResponse;
        })
        .catch(() => {
          // Network failed, try to serve from cache
          return caches.match(request);
        })
    );
    return;
  }

  // Strategy 2: Static Assets (CSS, JS, Images, Fonts) -> Cache First
  // Since Hugo uses fingerprinting (enableFingerprint = true), filenames change on update.
  // We can safely serve these from cache for maximum speed.
  if (
    request.destination === 'style' ||
    request.destination === 'script' ||
    request.destination === 'image' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(request).then((networkResponse) => {
          // Don't cache if response is not valid
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
    return;
  }

  // Strategy 3: Default Fallback -> Network First
  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, responseToCache));
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(request);
      })
  );
});