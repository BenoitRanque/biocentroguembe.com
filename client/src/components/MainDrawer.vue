<template>
  <q-scroll-area class="fit bg-secondary">
    <q-list no-border dark link>
      <q-list-header>
        {{$t('map')}}
      </q-list-header>
      <q-item class="q-pa-none" to="mapa">
        <q-item-main>
          <q-item-tile>
            <q-responsive-img src="map" format="map" sizes="xs 300px"></q-responsive-img>
          </q-item-tile>
        </q-item-main>
      </q-item>

      <q-list-header>
        {{$t('menu')}}
      </q-list-header>
      <q-item :to="`/${page}`" v-for="page in pages" :key="page">
        <q-item-main>
          <q-item-tile>
            {{$t(`page.${page}`)}}
          </q-item-tile>
        </q-item-main>
      </q-item>

      <q-list-header>
        <div class="row q-pr-xs">
          <div class="col">
            {{$t('language')}}
          </div>
          <div class="col-auto">
          </div>
        </div>
      </q-list-header>
      <q-item @click.native="$refs.toggle.toggle">
        <q-item-main>
          <q-item-tile>
            {{$t('currentLang')}}
          </q-item-tile>
        </q-item-main>
        <q-item-side>
          <q-item-tile>
            <lang-toggle @click.native="$refs.toggle.toggle" ref="toggle"></lang-toggle>
          </q-item-tile>
        </q-item-side>
      </q-item>
    </q-list>
    <!-- Content here -->
  </q-scroll-area>

</template>

<script>
import QResponsiveImg from 'components/QResponsiveImg'
import LangToggle from 'components/LangToggle'
// import pages from '../router/pages'
export default {
  name: 'MainDrawer',
  components: { LangToggle, QResponsiveImg },
  data () {
    return {
      pages: [
        'florafauna',
        'parqueacuatico',
        'gastronomia',
        'eventos',
        'precios',
        'nosotros'
      ],
      menu: [
        {
          label: 'parent',
          header: 'parent',
          target: '/',
          children: [
            {
              header: 'parent',
              target: '/',
              label: 'child'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>

<i18n>
{
  "es": {
    "language": "Idioma",
    "currentLang": "Español",
    "map": "Mapa Interactivo",
    "menu": "Menú"
  },
  "en": {
    "language": "Language",
    "currentLang": "English",
    "map": "Interactive Map",
    "menu": "Menu"
  }
}
</i18n>
