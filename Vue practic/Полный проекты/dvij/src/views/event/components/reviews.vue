<template>
  <div class="reviews-block">
    <h3>4.9 (1 697 отзывов)</h3>
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="reviews-block__item">
          <div class="reviews-block__info flex">
            <img
              class="reviews-block__img "
              src="@/assets/images/favorites-icon.svg"
              alt=""
            />
            <div class="reviews-block__name">
              <h3 class="reviews-block__info-title">Катя</h3>
              <label class="reviews-block__info-label" for="">
                Сентябрь 2019
              </label>
            </div>
            <div class="reviews-block__level flex">
              <img
                class="reviews-block__level-img"
                src="@/assets/images/favorites-icon.svg"
                alt=""
              />
              <label class="reviews-block__level-label" for="">4.8</label>
            </div>
          </div>
          <div class="reviews-block__text">
            Алмата однако забывать, что начало повседневной работы.
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="reviews-block__item">
          <div class="reviews-block__info flex">
            <img
              class="reviews-block__img "
              src="@/assets/images/favorites-icon.svg"
              alt=""
            />
            <div class="reviews-block__name">
              <h3 class="reviews-block__info-title">Катя</h3>
              <label class="reviews-block__info-label" for="">
                Сентябрь 2019
              </label>
            </div>
            <div class="reviews-block__level flex">
              <img
                class="reviews-block__level-img"
                src="@/assets/images/favorites-icon.svg"
                alt=""
              />
              <label class="reviews-block__level-label" for="">4.8</label>
            </div>
          </div>
          <div class="reviews-block__text">
            Алмата однако забывать, что начало повседневной работы.
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <button class="event__btn">Показать все 1 697 отзывов</button>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1.1,
        spaceBetween: 10,
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
.event__btn {
  border: 1px solid;
  display: block;
  width: 100%;
  padding: 8px 32px;
  box-sizing: border-box;
  background: #1fcc79;
  border-radius: 10px;
  color: #ffffff;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
}
.reviews-block {
  text-align: center; 
  padding-bottom: 20px;
}
.reviews-block__item {
  width: 100%;
  margin: 3px 0 23px 3px;
  box-shadow: 0.5px 0.5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  text-align: start;
}
.reviews-block__info {
  padding: 7px 18px;
  /* border: 1px solid blue; */
}
.reviews-block__img {
  border-radius: 50% 50%;
}
.reviews-block__info-title {
  margin: 0;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
}
.reviews-block__info-label {
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
  color: #1e1d4c;
}
.reviews-block__level {
  font-size: 18px;
  line-height: 22px;
  color: #cd3232;
}
.reviews-block__text {
  padding: 15px 22px;
  font-weight: 500;
  font-size: 13px;
  line-height: 16px;
  color: rgba(0, 0, 0, 0.9);

  /* border: 1px solid red; */
}
</style>
