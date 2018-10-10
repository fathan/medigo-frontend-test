<template>
  <div class="height--full">
    <header-top-search
      @show-all="showAll"
      @open-24-hours="open24Hours"
      @open-bpjs="openBPJS"
    ></header-top-search>
    <box-list-hospital
      :hospitals="hospitals"
    ></box-list-hospital>
  </div>
</template>

<script>
import HeaderTopSearch from '@/components/HeaderTopSearch'
import BoxListHospital from '@/components/BoxListHospital'

export default {
  components: {
    HeaderTopSearch,
    BoxListHospital
  },
  computed: {
    hospitals () {
      return this.$store.getters.hospitals
    }
  },
  methods: {
    getAllHospital () {
      this.$store.dispatch('_xhrHospitalList')
    },
    showAll () {
      alert('Lihat semua')
    },
    open24Hours () {
      alert('Buka 24 Jam')
    },
    openBPJS () {
      alert('Terima BPJS')
    }
  },
  mounted () {
    this.getAllHospital()
  }
}
</script>
