<template>
  <section>
  <h2 class="panel-heading">TICKETS & SHOWTIMES</h2>
  <div class="main-body">
  <location v-bind:zip="zip" v-on:updateZip="loadInfo"></location>
  <theater v-bind:theater="theater"></theater>
  <showtime id='three' v-bind:title="threeDTitle" v-bind:showtimes="threeDShowtimes" v-bind:vocabs='Object.assign({}, threeDVocabs, vocabs)' v-if="threeDShowtimes.length !== 0"></showtime><br>
  <showtime v-bind:title="standardTitle" v-bind:showtimes="standardShowtimes" v-bind:vocabs='vocabs'></showtime>
  <div><a href='#' class="view-all link" v-on:click.prevent>View All Theaters & Showtimes</a></div>
  </div>
  </section>
</template>

<script type='text/javascript'>
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
    this.loadInfo(this.zip);
  },
  data() {
    return {
      zip: parseInt(window.location.pathname.split('/')[3]),
      title_url: window.location.pathname.split('/')[2],
      theater: {},
      // error: '',
      // latitude: '',
      // longitude: '',
      // location: ,
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
  methods: {
    // getLocation: function() {
    //   if(window.navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(this.showPosition)
    //   } else {
    //     this.error = "Geolocation is not supported."
    //   }
    // },
    // showPosition: function(position) {
    //   this.latitude = position.coords.latitude;
    //   this.longitude = position.coords.longitude;
    //   console.log('Lat:', this.latitude, 'Long:', this.longitude);
    // },
    loadInfo(zip) {
      // getLocation()
      getInfo(zip, (response) => {
        this.zip = zip;
        this.theater = response;
        this.title_url = response.movie_title_url;
        this.standardShowtimes = response.showtimes.filter((showtime) => {
          return showtime.seat !== '3D'
        });
        this.threeDShowtimes = response.showtimes.filter((showtime) => {
          return showtime.seat === '3D'
        });
      })
    }
  }
};

</script>