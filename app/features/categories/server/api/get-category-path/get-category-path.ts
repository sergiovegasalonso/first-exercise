import getCategories from '~/app/features/categories/services/get-categories/get-categories'

export default defineEventHandler((event) => {
  const { category } = getQuery(event)

  const categories = getCategories()

  console.log(category)
  console.log(categories)

  return {
    hello: category,
  }
})
