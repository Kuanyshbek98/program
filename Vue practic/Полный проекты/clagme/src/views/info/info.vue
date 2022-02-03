<template>
  <section class="info-page">
    <HeaderBlock />
    <HeadBlock />
    <div class="container">
      <DescriptionBlock />
    </div>
  </section>
</template>

<script>
export default {
  components: {
    HeaderBlock: () => ({
      component: import('./components/header')
    }),
    HeadBlock: () => ({
      component: import('./components/head')
    }),
    DescriptionBlock: () => ({
      component: import('./components/description')
    }),
  },
}
</script>

<style scoped></style>
