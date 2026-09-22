const CACHE = 'volaxin-shell-v6';
const RUNTIME = 'volaxin-runtime-v6';
// Vercel serves with cleanUrls:true, so "/x.html" 308-redirects to "/x".
// Precache the clean URLs only — never cache a redirected response, because
// Chrome refuses to serve one to a navigation request (ERR_FAILED).
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
  '/contact',
  '/company/about',
  '/company/partners',
  '/products',
  '/products/pms',
  '/products/inventory',
  '/products/procurement',
  '/products/crew-management',
  '/products/sheq',
  '/products/navigation',
  '/products/chartering',
  '/products/warehouse',
  '/products/drydock',
  '/products/operations',
  '/products/finance',
  '/products/documents',
  '/products/analytics',
  '/products/hull-integrity',
  '/products/compliance',
  '/products/ai-assistant'
];

function cacheable(res) {
  return !!res && res.status === 200 && !res.redirected && res.type === 'basic';
}

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => Promise.all(
      PRECACHE.map(u =>
        fetch(u).then(res => { if (cacheable(res)) return c.put(u, res); }).catch(() => null)
      )
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
      caches.match(e.request).then(cached => {
        const hit = cached && !cached.redirected ? cached : null;
        const net = fetch(e.request).then(res => {
          if (cacheable(res)) {
            const clone = res.clone();
            caches.open(RUNTIME).then(c => c.put(e.request, clone));
          }
          return res;
        }).catch(err => {
          if (hit) return hit;
          throw err;
        });
        return hit || net;
      })
    );
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached && !cached.redirected) return cached;
      return fetch(e.request).then(res => {
        if (cacheable(res)) {
          const clone = res.clone();
          caches.open(RUNTIME).then(c => c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
