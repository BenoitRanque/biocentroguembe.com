<template>
  <div class="relative-position">
    <slot></slot>
    <div class="absolute-bottom">
      <q-img lazy src="/assets/wave.svg"></q-img>
    </div>
  </div>
</template>

<script>
import QImg from 'components/QImg'
export default {
  name: 'WhiteWave',
  components: {
    QImg
  }
}
</script>

<style scoped>

</style>
