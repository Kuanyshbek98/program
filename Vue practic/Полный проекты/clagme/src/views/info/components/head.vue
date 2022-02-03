<template>
  <div class="info-page-head" style="background-image: url('./privacy-back.png')">
    <div class="container">
      <h1 class="info-page-head__title">
        Privacy and Terms of Use
      </h1>
      <h2 class="info-page-head__subtitle">
        Still have Questions - Comments ?
      </h2>
      <router-link to="/contact" class="info-page-head__btn">Contact us</router-link>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.info-page-head {
  padding: 100px 0 40px;
  text-align: center;
  margin-top: -66px;
}
.info-page-head__title {
  font-size: 36px;
  line-height: 48px;
  margin: 0;
}
.info-page-head__subtitle {
  font-size: 14px;
  line-height: 20px;
  margin: 16px 0;
}
.info-page-head__btn {
  border-radius: 4px;
  background-color: var(--blue-color);
  height: 40px;
  width: 123px;
  font-weight: 600;
  font-size: 14px;
  color: #FBFAFC;
  display: block;
  margin: auto;
  line-height: 40px;
}
</style>
