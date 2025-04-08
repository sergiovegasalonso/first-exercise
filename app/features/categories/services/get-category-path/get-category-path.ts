export async function getCategoryPath(category: string) {
  try {
    const response = await useFetch(
      `/categories/api/get-category-path?category=${category}`
    )
    return response
  } catch (error) {
    console.log(error)
  }
}
