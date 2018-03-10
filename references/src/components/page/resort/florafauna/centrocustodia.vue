<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="aviario_1"></page-header>

        <!-- <div class="row">
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
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/pantano_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>
                  {{$t('centrocustodia1.title')}}
                </em>
              </q-card-title>

              <q-card-main>
                <p>
                  {{$t('centrocustodia1.body')}}
                </p>
              </q-card-main>
            </q-card>
          </div>

          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/pantano_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>
                  {{$t('centrocustodia2.title')}}
                </em>
              </q-card-title>

              <q-card-main>
                <p>
                  {{$t('centrocustodia2.body')}}
                </p>
              </q-card-main>
            </q-card>

          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/pantano_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
        </div>

        <page-header subheader :title="$t('ambientes')"></page-header> -->

        <div class="row">
          <div class="col-sm-12 col-md-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :size="6" src="cardh/aviario_3"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>
                  {{$t('aviario.title')}}
                </em>
              </q-card-title>
              <q-card-main>
                <p>
                  {{$t('aviario.body')}}
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/centrocustodia/aviario">
                  <q-btn color="primary" flat icon-right="forward">Saber Mas</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :size="6" src="cardh/islamonos_4"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>
                  {{$t('monos.title')}}
                </em>
              </q-card-title>
              <q-card-main>
                <p>
                  {{$t('monos.body')}}
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/centrocustodia/monos">
                  <q-btn color="primary" flat icon-right="forward">Saber Mas</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :size="6" src="cardh/pantano_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>
                  {{$t('pantanocurichi.title')}}
                </em>
              </q-card-title>
              <q-card-main>
                <p>
                  {{$t('pantanocurichi.body')}}
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/centrocustodia/pantanocurichi">
                  <q-btn color="primary" flat icon-right="forward">Saber Mas</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6" id="tortugario">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :size="6" src="cardh/tortugario"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                <em>
                  {{$t('tortugario.title')}}
                </em>
              </q-card-title>

              <q-card-main>
                <p>
                  {{$t('tortugario.body')}}
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
  name: 'CentroCustodia',
  i18nOptions: { namespaces: 'centrocustodia' },
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
