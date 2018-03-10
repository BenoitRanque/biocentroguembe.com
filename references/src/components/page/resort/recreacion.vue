<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="kayaks_1"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/kayaks_2"></responsive-image>
                <q-card-title slot="overlay">
                  {{$t('caption1')}}
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="4" src="cardh/miniclub_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('recreacion1.title')}}
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  {{$t('recreacion1.body')}}
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-6">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="6" src="cardh/miniclub_2"></responsive-image>
                <q-card-title slot="overlay">
                  {{$t('caption2')}}
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-6">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="6" src="cardh/canchas_1"></responsive-image>
                <q-card-title slot="overlay">
                  {{$t('caption3')}}
                </q-card-title>
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
  QCardMedia,
  QCardActions,
  QBtn
} from 'quasar'

export default {
  name: 'Recreacion',
  i18nOptions: { namespaces: 'recreacion' },
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
