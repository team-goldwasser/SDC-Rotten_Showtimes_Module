<template>
  <div class='theater'>
  <strong>{{theater.theater_name.toUpperCase()}}</strong>
  <div class="float-right">{{theater.address}} | <a href="#">MAP</a> | <a href="#">{{theater.phone}}</a></div>
  <br>
  </div>
</template>

<script type='text/javascript'>
export default {
  props: ['theater']
}
</script>
