<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <!-- <q-layout-header>
      <q-toolbar v-ripple inverted class="q-px-sm q-py-none">
        <router-link to="/" class="relative-position">
          <img class="gt-xs" style="height: 64px" src="~assets/logo.svg" alt="">
          <img class="xs" style="height: 64px" src="~assets/isologo.svg" alt="">
        </router-link>
        <q-toolbar-title>
          Header
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          :icon="rightDrawer ? 'close' : 'menu'"
          @click="rightDrawer = !rightDrawer"
        />
      </q-toolbar>
    </q-layout-header> -->

    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <q-toolbar>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
        <q-toolbar-title>
          Footer
          <span slot="subtitle">Subtile</span>
        </q-toolbar-title>
        <q-btn
          flat
          round
          dense
          icon="menu"
          @click="leftDrawer = !leftDrawer"
        />
      </q-toolbar>
      <q-tabs>
        <q-route-tab
          slot="title"
          icon="map"
          to="/your/route"
          replace
          label="One Tab"
        />
        <q-route-tab
          slot="title"
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs>
    </q-layout-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <!-- <q-layout-drawer
      side="right"
      overlay
      content-class="bg-blue"
      v-model="rightDrawer"
    > -->
      <!-- QScrollArea is optional -->
      <!-- <q-scroll-area class="fit q-pa-sm"> -->
        <!-- Content here -->
      <!-- </q-scroll-area> -->
    <!-- </q-layout-drawer> -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

    <q-page-sticky position="top-right" :offset="[32, 24]">
      <q-btn size="xl" color="secondary">
        SUPER PROMO
      </q-btn>
    </q-page-sticky>

  </q-layout>
</template>

<script>
import QResponsiveImg from 'components/QResponsiveImg'
export default {
  name: 'IndexLayout',
  components: {
    QResponsiveImg
  },
  data () {
    return {
      rightDrawer: true
    }
  }
}
</script>

<style>
</style>
