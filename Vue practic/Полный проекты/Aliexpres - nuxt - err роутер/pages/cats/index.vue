<template>
  <div class="cats">
    <div class="container">
      <h1 class="cats__title">
        Все категории
      </h1>
      <h2 class="cats__subtitle">Ищите проще с помощью подкатегории</h2>
      <BoxBlock :component-name="'cat'" />
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
.cats__title {
  font-size: 24px;
  line-height: 132%;
  margin: 40px 0 8px;
}
.cats__subtitle {
  color: #919191;
  font-size: 14px;
  line-height: 144%;
  margin: 0 0 50px;
}
</style>
