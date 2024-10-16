import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  output: 'server',

  vite: {
    ssr: {
      noExternal: ['firebase-admin']
    }
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),

  integrations: [react(), starlight({
    disable404Route: true,
    title: 'code creators',
    customCss: [ './src/styles/custom.css']
  })]
});