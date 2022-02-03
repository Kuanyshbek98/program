<template>
  <section class="home">
    <BannerBlock class="home__banner"/>
    <div class="container">
      <ProfileBlock/>
      <h2 class="home__subtitle">Горящие товары 🔥</h2>
      <BoxBlock :component-name="'product'" v-if="MainProducts" :product-main="MainProducts" />
      <h2 class="home__subtitle">Рекомендуемые товары 👍</h2>
      <BoxBlock :component-name="'product'" v-if="MainProducts" :product-main="MainProducts" />
      <h2 class="home__subtitle">Лента</h2>
      <ProductsSliderBlock />
      <h2 class="home__subtitle">Категории</h2>
    </div>
  </section>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  components: {
    BannerBlock: () => ({
      component: import('~~/components/slider/banner')
    }),
    BoxBlock: () => ({
      component: import('~~/components/common/box')
    }),
    ProductsSliderBlock: () => ({
      component: import('~~/components/slider/products')
    }),
    ProfileBlock: () => ({
      component: import('~~/components/profile/profileBlock')
    })
  }
}
</script>

<style scoped>
.home__subtitle {
  font-weight: 900;
  font-size: 24px;
  line-height: 132%;
  margin: 48px 0 40px;
}
</style>
