<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="mariposa_1"></page-header>

        <div class="row">
          <div class="col-sm-12 col-md-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :smSize="100" :size="50" src="cardh/mariposa_2"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('mariposario.title')}}</em>
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('mariposario.body')">{{l}}<br></template>
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/faunalocal/mariposario">
                  <q-btn flat="" color="primary" icon-right="forward">{{$t('glossary.sabermas')}}</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :smSize="100" :size="50" src="cardh/ardilla"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('faunasilvestre.title')}}</em>
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('faunasilvestre.body')">{{l}}<br></template>
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/faunalocal/faunasilvestre">
                  <q-btn flat="" color="primary" icon-right="forward">{{$t('glossary.sabermas')}}</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :smSize="100" :size="50" src="cardh/meliponario"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('meliponario.title')}}</em>
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('meliponario.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :smSize="100" :size="50" src="cardh/terrario"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('terrario.title')}}</em>
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('terrario.body')">{{l}}<br></template>
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
  name: 'FaunaLocal',
  i18nOptions: { namespaces: 'faunalocal' },
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
