<template>
  <div class="theme">
    <h1 class="event-create__title">О чем мероприятие?</h1>
    <p class="event-create__text ">
      Выберите тему, лучше всего описывающую мереприятие.
    </p>
    <button class="theme__btn main-input">
      <img class="theme__icon" src="@/assets/images/close.svg" alt="" />
      Выбрать тему
    </button>
    <div class="theme__box">
      <img class="theme__img" src="@/assets/images/event-create.svg" alt="" />
      <a href="" class="more">
        Добавьте еще одну тему (необязательно)
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.theme__btn {
  margin: 30px 0 24px 0;
  width: auto;

  padding-top: 18px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.007em;
  color: #2e3e5c;
}
.theme__icon {
  margin-right: 10px;
  width: 12px;
  transform: rotate(45deg);
  margin-right: 10px;
}
.theme__box {
  display: flex;
  align-items: center;
}
.theme__img {
  margin: 0 10px;
}
</style>
