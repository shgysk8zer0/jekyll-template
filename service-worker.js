'use strict';
/*eslint no-undef: 0*/
/* 2020-07-03T17:35*/
self.importScripts('/sw-config.js');

self.addEventListener('install', async event => {
	event.waitUntil((async () => {
		try {
			for (const key of await caches.keys()) {
				if (key !== 'user') {
					await caches.delete(key);
				}
			}

			const cache = await caches.open(config.version);
			await cache.addAll([...config.stale || [], ...config.fresh || []]).catch(console.error);
		} catch (err) {
			console.error(err);
		}
	})());
});

self.addEventListener('activate', event => event.waitUntil(clients.claim()));

self.addEventListener('fetch', event => {
	if (event.request.method === 'GET') {
		event.respondWith((async () => {
			if (Array.isArray(config.stale) && config.stale.includes(event.request.url)) {
				const cached = await caches.match(event.request);
				if (cached instanceof Response) {
					return cached;
				} else {
					const [resp, cache] = await Promise.all([
						fetch(event.request),
						caches.open(config.version),
					]);

					if (resp.ok) {
						cache.put(event.request, resp.clone());
					}

					return resp;
				}
			} else if (Array.isArray(config.fresh) && config.fresh.includes(event.request.url)) {
				if (navigator.onLine) {
					const [resp, cache] = await Promise.all([
						fetch(event.request),
						caches.open(config.version),
					]);

					if (resp.ok) {
						cache.put(event.request, resp.clone());
					}
					return resp;
				} else {
					return caches.match(event.request);
				}
			} else if (Array.isArray(config.allowed) && config.allowed.some(entry => (
				entry instanceof RegExp
					? entry.test(event.request.url)
					: event.request.url === entry
			))) {
				const resp = await caches.match(event.request);

				if (resp instanceof Response) {
					return resp;
				} else if (navigator.onLine) {
					const resp = await fetch(event.request);

					if (resp instanceof Response) {
						const cache = await caches.open(config.version);
						cache.put(event.request, resp.clone());
						return resp;
					} else {
						console.error(`Failed in request for ${event.request.url}`);
					}
				} else {
					console.error('Offline');
				}
			} else {
				return fetch(event.request);
			}
		})());
	}
});

self.addEventListener('error', console.error);
