<template>
  <div class="language">
    <h1 class="event-create__title">Язык</h1>
    <h2 class="language__subtitle event-create__subtitle">
      Укажите основной язык на котором будет проводиться мероприятие
    </h2>
    <p class="language__text event-create__text ">
      Вы можете выбрать несколько языков
    </p>

    <div class="select__block">
      <img class="select__icon" src="@/assets/images/method-icon.svg" alt="" />
      <select class="main-select">
        <option value="Банковской картой">Выбрать язык</option>
        <option value="Банковской картой">Выбрать язык</option>
        <option value="Банковской картой">Выбрать язык</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.language__subtitle {
  margin: 24px 0 0 0;
}
.language__text {
  margin: 7px 0 17px 0;
}
</style>
