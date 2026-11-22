/* Dish Dictionary service worker.
   Used only when the app is opened from a web address (e.g. GitHub Pages on a phone).
   On first visit it saves the whole app AND every dish photo on the device, so it keeps working with no internet.
   (Opening index.html straight from disk on a PC does not use this file; that copy is already offline.) */
const CACHE = 'dd-v18';
const SHELL = [
  './', 'index.html', 'css/styles.css', 'manifest.webmanifest',
  'assets/icon.svg', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/icon-maskable-512.png', 'assets/apple-touch-icon.png',
  'assets/fonts/fonts.css', 'assets/fonts/fraunces-1.woff2', 'assets/fonts/fraunces-2.woff2', 'assets/fonts/fraunces-3.woff2', 'assets/fonts/fraunces-4.woff2', 'assets/fonts/fraunces-5.woff2', 'assets/fonts/fraunces-6.woff2', 'assets/fonts/inter-10.woff2', 'assets/fonts/inter-11.woff2', 'assets/fonts/inter-12.woff2', 'assets/fonts/inter-13.woff2', 'assets/fonts/inter-7.woff2', 'assets/fonts/inter-8.woff2', 'assets/fonts/inter-9.woff2', 'assets/fonts/twemoji-country-flags.woff2',
  'js/core.js', 'js/views.js', 'js/learn.js', 'js/mine.js', 'js/cook.js', 'js/app.js', 'js/learn-data.js',
  'js/data/east-asia.js', 'js/data/southeast-asia.js', 'js/data/south-asia.js',
  'js/data/middle-east-africa.js', 'js/data/europe.js', 'js/data/americas-oceania.js',
  'js/data/india-north.js', 'js/data/india-south-street.js', 'js/data/india-indochinese-sweets.js', 'js/data/india-more.js', 'js/data/world-more-asia-italy.js', 'js/data/world-more-west.js', 'js/data/veg-india-more.js', 'js/data/veg-world.js', 'js/data/courses-soups-starters-sides.js', 'js/data/courses-desserts-drinks.js', 'js/data/continental.js', 'js/data/easy-five-dinners.js', 'js/data/south-india-tiffin-rice.js', 'js/data/south-india-curries-snacks.js', 'js/data/india-regional-more.js', 'js/data/india-telugu-more.js', 'js/data/world-veg-more.js', 'js/data/india-states-more.js', 'js/data/world-more-4.js', 'js/data/regional.js', 'js/data/photos.js', 'js/nutrition.js',
];

// Save every dish photo. The list is read from the photo index, so new photos are picked up automatically.
// Photos already saved by an older version are copied across instead of downloaded again.
async function savePhotos(cache) {
  let list = [];
  try {
    const src = await (await cache.match('js/data/photos.js')).text();
    list = [...new Set(src.match(/assets\/photos\/[\w-]+\.jpg/g) || [])];
  } catch (e) { return { saved: 0, total: 0 }; }
  let saved = 0, next = 0;
  const worker = async () => {
    while (next < list.length) {
      const url = list[next++];
      try {
        if (await cache.match(url)) { saved++; continue; }
        const old = await caches.match(url);
        if (old) { await cache.put(url, old); saved++; continue; }
        const res = await fetch(url);
        if (res.ok) { await cache.put(url, res); saved++; }
      } catch (e) { /* one missing photo must not stop the rest */ }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  return { saved, total: list.length };
}

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    const r = await savePhotos(cache);
    const pages = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    pages.forEach((p) => p.postMessage(Object.assign({ type: 'dd-offline-ready' }, r)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('dd-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

// Serve from the saved copy first (instant, works offline), then refresh it in the background when online.
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET' || !e.request.url.startsWith(self.location.origin)) return;
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then((hit) => {
      const net = fetch(e.request).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); }
        return res;
      }).catch(() => hit || (e.request.mode === 'navigate' ? caches.match('index.html') : undefined));
      return hit || net;
    })
  );
});
