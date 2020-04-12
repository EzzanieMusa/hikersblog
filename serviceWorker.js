const staticDevHikers = "dev-Hikersblog-v1"
const assets = [
  "/",
  "/hikersblog/index.html",
  "/hikersblog/css/style.css",
  "/hikersblog/images/1.jpg",
  "/hikersblog/images/2.jpg",
  "/hikersblog/images/3.jpg",
  "/hikersblog/images/4.jpg",
  "/hikersblog/images/5.jpg",
  "/hikersblog/images/6.jpg",
  "/hikersblog/images/blog.jpg",
  "/hikersblog/images/boots.jpg",
  "/hikersblog/images/bshelang.jpg",
  "/hikersblog/images/bshelang2.jpg",
  "/hikersblog/images/bshelang3.jpg",
  "/hikersblog/images/bshelang4.jpg",
  "/hikersblog/images/bsipatir.jpg",
  "/hikersblog/images/bsipatir1.jpg",
  "/hikersblog/images/bsipatir2.jpg",
  "/hikersblog/images/bsipatir3.jpg",
  "/hikersblog/images/index.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticHikersblog).then(cache => {
      cache.addAll(assets)
    })
  )
})
