<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="amboro_3"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/amboro_3"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="4" src="cardh/amboro_4"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('amboro.title')}}
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  {{$t('amboro.body')}}
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-6">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/amboro_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-6">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/amboro_2"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="4" src="cardh/espejillos_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('espejillos.title')}}
              </q-card-title>
              <q-card-separator></q-card-separator>
              <q-card-main>
                <p>
                  {{$t('espejillos.body')}}
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/espejillos_2"></responsive-image>
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
  name: 'ParqueAcuatico',
  i18nOptions: { namespaces: 'parqueacuatico' },
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
