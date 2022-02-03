<template>
  <div class="cat-brief">
    <div class="cat-brief__image-block">
      <img src="" alt="" class="cat-brief__image">
    </div>
    <h3 class="cat-brief__name">Кухонная мебель</h3>
    <a class="cat-brief__count">2,3k товаров</a>
    <p class="cat-brief__params">
      <span class="cat-brief__key">Подкатегория</span>
      <span class="cat-brief__value">124</span>
    </p>
    <p class="cat-brief__params flex">
      <span class="cat-brief__key">Подкатегория</span>
      <span class="cat-brief__value">124</span>
    </p>
    <p class="cat-brief__params flex">
      <span class="cat-brief__key">Подкатегория</span>
      <span class="cat-brief__value">124</span>
    </p>
    <p class="cat-brief__params flex">
      <span class="cat-brief__key">Подкатегория</span>
      <span class="cat-brief__value">124</span>
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.cat-brief {
  background: #FFFFFF;
  border: 0.33px solid rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  padding: 12px;
}
.cat-brief__image-block {
  position: relative;
  width: calc(100% - 8px);
  height: 228px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 8px;
  justify-content: center;
  background-color: #F6F6F6;
}
.cat-brief__image {
  width: 100%;
}
.cat-brief__name {
  font-weight: 600;
  font-size: 20px;
  line-height: 132%;
  margin: 16px 0 8px;
}
.cat-brief__count {
  color: var(--blue-color);
  display: block;
  margin-bottom: 16px;
}
.cat-brief__params {
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  margin: 10px 0;
}
.cat-brief__value {
  color: #919191;
}
</style>
