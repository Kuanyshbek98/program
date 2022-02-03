<template>
  <div class="basket-empty">
    <img src="/empty-basket.png" alt="" class="basket-empty__image">
    <h1 class="basket-empty__title">Добавьте товары</h1>
    <p class="basket-empty__text">Здесь должны быть товары </p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.basket-empty {
  text-align: center;
  margin-top: 10%;
}
.basket-empty__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 132%;
  margin: 32px 0 8px;
}
.basket-empty__text {
  font-size: 14px;
  line-height: 144%;
  color: #717171;
  margin: 0;
}
</style>
