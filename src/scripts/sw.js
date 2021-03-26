import "regenerator-runtime/runtime";
import { precacheAndRoute } from "workbox-precaching/precacheAndRoute";
import { CacheableResponse } from "workbox-cacheable-response";
import { cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute } from "workbox-routing/registerRoute";
import {
  CacheFirst,
  NetworkFirst,
  StaleWhileRevalidate,
} from "workbox-strategies";
import { ExpirationPlugin } from "workbox-expiration";
import { skipWaiting, clientsClaim, setCacheNameDetails } from "workbox-core";

console.log("Hai Domo, From Service Worker");

skipWaiting();
clientsClaim();

console.log("Yay! Workbox is loaded 🎉");

setCacheNameDetails({
  prefix: "Basi-Lite",
  precache: "precache",
  runtime: "runtime",
});

const precache = self.__WB_MANIFEST;

precacheAndRoute(precache || [], {
  ignoreURLParametersMatching: [/.*/],
});

console.log(precache);

registerRoute(
  /^https:\/\/dicoding-restaurant-api\.el\.r\.appspot\.com\/(?:(list|detail))/,
  new NetworkFirst({
    cacheName: "dicoding-restaurant-api",
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 30 * 2,
        maxEntries: 100,
      }),
    ],
  })
);

registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);

registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new StaleWhileRevalidate({
    cacheName: "google-fonts-stylesheets",
  })
);

registerRoute(
  /^https:\/\/fonts\.gstatic\.com/,
  new CacheFirst({
    cacheName: "google-fonts-webfonts",
    plugins: [
      // eslint-disable-next-line no-undef
      new CacheableResponse({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 60 * 60 * 24 * 365,
        maxEntries: 30,
      }),
    ],
  })
);

cleanupOutdatedCaches();

self.addEventListener("push", (event) => {
  const title = "Get Started With Workbox";
  const options = {
    body: event.data.text(),
  };
  event.waitUntil(self.registration.showNotification(title, options));
});
