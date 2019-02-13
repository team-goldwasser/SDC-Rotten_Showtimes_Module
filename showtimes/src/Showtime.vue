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
  <div v-for="showtime in showtimes" :key="showtime.id" class="btn-group" role="group">
    <button type="button" class="btn btn-warning mr-2" v-bind:disabled="isExpired(showtime.start_time)">{{showtime.start_time}}</button>
  </div>
</div>
</template>

<script type='text/javascript'>
export default {
  props: ['title','showtimes', 'vocabs'],
  data: {
    activeClass: "btn btn-warning mr-2",
    expiredClass: "btn btn-secondary"
  },
  methods: {
    isExpired: function(startTime) {
      const ampm = startTime.split(' ')[1];
      let hour = parseInt(startTime.split(' ')[0].split(':')[0]);
      const minute = parseInt(startTime.split(' ')[0].split(':')[1]);
      if (ampm === 'pm' && hour !== 12) {
        hour += 12;
      }
      const formattedStartTime = new Date().setHours(hour,minute,0);
      if (formattedStartTime > new Date()) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>