<template>
  <div class="product-brief" v-if="product">
    <div class="product-brief__image-block">
      <img class="product-brief__image" :src="$url+'/'+product.path[0]" alt="">
    </div>
    <h3 class="product-brief__name">
      {{ product.name }}
    </h3>
    <div class="product-brief__bottom flex">
      <p class="product-brief__price">{{ product.price }} ₸</p>
      <button class="product-brief__add">
        <PlusIcon />
      </button>
    </div>
  </div>
</template>

<script>
import PlusIcon from '~~/assets/svg/plus.svg?inline'
export default {
  components: {
    PlusIcon
  },
  props: {
    product: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style scoped>
.product-brief {
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 12px;
}
.product-brief:hover {
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
}
.product-brief__image-block {
  margin: 4px 4px 8px;
  position: relative;
  width: calc(100% - 8px);
  height: 228px;
  overflow: hidden;
  display: flex;
  align-items: center;
  border-radius: 8px 8px 0 0;
  justify-content: center;
  background-color: #F6F6F6;
}
.product-brief__image {
  width: 100%;
}
.product-brief__name {
  color: #717171;
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  margin: 0;
  padding: 0 8px;
}
.product-brief__price {
  font-weight: 500;
  font-size: 16px;
  line-height: 144%;
  margin: 0;
  padding-left: 8px;
}
.product-brief__add {
  width: 56px;
  height: 40px;
  background: var(--success-color);
  border-radius: 16px 0 12px;
}
</style>
