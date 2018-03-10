<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="laspalmas_1"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="6" src="cardh/laspalmas_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('gastronomia1.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('gastronomia1.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="6" src="cardh/laspalmas_3"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('gastronomia2.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('gastronomia2.body')">{{l}}<br></template>
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
  name: 'Gastronomia',
  i18nOptions: { namespaces: 'gastronomia' },
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
