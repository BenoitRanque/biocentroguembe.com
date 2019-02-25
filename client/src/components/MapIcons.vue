<template>
  <div class="relative-position">
    <slot></slot>
    <router-link v-for="i in icons" :key="i.hash" :to="i.page" :style="{top: `${i.y}%`, left: `${i.x}%`, width: `${i.w}%`}" class="map-icon">
      <q-img lazy :src="`/statics/mapicon/mapicon_${i.hash}.png`" class="full-width"></q-img>
      <!-- <img :src="`/statics/mapicon/mapicon_${i.hash}.png`" alt="" class="full-width"> -->
      <q-tooltip anchor="bottom middle" self="top middle" :offset="[0, 16]">
        <span class="capitalize">{{i.hash.replace(/_/g, ' ')}}</span>
      </q-tooltip>
    </router-link>
    <a href="https://goo.gl/maps/eHAn16c4YMH2" style="top: 66%; left: 64%; width: 5%" alt="" class="map-icon">
      <q-img lazy :src="`/statics/mapicon/mapicon_parqueo.png`"> class="full-width"></q-img>
      <!-- <img :src="`/statics/mapicon/mapicon_parqueo.png`"> -->
      <q-tooltip anchor="bottom middle" self="top middle" :offset="[0, 16]">
        <span class="capitalize">Como Llegar</span>
      </q-tooltip>
    </a>
  </div>
</template>

<script>
import QImg from 'components/QImg'
export default {
  name: 'MapIcons',
  components: {
    QImg
  },
  data () {
    return {
      icons: [
        {
          x: 74,
          y: 23,
          w: 7.6,
          hash: 'aviario',
          page: 'florafauna/aviario'
        },
        {
          x: 15,
          y: 70,
          w: 4,
          hash: 'bar_amboro',
          page: 'gastronomia'
        },
        {
          x: 31,
          y: 42,
          w: 3,
          hash: 'bar_espejillos',
          page: 'gastronomia'
        },
        {
          x: 58,
          y: 68,
          w: 3.8,
          hash: 'curichi',
          page: 'resort/florafauna/centrocustodia/pantanocurichi'
        },
        {
          x: 38,
          y: 60,
          w: 5,
          hash: 'deportes',
          page: 'resort/recreación'
        },
        {
          x: 56,
          y: 59,
          w: 5.6,
          hash: 'entrada',
          page: 'precios'
        },
        {
          x: 45.5,
          y: 58,
          w: 3,
          hash: 'evoluseum',
          page: 'resort/florafauna#evoluseum'
        },
        {
          x: 21.5,
          y: 46,
          w: 3,
          hash: 'hotel',
          page: 'hotel'
        },
        {
          x: 88.8,
          y: 39.5,
          w: 6.5,
          hash: 'huerta',
          page: 'resort/florafauna/flora'
        },
        {
          x: 13,
          y: 36,
          w: 5.4,
          hash: 'isla_de_monos',
          page: 'resort/florafauna/centrocustodia/monos#isla-monos'
        },
        {
          x: 68.6,
          y: 53,
          w: 5.6,
          hash: 'jungla',
          page: 'resort/florafauna/centrocustodia/monos#jungla-monos'
        },
        {
          x: 24,
          y: 40,
          w: 7,
          hash: 'kayaks',
          page: 'resort/recreación'
        },
        {
          x: 32,
          y: 54,
          w: 3.4,
          hash: 'kiosquo',
          page: 'gastronomia'
        },
        {
          x: 79,
          y: 39,
          w: 8,
          hash: 'mariposario',
          page: 'resort/florafauna/faunalocal/mariposario'
        },
        {
          x: 64,
          y: 42,
          w: 5.6,
          hash: 'meliponario',
          page: 'resort/florafauna/faunalocal'
        },
        {
          x: 44,
          y: 36,
          w: 9,
          hash: 'miniclub',
          page: 'resort/recreación'
        },
        {
          x: 54.5,
          y: 22,
          w: 5,
          hash: 'minigolf',
          page: 'resort/recreación'
        },
        {
          x: 80,
          y: 20,
          w: 5,
          hash: 'mirador',
          page: 'resort/florafauna/centrocustodia/aviario'
        },
        {
          x: 67,
          y: 25,
          w: 4,
          hash: 'orquideario',
          page: 'resort/florafauna/flora'
        },
        {
          x: 39,
          y: 66,
          w: 6,
          hash: 'pantano',
          page: 'resort/florafauna/centrocustodia/pantanocurichi'
        },
        {
          x: 50.4,
          y: 54,
          w: 5,
          hash: 'sala_de_cria',
          page: 'resort/florafauna/faunalocal'
        },
        {
          x: 45.8,
          y: 48,
          w: 7,
          hash: 'terrario',
          page: 'resort/florafauna/faunalocal'
        },
        {
          x: 72,
          y: 44,
          w: 7,
          hash: 'tortugario',
          page: 'resort/florafauna/centrocustodia#tortugario'
        },
        {
          x: 37,
          y: 52,
          w: 6,
          hash: 'zuchini',
          page: 'gastronomia'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
.map-icon
  position absolute
  transition all 0.2s ease-in-out

  &:hover
    z-index 1
    transform scale(1.4)
</style>
