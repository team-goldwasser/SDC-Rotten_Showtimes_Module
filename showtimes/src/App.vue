<template>
  <section class='mx-4 my-2'>
  <h2 class="bg-danger text-black">TICKETS & SHOWTIMES</h2>
  <location v-bind:zip="zip"></location>
  <theater v-bind:theater="theater"></theater>
  <showtime v-bind:title="threeDTitle" v-bind:showtimes="threeDShowtimes" v-bind:vocabs='Object.assign({}, threeDVocabs, vocabs)' v-if="threeDShowtimes.length !== 0"></showtime>
  <showtime v-bind:title="standardTitle" v-bind:showtimes="standardShowtimes" v-bind:vocabs='vocabs'></showtime>
  <div><a href='#' class="float-right">View All Theaters & Showtimes</a></div>
  </section>
</template>

<script>
import Location from './Location.vue'
import Theater from './Theater.vue'
import Showtime from './Showtime.vue'
import getInfo from '../helpers/getInfo.js'

export default {
  components: {
    Location,
    Theater,
    Showtime
  },
  mounted() {
    getInfo('Inception', this.zip, (response) => {
      this.theater = response;
      this.standardShowtimes = response.showtimes.filter((showtime) => {
        return showtime.seat !== '3D'
      });
      this.threeDShowtimes = response.showtimes.filter((showtime) => {
        return showtime.seat === '3D'
      });
    })
  },
  data() {
    return {
      zip: 94107,
      theater: {
        theater_name: null
      },
      threeDTitle: 'DIGITAL 3D SHOWTIMES',
      standardTitle: 'STANDARD SHOWTIMES',
      standardShowtimes: [],
      threeDShowtimes: [],
      vocabs: {
        'Reserved seating': 'During checkout you will be able to reserve specific seats or be assigned seats in a premier seating area, depending on the theater.',
        'Closed caption': 'Closed Captioning devices display a movie \'s dialogue and sound effects as text; captions are not shown on the main screen.  Devices available by request.',
        'Accessibility devices available': 'Descriptive Video devices provide audio descriptions of the movie to accommodate the needs of visually impaired guests. Devices available by request.'
      },
      threeDVocabs: {
        'RealD 3D': 'RealD is the most widely used digital 3D cinema technology.',
        'Luxury Lounger Recliners': 'New plush, electric powered recliners featuring footrests and cupholders.'
      }
    }
  },
  computed: {

  }
};

</script>