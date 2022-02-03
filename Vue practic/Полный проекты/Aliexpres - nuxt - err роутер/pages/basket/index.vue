<template>
  <div class="basket">
    <div class="container">
      <EmptyBlock />
    </div>
  </div>
</template>

<script>
export default {
  components: {
    EmptyBlock: () => ({
      component: import('~~/components/basket/empty')
    })
  }
}
</script>

<style scoped>

</style>
