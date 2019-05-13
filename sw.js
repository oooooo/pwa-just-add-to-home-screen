// service worker 線程
// 不可以沒有內容
// self.addEventListener("install", function(event) {
//   // Perform install steps
//   console.log("install event", event);
//   // // Perform install steps
//   // event.waitUntil(
//   //   caches.open(CACHE_NAME).then(function(cache) {
//   //     console.log("Opened cache");
//   //     return cache.addAll(urlsToCache);
//   //   })
//   // );
// });

// self.addEventListener("fetch", function(event) {
//   console.log("fetch event", event);
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }
//       return fetch(event.request);
//     })
//   );
// });
