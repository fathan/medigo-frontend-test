<template>
  <div class="box-detail-hospital__information-top">
    <div class="title">{{ hospital.name }}</div>
    <div class="icon-name">
      <div class="icon-name__icon">
        <font-awesome-icon icon="hospital" />
      </div>
      <div class="icon-name__name">{{ hospital.type }}</div>
    </div>
    <div class="icon-name">
      <div class="icon-name__icon">
        <font-awesome-icon icon="clock" />
      </div>
      <div class="icon-name__name">{{ hospital.type }}</div>
    </div>
    <div class="action">
      <b-button block :size="'sm'" class="button--blue">
        LIHAT JADWAL DOKTER
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    hospital: {
      type: Object,
      required: true
    }
  }
}
</script>
