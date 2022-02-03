<template>
  <div class="review">
    <div class="review__personal ">
      <h2 class=" review__title">Отзывы</h2>
      <div class="review__text">
        <p>для Sony Alpha Mirrorless 4K Video Camera</p>
        <div class="review__img">
          <img src="@/assets/img/frame.png" alt="" /><b>4,6</b
          ><b id="review__text">/5.0</b>
        </div>
        <p>(88%) Покупателей советуют этот продукт</p>
      </div>
      <div class="review__ratings">
        <div v-for="(pos, i) in 5" :key="pos.id" class="review__rating rating">
          <img src="@/assets/img/rating.png" alt="" />{{ 5 - i }}
          <div class="rating__wrap "><div class="rating__inner"></div></div>
          <p>5к</p>
        </div>
      </div>
    </div>
    <div class="review__all">
      <div class="review__list list">
        <h2 class="list__title">Все отзывы(203)</h2>
        <div class="list__sort">
          <p>Сортировать по :</p>
          <select class="select" name="" id="list__select">
            <option value="">Новым</option>
            <option value="">Новым</option>
            <option value="">Новым</option>
          </select>
        </div>
        <div v-for="pos in 3" :key="pos.id" class="review__items">
          <div class="review__item item">
            <img
              class="item__img"
              src="@/assets/img/frame.png"
              alt=""
            />
            <div class="item__title">
              <h3 class="margin-title">Эмма Стоун</h3>
              <p class="margin-title">20 Июля 2021</p>
            </div>
            <img
              v-for="pos in 5"
              :key="pos.id"
              class="item__rating"
              src="@/assets/img/rating.png"
              alt=""
            />
          </div>
          <p>
            Sony , is a camera system introduced on 5 June 2006. It uses and
            expands upon Konica Minolta camera technologies, including the
            Minolta AF SLR
          </p>
        </div>
      </div>
      <div class="review__form"><FormBlock /></div>
    </div>
  </div>
</template>

<script>
import FormBlock from "@/components/FormBlock";
export default {
  components: {
    FormBlock,
  },
};
</script>

<style scoped>
.review {
  margin: 50px 0;
}
.review__personal {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.review__title {
  width: 100%;
}
.review__text {
  display: flex;
  flex-direction: column;
  color: #718096;
  width: 30%;
  height: 100%;
}
#review__text {
  color: #4a5568;
  font-size: 2rem;
}
.review__img {
  height: 60%;
  color: #000;
  font-size: 3rem;
  margin: 50px 0;
}
.review__img img {
  margin: 0px 10px;
}
.review__ratings {
  width: 70%;
}
.review__rating {
  display: flex;
  align-items: center;
}
.rating__wrap {
  width: 100%;
  height: 10px;
  background-color: #edf2f7;
  margin: 0px 10px;
  border-radius: 10px;
}
.rating__inner {
  width: 60%;
  height: 100%;
  background-color: #1a202c;
  border-radius: 10px;
}
.review__all {
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.review__list {
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
}
.review__items {
  width: 100%;
  color: #718096;
  margin: 10px 0;
}
.review__item {
  display: flex;
  align-items: center;
}
.item__rating {
  margin: 0px 5px;
}
.item__title {
  margin: 0 40px 0 10px;
  color: #000;
}
.review__form {
  width: 35%;
}
#list__select {
  background-color: #f7f7f7;
  margin: 10px;
}
.list__sort {
  display: flex;
  color: #959ead;
}
</style>
