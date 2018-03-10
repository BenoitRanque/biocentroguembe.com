<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="pantanocurichi"></page-header>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/pantano_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/curichi_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('pantanocurichi1.title')}}</em>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('pantanocurichi1.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/curichi_2"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('tapir.title')}}</em>
                <span slot="subtitle">{{$t('tapir.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('tapir.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/pantano_2"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('capibara.title')}}</em>
                <span slot="subtitle">{{$t('capibara.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('capibara.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/pantano_3"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>{{$t('venado.title')}}</em>
                <span slot="subtitle">{{$t('venado.subtitle')}}</span>
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  <template v-for="l in $t('venado.body')">{{l}}<br></template>
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
  QCardMedia
} from 'quasar'

export default {
  name: 'PantanoCurichi',
  i18nOptions: { namespaces: 'pantanocurichi' },
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
