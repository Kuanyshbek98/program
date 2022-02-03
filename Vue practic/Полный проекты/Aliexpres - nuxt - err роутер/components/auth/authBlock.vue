<template>
  <div class="auth__block">
    <Logo class="auth__logo" v-if="change" />
    <BackIcon class="auth__back" v-if="!change" @click="backBtn" />
    <CloseIcon class="auth__close flex" @click="$store.commit('authClose', true)" />
    <h2 class="auth__title" v-if="change">
      {{tabsActive ? 'Добро пожаловать!' : 'С возвращением!'}}
    </h2>
    <div class="auth__tabs flex" v-if="change">
      <button class="auth__tab-registration" :class="{'auth__tab-active':tabsActive}" @click="tabChange">Регистрация</button>
      <button class="auth__tab-authorization" :class="{'auth__tab-active':!tabsActive}" @click="tabChange">Вход</button>
    </div>
    <component v-bind:is="componentName" class="auth_component"></component>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Logo from '~~/assets/svg/logo.svg?inline'
import BackIcon from '~~/assets/svg/back.svg?inline'
import CloseIcon from '~~/assets/svg/close-icon.svg?inline'
export default {
  data () {
    return {
      tabsActive: true
    }
  },
  computed: {
    ...mapState({
      change: state => state.change,
      componentName: state => state.componentName,
      passwordRecovery: state => state.passwordRecovery
    })
  },
  methods: {
    tabChange () {
      if (this.tabsActive) {
        this.$store.commit('componentChange', 'AuthorizationBlock')
        this.tabsActive = false
      } else {
        this.$store.commit('componentChange', 'RegistrationBlock')
        this.tabsActive = true
      }
    },
    backBtn () {
      if (this.componentName === 'PasswordRecovery') {
        this.$store.commit('componentChange', 'AuthorizationBlock')
      }
      if (this.componentName === 'PasswordChange') {
        this.$store.commit('componentChange', 'PasswordRecovery')
      }
      if (this.componentName === 'CodeConfirm') {
        this.passwordRecovery
          ? this.$store.commit('componentChange', 'PasswordRecovery')
          : this.$store.commit('componentChange', 'RegistrationBlock')
      }
    }
  },
  components: {
    Logo,
    BackIcon,
    CloseIcon,
    RegistrationBlock: () => ({
      component: import('~~/components/auth/registrationBlock')
    }),
    AuthorizationBlock: () => ({
      component: import('~~/components/auth/authorizationBlock')
    }),
    PasswordRecovery: () => ({
      component: import('~~/components/auth/passwordRecovery.vue')
    }),
    PasswordChange: () => ({
      component: import('~~/components/auth/passwordChange.vue')
    }),
    CodeConfirm: () => ({
      component: import('~~/components/auth/codeConfirm.vue')
    })
  }
}
</script>

<style scoped>
.auth__block {
  width: 440px;
  padding: 20px;
  border-radius: 12px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 4;
  transform: translate(-50%, -50%);
  background: #ffffff;
  color: #1f1f1f;
  font-size: 16px;
  max-height: 80vh;
  overflow: auto;
}
.auth__component::-webkit-scrollbar {
  display: none;
}
.auth__logo {
  margin: 5px 0 10px 5px;
  transform: scale(1.5);
}
.auth__back{
  margin: 0px 0 10px 0px;
  padding: 10px;
  width: 48px;
  height: 48px;
  background: #FFFFFF;
  border: 0.33px solid #E1E1E1;
  box-sizing: border-box;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 50% 50%;
}
.auth__close {
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  transform: scale(1.2);
}
.auth__tabs{
  border-radius: 20px;
}
.auth__tab-registration, .auth__tab-authorization{
  width: 50%;
  color: #919191;
  border-radius: 20px 0px 0px 20px;
}
.auth__tab-authorization{
  border-radius: 0px 20px 20px 0px;
}
.auth__tab-active{
  font-weight: 600;
  background: #FFFFFF;
  color: #1F1F1F;
  border: 0.5px solid #E1E1E1;
}
</style>
