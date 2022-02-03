<template>
  <div class="my-reservations">
    <HeaderBlock v-bind:data="header" />
    <TabsBlock />
    <div class="container">
      <div class="active" v-show="$route.params.type === 'active'">
        <div class="active__block">
          <ul class="active__list">
            <li class="active__item flex-only">
              <img
                class="active__img"
                src="@/assets/images/info-img.svg"
                alt=""
              />
              <div class="active__info">
                <div class="active__info-text">
                  <h4 class="active__titile">Мортал комбат турнир</h4>
                  <div class="active__text">
                    <strong v-show="!changeNext" class="active__warning">
                      Ваша заявка откланена
                    </strong>
                    <strong v-show="changeNext" class="active__success">
                      Ваша заявка активна
                    </strong>
                  </div>
                </div>
                <button
                  v-show="changeNext"
                  @click="changeNext = !changeNext"
                  class="active__info-btn"
                >
                  Отменить заявку
                </button>
              </div>
            </li>
            <li class="active__item flex-only">
              <img
                class="active__img"
                src="@/assets/images/info-img.svg"
                alt=""
              />
              <div class="active__info">
                <div class="active__info-text">
                  <h4 class="active__titile">Мортал комбат турнир</h4>
                  <div class="active__text">
                    <strong v-show="!changeNext" class="active__warning">
                      Ваша заявка откланена
                    </strong>
                    <strong v-show="changeNext" class="active__success">
                      Ваша заявка активна
                    </strong>
                  </div>
                </div>
                <button
                  v-show="changeNext"
                  @click="changeNext = !changeNext"
                  class="active__info-btn"
                >
                  Отменить заявку
                </button>
              </div>
            </li>
          </ul>
        </div>
        <button class="my-reservations__btn active__btn">Забронировать</button>
      </div>
      <Archival v-show="$route.params.type === 'archival'" />
    </div>
  </div>
</template>

<script>
import HeaderBlock from "@/components/header/header";
export default {
  data() {
    return {
      changeNext: true,
      header: {
        name: "Мои бронирования",
        color: "#3E5481",
        chooseImg: false,
      },
    };
  },
  components: {
    HeaderBlock,
    TabsBlock: () => ({
      component: import("./components/tabs.vue"),
    }),
    Archival: () => ({
      component: import("./components/archival.vue"),
    }),
  },
};
</script>

<style scoped>
.active {
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.my-reservations__btn {
  width: 100%;
  margin-top: 100px;
  background: #ffffff;
  border: 1px solid #1fcc79;
  box-sizing: border-box;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-size: 14px;
  text-align: center;
  color: #1fcc79;
}
.active {
  padding: 24px 31px;
}
.active__info {
  width: 65%;
  padding: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.active__item {
  padding: 0px 2px;
  margin-bottom: 18px;
  width: 100%;
  box-shadow: 0px 1px 10px rgb(0 0 0 / 25%);
  border-radius: 10px;
  font-family: Montserrat;
  font-size: 10px;
}
.active__titile {
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  margin: 3px 0;
}
.active__img {
  width: 35%;
  margin: 5px 0;
}
.active__text {
  width: 70%;
  padding-top: 10px;
  border-top: 1px solid #0000001f;
}
.active__warning {
  color: #b60000;
}
.active__info-btn {
  width: 100%;
  text-align: end;
  height: 30px;
  background-color: transparent;
  font-size: 10px;
  color: #1fcc79;
}

@media (min-width: 576px) {
  .active__titile,
  .my-reservations__btn {
    font-size: 20px;
  }
  .active__info-btn,
  .active__item {
    font-size: 15px;
  }
}
</style>
