<!-- <template lang="html">
  <img v-once :srcset="imgsrc">
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    w: {
      type: Number,
      required: true
    }
  },
  computed: {
    imgsrc: function () {
      return `/statics/img/lg/${this.src}.jpg ${this.w}w, /statics/img/md/${this.src}.jpg ${this.w * 0.5}w, /statics/img/sm/${this.src}.jpg ${this.w * 0.25}w`
    }
  }
}
</script> -->

<template lang="html">
  <img
  :src="`/statics/img/lg/${src}`"
  :alt="alt"
  :srcset="imgsrc"
  :sizes="imgsize"
  >
</template>

<script>
const xsBreakpoint = '576px',
  smBreakpoint = '768px',
  mdBreakpoint = '992px',
  lgBreakpoint = '1200px'

export default {
  props: {
    src: {
      required: true,
      type: String
    },
    w: { // Width, in pixels, of our original image.
      required: true,
      type: Number
    },
    alt: {
      type: String
    },
    size: {
      type: Number,
      default: 12
    },
    xsSize: {
      type: Number
    },
    smSize: {
      type: Number
    },
    mdSize: {
      type: Number
    },
    lgSize: {
      type: Number
    }
  },
  computed: {
    imgsrc () {
      let imgsrc = ''

      imgsrc += `/statics/img/xs/${this.src}.jpg ${this.w * 0.25}w, `
      imgsrc += `/statics/img/sm/${this.src}.jpg ${this.w * 0.5}w, `
      imgsrc += `/statics/img/md/${this.src}.jpg ${this.w * 0.75}w, `
      imgsrc += `/statics/img/lg/${this.src}.jpg ${this.w}w`

      return imgsrc
    },
    imgsize () {
      let imgsize = ''

      if (this.xsSize !== undefined) imgsize += `(max-width: ${xsBreakpoint}) ${(this.xsSize * 100) / 12}vw, `
      if (this.smSize !== undefined) imgsize += `(max-width: ${smBreakpoint}) ${(this.smSize * 100) / 12}vw, `
      if (this.mdSize !== undefined) imgsize += `(max-width: ${mdBreakpoint}) ${(this.mdSize * 100) / 12}vw, `
      if (this.lgSize !== undefined) imgsize += `(max-width: ${lgBreakpoint}) ${(this.lgSize * 100) / 12}vw, `
      imgsize += `${(this.size * 100) / 12}vw`

      return imgsize
    }
  }
}
</script>
