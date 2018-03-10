<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="eventos"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media class="relative-position">
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/saloncasavieja_1"></responsive-image>
                <q-card-title slot="overlay">
                  <div class="row items-center">
                    <div class="col">
                      {{$t('caption1')}}
                    </div>
                    <div class="col-auto">
                      <router-link to="/contacto?mode=event">
                        <q-btn class="shadow-3" icon-right="forward" color="secondary" no-caps big glossy rounded>{{$t('glossary.reservar')}}</q-btn>
                      </router-link>
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/salonsantarita_1"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/salontacuara_1"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 col-lg-4">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/salonsantarita_2"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/salontacuara_3"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/salontacuara_2"></responsive-image>
                <q-card-title slot="overlay">
                  <div class="row items-center">
                    <div class="col">
                      {{$t('caption2')}}
                    </div>
                    <div class="col-auto">
                      <router-link to="/contacto?mode=event">
                        <q-btn class="shadow-3" icon-right="forward" color="secondary" no-caps big glossy rounded>{{$t('glossary.reservar')}}</q-btn>
                      </router-link>
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>
        </div>

        <!-- <template v-for="r in $t('halls')">
          <page-header subheader :title="r.header"></page-header>

          <div class="row">
            <div class="col-md-12 col-lg-8">
              <q-card>
                <q-card-media>
                  <responsive-image :w="800" :md-size="12" :size="8" :src="`cardh/${r.image1}`"></responsive-image>
                </q-card-media>
              </q-card>
            </div>
            <div class="col-md-12 col-lg-4">
              <q-card class="bg-white">
                <q-card-media>
                  <responsive-image :w="800" :md-size="12" :size="4" :src="`cardh/${r.image2}`"></responsive-image>
                </q-card-media>
                <q-card-title class="text-primary">
                  {{r.title}}
                  <span slot="subtitle">{{r.subtitle}}</span>
                </q-card-title>
                <q-card-separator></q-card-separator>
                <q-card-main>
                  <p>
                    <template v-for="l in r.body">{{l}}<br></template>
                  </p>
                </q-card-main>
              </q-card>
            </div>
          </div>
        </template> -->

      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from '@/ResponsiveImage.vue'
import PageHeader from '@/PageHeader.vue'
import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QCardMedia,
  QCardActions,
  QBtn
} from 'quasar'

export default {
  name: 'Eventos',
  i18nOptions: { namespaces: 'eventos' },
  components: {
    PageHeader,
    ResponsiveImage,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QCardMedia,
    QCardActions,
    QBtn
  }
}
</script>

<style lang="styl">
</style>
