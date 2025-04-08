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

## pending tasks

1. e2e
2. .env
3. pr pipeline
4. explicación
