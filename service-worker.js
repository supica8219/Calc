self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
});
 
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});
// サービスワーカー有効化に必須
self.addEventListener('fetch', function(event) {});
/*
self.addEventListener('fetch', function(event) {});
window.navigator.serviceWorker.getRegistrations()
.then(registrations => {
  for(let registration of registrations) {
    registration.unregister();
  }
});
window.location.reload(true); 
*/

