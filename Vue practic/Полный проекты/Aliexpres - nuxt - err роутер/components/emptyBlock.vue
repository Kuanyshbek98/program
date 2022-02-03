<template>
    <div class="empty" v-if="emptyInfo">
        <img class="empty" :src="emptyInfo.img" alt="">
        <h2 class="empty__title">{{emptyInfo.title}}</h2>
        <p class="empty__text">{{emptyInfo.text}}</p>
    </div>
</template>

<script>
export default {
  props: {
    emptyInfo: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped>
.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}
.empty__title {
  font-weight: 600;
  font-size: 20px;
  line-height: 132%;
  margin: 32px 0 8px;
}
.empty__text {
  color: #717171;
  font-size: 14px;
  line-height: 144%;
  margin: 0;
}
</style>
