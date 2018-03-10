<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">

        <page-header banner="amboro_3"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/aviario_2"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/amboro_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('resort.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  {{$t('resort.body')}}
                </p>
              </q-card-main>
            </q-card>
          </div>
          <!-- <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="row">
              <div class="col-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/islamonos_6"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
              <div class="col-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/islamonos_5"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/islamonos_4"></responsive-image>
              </q-card-media>
            </q-card>
          </div> -->
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-4">
            <q-card class="bg-white">
              <router-link to="/resort/florafauna/faunalocal/mariposario">
                <q-card-media>
                  <responsive-image src="cardh/mariposa_2" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                  <q-card-title slot="overlay">
                    {{$t('pages.mariposario')}} <q-icon name="forward"></q-icon>
                  </q-card-title>
                </q-card-media>
              </router-link>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <q-card class="bg-white">
              <router-link to="/resort/florafauna/centrocustodia/monos">
                <q-card-media>
                  <responsive-image src="cardh/islamonos_5" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                  <q-card-title slot="overlay">
                    {{$t('pages.monos')}} <q-icon name="forward"></q-icon>
                  </q-card-title>
                </q-card-media>
              </router-link>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <q-card class="bg-white">
              <router-link to="/resort/florafauna/flora">
                <q-card-media>
                  <responsive-image src="cardh/flora" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                  <q-card-title slot="overlay">
                    {{$t('pages.flora')}} <q-icon name="forward"></q-icon>
                  </q-card-title>
                </q-card-media>
              </router-link>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <q-card class="bg-white">
              <router-link to="/resort/florafauna">
                <q-card-media>
                  <responsive-image src="cardh/lorohablador" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                  <q-card-title slot="overlay">
                    {{$t('pages.florafauna')}}<q-icon name="forward"></q-icon>
                  </q-card-title>
                </q-card-media>
              </router-link>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <q-card class="bg-white">
              <router-link to="/resort/parqueacuatico">
                <q-card-media>
                  <responsive-image src="cardh/espejillos_2" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                  <q-card-title slot="overlay">
                    {{$t('pages.parqueacuatico')}} <q-icon name="forward"></q-icon>
                  </q-card-title>
                </q-card-media>
              </router-link>
            </q-card>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4">
            <q-card class="bg-white">
              <router-link to="/resort/recreacion">
                <q-card-media>
                  <responsive-image src="cardh/kayaks_1" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                  <q-card-title slot="overlay">
                    {{$t('pages.recreacion')}}  <q-icon name="forward"></q-icon>
                  </q-card-title>
                </q-card-media>
              </router-link>
            </q-card>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from '@/ResponsiveImage.vue'
import PageHeader from '@/PageHeader.vue'
import { Carousel, Slide } from '@/tmp/carousel'
import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardMedia,
  QBtn,
  QIcon
} from 'quasar'

export default {
  name: 'Resort',
  i18nOptions: { namespaces: 'resort' },
  components: {
    Carousel,
    Slide,
    PageHeader,
    ResponsiveImage,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QBtn,
    QIcon
  }
}
</script>

<style lang="styl">
</style>
