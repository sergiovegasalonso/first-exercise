import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SrgHeader from './SrgHeader.vue'

describe('SrgHeader', () => {
  it('component renders ok', () => {
    const wrapper = mount(SrgHeader, {
    global: {
      stubs: {
        NuxtLink: {
          template: '<a><slot /></a>',
        },
      },
    },
  })

    const links = wrapper.findAll('a')

    expect(links.length).toBe(2)    
    expect(links[0].element.textContent).toBe("Home")
    expect(links[1].element.textContent).toBe("Categories")
  })
})