<template>
  <q-img v-once v-bind="$attrs" lazy :placeholder="placeholder" :src="src" :srcset="srcset" :sizes="sizes"/>
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
    name: String,
    format: String
  },
  computed: {
    placeholder () {
      return `statics/img/placeholder/${this.name}.jpg`
    },
    src () {
      return `statics/img/xl/${this.name}.jpg`
    },
    srcset () {
      let res = ''

      if (!this.format) return ''
      if (!imgSizes[this.format]) return ''

      imgSizes[this.format].forEach(size => {
        if (size.name !== 'placeholder') res += `statics/img/${size.name}/${this.name}.jpg ${size.width}w, `
      })

      res = res.slice(0, -2)

      return res
    },
    sizes () {
      return `100vw`
    }
  }
}
</script>

<style scoped>

</style>
