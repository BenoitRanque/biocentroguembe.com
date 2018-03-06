<template>
  <div>

  </div>
</template>

<script>

https://github.com/Akryum/vue-observe-visibility
https://www.sitepoint.com/how-to-build-your-own-progressive-image-loader/
https://css-tricks.com/the-blur-up-technique-for-loading-background-images/

export default {
  name: 'QImg',
  data () {
    return {
      loaded: false
    }
  },
  props: {
    responsive: {
      type: Boolean
    },
    placeholder: {
      type: Boolean
    },
    src: {
      type: String,
      required: true
    }
  },
  methods: {
    loadPlaceHolder () {
      // load image placeholder
    },
    loadImage () {
      // load actual image

    }
  },
  mounted () {

  }
}
</script>

<style scoped>

</style>
