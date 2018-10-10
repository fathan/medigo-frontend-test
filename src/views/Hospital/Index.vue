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
    <loading-screen v-if="loading"></loading-screen>
  </div>
</template>

<script>
import HeaderTopSearch from '@/components/HeaderTopSearch'
import BoxListHospital from '@/components/BoxListHospital'
import LoadingScreen from '@/components/LoadingScreen'

export default {
  components: {
    HeaderTopSearch,
    BoxListHospital,
    LoadingScreen
  },
  data () {
    return {
      loading: false,
    }
  },
  computed: {
    hospitals () {
      return this.$store.getters.hospitals
    }
  },
  methods: {
    getAllHospital () {
      this.loading = true
      this.$store.dispatch('_xhrHospitalList')
        .then(
          response => {
            this.loading = false
          }
        )
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
