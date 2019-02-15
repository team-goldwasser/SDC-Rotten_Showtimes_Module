import { mount } from '@vue/test-utils';
import App from '../src/App.vue';

describe('App', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(App);

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<section class="mx-4 my-2">');
  });

  // it's also easy to check for the existence of elements
  it('has a link', () => {
    expect(wrapper.contains('h2')).toBe(true);
  });
});
