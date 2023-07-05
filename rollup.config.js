/* eslint-env node */
import { getConfig } from '@shgysk8zer0/js-utils/rollup';
import { rollupImport, rollupImportMeta } from '@shgysk8zer0/rollup-import';
import { readJSONFile } from '@shgysk8zer0/npm-utils/json';

const { homepage } = await readJSONFile('./package.json');

export default getConfig('./js/index.js', {
	plugins: [
		rollupImport('_data/importmap.yml'),
		rollupImportMeta({ baseURL: homepage }),
	],
	format: 'iife',
	minify: true,
	sourcemap: true,
});
