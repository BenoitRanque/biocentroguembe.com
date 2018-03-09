<template>
  <q-img v-once v-bind="$attrs" lazy :placeholder="placeholder" :src="compSrc" :srcset="compSrcset" :sizes="compSizes"/>
</template>

<script>
// eslint-disable-next-line
// const img = require('../assets/img/index')
// console.log(img)
import QImg from './QImg'
import imgSizes from '../../../auto-generate-images/src/sizes'

export default {
  name: 'QImgWrapper',
  components: {
    QImg
  },
  props: {
    src: String,
    format: String,
    sizes: String
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
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200
      }

      if (!this.sizes) return '100vw'

      let res = ''
      this.sizes.split(', ').forEach(size => {
        res += `(min-width: ${breakpoints[size.substring(0, 2)]}px) ${size.substring(3)}vw, `
      })

      res += `100vw`

      return res
    }
  }
}
</script>

<style scoped>

</style>
