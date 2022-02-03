<template>
  <div class="about-us">
    <HeaderBlock v-bind:data="header" />
    <div class="container">
      <h1 class="about-us__title">О нас</h1>
      <div class="about-us__block">
        <h3 class="about-us__block-title">Спасибо, что выбрали нас!</h3>
        <p class="about-us__text">
          Quisque eget rutrum nulla, non lacinia ligula. Phasellus sodales
          elementum auctor. Nullam ullamcorper mattis purus eu mattis. Nam vel
          cursus tellus, venenatis posuere orci.
        </p>
      </div>
      <div class="about-us__block">
        <h3 class="about-us__block-title">Ваш профиль</h3>
        <p class="about-us__text">
          Quisque eget rutrum nulla, non lacinia ligula. Phasellus sodales
          elementum auctor. Nullam ullamcorper mattis purus eu mattis. Nam vel
          cursus tellus, venenatis posuere orci.
        </p>
      </div>
      <div class="about-us__block">
        <h3 class="about-us__block-title">Услуги</h3>
        <p class="about-us__text">
          Quisque eget rutrum nulla, non lacinia ligula. Phasellus sodales
          elementum auctor. Nullam ullamcorper mattis purus eu mattis. Nam vel
          cursus tellus, venenatis posuere orci.
        </p>
      </div>
      <div class="about-us__block">
        <p class="about-us__block-text">
          Есть вопросы? Обратитесь в
          <a class="more" href="">Службу поддержки</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlock from "@/components/header/header";
export default {
  data() {
    return {
      header: {
        name: "Назад",
        color: "#000",
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
.about-us {
  color: #000000;
}
.about-us__title {
  padding: 30px 0;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);
}
.about-us__block {
  margin: 30px 0;
}
.about-us__block-text {
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
}
</style>
