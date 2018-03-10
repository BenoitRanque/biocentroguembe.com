<template>
  <div class="VueCarousel-navigation">
    <span
      class="VueCarousel-navigation-button VueCarousel-navigation-prev"
      @click.prevent="triggerPageAdvance('backward')"
      :class="{ 'disabled': !canAdvanceBackward }"
      ></span>
    <span
      class="VueCarousel-navigation-button VueCarousel-navigation-next"
      @click.prevent="triggerPageAdvance()"
      :class="{ 'disabled': !canAdvanceForward }"
      ></span>
  </div>
</template>

<script>
  export default {
    name: 'navigation',
    data: function () {
      return {
        parentContainer: this.$parent
      }
    },
    computed: {
      canAdvanceForward: function () {
        return this.parentContainer.canAdvanceForward || false
      },
      canAdvanceBackward: function () {
        return this.parentContainer.canAdvanceBackward || false
      }
    },
    methods: {
      triggerPageAdvance: function (direction) {
        if (direction) {
          this.$parent.advancePage(direction)
        }
        else {
          this.$parent.advancePage()
        }
      }
    }
  }
</script>

<style>

</style>
