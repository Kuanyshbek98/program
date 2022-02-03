<template>
  <div class="experts">
    <h2 class="experts__title">Experts with the highest rating in Clagme</h2>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in 10" :key="item" class="experts__block swiper-slide">
        <div class="experts__avatar avatar"></div>
        <h3 class="experts__name">Brooklyn Simmons</h3>
        <p class="experts__description">Entry Level Data Scientist</p>
        <div class="experts__bottom flex-only">
          4.8
          <star-rating
            :increment="0.1"
            :star-size="15"
            :read-only="true"
            :rating="5"
            :show-rating="false"
            :inactive-color="'rgba(255, 255, 255, 0.08)'"
            :active-color="'#fda130'"
            :border-color="'rgba(255, 255, 255, 0.1)'"
          />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  data() {
    return {
      swiperOptions: {
        spaceBetween: 24,
        slidesPerView: 'auto',
        hashNavigation: true
      },
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    StarRating
  },
}
</script>

<style scoped>
.experts {
  padding: 64px 0 72px;
}
.swiper-slide {
  width: 184px;
}
.experts__block {
  text-align: center;
}
.experts__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0 0 32px;
  text-align: center;
}
.experts__avatar {
  width: 112px;
  height: 112px;
}
.experts__name {
  margin: 12px 0 4px;
  font-size: 18px;
  line-height: 25px;
}
.experts__description {
  margin: 0 0 4px;
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
}
.experts__bottom {
  justify-content: center;
  color: #504F54;
  font-size: 14px;
  line-height: 20px;
}

@media (max-width: 768px) {
  .experts__title {
    font-weight: 600;
    font-size: 28px;
    line-height: 36px;
    text-align: left;
  }
  .swiper-slide {
    width: 100%;
  }
}
</style>
