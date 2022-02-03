<template>
  <div>
    <div v-if="show" class="backgroud" @click="$emit('hide', true)" :style="`z-index:${zIndex};top:${top}`"></div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: () => {}
    },
    zIndex: {
      type: Number,
      default: () => 3
    },
    top: {
      type: Number,
      default: () => 0
    }
  }
}
</script>

<style scoped>
.backgroud{
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(0, 0, 0, 0.48);
  left: 0;}
</style>
