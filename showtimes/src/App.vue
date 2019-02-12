<template>
  <section>
  <h2 class="p-3 mb-2 bg-danger text-black">TICKETS & SHOWTIMES</h2>
  <location v-bind:zip="zip"></location>
  <theater v-bind:theater="theater"></theater>
  <showtime v-bind:showtimes="showtimes"></showtime>
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
    getInfo('The%20Avengers', this.zip, (response) => {
      this.theater = response;
      this.showtimes = response.showtimes;
    })
  },
  data() {
    return {
      zip: 94107,
      theater: {
        theater_name: null
      },
      showtimes: []
    }
  }
};

</script>