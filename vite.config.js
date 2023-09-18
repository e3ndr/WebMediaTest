import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	assetsInclude: ["**/*.mkv", "**/*.flv", "**/*.swf"]
};

export default config;
