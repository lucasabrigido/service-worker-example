/* eslint-disable no-restricted-globals */

const CACHE_NAME = 'MOMENTO_DEV';

// self.addEventListener('install', event => {
//   event.waitUntil(
//     caches.open(CACHE_NAME)
//       .then(cache => {
//         const cacheResources = [
//           '/index.html',
//           '/',
//           '/css/styles.css',
//           '/js/main.js',
//           {
//             url: '/',
//             content: '<html/>',
//             headers: { 'Content-Type': 'text/html' }
//           }
//         ]
//         return cache.addAll(cacheResources);
//       })
//   );
// });

async function save(cache, request, response) {
  cache = cache || await caches.open(CACHE_NAME);
  await cache.put(request, response.clone());
  // console.log('salvei em cache', request);
  return cache;
}

self.addEventListener('fetch', (event) => {
    event.respondWith((async () => {
      if (event.request.url.includes(self.location.origin)) {

        const cache = await caches.open(CACHE_NAME);
        const response = navigator.onLine ? undefined : await cache.match(event.request);
  
        if (response) {
          return response;
        }

        const newResponse = await fetch(event.request);
        await save(cache, event.request, newResponse);
        return newResponse;
      }

      return fetch(event.request)
    })());
});

self.addEventListener('push', event => {
  const data = event.data.json();
  // console.log('New notification', data);
  const options = {
    body: data.body,
  };
  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});