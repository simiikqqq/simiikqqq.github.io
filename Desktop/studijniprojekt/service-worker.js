'use strict';

const CACHE_PREFIX = 'maturitni-plan-';
const CACHE_NAME = `${CACHE_PREFIX}v19`;
const APP_ROOT = new URL('./', self.registration.scope);
const SUBJECT_IDS = [
  'matematika',
  'cestina',
  'literatura',
  'sloh',
  'hwsw',
  'programovani',
  'web',
  'databaze',
  'dokumentace',
  'ustni',
  'literatura-ustni',
  'rozbory-knih'
];
const APP_FILES = [
  'index.html',
  'assets/css/styles.css?v=12',
  'assets/js/app.js?v=14',
  'assets/js/content/index.js?v=19',
  'assets/js/content/matematika/category.js?v=19',
  'assets/js/content/matematika/slide-notes.js',
  ...SUBJECT_IDS.flatMap(id => [
    ...(id === 'matematika'
      ? []
      : [`assets/js/content/${id}/category.js`]),
    ...(id === 'ustni' || id === 'literatura-ustni' || id === 'rozbory-knih'
      ? []
      : [`assets/js/content/${id}/expansions.js`])
  ])
].map(path => new URL(path, APP_ROOT).toString());

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_FILES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys
        .filter(key => key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME)
        .map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const url = new URL(request.url);
  const scopePath = new URL(self.registration.scope).pathname;

  if (request.method !== 'GET' || url.origin !== self.location.origin || !url.pathname.startsWith(scopePath)) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(fetch(request).catch(async () => {
      const cachedPage = await caches.match(request);
      return cachedPage || caches.match(new URL('index.html', APP_ROOT).toString());
    }));
    return;
  }

  event.respondWith(caches.match(request).then(cached => {
    if (cached) return cached;
    return fetch(request).then(response => {
      if (!response.ok) return response;
      const copy = response.clone();
      caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      return response;
    });
  }));
});
