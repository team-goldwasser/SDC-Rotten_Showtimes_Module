<template>
<div>
  <div>DIGITAL 3D SHOWTIMES</div>
  <div v-for="(value, key) in vocabs" :key="value">
    <a href="#" v-b-modal="'3D' + key">{{key}}</a> |
    <b-modal :id="'3D' + key" title="Rotten Tomatoes says:">
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