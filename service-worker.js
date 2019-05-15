/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "819372fe5e0b1955b4547943bd47cec4"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "be49c25d989daa06e2709e54d0dea4a3"
  },
  {
    "url": "index.html",
    "revision": "4bec6a3b326d222940d7eb0f31609a74"
  },
  {
    "url": "js/app.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "manifest.json",
    "revision": "bccdfae42f0123760b3fcf3a170ae442"
  },
  {
    "url": "package-lock.json",
    "revision": "d44fb0f3ca034470dd760319dfd4807b"
  },
  {
    "url": "package.json",
    "revision": "34df9ae5c6ab7417124b3d2046151702"
  },

  {
    "url": "workbox-config.js",
    "revision": "5af390134f84003b6f2eb631014e8470"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images-cache", plugins: [] }), 'GET');
