# Exercise

```js
const categories = [
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

// TO-DO: Implement this function
const getCategoryPath = (categories, categoryName) => {
  let path

  return path
}

// OUTPUT SAMPLES
console.log(getCategoryPath(categories, 'category4')) // should output: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')) // should output: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')) // should output: '/category5'
```

## this solution contains

1. eslint with basic configuration
2. prettier with basic configuration
3. husky with pre commit conditions pipeline
4. github actions on push and pull request with the same conditions that husky pre commit
5. tailwindcss with basic configuration
