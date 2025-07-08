// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node'
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
    enabled: false
  },
  integrations: [tailwind()],
  output: 'server', // Habilita SSR
  adapter: node({ mode: 'standalone' })
});