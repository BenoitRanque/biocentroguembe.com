<template>
  <q-layout
    view="HHH lpR ffr"
  > <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header reveal>
      <q-toolbar v-ripple inverted class="q-px-sm q-py-none">
        <img @click="$router.push('/')" class="cursor-pointer gt-xs" style="height: 64px" src="~assets/logo.svg" alt="">
        <img @click="$router.push('/')" class="cursor-pointer xs" style="height: 64px" src="~assets/isologo.svg" alt="">
        <q-toolbar-title>
          {{$t(`page.${$route.name}`)}}
        </q-toolbar-title>
        <div>

        </div>
        <q-btn
          flat
          round
          dense
          class="transition-generic"
          :class="{ 'rotate-180': rightDrawer }"
          :icon="rightDrawer ? 'close' : 'menu'"
          @click="rightDrawer = !rightDrawer"
        />
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <main-footer></main-footer>
    </q-layout-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="right"
      content-class=""
      v-model="rightDrawer"
    >
      <main-drawer class="fit"></main-drawer>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import MainFooter from 'components/MainFooter'
import MainDrawer from 'components/MainDrawer'
export default {
  name: 'MainLayout',
  components: {
    MainFooter,
    MainDrawer
  },
  data () {
    return {
      rightDrawer: false
    }
  }
}
</script>

<style>
</style>

<i18n>
{
  "es": {
    "hello": "hola",
    "menu": "Menú"
  },
  "en": {
    "hello": "hello",
    "menu": "Menu"
  }
}
</i18n>
