<template>
  <div>
    <div class="cantainer">
      <div class="success ">
        <div class="success__block">
          <img
            class="success__img"
            src="@/assets/images/success-img.svg"
            alt=""
          />
          <div class="success__text-block">
            <h3 class="success__title">Поздравляем!</h3>
            <p class="success__text">
              Теперь вы участник этого мероприятия. Перед входом не забудьте
              отсканировать QR
            </p>
          </div>
          <router-link to="/chat" class="main-btn">Вернуться на главную</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.success {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: rgba(20, 20, 20, 0.5);
}
.success__block {
  width: 47%;
  max-width: 240px;
  min-width: 240px;
  padding: 48px 43px;
  background: #ffffff;
  box-shadow: 0px -4px 56px rgb(0 70 207 / 3%);
  border-radius: 24px;
}
.success__img {
  margin: auto;
  display: block;
}
.success__text-block {
  font-family: Inter;
  text-align: center;
  letter-spacing: 0.5px;
  color: #2e3e5c;
}
.success__title {
  font-weight: bold;
  font-size: 22px;
  line-height: 32px;
  color: #3e5481;
}
.success__text {
  width: 116%;
  margin-left: -7%;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
}
</style>
