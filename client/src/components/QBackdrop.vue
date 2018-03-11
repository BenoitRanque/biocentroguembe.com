<template>
  <div class="q-backdrop">
    <q-responsive-img :src="src" format="slide" class="fit no-pointer-events"/>
  </div>
</template>

<script>
import QResponsiveImg from 'components/QResponsiveImg'
export default {
  name: 'QBackdrop',
  components: {
    QResponsiveImg
  },
  props: {
    src: String
  }
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
</style>
