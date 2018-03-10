<template>
  <q-img v-bind="$attrs" :lazy="!immediate" :placeholder="placeholder" :src="compSrc" :srcset="compSrcset" :sizes="compSizes"/>
</template>

<script>
// eslint-disable-next-line
// const img = require('../assets/img/index')
// console.log(img)
import QImg from './QImg'
import imgSizes from '../../../imgGen/src/sizes'

export default {
  name: 'QResponsiveImg',
  components: {
    QImg
  },
  props: {
    src: String,
    format: String,
    sizes: String,
    immediate: Boolean
  },
  computed: {
    placeholder () {
      return `statics/img/placeholder/${this.src}.jpg`
    },
    compSrc () {
      return `statics/img/xl/${this.src}.jpg`
    },
    compSrcset () {
      let res = ''

      if (!this.format) return ''
      if (!imgSizes[this.format]) return ''

      imgSizes[this.format].forEach(size => {
        if (size.name !== 'placeholder') res += `statics/img/${size.name}/${this.src}.jpg ${size.width}w, `
      })

      res = res.slice(0, -2)

      return res
    },
    compSizes () {
      let breakpoints = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      }

      if (!this.sizes) return '100vw'

      let res = ''
      this.sizes.split(', ').forEach(size => {
        res += `(min-width: ${breakpoints[size.substring(0, 2)]}px) ${size.substring(3)}, `
      })

      res += `100vw`

      return res
    }
  }
}
</script>

<style scoped>

</style>
