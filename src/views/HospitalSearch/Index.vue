<template>
  <div class="height--full">
    <header-top-input-search></header-top-input-search>
    <box-list-hospital
      :hospitals="hospitalSearchResults"
    ></box-list-hospital>
  </div>
</template>

<script>
import HeaderTopInputSearch from '@/components/HeaderTopInputSearch'
import BoxListHospital from '@/components/BoxListHospital'

export default {
  components: {
    HeaderTopInputSearch,
    BoxListHospital
  },
  computed: {
    hospitalSearchResults () {
      return this.$store.getters.hospitalSearchResults
    }
  }
}
</script>
