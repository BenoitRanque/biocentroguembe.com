<template lang="html">
  <q-layout
    ref="layout"
    :sides="{ right: false, left: false }"
    view="hhR Lpr fff"
    :reveal="true"
    :left-breakpoint="2000"
    :right-class="{ 'bg-teal-1': true }"
    :right-breakpoint="2000"
    :page-style="pagestyle"
  >
    <q-toolbar slot="header" inverted class="bg-white" color="primary">
      <!-- <q-btn flat> -->
        <router-link to="/" class="relative-position" v-ripple>
          <img class="gt-xs" style="height: 64px" src="/statics/logo.svg" alt="">
          <img class="xs" style="height: 64px" src="/statics/isologo.svg" alt="">
        </router-link>
      <!-- </q-btn> -->
      <q-toolbar-title class="light-paragraph">
        {{$t(`pages.${$route.meta.name}`)}}
      </q-toolbar-title>

      <q-btn flat>
        <img :src="`/statics/img/${$i18n.i18next.language == 'es' ? 'BO' : 'GB'}.png`" alt="">
        <q-popover ref="langPopover">
          <q-list item-separator link>
            <q-item @click="changeLanguage('es'), $refs.langPopover.close()">
              <img :src="`/statics/img/BO.png`" alt="">
              Español
            </q-item>
            <q-item @click="changeLanguage('en'), $refs.langPopover.close()">
              <img :src="`/statics/img/GB.png`" alt="">
              English
            </q-item>
          </q-list>
        </q-popover>
      </q-btn>
      <q-btn
        flat
        @click="$refs.layout.toggleRight()"
      >
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <div slot="right" class="sidebar-menu">
      <q-toolbar inverted class="bg-white shadow-6 justify-center" color="primary">
        <!-- <q-btn flat> -->
          <q-side-link to="/" class="cursor-pointer relative-position" v-ripple>
            <img style="height: 64px" src="/statics/logo.svg" alt="">
          </q-side-link>
        <!-- </q-btn> -->
      </q-toolbar>
      <div>
        <q-side-link to="/mapa">
          <img src="/statics/img/xs/mapa.jpg" class="full-width block cursor-pointer" alt="">
        </q-side-link>
        <sidebar-menu-item v-for="child in pages" :key="'/' + child.path.join('/')" :item="child" group="/" :itemlist="pages"></sidebar-menu-item>
      </div>
    </div>

    <router-view />

    <footer slot="footer">
      <div class="layout-padding bg-white text-primary">
        <div class="text-center">
          <img  style="width: 600px; max-width: 60vw" src="/statics/logo.svg" alt="">
          <br>
          <br>
          <br>
          <br>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-4 text-center">
            <h5>{{$t('footer.left.title')}}</h5>
            <template v-for="l in $t('footer.left.body')">{{l}}<br></template>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-4 text-center">
            <h5>{{$t('footer.center.title')}}</h5>
            <router-link to="/nosotros/contacto">
              {{$t('footer.center.contacts.general')}}
            </router-link>
            <br>
            <router-link to="/resort/contacto">
              {{$t('footer.center.contacts.resort')}}
            </router-link>
            <br>
            <router-link to="/hotel/contacto">
              {{$t('footer.center.contacts.hotel')}}
            </router-link>
            <br>
            <router-link to="/eventos/contacto">
              {{$t('footer.center.contacts.events')}}
            </router-link>
            <br>
            {{$t('footer.center.phone')}}
            <br>
          </div>
          <div class="col-md-12 col-lg-4 text-center">
            <h5>{{$t('footer.right.title')}}</h5>
            <a href="https://www.facebook.com/BiocentroGuembe">{{$t('footer.right.facebook')}}</a>
            <br>
            <a href="">{{$t('footer.right.instagram')}}</a>
            <br>
            <a href="">{{$t('footer.right.youtube')}}</a>
            <br>
          </div>
        </div>
      </div>
      <div class="text-center shadow-up-4 layout-padding bg-primary text-white">
        <small>
            <template v-for="l in $t('footer.copyright')">{{l}}<br></template>
        </small>
      </div>
    </footer>

    <q-fixed-position corner="top-right" :offset="[0, 0]" class="gt-sm">
      <router-link to="/contacto?mode=hotel">
        <img class="CTA" style="width: 20rem" src="/statics/img/CTA.png" alt="">
      </router-link>
    </q-fixed-position>

  </q-layout>
</template>

<script>
import SidebarMenuItem from '@/SidebarMenuItem'
import pagelist from '../pages'
import {
  QLayout,
  QSideLink,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QFixedPosition,
  QPopover,
  QList,
  QItem,
  Ripple
} from 'quasar'

export default {
  name: 'Layout',
  i18nOptions: { namespaces: ['comon'] },
  directives: {
    Ripple
  },
  components: {
    QLayout,
    QSideLink,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    SidebarMenuItem,
    QFixedPosition,
    QPopover,
    QList,
    QItem
  },
  data: function () {
    return {
      pages: []
    }
  },
  computed: {
    pagestyle: function () {
      let rgba = [255, 255, 255, 0.75],
        imageWidth = 1400,
        imageHeight = imageWidth * 0.5,
        imageScale = 0.5, // Scale at wich to display image
        imageSize = 'xs'

      if ((window.innerWidth * imageScale) > (imageWidth * 0.75) || (window.innerHeight * imageScale) > (imageHeight * 0.75)) {
        imageSize = 'lg'
      }
      else if ((window.innerWidth * imageScale) > (imageWidth * 0.5) || (window.innerHeight * imageScale) > (imageHeight * 0.5)) {
        imageSize = 'md'
      }
      else if ((window.innerWidth * imageScale) > (imageWidth * 0.25) || (window.innerHeight * imageScale) > (imageHeight * 0.25)) {
        imageSize = 'sm'
      }
      return {
        'background': `no-repeat center center fixed`,
        'background-size': 'cover',
        'background-image': `linear-gradient(rgba(${rgba.join(', ')}), rgba(${rgba.join(', ')})), url('/statics/img/${imageSize}/wide/${this.$route.meta.backdrop}.jpg')`
      }
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.i18next.changeLanguage(lang)
    },
    setuppages: function () {
      let pages = pagelist
      pages = pages.map(page => {
        return {
          name: page.substr(page.lastIndexOf('/') + 1),
          expanded: false,
          path: page.split('/')
        }
      })

      function nest (page, target, dept) {
        for (let i = 0, l = target.length; i < l; i += 1) {
          if (target[i].path[dept] === page.path[dept]) {
            if (!target[i].children) { target[i].children = [] }
            nest(page, target[i].children, dept + 1)
            return
          }
        }
        if (dept === page.path.length - 1) {
          target.push(page)
        }
        else {
          target.push({
            path: page.path.slice(dept),
            children: [],
            expanded: false,
            name: page.path[dept]
          })
          nest(page, target[target.length - 1].children, dept + 1)
        }
      }

      function nestsort (pages) {
        pages.sort((a, b) => {
          // return a.path[a.path.length - 1].localeCompare(b.path[b.path.length - 1])
          return a.path[a.path.length - 1] > b.path[b.path.length - 1]
        })
        pages.forEach(page => {
          if (page.children) {
            nestsort(page.children)
          }
        })
      }

      let list = []

      pages.forEach(page => {
        nest(page, list, 0)
      })

      nestsort(list)

      return [ list[9], list[4], list[3], list[2], list[8], list[7], list[1] ]
      // return [ list[8], list[3], list[2], list[1], list[7], list[6] ]
    },
    collapseMenu () {
      function collapse (pages) {
        pages.forEach(page => {
          page.expanded = false
          if (page.children) {
            collapse(page.children)
          }
        })
      }
      collapse(this.pages)
    }
  },
  mounted: function () {
    this.pages = this.setuppages()
  }
}
</script>

<style lang="stylus">
  @import '~variables'


  #map-link
    background url('/statics/img/sm/mapa.jpg') no-repeat center center
    background-size cover
    cursor pointer
    text-align center
    padding 4rem 0

    span
      color rgba($secondary, 1)
      transition .3s color ease-in
      font-size 4rem
      font-weight 700
      text-shadow 0 0 1rem rgba(255, 255, 255, 0.4)
      // text-shadow 0 1px 5px rgba(0,0,0,1), 0 2px 2px rgba(0,0,0,1), 0 3px 1px -2px rgba(0,0,0,1)
      // text-shadow 0 1px 5px rgba(0,0,0,0.2), 0 2px 2px rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12)

      &:hover
        color rgba($secondary, 0.4)

  .CTA
    transition .3s ease

    &:hover
      transform scale(1.05)
</style>
