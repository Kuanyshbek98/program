<template>
  <div class="chat-empty flex">
    <h4 class="chat-empty__text">Выберите, кому хотели написать</h4>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.chat-empty {
  justify-content: center;
  background: #FBFAFC;
  border-top: 1px solid #EBEAED;
  border-bottom: 1px solid #EBEAED;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;
  padding: 32px 16px;
  box-sizing: border-box;
}
.chat-empty__text {
  background: rgba(85, 66, 246, 0.1);
  padding: 5px 10px;
  border-radius: 4px;
}
</style>
