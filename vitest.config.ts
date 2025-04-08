import { defineVitestConfig } from '@nuxt/test-utils/config'
import { configDefaults } from "vitest/config";

export default defineVitestConfig({
  test: {
    include: ['**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: [...configDefaults.exclude, '**/node_modules/**', '**/dist/**'],
  },
})
