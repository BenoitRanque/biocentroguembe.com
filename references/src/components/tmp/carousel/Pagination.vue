<template>
  <div v-show="parentContainer.pageCount > 1" class="VueCarousel-pagination">
    <div class="VueCarousel-dot-container">
      <div
        class="VueCarousel-dot"
        v-for="(page, index) in parentContainer.pageCount"
        v-on:click="parentContainer.goToPage(index)"
      >
        <div
          class="VueCarousel-dot-inner"
          :class="{'active': index === parentContainer.currentPage}"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    data: function () {
      return {
        parentContainer: this.$parent
      }
    }
  }
</script>

<style scoped>

</style>
