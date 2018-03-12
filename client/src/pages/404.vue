<template>
  <q-page class="column justify-center items-center text-center q-pa-md">
    <p>
      <img
        src="~assets/sad.svg"
        style="width:40vw;max-width:150px;"
      >
    </p>
    <p class="text-faded">{{$t('404')}}<strong>(404)</strong></p>
    <q-btn
      color="secondary"
      style="width:200px;max-width:80vw;"
      @click="$router.push('/')"
      :label="$t('goback')"
    />
  </q-page>
</template>

<i18n>
{
  "es": {
    "404": "Lo sentimos, aqui no hay nada...",
    "goback": "Volver"
  },
  "en": {
    "404": "We are sorry, there is nothing here...",
    "goback": "Go back"
  }
}
</i18n>
