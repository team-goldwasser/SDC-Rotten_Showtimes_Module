import { mount } from '@vue/test-utils';
import Theater from '../src/Theater.vue';


describe('Theater', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Theater);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<div class="theater">');
  });

  // it's also easy to check for the existence of elements
  it('has a link', () => {
    expect(wrapper.contains('a')).toBe(true);
  });
});
