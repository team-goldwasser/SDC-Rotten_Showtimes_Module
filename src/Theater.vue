<template>
  <div class='theater'>
  <strong>{{theater.theater_name }}</strong>
  <div class="float-right">{{theater.address}} | <a href="#" v-on:click.prevent>MAP</a> | <a href="#" v-on:click.prevent>{{theater.phone}}</a></div>
  <br>
  </div>
</template>

<script type='text/javascript'>
export default {
  props: {
    theater: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
strong {
  text-transform: uppercase
}
</style>
