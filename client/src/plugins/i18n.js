import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

export default ({ app, Vue }) => {
  Vue.use(VueI18n)

  // Set i18n instance on app

  app.i18n = new VueI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages
  })

  Object.defineProperty(Vue.prototype, '$locale', {
    get: function () {
      return app.i18n.locale
    },
    set: function (locale) {
      app.i18n.locale = locale
    }
  })

  console.log(Vue.prototype)
  console.log(VueI18n.prototype)
  console.log(app.i18n)
}
