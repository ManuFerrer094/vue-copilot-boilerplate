import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BaseButton from '@/components/ui/BaseButton.vue'

describe('BaseButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        default: 'Click me',
      },
    })
    expect(wrapper.text()).toContain('Click me')
  })

  it('applies primary variant classes by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('bg-blue-600')
  })

  it('applies secondary variant classes', () => {
    const wrapper = mount(BaseButton, {
      props: {
        variant: 'secondary',
      },
    })
    expect(wrapper.classes()).toContain('bg-gray-200')
  })

  it('applies medium size classes by default', () => {
    const wrapper = mount(BaseButton)
    expect(wrapper.classes()).toContain('px-4')
    expect(wrapper.classes()).toContain('py-2')
  })

  it('emits click event when clicked', async () => {
    const wrapper = mount(BaseButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('is disabled when disabled prop is true', () => {
    const wrapper = mount(BaseButton, {
      props: {
        disabled: true,
      },
    })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('shows loading state', () => {
    const wrapper = mount(BaseButton, {
      props: {
        loading: true,
      },
    })
    expect(wrapper.classes()).toContain('text-transparent')
    expect(wrapper.find('.animate-spin').exists()).toBe(true)
  })
})
