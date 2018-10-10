<template>
  <div class="home-page">
    <div class="home-page__logo"></div>
    <information-top-home></information-top-home>
    <list-box-search-home :data="listBox"></list-box-search-home>
  </div>
</template>

<script>
import InformationTopHome from '@/components/InformationTopHome'
import ListBoxSearchHome from '@/components/ListBoxSearchHome'

export default {
  components: {
    InformationTopHome,
    ListBoxSearchHome
  },
  data () {
    return {
      listBox: [
        {
          id: 1,
          image: require(`@/assets/icon-pusat-kesehatan.png`),
          title: 'Cari Pusat Kesehatan',
          subtitle: 'Rumah sakit dan klinik',
          link: '/hospital/search'
        },
        {
          id: 2,
          image: require(`@/assets/icon-pusat-kesehatan.png`),
          title: 'Pusat Kesehatan',
          subtitle: 'Rumah sakit dan klinik',
          link: '/hospital'
        }
      ]
    }
  }
}
</script>
