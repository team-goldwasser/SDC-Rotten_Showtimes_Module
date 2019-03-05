import { shallowMount } from '@vue/test-utils';
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Showtime from '../src/Showtime.vue';

Vue.use(BootstrapVue);

const mockTitle = 'TEST SHOWTIMES';

const mockVocabs = {
  'Reserved seating': 'During checkout you will be able to reserve specific seats or be assigned seats in a premier seating area, depending on the theater.',
  'Closed caption': 'Closed Captioning devices display a movie \'s dialogue and sound effects as text; captions are not shown on the main screen.  Devices available by request.',
  'Accessibility devices available': 'Descriptive Video devices provide audio descriptions of the movie to accommodate the needs of visually impaired guests. Devices available by request.',
};

const mockShowtimes = [
  { id: 2989, start_time: '1:45', seat: 'recliner' },
  { id: 2990, start_time: '3:15', seat: 'standard' },
  { id: 2991, start_time: '5:45', seat: 'recliner' },
  { id: 2992, start_time: '22:45', seat: 'standard' },
  { id: 2993, start_time: '23:30', seat: 'recliner' },
  { id: 2994, start_time: '23:55', seat: 'recliner' },
];

const wrapper = shallowMount(Showtime, {
  propsData: {
    title: mockTitle,
    vocabs: mockVocabs,
    showtimes: mockShowtimes,
  },
});

it('should render the correct title', () => {
  expect(wrapper.html()).toContain('<div>TEST SHOWTIMES</div>');
});

it('should render correct number of showtime buttons', () => {
  const buttonArray = wrapper.findAll('button');

  expect(buttonArray.length).toBe(mockShowtimes.length);
});

it('should render formatted showtimes', () => {
  expect(wrapper.html()).toContain('<strong>1:45a</strong>');
  expect(wrapper.html()).toContain('<strong>3:15a</strong>');
  expect(wrapper.html()).toContain('<strong>5:45a</strong>');
  expect(wrapper.html()).toContain('<strong>10:45p</strong>');
  expect(wrapper.html()).toContain('<strong>11:30p</strong>');
  expect(wrapper.html()).toContain('<strong>11:55p</strong>');
});

// current time: 1:20pm
it('should disable showtime buttons depend on current time', () => {
  const disabledButtons = wrapper.findAll("[disabled='disabled']");
  expect(disabledButtons.length).toBe(3);
});
