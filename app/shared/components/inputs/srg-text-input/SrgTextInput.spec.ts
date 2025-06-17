import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SrgTextInput from './SrgTextInput.vue'

describe('SrgTextInput', () => {
  it('component renders ok', () => {
    const props = {
      label: 'label example',
      minLength: 2,
      maxLength: 10,
    }

    const wrapper = mount(SrgTextInput, {
      props,
    })

    const label = wrapper.find('label')
    expect(label.element.textContent).toBe(props.label)
    expect(label.exists()).toBe(true)

    const input = wrapper.find('input')
    expect(input.element.minLength).toBe(props.minLength)
    expect(input.element.maxLength).toBe(props.maxLength)
    expect(input.exists()).toBe(true)
  })
})
