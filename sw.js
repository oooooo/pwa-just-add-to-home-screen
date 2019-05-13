// service worker 線程

// Unable to fetch start URL via service worker.
self.addEventListener("fetch", function(event) {
  console.log("fetch event", event);
  // event.respondWith(
  //   caches.match(event.request).then(function(response) {
  //     // Cache hit - return response
  //     if (response) {
  //       return response;
  //     }
  //     return fetch(event.request);
  //   })
  // );
});
