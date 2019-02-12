<template>
  <div class='location'>
    Showtimes for <strong>today</strong> near <strong>{{zip}}</strong>
    <a>Change Location</a>
  </div>
</template>

<script type='text/javascript'>
export default {
  props: ['zip']
}
</script>

<style>
.location {
  padding: 0 0 10px;
  border-bottom: 1px solid #EEE
}
</style>