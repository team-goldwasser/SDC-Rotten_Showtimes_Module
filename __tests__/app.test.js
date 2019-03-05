import { shallowMount } from '@vue/test-utils';
import sinon from 'sinon';
import BootstrapVue from 'bootstrap-vue';
import Vue from 'vue';
import App from '../src/App.vue';
import Location from '../src/Location.vue';
import Showtime from '../src/Showtime.vue';
import Theater from '../src/Theater.vue';
import getInfo from '../helpers/getInfo.js';

Vue.use(BootstrapVue);

const wrapper = shallowMount(App);

const loadInfoHandler = sinon.spy(App.methods, 'loadInfo');
const getInfoHandler = sinon.spy(getInfo);

it('renders the correct markup', () => {
  expect(wrapper.html()).toContain('TICKETS &amp; SHOWTIMES');
  expect(wrapper.html()).toContain('View All Theaters &amp; Showtimes');
});

it('should call loadInfo method when mounted', () => {
  expect(loadInfoHandler.calledOnce);
});

it('should render the child components', () => {
  expect(wrapper.contains(Location)).toBe(true);
  expect(wrapper.contains(Showtime)).toBe(true);
  expect(wrapper.contains(Theater)).toBe(true);
});

it('should render both Standard & 3D showtimes component', () => {
  wrapper.setData({
    threeDShowtimes: [
      { id: 2989, start_time: '1:45', seat: 'recliner' },
      { id: 2990, start_time: '3:15', seat: 'standard' }],
  });

  expect(wrapper.html()).toContain('STANDARD SHOWTIMES');
  expect(wrapper.find('#three').exists()).toBe(true);
});

it('should render only Standard showtimes component when 3D showtimes are not available', () => {
  wrapper.setData({ threeDShowtimes: [] });

  expect(wrapper.html()).toContain('STANDARD SHOWTIMES');
  expect(wrapper.find('#three').exists()).toBe(false);
});

it('should invoke loadInfo method when Location component emits updateZip event', () => {
  wrapper.find(Location).vm.$emit('updateZip', 99999);

  expect(getInfoHandler.calledOnce);
});
