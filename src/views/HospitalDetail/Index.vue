<template>
  <div>
    <GmapMap
      :center="{lat:-6.408398, lng:106.861592}"
      :zoom="15"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
    </GmapMap>
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
