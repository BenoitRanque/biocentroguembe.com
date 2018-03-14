<template>
  <q-page>
    <q-backdrop>
      <q-responsive-img src="amboro_2" format="slide"></q-responsive-img>
    </q-backdrop>
    <q-carousel infinite arrows handle-arrow-keys quick-nav>
      <q-carousel-slide
        class="q-pa-none cursor-pointer"
        v-for="(slide, index) in slides"
        :key="index"
        @click.native="slide.target && $router.push(slide.target)"
      >
        <q-responsive-img :src="slide.image" format="slide" immediate />
      </q-carousel-slide>
      <!-- <q-carousel-control position="bottom" slot="control-nav" slot-scope="carousel" :offset="[18, 52]">
      </q-carousel-control> -->
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
          <q-card class="cursor-pointer" @click.native="$router.push(card.target)">
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
      <map-icons class="q-my-md">
        <q-responsive-img src="map" format="map" sizes="md 990px"></q-responsive-img>
      </map-icons>
      <div class="row wrap gutter-sm">
        <div class="col-xs-6 col-md-4 col-12" v-for="(card, index) in cards2" :key="index">
          <q-card class="cursor-pointer" @click.native="$router.push(card.target)">
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
import WhiteWave from 'components/WhiteWave'
import QImg from 'components/QImg'
export default {
  name: 'PageIndex',
  components: {
    QImg,
    QResponsiveImg,
    QBackdrop,
    MapIcons,
    WhiteWave
  },
  data () {
    return {
      slides: [
        {
          target: '/florafauna/aviario',
          image: 'grafico_fauna'
        },
        {
          target: '/florafauna/aviario',
          image: 'grafico_hotel'
        },
        {
          target: '/florafauna/aviario',
          image: 'grafico_piscinas'
        },
        {
          target: '/florafauna/aviario',
          image: 'grafico_recreacion'
        }
      ],
      cards: [
        {
          img: 'mariposa_card_2',
          caption: 'mariposario',
          target: '/florafauna/mariposario'
        },
        {
          img: 'kayaks_card_1',
          caption: 'kayaks',
          target: '/recreacion'
        },
        {
          img: 'orquideario_card_1',
          caption: 'orquideario',
          target: '/florafauna/aviario'
        },
        {
          img: 'lorohablador_card',
          caption: 'aviario',
          target: '/florafauna/aviario'
        },
        {
          img: 'espejillos_card_2',
          caption: 'espejillos',
          target: 'aviario'
        },
        {
          img: 'canchas_card_1',
          caption: 'canchas',
          target: '/recreacion'
        }
      ],
      cards2: [
        {
          img: 'amboro_card_2',
          caption: 'amboro',
          target: '/parqueacuatico'
        },
        {
          img: 'laspalmas_card_2',
          caption: 'gastronomia',
          target: '/gastronomia'
        },
        {
          img: 'evoluseum_card',
          caption: 'evoluseum',
          target: '/florafauna/evoluseum'
        },
        {
          img: 'flora_card',
          caption: 'flora',
          target: 'flroafauna/flora'
        },
        {
          img: 'tucan_card',
          caption: 'noticias',
          target: '/noticias'
        },
        {
          img: 'saimiri_card',
          caption: 'nosotros',
          target: '/nosotros'
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
      "aviario": "Aviario",
      "amboro": "Piscinas Amboro",
      "espejillos": "Piscinas Espejillos",
      "kayaks": "Kayaks",
      "orquideario": "Orquideario",
      "mariposario": "Mariposario",
      "canchas": "Canchas Deportivas",
      "gastronomia": "Gastronomia",
      "nosotros": "Nosotros",
      "noticias": "Noticias",
      "flora": "Flora",
      "evoluseum": "Evoluseum"
    }
  },
  "en": {
    "cardcaption": {
      "aviario": "Aviary",
      "amboro": "Amboro Swimming Pools",
      "espejillos": "Espejillos Swimming Pools",
      "kayaks": "Kayaks",
      "orquideario": "Orchid Sanctuary",
      "mariposario": "Butterfly Dome",
      "canchas": "Sports",
      "gastronomia": "Gastronomy",
      "nosotros": "About Us",
      "noticias": "News",
      "flora": "Flora",
      "evoluseum": "Evoluseum"
    }
  }
}
</i18n>
