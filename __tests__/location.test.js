import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import Location from '../src/Location.vue';

const defaultZip = 94112;

const wrapper = mount(Location, {
  propsData: {
    zip: defaultZip,
  },
});

const triggerChangeHandler = sinon.spy(Location.methods, 'triggerChange');

it('renders the correct markup when component is mounted', () => {
  expect(wrapper.classes('location')).toBe(true);
  expect(wrapper.html()).toContain('<div class="defaultLocation">');
  expect(wrapper.contains('a')).toBe(true);
  expect(wrapper.vm.zip).toBe(94112);
});

it('only renders the changeLocation div when isChanging is true', () => {
  wrapper.setData({ isChanging: true });

  expect(wrapper.classes('location')).toBe(true);
  expect(wrapper.html()).toContain('<div class="changeLocation">');
  expect(wrapper.contains('button')).toBe(true);
});

it('should change isChanging value when "Change Location" link is clicked', () => {
  wrapper.setData({ isChanging: false });

  wrapper.find('a').trigger('click');

  expect(triggerChangeHandler.calledOnce);
  expect(wrapper.vm.isChanging).toBe(true);
});

it('should change isChanging value when "Go Back" link is clicked', () => {
  wrapper.setData({ isChanging: true });

  wrapper.find('a').trigger('click');

  expect(triggerChangeHandler.calledOnce);
  expect(wrapper.vm.isChanging).toBe(false);
});

it('should change isChanging value when "Save" button is clicked', () => {
  wrapper.setData({ isChanging: true });

  wrapper.find('a').trigger('click');

  expect(triggerChangeHandler.calledOnce);
  expect(wrapper.vm.isChanging).toBe(false);
});

it('should change zipcode value when input is changed', () => {
  wrapper.setData({ isChanging: true });

  const numberInput = wrapper.find('input[type="number"]');
  numberInput.setValue(99999);

  expect(wrapper.vm.zipcode).toBe(99999);
});
