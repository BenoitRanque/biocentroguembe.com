<template>
  <div class="bg-white text-primary">
    <div class="layout-padding page-width text-center">
      <!-- <div class="row gutter-sm">
        <div class="col-md-4">
        content here
        </div>
        <div class="col-md-4">
        content here
        </div>
        <div class="col-md-4">
        content here
        </div>
      </div> -->
      <q-img lazy style="max-width:100%;display:inline-block;" class="q-mt-xl" src="/assets/logo.svg" alt="Logo Full"></q-img>
      <!-- <img style="max-width:100%;" class="q-mt-xl" src="~assets/logo.svg" alt=""> -->
    </div>
    <div class="bg-primary text-white text-center shadow-up-6">
      <div class="layout-padding page-width">
        <small>
          <template v-for="l in 4">
            {{$t(`copyright[${l}]`)}}<br :key="l">
          </template>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import QImg from 'components/QImg'
export default {
  name: 'MainFooter',
  components: {
    QImg
  }
}
</script>

<style scoped>

</style>

<i18n>
{
  "es": {
    "copyright": [
      "Biocentro Guembe S.A.",
      "Km. 5 Camino a Porongo, desvio Las Cruces",
      "Zona Urubo - Santa Cruz - Bolivia",
      " ",
      "© 2017 Biocentro Güembé S.A."
    ]
  },
  "en": {
    "copyright": [
      "Biocentro Guembe S.A.",
      "Km. 5 Camino a Porongo, desvio Las Cruces",
      "Zona Urubo - Santa Cruz - Bolivia",
      " ",
      "© 2017 Biocentro Güembé S.A."
    ]
  }
}
</i18n>
