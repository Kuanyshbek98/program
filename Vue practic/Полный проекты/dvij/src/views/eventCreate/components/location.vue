<template>
  <div class="location">
    <h1 class="event-create__title">Местоположение</h1>
    <h2 class="event-create__subtitle">Где все будет проходить?</h2>
    <button class="location__btn main-input">
      <img class="location__icon" src="@/assets/images/close.svg" alt="" />
      Выбрать местоположение
    </button>
    <h2 class="event-create__subtitle">Опишите место</h2>
    <textarea
      class="location__textarea main-textarea"
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Опишите место"
    >
    </textarea>
    <h2 class="location__subtitle event-create__subtitle">
      Где вы будете ждать гостей?
    </h2>
    <p class="location__subtext event-create__subtext">Страна/регион</p>
    <div class="select__block">
      <img class="select__icon" src="@/assets/images/method-icon.svg" alt="" />
      <select class="main-select">
        <option value="Банковской картой">Алматы</option>
        <option value="Банковской картой">Алматы</option>
        <option value="Банковской картой">Алматы</option>
      </select>
    </div>
    <p class="location__subtext event-create__subtext">Город</p>
    <input class="main-select" type="text" name="" id="" placeholder="Алматы" />
    <p class="location__subtext event-create__subtext">Адрес</p>
    <input class="main-select" type="text" placeholder="проспект абая 20/17" />
    <p class="location__subtext event-create__subtext">
      Квартира, блок, строение
    </p>
    <input class="main-select" type="text" placeholder="14" />
    <p class="location__subtext event-create__subtext">
      Укажите на карте
    </p>
    <div class="location__box">
      <img
        class="location__img"
        src="@/assets/images/event-create.svg"
        alt=""
      />
      <input
        class="main-select location__input "
        type="text"
        placeholder="Указать на  карте"
      />
    </div>
    <p class="location__subtext event-create__subtext">
      Как гостям вас найти
    </p>
    <p class="location__subtext-end event-create__subtext ">
      Предоставьте инструкции с маршутом. Чем подробнее, тем лучше.
    </p>
    <textarea
      class="location__textarea-end main-textarea"
      name=""
      id=""
      cols="30"
      rows="10"
    >
Опишите, как добраться пешком, на автомобиле или общественном транспорте, где припарковаться. </textarea
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.location__subtitle {
  margin: 12px 0;
}
.location__btn {
  margin: 37px 0 12px 0;
  width: auto;
  padding-top: 18px;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.007em;
  color: #2e3e5c;
}
.location__icon {
  margin-right: 10px;
  width: 12px;
  transform: rotate(45deg);
  margin-right: 10px;
}
.location__textarea {
  height: 80px;
  margin-top: 12px;
}
.location__subtext {
  color: #2e3e5c;
  font-weight: 900;
  line-height: 25px;
  margin: 12px 0;
}
.location__box {
  position: relative;
}
.location__img {
  position: absolute;
  top: 15px;
  left: 20px;
}
.location__input {
  padding-left: 47px;
}
.location__subtext-end {
  line-height: 25px;
}
.location__textarea-end {
  height: 97px;
  margin-top: 0px;
  line-height: 15px;
  color: #9fa5c0;
}
</style>
