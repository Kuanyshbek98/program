<template>
  <header class="header">
    <div class="header__content container flex">
      <div class="header__left flex">
        <router-link to="/" class="header__logo">
          <Logo />
        </router-link>
        <div class="header__cats">
          <button class="header__cats-btn" @click="showCats =! showCats">
            Категории
            <ArrowDownIcon />
          </button>
          <ul v-if="showCats" class="header__cats-items">
            <li v-for="pos,i in 3" :key="i" @click="showsubCats=!showsubCats" class="flex">
              <div class="flex">
                <IPhoneX v-if="showsubCats" />
                <IPhoneXActive  v-if="!showsubCats" />
                <p class="header__cats-name">Смартфоны и гаджеты</p>
              </div>
              <ArrowDownIcon v-if="showsubCats" class="header__cats-icon" />
              <ArrowDownIconPassive v-if="!showsubCats" class="header__cats-icon" />
            </li>
          </ul>
          <div v-if="showsubCats" class="header__subcats flex">
            <ul class="header__subcats-items">
              <li class="header__subcats-item">
                <h3>Смартфоны и телефоны</h3>
                <p>Смартфоны Apple</p>
                <p>Смартфоны Samsung</p>
              </li>
              <li class="header__subcats-item">
                <h3>Планшеты и электронные книги</h3>
                <p>Планшеты</p>
                <p>Планшеты Apple Ipad</p>
              </li>
            </ul>
            <ul class="header__subcats-items">
              <li class="header__subcats-item">
                <h3>Смартфоны и телефоны</h3>
              </li>
              <li class="header__subcats-item">
                <h3>Планшеты и электронные книги</h3>
                <p>Планшеты</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <form class="header__form">
        <input type="text" class="header__input" placeholder="Искать товар">
        <a class="header__form-btn"><SearchIcon /></a>
      </form>
      <ul class="header__menu flex">
        <li class="header__item">
          <router-link to="/"><CartIcon /></router-link>
        </li>
        <li class="header__item">
          <router-link to="/"><ChatIcon /></router-link>
        </li>
        <li class="header__item auth">
          <button class="auth__icon" @click="profileShow"><AuthIcon /></button>
          <AuthBlock v-if="authShow" />
          <background :show="authShow" @hide="$store.commit('authClose', $event)"></background>
        </li>
      </ul>
    </div>
    <background :show="showCats" @hide="showCats = !$event, showsubCats = !$event" :zIndex="2" :top="null"></background>
  </header>
</template>

<script>
import { mapState } from 'vuex'

import Logo from '~~/assets/svg/logo.svg?inline'
import SearchIcon from '~~/assets/svg/search.svg?inline'
import CartIcon from '~~/assets/svg/cart.svg?inline'
import ChatIcon from '~~/assets/svg/chat.svg?inline'
import AuthIcon from '~~/assets/svg/auth.svg?inline'
import ArrowDownIcon from '~~/assets/svg/arrow-down.svg?inline'
import ArrowDownIconPassive from '~~/assets/svg/arrow-down-passive.svg?inline'
import IPhoneX from '~~/assets/svg/iPhone-X.svg?inline'
import IPhoneXActive from '~~/assets/svg/iPhone-X-active.svg?inline'
import AuthBlock from '~~/components/auth/authBlock.vue'
export default {
  data () {
    return {
      showCats: false,
      showsubCats: false
    }
  },
  computed: {
    ...mapState({
      authShow: state => state.authShow,
      profile: state => state.profile
    })
  },
  methods: {
    profileShow () {
      if (this.profile) {
        console.log('profile')
      } else {
        this.authShow === false
          ? this.$store.commit('authClose', false)
          : this.$store.commit('authClose', true)
      }
    }
  },
  components: {
    Logo,
    SearchIcon,
    CartIcon,
    ChatIcon,
    AuthIcon,
    ArrowDownIcon,
    ArrowDownIconPassive,
    IPhoneX,
    IPhoneXActive,
    AuthBlock
  }
}
</script>

<style scoped>
.header{
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  z-index: 3;
  background-color: #fff;
}
.header__content {
  padding: 8px 0;
}
.header__cats {
  margin-left: 48px;
}
.header__cats-btn{
  width:138px;
  height:34px;
  background: #F8F8F8;
  border-radius: 20px;
  position: relative;
}
.header__cats-items{
  width: 360px;
  padding: 10px 20px;
  background: #FFFFFF;
  box-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13);
  border-radius: 0px 0px 8px 8px;
  position: absolute;
  left: 90px;
  top: 100%;
  z-index: 3;
}
.header__cats-name{
  margin-left: 15px;
}
.header__cats-icon{
    transform: rotate(270deg);
}
.header__subcats{
  width: 544px;
  padding: 10px 20px;
  background: #FFFFFF;
  box-shadow: 0px 1.2px 3.6px rgba(0, 0, 0, 0.1), 0px 6.4px 14.4px rgba(0, 0, 0, 0.13);
  border-radius: 0px 0px 8px 8px;
  position: absolute;
  align-items: flex-start;
  left: 490px;
  top: 100%;
  z-index: 3;
}
.header__subcats-items{
  padding: 10px 5px;
}
.header__subcats-item{
  margin-bottom: 50px;
}
.header__form {
  width: 480px;
  position: relative;
}
.header__input {
  width: 100%;
  text-align: center;
  position: relative;
  border: 0.5px solid #E1E1E1;
  border-radius: 8px;
}
.header__form-btn {
  top: 11px;
  position: absolute;
  left: calc(50% - 65px);
}
.header__item {
  margin-left: 29px;
}
.auth__icon{
  background-color: transparent;
}
</style>
