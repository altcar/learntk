import { defineConfig } from 'astro/config';

// import cloudflare from '@astrojs/cloudflare';

import react from '@astrojs/react';

import starlight from '@astrojs/starlight';

import vercel from '@astrojs/vercel/serverless';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://learntk.vercel.app',
  output: 'server',

  // vite: {
  //   ssr: {
  //     external: ['firebase-admin'] //disable ssr
  //   }
  // },

  // adapter: cloudflare({
  //   platformProxy: {
  //     enabled: true
  //   },
  //    mode: 'directory' 
  // }),

  integrations: [react(), starlight({
    disable404Route: true,
    title: 'code creators',
    customCss: [ './src/styles/custom.css']
  }), tailwind()],

  adapter: vercel()
});