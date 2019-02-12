<template>
  <section class='mx-4'>
  <h2 class="bg-danger text-black">TICKETS & SHOWTIMES</h2>
  <location v-bind:zip="zip"></location>
  <theater v-bind:theater="theater"></theater>
  <three-d-showtime v-bind:showtimes="threeDShowtimes" v-if="threeDShowtimes.length !== 0"></three-d-showtime>
  <standard-showtime v-bind:showtimes="standardShowtimes"></standard-showtime>
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
      threeDShowtimes: []
    }
  }
};

</script>