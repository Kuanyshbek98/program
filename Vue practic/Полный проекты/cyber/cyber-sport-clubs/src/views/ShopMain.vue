<template>
  <div class="shop-page"> 
    <div class="container">
      <ProductTypes />
      <ProductMenu />
      <ProductMain :title="title" :number="number" />
    </div>
    <PartnerBlock />
    <div class="container">
      <Question />
    </div> 
  </div>
</template>

<script>
import Headers from "@/components/Headers";
import ProductTypes from "@/components/ProductTypes";
import ProductMenu from "@/components/ProductMenu";
import ProductMain from "@/components/ProductMain";
import PartnerBlock from "../components/PartnerBlock.vue";
import Question from "@/components/Question";
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      number: 8,
      title: " ",
    };
  },
  components: {
    Headers,
    ProductTypes,
    ProductMenu,
    ProductMain,
    PartnerBlock,
    Question,
    Footer,
  },
};
</script>

<style scoped></style>
