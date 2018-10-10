<template>
  <div class="home-page">
    <div class="home-page__logo"></div>
    <section class="home-page__information-top">
      <div class="title">Salam Sehat!</div>
      <div class="subtitle">Jangan lupa minum air putih delapan gelas setiap hari agar Anda terhindar dari dehidrasi.</div>
    </section>
    <list-box-search-home :data="listBox"></list-box-search-home>
  </div>
</template>

<script>
import ListBoxSearchHome from '@/components/ListBoxSearchHome'

export default {
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
          image: require(`@/assets/icon-cari-dokter.png`),
          title: 'Cari dokter',
          subtitle: 'Dokter umum dan spesialis',
          link: '/'
        }
      ]
    }
  },
  components: {
    ListBoxSearchHome
  }
}
</script>
