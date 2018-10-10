<template>
  <nav class="header-top">
    <div class="header-top__first-section">
      <router-link :to="{ path: '/' }" class="back-button">
        <font-awesome-icon icon="arrow-left" />
      </router-link>
      <div class="select-city">
        <div class="select-city__title">
          Rumah Sakit di sekitar
        </div>
        <div class="select-city__dropdown">
          <b-dropdown id="ddown1" text="Jakarta Selatan" class="m-md-2">
            <b-dropdown-item>Jakarta Utara</b-dropdown-item>
            <b-dropdown-item>Jakarta Selatan</b-dropdown-item>
            <b-dropdown-item>Jakarta Barat</b-dropdown-item>
            <b-dropdown-item>Jakarta Timur</b-dropdown-item>
            <b-dropdown-item>Jakarta Pusat</b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
    <div class="header-top__input-search-section">
      <b-input-group>
        <b-form-input
          v-model="keyword"
          type="text"
          placeholder="Cari rumah sakit, klinik, apotek..."
        ></b-form-input>
        <b-input-group-append>
          <b-btn @click="getSearchHospital" small variant="info">Search</b-btn>
        </b-input-group-append>
      </b-input-group>
    </div>
    <loading-screen v-if="loading"></loading-screen>
  </nav>
</template>

<script>
import LoadingScreen from './LoadingScreen'
export default {
  components: {
    LoadingScreen
  },
  data () {
    return {
      keyword: '',
      loading: false,
      boxShadow: null
    }
  },
  methods: {
    updateScroll () {
      this.boxShadow = window.scrollY
    },
    getSearchHospital () {
      this.loading = true
      this.$store.dispatch('_xhrHospitalSearch', this.keyword)
        .then(
          response => {
            this.loading = false
          }
        )
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
