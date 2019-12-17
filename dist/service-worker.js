/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["https://alvineandersson.se/android-chrome-192x192.png","6a2ea620122777cbb042c3f12ce917ca"],["https://alvineandersson.se/android-chrome-512x512.png","e7a283de0bfbf5096a0cda938ac34838"],["https://alvineandersson.se/apple-touch-icon.png","ec55c2599cec7436721ff17c2f445990"],["https://alvineandersson.se/arrow.svg","f4be461323ed70a80be2f3d97647ea00"],["https://alvineandersson.se/bg_header.png","ac1839b05d92a3c9818f9063ad10098e"],["https://alvineandersson.se/bg_header.png.webp","fab715f63cedef4798b0060d78d0836e"],["https://alvineandersson.se/bg_matchmaking.png","0ede0e65293933ec9aeb1a909d7f9c2f"],["https://alvineandersson.se/bg_matchmaking.png.webp","d96a6fec138944c9e3abb05e1d563aad"],["https://alvineandersson.se/bg_projects.png","b99d03ae64f99f480bbfb7a3825ca01b"],["https://alvineandersson.se/bg_projects.png.webp","f5c4c2db57337eebd6804b510bd844e3"],["https://alvineandersson.se/bg_raster.png","f7af18ca3165c4236c1e33fb9ef1068a"],["https://alvineandersson.se/bg_raster.png.webp","18cdff3ba84e7237b834804625523dfa"],["https://alvineandersson.se/bg_services.png","28359df250103599e9feb9ce7026dace"],["https://alvineandersson.se/bg_services.png.webp","ba2c9fe84097d1a8a4eb0d134566da6a"],["https://alvineandersson.se/bg_skills.png","18beaf05ef33f7bbb04f114e091d2c79"],["https://alvineandersson.se/bg_skills.png.webp","bb92c0bfda18ff07812f18180659f571"],["https://alvineandersson.se/browserconfig.xml","978bbda74525cec56414d46cdb4c0584"],["https://alvineandersson.se/dubestammer.jpg","227008ebb678dc897cbe7b49c1abce67"],["https://alvineandersson.se/dubestammer.jpg.webp","e7a8fb939b476421253c3e8c0b3f8dd1"],["https://alvineandersson.se/dubestammer_list.jpg","763a8b8277c7cf4057254362e3c1e83d"],["https://alvineandersson.se/dubestammer_list.jpg.webp","6c4ea9ed24e99f2ef8c93358c14c1cb6"],["https://alvineandersson.se/favicon-16x16.png","bcff669ec20cff00b3b97c26a853e0e9"],["https://alvineandersson.se/favicon-32x32.png","2b5df0758aefd97a305e3cc644fe0d21"],["https://alvineandersson.se/favicon.ico","b7e3bd245172189c4bbbc95fdc7be6fd"],["https://alvineandersson.se/filmregionsydost.png.webp","334f1bc2950f64c17008db4f2fc1142c"],["https://alvineandersson.se/filmregionsydost_list.jpg","8d68c6dc23acc2aadaafbfd2e9d744ff"],["https://alvineandersson.se/filmregionsydost_list.jpg.webp","5157a55c333181a8275386bbb80c9986"],["https://alvineandersson.se/footer_image.jpg.webp","72d829f1d54c93e19d76b80674d2b0f3"],["https://alvineandersson.se/fridhadvokatbyra.png","8cd83741883c40fd66833d063a1656ec"],["https://alvineandersson.se/fridhadvokatbyra.png.webp","b09fc9023703c6dac33febce29ddd408"],["https://alvineandersson.se/fridhadvokatbyra_list.jpg","f4af5d36a44d2342255cae687b034f84"],["https://alvineandersson.se/fridhadvokatbyra_list.jpg.webp","19cec5fcdde10f230f2237da4975ebdc"],["https://alvineandersson.se/header_three.jpg","7ccfe65754f097a2e3f8fb5858c06f55"],["https://alvineandersson.se/header_three.jpg.webp","262bc4e6367dbb374d20ad7c2368dcee"],["https://alvineandersson.se/index.html","d25bccf9752b896befeb4ede1a2770eb"],["https://alvineandersson.se/kollektivbudget.png","d1be9c0ae602ea918b397deb09428951"],["https://alvineandersson.se/kollektivbudget.png.webp","7e592c795723aa406ad2d8afc36a613c"],["https://alvineandersson.se/kollektivbudget_list.jpg","c9a32b3c4a8a64afb51be83186e0e9d1"],["https://alvineandersson.se/kollektivbudget_list.jpg.webp","eaa7ca92c25a539f2f7e92153eedd17e"],["https://alvineandersson.se/lesbiskmakt.png","ebbfdccf45787ea13e8113d89644ae07"],["https://alvineandersson.se/lesbiskmakt.png.webp","cb49fba0321a01b33983bfd5c9c0cc51"],["https://alvineandersson.se/lesbiskmakt_list.png","7afa86386af17843a110d226ef654e27"],["https://alvineandersson.se/lesbiskmakt_list.png.webp","0cfabb442dc341220a227fb39f43b2ef"],["https://alvineandersson.se/luleapride.png","fbb44459b8dcaa36494073b10624579b"],["https://alvineandersson.se/luleapride.png.webp","045eada3d69de3f27c4779fe78d0b8ac"],["https://alvineandersson.se/luleapride_list.jpg","d0f4c7703831ece76d7973a2298d3358"],["https://alvineandersson.se/luleapride_list.jpg.webp","13a8ac0a423bd277eda6fa732122074e"],["https://alvineandersson.se/main.bundle.c248ab61aacdb95631bd.js","d4b0e929c2e7bb369ead5f5abad4e050"],["https://alvineandersson.se/mensvarkstestet.png","4474b218c74ec2428b5018fa1adcc898"],["https://alvineandersson.se/mensvarkstestet.png.webp","7153bc00c9e6ab3aeda1390a7c129f65"],["https://alvineandersson.se/mensvarkstestet_list.jpg","dc604a9135c718d961ea651810d1118f"],["https://alvineandersson.se/mensvarkstestet_list.jpg.webp","419ca596b6458d32dc9ca16d1fc74407"],["https://alvineandersson.se/mstile-150x150.png","1d74f9298555607964f4630a6ee63714"],["https://alvineandersson.se/nagotharhant.png","c4da07db01709ea834244ae3f301ee29"],["https://alvineandersson.se/nagotharhant.png.webp","11b4396d4678bffb4d13b0ae28162bb6"],["https://alvineandersson.se/nagotharhant_list.png","1ef3d94cd06644b4abfa2d5a4047b530"],["https://alvineandersson.se/nagotharhant_list.png.webp","9e7b62c497dc6e35816705f0c52517c1"],["https://alvineandersson.se/newcomersyouth.png","f4dcf6d177a7075976e19e0c06b59b92"],["https://alvineandersson.se/newcomersyouth.png.webp","9cd27e5d42e5d88d9868cb4cab3854ba"],["https://alvineandersson.se/newcomersyouth_list.jpg","e4c2b5cd99fb33694fcbe14c9435b6ea"],["https://alvineandersson.se/newcomersyouth_list.jpg.webp","480e84e256a85142603bf36b92a1f217"],["https://alvineandersson.se/pablodigtallvar_list.jpg","98094919d2d79f0d8b9743c20bcbabae"],["https://alvineandersson.se/pablodigtallvar_list.jpg.webp","36f1b7358b1f4a934cd48fe471d85700"],["https://alvineandersson.se/patalom6.png","69097dd6f3a662a622b0d2a631e4ac1a"],["https://alvineandersson.se/patalom6.png.webp","14d87621e80874d5ca4a1880c87bddfe"],["https://alvineandersson.se/patalom6_list.jpg","85c0fe0624a2f239746e20bf43184dd2"],["https://alvineandersson.se/patalom6_list.jpg.webp","569016ac6eddad84791772e732ec15f1"],["https://alvineandersson.se/pba.png","3c61e84811f875611b7ae58121fc3289"],["https://alvineandersson.se/pba.png.webp","3357d40e660900d6d5a04867ffaad94b"],["https://alvineandersson.se/pba_list.jpg","db91b430568337e327ccceafdd23adc0"],["https://alvineandersson.se/pba_list.jpg.webp","ee0e4cf871efde4be65fc8111eba398d"],["https://alvineandersson.se/safari-pinned-tab.svg","a64ad722f53d05396b6fd293751439a9"],["https://alvineandersson.se/share.jpg","e59ab71e45c53a987c08952e62c81fc7"],["https://alvineandersson.se/site.webmanifest","2fa7aebd132a8e7ab8ecd153793f7dec"],["https://alvineandersson.se/socialgames.png","87f40dd5815c4d940bbae2114d4bfc2e"],["https://alvineandersson.se/socialgames.png.webp","6133a8a0ced110d8c9771f0faf848ece"],["https://alvineandersson.se/socialgames_list.jpg","6b10588ff75919b62fe140d76b0297f1"],["https://alvineandersson.se/socialgames_list.jpg.webp","deddfebfc7218fbc65d130113884396d"],["https://alvineandersson.se/style.bundle.c248ab61aacdb95631bd.css","0d0c77a497472ff64016484621140554"],["https://alvineandersson.se/wave.svg","79246cb838047a95ece14a2168b4b2ce"]];
var cacheName = 'sw-precache-v3-Alvine Andersson-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/var/www/html/alvineandersson.se/public_html/distindex.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







