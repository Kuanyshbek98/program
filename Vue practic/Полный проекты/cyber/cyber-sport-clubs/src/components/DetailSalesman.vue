<template>
  <div class="detail-salesman">
    <h2 class="detail-salesman__title">Продавец</h2>
    <div class="detail-salesman__wrapper">
      <ul class="detail-salesman__inner inner-info">
        <li class="inner-info__item item-slogan">
          <div class="item-slogan__box">
            <img
              class="item-slogan__icon"
              src="@/assets/img/slogan__img.png"
              alt=""
            />
            <strong class="item-slogan__text">Магазин “Алсер”</strong>
          </div>
          <img
            class="item-slogan__logo"
            src="@/assets/img/slogan__avatar.png"
            alt=""
          />
        </li>
        <li class="inner-info__item item-tel">
          <img
            class="item-tel__img"
            src="@/assets/img/inner-info__tel.png"
            alt=""
          />
          <div class="item-tel__tel tel-info">
            <a href="tel:+7777389-93-90">+7 (777) 389-93-90</a>
            <strong class="tel-info__text">Отдел продаж</strong>
            <a href="tel:+7777389-93-90">+7 (707) 389-94-92</a>
            <strong class="tel-info__text">Служба доставки</strong>
            <a href="tel:+7777389-93-90">+7 (777) 389-93-59</a>
            <strong class="tel-info__text">Главный офис</strong>
          </div>
        </li>
        <li class="inner-info__item">
          <img src="@/assets/img/inner-info__map.png" alt="" />
          <strong class="item-slogan__text">г. Алматы, ул. Тимирязва 71</strong>
        </li>
        <li class="inner-info__item">
          <img src="@/assets/img/inner-info__sait.png" alt="" />
          <a href="" class="item-slogan__text">alser.lz</a>
        </li>
        <li class="inner-info__item">
          <img src="@/assets/img/inner-info__massege.png" alt="" />
          <strong class="item-slogan__text">alserkz@gmail.com</strong>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.detail-salesman {
  width: 50%;
  /* margin-top: -120px; */
}
.detail-salesman__wrapper {
  background: #fff;

  padding: 10px 0px;
  border: 0.33px solid rgba(26, 32, 44, 0.12);
  border-radius: 12px;
}
.item-slogan__box {
  display: flex;
  align-items: center;
}
.item-slogan__text {
  margin: 0 10px;
}
.inner-info__item {
  padding: 15px;
  display: flex;
  align-items: center;
  border-top: 0.1px solid rgb(235, 235, 235);
}
.item-slogan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 2px 10px 10px 10px;
}
.item-tel {
  display: flex;
  align-items: flex-start;
}
.item-tel__tel {
  display: flex;
  flex-direction: column;
  margin: 0 10px;
}
.tel-info__text {
  font-family: Jost;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #718096;
  margin-bottom: 10px;
}
</style>
