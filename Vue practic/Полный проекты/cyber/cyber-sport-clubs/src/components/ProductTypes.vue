<template>
  <div class="product-types">
    <h1 class="product-types__title">Интернет магазин</h1>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide
        :class="{ slide__active: i === 1 || i == 6 }"
        class="product-types__items items-slide"
        v-for="(img, i) in 22"
        :key="i"
      >
        <div class="items-slide__item">
          <img class="items-slide__img" src="@/assets/img/image29.png" alt="" />
        </div>
        <div class="items-slide__text"><strong>Все товары</strong></div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 12,
        spaceBetween: 25,
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
.product-types {
  margin-top: 50px;
}
.product-types__items {
  min-width: 56px;
  max-width: 56px;
  /* height: 108px; */
  height: auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column; 
  
  border-radius: 40px;
  background: #fff;
  color: #2d3748;
}
.product-types__items:hover {
  background: #1a202c;
  color: #fafafa;
}
.items-slide__item {
  width: 46px;
  height: 46px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 40px;
  background: #fafafa;
}
.items-slide__img {
  width: 57%;
  padding: 10px 0px;
}
.slide__active {
  background: #1a202c;
  color: #fafafa;
}
.items-slide__text {
  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;  
  margin: 5px 0px 25px;
}
</style>
