import getCategories from '~/app/features/categories/services/get-categories/get-categories'
import type { Category } from '~/app/features/categories/types/category'

export default defineEventHandler((event) => {
  const { category } = getQuery(event)
  const categories = getCategories()

  return {
    result:
      getCategoryPath(categories, category as string) ??
      'Category not found in database',
  }
})

const getCategoryPath = (
  categories: Category[],
  categoryName: string
): string | undefined => {
  for (const category of categories) {
    if (category.name.toLocaleLowerCase() === categoryName.toLocaleLowerCase())
      return `/${category.name}`

    if (category.subcategories.length > 0) {
      const subPath = getCategoryPath(category.subcategories, categoryName)
      if (subPath) return `/${category.name}${subPath}`
    }
  }
  return undefined
}
