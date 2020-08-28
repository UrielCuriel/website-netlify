// @ts-check

import {
  registerRoute,
  setDefaultHandler,
  setCatchHandler,
} from "workbox-routing"
import { CacheFirst, NetworkFirst, NetworkOnly } from "workbox-strategies"
import { skipWaiting, clientsClaim } from "workbox-core"
import { precacheAndRoute, matchPrecache } from "workbox-precaching"
import { BackgroundSyncPlugin } from "workbox-background-sync"
import { ExpirationPlugin } from "workbox-expiration"
import { RoutifyPlugin, freshCacheData } from "@sveltech/routify/workbox-plugin"

/**********
 * CONFIG *
 **********/

const entrypointUrl = "__app.html" // entrypoint
const fallbackImage = "404.svg"
// @ts-ignore
const files = self.__WB_MANIFEST // files matching globDirectory and globPattern in rollup.config.js

const externalAssetsConfig = () => ({
  cacheName: "external",
  plugins: [
    RoutifyPlugin({
      validFor: 60, // cache is considered fresh for n seconds.addToCacheList
    }),
    new ExpirationPlugin({
      maxEntries: 50, // last used entries will be purged when we hit this limit
      purgeOnQuotaError: true, // purge external assets on quota error
    }),
  ],
})

/**************
 * INITIALIZE *
 **************/

/**
 * precache all files
 * remember to precache __app.html and 404.svg if caching of all files is disabled
 */

precacheAndRoute(files || ["__app.html", "404.svg"])

/** precache only fallback files */
// precacheAndRoute(files.filter(file =>
//
// ))

skipWaiting() // auto update service workers across all tabs when new release is available
clientsClaim() // take control of client without having to wait for refresh

/**
 * manually upgrade service worker by sending a SKIP_WAITING message.
 * (remember to disable skipWaiting() above)
 */
addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") skipWaiting()
})

/**********
 * ROUTES *
 **********/

// serve local pages from the SPA entry point (__app.html)
// @ts-ignore
registerRoute(isLocalPage, matchPrecache(entrypointUrl))

// serve local assets from cache first
registerRoute(isLocalAsset, new CacheFirst())

const bgSyncPlugin = new BackgroundSyncPlugin("Contentful", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
})

registerRoute(
  /graphql.contentful.com/,
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST",
)

// serve external assets from cache if they're fresh
registerRoute(hasFreshCache, new CacheFirst(externalAssetsConfig()))
registerRoute(hasWitheringCache, new CacheFirst())

// serve external pages and assets
setDefaultHandler(new NetworkFirst(externalAssetsConfig()))

// serve a fallback for 404s if possible or respond with an error
setCatchHandler(async ({ event }) => {
  switch (event.request.destination) {
    case "document":
      return await matchPrecache(entrypointUrl)
    case "image":
      return await matchPrecache(fallbackImage)
    default:
      return Response.error()
  }
})

/**********
 * CONDITIONS *
 **********/

function isLocalAsset({ url, request }) {
  return url.host === self.location.host && request.destination != "document"
}
function isLocalPage({ url, request }) {
  return url.host === self.location.host && request.destination === "document"
}
function hasFreshCache(event) {
  return !!freshCacheData(event)
}

/** Example condition */
function hasWitheringCache(event) {
  const cache = freshCacheData(event)
  if (cache) {
    const { validFor, validLeft } = cache
    // return true if half the fresh time has passed
    return validFor / 2 > validFor - validLeft
  }
}
