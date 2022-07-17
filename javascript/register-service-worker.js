// check if serviceworker supported -- if yes, then register 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./service-worker.js', { scope: './' })
    .then(function (registration) {
      console.log('Service Worker successfully registered'); // registration not used as parameter to prevent spamming console log
    })
    .catch(function (err) {
      console.log('Service Worker failed to register', err);
    });
}
