import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import cleanPlugin from 'vite-plugin-clean';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
	plugins: [sveltekit(), cleanPlugin(), eslint()]
});
