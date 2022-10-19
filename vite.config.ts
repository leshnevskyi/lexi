import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {crx} from '@crxjs/vite-plugin';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

import manifest from './manifest.json';

export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [
					[
						'babel-plugin-styled-components',
						{
							displayName: true,
							fileName: true,
						},
					],
				],
			},
		}),
		tsconfigPaths(),
		crx({manifest}),
		svgr(),
	],
});
