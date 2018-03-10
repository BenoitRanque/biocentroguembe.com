<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="florafauna"></page-header>
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <router-link to="/resort/florafauna/centrocustodia/aviario">
              <q-card>
                <q-card-media>
                  <responsive-image :w="800" :md-size="12" :size="8" src="cardh/aviario_4"></responsive-image>
                  <q-card-title slot="overlay">
                    {{$t('caption1')}}
                      <q-btn no-caps flat color="white" icon-right="forward">{{$t('glossary.sabermas')}}</q-btn>
                  </q-card-title>
                </q-card-media>
              </q-card>
            </router-link>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/pantano_1"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('centrocustodia.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('centrocustodia.body')">{{l}}<br></template>
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/centrocustodia/aviario">
                  <q-btn color="primary" flat icon-right="forward">{{$t('pages.aviario')}}</q-btn>
                </router-link>
                <router-link to="/resort/florafauna/centrocustodia">
                  <q-btn color="primary" flat icon-right="forward">{{$t('pages.centrocustodia')}}</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/mariposa_2"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('faunalocal.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('faunalocal.body')">{{l}}<br></template>
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/faunalocal/mariposario">
                  <q-btn color="primary" flat icon-right="forward">{{$t('pages.mariposario')}}</q-btn>
                </router-link>
                <router-link to="/resort/florafauna/faunalocal">
                  <q-btn color="primary" flat icon-right="forward">{{$t('pages.faunalocal')}}</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/ardilla"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/orquideario_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/orquideario_flor_4"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('flora.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('flora.body')">{{l}}<br></template>
                </p>
              </q-card-main>
              <q-card-actions align="end">
                <router-link to="/resort/florafauna/flora">
                  <q-btn color="primary" flat icon-right="forward">{{$t('pages.flora')}}</q-btn>
                </router-link>
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/missioneducativa"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('missioneducativa.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('missioneducativa.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card id="evoluseum" class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/evoluseum"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('evoluseum.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('evoluseum.body')">{{l}}<br></template>
                </p>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardv/evoluseum_1"></responsive-image>
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
  name: 'FloraFauna',
  i18nOptions: { namespaces: 'florafauna' },
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
