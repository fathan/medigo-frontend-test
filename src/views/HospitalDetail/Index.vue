<template>
  <div class="box-detail-hospital">
    <div class="box-detail-hospital__image-featured">
      <div class="image">
        <img v-if="hospital.featuredImage === ''" src="http://www.wusthof.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/placeholder/default/wusthof-imagenotfound.jpg" alt="">
        <img v-if="hospital.featuredImage !== ''" :src="hospital.featuredImage" alt="">
        <div class="gradient"></div>
        <div class="arrow-back">
          <font-awesome-icon icon="arrow-left" />
        </div>
      </div>
    </div>
    <div class="box-detail-hospital__information-top">
      <div class="title">{{ hospital.name }}</div>
      <div class="icon-name">
        <div class="icon-name__icon">
          <font-awesome-icon icon="hospital" />
        </div>
        <div class="icon-name__name">{{ hospital.type }}</div>
      </div>
      <div class="icon-name">
        <div class="icon-name__icon">
          <font-awesome-icon icon="clock" />
        </div>
        <div class="icon-name__name">{{ hospital.type }}</div>
      </div>
      <div class="action">
        <b-button block :size="'sm'" class="button--blue">
          LIHAT JADWAL DOKTER
        </b-button>
      </div>
    </div>
    <!-- ADDRESS -->
    <div class="box-detail-hospital__title-top">
      Alamat
    </div>
    <div class="box-detail-hospital__panel-box">
      <div class="body">
        <GmapMap
          :center="{lat: hospital.latitude, lng:hospital.longitude}"
          :zoom="15"
          map-type-id="terrain"
          style="width: 100%; height: 200px"
        >
        </GmapMap>
        <div class="address-detail">
          <p><font-awesome-icon icon="map-marker" /> {{ hospital.addressDetail }}</p>
        </div>
      </div>
      <div class="footer">
        <span>Lihat semua</span>
        <div class="icon">
          <font-awesome-icon icon="arrow-right" />
        </div>
      </div>
    </div>
    <!-- /.ADDRESS -->

    <!-- PHONE SECTION -->
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
      <div class="footer">
        <span>Lihat semua</span>
        <div class="icon">
          <font-awesome-icon icon="arrow-right" />
        </div>
      </div>
    </div>
    <!-- ./PHONE SECTION -->

    <!-- ASURANSI TERDAFTAR SECTION -->
    <div class="box-detail-hospital__title-top">
      Asuransi Terdaftar
    </div>
    <div class="box-detail-hospital__panel-box">
      <div class="body">
        <div class="list-name">
          <ul>
            <li v-for="f in hospital.facilities" :key="f.id">
              <div class="icon">
                <img v-if="f.icon !== ''" :src="f.icon" alt="">
                <font-awesome-icon  v-if="f.icon === ''" icon="image" />
              </div>
              {{ f.label }}
            </li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <span>Lihat semua</span>
        <div class="icon">
          <font-awesome-icon icon="arrow-right" />
        </div>
      </div>
    </div>
    <!-- ./ASURANSI TERDAFTAR SECTION -->

    <!-- FASILITAS DAN LAYANAN SECTION -->
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
      <div class="footer">
        <span>Lihat semua</span>
        <div class="icon">
          <font-awesome-icon icon="arrow-right" />
        </div>
      </div>
    </div>
    <!-- ./FASILITAS DAN LAYANAN SECTION -->

    <!-- GALERI FOTO SECTION -->
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
      <div class="footer">
        <span>Lihat semua</span>
        <div class="icon">
          <font-awesome-icon icon="arrow-right" />
        </div>
      </div>
    </div>
    <!-- ./GALERI FOTO SECTION -->
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  computed: {
    google: gmapApi,
    hospital () {
      return this.$store.getters.hospital
    }
  },
  methods: {
    getHospitalDetail (id) {
      this.$store.dispatch('_xhrHospitalDetail', id)
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.getHospitalDetail(id)
  }
}
</script>
