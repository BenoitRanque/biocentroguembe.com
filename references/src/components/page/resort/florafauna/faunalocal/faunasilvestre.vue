<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="faunasilvestre"></page-header>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" src="cardh/capuchino"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" src="cardh/saimiri"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('faunasilvestre.title')}}</em>
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('faunasilvestre.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div v-for="a in $t('specieslist')" class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :src="`cardh/${a.image}`"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{a.title}}</em>
                <span slot="subtitle">{{a.subtitle}}</span>
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in a.body">{{l}}<br></template>
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
  name: 'FaunaSilvestre',
  i18nOptions: { namespaces: 'faunasilvestre' },
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
