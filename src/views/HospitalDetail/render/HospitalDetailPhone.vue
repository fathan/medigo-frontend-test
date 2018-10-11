<template>
  <div>
    <div class="box-detail-hospital__title-top">
      Nomor Telepon
    </div>
    <div class="box-detail-hospital__panel-box">
      <div class="body">
        <div class="phone">
          <div class="no">
            {{ hospital.telephone }}
          </div>
          <div class="arrow-right">
            <font-awesome-icon icon="phone" />
          </div>
        </div>
      </div>
      <footer-panel
        :title="'Lihat Semua'"
        :link-router="'/phone-router'"
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
