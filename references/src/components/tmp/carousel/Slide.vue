<template>
  <div class="VueCarousel-slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'slide',
    data: function () {
      return {
        width: null
      }
    }
  }
</script>

<style>

</style>
