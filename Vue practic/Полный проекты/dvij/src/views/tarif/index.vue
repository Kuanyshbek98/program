<template>
  <div class="tarif">
    <HeaderBlock v-bind:data="header" />
    <div class="container">
      <ul class="tarif__items">
        <li class="tarif__item flex">
          <div class="tarif__info">
            <div class="tarif__price flex-only">
              <img
                class="tarif__icon"
                src="@/assets/images/tarif__icon.svg"
                alt=""
              />
              <label for="">1</label>
              <img
                class="tarif__circle"
                src="@/assets/images/tarif__circle.svg"
                alt=""
              />
              <label for="">5000</label>
              <img
                class="tarif__currency"
                src="@/assets/images/tarif__currency.svg"
                alt=""
              />
            </div>
            <div class="tarif__text">Получить сейчас на Dvij.kz</div>
          </div>
          <div class="tarif__click">
            <router-link to="/payment" class="tarif__btn default-btn"
              >Купить</router-link
            >
          </div>
        </li>
        <li class="tarif__item flex">
          <div class="tarif__info">
            <div class="tarif__price flex-only">
              <img
                class="tarif__icon"
                src="@/assets/images/tarif__icon.svg"
                alt=""
              />
              <label for="">1</label>
              <img
                class="tarif__circle"
                src="@/assets/images/tarif__circle.svg"
                alt=""
              />
              <label for="">5000</label>
              <img
                class="tarif__currency"
                src="@/assets/images/tarif__currency.svg"
                alt=""
              />
            </div>
            <div class="tarif__text">Получить сейчас на Dvij.kz</div>
          </div>
          <div class="tarif__click">
            <router-link to="/payment" class="tarif__btn default-btn"
              >Купить</router-link
            >
          </div>
        </li>
        <li class="tarif__item flex">
          <div class="tarif__info">
            <div class="tarif__price flex-only">
              <img
                class="tarif__icon"
                src="@/assets/images/tarif__icon.svg"
                alt=""
              />
              <label for="">1</label>
              <img
                class="tarif__circle"
                src="@/assets/images/tarif__circle.svg"
                alt=""
              />
              <label for="">5000</label>
              <img
                class="tarif__currency"
                src="@/assets/images/tarif__currency.svg"
                alt=""
              />
            </div>
            <div class="tarif__text">Получить сейчас на Dvij.kz</div>
          </div>
          <div class="tarif__click">
            <router-link to="/payment" class="tarif__btn default-btn"
              >Купить</router-link
            >
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "@/components/header/header";
export default {
  data() {
    return {
      header: {
        name: "Выберите тариф",
        color: "#3E5481",
        chooseImg: true,
      },
    };
  },
  components: {
    HeaderBlock,
  },
};
</script>

<style scoped>
.tarif__items {
  margin: 10px 0;
}
.tarif__item {
  height: 70px;
  padding: 15px;
  margin: 20px 0;
  border: 1px solid #d0dbea;
  box-sizing: border-box;
  border-radius: 8px;
}
.tarif__price {
  justify-content: flex-start;
  align-items: flex-end;
  margin: 4px 0;
  font-family: Nunito;
  font-weight: bold;
  line-height: 10px;
  color: #373a42;
}
.tarif__icon {
  margin: 0 5px 0 0;
}
.tarif__circle {
  margin: 3px 8px;
}
.tarif__text {
  margin: 4px 0;
  font-family: Work Sans;
  font-size: 12px;
  line-height: 12px;
  color: #a6aab1;
}
.tarif__click {
  width: 40%;
  max-width: 180px;
}
.tarif__btn {
  height: 30px;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
}
</style>
