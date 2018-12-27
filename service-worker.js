importScripts("/precache-manifest.e3dda262e7dacca0980545047f3ba80a.js");


        importScripts('/static/workbox-v3.6.3/workbox-sw.js');
        workbox.setConfig({
            modulePathPrefix: '/static/workbox-v3.6.3/'
        });
    /**
 * @file service-worker.js with workbox api
 * @desc [example](https://workbox-samples.glitch.me/examples/workbox-sw/)
 * @author liupeng(1129638103@qq.com)
 */

/* globals workbox */
workbox.core.setCacheNameDetails({
    prefix: 'lavas-cache',
    suffix: 'v1',
    precache: 'install-time',
    runtime: 'run-time',
    googleAnalytics: 'ga'
});
workbox.skipWaiting();
workbox.clientsClaim();

workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

/**
 * example runningCache with api
 */
// workbox.routing.registerRoute(/^https:\/\/lavas\.baidu\.com\/some\/api/,
//     workbox.strategies.networkFirst());


/**
 * example runningCache with resources from CDN
 * including maxAge, maxEntries
 * cacheableResponse is important for CDN
 */
// workbox.routing.registerRoute(/^https:\/\/cdn\.baidu\.com/i,
//     workbox.strategies.cacheFirst({
//         cacheName: 'lavas-cache-images',
//         plugins: [
//             new workbox.expiration.Plugin({
//                 maxEntries: 100,
//                 maxAgeSeconds: 7 * 24 * 60 * 60
//             }),
//             new workbox.cacheableResponse.Plugin({
//                 statuses: [0, 200]
//             })
//         ]
//     })
// );
self.addEventListener('push', function (e) {
    var data = e.data;
    if (e.data) {
        data = data.json();
        console.log('push的数据为：', data);
        self.registration.showNotification(data.text);
    }
    else {
        console.log('push没有任何数据');
    }
});

workbox.routing.registerNavigationRoute('/index.html');
