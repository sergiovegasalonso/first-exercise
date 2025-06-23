import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SrgCategoryPathFinder from './SrgCategoryPathFinder.vue'

describe('SrgCategoryPathFinder', () => {
  it('component renders ok', () => {
    const wrapper = mount(SrgCategoryPathFinder)

    const label = wrapper.find('label')
    expect(label.element.textContent).toBe('Get Category Path')
    expect(label.exists()).toBe(true)

    const input = wrapper.find('input')
    expect(input.element.minLength).toBe(1)
    expect(input.element.maxLength).toBe(10)
    expect(input.exists()).toBe(true)
  })
})
