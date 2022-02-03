<template>
  <header class="header"> 
    <h2 class="header__title">{{ title }}</h2>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style scoped>
.header__title {
  font-size: 17px;
  line-height: 27px;
  letter-spacing: 0.5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  margin: 0;
  padding: 10px 31px;
}
</style>
