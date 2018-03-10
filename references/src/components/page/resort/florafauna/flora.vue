<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="orquideario_1"></page-header>

        <div class="row">
          <div class="col-xs-6 col-sm-3">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :xsSize="6" :size="3" src="cardh/orquideario_flor_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-xs-6 col-sm-3">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :xsSize="6" :size="3" src="cardh/flora"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-xs-6 col-sm-3">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :xsSize="6" :size="3" src="cardh/orquideario_flor_2"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-xs-6 col-sm-3">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :xsSize="6" :size="3" src="cardh/orquideario_flor_4"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/orquideario_2"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/orquideario_flor_3"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('orquideario.title')}}</em>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('orquideario.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/huerta_2"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('huerta.title')}}</em>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('huerta.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/huerta_1"></responsive-image>
              </q-card-media>
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
import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardSeparator,
  QCardMedia
} from 'quasar'

export default {
  name: 'Flora',
  i18nOptions: { namespaces: 'flora' },
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
