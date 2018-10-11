<template>
  <div>
    <div class="box-detail-hospital__title-top">
      Fasilitas dan Layanan
    </div>
    <div class="box-detail-hospital__panel-box">
      <div class="body">
        <div class="list-name">
          <ul>
            <li v-for="f in hospital.facilities" :key="f.id">
              {{ f.label }}
            </li>
          </ul>
        </div>
      </div>
      <footer-panel
        :title="'Lihat Semua'"
        :link-router="'/facilities-router'"
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
