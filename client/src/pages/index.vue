<template>
  <q-page>
    <div class="flex flex-center" style="height: 150vh">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </div>
    <div class="row">
      <div class="col-md-6">
        <q-img-wrapper src="parabaazul" format="card" sizes="md 50"
        ></q-img-wrapper>
      </div>
      <div class="col-md-6">
    <q-img-wrapper src="parabaazul2" format="card" sizes="lg 40, md 50"
    ></q-img-wrapper>

      </div>
    </div>
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
