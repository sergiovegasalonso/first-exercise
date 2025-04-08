export default defineNuxtConfig({
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'categories',
        path: '/categories',
        file: '~/app/features/categories/views/index.vue',
      })
    },
  },
})
