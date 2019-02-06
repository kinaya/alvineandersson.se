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

var precacheConfig = [["https://alvineandersson.se/android-chrome-192x192.png","6a2ea620122777cbb042c3f12ce917ca"],["https://alvineandersson.se/android-chrome-512x512.png","e7a283de0bfbf5096a0cda938ac34838"],["https://alvineandersson.se/apple-touch-icon.png","ec55c2599cec7436721ff17c2f445990"],["https://alvineandersson.se/arrow.svg","f4be461323ed70a80be2f3d97647ea00"],["https://alvineandersson.se/bg_header.png","ac1839b05d92a3c9818f9063ad10098e"],["https://alvineandersson.se/bg_matchmaking.png","0ede0e65293933ec9aeb1a909d7f9c2f"],["https://alvineandersson.se/bg_projects.png","b99d03ae64f99f480bbfb7a3825ca01b"],["https://alvineandersson.se/bg_raster.png","f7af18ca3165c4236c1e33fb9ef1068a"],["https://alvineandersson.se/bg_services.png","28359df250103599e9feb9ce7026dace"],["https://alvineandersson.se/bg_skills.png","18beaf05ef33f7bbb04f114e091d2c79"],["https://alvineandersson.se/browserconfig.xml","978bbda74525cec56414d46cdb4c0584"],["https://alvineandersson.se/djurfabriken_list.png","74f48c6d6024064174c87715682aad4e"],["https://alvineandersson.se/favicon-16x16.png","bcff669ec20cff00b3b97c26a853e0e9"],["https://alvineandersson.se/favicon-32x32.png","2b5df0758aefd97a305e3cc644fe0d21"],["https://alvineandersson.se/favicon.ico","b7e3bd245172189c4bbbc95fdc7be6fd"],["https://alvineandersson.se/filmregion_list.jpg","8d68c6dc23acc2aadaafbfd2e9d744ff"],["https://alvineandersson.se/footer_image.jpg","2d9472c37ba0e56f3da92880216afea0"],["https://alvineandersson.se/fridhadvokatbyra_list.jpg","f4af5d36a44d2342255cae687b034f84"],["https://alvineandersson.se/header_three.jpg","7ccfe65754f097a2e3f8fb5858c06f55"],["https://alvineandersson.se/index.html","c32245e939657484826f975b7a3ae82c"],["https://alvineandersson.se/lesbiskmakt_list.png","7afa86386af17843a110d226ef654e27"],["https://alvineandersson.se/main.bundle.c008760c85fbe4a86ac1.js","e1451a7ca62d5b38b495bc17c0c3aad7"],["https://alvineandersson.se/mensvarkstest.png","4474b218c74ec2428b5018fa1adcc898"],["https://alvineandersson.se/mensvarkstest_list.jpg","dc604a9135c718d961ea651810d1118f"],["https://alvineandersson.se/mstile-150x150.png","1d74f9298555607964f4630a6ee63714"],["https://alvineandersson.se/newcomers_list.jpg","e4c2b5cd99fb33694fcbe14c9435b6ea"],["https://alvineandersson.se/pablodigtallvar_list.jpg","98094919d2d79f0d8b9743c20bcbabae"],["https://alvineandersson.se/patalom6_list.jpg","85c0fe0624a2f239746e20bf43184dd2"],["https://alvineandersson.se/pba.png","3c61e84811f875611b7ae58121fc3289"],["https://alvineandersson.se/pba_list.jpg","db91b430568337e327ccceafdd23adc0"],["https://alvineandersson.se/project_large.jpg","af2ba04fc8dc7a5e3f8612d59982ceab"],["https://alvineandersson.se/safari-pinned-tab.svg","a64ad722f53d05396b6fd293751439a9"],["https://alvineandersson.se/safunkarsex_list.jpg","f9ff594f2e971665d4cc983408b0663b"],["https://alvineandersson.se/site.webmanifest","3f0cbbe9e66668c2f93e26147827f715"],["https://alvineandersson.se/style.bundle.c008760c85fbe4a86ac1.css","6b2766a2218c7502813751f0ac9a14f7"],["https://alvineandersson.se/wavy.png","6f13289f57bc1a5f6542b82b177e4d6e"],["https://alvineandersson.se/whale.png","2a29a0aebad1ff8f1bbe38d114bcdec3"]];
var cacheName = 'sw-precache-v3-Alvine Andersson-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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






