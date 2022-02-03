<template>
  <div class="profile-edit__save-success">
    <div class="profile-edit__save-block">
      <h3 class="profile-edit__save-title">Подтвердите номер телефона!</h3>
      <p class="profile-edit__save-text">
        Мы отправили на ваш номер 6-значный код. Введите его для подтверждения
        вашего номера
      </p>
      <input type="text" class="profile-edit__save-input" />
      <a
        v-on:click="$emit('profileChange', false)"
        class="profile-edit__save-btn main-btn"
      >
        Подтвердить
      </a>
      <p class="profile-edit__save-error">
        Мне не пришло сообщение с кодом.
      </p>
      <p class="profile-edit__save-warning">
        Отправить можно через 35 сек.
      </p>
      <img
        v-on:click="$emit('changeSave', false)"
        class="profile-edit__img"
        src="@/assets/images/close.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.profile-edit__save-success {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.5);

  color: #000000;
}

.profile-edit__save-block {
  width: 60%;
  border-radius: 10px;
  margin: 30% auto;
  background-color: #ffffff;
  padding: 30px 10px 10px 10px;
  text-align: center;
  position: relative;
}

.profile-edit__save-title {
  width: 60%;
  margin: auto;
  font-size: 18px;
  line-height: 22px;
}
.profile-edit__save-text {
  width: 70%;
  margin: auto;
  margin-top: 12px;
  font-weight: 300;
  font-size: 11px;
  line-height: 13px;
}
.profile-edit__save-error {
  font-weight: 500;
  font-size: 9px;
  line-height: 11px;
  color: rgba(0, 0, 0, 0.9);
  margin-bottom: 0;
}
.profile-edit__save-warning {
  font-weight: 600;
  font-size: 9px;
  line-height: 11px;
  color: rgba(30, 29, 76, 0.9);
  margin: 0;
}
.profile-edit__save-input {
  width: 120px;
  border-bottom: 1px solid #1fcc79;
  margin-bottom: 20px;
}
.profile-edit__save-btn {
  width: 60%;
  padding: 10px 0px;
  height: auto;
  margin: auto;
  font-size: 11px;
  line-height: 13px;
}
.profile-edit__save-strong {
  color: rgba(30, 29, 76, 0.9);
}
.profile-edit__img {
  width: 15px;
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
