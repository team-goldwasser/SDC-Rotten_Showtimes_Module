import { mount } from '@vue/test-utils';
import Location from '../src/Location.vue';

describe('Location', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Location);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="border-bottom border-secondary">');
  });

  // it's also easy to check for the existence of elements
  it('has a link', () => {
    expect(wrapper.contains('button')).toBe(true);
  });
});
