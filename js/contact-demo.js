import { notify } from 'https://cdn.kernvalley.us/js/std-js/notification-shim.js';

export async function submitHandler(event) {
	event.preventDefault();
	const target = event.target;
	await Promise.all([
		customElements.whenDefined('toast-message'),
		new Promise(resolve => {
			notify('Nothing was sent', {
				body: 'This is for demonstration purposes only.',
				icon: '/img/favicon.svg',
				vibrate: [500, 0, 0, 500],
				tag: 'demo',
			}).addEventListener('close', () => resolve());
		})
	]);
	const Toast = customElements.get('toast-message');
	const toast = new Toast();
	const pre = document.createElement('pre');
	const code = document.createElement('code');
	const data = new FormData(target);

	pre.slot = 'content';
	code.textContent = JSON.stringify(Object.fromEntries(data.entries()), null, 4);

	pre.append(code);
	toast.append(pre);
	toast.backdrop = true;
	document.body.append(toast);
	await toast.show();
	await toast.closed;
	toast.remove();
	target.reset();
}
