<template>
  <li class="chat-item flex">
    <div class="chat-item__avatar avatar"></div>
    <div class="chat-item__text">
      <p class="chat-item__user">Продавец №1</p>
      <p class="chat-item__message">Последнее сообщение</p>
    </div>
    <a class="chat-item__time">20 мин</a>
  </li>
</template>

<script>
export default {
}
</script>

<style scoped>
.chat-item {
  padding: 16px;
  position: relative;
}
.chat-item__avatar {
  width: 56px;
  height: 56px;
  margin: 0 16px 0 0;
}
.chat-item__text {
  width: calc(100% - 72px);
}
.chat-item__user {
  font-size: 16px;
  line-height: 144%;
  margin: 0 0 4px;
}
.chat-item__message {
  font-size: 14px;
  line-height: 144%;
  color: #717171;
  margin: 0;
}
.chat-item__time {
  position: absolute;
  font-style: italic;
  font-size: 12px;
  line-height: 14px;
  color: #919191;
  top: 16px;
  right: 16px;
}
</style>
