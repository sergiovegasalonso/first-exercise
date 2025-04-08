// simulate db context that returns categories from database
import type { Category } from '~/app/features/categories/types/category'

export default function getCategories(): Category[] {
  return [
    {
      name: 'category1',
      subcategories: [
        {
          name: 'category2',
          subcategories: [],
        },
        {
          name: 'category3',
          subcategories: [
            {
              name: 'category4',
              subcategories: [],
            },
          ],
        },
      ],
    },
    {
      name: 'category5',
      subcategories: [],
    },
  ]
}
