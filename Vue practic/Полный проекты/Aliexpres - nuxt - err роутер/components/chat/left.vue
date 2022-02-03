<template>
  <div class="chat-left">
    <header class="chat-left__header">
      <h1 class="chat-left__title">Переписки</h1>
      <form class="chat-left__form">
        <input type="text" class="chat-left__input" placeholder="Поиск продавцов">
        <a class="chat-left__icon"><SearchIcon /></a>
      </form>
    </header>
    <ul class="chat-left__list">
      <ItemBlock v-for="(item, index) in 10" :key="index" />
    </ul>
  </div>
</template>

<script>
import SearchIcon from '~~/assets/svg/search.svg?inline'
export default {
  components: {
    SearchIcon,
    ItemBlock: () => ({
      component: import('./item')
    })
  }
}
</script>

<style scoped>
.chat-left {
  height: 100%;
}
.chat-left__header {
  background: #FFFFFF;
  padding: 16px;
}
.chat-left__title {
  margin: 0 0 16px;
  font-weight: bold;
  font-size: 24px;
  line-height: 132%;
}
.chat-left__form {
  position: relative;
}
.chat-left__input {
  background: #FFFFFF;
  border: 0.5px solid #E1E1E1;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  text-align: center;
  font-size: 14px;
  line-height: 144%;
  color: #919191;
}
.chat-left__icon {
  position: absolute;
  top: 12px;
  left: calc(50% - 77px);
}
.chat-left__list {
  background-color: #FFFFFF;
  margin-top: 8px;
  overflow-y: auto;
  height: calc(100% - 104px);
}
</style>
