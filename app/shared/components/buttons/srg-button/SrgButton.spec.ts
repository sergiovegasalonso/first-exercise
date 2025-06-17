import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SrgButton from './SrgButton.vue'

describe('SrgButton', () => {
  it('component renders ok', () => {
    const props = {
      text: 'text example',
    }

    const wrapper = mount(SrgButton, {
      props,
    })

    const label = wrapper.find('button')
    expect(label.element.textContent).toBe(props.text)
    expect(label.exists()).toBe(true)
  })
})
