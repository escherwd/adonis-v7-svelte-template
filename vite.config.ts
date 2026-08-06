import { defineConfig } from 'vite'
import inertia from '@adonisjs/inertia/vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import adonisjs from '@adonisjs/vite/client'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: 'inertia/ssr.tsx' } }),
    svelte(),
    adonisjs({ entrypoints: ['inertia/app.tsx'], reload: ['resources/views/**/*.edge'] }),
    tailwind()
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${import.meta.dirname}/inertia/`,
    },
  },
})
