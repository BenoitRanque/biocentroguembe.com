<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="mariposario"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="900" src="cardh/mariposa_1"></responsive-image>
                <q-card-title slot="overlay">
                  {{$t('ciclo.adulto.title')}}
                  <span slot="subtitle">{{$t('ciclo.adulto.subtitle')}}</span>
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="900" src="cardh/mariposa_larva"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('mariposario.title')}}</em>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('mariposario.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>

          <!-- <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="900" src="cardh/mariposa_huevos"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('ciclo.huevo.title')}}</em>
                <span slot="subtitle">{{$t('ciclo.huevo.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('ciclo.huevo.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="900" src="cardh/mariposa_larva"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('ciclo.larva.title')}}</em>
                <span slot="subtitle">{{$t('ciclo.larva.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('ciclo.larva.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="900" src="cardh/mariposa_larva"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('ciclo.pupa.title')}}</em>
                <span slot="subtitle">{{$t('ciclo.pupa.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('ciclo.pupa.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div> -->
        </div>

        <!-- <page-header :title="$t('glossary.especies')" subheader></page-header> -->

        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4" v-for="sp in $t('specieslist')">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="900" v-if="sp.image" :src="`cardh/${sp.image}`"></responsive-image>
              </q-card-media>
              <!-- <q-card-title class="text-primary">
                <em>{{sp.title}}</em>
                <span slot="subtitle">{{sp.subtitle}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in sp.body">{{l}}<br></template>
                </p>
              </q-card-main> -->
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
  name: 'Mariposario',
  i18nOptions: { namespaces: 'mariposario' },
  components: {
    ResponsiveImage,
    PageHeader,
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
