<template>
  <div class="actions flex" :class="{ actions__event: value.eventCreate }">
    <router-link
      :to="`${value.backlink()}`"
      class="actions__reject main-btn"
      :style="`background: ${value.backBG}; color:${value.backColor}`"
    >
      Назад
    </router-link>
    <router-link
      :to="`${value.nextlink()}`"
      class="actions__accept main-btn"
      :style="`background: ${value.nextBG}`"
    >
      Далее
    </router-link>
  </div>
</template>

<script>
export default {
  // props: ["value"],
  props: {
    value: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  data() {
    return {
      startSlide: 0,
    };
  },
  methods: {
    startSlides() {
      console.log(this.startSlide);
    },
  },
};
</script>

<style scoped>
.actions {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 17%;
  padding: 10px;
  box-sizing: border-box;
  z-index: 2;
}
.actions__event {
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.25);
  bottom: 5%;
}
.actions__reject {
  width: 100%;
  margin: 0 2%;
  /* color: #2e3e5c; */
}
.actions__accept {
  width: 100%;
  margin: 0 2%;
}
</style>
