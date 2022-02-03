<template>
  <div class="products-slider">
    <no-ssr>
      <div ref="mySwiper" v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <ProductBlock v-for="(item, index) in 10" :key="index" class="swiper-slide" />
        </div>
        <div class="swiper-button-prev" slot="button-prev">
          <ArrowIcon class="swiper-button-prev__icon" />
        </div>
        <div class="swiper-button-next" slot="button-next">
          <ArrowIcon class="swiper-button-next__icon" />
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import ArrowIcon from '~~/assets/svg/arrow-right.svg?inline'
export default {
  components: {
    ArrowIcon,
    ProductBlock: () => ({
      component: import('~~/components/common/bigProduct')
    })
  },
  computed: {
    swiperOptions () {
      return {
        autoplay: {
          delay: 5000
        },
        slidesPerView: 3,
        spaceBetween: 24,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style scoped>
.swiper-container {
  padding-top: 90px;
  margin-top: -80px;
}
.swiper-button-prev__icon, .swiper-button-next__icon {
  fill: var(--main-color);
}
.swiper-button-prev__icon {
  transform: rotate(180deg);
}
.swiper-button-next, .swiper-button-prev {
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 50% 50%;
  width: 48px;
  height: 48px;
}
</style>
