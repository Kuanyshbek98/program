<template>
  <div class="city">
    <h1 class="event-create__title">Расскажите подробнее</h1>
    <p class="event-create__text ">
      В каком городе вы хотите проводить мероприятие?
    </p>
    <input
      class="city__input main-input"
      type="text"
      placeholder="Укажите город"
    />
    <div class="city__box">
      <img
        class="city__img"
        src="@/assets/images/event-create.svg"
        alt=""
      />
      <a href="" class="more">
        Использовать текущее местоположение
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.city__input {
  margin: 30px 0 24px 0;
}
.city__box {
  display: flex;
  align-items: center;
}
.city__img {
  margin: 0 10px;
}
</style>
