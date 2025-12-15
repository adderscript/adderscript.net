// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';
import remarkBreaks from 'remark-breaks';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()]
	},

	integrations: [
		mdx({
			remarkPlugins: [remarkBreaks],
			rehypePlugins: [],
			extendMarkdownConfig: {
				gfm: true
			}
		})
	]
});