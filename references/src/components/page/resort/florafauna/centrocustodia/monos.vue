<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="monos"></page-header>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/islamonos_4"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/islamonos_6"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/islamonos_5"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
            </div>
          </div>
        </div>

        <page-header id="isla-monos" :title="$t('isla.header')" subheader></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/islamonos_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/islamonos_3"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('isla.card.title')}}</em>
                <span slot="subtitle">{{$t('isla.card.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  {{$t('isla.card.body')}}
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardv/islamonos_1"></responsive-image>
                <q-card-title slot="overlay">
                  {{$t('isla.caption1')}}
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/islamonos_2"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
        </div>

        <!-- <page-header id="jungla-monos" :title="$t('jungla.header')" subheader></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/islamonos_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/islamonos_3"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('jungla.card.title')}}</em>
                <span slot="subtitle">{{$t('jungla.card.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  {{$t('jungla.card.body')}}
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardv/islamonos_1"></responsive-image>
                <q-card-title slot="overlay">
                  {{$t('jungla.caption1')}}
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/islamonos_2"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
        </div> -->
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
  QCardMedia
} from 'quasar'

export default {
  name: 'Monos',
  i18nOptions: { namespaces: 'monos' },
  components: {
    PageHeader,
    ResponsiveImage,
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator,
    QCardMedia
  }
}
</script>

<style lang="styl">
</style>
