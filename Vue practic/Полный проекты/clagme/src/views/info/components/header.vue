<template>
  <header class="header">
    <div class="container flex header__content">
      <div class="header__left-block flex">
        <router-link to="/" class="header__logo"><LogoIcon /></router-link>
      </div>
      <div class="header__right-block">
        <ul class="header__right-list right-list flex">
          <li class="right-list__signin">
            <router-link to="/auth/sign-in">Sign in</router-link>
          </li>
          <li class="right-list__signup">
            <router-link to="/auth/join-us">Sign up</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
import LogoIcon from '@/assets/svg/logo.svg?inline'
export default {
  components: {
    LogoIcon,
  },
}
</script>

<style scoped>
.header__content {
  padding: 14px 0;
}
.header__logo {
  margin-right: 64px;
}
.left-list__item {
  line-height: 20px;
}
.left-list__item:first-child {
  margin-right: 40px;
}
.right-list {
  line-height: 20px;
  text-shadow: 0px 0px 0.33px rgba(0, 0, 0, 0.48);
}
.right-list__signin {
  margin-right: 36px;
}
.right-list__signup {
  border: 1px solid var(--primary-color);
  box-sizing: border-box;
  border-radius: 4px;
}
.right-list__signup a {
  display: block;
  padding: 8px 16px;
}
</style>
