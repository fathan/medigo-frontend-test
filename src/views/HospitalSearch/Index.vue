<template>
  <div>
    <h1>Hospital Search</h1>
    <pre>{{ hospitalSearchResults }}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    hospitalSearchResults () {
      return this.$store.getters.hospitalSearchResults
    }
  },
  methods: {
    getSearchHospital () {
      let keyword = 'Per'
      this.$store.dispatch('_xhrHospitalSearch', keyword)
    }
  },
  mounted () {
    this.getSearchHospital()
  }
}
</script>
