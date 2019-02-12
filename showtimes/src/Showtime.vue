<template>
<div>
  <div v-for="showtime in showtimes" :key="showtime.id">
  <button class="btn btn-warning" type="submit">{{showtime.start_time}}</button>
  </div>
</div>
</template>

<script type='text/javascript'>
export default {
  props: ['showtimes']
}
</script>