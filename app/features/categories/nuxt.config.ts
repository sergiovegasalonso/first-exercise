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
  serverHandlers: [
    {
      route: '/categories/api/get-category-path',
      handler:
        '~/app/features/categories/server/api/get-category-path/get-category-path.ts',
    },
  ],
})
