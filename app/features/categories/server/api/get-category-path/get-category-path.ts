import getCategories from '~/app/features/categories/services/get-categories/get-categories'

export default defineEventHandler(() => {
  getCategories('world')
  return {
    hello: 'world',
  }
})
