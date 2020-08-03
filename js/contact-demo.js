import { HTMLNotificationElement } from 'https://cdn.kernvalley.us/components/notification/html-notification.js';
import { $ } from 'https://cdn.kernvalley.us/js/std-js/functions.js';

export async function submitHandler(event) {
	event.preventDefault();
	const target = event.target;
	const data = new FormData(target);
	$('fieldset, input, button', target).disable();

	await new Promise(resolve => {
		const notification = new HTMLNotificationElement(data.get('name'), {
			body: 'Nothing submitted. This is for demonstration purposes only.',
			icon: '/img/favicon.svg',
			lang: 'en-us',
			dir: 'ltr',
			tag: 'demo',
			silent: false,
			vibrate: [500, 0, 0, 500],
			requireInteraction: true,
			data: {
				name: data.get('name'),
				email: data.get('email'),
				phone: data.get('phone'),
				subject: data.get('subject'),
				body: data.get('body'),
			},
			actions: [{
				title: 'Share',
				action: 'share',
			}, {
				title: 'Clear',
				action: 'clear',
			}, {
				title: 'Close',
				action: 'close',
			}]
		});

		notification.addEventListener('close', () => resolve());

		notification.addEventListener('notificationclick', async ({ action, notification }) => {
			switch (action) {
				case 'share':
					if (navigator.canShare({title: '', text: '', url: location.href})) {
						const { subject, body } = notification.data;
						await navigator.share({
							title: subject,
							text: body,
							url: location.href,
						});
					} else {
						alert('Share API not supported');
					}
					break;

				case 'clear':
					target.reset();
					notification.close();
					break;

				case 'close':
					notification.close();
					break;
			}
		});
	});

	$('fieldset, input, button', target).enable();
}
