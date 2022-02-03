<template>
  <div class="likes-block flex">
    <div class="likes-block__profile flex">
      <img
        class="likes-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <p class="likes-block__text">Mountain kings</p>
    </div>
    <div class="likes-block__like flex">
      <img
        class="likes-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <p class="likes-block__text">273 Likes</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.likes-block__img {
  border-radius: 50% 50%;
  margin-right: 8px;
}
</style>
