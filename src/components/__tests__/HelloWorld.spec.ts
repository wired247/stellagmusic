import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WorksView from '../../views/WorksView.vue'

describe('WorksView', () => {
  it('renders the works archive', () => {
    const wrapper = mount(WorksView)
    expect(wrapper.text()).toContain('Music for the')
    expect(wrapper.text()).toContain('A catalogue')
    expect(wrapper.text()).toContain('Orchestra')
  })
})
