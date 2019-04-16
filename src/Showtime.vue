<template>
<div>
  <div class="show-category">{{title}}
    <ul class="showtime-list-group">
      <li class="showtime-list-item" v-for="(value, key) in vocabs" :key="value">
        <a href="#" class="showtime-link" v-on:click.prevent v-b-modal="title + key">{{key}}</a>|
        <b-modal :id="title + key" title="Rotten Tomatoes says:">
          <p>{{value}}</p>
        </b-modal>
      </li>
    </ul>
  </div>
  <div class="btn-group" role="group" v-for="formattedShowTime in formattedShowTimes" :key="formattedShowTime.id">
    <button type="button" class="showtime-btn" v-bind:disabled="isExpired(formattedShowTime.start_time)"><strong>{{formattedShowTime.formattedStartTime}}</strong></button>
  </div>
</div>
</template>

<script type='text/javascript'>  //maps the list of showtimes retrieved from db and formats each time
export default {
  props: ['title','showtimes', 'vocabs'],
  computed: {
    formattedShowTimes() {
      return this.showtimes.map(showtime => {
        const splitStartTime = showtime.start_time.split(':')
        const hour = parseInt(splitStartTime[0]);
        const minute = splitStartTime[1];
        if (hour === 12) {
          showtime.formattedStartTime = hour + ':' + minute + 'p';
        } else if (hour < 12) {
          showtime.formattedStartTime = hour + ':' + minute + 'a';
        } else {
          showtime.formattedStartTime = (hour-12).toString() + ':' + minute + 'p';
        }
        return showtime;
      })
    }
  },
  methods: {
    isExpired(startTime) {
      const splitStartTime = startTime.split(':')
      const hour = splitStartTime[0];
      const minute = splitStartTime[1];
      return new Date().setHours(hour,minute,0) > new Date() ? false : true;
    }
  }
}
</script>