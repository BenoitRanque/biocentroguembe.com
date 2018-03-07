<template>
  <q-page>
    <!-- <div class="flex flex-center" style="height: 150vh">
      <img alt="Quasar logo" src="~assets/quasar-logo-full.svg">
    </div> -->
    <q-img
      lazy
      placeholder="/assets/img/placeholder/parabaazul.jpg"
      src="/assets/img/lg/parabaazul.jpg"
    ></q-img>
  </q-page>
</template>

<style>
</style>

<script>
import QImg from 'components/QImg'
export default {
  name: 'PageIndex',
  components: {
    QImg
  }
}
</script>
