<template>
  <div class="detail-block">
    <DetalPicture />
    <DetailInfo />
    <DetailSalesman />
  </div>
</template>

<script>
import DetalPicture from "@/components/DetalPicture";
import DetailInfo from "@/components/DetailInfo";
import DetailSalesman from "@/components/DetailSalesman";
export default {
  components: {
    DetailSalesman,
    DetailInfo,
    DetalPicture,
  },
};
</script>

<style scoped>
.detail-block {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
