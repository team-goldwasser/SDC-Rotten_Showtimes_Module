<template>
  <section class='mx-4'>
  <h2 class="bg-danger text-black">TICKETS & SHOWTIMES</h2>
  <location v-bind:zip="zip"></location>
  <theater v-bind:theater="theater"></theater>
  <three-d-showtime v-bind:showtimes="threeDShowtimes" v-bind:vocabs='vocabs' v-if="threeDShowtimes.length !== 0"></three-d-showtime>
  <standard-showtime v-bind:showtimes="standardShowtimes" v-bind:vocabs='vocabs'></standard-showtime>
  <div><a href='#' class="float-right">View All Theaters & Showtimes</a></div>
  </section>
</template>

<script>
import Location from './Location.vue'
import Theater from './Theater.vue'
import standardShowtime from './standardShowtime.vue'
import threeDShowtime from './threeDShowtime.vue'
import getInfo from '../helpers/getInfo.js'

export default {
  components: {
    Location,
    Theater,
    standardShowtime,
    threeDShowtime
  },
  mounted() {
    getInfo('The%20Avengers', this.zip, (response) => {
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
      standardShowtimes: [],
      threeDShowtimes: [],
      vocabs: {
      'Reserved seating': 'During checkout you will be able to reserve specific seats or be assigned seats in a premier seating area, depending on the theater.',
      'RealD 3D': 'RealD is the most widely used digital 3D cinema technology.',
      'Closed caption': 'Closed Captioning devices display a movie \'s dialogue and sound effects as text; captions are not shown on the main screen.  Devices available by request.',
      'Luxury Lounger Recliners': 'New plush, electric powered recliners featuring footrests and cupholders.',
      'Accessibility devices available': 'Descriptive Video devices provide audio descriptions of the movie to accommodate the needs of visually impaired guests. Devices available by request.'
      }
    }
  },
  computed: {

  }
};

</script>