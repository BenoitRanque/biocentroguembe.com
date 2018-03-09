<template>
  <q-page>
    <div class="flex flex-center" style="height: 150vh">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </div>
    <q-img-wrapper name="parabaazul"
    ></q-img-wrapper>
    <q-img-wrapper name="parabaazul2" format="card"
    ></q-img-wrapper>
  </q-page>
</template>

<style>
</style>

<script>
import QImgWrapper from 'components/QImgWrapper'
export default {
  name: 'PageIndex',
  components: {
    QImgWrapper
  }
}
</script>
