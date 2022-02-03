<template>
  <div class="box" v-if="productMain">
    <component
      :is="componentName + '-block'"
      v-for="(product, index) in productMain.data"
      :key="index"
      class="box__product"
      :product="product"
      />
<!--    <ProductBlock />-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      productObj: null
    }
  },
  components: {
    ProductBlock: () => ({
      component: import('~~/components/common/productBrief')
    }),
    CatBlock: () => ({
      component: import('~~/components/common/catBrief')
    })
  },
  props: {
    componentName: {
      type: String,
      default: 'product'
    },
    productMain: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.box {
  display: grid;
  grid-gap: 36px 24px;
  --auto-grid-min-size: 236px;
  grid-template-columns: repeat(auto-fill, minmax(var(--auto-grid-min-size), 1fr));
}
</style>
