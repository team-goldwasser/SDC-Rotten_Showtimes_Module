import { mount } from '@vue/test-utils';
import Theater from '../src/Theater.vue';

const mockTheater = {
  theater_id: 2,
  theater_name: 'Disaster Movie Theater',
  address: '666 6th St.',
  city: 'San Francisco',
  state: 'CA',
  zip: '94666',
  phone: '(415) 666-6666',
};

const wrapper = mount(Theater, {
  propsData: {
    theater: mockTheater,
  },
});

it('renders the correct markup', () => {
  expect(wrapper.classes('theater')).toBe(true);
});

it('has a link', () => {
  expect(wrapper.contains('a')).toBe(true);
});

it('should render the theater name', () => {
  expect(wrapper.vm.theater.theater_name).toBe('Disaster Movie Theater');
});

it('should render the theater address', () => {
  expect(wrapper.vm.theater.address).toBe('666 6th St.');
});

it('should render the theater phone number', () => {
  expect(wrapper.vm.theater.phone).toBe('(415) 666-6666');
});
