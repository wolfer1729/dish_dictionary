/* Dish Dictionary service worker.
   Used only when the app is opened from a web address (e.g. GitHub Pages on a phone).
   On first visit it saves the whole app AND every dish photo on the device, so it keeps working with no internet.
   (Opening index.html straight from disk on a PC does not use this file; that copy is already offline.) */
const CACHE = 'dd-v26';
const SHELL = [
  './', 'index.html', 'css/styles.css', 'manifest.webmanifest',
  'assets/icon.svg', 'assets/icon-192.png', 'assets/icon-512.png', 'assets/icon-maskable-512.png', 'assets/apple-touch-icon.png',
  'assets/fonts/fonts.css', 'assets/fonts/fraunces-1.woff2', 'assets/fonts/fraunces-2.woff2', 'assets/fonts/fraunces-3.woff2', 'assets/fonts/fraunces-4.woff2', 'assets/fonts/fraunces-5.woff2', 'assets/fonts/fraunces-6.woff2', 'assets/fonts/inter-10.woff2', 'assets/fonts/inter-11.woff2', 'assets/fonts/inter-12.woff2', 'assets/fonts/inter-13.woff2', 'assets/fonts/inter-7.woff2', 'assets/fonts/inter-8.woff2', 'assets/fonts/inter-9.woff2', 'assets/fonts/twemoji-country-flags.woff2',
  'js/core.js', 'js/views.js', 'js/learn.js', 'js/mine.js', 'js/cook.js', 'js/app.js', 'js/learn-data.js',
  'js/data/east-asia.js', 'js/data/southeast-asia.js', 'js/data/south-asia.js',
  'js/data/middle-east-africa.js', 'js/data/europe.js', 'js/data/americas-oceania.js',
  'js/data/india-north.js', 'js/data/india-south-street.js', 'js/data/india-indochinese-sweets.js', 'js/data/india-more.js', 'js/data/world-more-asia-italy.js', 'js/data/world-more-west.js', 'js/data/veg-india-more.js', 'js/data/veg-world.js', 'js/data/courses-soups-starters-sides.js', 'js/data/courses-desserts-drinks.js', 'js/data/continental.js', 'js/data/easy-five-dinners.js', 'js/data/south-india-tiffin-rice.js', 'js/data/south-india-curries-snacks.js', 'js/data/india-regional-more.js', 'js/data/india-telugu-more.js', 'js/data/world-veg-more.js', 'js/data/india-states-more.js', 'js/data/world-more-4.js', 'js/data/india-more-5.js', 'js/data/world-more-5.js', 'js/data/india-more-6.js', 'js/data/world-more-6.js', 'js/data/world-more-7.js', 'js/data/india-more-7.js', 'js/data/world-more-8.js', 'js/data/world-more-9.js', 'js/data/india-more-8.js', 'js/data/india-more-9.js', 'js/data/world-more-10.js', 'js/data/regional.js', 'js/data/photos.js', 'js/nutrition.js',
];

// Photos live in their own store that survives app updates, so an update never has to wait for them.
const PHOTOS = 'dd-photos';

// Save every dish photo. The list is read from the photo index, so new photos are picked up automatically.
async function savePhotos() {
  const app = await caches.open(CACHE), store = await caches.open(PHOTOS);
  let list = [];
  try {
    const src = await (await app.match('js/data/photos.js')).text();
    list = [...new Set(src.match(/assets\/photos\/[\w-]+\.jpg/g) || [])];
  } catch (e) { return { saved: 0, total: 0, fetched: 0 }; }
  let saved = 0, fetched = 0, next = 0;
  const worker = async () => {
    while (next < list.length) {
      const url = list[next++];
      try {
        if (await store.match(url)) { saved++; continue; }
        const old = await caches.match(url); // copy from an older app version instead of downloading again
        if (old) { await store.put(url, old); saved++; continue; }
        const res = await fetch(url);
        if (res.ok) { await store.put(url, res); saved++; fetched++; }
      } catch (e) { /* one missing photo must not stop the rest */ }
    }
  };
  await Promise.all(Array.from({ length: 6 }, worker));
  return { saved, total: list.length, fetched };
}

// Install only the app itself (a few seconds), then take over at once.
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys()
    .then((ks) => Promise.all(ks.filter((k) => k.startsWith('dd-') && k !== CACHE && k !== PHOTOS).map((k) => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// The page asks for the photos once it is running; progress goes back as a message.
let saving = null;
self.addEventListener('message', (e) => {
  if (!e.data || e.data.type !== 'dd-save-photos') return;
  if (!saving) saving = savePhotos().finally(() => { saving = null; });
  e.waitUntil(saving.then(async (r) => {
    const pages = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    pages.forEach((p) => p.postMessage(Object.assign({ type: 'dd-offline-ready' }, r)));
  }));
});

// App files (page, code, styles): use the newest version when online, the saved copy when offline.
// Photos, fonts and icons: use the saved copy first (they never change), download only if missing.
const APP_FILE = /\.(html|js|css|webmanifest)$/;
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;
  const url = new URL(req.url);
  const isApp = req.mode === 'navigate' || APP_FILE.test(url.pathname) || url.pathname.endsWith('/');
  if (isApp) {
    e.respondWith((async () => {
      const cached = () => caches.match(req, { ignoreSearch: true }).then((hit) => hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined));
      try {
        const res = await Promise.race([fetch(req), new Promise((_, no) => setTimeout(() => no(new Error('slow')), 4000))]);
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); return res; }
        return (await cached()) || res;
      } catch (err) {
        return (await cached()) || Response.error();
      }
    })());
    return;
  }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then((hit) => hit || fetch(req).then((res) => {
    if (res && res.ok && url.pathname.includes('/assets/photos/')) { const copy = res.clone(); caches.open(PHOTOS).then((c) => c.put(req, copy)); }
    return res;
  })));
});
