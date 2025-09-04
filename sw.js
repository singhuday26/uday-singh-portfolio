const CACHE_NAME = 'portfolio-v2-optimized';
const STATIC_RESOURCES = [
  '/',
  '/src/main.tsx',
  '/src/index.css',
  '/src/assets/hero-background.jpg',
  '/src/assets/project-portfolio.jpg',
  '/src/assets/project-churn.jpg',
  '/src/assets/project-cnn.jpg',
  '/src/assets/project-medicare.jpg',
  '/src/assets/project-safesafe.jpg',
  '/src/assets/project-sentiment.jpg',
  '/public/lovable-uploads/fad2ceb6-ecf8-49a9-8205-afa3d6191650.png'
];

// Add stale-while-revalidate strategy for better performance
const RUNTIME_CACHE = 'runtime-cache-v2';

// Install event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(STATIC_RESOURCES);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event with stale-while-revalidate strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Handle different types of requests
  if (event.request.destination === 'image') {
    // Image caching strategy: cache first, then network
    event.respondWith(handleImageRequest(event.request));
  } else if (event.request.mode === 'navigate') {
    // Navigation requests: network first, fallback to cache
    event.respondWith(handleNavigationRequest(event.request));
  } else {
    // Other resources: stale-while-revalidate
    event.respondWith(handleResourceRequest(event.request));
  }
});

// Image caching strategy
async function handleImageRequest(request) {
  const cache = await caches.open(CACHE_NAME);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  try {
    const response = await fetch(request);
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    return cached; // Return cached version if available
  }
}

// Navigation request handler
async function handleNavigationRequest(request) {
  try {
    const response = await fetch(request);
    return response;
  } catch (error) {
    const cache = await caches.open(CACHE_NAME);
    return await cache.match('/') || new Response('Offline');
  }
}

// Resource request handler with stale-while-revalidate
async function handleResourceRequest(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(request);
  
  // Start fetch in background
  const fetchPromise = fetch(request).then(response => {
    if (response.status === 200) {
      cache.put(request, response.clone());
    }
    return response;
  }).catch(() => cached);
  
  // Return cached version immediately if available
  return cached || await fetchPromise;
}