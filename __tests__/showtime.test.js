import { mount } from '@vue/test-utils';
import Showtime from '../src/Showtime.vue';

describe('Showtime', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(Showtime);

  // it('renders the correct markup', () => {
  //   expect(wrapper.html()).toContain('<div class="theater">');
  // });

  // it's also easy to check for the existence of elements
  it('has a link', () => {
    expect(wrapper.contains('button')).toBe(true);
  });
});
