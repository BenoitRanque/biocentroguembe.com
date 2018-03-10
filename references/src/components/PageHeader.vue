<template lang="html">
  <div>
    <div class="row">
      <div v-if="banner" class="col-12">
        <q-card>
          <q-card-media>
            <responsive-image :w="1500" :src="'wide/' + banner"></responsive-image>
            <img src="/statics/wave.svg" class="full-width absolute absolute-bottom" alt="">
            <div class="text-center absolute absolute-bottom">
              <div class="row">
                <div class="col"></div>
                <div class="col-7 text-center">
                  <h4 v-if="subheader" class="paragraph-thin text-italic text-faded">{{title || $t(`pages.${$route.meta.name}`)}}</h4>

                  <h2 v-else-if="header" class="paragraph-thin text-italic text-faded">{{title || $t(`pages.${$route.meta.name}`)}}</h2>
                </div>
              </div>
            </div>
          </q-card-media>
        </q-card>
      </div>
      <div v-else class="col-12 text-center text-bold text-italic">
        <q-card v-if="subheader" class="bg-primary text-white">
          <q-card-main>
            <h4 class="text-bold text-italic">{{title || $t(`pages.${$route.meta.name}`)}}</h4>
          </q-card-main>
        </q-card>
        <q-card v-else-if="header" class="bg-white text-primary">
          <q-card-main>
            <h2 class="text-bold text-italic">{{title || $t(`pages.${$route.meta.name}`)}}</h2>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImage from '@/ResponsiveImage.vue'
import {
  QCard,
  QCardMain,
  QCardMedia
} from 'quasar'
export default {
  name: 'PageHeader',
  i18nOptions: { namespaces: 'comon' },
  components: {
    QCard,
    QCardMain,
    QCardMedia,
    ResponsiveImage
  },
  props: {
    banner: {
      type: String,
      required: false,
      default: ''
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    header: {
      type: Boolean,
      required: false,
      default: true
    },
    subheader: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style lang="stylus">
  // .header-text
  //   background no-repeat center center fixed
  //   // background-size cover
  //   background-image url('/statics/wave.svg')


</style>
