<template>
  <div class="home-bottom flex">
    <div class="home-bottom__left-block">
      <img class="home-bottom__image" src="@/assets/svg/agree.svg" alt="">
    </div>
    <div class="home-bottom__right-block">
      <h2 class="home-bottom__title">
        Companies we’ve helped to hire the best experts
      </h2>
      <p class="home-bottom__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
      </p>
      <router-link to="/" class="home-bottom__link">Search for clagger</router-link>
      <ul class="home-bottom__list">
        <li class="home-bottom__item">
          <img :src="'./uber.png'" alt="">
          <p class="home-bottom__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
          </p>
        </li>
        <li class="home-bottom__item">
          <img :src="'./shopify.png'" alt="">
          <p class="home-bottom__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
          </p>
        </li>
        <li class="home-bottom__item">
          <img :src="'./airbnb.png'" alt="">
          <p class="home-bottom__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id in adipiscing massa, turpis
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
}
</script>

<style scoped>
.home-bottom {
  margin-top: 104px;
  align-items: flex-start;
}
.home-bottom__left-block {
  width: 457px;
}
.home-bottom__right-block {
  width: calc(100% - 497px);
}
.home-bottom__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0 0 16px;
}
.home-bottom__description {
  color: #504F54;
  font-size: 16px;
  line-height: 22px;
  margin: 0 0 16px;
}
.home-bottom__link {
  color: var(--blue-color);
  font-size: 18px;
  line-height: 25px;
}
.home-bottom__list {
  display: flex;
  background: #FFFFFF;
  box-shadow: 0 50px 60px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-top: 32px;
  margin-left: -120px;
}
.home-bottom__item {
  padding: 46px 32px 13px;
  text-align: center;
}
.home-bottom__item:not(:last-child) {
  margin-right: 30px;
}
.home-bottom__text {
  margin: 32px 0 0;
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
}
.home-bottom__image {
  width: 100%;
}

@media (max-width: 991px) {
  .home-bottom {
    flex-direction: column;
  }
  .home-bottom__left-block, .home-bottom__right-block {
    width: 100%;
  }
  .home-bottom__list {
    margin-left: 0;
    box-shadow: none;
  }
}

@media (max-width: 768px) {
  .home-bottom {
    margin: 0 -2.5%;
  }
  .home-bottom__right-block {
    width: calc(100% - 63px);
    word-break: break-word;
    margin: -40px 0 0 16px;
    background-color: #FFFFFF;
    padding: 16px;
    box-sizing: border-box;
  }
  .home-bottom__title {
    font-size: 28px;
    line-height: 36px;
  }
  .home-bottom__list {
    flex-direction: column;
    margin-top: 24px;
  }
  .home-bottom__item {
    text-align: left;
    padding: 0;
    margin-bottom: 37px;
  }
  .home-bottom__text {
    margin-top: 16px;
  }
  .home-bottom__item:not(:last-child) {
    margin-right: 0;
  }
}
</style>
