// Service Worker מינימלי — דרוש כדי שהדפדפן יציע התקנה כ־PWA
// אין caching offline, האפליקציה דורשת אינטרנט בכל מקרה
const SW_VERSION = 'v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// בקשות רשת — מעבירים ישירות ב־network (אין cache)
self.addEventListener('fetch', (event) => {
  // לא מתערבים — הדפדפן עושה את העבודה כרגיל
});
