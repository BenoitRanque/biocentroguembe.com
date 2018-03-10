<template>
  <q-page>
    <q-backdrop src="grafico_piscinas"/>
    <q-carousel infinite arrows handle-arrow-keys>
      <q-carousel-slide
        class="q-pa-none"
        v-for="(slide, index) in slides"
        :key="index"
        @click.native="slide.target && $router.push(slide.target)"
      >
        <q-responsive-img :src="slide.image" format="slide" immediate />
      </q-carousel-slide>
      <!-- <q-carousel-control position="bottom" slot="control-nav" slot-scope="carousel" :offset="[18, 52]">

      </q-carousel-control> -->
    </q-carousel>
    {{$t('local')}}
    <div class="layout-padding page-width">
      <div class="row wrap gutter-sm">
        <div class="col-sm-6 col-md-4 col-12" v-for="(card, index) in cards" :key="index">
          <q-card>
            <q-card-media>
              <q-responsive-img :src="card" format="card" sizes="lg 300px, md 33vw, sm 50vw"></q-responsive-img>
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
  },
  data () {
    return {
      slides: [
        {
          target: '/aviario',
          image: 'grafico_fauna'
        },
        {
          target: '/aviario',
          image: 'grafico_hotel'
        },
        {
          target: '/aviario',
          image: 'grafico_piscinas'
        },
        {
          target: '/aviario',
          image: 'grafico_recreacion'
        }
      ],
      cards: [
        'parabaazul',
        'parabaazul2',
        'parabaazul',
        'parabaazul2',
        'parabaazul',
        'parabaazul2'
      ]
    }
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
