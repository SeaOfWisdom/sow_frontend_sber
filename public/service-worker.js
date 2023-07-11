const CACHE_NAME = 'my-cache';
const urlsToCache = [
  '/',
  '/index.html', 
  '/style.css',
  '/path/to/plyr.css',
  '/logo.png', 
  
  '/video/home_video.mov', 
  
  '/img/logo.svg',
  '/img/avatar.svg',
  '/img/banner_bg.svg',
  '/img/stamp.svg',
  '/img/star.svg',
  '/img/h_1.svg',
  '/img/h_2.svg',
  '/img/h_3.svg',

  '/fonts/lora/Lora-Bold.ttf',
  '/fonts/lora/Lora-Medium.ttf',
  '/fonts/lora/Lora-Regular.ttf',
  '/fonts/golos/GolosText-Medium.ttf',
  '/fonts/golos/GolosText-Regular.ttf',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});