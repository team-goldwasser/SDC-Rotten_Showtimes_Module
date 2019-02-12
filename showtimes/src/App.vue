<template>
  <section>
  <h2 class="p-3 mb-2 bg-danger text-black">TICKETS & SHOWTIMES</h2>
  <location></location>
  <theater v-bind:theater="theater"></theater>
  <showtime></showtime>
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
    Theater
  },
  mounted() {
    console.log(this.$el.textContent)
    getInfo('The%20Avengers', 94105, (response) => {
      this.theater = response;
      this.showtimes = response.showtimes;
    })
  },
  data() {
    return {
      theater: {
        theater_name: null
      },
      showtimes: []
    }
  }
};

</script>