<template>
  <div class="location">
    <div class="defaultLocation" v-if="!isChanging">
    Showtimes for <strong>today</strong> near <strong>{{zip}}</strong>
    <a href="#" v-on:click.prevent='triggerChange' class="link">Change Location</a>
    </div>
    <div class="changeLocation" v-if="isChanging" >
      <a href='#' v-on:click.prevent='triggerChange'>Go back</a>
      <div>Enter your location to see showtimes near you.</div>
      <input type='number' max='99999' v-model.number="zipcode" placeholder='Enter Zip Code'>
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
