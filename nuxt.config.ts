export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ]
    }
  },
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'home',
        path: '/',
        file: '~/views/index.vue',
      })

      pages.push({
        name: '404',
        path: '/:catchAll(.*)',
        file: '~/views/404-not-found.vue'
      })
    },
  },
  extends: ['./app/features/categories'],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/test-utils',
    '@nuxt/icon',
  ]
})
