<template>
  <div class="location">
    <div v-if="!isChanging">
      Showtimes for <strong>today</strong> near <strong>{{zip}}</strong>
      <a href="#" class="link" v-on:click.prevent='triggerChange'>Change Location</a>
    </div>
    <div v-if="isChanging" >
      <a href='#' v-on:click.prevent='triggerChange'>Go back</a>
      <div>Enter your location to see showtimes near you.</div>
      <input type='number' v-model.number="zipcode" placeholder='Enter Zip Code'>
      <button v-on:click="$emit('updateZip', zipcode); triggerChange()" >Save</button>
    </div>
  </div>
</template>

<script type='text/javascript'>
export default {
  props: {
    zip: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      isChanging: false,
      zipcode: this.zip
    }
  },
  methods: {
    triggerChange() {
      return this.isChanging = !this.isChanging
    }
  }
}
</script>
