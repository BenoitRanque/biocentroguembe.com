<template>
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
</template>

<script>
export default {

}
</script>

<style scoped>

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
