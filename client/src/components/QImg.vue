<template>
  <div class="q-img">
    <span v-scroll-fire="() =>  { if (state === 0) state += 1 }"/>
    <transition name="preview">
      <img
        v-if="placeholder && state < 2"
        :src="placeholder"
        class="preview"
        :alt="$attrs.alt"
      >
    </transition>
    <transition name="reveal" @after-enter="state += 1">
      <img
        v-if="state > 0"
        v-show="state > 1"
        @load="state += 1"
        v-bind="$attrs"
      >
    </transition>
  </div>
</template>

<script>
// https://www.sitepoint.com/how-to-build-your-own-progressive-image-loader/

export default {
  name: 'QImg',
  props: {
    lazy: {
      type: Boolean,
      default: false
    },
    placeholder: String
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

      &.preview-leave-active
        will-change transform
        animation preview 1s ease-out

@keyframes reveal
  0%
    transform scale(1.05)
    opacity 0
  100%
    transform scale(1)
    opacity 1

@keyframes preview
  0%
    transform scale(1.05)
  100%
    transform scale(1)

</style>
