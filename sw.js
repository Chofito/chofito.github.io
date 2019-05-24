importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/116b04bd9fee8634d019.js",
    "revision": "bd7743aed48e2b8265b34d0c7580021f"
  },
  {
    "url": "/_nuxt/3c1a02a5a93e62b65bd8.js",
    "revision": "d769caeea516421920f4165ccb7457da"
  },
  {
    "url": "/_nuxt/4ff46e5d325d4cee61bf.js",
    "revision": "990729112e45dd334c6b915b3ecc5d50"
  },
  {
    "url": "/_nuxt/6e04b79ba1b6aae248f6.js",
    "revision": "1c810fb9020e3bc7a9e60840ee858f99"
  },
  {
    "url": "/_nuxt/7e9629a81d1c75ba7719.js",
    "revision": "adba5a6a8dd4dfb82cb7b6d3c8322054"
  },
  {
    "url": "/_nuxt/8622792d6b0f5fa21bbf.js",
    "revision": "f88576adbeb40fc0d0a40af815302534"
  },
  {
    "url": "/_nuxt/90f6abc541224fbf3fbe.js",
    "revision": "548f4d6cd9f7eab0c158e3887376dc72"
  },
  {
    "url": "/_nuxt/954f3492731155ea2cb5.js",
    "revision": "28a227f4ec82d0f5c531cd2a00f9b8a8"
  },
  {
    "url": "/_nuxt/a12f34252847626fe0f3.js",
    "revision": "d93108b09cb8c49cafe3f7f0c6052232"
  },
  {
    "url": "/_nuxt/cf71aea05f5de7b4944a.js",
    "revision": "572b0f9a3dd8b65b6ede289cc71d9441"
  },
  {
    "url": "/_nuxt/d12855a3258808fc4876.js",
    "revision": "48f090b9b5485145a681b16d4f9f7888"
  },
  {
    "url": "/_nuxt/ff374227f1615d9b6d5a.js",
    "revision": "3ea7a9e84c6e7508864d9ab0002ae30c"
  }
], {
  "cacheId": "chofitoblog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
