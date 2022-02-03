<template>
  <div class="banner">
    <no-ssr>
      <div ref="mySwiper" v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div v-for="(banner, index) in images" :key="index" class="swiper-slide">
            <div class="banner__block">
              <img v-lazy="banner" alt="" class="banner__image">
            </div>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data () {
    return {
      images: [
        'https://images.unsplash.com/photo-1533709752211-118fcaf03312?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        'https://images.unsplash.com/photo-1604315841269-a1f298321670?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=625&q=80'
      ]
    }
  },
  computed: {
    swiperOptions () {
      return {
        autoplay: {
          delay: 5000
        }
      }
    }
  }
}
</script>

<style scoped>
.banner__image {
  width: 100%;
  height: 500px;
  mix-blend-mode: color;
  margin-top: 60px;
}
</style>
