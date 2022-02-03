<template>
  <div class="cats">
    <div class="container">
      <h1 class="cat__title">
        Название категории
      </h1>
      <BoxBlock :component-name="'product'" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    BoxBlock: () => ({
      component: import('~~/components/common/box')
    })
  }
}
</script>

<style scoped>
.cat__title {
  font-size: 24px;
  line-height: 132%;
  margin: 40px 0 8px;
}
.cat__subtitle {
  color: #919191;
  font-size: 14px;
  line-height: 144%;
  margin: 0 0 50px;
}
</style>
