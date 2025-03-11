import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { BASE_URL } = loadEnv(process.env.NODE_ENV, process.cwd());

// https://astro.build/config
export default defineConfig({
    site: BASE_URL ? BASE_URL : 'http://localhost:4321/',
    redirects: {
        '/blog': '/blog/page/1',
    },
});
