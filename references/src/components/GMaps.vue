<template>
  <div class="g-map" :id="mapName"></div>
</template>

<script>
import Google from '../google'
export default {
  name: 'GMaps',
  props: {
    name: {
      required: true,
      type: String
    },
    zoom: {
      default: 12,
      type: Number
    },
    showinfowindow: {
      type: Boolean,
      default: false
    }
  },
  data: function () {
    return {
      mapName: this.name + '-map',
      marker: null,
      map: null,
      infowindow: null,
      position: {
        lat: -17.767355,
        lng: -63.248819
      },
      markerData: {
        title: 'Güembé',
        label: ''
        // infoWindow: {
        //   opened: true,
        //   title: 'Güembé',
        //   subtitle: 'Un mundo por descubrir',
        //   content: ''
        // }
      }
    }
  },
  computed: {
    options: function () {
      return {
        zoom: this.zoom,
        center: this.position,
        disableDefaultUI: true,
        disableDoubleClickZoom: false,
        draggable: true,
        scrollwheel: false
      }
    }
  },
  methods: {
    initMap: function () {
      const element = document.getElementById(this.mapName)
      this.map = new google.maps.Map(element, this.options)
      this.marker = new google.maps.Marker({
        animation: google.maps.Animation.DROP,
        position: this.position,
        map: this.map,
        title: this.markerData.title,
        label: this.markerData.label
      })
      if (this.showinfowindow) {
        this.infowindow = new google.maps.InfoWindow({
          content: `<div class="g-map-infowindow"><img style="width: 300px; max-width: 100%" src="/statics/logo.svg" alt="logo"></div>`
        })
        this.marker.addListener('click', () => {
          this.infowindow.open(this.map, this.marker)
        })
        this.infowindow.open(this.map, this.marker)
      }
      // if (this.markerData.infoWindow) {
        // if (this.markerData.infoWindow.opened) {
        //   this.infowindow.open(this.map, this.marker)
        // }
      // }
      // content: `<div class="g-map-infowindow"><div class="title">${this.markerData.infoWindow.title}</div><div class="subtitle">${this.markerData.infoWindow.subtitle}</div>${this.markerData.infoWindow.content}</div>`

      // this.markerCoordinates.forEach((coord) => {
      //   const position = new google.maps.LatLng(coord.lat, coord.lng)
      //   const marker = new google.maps.Marker({
      //     animation: google.maps.Animation.DROP,
      //     position,
      //     map: this.map,
      //     title: coord.title,
      //     label: coord.label
      //   })
      //   if (coord.infoWindow) {
      //     const infowindow = new google.maps.InfoWindow({
      //       content: `<div class="g-map-infowindow"><div class="title">${coord.infoWindow.title}</div><div class="subtitle">${coord.infoWindow.subtitle}</div>${coord.infoWindow.content}</div>`
      //     })
      //     marker.addListener('click', function () {
      //       infowindow.open(this.map, marker)
      //     })
      //     if (coord.infoWindow.opened) {
      //       infowindow.open(this.map, marker)
      //     }
      //   }
      //   this.markers.push(marker)
        // this.map.fitBounds(this.bounds.extend(position))
      // })
    }
  },
  async mounted () {
    await Google()
    this.initMap()
  }
}
</script>
<style lang="stylus">
@import '~variables'

.g-map
  width 100%
  height 100%
  margin 0 auto
  background $white

.g-map-infowindow
  text-align center
  padding 1rem

  .title
    color $secondary
    font-size 2.4rem
    text-transform uppercase
    font-weight 100

  .subtitle
    color $primary
    font-size 1.2rem

</style>
