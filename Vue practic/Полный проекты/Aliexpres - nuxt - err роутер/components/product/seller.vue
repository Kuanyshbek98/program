<template>
  <div class="product-seller">
    <h3 class="product-seller__subtitle">Продавец</h3>
    <div class="product-seller__content flex-only">
      <div class="product-seller__left">
        <div class="product-seller__avatar avatar"></div>
      </div>
      <div class="product-seller__right">
        <h2 class="product-seller__name">Zara Indotex Store</h2>
        <div class="product-seller__rating flex-only">
          <StarIcon v-for="star in 5" :key="star" class="product-seller__rating-icon" />
          (98 отзывов)
        </div>
        <div class="product-seller__btn flex-only">
          <button class="default-btn product-seller__open-btn">Перейти</button>
          <button class="main-btn product-seller__action-btn">Подписаться</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarIcon from '~~/assets/svg/star.svg?inline'
export default {
  components: {
    StarIcon
  }
}
</script>

<style scoped>
.product-seller {
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 8px;
}
.product-seller__right {
  width: calc(100% - 80px);
}
.product-seller__subtitle {
  font-weight: 600;
  font-size: 16px;
  line-height: 132%;
  margin: 0 0 16px;
}
.product-seller__avatar {
  width: 64px;
  height: 64px;
  margin: 0 16px 0 0;
}
.product-seller__name {
  font-weight: 600;
  font-size: 20px;
  line-height: 132%;
  margin: 0 0 8px;
}
.product-seller__rating {
  margin-bottom: 12px;
}
.product-seller__rating-icon {
  fill: #FFB903;
  transform: scale(0.6);
}
.product-seller__open-btn {
  box-shadow: 0 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  width: 107px;
  margin-right: 8px;
}
.product-seller__action-btn {
  width: 135px;
}
</style>
