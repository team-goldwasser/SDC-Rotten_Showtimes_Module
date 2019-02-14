<template>
  <div class="border-bottom border-secondary">
    <div v-if="!isChanging">
    Showtimes for <strong>today</strong> near <strong>{{zip}}</strong>
    <a href="#" v-on:click.stop='triggerChange'>Change Location</a>
    </div>
    <div v-if="isChanging" >
      <a href='#' v-on:click.stop='triggerChange'>Go back</a>
      <div>Enter your location to see showtimes near you.</div>
      <input type='text' placeholder='Enter Zip Code' v-model="zipcode">
      <button v-on:click="$emit('updateZip', zipcode)">Save</button>
    </div>
  </div>
</template>

<script type='text/javascript'>
export default {
  props: ['zip'],
  data() {
    return {
      isChanging: false,
      zipcode: null
    }
  },
  methods: {
    triggerChange() {
      return this.isChanging = !this.isChanging
    }
  }
}
</script>
