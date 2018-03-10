const autoplay = {
  props: {
    /**
     * Flag to enable autoplay
     */
    autoplay: {
      type: Boolean,
      default: false
    },
    /**
     * Time elapsed before advancing slide
     */
    autoplayTimeout: {
      type: Number,
      default: 2000
    },
    /**
     * Flag to pause autoplay on hover
     */
    autoplayHoverPause: {
      type: Boolean,
      default: true
    }
  },
  data: function () {
    return {
      autoplayInterval: null
    }
  },
  destroyed: function () {
    if (!this.$isServer) {
      this.$el.removeEventListener('mouseenter', this.pauseAutoplay)
      this.$el.removeEventListener('mouseleave', this.startAutoplay)
    }
  },
  methods: {
    pauseAutoplay: function () {
      if (this.autoplayInterval) {
        this.autoplayInterval = clearInterval(this.autoplayInterval)
      }
    },
    startAutoplay: function () {
      if (this.autoplay) {
        this.autoplayInterval = setInterval(this.advancePage, this.autoplayTimeout)
      }
    }
  },
  mounted: function () {
    if (!this.$isServer && this.autoplayHoverPause) {
      this.$el.addEventListener('mouseenter', this.pauseAutoplay)
      this.$el.addEventListener('mouseleave', this.startAutoplay)
    }

    this.startAutoplay()
  }
}

export default autoplay
