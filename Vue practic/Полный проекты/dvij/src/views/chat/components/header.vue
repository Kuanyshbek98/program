<template>
  <header class="chat-header flex-only">
    <router-link class="chat-header__back" to="/chats">
      <img src="@/assets/images/back.svg" alt="" />
    </router-link>
    <div class="chat-header__info flex">
      <div class="chat-header__avatar"> 
        <img
          class="avatar__img"
          src="@/assets/images/message-avatar.svg"
          alt=""
        /> 
      </div>
      <div class="chat-header__text">
        <h2 class="chat-header__name">Dean Winchester</h2>
        <p class="chat-header__status">Мортал комбат турнир</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.chat-header {
  align-items: center;
  padding: 5px 30px;
  background: #ffffff;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  width: 100%;
  box-sizing: border-box;
}
.chat-header__info {
  margin-left: 25px;
}
.chat-header__avatar {
  width: 48px;
  height: 48px;
  margin-right: 17px;
}
.chat-header__name {
  letter-spacing: 0.5px;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  margin: 0;
}
.chat-header__status {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;

  margin: 0;
  letter-spacing: 0.5px;

  color: #898a8d;
}
.avatar__img {
  border: 1px solid rgb(0, 0, 0);
  border-radius: 50% 50%;
}
</style>
