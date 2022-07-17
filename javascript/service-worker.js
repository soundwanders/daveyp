// https://github.com/ireade/boilerplate-service-worker

// Set a name for the current cache
const cacheName = 'daveycache1'; 

// Default files to always cache
const cacheFiles = [
	'./',
	'./index.html',
	'./index.css',
	'./index.bundle.min.js',
  './hero-height.js',
  './components/spotify-carousel/carousel.css',
  './components/spotify-carousel/carousel.js',
  './components/contact-form/form.css',
  './components/contact-form/form.js',
  './media/background/Background.png',
  './media/background/DaveyPerronLogo.png',
  './media/background/MobileBackground.png',
  './media/background/content-bg.png',
  './media/downArrow.svg',
  './media/pointer.png',
  './media/favicon.svg',
	'https://fonts.googleapis.com/css2?family=Balthazar&family=Martel:wght@400;700;900',
,
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Installed');

  // e.waitUntil Delays the event until the Promise is resolved
  e.waitUntil(

    // Open the cache
    caches.open(cacheName).then(function(cache) {
      // Add all the default files to the cache
      console.log('[ServiceWorker] Caching cacheFiles');
      return cache.addAll(cacheFiles);
    })
  ) // end e.waitUntil
});


self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activated');

  e.waitUntil (
    // Get all the cache keys (cacheName)
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(thisCacheName) {

        // If a cached item is saved under a previous cacheName
        if (thisCacheName !== cacheName) {

          // Delete the relevant cached file
          console.log('[ServiceWorker] Removing Cached Files from Cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  ) // end e.waitUntil

});


self.addEventListener('fetch', function(e) {
	console.log('[ServiceWorker] Fetch', e.request.url);

	// e.respondWidth Responds to the fetch event
	e.respondWith(

		// Check in cache for the request being made
		caches.match(e.request)


			.then(function(response) {

				// If the request is in the cache
				if ( response ) {
					console.log("[ServiceWorker] Found in Cache", e.request.url, response);
					// Return the cached version
					return response;
				}

				// If the request is NOT in the cache, fetch and cache
				let requestClone = e.request.clone();
				fetch(requestClone)
					.then(function(response) {

						if ( !response ) {
							console.log("[ServiceWorker] No response from fetch ")
							return response;
						}

						let responseClone = response.clone();

						//  Open the cache
						caches.open(cacheName).then(function(cache) {

							// Put the fetched response in the cache
							cache.put(e.request, responseClone);
							console.log('[ServiceWorker] New Data Cached', e.request.url);

							// Return the response
							return response;
			
            }); // end caches.open

					})
					.catch(function(err) {
						console.log('[ServiceWorker] Error Fetching & Caching New Data', err);
					});


			}) // end caches.match(e.request)
	); // end e.respondWith
});