<template>
  <div class="border-bottom border-secondary">
    Showtimes for <strong>today</strong> near <strong>{{zip}}</strong>
    <a href="#">Change Location</a>
  </div>
</template>

<script type='text/javascript'>
export default {
  props: ['zip']
}
</script>
