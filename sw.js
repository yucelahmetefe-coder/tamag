// Tamag'dan Kaçış · servis çalışanı: oyunu çevrimdışı çalıştırır.
// Oyunun kendisi (index.html, tamag-config.js) önce ağdan denenir; böylece yayımladığın güncelleme
// çevrimiçiyken hemen görünür. Ağ yoksa ya da yavaşsa önbellekteki sürüm açılır.
// Fontlar ve simgeler önbellekten gelir.
const SURUM = 'tamag-v1';
const DOSYALAR = [
  './',
  'index.html',
  'tamag-config.js',
  'manifest.webmanifest',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png',
  'fonts/barlow-semi-condensed-latin-400-normal.woff2',
  'fonts/barlow-semi-condensed-latin-500-normal.woff2',
  'fonts/barlow-semi-condensed-latin-600-normal.woff2',
  'fonts/barlow-semi-condensed-latin-ext-400-normal.woff2',
  'fonts/barlow-semi-condensed-latin-ext-500-normal.woff2',
  'fonts/barlow-semi-condensed-latin-ext-600-normal.woff2',
  'fonts/grenze-gotisch-latin-500-normal.woff2',
  'fonts/grenze-gotisch-latin-800-normal.woff2',
  'fonts/grenze-gotisch-latin-ext-500-normal.woff2',
  'fonts/grenze-gotisch-latin-ext-800-normal.woff2',
  'fonts/noto-sans-old-turkic-old-turkic-400-normal.woff2',
];
const TAZE = /(\/|index\.html|tamag-config\.js)$/; // önce ağdan denenecekler

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SURUM).then(c => c.addAll(DOSYALAR)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== SURUM).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', e => {
  const istek = e.request, url = new URL(istek.url);
  if (istek.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith((async () => {
    const depo = await caches.open(SURUM);
    const eski = await depo.match(istek, { ignoreSearch: true });
    const agdan = fetch(istek).then(r => { if (r && r.ok) depo.put(istek, r.clone()); return r; });
    if (TAZE.test(url.pathname)) {
      // 2,5 saniye içinde ağdan gelirse onu, gelmezse önbellektekini ver
      const sure = new Promise(coz => setTimeout(() => coz(null), 2500));
      const yeni = await Promise.race([agdan.catch(() => null), eski ? sure : new Promise(() => {})]);
      if (yeni && yeni.ok) return yeni;
      if (eski) return eski;
      return (await agdan.catch(() => null)) || new Response('Çevrimdışı', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    if (eski) { e.waitUntil(agdan.catch(() => null)); return eski; }
    return agdan.catch(() => new Response('', { status: 504 }));
  })());
});
