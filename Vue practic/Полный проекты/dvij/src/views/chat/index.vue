<template>
  <section class="chat flex-only">
    <Header />
    <div class="chat__block" :style="`height:${inHeight}`">
      <div class="chat__main">
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
        <p class="chat__text">Здравствуйте, сколько в команде макс людей?</p>
      </div>
      <BottomBlock />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      inHeight: 0,
    };
  },
  components: {
    Header: () => ({
      component: import("./components/header.vue"),
    }),
    BottomBlock: () => ({
      component: import("./components/bottom.vue"),
    }),
  },
  mounted() {
    this.inHeight = window.innerHeight + "px";
    console.log(window.innerHeight);
  },
};
</script>

<style scoped>
.chat {
  flex-direction: column;
  position: relative;
}
.chat__block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.chat__main {
  height: 100%;
  border: 1px solid red;
  padding: 10px 5px 60px 30px;
  overflow: auto;
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
