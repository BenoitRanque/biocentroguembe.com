// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
require(`./themes/app.${__THEME}.styl`)
require('quasar-extras/roboto-font')
// 2. or, use next line to activate DEFAULT QUASAR STYLE
// require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
// import store from './store'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'
import XHR from 'i18next-xhr-backend'

i18next
  .use(XHR)
  .init({
    debug: false,
    returnObjects: true,
    lng: 'es',
    fallbackLng: 'es',
    ns: 'comon',
    defaultNS: 'comon',
    fallbackNS: 'comon',
    // saveMissing: true,
    // saveMissingTo: 'fallback',
    // missingKeyHandler: function (lng, ns, key, fallbackValue) {
    // console.log(`Missing ${key} in namespace ${ns} in language ${lng}`)
    //  console.log(key)
    // },
    backend: {
      loadPath: '/statics/i18n/{{lng}}/{{ns}}.json',
      parse: data => JSON.parse(data)
    }
  }, (err, t) => {
    if (DEV && err) {
      console.log(err)
    }
  })

Vue.use(VueI18Next)
const i18n = new VueI18Next(i18next)

Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    // store,
    i18n,
    render: h => h(require('./App'))
  })
})
