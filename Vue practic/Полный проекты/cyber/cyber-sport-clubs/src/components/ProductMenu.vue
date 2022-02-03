<template>
  <div class="product-menu">
    <ul class="product-menu__items">
      <li v-for="(item, i) in 8" :key="i" class="product-menu__item">
        <button
          :class="{ menu__active: i === 0 || i == 2 || i == 5 }"
          class="product-menu__btn button btn"
        >
          Apple
        </button>
      </li>
    </ul>
    <select class="product-menu__select main-select" name="" id="">
      <option value="">Самые популярные</option>
      <option value="">Самые популярные</option>
      <option value="">Самые популярные</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product-menu {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.product-menu__items {
  display: flex;
}
.menu__active {
  background: #1a202c;
  color: #ffffff;
}
</style>
