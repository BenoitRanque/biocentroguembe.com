<template>
  <q-btn icon="settings" @click="modal = !modal" flat dense round color="white">
    <q-modal v-model="modal" :content-css="{minWidth: '60vw', minHeight: '80vh'}">
      <q-modal-layout>
        <q-toolbar slot="header">
          <q-toolbar-title>
            Theme
          </q-toolbar-title>
          <q-btn flat dense round icon="close" @click="modal = !modal" color="white">

          </q-btn>
        </q-toolbar>
        <q-toolbar slot="footer"></q-toolbar>

        <div class="layout-padding">
          <q-color v-for="color in colors" modal :key="color" :float-label="`${color} color`" :value="getColor(color)" @input="$event => setColor(color, $event)"></q-color>
        </div>
      </q-modal-layout>
    </q-modal>
  </q-btn>
</template>

<script>
import { colors } from 'quasar'
export default {
  name: 'ThemeSettings',
  data () {
    return {
      modal: false,
      colors: [
        'primary', 'secondary', 'tertiary', 'positive', 'negative', 'info', 'warning', 'light', 'dark', 'faded'
      ]
    }
  },
  methods: {
    getColor (color) {
      return colors.getBrand(color)
    },
    setColor (color, value) {
      colors.setBrand(color, value)
    }
  }
}
</script>

<style scoped>

</style>
