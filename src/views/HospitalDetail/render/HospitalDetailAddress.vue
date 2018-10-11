<template>
  <div>
    <div class="box-detail-hospital__title-top">
      Alamat
    </div>
    <div class="box-detail-hospital__panel-box">
      <div class="body">
        <GmapMap
          :center="{lat: parseFloat(hospital.latitude), lng: parseFloat(hospital.longitude)}"
          :zoom="15"
          map-type-id="terrain"
          style="width: 100%; height: 200px"
        >
        </GmapMap>
        <div class="address-detail">
          <p><font-awesome-icon icon="map-marker" /> {{ hospital.addressDetail }}</p>
        </div>
      </div>
      <footer-panel
        :title="'Lihat Semua'"
        :link-router="'/address-router'"
      ></footer-panel>
    </div>
  </div>
</template>

<script>
import FooterPanel from './render/FooterPanel'
export default {
  components: {
    FooterPanel
  },
  props: {
    hospital: {
      type: Object,
      required: true
    }
  }
}
</script>
