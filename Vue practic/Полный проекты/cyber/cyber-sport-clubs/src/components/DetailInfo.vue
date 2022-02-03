<template>
  <div class="detail-info">
    <div class="detail-info__block">
      <strong class="detail-info__strong">В наличии 134 шт.</strong>
      <strong class="detail-info__strong-red">Нет в наличии</strong>
      <h1 class="detail-info__title">
        Sony Alpha Mirrorless 4K Video Camera
      </h1>
      <p class="detail-info__text">
        Sony α, is a camera system introduced on 5 June 2006. It uses and
        expands upon Konica Minolta camera technologies, including the Minolta
        AF SLR lens mount…<a href="">Читать дальше</a>
      </p>
      <div class="detail-info__btn detail-btn">
        <div class="detail-btn__shoise">
          <strike class="detail-btn__strike">640 000 ₸</strike>
          <strong>560 000 ₸</strong>
        </div>
        <div class="detail-btn__block">
          <button id="detail-btn__button" class="btn">Оформить сейчас</button>
          <button class="button">В корзину</button>
        </div>
      </div>
    </div>
    <Characteristics />
  </div>
</template>

<script>
import Characteristics from "@/components/Characteristics";
export default {
  components: {
    Characteristics,
  },
};
</script>

<style scoped>
.detail-info {
  width: 45%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
}
.detail-info__block {
  padding: 10px;

  font-family: Jost;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #718096;
}
.detail-info__strong-red {
  color: #f16063;
  margin-left: 10px;
}
.detail-info__text {
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: 0.16px;
  color: #2d3748;
}
.detail-info__title {
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0.326451px;
  color: #1a202c;
}
.detail-info__btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.detail-btn__block {
  display: flex;
  justify-content: space-between;
}
.detail-btn__shoise {
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  font-family: Exo 2;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.326451px;
  color: #1a202c;
}
.detail-btn__strike {
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.38px;
  text-decoration-line: line-through;
  color: #718096;
}
</style>
