<template>
  <div class='theater'>
  {{theater.theater_name}}&nbsp<span>{{theater.address}} | MAP | {{theater.phone}}</span>
  </div>
</template>

<script type='text/javascript'>
export default {
  props: ['theater']
}
</script>

<style>
.theater {
  padding:10px 0 5px
}
</style>