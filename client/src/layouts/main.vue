<template>
  <q-layout
  > <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-layout-header reveal>
      <q-toolbar v-ripple inverted class="q-px-sm q-py-none">
        <router-link to="/" class="relative-position">
          <img class="gt-xs" style="height: 64px" src="~assets/logo.svg" alt="">
          <img class="xs" style="height: 64px" src="~assets/isologo.svg" alt="">
        </router-link>
        <q-toolbar-title>
          {{$t(`pagetitle.${$route.name}`)}}
        </q-toolbar-title>
        <div>

        </div>
        <q-btn
          flat
          round
          dense
          :icon="rightDrawer ? 'close' : 'menu'"
          @click="rightDrawer = !rightDrawer"
        />
      </q-toolbar>
    </q-layout-header>

    <!-- (Optional) The Footer -->
    <q-layout-footer>
      <!-- <q-toolbar>
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
      </q-tabs> -->
      <div class="layout-padding bg-white">
        <div class="page-width">
          content here
        </div>
      </div>
      <div class="layout-padding bg-primary shadow-up-6">
        <div class="page-width">

        </div>
      </div>
    </q-layout-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="right"
      overlay
      content-class=""
      v-model="rightDrawer"
    >
      <!-- QScrollArea is optional -->
      <q-scroll-area class="fit">
        <q-list no-border highlight>
          <q-list-header>
            <div class="row q-pr-xs">
              <div class="col">
                {{$t('menu')}}
              </div>
              <div class="col-auto">
                <q-btn class="" style="overflow:hidden;" flat round dense size="md" @click="$locale === 'es' ? $locale = 'en' : $locale = 'es'">
                  <transition
                    :duration="500"
                    enter-active-class="animated slideInDown"
                    leave-active-class="animated slideOutDown"
                  >
                    <img class="absolute" key="es" src="/statics/flags/BO.png" alt="" v-if="$i18n.locale === 'es'">
                    <img class="absolute" key="en" src="/statics/flags/GB.png" alt="" v-else>
                  </transition>
                </q-btn>
              </div>
            </div>
          </q-list-header>
          <q-item>
            <q-item-main>
              <q-item-tile>
                {{$t('hello')}}
              </q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
        <!-- Content here -->
      </q-scroll-area>
    </q-layout-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',
  data () {
    return {
      rightDrawer: true
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
    "menu": "Menú",
    "pagetitle": {
      "index": "Inicio",
      "404": "Error 404"
    }
  },
  "en": {
    "hello": "hello",
    "menu": "Menu",
    "pagetitle": {
      "index": "Welcome",
      "404": "Error 404"
    }
  }
}
</i18n>
