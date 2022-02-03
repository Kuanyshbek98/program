<template>
  <div class="offline-block">
    <h2 class="offline-block__title">Оффлайн-мероприятие</h2>
    <div class="offline-block__item flex-only">
      <img
        class="offline-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <label class="offline-block__label" for="">3 часа.</label>
    </div>
    <div class="offline-block__item flex-only">
      <img
        class="offline-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <label class="offline-block__label" for=""
        >До 30 игроков , до 5 человек в команде</label
      >
    </div>
    <div class="offline-block__item flex-only">
      <img
        class="offline-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <label class="offline-block__label" for=""
        >Языки, на которых проводится мероприятие: Казахский, Русский</label
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.offline-block {
  border-bottom: 1px solid #d0dbea;
}
.offline-block__title {
  font-size: 17px;
}
.offline-block__item {
  margin-bottom: 20px;
  align-items: center;
  font-weight: 500;
  color: #2e3e5c;
}
.offline-block__img {
  margin-right: 8px;
}
</style>
