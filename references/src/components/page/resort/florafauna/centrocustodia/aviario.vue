<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="aviario_2"></page-header>

        <div class="row">

          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" src="cardh/aviario_2" :md-size="12" :size="8"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" src="cardh/aviario_1" :sm-size="12" :md-size="6" :size="4"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary"><em>{{$t('aviario1.title')}}</em></q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('aviario1.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" src="cardh/aviario_exterior_2" :sm-size="12" :md-size="6" :size="4"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary"><em>{{$t('aviario2.title')}}</em></q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('aviario2.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" src="cardh/mirador_1" :md-size="12" :size="8"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
        </div>

        <page-header :title="$t('glossary.especies')" subheader></page-header>

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="sp in $t('specieslist')">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" v-if="sp.image" :src="`cardh/${sp.image}`" :sm-size="12" :md-size="6" :size="4"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{sp.title}}</em>
                <span slot="subtitle">{{sp.subtitle}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in sp.body">{{l}}<br></template>
                </p>
              </q-card-main>
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
  QCardMedia,
  QCardActions,
  QBtn
} from 'quasar'

export default {
  name: 'Aviario',
  i18nOptions: { namespaces: ['aviario'] },
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
