<template>
  <div class="favorites">
    <HeaderBlock v-bind:data="header" />
    <div class="favorites__block">
      <img
        class="favorites__icon"
        src="@/assets/images/favorites-icon.svg"
        alt=""
      />
      <p class="favorites__text">
        Сохраняйте понравившиеся вам мероприятие в одном месте, нажав на
        сердечку на любом мероприятии.
      </p>

      <button class="favorites__btn">Найти мероприятие</button>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "@/components/header/header";
export default {
  data() {
    return {
      header: {
        name: "Избранные",
        color: "#3E5481",
        chooseImg: false,
      },
    };
  },
  components: {
    HeaderBlock,
    // Messages: () => ({
    //   component: import("./components/messages.vue"),
    // }),
  },
};
</script>

<style scoped>
.favorites__block {
  padding: 24px 31px;
}
.favorites__text {
  margin: 24px 0;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #898989;
}
.favorites__btn {
  width: 100%;
  background: #ffffff;
  border: 1px solid #1fcc79;
  box-sizing: border-box;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  color: #1fcc79;
}
</style>
