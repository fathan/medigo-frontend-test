<template>
  <section class="home-page__box-search-home">
    <div
      v-for="d in data" :key="d.id"
      class="list-box"
    >
      <router-link :to="{ path: d.link }">
        <b-container>
          <b-row>
            <b-col cols="2" class="no--padding">
              <div class="list-box__image">
                <img :src="d.image" alt="">
              </div>
            </b-col>
            <b-col cols="8">
              <div class="list-box__title">
                {{ d.title }}
              </div>
              <div class="list-box__subtitle">
                {{ d.subtitle }}
              </div>
            </b-col>
            <b-col cols="2" class="no--padding">
              <div class="list-box__arrow-right">
                <span>></span>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>
