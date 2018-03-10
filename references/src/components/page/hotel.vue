<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="hotel_1"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/habitación_1"></responsive-image>
                <q-card-title slot="overlay">
                  <div class="row items-center">
                    <div class="col">
                      {{$t('caption1')}}
                    </div>
                    <div class="col-auto">
                      <router-link to="/contacto?mode=hotel">
                        <q-btn class="shadow-3" icon-right="forward" color="secondary" no-caps big glossy rounded>{{$t('glossary.reservar')}}</q-btn>
                      </router-link>
                    </div>
                  </div>
                </q-card-title>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-4">
            <q-card class="bg-white">
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="4" src="cardh/desayuno"></responsive-image>
              </q-card-media>
              <q-card-title class="text-primary">
                {{$t('hotel1.title')}}
              </q-card-title>
              <q-card-main>
                <p>
                  <template v-for="l in $t('hotel1.body')">{{l}}<br></template>
                </p>
              </q-card-main>
              <q-card-actions align="center" vertical>
                <router-link to="/hotel/cabanas">
                  <q-btn flat color="primary" icon-right="forward">{{$t('pages.cabanas')}}</q-btn>
                </router-link>
                <router-link to="/hotel/habitaciones">
                  <q-btn flat color="primary" icon-right="forward">{{$t('pages.habitaciones')}}</q-btn>
                </router-link>
              </q-card-actions>
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
import ContactusHotel from '@/ContactusHotel.vue'
import {
  QCard,
  QCardTitle,
  QCardMain,
  QCardMedia,
  QCardActions,
  QBtn
} from 'quasar'

export default {
  name: 'Hotel',
  i18nOptions: { namespaces: 'hotel' },
  components: {
    PageHeader,
    ResponsiveImage,
    ContactusHotel,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardActions,
    QBtn
  }
}
</script>

<style lang="styl">
</style>
