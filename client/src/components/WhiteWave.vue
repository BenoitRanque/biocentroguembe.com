<template>
  <div class="relative-position">
    <slot></slot>
    <div class="absolute-bottom">
      <q-img lazy src="/assets/wave.svg"></q-img>
      <div class="row absolute-bottom" v-if="caption">
        <div class="col-6"></div>
        <div class="col-6 q-display-1 caption text-center">
          <p>
            <em>
              {{caption}}
            </em>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QImg from 'components/QImg'
export default {
  name: 'WhiteWave',
  components: {
    QImg
  },
  props: {
    caption: String
  }
}
</script>

<style scoped>

</style>
