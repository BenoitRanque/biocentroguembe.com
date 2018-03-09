<template>
  <q-page>
    <q-carousel infinite arrows quick-nav handle-arrow-keys>
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_piscinas" format="slide" />
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_hotel" format="slide" />
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_fauna" format="slide" />
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_recreacion" format="slide" />
      </q-carousel-slide>
      <!-- <q-carousel-control position="bottom" slot="control-nav" slot-scope="carousel" :offset="[18, 52]">

      </q-carousel-control> -->
    </q-carousel>
    <div class="layout-padding page-width bg-blue">
      <div class="flex flex-center" style="height: 100vh">
        <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
      </div>
      <div class="row">
        <div class="col-md-6">
          <q-responsive-img src="parabaazul" format="card" sizes="md 50vw"
          ></q-responsive-img>
        </div>
        <div class="col-md-6">
      <q-responsive-img src="parabaazul2" format="card" sizes="lg 40vw, md 50vw"
      ></q-responsive-img>

        </div>
      </div>

    </div>
  </q-page>
</template>

<style lang="stylus" scoped>
@import '~variables'

main
  page-backdrop('grafico_fauna')
</style>

<script>
import QResponsiveImg from 'components/QResponsiveImg'
import QImg from 'components/QImg'
export default {
  name: 'PageIndex',
  components: {
    QImg,
    QResponsiveImg
  }
}
</script>

<i18n>
{
  "es": {
    "local": "como esta"
  },
  "en": {
    "local": "how are you"
  }
}
</i18n>
