<template>
  <div class="online-block">
    <div class="online-block__title-block flex">
      <h3 class="online-block__title">
        Онлайн-Впечатление от организатора Kat
      </h3>
      <img
        class="online-block__img"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
    </div>
    <p class="online-block__info">1 697 отзывов</p>
    <p class="online-block__info">Личность подтверждена</p>
    <p class="online-block__text">
      Мы - Alley Kat Adventures: глобальная компания по дизайну мероприятий,
      базирующаяся в Остине, штат Техас. Основатель компании Кэт, организатор
      множества экстремальных массовых мероприятий по охоте за мусором в
      Северной Америке…
      <a href="" class="event__more"> читать дальше</a>
    </p>
    <button class="event__btn ">
      Связаться с организаторами
    </button>
    <p class="online-block__warning">
      В целях безопасности не переводите деньги и не общайтесь за пределами
      сайта или приложения Dvij.kz.
      <a href="" class="event__more_black">Подробнее</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.online-block {
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 25px;
  color: #3e5481;
}
.online-block__text {
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: 0.5px;
  color: #9fa5c0;
}
.online-block__info {
  margin-left: 40px;
}
.online-block__title {
  width: 80%;
}
.event__more {
  border-bottom: 1px solid;
  color: #3e5481;
}
.event__more_black {
  border-bottom: 1px solid;
  color: black;
}
.event__btn {
  border: 1px solid;
  display: block;
  width: 100%;
  padding: 8px 32px;
  box-sizing: border-box;
  background: #1fcc79;
  border-radius: 10px;
  color: #ffffff;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
}
</style>
