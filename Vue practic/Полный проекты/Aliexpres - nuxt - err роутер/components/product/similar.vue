<template>
  <div class="product-similar">
    <h3 class="product-similar__subtitle">Другие товары от этого продавца</h3>
    <BoxBlock :component-name="'product'" v-if="MainProducts" :product-main="MainProducts" />
  </div>
</template>

<script>
export default {
  components: {
    BoxBlock: () => ({
      component: import('~~/components/common/box')
    })
  },
  props: {
    MainProducts: {
      type: Object,
      default: () => { 'MainProducts' }
    }
  }
}
</script>

<style scoped>

</style>
