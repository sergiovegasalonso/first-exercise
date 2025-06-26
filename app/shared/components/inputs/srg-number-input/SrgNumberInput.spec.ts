import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SrgNumberInput from './SrgNumberInput.vue'

describe('SrgNumberInput', () => {
  it('component renders ok', () => {
    const props = {
      label: 'label example',
      min: 2,
      max: 10,
    }

    const wrapper = mount(SrgNumberInput, {
      props,
    })

    const label = wrapper.find('label')
    expect(label.element.textContent).toBe(props.label)
    expect(label.exists()).toBe(true)

    const input = wrapper.find('input')
    expect(input.element.min).toBe(props.min.toLocaleString())
    expect(input.element.max).toBe(props.max.toLocaleString())
    expect(input.exists()).toBe(true)
  })
})
