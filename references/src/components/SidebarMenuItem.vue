<template lang="html">
  <div>
    <q-item class="q-item-link relative-position" v-ripple v-if="!item.children" @click="goToPage()">
      <q-item-main :label="$t(item.name)" />
    </q-item>
    <template v-else>
      <!-- Missing some sidelink classes, close panel after click -->
      <!-- <q-side-link item to="/">link</q-side-link> -->
      <q-item class="q-item-link relative-position" v-ripple @click="toggle() || goToPage()">
        <q-item-main :label="$t(item.name)"/>
        <q-item-tile
        @click.stop="toggle()"
        icon="keyboard_arrow_down"
        class="transition-generic"
        :class="{'rotate-180': item.expanded}"
        ></q-item-tile>
      </q-item>
      <q-slide-transition>
        <div v-show="item.expanded">
          <div class="q-collapsible-sub-item relative-position indent">
            <sidebar-menu-item v-for="child in item.children" :key="'/' + child.path.join('/')"  :item="child" :group="'/' + item.path.join('/')" :itemlist="itemlist"></sidebar-menu-item>
          </div>
        </div>
      </q-slide-transition>
    </template>
  </div>
</template>

<script>
import SidebarMenuItem from '@/SidebarMenuItem'
import {
  Events,
  QList,
  QItem,
  QItemMain,
  QItemSide,
  QItemTile,
  QSlideTransition,
  Ripple
} from 'quasar'

const eventName = 'q:collapsible:close'

export default {
  name: 'SidebarMenuItem',
  i18nOptions: { namespaces: ['comon'], keyPrefix: 'pages' },
  directives: {
    Ripple
  },
  components: {
    SidebarMenuItem,
    QList,
    QItem,
    QItemMain,
    QItemSide,
    QItemTile,
    QSlideTransition
  },
  props: {
    item: {
      required: true,
      type: Object
    },
    itemlist: {
      required: true,
      type: Array
    },
    group: {
      required: true,
      type: String
    }
  },
  inject: ['layout'],
  watch: {
    'item.expanded' (val) {
      if (val && this.group) {
        Events.$emit(eventName, this)
      }
      if (!val && this.item.children) {
        this.collapse(this.item.children)
      }
    }
  },
  methods: {
    goToPage () {
      this.collapse(this.itemlist)
      this.layout.hideRight(() => {
        this.$router.push(`/${this.item.path.join('/')}`)
      })
    },
    toggle () {
      this.item.expanded = !this.item.expanded
      return this.item.expanded
    },
    collapse (items) {
      items.forEach(item => {
        item.expanded = false
        if (item.children) {
          this.collapse(item.children)
        }
      })
    },
    __eventHandler (comp) {
      if (this.group && this !== comp && comp.group === this.group) {
        this.item.expanded = false
      }
    }
  },
  created () {
    Events.$on(eventName, this.__eventHandler)
  },
  beforeDestroy () {
    Events.$off(eventName, this.__eventHandler)
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
.q-item
  color $primary
  user-select none
.q-item.active,
.q-item.router-link-active,
.q-item:hover
  background-color rgba($secondary, 0.3)
  color $secondary
</style>
