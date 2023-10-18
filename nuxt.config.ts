// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/robots',
    'nuxt-simple-sitemap',
    '@nuxt/image',
  ],
  robots: { configPath: '~/config/robots.config.js', rules: {} },
  image: {
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
    dir: 'public/images'

  }
})
