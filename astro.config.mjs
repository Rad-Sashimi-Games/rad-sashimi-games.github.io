// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import expressiveCode from "astro-expressive-code"
import remarkMermaid from 'remark-mermaidjs'

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	integrations: [expressiveCode(), mdx(), sitemap()],
	markdown: {
		remarkPlugins: [remarkMermaid]
	},
	redirects:{
		'/lonnies-fishtank/gdd': '/lonnies-fishtank'
	}
});
