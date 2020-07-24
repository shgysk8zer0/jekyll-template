import { alert } from 'https://cdn.kernvalley.us/js/std-js/asyncDialog.js';

export async function submitHandler(event) {
	event.preventDefault();
	await customElements.whenDefined('toast-message');
	const target = event.target;
	const Toast = customElements.get('toast-message');
	const toast = new Toast();
	const pre = document.createElement('pre');
	const code = document.createElement('code');
	const data = new FormData(target);

	await alert('Nothing was submitted. This is for demo purposes only.');

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
