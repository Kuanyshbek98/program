<template>
  <div class="payment">
    <HeaderBlock v-bind:data="header" />
    <div class="container">
      <div class="payment__number">
        <h2 class="payment__title">Мортал комбат турнир</h2>
        <div class="payment__specify flex">
          <label class="payment__text" for="">Укажите количество</label>
          <button
            class="payment__btn minus"
            @click="number > 1 ? number-- : ''"
          >
            -
          </button>
          <span class="payment__num">{{ number }}</span>
          <button class="payment__btn plus" @click="number < 5 ? number++ : ''">
            +
          </button>
        </div>
      </div>
      <div class="payment__method method">
        <h3 class="method__title">Метод Оплата</h3>
        <div class="method__block">
          <img
            class="method__icon"
            src="@/assets/images/method-icon.svg"
            alt=""
          />
          <select class="method__select">
            <option value="Банковской картой">Банковской картой</option>
            <option value="Банковской картой">Банковской картой2</option>
            <option value="Банковской картой">Банковской картой3</option>
          </select>
        </div>

        <p class="method__text">Другие методы оплаты</p>
      </div>
      <div class="payment__amount amount">
        <h3 class="amount__title method__title">Списание средств</h3>

        <ul class="amount__items">
          <li class="amount__item flex">
            <label for="">К оплате</label>
            <label for="">5000</label>
          </li>
          <li class="amount__item flex">
            <label for="">Банковской картой</label>
            <label for="">5000</label>
          </li>
        </ul>
      </div>
      <button class="payment__button default-btn" @click="successBlock = true">
        Оплатить 5000
      </button>
    </div>
    <SuccessBlock v-if="successBlock" />
  </div>
</template>
<script>
import HeaderBlock from "@/components/header/header";
import SuccessBlock from "@/components/success";
export default {
  data() {
    return {
      number: 1,
      successBlock: false,
      header: {
        name: "Оформление заказа",
        color: "#3E5481",
        chooseImg: true,
        link: "tarif",
      },
    };
  },

  components: {
    HeaderBlock,
    SuccessBlock,
  },
};
</script>

<style scoped>
.payment {
  font-family: Inter;
  font-weight: bold;
  font-size: 14px;
  line-height: 27px;
  letter-spacing: 0.5px;
  color: #000000;
}
.payment__number {
  margin: 20px 0 30px;
}
.payment__title {
  color: #000000;
  font-size: 14px;
}

.payment__text {
  width: 75%;
  display: block;
  color: #898a8d;
  margin: 5px 0 0 5px;
  margin-left: 5px;
}
.payment__btn {
  height: auto;
  background: transparent;
  color: #3e5481;
  font-size: 20px;
}
.payment__method {
  min-height: 210px;
}
.payment__button {
  margin-bottom: 50px;
}
.method__title {
  color: #000000;
  font-size: 14px;
  padding: 14px 26px;
  border-radius: 8px;
  border: 1px solid #d0dbea;
  background: #ffffff;
  box-sizing: border-box;
  width: 110%;
  margin-left: -5%;
}
.method__block {
  position: relative;
}
.method__icon {
  position: absolute;
  top: 10px;
  left: 3px;
  z-index: -1;
}
.method__select {
  appearance: none;
  padding-left: 40px;
  font-weight: bold;
  background: none;
}
.method__text {
  color: #898a8d;
}
.amount {
  margin-bottom: 120px;
}
.amount__items {
  margin: 10px 0;
}
.amount__item {
  margin: 15px 0;
}
</style>
