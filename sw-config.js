---
layout: null
---
'use strict';
/* eslint-env serviceworker */
/* eslint no-unused-vars: 0 */

const config = {
	version: '{{ site.data.app.version | default: site.version }}',
	fresh: [
		/* Root document */
		'{{ site.pages | where: "pinned", true | map: "url" | join: "', '" }}',
		'{{ site.posts | where: "pinned", true | map: "url" | join: "', '" }}',
	].map(path => new URL(path, location.origin).href),
	stale: [
		/* Other HTML */
		'/css/index.min.css',
		'/js/index.min.js',
		'/img/icons.svg',

		/* JS */
		'https://cdn.polyfill.io/v3/polyfill.min.js',
		'https://cdn.kernvalley.us/components/share-target.js',

		/* `customElements`templates */
		'https://cdn.kernvalley.us/components/toast-message.html',
		'https://cdn.kernvalley.us/components/leaflet/map.html',
		'https://cdn.kernvalley.us/components/share-to-button/share-to-button.html',
		'https://cdn.kernvalley.us/components/slide-show/slide-show.html',
		'https://cdn.kernvalley.us/components/github/user.html',
		'https://cdn.kernvalley.us/components/pwa/prompt.html',

		/* CSS */
		'https://cdn.kernvalley.us/components/toast-message.css',
		'https://cdn.kernvalley.us/components/leaflet/map.css',
		'https://cdn.kernvalley.us/components/share-to-button/share-to-button.css',
		'https://cdn.kernvalley.us/components/slide-show/slide-show.css',
		'https://cdn.kernvalley.us/components/github/user.css',
		'https://cdn.kernvalley.us/components/pwa/prompt.css',
		'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',

		/* Images & Icons */
		'/img/apple-touch-icon.png',
		'/img/icon-512.png',
		'/img/icon-192.png',
		'/img/icon-32.png',
		'/img/favicon.svg',

		/* Social Icons for Web Share API shim */
		'https://cdn.kernvalley.us/img/octicons/mail.svg',
		'https://cdn.kernvalley.us/img/logos/facebook.svg',
		'https://cdn.kernvalley.us/img/logos/twitter.svg',
		'https://cdn.kernvalley.us/img/logos/linkedin.svg',
		'https://cdn.kernvalley.us/img/logos/reddit.svg',
		'https://cdn.kernvalley.us/img/logos/gmail.svg',
		'https://cdn.kernvalley.us/img/logos/instagram.svg',

		/* Fonts */
		'https://cdn.kernvalley.us/fonts/roboto.woff2',
		'https://cdn.kernvalley.us/fonts/Libertine.woff',
		'https://cdn.kernvalley.us/fonts/ubuntu.woff2',
		/* Other */
	].map(path => new URL(path, location.origin).href),
	allowed: [
		/https:\/\/maps\.wikimedia\.org\/osm-intl\/*/,
		/https:\/\/i\.imgur\.com\/*/,
		/https:\/\/secure\.gravatar\.com\/avatar\/*/,
		/https:\/\/*\.githubusercontent\.com\/u\/*/,
		/https:\/\/api\.github\.com\/users\/*/,
		/https:\/\/baconipsum\.com\/api\/*/,
	],
};
