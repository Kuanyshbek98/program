<template>
  <div>
    <h1 class="event-create__title">
      К какой категории относится ваше мероприятие?
    </h1>
    <ul class="event-create__categories">
      <li class="event-create__categories-item flex">
        <div class="event-create__categories-text">
          <h2 class="event-create__subtitle">Личная встреча</h2>
          <p class="event-create__subtext">
            Гости лично участвуют в мероприятиях на месте проведения.
          </p>
        </div>

        <img
          class="event-create__categories-img"
          src="@/assets/images/players__icon.svg"
          alt=""
        />
      </li>
      <li class="event-create__categories-item flex">
        <div class="event-create__categories-text">
          <h2 class="event-create__subtitle">Только онлайн</h2>
          <p class="event-create__subtext">
            Гости участвуют онлайн через различные платформы, Zoom, Google meet
            и т.д.
          </p>
        </div>

        <img
          class="event-create__categories-img"
          src="@/assets/images/players__icon.svg"
          alt=""
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.event-create__categories {
  margin: 60px 0 60px 0;
}
.event-create__categories-item {
  border: 1px solid rgb(196, 196, 196);
  border-radius: 10px;
  padding: 10px 15px;
  margin: 6px 0;
}
.event-create__categories-title {
  /* margin: 32px 0; */
  /* font-weight: bold;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0.5px;
  color: #2e3e5c;
  margin: 0; */
}
.event-create__categories-text {
  /* font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.5px;
  color: #9fa5c0; */
}
.event-create__categories-img {
  width: 15%;
  margin-left: 10px;
}
</style>
