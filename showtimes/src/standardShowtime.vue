<template>
<div>
  <div>STANDARD SHOWTIMES</div>
  <div v-for="(value, key) in vocabs" :key="value">
    <span class="inline"><a href="#" v-b-modal="'standard' + key">{{key}}</a> | <span>
    <b-modal :id="'standard' + key" title="Rotten Tomatoes says:">
      <p class="my-4">{{value}}</p>
    </b-modal>
  </div>
  <div v-for="showtime in showtimes" :key="showtime.id" class="btn-group" role="group" >
    <button type="button" class="btn btn-warning mr-2">{{showtime.start_time}}</button>
  </div>
</div>
</template>

<script type='text/javascript'>
export default {
  props: ['showtimes', 'vocabs']
}
</script>