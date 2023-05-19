---
layout: null
---
/* eslint-env serviceworker */
/* eslint no-unused-vars: 0 */

const config = {
	version: '{{ site.data.app.version | default: site.version }}',
	fresh: [
		/* Root document, pages, and posts */
		'{{ site.pages | where: "pinned", true | map: "url" | join: "', '" }}',
		'{{ site.posts | where: "pinned", true | map: "url" | join: "', '" }}',
		'/webapp.webamanifest',
		'https://apps.kernvalley.us/apps.json',
	].map(path => new URL(path, location.origin).href),
	stale: [
		/* JS */
		'{{ site.data.importmap.imports["@shgysk8zer0/polyfills"] }}',
		'{{ site.data.importmap.imports["@shgysk8zer0/kazoo/"] }}harden.js',
		'/js/index.min.js',

		/* CSS */
		'/css/index.min.css',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}button/share-to.css',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}github/user.css',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}install/prompt.css',

		/* Data and JSON */
		'/manifest.json',

		/* `customElements`templates */
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}button/share-to.html',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}github/user.html',
		'{{ site.data.importmap.imports["@shgysk8zer0/components/"] }}install/prompt.html',

		/* Images & Icons */
		'/img/icons.svg',
		'/img/neon.svg',
		'/img/apple-touch-icon.png',
		'/img/icon-512.png',
		'/img/icon-192.png',
		'/img/icon-32.png',
		'/img/favicon.svg',
		'https://cdn.kernvalley.us/img/keep-kern-clean.svg',
		'https://cdn.kernvalley.us/img/logos/play-badge.svg',
		'https://cdn.kernvalley.us/img/logos/itunes-badge.svg',
		'https://cdn.kernvalley.us/img/logos/windows-badge.svg',
		'https://cdn.kernvalley.us/img/logos/instagram.svg',
		'https://cdn.kernvalley.us/img/markers.svg',

		/* Fonts */
		'https://cdn.kernvalley.us/fonts/roboto.woff2',
	].map(path => new URL(path, location.origin).href),
	allowed: [
		'https://maps.wikimedia.org/osm-intl/',
		'/https://i.imgur.com/',
		'/https://secure.gravatar.com/avatar/',
		/https:\/\/*\.githubusercontent\.com\/u\/*/,
		/\.(jpg|png|webp|svg|gif)$/,
	],
	allowedFresh: [
		'https://www.google-analytics.com/analytics.js',
		'https://www.googletagmanager.com/gtag/js',
		'https://baconipsum.com/api/',
		'https://api.github.com/users/',
		'https://api.openweathermap.org/data/',
		/\.(html|css|js|json)$/,
	]
};
