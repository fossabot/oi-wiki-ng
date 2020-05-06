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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "d2d3612af1df181302e193fa8c922dd4"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "885296f794bc4c06d05f9cb1f0a23695"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "9c7c88be4fdc1d27d636b6b94b02d7db"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "42d70fc5e2d87037bcacbde93a84f78f"
  },
  {
    "url": "page-data/math/page-data.json",
    "revision": "7c8eb76606c7a253d409db76bc06e93c"
  },
  {
    "url": "page-data/math/poly/div-mod/page-data.json",
    "revision": "73adb8d804cb93d9e42fd71ce50d639d"
  },
  {
    "url": "page-data/math/poly/fft/page-data.json",
    "revision": "cac8150de6c267c54e07abf395a2edec"
  },
  {
    "url": "page-data/math/poly/fwt/page-data.json",
    "revision": "a04cddb6f453603b56a45f1b2fd20855"
  },
  {
    "url": "page-data/math/poly/intro/page-data.json",
    "revision": "0996aef2161beec1e59420f35281cfd5"
  },
  {
    "url": "page-data/math/poly/inv-tri-func/page-data.json",
    "revision": "60ba2385bca1af632012296cb200361d"
  },
  {
    "url": "page-data/math/poly/inv/page-data.json",
    "revision": "22a903ee8aaf9d17db8c40bc4134b7cc"
  },
  {
    "url": "page-data/math/poly/lagrange/page-data.json",
    "revision": "687160ec31e165464404bf5caaa8bab8"
  },
  {
    "url": "page-data/math/poly/ln-exp/page-data.json",
    "revision": "e64f8078c2837a68e4e65ca7fec5252d"
  },
  {
    "url": "page-data/math/poly/multipoint-eval-interpolation/page-data.json",
    "revision": "5fc82b0a7943e209f31455527ad6d591"
  },
  {
    "url": "page-data/math/poly/newton/page-data.json",
    "revision": "fccba3e79881527f3842c8325c4dea7b"
  },
  {
    "url": "page-data/math/poly/ntt/page-data.json",
    "revision": "b3ebb9c747afb38867494e33f3900f15"
  },
  {
    "url": "page-data/math/poly/sqrt/page-data.json",
    "revision": "c1c117dd4c5d37d1e5516adb86a63987"
  },
  {
    "url": "page-data/math/poly/tri-func/page-data.json",
    "revision": "0118252d744e68184be56a6643119f5e"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/pages/page-data.json",
    "revision": "14d8476c86c6fe1e005e5e65e6aa07aa"
  },
  {
    "url": "page-data/search/page-data.json",
    "revision": "3bde0c154ca8ce7fbed4926b729b38fd"
  },
  {
    "url": "page-data/tags/animals/page-data.json",
    "revision": "c5174fae8be6c6231409c4c7bfdc03fa"
  },
  {
    "url": "page-data/tags/chicago/page-data.json",
    "revision": "3d0c07ac2a40f7e34efb2b262c411b6a"
  },
  {
    "url": "page-data/tags/chinese/page-data.json",
    "revision": "6429deb47a7f828940ee7d3a22795df7"
  },
  {
    "url": "page-data/tags/math/page-data.json",
    "revision": "be3a4764af2feec3ac03588908c0dcf3"
  },
  {
    "url": "page-data/tags/page-data.json",
    "revision": "668b7da83ba79d703e347ae3219cb37f"
  },
  {
    "url": "page-data/tags/polynomial/page-data.json",
    "revision": "2c560cc9f86a1d37be80bb3225cccc1b"
  },
  {
    "url": "page-data/tags/test/page-data.json",
    "revision": "f1de0b026c0e6181dac0d2e76324d0d8"
  },
  {
    "url": "page-data/tags/zoos/page-data.json",
    "revision": "fd3b2b8fc9c78c0f712f2b88a0acd67e"
  },
  {
    "url": "page-data/tags/中文/page-data.json",
    "revision": "0cdc4458160bc5f8cd9c7fe47d975ef3"
  },
  {
    "url": "page-data/test/page-data.json",
    "revision": "0c992399e85f2c98be3789610c1b15e0"
  },
  {
    "url": "13-460341f0387656d1131d.js"
  },
  {
    "url": "389b49c9270c6cb1b6ad912fe73aaf3b03659c7c-aec13e808f7584f2b4bd.js"
  },
  {
    "url": "app-733f40e2dad8dc29849a.js"
  },
  {
    "url": "bab4896a-ba9cf500cb1a07f2952b.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-a6191254e4a51f6eb8b2.js"
  },
  {
    "url": "component---src-pages-404-js-d10bca12277477160c66.js"
  },
  {
    "url": "component---src-pages-pages-js-53b9424e622c3eca2a3a.js"
  },
  {
    "url": "component---src-pages-search-js-de40a5c8190b70b4508f.js"
  },
  {
    "url": "component---src-pages-tags-js-066477eb84c3414266db.js"
  },
  {
    "url": "component---src-templates-doc-js-f0fcdbdc5149b16bc090.js"
  },
  {
    "url": "component---src-templates-tags-js-7694aeadebefa55e3c9b.js"
  },
  {
    "url": "framework-d18255661b01063664e4.js"
  },
  {
    "url": "idb-keyval-iife.min.js"
  },
  {
    "url": "styles-f12963b3798c232a68f6.js"
  },
  {
    "url": "webpack-runtime-d85f93daf467cc497651.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "5eae869a9e249b18d5cea2d6af22f51c"
  },
  {
    "url": "styles.1c5aaac32b2e86deff0f.css"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "a64367b2f20302a9d6f214569017f012"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(json)$/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(woff|woff2)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff)$/, new workbox.strategies.NetworkOnly(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-733f40e2dad8dc29849a.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
