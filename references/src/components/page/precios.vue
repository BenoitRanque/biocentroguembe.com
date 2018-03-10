<template lang="html">
  <div>
    <div class="wrapper">
      <div class="layout-padding">
        <page-header banner="amboro_1"></page-header>

        <div class="row">
          <div class="col-md-12 col-lg-8">
            <q-card>
              <q-card-media>
                <responsive-image :w="800" :md-size="12" :size="8" src="cardh/canchas_1"></responsive-image>
              </q-card-media>
            </q-card>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="row">
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/masaje"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
              <div class="col-md-6 col-lg-12">
                <q-card class="bg-white">
                  <q-card-media>
                    <responsive-image :w="800" :sm-size="12" :md-size="6" :size="4" src="cardh/aviario_3"></responsive-image>
                  </q-card-media>
                </q-card>
              </div>
            </div>
          </div>
        </div>

        <template v-for="pr in $t('products')">
          <page-header subheader :title="pr.title"></page-header>

          <div class="row">
            <div class="col-md-12 col-lg-4">
              <q-card class="bg-white">
                <q-card-media>
                  <responsive-image :w="800" :md-size="12" :size="8" v-if="pr.image ":src="`cardh/${pr.image}`"></responsive-image>
                </q-card-media>
                <q-card-title class="text-primary">
                  <h5>
                    {{pr.title}}
                  </h5>
                </q-card-title>
                <q-card-main>
                  <p>
                    <template v-for="l in pr.body">{{l}}<br></template>
                  </p>
                </q-card-main>
              </q-card>
            </div>
            <div class="col-md-12 col-lg-8">
              <q-card class="bg-white">
                <q-card-main>
                  <h5 class="text-primary">
                    {{pr.listheader}}
                  </h5>
                  <q-list no-border>
                    <template v-for="i in pr.items">
                      <q-item dense>
                        <q-item-main>
                          <q-item-tile color="primary">
                            <h6>
                              {{i.title}}
                            </h6>
                          </q-item-tile>
                        </q-item-main>
                        <q-item-side right>
                          <q-item-tile color="secondary">
                            <h6>
                              {{i.price}}
                            </h6>
                          </q-item-tile>
                        </q-item-side>
                      </q-item>
                      <q-item separator dense>
                        <q-item-main>
                          <q-item-tile>
                            <p>
                              <template v-for="l in i.body">
                                •
                                {{l}}
                                <br>
                              </template>
                            </p>
                            <br>
                          </q-item-tile>
                        </q-item-main>
                      </q-item>
                    </template>
                  </q-list>
                </q-card-main>
              </q-card>
            </div>
          </div>

        </template>

      </div>
    </div>
  </div>
</template>


<script>
import ResponsiveImage from '@/ResponsiveImage'
import PageHeader from '@/PageHeader'
import {
  QCard,
  QCardMedia,
  QCardTitle,
  QCardSeparator,
  QCardMain,
  QCardActions,
  QBtn,
  QList,
  QListHeader,
  QItem,
  QItemMain,
  QItemSeparator,
  QItemSide,
  QItemTile
} from 'quasar'
export default {
  name: 'Precios',
  i18nOptions: { namespaces: 'precios' },
  components: {
    ResponsiveImage,
    PageHeader,
    QCard,
    QCardMedia,
    QCardTitle,
    QCardSeparator,
    QCardMain,
    QCardActions,
    QBtn,
    QList,
    QListHeader,
    QItem,
    QItemMain,
    QItemSeparator,
    QItemSide,
    QItemTile
  }
}
</script>

<style lang="css">
</style>
