<template>
  <div class="chat-right">
    <div class="chat-right__main">

    </div>
    <BottomBlock />
  </div>
</template>

<script>
export default {
  components: {
    BottomBlock: () => ({
      component: import('./bottom')
    })
  }
}
</script>

<style scoped>

</style>
