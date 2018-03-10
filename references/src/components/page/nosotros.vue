<template lang="html">
  <div>
    <div class="fixed fixed-top-left fixed-bottom-right">
      <g-maps :zoom="12" name="backdrop" showinfowindow class="full-height"/>
    </div>
    <div class="wrapper relative-position">
      <div class="layout-padding">

        <page-header banner="orquideario_2" :header="false"></page-header>

        <q-card class="bg-teal-1 text-center" style="border-radius: 1rem">
          <q-card-main>
            <div class="row justify-center">
              <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6">
                <div class="layout-padding">
                  <h2 class="text-bold text-primary">
                    {{$t('about.title')}}
                  </h2>
                  <p class="caption">
                    <template v-for="l in $t('about.body')">{{l}}<br></template>
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-6">
                <div class="layout-padding">
                  <h4 class="text-bold text-secondary">
                    {{$t('mission.title')}}
                  </h4>
                  <p class="caption">
                    <template v-for="l in $t('mission.body')">{{l}}<br></template>
                  </p>
                </div>
              </div>
              <div class="col-sm-12 col-md-6">
                <div class="layout-padding">
                  <h4 class="text-bold text-secondary">
                    {{$t('vision.title')}}
                  </h4>
                  <p class="caption">
                    <template v-for="l in $t('vision.body')">{{l}}<br></template>
                  </p>
                </div>
              </div>
            </div>
          </q-card-main>
        </q-card>
      </div>
    </div>

    <div class="window-height" style="z-index: -1"></div>

    <!-- <div class="wrapper relative-position">
      <div class="layout-padding">


      </div>
    </div> -->
  </div>
</template>

<script>
import ResponsiveImage from '@/ResponsiveImage'
import PageHeader from '@/PageHeader'
import ContactusInfo from '@/ContactusInfo'
import GMaps from '@/GMaps'
import {
  QBtn,
  QIcon,
  QCard,
  QCardTitle,
  QCardMedia,
  QCardMain,
  QCardSeparator,
  QCardActions,
  QField,
  QInput
} from 'quasar'

export default {
  name: 'Nosotros',
  i18nOptions: { namespaces: 'nosotros' },
  components: {
    GMaps,
    ResponsiveImage,
    PageHeader,
    ContactusInfo,
    QBtn,
    QIcon,
    QCard,
    QCardTitle,
    QCardMedia,
    QCardMain,
    QCardSeparator,
    QCardActions,
    QField,
    QInput
  }
}
</script>

<style lang="css">
</style>
