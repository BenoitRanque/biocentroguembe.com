<template>
  <div class="VueCarousel">
    <div class="VueCarousel-wrapper">
      <div
        class="VueCarousel-inner"
        v-bind:style="`
          transform: translateX(${currentOffset}px);
          transition: ${transitionStyle};
          flex-basis: ${slideWidth}px;
          visibility: ${slideWidth ? 'visible' : 'hidden'}
        `"
      >
        <slot></slot>
      </div>
    </div>
    <pagination
      v-if="paginationEnabled && pageCount > 0"
    ></pagination>
    <navigation
      v-if="navigationEnabled"
    ></navigation>
  </div>
</template>

<script>
  import autoplay from './mixins/autoplay'
  import debounce from './utils/debounce'
  import Navigation from './Navigation.vue'
  import Pagination from './Pagination.vue'
  import Slide from './Slide.vue'

  export default {
    name: 'carousel',
    beforeUpdate: function () {
      this.computeCarouselWidth()
    },
    components: {
      Navigation,
      Pagination,
      Slide
    },
    data: function () {
      return {
        browserWidth: null,
        carouselWidth: null,
        currentPage: 0,
        dragOffset: 0,
        dragStartX: 0,
        mousedown: false,
        slideCount: 0
      }
    },
    mixins: [
      autoplay
    ],
    props: {
      /**
       * Slide transition easing
       * Any valid CSS transition easing accepted
       */
      easing: {
        type: String,
        default: 'ease'
      },
      /**
       * Minimum distance for the swipe to trigger
       * a slide advance
       */
      minSwipeDistance: {
        type: Number,
        default: 8
      },
      /**
       * Flag to render the navigation component
       * (next/prev buttons)
       */
      navigationEnabled: {
        type: Boolean,
        default: false
      },
      /**
       * The fill color of the active pagination dot
       * Any valid CSS color is accepted
       */
      paginationActiveColor: {
        type: String,
        default: '#000'
      },
      /**
       * The fill color of pagination dots
       * Any valid CSS color is accepted
       */
      paginationColor: {
        type: String,
        default: '#efefef'
      },
      /**
       * Flag to render pagination component
       */
      paginationEnabled: {
        type: Boolean,
        default: true
      },
      /**
       * Maximum number of slides displayed on each page
       */
      perPage: {
        type: Number,
        default: 2
      },
      /**
       * Configure the number of visible slides with a particular browser width.
       * This will be an array of arrays, ex. [[320, 2], [1199, 4]]
       * Formatted as [x, y] where x=browser width, and y=number of slides displayed.
       * ex. [1199, 4] means if (window <= 1199) then show 4 slides per page
       */
      perPageCustom: {
        type: Array
      },
      /**
       * Scroll per page, not per item
       */
      scrollPerPage: {
        type: Boolean,
        default: false
      },
      /**
       * Slide transition speed
       * Number of milliseconds accepted
       */
      speed: {
        type: Number,
        default: 500
      }
    },
    computed: {
      /**
       * Given a viewport width, find the number of slides to display
       * @param  {Number} width Current viewport width in pixels
       * @return {Number}       Number of slides to display
       */
      breakpointSlidesPerPage: function () {
        if (!this.perPageCustom) {
          return this.perPage
        }

        const breakpointArray = this.perPageCustom
        const width = this.browserWidth

        const breakpoints = breakpointArray.sort((a, b) => ((a[0] > b[0]) ? -1 : 1))

        // Reduce the breakpoints to entries where the width is in range
        // The breakpoint arrays are formatted as [widthToMatch, numberOfSlides]
        const matches = breakpoints.filter(breakpoint => width >= breakpoint[0])

        // If there is a match, the result should return only
        // the slide count from the first matching breakpoint
        const match = matches[0] && matches[0][1]

        return match || this.perPage
      },
      /**
       * @return {Boolean} Can the slider move forward?
       */
      canAdvanceForward: function () {
        return (this.currentPage < (this.pageCount - 1))
      },
      /**
       * @return {Boolean} Can the slider move backward?
       */
      canAdvanceBackward: function () {
        return (this.currentPage > 0)
      },
      /**
       * Number of slides to display per page in the current context.
       * This is constant unless responsive perPage option is set.
       * @return {Number} The number of slides per page to display
       */
      currentPerPage: function () {
        return (!this.perPageCustom || this.$isServer)
        ? this.perPage
        : this.breakpointSlidesPerPage
      },
      /**
       * The horizontal distance the inner wrapper is offset while navigating.
       * @return {Number} Pixel value of offset to apply
       */
      currentOffset: function () {
        const page = this.currentPage
        const width = this.slideWidth
        const dragged = this.dragOffset

        // The offset distance depends on whether the scrollPerPage option is active.
        // If this option is active, the offset will be determined per page rather than per item.
        const offset = (this.scrollPerPage) ? (page * width * this.currentPerPage) : (page * width)

        return (offset + dragged) * -1
      },
      isHidden: function () {
        return (this.carouselWidth <= 0)
      },
      /**
       * Calculate the number of pages of slides
       * @return {Number} Number of pages
       */
      pageCount: function () {
        const slideCount = this.slideCount
        const perPage = this.currentPerPage

        if (this.scrollPerPage) {
          const pages = Math.ceil(slideCount / perPage)
          return (pages < 1) ? 1 : pages // Be sure to not round down to zero pages
        }

        return (slideCount - (this.currentPerPage - 1))
      },
      /**
       * Get the number of slides
       * @return {Number} Number of slides
       */
      // slideCount() {
      //   return (this.$slots && this.$slots.default && this.$slots.default.length) || 0
      // },
      /**
       * Calculate the width of each slide
       * @return {Number} Slide width
       */
      slideWidth: function () {
        const width = this.carouselWidth
        const perPage = this.currentPerPage

        return width / perPage
      },
      transitionStyle: function () {
        return `${this.speed / 1000}s ${this.easing} transform`
      }
    },
    methods: {
      /**
       * Increase/decrease the current page value
       * @param  {String} direction (Optional) The direction to advance
       */
      advancePage: function (direction) {
        if (direction && direction === 'backward' && this.canAdvanceBackward) {
          this.goToPage(this.currentPage - 1)
        }
        else if (direction && direction === 'backward') {
          this.goToPage(this.pageCount - 1)
        }
        else if ((!direction || (direction && direction !== 'backward')) && this.canAdvanceForward) {
          this.goToPage(this.currentPage + 1)
        }
        else if (!direction || (direction && direction !== 'backward')) {
          this.goToPage(0)
        }
      },
      /**
       * A mutation observer is used to detect changes to the containing node
       * in order to keep the magnet container in sync with the height its reference node.
       */
      attachMutationObserver: function () {
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver

        if (MutationObserver) {
          const config = { attributes: true, data: true }
          this.mutationObserver = new MutationObserver(() => {
            this.$nextTick(() => {
              this.computeCarouselWidth()
            })
          })
          if (this.$parent.$el) {
            this.mutationObserver.observe(this.$parent.$el, config)
          }
        }
      },
      /**
       * Stop listening to mutation changes
       */
      detachMutationObserver: function () {
        if (this.mutationObserver) {
          this.mutationObserver.disconnect()
        }
      },
      /**
       * Get the current browser viewport width
       * @return {Number} Browser"s width in pixels
       */
      getBrowserWidth: function () {
        this.browserWidth = window.innerWidth
        return this.browserWidth
      },
      /**
       * Get the width of the carousel DOM element
       * @return {Number} Width of the carousel in pixels
       */
      getCarouselWidth: function () {
        this.carouselWidth = (this.$el && this.$el.clientWidth) || 0 // Assign globally
        return this.carouselWidth
      },
      /**
       * Filter slot contents to slide instances and return length
       * @return {Number} The number of slides
       */
      getSlideCount: function () {
        this.slideCount = (this.$slots && this.$slots.default && this.$slots.default.filter(slot => slot.tag && slot.tag.indexOf('slide') > -1).length) || 0
      },
      /**
       * Set the current page to a specific value
       * This function will only apply the change if the value is within the carousel bounds
       * @param  {Number} page The value of the new page number
       */
      goToPage: function (page) {
        if ((page >= 0) && (page <= this.pageCount)) {
          this.currentPage = page
          this.$emit('pageChange', this.currentPage)
        }
      },
      /**
       * Trigger actions when mouse is pressed
       * @param  {Object} e The event object
       */
      /* istanbul ignore next */
      handleMousedown: function (e) {
        if (!e.touches) { e.preventDefault() }

        this.mousedown = true
        this.dragStartX = ('ontouchstart' in window) ? e.touches[0].clientX : e.clientX
      },
      /**
       * Trigger actions when mouse is released
       * @param  {Object} e The event object
       */
      handleMouseup: function () {
        this.mousedown = false
        this.dragOffset = 0
      },
      /**
       * Trigger actions when mouse is pressed and then moved (mouse drag)
       * @param  {Object} e The event object
       */
      handleMousemove: function (e) {
        if (!this.mousedown) {
          return
        }

        const eventPosX = ('ontouchstart' in window) ? e.touches[0].clientX : e.clientX
        const deltaX = (this.dragStartX - eventPosX)

        this.dragOffset = deltaX

        if (this.dragOffset > this.minSwipeDistance) {
          this.handleMouseup()
          this.advancePage()
        }
        else if (this.dragOffset < -this.minSwipeDistance) {
          this.handleMouseup()
          this.advancePage('backward')
        }
      },
      /**
       * Re-compute the width of the carousel and its slides
       */
      computeCarouselWidth: function () {
        this.getSlideCount()
        this.getBrowserWidth()
        this.getCarouselWidth()
        this.setCurrentPageInBounds()
      },
      /**
       * When the current page exceeds the carousel bounds, reset it to the maximum allowed
       */
      setCurrentPageInBounds: function () {
        if (!this.canAdvanceForward) {
          const setPage = (this.pageCount - 1)
          this.currentPage = (setPage >= 0) ? setPage : 0
        }
      },
      navigateToQuery: function () {
        if (this.$route.query.slide) {
          this.goToPage(Number(this.$route.query.slide) - 1)
        }
      }
    },
    mounted: function () {
      if (!this.$isServer) {
        window.addEventListener('resize', debounce(this.computeCarouselWidth, 16))

        if ('ontouchstart' in window) {
          this.$el.addEventListener('touchstart', this.handleMousedown)
          this.$el.addEventListener('touchend', this.handleMouseup)
          this.$el.addEventListener('touchmove', this.handleMousemove)
        }
        else {
          this.$el.addEventListener('mousedown', this.handleMousedown)
          this.$el.addEventListener('mouseup', this.handleMouseup)
          this.$el.addEventListener('mousemove', this.handleMousemove)
        }
      }

      this.attachMutationObserver()
      this.computeCarouselWidth()
      this.navigateToQuery()
    },
    destroyed: function () {
      if (!this.$isServer) {
        this.detachMutationObserver()
        window.removeEventListener('resize', this.getBrowserWidth)
        if ('ontouchstart' in window) {
          this.$el.removeEventListener('touchmove', this.handleMousemove)
        }
        else {
          this.$el.removeEventListener('mousemove', this.handleMousemove)
        }
      }
    }
  }
</script>

<style lang="stylus">
@import '~variables'
.VueCarousel-navigation-button {
  position: absolute;
  top: 50%;
  box-sizing: border-box;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  width: 3rem;
  height: 3rem;
  border-top: 3px solid rgba($primary, .6);
  border-left: 3px solid rgba($primary, .6);
  transition: all .2s ease;

  &:hover {
    border-color: rgba($secondary, 1);
  }
  &.disabled {
    border-color: rgba($primary, .2);
    cursor: default;
  }
}

.VueCarousel-navigation-next {
  right: 1rem;
  transform: translateY(-50%) rotate(135deg);
  /*transform: translateY(-50%) translateX(100%)*/
}

.VueCarousel-navigation-prev {
  left: 1rem;
  transform: translateY(-50%) rotate(-45deg);
  /*transform: translateY(-50%) translateX(-100%)*/
}

.VueCarousel-navigation--disabled {
  opacity: 0.5;
  cursor: default;
}
.VueCarousel {
  position: relative;
}

.VueCarousel-wrapper {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.VueCarousel-inner {
  display: flex;
  flex-direction: row;
  backface-visibility: hidden;
}
.VueCarousel-pagination {
  position: absolute;
  bottom: 0;
  z-index: 5;
  width: 100%;
  /*float: left;*/
  text-align: center;
}

.VueCarousel-dot-container {
  display: inline-block;
  margin: 0 auto;
}

.VueCarousel-dot {
  float: left;
  cursor: pointer;
  padding: 1rem;
  margin-bottom: 0rem;
}

.VueCarousel-dot-inner {
  border-radius: 100%;
  width: 1rem;
  height: 1rem;
  background-color: rgba($primary, .4);
  transition: all .2s ease;

  &:hover {
    background-color: rgba($primary, 1)
  }

  &.active {
    background-color: rgba($secondary, 1)
  }
}
.VueCarousel-slide {
  flex-basis: inherit;
  flex-grow: 0;
  flex-shrink: 0;
  user-select: none;
}
</style>
