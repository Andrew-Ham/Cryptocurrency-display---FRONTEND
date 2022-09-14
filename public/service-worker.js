
const CACHE_NAME = "static_cache5"

const STATIC_ASSETS = [
  'my-app/public/index.css',
  '/index.html',
  '/favicon.ico',
  '/logo192.png',
  '/logo512.png',
  '/manifest.json',
  '/robots.txt',
  'src/components/Header.css',
  'src/components/Header.js',
  'src/components/Heading.js',
  'src/components/ticker.tsx',
  'my-app/src/App.css',
  'src/App.test.tsx',
  'src/App.tsx',
  'src/Coin.css',
  'src/Coin.tsx',
  'src/index.css',
  'src/index.tsx',
  'src/logo.svg',
  'src/react-app-env.d.ts',
]


async function preCache() {                   //Add cache
  const cache = await caches.open(CACHE_NAME)
  return cache.addAll(STATIC_ASSETS)
}

self.addEventListener('install', event => {
  console.log("[ServiceWorker] installed");
  self.skipWaiting()
  event.waitUntil(preCache())         //Waits until the preCache() promise finishes executing
})

async function cleanupCache() {   //Delete old Cache
  const keys = await caches.keys()
  const keysToDelete = keys.map(key => {    //if keys dont match new cache delete
    if (key != CACHE_NAME) {
      return caches.delete(key)    
    }
  })

  return Promise.all(keysToDelete)
}

self.addEventListener('activate', event => {
  console.log("[ServiceWorker] activated");
  event.waitUntil(cleanupCache())       //clean up old cache
})

async function fetchAssets(event) {
  try {
    const response = await fetch(event.request)
    return response
  } catch (err) {
    const cache = await caches.open(CACHE_NAME)
    return cache.match(event.request)
  } 
}

self.addEventListener('fetch', event => {
  console.log("[ServiceWorker] fetched"); //Try fetch assets from server, if can't load then fetch from cache
  event.respondWith(fetchAssets(event))
})

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  workbox.routing.registerRoute(                    //access to workbox
    ({request}) => request.destination === 'image', //use routing module to register route that matches all the image files in our project
    new workbox.strategies.CacheFirst()             // caching strategy after image files match. Cachefirst attempts to read from cache instead of going over network first.
  );    
