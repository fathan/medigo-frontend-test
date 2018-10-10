<template>
  <div class="box-list-hospital">
    <div
      class="box-list-hospital__list"
      v-for="h in hospitals"
      :key="h.id"
    >
      <div class="info-header">
        <div class="pull--left">
          <div class="info-header__title">{{ h.name }}</div>
          <div class="info-header__subtitle">Rumah Sakit</div>
        </div>
        <div class="pull--right">
          <div class="info-header__rating">
            <span>
              <span class="blue">
                <font-awesome-icon icon="star" />
              </span> {{ h.rating }}
            </span>
          </div>
        </div>
      </div>
      <div class="info-body">
        <div class="info-body__list-name">
          <div class="name">
            <font-awesome-icon class="icon" icon="map-marker" />
            {{ h.city.label }}, {{ h.province.label }}
          </div>
        </div>
        <div class="info-body__list-name">
          <div class="name">
            <font-awesome-icon class="icon" icon="phone" />
            {{ h.telephone }}
          </div>
        </div>
        <div class="info-body__list-name">
          <div class="name color--blue">
            <font-awesome-icon class="icon" icon="clock" />
            Buka 24 Jam
          </div>
        </div>
      </div>
      <div class="info-gallery">
        <ul>
          <li
            v-for="(image, index) in h.pictures"
            :key="index"
          >
            <div class="image">
              <img v-if="image === ''" src="http://www.wusthof.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/wusthof-imagenotfound.jpg" alt="">
              <img v-if="image.length > 5" :src="image" alt="">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hospitals: {
      type: Array
    }
  }
}
</script>
