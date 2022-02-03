<template>
  <section class="chat flex-only">
    <Header />
    <div class="chat__main">
      <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
      <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
      <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
      <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
      <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
      <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
      <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
    </div>
    <BottomBlock />
  </section>
</template>

<script>
import Header from "./components/header.vue";
import BottomBlock from "./components/bottom.vue";
export default {
  components: {
    Header,
    BottomBlock,
  },
};
</script>

<style scoped>
.chat {
  flex-direction: column;
  position: relative;
}
.chat__main {
  padding: 35px 6px 6px 43px;
}
.chat__text {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.5px;
  color: #9fa5c0;
}
</style>
