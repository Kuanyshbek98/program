<template>
  <div class="product-image">
    <a class="product-image__favorite">
      <HeartIcon :style="{fill: ShowProducts.data.in_favorite ? '#DA5552' : '#F1F1F1'}" />
    </a>
    <no-ssr>
      <div ref="mySwiper" v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper" v-if="ShowProducts">
          <div v-for="(banner, index) in ShowProducts.data.path" :key="index" class="swiper-slide">
            <div class="product-image__block">
              <img :src="$url+'/'+banner" alt="" class="product-image__image"/>
            </div>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import HeartIcon from '~~/assets/svg/heart.svg?inline'
export default {
  components: {
    HeartIcon
  },
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
  },
  props: {
    ShowProducts: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.product-image {
  position: relative;
}
.product-image__favorite {
  background: #FFFFFF;
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.05), 0 0 5px rgba(0, 0, 0, 0.07);
  border-radius: 50% 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 16px;
  top: 16px;
}
.product-image__image {
  width: 100%;
  height: 465px;
  mix-blend-mode: color;
}
</style>
