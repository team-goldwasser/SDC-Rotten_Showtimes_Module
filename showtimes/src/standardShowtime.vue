<template>
<div>
  <div>STANDARD SHOWTIMES</div>
  <div v-for="showtime in showtimes" :key="showtime.id" class="btn-group" role="group" >
    <button type="button" class="btn btn-warning mr-2">{{showtime.start_time}}</button>
  </div>
</div>
</template>

<script type='text/javascript'>
export default {
  props: ['showtimes']
}
</script>