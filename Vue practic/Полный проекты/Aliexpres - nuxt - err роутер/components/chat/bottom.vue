<template>
  <div class="chat-bottom flex">
    <label class="chat-bottom__upload">
      <SubscribeIcon />
      <input type="file" hidden>
    </label>
    <textarea class="chat-bottom__input" placeholder="Напишите продавцу"></textarea>
  </div>
</template>

<script>
import SubscribeIcon from '~~/assets/svg/subscribe.svg?inline'
export default {
  components: {
    SubscribeIcon
  }
}
</script>

<style scoped>
.chat-bottom {
  position: relative;
  height: 84px;
  padding: 8px 16px;
  box-sizing: border-box;
  background-color: #FFFFFF;
  align-items: flex-start;
}
.chat-bottom__upload {
  margin-top: 10px;
  margin-right: 12px;
}
.chat-bottom__input {
  background: #F8F8F8;
  border: 0.5px solid #F1F1F1;
  border-radius: 24px;
  width: 100%;
  resize: none;
  color: #919191;
  font-size: 14px;
  line-height: 144%;
  padding: 10px 16px 0 16px;
}
</style>
