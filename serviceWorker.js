var APP_PREFIX = 'hikersblog'
var VERSION = 'version_01'
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  '/hikersblog/',
  '/hikersblog/index.html',
  '/hikersblog/about.html',
  '/hikersblog/blog.html',
  '/hikersblog/bshelang.html',
  '/hikersblog/bsipatir.html',
  '/hikersblog/contact.html',
  '/hikersblog/journal.html',
  '/hikersblog/css/aos.css',
  '/hikersblog/css/bootstrap.min.css',
  '/hikersblog/css/bootstrap-datepicker.css',
  '/hikersblog/css/jquery.fancybox.min.css',
  '/hikersblog/css/jquery-ui.css',
  '/hikersblog/css/magnific-popup.css',
  '/hikersblog/css/mediaelementplayer.css',
  '/hikersblog/css/owl.carosuel.min.css',
  '/hikersblog/css/owl.theme.default.min.css',
  '/hikersblog/css/style.css',
  '/hikersblog/css/bootstrap/bootstrap.css',
  '/hikersblog/css/bootstrap/bootstrap-grid.css',
  '/hikersblog/css/bootstrap/bootstrap-reboot.css',
  '/hikersblog/js/aos.js',
  '/hikersblog/js/bootstrap.min.js',
  '/hikersblog/js/bootstrap-datepicker.min.js',
  '/hikersblog/js/isotope.pkgd.min.js',
  '/hikersblog/js/jquery.animatedNumber.min.js',
  '/hikersblog/js/jquery.countdown.min.js',
  '/hikersblog/js/jquery.easing.1.3.js',
  '/hikersblog/js/jquery.fancybox.min.js',
  '/hikersblog/js/jquery.magnific-popup.min.js',
  '/hikersblog/js/jquery.stellar.min.js',
  '/hikersblog/js/jquery.sticky.js',
  '/hikersblog/js/jquery.waypoints.min.js',
  '/hikersblog/js/jquery-3.3.1.min.js',
  '/hikersblog/js/jquery-migrate-3.0.0.js',
  '/hikersblog/js/jquery-migrate-3.0.1.min.js',
  '/hikersblog/js/jquery-ui.js',
  '/hikersblog/js/main.js',
  '/hikersblog/js/mediaelement-and-player.min.js',
  '/hikersblog/js/owl.carousel.min.js',
  '/hikersblog/js/popper.min.js',
  '/hikersblog/js/slick.min.js',
  '/hikersblog/js/typed.js',
]

self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) {
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      
      cacheWhitelist.push(CACHE_NAME)

      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})
