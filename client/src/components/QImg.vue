<template>
  <div class="q-img">
    <span v-scroll-fire="() =>  { if (state === 0) state += 1 }"/>
    <img
      v-if="placeholder && state < 3"
      :src="placeholder"
      :alt="alt"
      class="preview"
    >
    <transition name="reveal" v-on:after-enter="state += 1">
      <img
        v-if="state > 0"
        v-show="state > 1"
        @load="state += 1"
        :alt="alt"
        :src="src"
        :srcset="srcset"
        :sizes="sizes"
      >
    </transition>
  </div>
</template>

<script>

// https://github.com/Akryum/vue-observe-visibility
// https://www.sitepoint.com/how-to-build-your-own-progressive-image-loader/
// https://css-tricks.com/the-blur-up-technique-for-loading-background-images/

export default {
  name: 'QImg',
  props: {
    lazy: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      required: true
    },
    srcset: {
      type: String,
      default: ''
    },
    sizes: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      state: 0
    }
  },
  mounted () {
    if (!this.lazy) this.state += 1
  }
}
</script>

<style lang="stylus" scoped>
  .q-img
    position relative
    display block
    overflow hidden

    img
      display block
      width 100%
      max-width none
      border 0 none
      height auto // required for IE11

      &.preview
        filter blur(2vw)
        transform scale(1.05)

      &.reveal-enter-active
        position absolute
        left 0
        top 0
        will-change transform opacity
        animation reveal 1s ease-out

@keyframes reveal
  0%
    transform scale(1.05)
    opacity 0
  100%
    transform scale(1)
    opacity 1

</style>
