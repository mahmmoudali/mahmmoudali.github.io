'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e9eb58db72d407be27e9fa052224c304",
"favicon.ico": "42294c45afd955eee844eee677ccbceb",
"index.html": "2a07066ef9bcfcdf0631fe40fe2665cf",
"/": "2a07066ef9bcfcdf0631fe40fe2665cf",
"main.dart.js": "1245729fd0aa32dbdac695cc0af28e61",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "1026fd2714770c1a90868f5794b18294",
"icons/favicon-16x16.png": "1026fd2714770c1a90868f5794b18294",
"icons/favicon.ico": "42294c45afd955eee844eee677ccbceb",
"icons/apple-icon.png": "51cf468bc396abfa171a429dd2ace598",
"icons/apple-icon-144x144.png": "d4945001ce10d0dbfedccf05b2adc879",
"icons/android-icon-192x192.png": "9b677fec6cf72786533a96332d897963",
"icons/apple-icon-precomposed.png": "51cf468bc396abfa171a429dd2ace598",
"icons/apple-icon-114x114.png": "9311196948995e91633957832d7a144e",
"icons/ms-icon-310x310.png": "a96a4cbc02d93da61e681666061b5056",
"icons/ms-icon-144x144.png": "d4945001ce10d0dbfedccf05b2adc879",
"icons/apple-icon-57x57.png": "1bf47ccee7b69ad5986c1c4f4d4e34cb",
"icons/apple-icon-152x152.png": "7fccce826b72241ca99d6db5890f19c4",
"icons/ms-icon-150x150.png": "26fbea557da45fa4338d0f4bb168fdca",
"icons/android-icon-72x72.png": "8dee910a96dfb3bd5188cbccd5e92b35",
"icons/android-icon-96x96.png": "cbc799b8974cab64d79e7ff72ae9144f",
"icons/android-icon-36x36.png": "f6e5b6299d17d8f66ea25df856a401cd",
"icons/apple-icon-180x180.png": "cafc72438adeead6e23cab38cc905597",
"icons/favicon-96x96.png": "aab72a8931841465ea6b76010cd8440e",
"icons/android-icon-48x48.png": "22414f93cbce38e9fdd2a30b7f2f21cd",
"icons/apple-icon-76x76.png": "e12b97ad753c059eaa59eb3eb8ee8ab5",
"icons/apple-icon-60x60.png": "a22dc55112275ff3d60d8c07ad93c874",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "1928b7f000ea1d7bbb3b7018c79c8ee0",
"icons/apple-icon-72x72.png": "8dee910a96dfb3bd5188cbccd5e92b35",
"icons/apple-icon-120x120.png": "2efc60de09643e809b0bf71fe0dad3da",
"icons/favicon-32x32.png": "be0db01bb0e26431cdf1eb74414ae51f",
"icons/ms-icon-70x70.png": "e3eec3da91a0bac8d4b637b90209fb5d",
"manifest.json": "fee796c57c78d57ddcd4382909dcd6ca",
"assets/AssetManifest.json": "f8e7bbdf91dc6118f1943713a8b50fb1",
"assets/loading.gif": "7a63480a257cdcc94fea9fa407908cbf",
"assets/NOTICES": "a17a6126fba42cf90addf3d886373408",
"assets/FontManifest.json": "791cdf1b69781ae335959fcb663b2b58",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/shaders/ink_sparkle.frag": "4e1a7465341ff45f44303ab92a9cca53",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/profile_pic.png": "5f56c3070f1c066ae15ecad12fb44f54",
"assets/assets/images/logo.png": "70ba82d27f67f526cd5ff370c5c174a2",
"assets/assets/images/technician.png": "45def0790096b32480c944c796b8abcc",
"assets/assets/icons/horizental_label.svg": "dac500f5ab23b423f04e94a7d31e04ca",
"assets/assets/icons/viewed_circle.svg": "92a288dc9776bc3b14e3ecd80bbf50a5",
"assets/assets/icons/search.svg": "8215950e03660022c332ec56f4fae34b",
"assets/assets/icons/origin.svg": "fe74c736b2a0004354ebae162c2b5383",
"assets/assets/icons/Ampere.svg": "89bef01e094a867b891eb688a7174eed",
"assets/assets/icons/spot_circle.svg": "a77ed88c504320350667bfdaad80f1d5",
"assets/assets/icons/home.svg": "28445cd19f5ba8bb7c0796f74741628d",
"assets/assets/icons/motor_power.svg": "391821e216a07c55c56eae7d0ed1c69b",
"assets/assets/icons/delete_bold.svg": "155229d7a2111aa79b3645578305f3f8",
"assets/assets/icons/edit_bold.svg": "db10496e70244a69024c0f5341d5f5c0",
"assets/assets/icons/horse_power.svg": "bea04fb3ab7e6640e9d71472a6bc7664",
"assets/assets/icons/best_seller_circle.svg": "b85902df88241a6abe589ac1561bfa77",
"assets/assets/icons/group.svg": "7b2465c83f1e8860947c295f33ee23c2",
"assets/assets/icons/history_circle.svg": "15a7b688f8401b538b435834ba46f7e8",
"assets/assets/icons/electric_car.svg": "8b6c846c2f7d575e6fb1f08b926da09c",
"assets/assets/icons/person.png": "9395e52bca40b0739bec99a0c2b15853",
"assets/assets/icons/flash.svg": "02796d91e5a6a015d77f681787d448f9",
"assets/assets/icons/pickup.svg": "43346c2a77545d5c17e8352839f11d9a",
"assets/assets/icons/battery.svg": "4ffe0f340ddb9b580d41beb67aba9cde",
"assets/assets/icons/arrow_right.svg": "11f41451f73e6d1fcb6d664cd92fedc1",
"assets/assets/icons/shop_bold.svg": "2219dd9a5a5763b07f944f26b671e1dd",
"assets/assets/icons/brand.svg": "9cbf14a451a75fdd01e5ad70fe95b1bd",
"assets/assets/icons/setting.svg": "a57863486d7ed2844d0b35ae31f87851",
"assets/assets/icons/crown.svg": "ce7dec2611f4de8649be68671b66bdee",
"assets/assets/icons/flash_circle.svg": "3e450e00f22b2702e6cceac2da9dff19",
"assets/assets/icons/flash_circle_dark.svg": "ef64c86d924fa1e485e566de26b5df2a",
"assets/assets/icons/ev-light.svg": "a3265825b3a23f1a5ce65d62c3f684bd",
"assets/assets/icons/Phase.svg": "7db13fcbd079092d472f5f6f3300c72e",
"assets/assets/icons/vertical_label.svg": "3c9fa0147bbb2085cb60d0013f013d5c",
"assets/assets/icons/range.svg": "d081a0032955eb936ddd077bd6037ac7",
"assets/assets/icons/setting_bold.svg": "869187697b4733d2bf2e5d6553b791bd",
"assets/assets/icons/location.svg": "2f6ab2e7dd12c35ca4e81851b6968a9a",
"assets/assets/icons/bag_circle.svg": "52c86f0488962eb0c14a92439b8c276e",
"assets/assets/icons/filter.svg": "4b3b0a1463c484f7f50641109e611925",
"assets/assets/icons/adapter.svg": "74c9c7a8a97b042fe11b2f82181e2c10",
"assets/assets/icons/logo.svg": "b3af0c077a73709c992d7e075b76ce33",
"assets/assets/icons/flash_bold.svg": "56f2a96f2e042fea8bd8cdc1b8a34519",
"assets/assets/icons/graph.svg": "2a76c6914d36026dfd71b2c27af2aeb9",
"assets/assets/icons/folder.svg": "4d31b9f8d02a2ad7850068da776b3e0c",
"assets/assets/fonts/Montserrat-Medium.ttf": "5f797490f806b3b229299f0a66de89c9",
"assets/assets/fonts/Montserrat-Light.ttf": "9e52b00d737492e337b2498406aef98f",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "31e34a4dc526ffb104e2d988f6f52516",
"assets/assets/fonts/Montserrat-Regular.ttf": "f7213526ec9296ff43426bfe3eae8926",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
