<template>
  <q-page>
    <!-- content -->
    <map-icons>
      <q-responsive-img src="map" format="map" sizes=""></q-responsive-img>
    </map-icons>
  </q-page>
</template>

<script>
import QResponsiveImg from 'components/QResponsiveImg'
import MapIcons from 'components/MapIcons'

export default {
  name: 'Mapa',
  components: {
    MapIcons,
    QResponsiveImg
  }
}
</script>

<style>
</style>
