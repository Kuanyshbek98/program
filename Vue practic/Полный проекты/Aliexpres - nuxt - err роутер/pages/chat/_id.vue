<template>
  <div class="chat flex">
    <ChatLeftBlock class="chat__left" />
    <ChatRightBlock class="chat__right" />
  </div>
</template>

<script>
export default {
  components: {
    ChatLeftBlock: () => ({
      component: import('~~/components/chat/left')
    }),
    ChatRightBlock: () => ({
      component: import('~~/components/chat/right')
    })
  }
}
</script>

<style scoped>
.chat {
  padding-top: 8px;
  height: calc(100vh - 88px);
  box-sizing: border-box;
  align-items: flex-start;
}
.chat__left {
  width: 564px;
}
.chat__right {
  width: calc(100% - 564px);
}
</style>
