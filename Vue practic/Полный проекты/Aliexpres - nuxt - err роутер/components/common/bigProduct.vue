<template>
  <div class="big-product">
    <div class="big-product__block">
      <img v-lazy="''" alt="" class="big-product__image">
    </div>
    <div class="big-product__info">
      <p class="big-product__name">Чехол APPLE силиконовый MagSafe для iPhone 12/12 Pro, (MHL53)</p>
      <div class="big-product__bottom flex">
        <div class="big-product__bottom-left flex">
          <router-link to="/" class="big-product__avatar avatar"></router-link>
          <router-link to="/" tag="p" class="big-product__author">Zhanka Store</router-link>
        </div>
        <div class="big-product__bottom-right flex">
          <div class="big-product__rating flex">
            <StarIcon class="big-product__rating-icon" /> 4.7
          </div>
          <div class="big-product__review flex">
            <ReviewIcon class="big-product__review-icon" /> 3
          </div>
          <a class="big-product__option"><OptionIcon /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from '~~/assets/svg/star.svg?inline'
import ReviewIcon from '~~/assets/svg/review.svg?inline'
import OptionIcon from '~~/assets/svg/option.svg?inline'
export default {
  components: {
    StarIcon,
    ReviewIcon,
    OptionIcon
  }
}
</script>

<style scoped>
.big-product {
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  overflow: hidden;
}
.big-product__block {
  width: 100%;
  background-color: #F6F6F6;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 340px;
  border: none;
}
.big-product__image {
  width: 100%;
}
.big-product__info {
  padding: 16px;
}
.big-product__name {
  font-size: 14px;
  line-height: 144%;
  font-weight: 500;
  margin: 0;
}
.big-product__avatar {
  width: 28px;
  height: 28px;
  margin: 0 8px 0 0;
}
.big-product__author {
  font-size: 12px;
  margin: 0;
  font-weight: 500;
  cursor: pointer;
}
.big-product__rating-icon {
  fill: #FFB903;
  margin-right: 4px;
}
.big-product__review-icon {
  margin: 0 4px 0 20px;
}
.big-product__option {
  padding: 10px;
  margin: 0 -10px 0 16px;
}
</style>
