---
	layout: null
---
	'use strict';
/*eslint no-unused-vars: 0*/
const config = {
	version: '{{ site.version }}',
	fresh: [
		/* Root document */
		'{{ site.pages | where: "pinned", true | map: "url" | join: "', '" }}',
		'{{ site.posts | where: "pinned", true | map: "url" | join: "', '" }}',
	].map(path => new URL(path, location.origin).href),
	stale: [
		/* Other HTML */
		'/css/index.css',
		'/js/index.js',
		'/img/icons.svg',
		'https://polyfill.io/v3/polyfill.min.js?features=matchMedia%2CWebAnimations',
		'https://unpkg.com/@webcomponents/custom-elements@1.3.1/custom-elements.min.js',
		'https://cdn.kernvalley.us/components/toast-message.html',
		'https://cdn.kernvalley.us/components/login-form/login-form.html',
		'https://cdn.kernvalley.us/components/registration-form/registration-form.html',

		/* JS, `customElements`, etc. */
		'https://cdn.kernvalley.us/components/share-button.js',
		'https://cdn.kernvalley.us/js/std-js/share-config.js',
		'https://cdn.kernvalley.us/components/current-year.js',
		'https://cdn.kernvalley.us/js/std-js/deprefixer.js',
		'https://cdn.kernvalley.us/js/std-js/shims.js',
		'https://cdn.kernvalley.us/js/std-js/md5.js',
		'https://cdn.kernvalley.us/js/std-js/Notification.js',
		'https://cdn.kernvalley.us/js/std-js/webShareApi.js',
		'https://cdn.kernvalley.us/js/std-js/esQuery.js',
		'https://cdn.kernvalley.us/js/std-js/functions.js',
		'https://cdn.kernvalley.us/components/login-button.js',
		'https://cdn.kernvalley.us/components/logout-button.js',
		'https://cdn.kernvalley.us/components/register-button.js',
		'https://cdn.kernvalley.us/components/gravatar-img.js',
		'https://cdn.kernvalley.us/components/toast-message.js',
		'https://cdn.kernvalley.us/js/std-js/asyncDialog.js',
		'https://cdn.kernvalley.us/js/User.js',
		'https://cdn.kernvalley.us/components/login-form/login-form.js',
		'https://cdn.kernvalley.us/components/registration-form/registration-form.js',
		'https://unpkg.com/leaflet@1.6.0/dist/leaflet-src.esm.js',
		'https://cdn.kernvalley.us/components/open-street-map.js',
		'https://cdn.kernvalley.us/components/open-street-map.html',
		'https://cdn.kernvalley.us/components/map-marker.js',
		'https://cdn.kernvalley.us/components/image-overlay.js',
		'https://cdn.kernvalley.us/js/PaymentAPI/PaymentRequest.js',
		'https://cdn.kernvalley.us/js/PaymentAPI/PaymentRequestUpdateEvent.js',
		'https://cdn.kernvalley.us/js/PaymentAPI/PaymentAddress.js',
		'https://cdn.kernvalley.us/js/PaymentAPI/PaymentResponse.js',
		'https://cdn.kernvalley.us/js/PaymentAPI/BasicCardResponse.js',
		'https://cdn.kernvalley.us/js/PaymentAPI/BillingAddress.js',
		'https://cdn.kernvalley.us/components/payment-form/payment-form.js',

		/* CSS */
		'/css/vars.css',
		'/css/layout.css',
		'/css/header.css',
		'/css/nav.css',
		'/css/main.css',
		'/css/sidebar.css',
		'/css/footer.css',
		'https://cdn.kernvalley.us/css/core-css/layout/index.css',
		'https://cdn.kernvalley.us/css/core-css/layout/wide/index.css',
		'https://cdn.kernvalley.us/css/core-css/layout/left-sidebar/index.css',
		'https://cdn.kernvalley.us/css/core-css/layout/right-sidebar/index.css',
		'https://cdn.kernvalley.us/css/core-css/layout/multi-column.css',
		'https://cdn.kernvalley.us/css/core-css/layout/default/index.css',
		'https://cdn.kernvalley.us/css/core-css/layout/shared.css',
		'https://cdn.kernvalley.us/css/core-css/theme/default/index.css',
		'https://cdn.kernvalley.us/css/core-css/theme/default/light.css',
		'https://cdn.kernvalley.us/css/core-css/theme/default/dark.css',
		'https://cdn.kernvalley.us/css/core-css/theme/base.css',
		'https://cdn.kernvalley.us/css/core-css/rem.css',
		'https://cdn.kernvalley.us/css/core-css/viewport.css',
		'https://cdn.kernvalley.us/css/core-css/element.css',
		'https://cdn.kernvalley.us/css/core-css/class-rules.css',
		'https://cdn.kernvalley.us/css/core-css/utility.css',
		'https://cdn.kernvalley.us/css/core-css/fonts.css',
		'https://cdn.kernvalley.us/css/core-css/animations.css',
		'https://cdn.kernvalley.us/css/normalize/normalize.css',
		'https://cdn.kernvalley.us/css/animate.css/animate.css',
		'https://unpkg.com/leaflet@1.6.0/dist/leaflet.css',

		/* Images & Icons */
		'/img/apple-touch-icon.png',
		'/img/icon-192.png',
		'/img/favicon.svg',
		'https://cdn.kernvalley.us/img/adwaita-icons/actions/mail-send.svg',
		'https://cdn.kernvalley.us/img/adwaita-icons/actions/mark-location.svg',
		'https://cdn.kernvalley.us/img/octicons/file-media.svg',

		/* Social Icons for Web Share API shim */
		'https://cdn.kernvalley.us/img/octicons/mail.svg',
		'https://cdn.kernvalley.us/img/logos/facebook.svg',
		'https://cdn.kernvalley.us/img/logos/twitter.svg',
		'https://cdn.kernvalley.us/img/logos/google-plus.svg',
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
		/https:\/\/secure\.gravatar\.com\/avatar\/*/,
		/https:\/\/i\.imgur\.com\/*/,
		/https:\/\/maps\.wikimedia\.org\/osm-intl\/*/,
	],
};
