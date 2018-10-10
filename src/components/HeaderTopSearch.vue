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
      <router-link :to="{ path: '/hospital/search' }" class="search-button">
        <font-awesome-icon icon="search" />
      </router-link>
    </div>
    <div class="header-top__second-section">
      <ul>
        <li @click="handleClickAll" class="active">Lihat Semua</li>
        <li @click="handleClick24">Buka 24 Jam</li>
        <li @click="handleClickBPJS">Terima BPJS</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      boxShadow: null
    }
  },
  methods: {
    handleClickAll () {
      this.$emit('show-all')
    },
    handleClick24 () {
      this.$emit('open-24-hours')
    },
    handleClickBPJS () {
      this.$emit('open-bpjs')
    },
    updateScroll () {
      this.boxShadow = window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.updateScroll)
  }
}
</script>
