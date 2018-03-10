<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="hotel_1" :header="false"></page-header>

        <template v-for="r in $t('rooms')">
          <page-header subheader :title="r.header"></page-header>

          <div class="row">
            <div class="col-md-12 col-lg-8">
              <q-card>
                <q-card-media>
                  <responsive-image :w="800" :md-size="12" :size="8" :src="`cardh/${r.image1}`"></responsive-image>
                </q-card-media>
              </q-card>
            </div>
            <div class="col-md-12 col-lg-4">
              <q-card class="bg-white">
                <q-card-media>
                  <responsive-image :w="800" :md-size="12" :size="4" :src="`cardh/${r.image2}`"></responsive-image>
                </q-card-media>
                <q-card-title class="text-primary">
                  {{r.title}}
                  <span slot="subtitle">{{r.subtitle}}</span>
                </q-card-title>
                <q-card-separator></q-card-separator>
                <q-card-main>
                  <p>
                    <template v-for="l in r.body">{{l}}<br></template>
                  </p>
                </q-card-main>
              </q-card>
              <q-card-actions align="center" vertical>
                <router-link to="/hotel/reservar">
                  <q-btn flat color="secondary" icon-right="forward">{{$t('pages.reservar')}}</q-btn>
                </router-link>
              </q-card-actions>
            </div>
          </div>
        </template>
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
  name: 'Habitaciones',
  i18nOptions: { namespaces: 'habitaciones' },
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
