const CACHE = 'volaxin-shell-v4';
const RUNTIME = 'volaxin-runtime-v4';
const PRECACHE = [
  '/shell/shell.css',
  '/shell/shell.js',
  '/shell/chatbot.css',
  '/shell/chatbot.js',
  '/shell/tour-page.css',
  '/chatbotlogo.webp',
  '/chatbotuser.webp',
  '/logo.png',
  '/favicon.ico',
  '/contact.html',
  '/company/about.html',
  '/company/partners.html',
  '/products/',
  '/products/pms.html',
  '/products/inventory.html',
  '/products/procurement.html',
  '/products/crew-management.html',
  '/products/sheq.html',
  '/products/navigation.html',
  '/products/chartering.html',
  '/products/warehouse.html',
  '/products/drydock.html',
  '/products/operations.html',
  '/products/finance.html',
  '/products/documents.html',
  '/products/analytics.html',
  '/products/hull-integrity.html',
  '/products/compliance.html',
  '/products/ai-assistant.html'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.all(
      PRECACHE.map(u => c.add(u).catch(() => null))
    )).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE && k !== RUNTIME).map(k => caches.delete(k))
    )).then(() => self.clients.claim())
  );
});

const BYPASS_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'unpkg.com', 'api.emailjs.com'];

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin !== location.origin) return;
  if (BYPASS_HOSTS.some(h => url.host.includes(h))) return;
  const path = url.pathname;
  if (path === '/' || path === '/index.html') return;
  if (/\.(mp4|webm|m4s)$/i.test(path)) return;
  if (path.startsWith('/frames/')) return;

  const isDoc = e.request.mode === 'navigate' || (e.request.headers.get('accept') || '').includes('text/html');

  if (isDoc) {
    e.respondWith(
      caches.match(e.request).then(hit => {
        const net = fetch(e.request).then(res => {
          if (res && res.status === 200) {
            const clone = res.clone();
            caches.open(RUNTIME).then(c => c.put(e.request, clone));
          }
          return res;
        }).catch(() => hit);
        return hit || net;
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(hit => {
      if (hit) return hit;
      return fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(RUNTIME).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
