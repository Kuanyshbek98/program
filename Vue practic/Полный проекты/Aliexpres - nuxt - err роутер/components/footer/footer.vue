<template>
  <footer class="footer">
    <div class="container flex footer__content">
      <div class="footer__left">
        <ul class="footer__menu">
          <li class="footer__item">
            <router-link to="/">Доставка и оплата</router-link>
          </li>
          <li class="footer__item">
            <router-link to="/">Возврат и гарантии</router-link>
          </li>
          <li class="footer__item">
            <router-link to="/">Оферта</router-link>
          </li>
          <li class="footer__item">
            <router-link to="/">Связаться с администрацией</router-link>
          </li>
        </ul>
      </div>
      <div class="footer__middle">
        <router-link to="/"><LogoIcon /></router-link>
      </div>
      <div class="footer__right">
        <div class="footer__fight-links"></div>
      </div>
    </div>
  </footer>
</template>

<script>
import LogoIcon from '~~/assets/svg/logo.svg?inline'
export default {
  components: {
    LogoIcon
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--main-color);
  padding: 48px 0;
  color: #FFFFFF;
}
.footer__item {
  font-weight: 500;
  font-size: 16px;
  line-height: 144%;
}
.footer__item:not(:last-child) {
  margin-bottom: 8px;
}
</style>
