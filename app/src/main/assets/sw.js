// HTML Learner - Service Worker Offline Cacher
const CACHE_NAME = "html-learner-v1";
const STATIC_ASSETS = [
    "index.html",
    "lessons.html",
    "playground.html",
    "quiz.html",
    "progress.html",
    "css/style.css",
    "js/main.js",
    "js/lessons.js",
    "js/quiz.js",
    "js/playground.js",
    "manifest.json"
];

// Installation event: cache core assets
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log("Service Worker: Caching Offline Assets");
            return cache.addAll(STATIC_ASSETS);
        })
    );
});

// Activation event: clear old cache profiles
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log("Service Worker: Cleared Stale Cache Profile", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event: Intercept request and respond with Cache-First
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request).then(networkResponse => {
                if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
                    return networkResponse;
                }
                const responseToCache = networkResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(event.request, responseToCache);
                });
                return networkResponse;
            });
        }).catch(() => {
            // Fallback content if everything offline fails
            if (event.request.mode === "navigate") {
                return caches.match("index.html");
            }
        })
    );
});
