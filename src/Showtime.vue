<template>
<div>
  <div>{{title}}</div>
  <div v-for="(value, key) in vocabs" :key="value" class="float-left mr-2">
    <a href="#" v-b-modal="title + key" class="mr-2">{{key}}</a>|
    <b-modal :id="title + key" title="Rotten Tomatoes says:">
      <p class="my-4">{{value}}</p>
    </b-modal>
  </div>
  <br>
  <div v-for="formattedShowTime in formattedShowTimes" :key="formattedShowTime.id" class="btn-group" role="group">
    <button type="button" class="btn btn-warning mr-2" v-bind:disabled="isExpired(formattedShowTime.start_time)"><strong>{{formattedShowTime.formattedStartTime}}</strong></button>
  </div>
</div>
</template>

<script type='text/javascript'>
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