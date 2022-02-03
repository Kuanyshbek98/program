<template>
  <div class="map-block">
    <h3 class="">Когда и где?</h3>
    <div class="map-block__item flex-only">
      <img
        class="map-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <label class="map-block__label" for="">11 апреля, 2021</label>
    </div>
    <div class="map-block__item flex-only">
      <img
        class="map-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <label class="map-block__label" for=""
        >г. Алматы, пр. Аль-Фараби 67/2</label
      >
    </div>
    <img class="map-block__map-img" src="" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.map-block {
  border-bottom: 1px solid #d0dbea;
}
.map-block__item {
  margin-bottom: 20px;
  align-items: center;
  font-weight: 500;
  color: #2e3e5c;
}
.map-block__img {
  margin-right: 8px;
}
.map-block__map-img {
  width: 100%;
  height: 137px;
  background-color: #969494;

  border: 0.2px solid #000000;
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
}
</style>
