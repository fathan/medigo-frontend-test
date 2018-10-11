<template>
  <div class="box-detail-hospital">
    <hospital-detail-image-featured :hospital="hospital"></hospital-detail-image-featured>
    <hospital-detail-information-top :hospital="hospital"></hospital-detail-information-top>
    <hospital-detail-address :hospital="hospital"></hospital-detail-address>
    <hospital-detail-phone :hospital="hospital"></hospital-detail-phone>
    <hospital-detail-insurance :hospital="hospital"></hospital-detail-insurance>
    <hospital-detail-facilities :hospital="hospital"></hospital-detail-facilities>
    <hospital-detail-galeries :hospital="hospital"></hospital-detail-galeries>
    <loading-screen v-if="loading"></loading-screen>
  </div>
</template>

<script>
import { gmapApi } from 'vue2-google-maps'
import HospitalDetailImageFeatured from './render/HospitalDetailImageFeatured'
import HospitalDetailInformationTop from './render/HospitalDetailInformationTop'
import HospitalDetailAddress from './render/HospitalDetailAddress'
import HospitalDetailPhone from './render/HospitalDetailPhone'
import HospitalDetailInsurance from './render/HospitalDetailInsurance'
import HospitalDetailFacilities from './render/HospitalDetailFacilities'
import HospitalDetailGaleries from './render/HospitalDetailGaleries'
import LoadingScreen from '@/components/LoadingScreen'

export default {
  components: {
    HospitalDetailImageFeatured,
    HospitalDetailInformationTop,
    HospitalDetailAddress,
    HospitalDetailPhone,
    HospitalDetailInsurance,
    HospitalDetailFacilities,
    HospitalDetailGaleries,
    LoadingScreen
  },
  data () {
    return {
      loading: false
    }
  },
  computed: {
    google: gmapApi,
    hospital () {
      return this.$store.getters.hospital
    }
  },
  methods: {
    getHospitalDetail (id) {
      this.loading = true
      this.$store.dispatch('_xhrHospitalDetail', id)
        .then(
          response => {
            this.loading = false
          }
        )
    }
  },
  mounted () {
    let id = this.$route.params.id
    this.getHospitalDetail(id)
  }
}
</script>
