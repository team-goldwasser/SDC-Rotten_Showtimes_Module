<template>
  <div>
  <div class='theater'>
    <strong>{{theater.theater_name }}</strong>
    <span class="theater-info">
      <ul class="showtime-list-group">
        <li class="showtime-list-item">{{theater.address}} | </li>
        <li class="showtime-list-item"><a href="#" v-on:click.prevent class="showtime-link">MAP</a> | </li>
        <li class="showtime-list-item"><a href="#" v-on:click.prevent class="showtime-link">{{theater.phone}}</a></li>
        </ul>
      </span>
    </div><br>
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

