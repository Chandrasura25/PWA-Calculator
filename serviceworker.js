const assets = ['/', 'style.css','app.js', 'registerWorker.js', 'bootstrap.css', 'https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'];
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("assets").then(cache => {
            cache.addAll(assets)
        })
    )
})
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                const fetchPromise = fetch(event.request).then(
                    networkResponse => {
                        caches.open("assets").then(cache => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    });
                return response || fetchPromise;
            })
    );
});

