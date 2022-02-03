<template>
  <div class="order">
    <HeaderBlock v-bind:data="header" />
    <div class="container">
      <div class="order__players players">
        <h2 class="players__title">Название команды</h2>
        <div class="players__name flex">
          <img
            class="players__icon"
            src="@/assets/images/players__icon.svg"
            alt=""
          />
          <input
            class="players__input"
            type="text"
            placeholder="название команды"
          />
        </div>
        <div class="players__add add">
          <label class="add__text">
            Максимум количество участников в команде: 5
          </label>
          <ul class="add__items">
            <li class="add__item flex">
              <img
                class="add__icon"
                src="@/assets/images/add__icon.svg"
                alt=""
              />
              <input
                class="add__input main-input"
                type="text"
                placeholder="Игрок 1"
              />
            </li>
            <li class="add__item flex">
              <img
                class="add__icon"
                src="@/assets/images/add__icon.svg"
                alt=""
              />
              <input
                class="add__input main-input"
                type="text"
                placeholder="Игрок 1"
              />
            </li>
          </ul>
        </div>
        <button class="players__btn main-input flex">
          <img
            class="players__btn-icon"
            src="@/assets/images/players__btn-icon.svg"
            alt=""
          />
          Добавить игрока
        </button>
      </div>
    </div>
    <Choose v-bind:value="choose" />
  </div>
</template>

<script>
import HeaderBlock from "@/components/header/header";
import Choose from "@/components/choose";
export default {
  data() {
    return {
      header: {
        name: "Оформление заказа",
        color: "#3E5481",
        chooseImg: true,
      },

      choose: {
        backBG: "#F4F5F7",
        backColor: "#2E3E5C",
        nextBG: "#1FCC79",
        eventCreate: false,
        backlink: () => "/",
        nextlink: () => "/tarif",
      },
    };
  },
  components: {
    HeaderBlock,
    Choose,
  },
};
</script>

<style scoped>
.order__players {
  padding: 36px 20px 120px;

  font-weight: bold;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 0.5px;
}
.players__title {
  font-size: 12px;
}
.players__icon {
  margin: 10px;
}
.add__text {
  display: block;
  margin: 25px 0;
}
.players__btn {
  margin-top: 30px;
  justify-content: center;
  font-weight: bold;
  color: #3e5481;
}
</style>
