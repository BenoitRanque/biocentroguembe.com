<template>
  <q-page>
    <q-backdrop src="grafico_piscinas"/>
    <q-carousel infinite arrows handle-arrow-keys style="height:100vh">
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_piscinas" format="slide" class="fit" style="object-fit: cover"/>
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_hotel" format="slide" class="fit" style="object-fit: cover"/>
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_fauna" format="slide" class="fit" style="object-fit: cover"/>
      </q-carousel-slide>
      <q-carousel-slide class="q-pa-none">
        <q-responsive-img src="grafico_recreacion" format="slide" class="fit" style="object-fit: cover"/>
      </q-carousel-slide>
      <!-- <q-carousel-control position="bottom" slot="control-nav" slot-scope="carousel" :offset="[18, 52]">

      </q-carousel-control> -->
    </q-carousel>
    <div class="layout-padding page-width">
      <div class="row wrap gutter-sm">
        <div class="col-sm-6 col-md-4 col-12">
          <q-card>
            <q-card-media>
              <q-responsive-img src="parabaazul2" format="card" sizes="lg 40vw, md 50vw"></q-responsive-img>
            </q-card-media>
          </q-card>
        </div>
        <div class="col-sm-6 col-md-4 col-12">
          <q-card>
            <q-card-media>
              <q-responsive-img src="parabaazul2" format="card" sizes="lg 40vw, md 50vw"></q-responsive-img>
            </q-card-media>
          </q-card>
        </div>
        <div class="col-sm-6 col-md-4 col-12">
          <q-card>
            <q-card-media>
              <q-responsive-img src="parabaazul2" format="card" sizes="lg 40vw, md 50vw"></q-responsive-img>
            </q-card-media>
          </q-card>
        </div>
        <div class="col-sm-6 col-md-4 col-12">
          <q-card>
            <q-card-media>
              <q-responsive-img src="parabaazul2" format="card" sizes="lg 40vw, md 50vw"></q-responsive-img>
            </q-card-media>
          </q-card>
        </div>
        <div class="col-sm-6 col-md-4 col-12">
          <q-card>
            <q-card-media>
              <q-responsive-img src="parabaazul2" format="card" sizes="lg 40vw, md 50vw"></q-responsive-img>
            </q-card-media>
          </q-card>
        </div>
        <div class="col-sm-6 col-md-4 col-12">
          <q-card>
            <q-card-media>
              <q-responsive-img src="parabaazul2" format="card" sizes="lg 40vw, md 50vw"></q-responsive-img>
            </q-card-media>
          </q-card>
        </div>
      </div>
    </div>

  </q-page>
</template>

<style lang="stylus" scoped>
</style>

<script>
import QResponsiveImg from 'components/QResponsiveImg'
import QBackdrop from 'components/QBackdrop'
import QImg from 'components/QImg'
export default {
  name: 'PageIndex',
  components: {
    QImg,
    QResponsiveImg,
    QBackdrop
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
