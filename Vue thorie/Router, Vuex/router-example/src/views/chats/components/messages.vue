<template>
  <div class="message">
    <ul v-for="(item, index) in 2" :key="index" class="message__items">
      <router-link to="/chat/1" tag="li" class="message__item flex">
        <div class="message__avatar avatar">
          <img
            class="avatar__img"
            src="@/assets/images/message-avatar.svg"
            alt=""
          />
        </div>
        <div class="message__text">
          <h3 class="message__name">Dean Winchester</h3>
          <strong>Мортал комбат турнир</strong>
          <p class="message__sms">
            Здравствуйте, сколько в команде макс людей?
          </p>
        </div>
        <!-- <div class="message__number">
          <label for="">15:13</label>
          <span class="message__count">12</span>
        </div> -->
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.message {
  height: calc(100vh - 107px);
  overflow: auto;
}
.message__items {
  margin-left: 18px;
}
.message__item {
  height: 100px;
  justify-content: flex-start;
  align-items: flex-end;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.5px;
  color: #898a8d;
}
.message__avatar {
  min-width: 45px;
  margin: 15px 15px 0 15px;
  position: relative;
}
.avatar__img {
  border: 1px solid rgb(0, 0, 0);
  border-radius: 50% 50%;
}
.message__text {
  width: 80%;
  max-width: 80%;
  margin: 0 5px;
}
.message__name {
  margin: 0;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  /* line-height: 25px; */
  letter-spacing: 0.5px;
  color: #3e5481;
}
.message__sms {
  margin: 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.5px;
  color: #9fa5c0;
}
.message__number {
  min-width: 40px;
  height: 100%;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  text-align: center;
  letter-spacing: -0.165px;

  color: #848484;
}
.message__count {
  background: #1fcc79;
  font-size: 15px;
  color: #fff;
  padding: 5px 8px;
  border-radius: 30px;
}
</style>
