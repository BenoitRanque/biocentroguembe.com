<template>
  <q-page>
    <q-backdrop src="amboro_2"/>
    <q-carousel infinite arrows handle-arrow-keys>
      <q-carousel-slide
        class="q-pa-none cursor-pointer"
        v-for="(slide, index) in slides"
        :key="index"
        @click.native="slide.target && $router.push(slide.target)"
      >
        <q-responsive-img :src="slide.image" format="slide" immediate />
      </q-carousel-slide>
      <q-carousel-control position="bottom" slot="control-nav" slot-scope="carousel" :offset="[18, 52]">
      </q-carousel-control>
    </q-carousel>
    <div class="layout-padding page-width">
      <!-- <div class="row wrap gutter-sm q-mb-md">
        <div class="col-sm-4 col-12" v-for="(card, index) in promos" :key="index">
          <q-card>
            <q-card-media>
              <q-responsive-img :src="card" format="vcard" sizes="lg 300px, md 33vw"></q-responsive-img>
            </q-card-media>
          </q-card>
        </div>
      </div> -->
      <div class="row wrap gutter-sm">
        <div class="col-xs-6 col-md-4 col-12" v-for="(card, index) in cards" :key="index">
          <q-card class="cursor-pointer" @click.native="$router.push(`/${card.target}`)">
            <q-card-media>
              <q-responsive-img :src="card.img" format="card" sizes="lg 300px, md 33vw, xs 50vw"></q-responsive-img>
              <q-card-title slot="overlay" class="q-pa-sm">
                <div class="row items-center" slot="subtitle">
                  <div class="col">
                    {{$t(`cardcaption.${card.caption}`)}}
                  </div>
                  <div class="col-auto">
                    <q-btn size="sm" color="secondary" rounded flat icon="forward"></q-btn>
                  </div>
                </div>
              </q-card-title>
            </q-card-media>
          </q-card>
        </div>
      </div>
      <map-icons class="q-my-md">
        <q-responsive-img src="map" format="map" sizes="md 990px"></q-responsive-img>
      </map-icons>
      <div class="row wrap gutter-sm">
        <div class="col-xs-6 col-md-4 col-12" v-for="(card, index) in cards2" :key="index">
          <q-card class="cursor-pointer" @click.native="$router.push(`/${card.target}`)">
            <q-card-media>
              <q-responsive-img :src="card.img" format="card" sizes="lg 300px, md 33vw, xs 50vw"></q-responsive-img>
              <q-card-title slot="overlay" class="q-pa-sm">
                <div class="row items-center" slot="subtitle">
                  <div class="col">
                    {{$t(`cardcaption.${card.caption}`)}}
                  </div>
                  <div class="col-auto">
                    <q-btn size="sm" rounded flat icon="forward"></q-btn>
                  </div>
                </div>
              </q-card-title>
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
import MapIcons from 'components/MapIcons'
import QImg from 'components/QImg'
export default {
  name: 'PageIndex',
  components: {
    QImg,
    QResponsiveImg,
    QBackdrop,
    MapIcons
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
        {
          img: 'mariposa_card_2',
          caption: 'mariposario',
          target: 'florafauna/mariposario'
        },
        {
          img: 'kayaks_card_1',
          caption: 'kayaks',
          target: 'aviario'
        },
        {
          img: 'orquideario_card_1',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'lorohablador_card',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'espejillos_card_2',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'canchas_card_1',
          caption: 'aviario',
          target: 'aviario'
        }
      ],
      cards2: [
        {
          img: 'amboro_card_2',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'laspalmas_card_2',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'evoluseum_card',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'flora_card',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'tucan_card',
          caption: 'aviario',
          target: 'aviario'
        },
        {
          img: 'saimiri_card',
          caption: 'aviario',
          target: 'aviario'
        }
      ]
      // promos: [
      //   'promo_1',
      //   'promo_2',
      //   'promo_3'
      // ]
    }
  }
}
</script>

<i18n>
{
  "es": {
    "cardcaption": {
      "aviario": "Aviario"
    }
  },
  "es": {
    "cardcaption": {
      "aviario": "Aviary"
    }
  }
}
</i18n>
