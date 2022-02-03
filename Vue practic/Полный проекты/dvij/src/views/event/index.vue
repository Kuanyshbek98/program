<template>
  <div class="event">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <div class="swiper-item">
          <img src="@/assets/images/success-img.svg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-item">
          <img src="@/assets/images/success-img.svg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-item">
          <img src="@/assets/images/success-img.svg" alt="" />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-item">
          <img src="@/assets/images/success-img.svg" alt="" />
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="container">
      <div class="event__title-block">
        <h1 class="event__title">Мортал комбат турнир</h1>
        <label for="">1/20</label>
      </div>
      <div class="event__text-block text-block flex">
        <label class="text-block__label" for="">PS5</label>
        <img class="text-block__img" src="" alt="" />
        <label class="text-block__label " for="">Алматы</label>
      </div>
      <Likes class="event__likes-block" />
      <Offline class="event__offline-block" />
      <Map class="event__map-block" />
      <Info class="event__info-block" />
      <Online class="event__online-block" />
      <Reviews class="event__reviews-block" />
      <router-link to="/order" class="event__link flex">
        Правила мероприятия
        <img
          class="event__link-icon"
          src="@/assets/images/method-icon.svg"
          alt=""
        />
      </router-link>
      <router-link to="/order" class="event__link flex">
        Правила отмены
        <img
          class="event__link-icon"
          src="@/assets/images/method-icon.svg"
          alt=""
        />
      </router-link>
      <Complain class="event__complain " />
    </div>

    <Fixed />
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
// import "swiper/swiper-bundle.css";
import "swiper/css/swiper.css";

export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletClass: "swiper-pagination-bullet",
        },
      },
    };
  },

  components: {
    Swiper,
    SwiperSlide,
    Offline: () => ({
      component: import("./components/offline.vue"),
    }),
    Map: () => ({
      component: import("./components/map.vue"),
    }),
    Info: () => ({
      component: import("./components/info.vue"),
    }),
    Online: () => ({
      component: import("./components/online.vue"),
    }),
    Reviews: () => ({
      component: import("./components/reviews.vue"),
    }),
    Complain: () => ({
      component: import("./components/complain.vue"),
    }),
    Fixed: () => ({
      component: import("./components/fixed.vue"),
    }),
    Likes: () => ({
      component: import("./components/likes.vue"),
    }),
  },
  directives: {
    swiper: directive,
  },
};
</script>

<style scoped>
.swiper-item {
  /* border: 1px solid red; */
  background-color: #2e3e5c;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0 40px 0;
}
.event {
  padding-bottom: 200px;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 25px;
  color: #3e5481;
}
.event__title-block {
  display: flex;
  align-items: center;
  justify-content: flex-start;

  font-size: 17px;
  line-height: 27px;
}
.event__title {
  margin-right: 20px;
  font-size: 17px;
}
.text-block {
  justify-content: flex-start;
}
.text-block__label {
  font-weight: 500;
  color: #9fa5c0;
}
.text-block__img {
  border-radius: 50% 50%;
  border: 3px solid #9fa5c0;
  margin: 0 8px 0 15px;
}


.event__likes-block {
  border-bottom: 1px solid #d0dbea;
}
.event__online-block {
  border-bottom: 1px solid #d0dbea;
}
.event__reviews-block {
  border-bottom: 1px solid #d0dbea;
}


.event__link {
  padding: 8px 16px 8px 32px;
  margin-top: 25px;
  background: #ffffff;
  border: 0.3px solid #1e1d4c;
  box-sizing: border-box;
  box-shadow: 0px 0.5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  font-family: Montserrat;
  font-size: 18px;
  line-height: 22px;
}
.event__link-icon {
  transform: rotate(270deg);
}
.event__complain {
  border-top: 1px solid #d0dbea;
}
</style>
