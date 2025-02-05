self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/proyectosapp/',
        '/proyectosapp/index.html',
        '/proyectosapp/manifest.json',
        'https://static.vecteezy.com/system/resources/previews/008/852/473/non_2x/shopping-bags-and-paper-shopping-list-options-or-reminders-isolated-on-a-white-background-3d-rendering-free-photo.jpg'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
