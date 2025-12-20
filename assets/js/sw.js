/**
  References:
  1. https://developers.google.com/web/fundamentals/primers/service-workers
  2. https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook
*/

const CACHE_VERSION = 'v2';
const CACHE_NAME = `meme-blog-${CACHE_VERSION}`;

// Pre-cache list
const PRE_CACHE_RESOURCES = [
  '/',
  '/fonts/Amstelvar-Roman-VF.woff2',
];

// Install event: Pre-cache critical resources and skip waiting
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Pre-caching critical resources');
      return cache.addAll(PRE_CACHE_RESOURCES);
    }).catch(err => console.error('[Service Worker] Pre-cache failed:', err))
  );
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
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignore cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Ignore Vercel system paths
  if (event.request.url.includes('/_vercel/')) {
    return;
  }

  const { request } = event;
  const url = new URL(request.url);

  // Strategy 1: HTML Pages (Navigation) -> Stale-While-Revalidate
  // For better performance on mobile PWA, show cache immediately and update in background.
  if (request.mode === 'navigate' || request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const fetchPromise = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
              const responseToCache = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(request, responseToCache);
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // Silently fail network update if offline
          });

        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // Strategy 2: Static Assets (CSS, JS, Images, Fonts) -> Cache First
  // Since Hugo uses fingerprinting, filenames change on update.
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

        return fetch(request)
          .then((networkResponse) => {
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse;
            }
            const responseToCache = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseToCache);
            });
            return networkResponse;
          })
          .catch(() => {
            return new Response('Network error occurred', {
              status: 408,
              headers: { 'Content-Type': 'text/plain' }
            });
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