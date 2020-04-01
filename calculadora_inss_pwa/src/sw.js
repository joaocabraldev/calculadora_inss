const version = '0.0.5';
const cacheName = `appcache-${version}`;

self.addEventListener('install', function(e) {
  e.waitUntil(
      caches.open(cacheName).then(function(cache) {
        return cache.addAll([
          '/calculadora_inss_pwa',
          '/calculadora_inss_pwa/favicon.ico',
          '/calculadora_inss_pwa/index.html',
          '/calculadora_inss_pwa/js/app.js',
          '/calculadora_inss_pwa/js/calculo.js',
          '/calculadora_inss_pwa/js/visual.js',
          '/calculadora_inss_pwa/css/style.css',
          '/calculadora_inss_pwa/css/w3.css',
          '/calculadora_inss_pwa/icons/127x127.png',
          '/calculadora_inss_pwa/icons/255x256.png',
          '/calculadora_inss_pwa/icons/512x512.png',
        ]).then(() => self.skipWaiting());
      }),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.open(cacheName)
          .then((cache) => cache.match(event.request, {ignoreSearch: true}))
          .then((response) => {
            return response || fetch(event.request);
          }),
  );
});
