<template>
  <q-btn class="" style="overflow:hidden;" flat round dense size="md" @click="toggle">
    <transition
      :duration="500"
      enter-active-class="animated slideInDown"
      leave-active-class="animated slideOutDown"
    >
      <img class="absolute" v-for="lang in langs" :key="lang.lang" :src="`/statics/flags/${lang.img}.png`" alt="" v-if="$root.$i18n.locale === lang.lang">
    </transition>
  </q-btn>
</template>

<script>
export default {
  name: 'LangToggle',
  data () {
    return {
      langs: [
        {
          lang: 'es',
          img: 'BO'
        },
        {
          lang: 'en',
          img: 'GB'
        }
      ]
    }
  },
  methods: {
    toggle () {
      this.$root.$i18n.locale = this.langs[(this.langs.findIndex(lang => lang.lang === this.$root.$i18n.locale) + 1) % this.langs.length].lang
    }
  }
}
</script>

<style scoped>

</style>
