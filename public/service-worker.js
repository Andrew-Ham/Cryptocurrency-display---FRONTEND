import { isCatchClause } from "typescript";

importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );

  workbox.routing.registerRoute(                    //access to workbox
    ({request}) => request.destination === 'image', //use routing module to register route that matches all the image files in our project
    new workbox.strategies.CacheFirst()             // caching strategy after image files match. Cachefirst attempts to read from cache instead of going over network first.
  );    
