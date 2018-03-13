<template>
  <div class="q-backdrop no-pointer-events">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'QBackdrop'
}
</script>

<style scoped lang="stylus">
.q-backdrop
  opacity 1
  z-index -1
  object-fit cover
  position fixed
  top 0
  bottom 0
  left 0
  right 0

  > *
    width 100%
    height  100%
</style>
