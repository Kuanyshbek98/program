<template>
  <div class="home-page-companies">
    <ul class="home-page-companies__list">
      <li class="home-page-companies__item">
        <img :src="'./microsoft.png'" alt="">
      </li>
      <li class="home-page-companies__item">
        <img :src="'./google.png'" alt="">
      </li>
      <li class="home-page-companies__item">
        <img :src="'./philips.png'" alt="">
      </li>
      <li class="home-page-companies__item">
        <img :src="'./intel.png'" alt="">
      </li>
    </ul>
    <p class="home-page-companies__text">
      Some of the best companies that rely on Clagme for hiring.
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.home-page-companies {
  padding: 40px 0;
}
.home-page-companies__list {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.home-page-companies__item {
  margin: 0 60px 20px;
}
.home-page-companies__text {
  line-height: 20px;
  color: #504F54;
  text-align: center;
  margin-top: 16px;
}

@media (max-width: 768px) {
  .home-page-companies__item {
    margin: 0 20px 16px;
  }
  .home-page-companies__text {
    width: 70%;
    margin: auto;
  }
}
</style>
