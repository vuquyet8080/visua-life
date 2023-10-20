// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  routeRules: {
    '/': { prerender: true, ssr: true, },
  },
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxt/image',
  ],
  robots: { configPath: '~/config/robots.config.js', rules: {} },
  image: {
    domains: [''],
    quality: 80,
    format: ['webp'],
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    dir: 'public/images',
    // provider: 'static',

  },
  app: {
    head: {
      script: [{ src: '//cdn.jsdelivr.net/npm/hls.js@latest' }],
    }
  },
  runtimeConfig: {
    // NUXT_HLS_SECRET: process.env.NUXT_HLS_SECRET,
    public: {
      NUXT_HLS_SECRET: process.env.NUXT_HLS_SECRET,
      "test_public": "test_public",
    }

  }


})
