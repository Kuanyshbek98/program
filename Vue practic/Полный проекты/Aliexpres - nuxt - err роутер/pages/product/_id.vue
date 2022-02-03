<template>
  <div class="product">
    <div class="container flex product__content">
      <div class="product-left">
        <ImageBlock class="product__image" v-if="ShowProducts" :ShowProducts="ShowProducts" />
        <SimilarBlock class="product__similar" v-if="MainProducts" :main-products="MainProducts" />
      </div>
      <div class="product-right">
        <InfoBlock class="product__info" v-if="ShowProducts" :ShowProducts="ShowProducts" />
        <SellerBlock class="product__seller" />
        <ReviewBlock class="product__review" v-if="reviewsProduct" :reviewsProduct="reviewsProduct" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      MainProducts: null,
      ShowProducts: null,
      reviewsProduct: null
    }
  },
  components: {
    ImageBlock: () => ({
      component: import('~~/components/product/image')
    }),
    InfoBlock: () => ({
      component: import('~~/components/product/info')
    }),
    SellerBlock: () => ({
      component: import('~~/components/product/seller')
    }),
    ReviewBlock: () => ({
      component: import('~~/components/product/review')
    }),
    SimilarBlock: () => ({
      component: import('~~/components/product/similar')
    })
  },
  created () {
    this.productMain()
  },
  methods: {
    async productMain () {
      await this.$api.get('/api/shop/index')
        .then((response) => { this.MainProducts = response.data })
      await this.$api.get('/api/shop/show', {
        params: {
          id: 2
        }
      })
        .then((response) => { this.ShowProducts = response.data })
      await this.$api.get('/api/shop/review/product', {
        params: {
          id: 1
        }
      })
        .then((response) => { this.reviewsProduct = response.data })
    }
  }
}
</script>

<style scoped>
.product {
  padding-top: 16px;
}
.product__content {
  align-items: flex-start;
}
.product-left {
  width: 496px;
}
.product-right {
  width: calc(100% - 520px);
}
</style>
