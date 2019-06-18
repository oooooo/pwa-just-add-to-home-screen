// service worker 線程
self.addEventListener("fetch", function(event) {
  console.log("self", self);
  console.log("fetch event", event);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// // ---------註銷
// if ("serviceWorker" in navigator) {
//   console.log("hi");
//   navigator.serviceWorker
//     .getRegistration("your_service_worker.js", { scope: "your-path-name" })
//     .then(function(registration) {
//       if (registration && registration.unregister) {
//         registration.unregister().then(function(isUnRegistered) {
//           if (isUnRegistered) {
//             console.log("[SW]: UnRegistration  succeeded.");
//           } else {
//             console.log("[SW]: UnRegistration failed.");
//           }
//         });
//       }
//     })
//     .catch(function(error) {
//       console.log("[SW]: UnRegistration failed with. " + error);
//     });
// }
