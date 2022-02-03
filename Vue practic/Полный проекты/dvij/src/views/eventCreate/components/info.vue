<template>
  <div class="info">
    <h1 class="event-create__title">Чем мы займемся</h1>
    <p class="language__text event-create__text ">
      Опишите мероприятие так, чтобы гости точно захотели его забронировать.
      Пусть это будет рассказ с завязкой, кульмитнацией и финалом.
    </p>
    <ul class="info__items">
      <li class="info__item">
        <p class="info__subtext event-create__subtext">
          Сначала расскажите. чем планируете заняться с гостями. Какие
          уникальные детали отличают ваше Впечатление от подобных?
        </p>
      </li>
      <li class="info__item">
        <p class="info__subtext event-create__subtext">
          После этого углубитесь в детали. С чего вы начнете? Как вовлечете
          гостей в занятие?
        </p>
      </li>
      <li class="info__item">
        <p class="info__subtext event-create__subtext">
          Расскажите, что останется у гостей после Впечатления. Может, друзья
          или особые знания? Больше уважения к вашей культуре? Завершите
          описание убедительным аргументом.
        </p>
      </li>
    </ul>

    <textarea
      class="main-textarea  event-create__subtext"
      placeholder="Какое мероприятие вы проводите? Больше конкретики"
      name=""
      id=""
      cols="30"
      rows="10"
    ></textarea>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info__items {
  margin-top: 50px;
}
.info__item {
  margin-left: 20px;
  list-style-type: decimal;
}
.info__subtext {
  color: #2e3e5c;
  font-weight: 600;
} 
</style>
