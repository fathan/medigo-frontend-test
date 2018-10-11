<template>
  <div class="box-detail-hospital__image-featured">
    <div class="image">
      <img
        v-if="hospital.featuredImage === ''"
        src="http://www.wusthof.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/wusthof-imagenotfound.jpg"
        alt=""
      >
      <img
        v-if="hospital.featuredImage !== ''"
        :src="hospital.featuredImage"
        alt=""
      >
      <div class="gradient"></div>
      <router-link :to="{ path: '/hospital' }">
        <div class="arrow-back">
          <font-awesome-icon icon="arrow-left" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hospital: {
      type: Object,
      required: true
    }
  }
}
</script>
