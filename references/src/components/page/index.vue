<template lang="html">
  <div>
    <carousel
      :autoplay="true"
      :perPage="1"
      :navigationEnabled="true"
      :paginationEnabled="true"
      :speed="1000"
      :autoplayTimeout="6000"
      :autoplayHoverPause="false"
      >
      <!-- <slide>
        <div class="layout-padding">
          <div class="relative-position">
            <router-link to="/resort/florafauna/centrocustodia/aviario">
              <responsive-image class="full-width" src="wide/grafico_fauna" :w="1500"></responsive-image>
            </router-link>
            <router-link class="bubble absolute" to="/" style="width: 20%; top: 50%; left: 25%">
              <responsive-image src="bubble/parabaroja" class="full-width":w="300" :size="2"></responsive-image>
            </router-link>
            <router-link class="bubble absolute" to="/" style="width: 25%; top: 35%; left: 5%">
              <responsive-image src="bubble/parabaroja" class="full-width":w="300" :size="2"></responsive-image>
            </router-link>
          </div>
        </div>
      </slide> -->
      <slide>
        <div class="layout-padding">
          <router-link to="/resort/florafauna/centrocustodia/aviario">
            <responsive-image class="full-width" src="wide/grafico_fauna" :w="1500"></responsive-image>
          </router-link>
        </div>
      </slide>
      <slide>
        <div class="layout-padding">
          <router-link to="/hotel">
            <responsive-image class="full-width" src="wide/grafico_hotel" :w="1500"></responsive-image>
          </router-link>
        </div>
      </slide>
      <slide>
        <div class="layout-padding">
          <router-link to="/resort/parqueacuatico">
            <responsive-image class="full-width" src="wide/grafico_piscinas" :w="1500"></responsive-image>
          </router-link>
        </div>
      </slide>
      <slide>
        <div class="layout-padding">
          <router-link to="/resort/recreacion">
            <responsive-image class="full-width" src="wide/grafico_recreacion" :w="1500"></responsive-image>
          </router-link>
        </div>
      </slide>
    </carousel>
    <div class="wrapper">
      <div class="layout-padding">
        <!-- <div class="row window-height items-center justify-center">
          <div class="col-xs-1 col-sm-3"></div>
          <div class="col-xs-10 col-sm-6">
            <q-card inline class="bg-white">
              <q-card-media>
                <responsive-image src="wide/aviario_2" :w="1500"></responsive-image>
              </q-card-media>
              <q-card-main>
                <h3 class="thin-paragraph text-secondary text-center"><em>“{{$t('quote.body')}}”</em></h3>
                <br>
                <h5 class="light-paragraph text-primary text-right"><em>- {{$t('quote.author')}}</em></h5>
              </q-card-main>
            </q-card>
          </div>
          <div class="col-xs-1 col-sm-3"></div>
        </div> -->
        <div class="row">
          <div class="col-sm-12 col-md-4">
            <router-link to="/resort/parqueacuatico">
              <q-card class="bg-white">
                <q-card-media>
                  <responsive-image src="cardv/promo_1" :w="800"></responsive-image>
                </q-card-media>
                <!-- <q-card-actions align="center">
                    <q-btn color="secondary" flat icon-right="forward">{{$t('glossary.sabermas')}}</q-btn>
                </q-card-actions> -->
              </q-card>
            </router-link>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-link to="/resort/florafauna">
              <q-card class="bg-white">
                <q-card-media>
                  <responsive-image src="cardv/promo_2" :w="800"></responsive-image>
                </q-card-media>
                <!-- <q-card-actions align="center">
                    <q-btn color="secondary" flat icon-right="forward">{{$t('glossary.sabermas')}}</q-btn>
                </q-card-actions> -->
              </q-card>
            </router-link>
          </div>
          <div class="col-sm-12 col-md-4">
            <router-link to="/resort/recreacion">
              <q-card class="bg-white">
                <q-card-media>
                  <responsive-image src="cardv/promo_3" :w="800"></responsive-image>
                </q-card-media>
                <!-- <q-card-actions align="center">
                    <q-btn color="secondary" flat icon-right="forward">{{$t('glossary.sabermas')}}</q-btn>
                </q-card-actions> -->
              </q-card>
            </router-link>
          </div>
        </div>
        <div>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/resort/florafauna/mariposario">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/mariposa_2" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('highlights.mariposario')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/resort/recreación">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/kayaks_1" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('highlights.recreacion')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/resort/florafauna/flora">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/orquideario_1" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('highlights.orquideario')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/resort/florafauna/centrocustodia/aviario">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/lorohablador" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('highlights.aviario')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/resort/parqueacuatico">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/espejillos_2" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('highlights.espejillos')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/hotel/habitaciones">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/suitedelux_1" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('highlights.suitedelux')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
          </div>
          <q-card>
            <q-card-media>
              <park-map></park-map>
              <q-card-title slot="overlay">
                {{$t('mapa')}}
              </q-card-title>
            </q-card-media>
          </q-card>
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/resort">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/amboro_2" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('pages.resort')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/hotel">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/habitación_1" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('pages.hotel')}}  <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/gastronomia">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/laspalmas_1" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('pages.gastronomia')}}  <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/eventos">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/casavieja_1" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('pages.eventos')}}  <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/precios">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/familia" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('pages.precios')}} <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
              <router-link to="/nosotros">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image src="cardh/aviario_2" :w="800" :xs-size="12" :sm-size="6" :size="4"></responsive-image>
                    <q-card-title slot="overlay">
                      {{$t('pages.nosotros')}}  <q-icon name="forward"></q-icon>
                    </q-card-title>
                  </q-card-media>
                </q-card>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from '@/ResponsiveImage'
import ParkMap from '@/page/mapa'
import GMaps from '@/GMaps'
import { Carousel, Slide } from '@/tmp/carousel'
import {
  QBtn,
  QIcon,
  QFixedPosition,
  QCollapsible,
  QCarousel,
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
  name: 'Index',
  i18nOptions: { namespaces: 'index' },
  components: {
    ParkMap,
    GMaps,
    Carousel,
    Slide,
    ResponsiveImage,
    QBtn,
    QIcon,
    QFixedPosition,
    QCollapsible,
    QCarousel,
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

<style lang="stylus">
// #quotecard::before
//   content ''
//   display inline-block
//   height 100%

  .bubble
    line-height 0
    font-size 0
    position absolute
    display inline-block

    > img
      border-radius 50%
      border .5vw solid #fff
      box-shadow 0 3px 5px -1px rgba(0,0,0,0.2),
        0 6px 10px rgba(0,0,0,0.14),
        0 1px 18px rgba(0,0,0,0.12),
        0 0 0 3vw rgba(#fff, 0.1)

    &:before,
    &:after
      content ''
      display block
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      border-radius 50%

    &:before
      border .5rem solid rgba(#fff, .2)
      box-shadow 0 0 0 1px #fff

    &:after
      transform scale(1.2)
      border .5rem solid rgba(#fff, .2)
      box-shadow 0 0 0 1px #fff

    &:hover:before
      animation ripple 3s linear .75s infinite

    &:hover:after
      animation ripple 3s linear -0.75s infinite

  @keyframes ripple
    0%
      transform scale(1)
    25%
      transform scale(1.2)
      opacity 1
    50%
      transform scale(1.4)
      opacity 1
    75%
      transform scale(1.5)
      opacity 1
    100%
      transform scale(1.6)
      opacity 0

</style>
