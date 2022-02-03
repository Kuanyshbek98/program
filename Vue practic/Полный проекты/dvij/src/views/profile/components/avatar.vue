<template>
  <div class="avatar-block">
    <div class="container">
      <div class="avatar-block__img-block">
        <router-link to="/profile-add"><Success /></router-link>
        <router-link to="/profile-add" class="avatar-block__title"
          >Choirul Syafril</router-link
        >
        <router-link to="/profile-add" class="avatar-block__link"
          >Показать профиль</router-link
        >
      </div>
      <div class="avatar-block__info flex">
        <div class="avatar-block__events">
          <strong class="avatar-block__number">32</strong>
          <p class="avatar-block__text">Мероприятий</p>
        </div>
        <div class="avatar-block__earned">
          <strong class="avatar-block__number">19.287,154</strong>
          <p class="avatar-block__text">Заработано</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Success from "@/assets/images/success-img.svg?inline";
export default {
  components: {
    Success,
  },
};
</script>

<style scoped>
.avatar-block {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.5px;
  border-bottom: 8px solid #f4f5f7;
}
.avatar-block__img-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}
.avatar-block__title {
  margin-bottom: 0;
  font-size: 17px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.5px;
  color: #3e5481;
}
.avatar-block__link {
  color: #2f939d;
  font-weight: 500;
}
.avatar-block__info {
  padding: 17px;
  text-align: center;
  justify-content: space-around;

  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #3e5481;
}
.avatar-block__text {
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  color: #9fa5c0;
  margin: 0;
}
</style>
