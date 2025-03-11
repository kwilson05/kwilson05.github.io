import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { VITE_BASE_URL } = loadEnv(process.env.NODE_ENV, process.cwd());

// https://astro.build/config
export default defineConfig({
    site: VITE_BASE_URL ? VITE_BASE_URL : 'http://localhost:4321/',
    redirects: {
        '/blog': '/blog/page/1',
    },
});
