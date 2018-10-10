<template>
  <div>
    <h1>Hospital Detail</h1>
    <pre>
      {{ hospital }}
    </pre>
  </div>
</template>

<script>
export default {
  computed: {
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
