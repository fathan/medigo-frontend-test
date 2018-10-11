<template>
  <div>
    <div class="box-detail-hospital__title-top">
      Galeri Foto
    </div>
    <div class="box-detail-hospital__panel-box">
      <div class="body">
        <div class="galeries">
          <ul>
            <li v-for="(g, index) in hospital.pictures" :key="index">
              <div class="image">
                <img v-if="g === ''" src="http://www.wusthof.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/wusthof-imagenotfound.jpg" alt="">
                <img v-if="g !== ''" :src="g" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>
      <footer-panel
        :title="'Lihat Semua'"
        :link-router="'/galleries-router'"
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
