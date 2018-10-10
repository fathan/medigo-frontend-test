<template>
  <div>
    <h1>Hospital</h1>
    <pre>{{ hospitals }}</pre>
  </div>
</template>

<script>
export default {
  computed: {
    hospitals () {
      return this.$store.getters.hospitals
    }
  },
  methods: {
    getAllHospital () {
      this.$store.dispatch('_xhrHospitalList')
    }
  },
  mounted () {
    this.getAllHospital()
  }
}
</script>
