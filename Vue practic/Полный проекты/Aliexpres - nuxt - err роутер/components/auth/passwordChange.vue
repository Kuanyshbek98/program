<template>
  <div class="password">
    <h2 class="password__title">Придумайте новый пароль</h2>
      <form action="" class="password__form"  @submit.prevent="passwordChange">
      <div class="password__block">
        <div class="password__item flex">
          <LockIcon class="password__icon-lock" :class="{'password__icon path':password}" />
          <input
            :type="visibilePassword"
            maxlength="12"
            minlength="6"
            @input="inputChange"
            class="password__input"
            v-model="password"
            placeholder="Введите ваш номер"
            required />
          <component :is="componentPassword" class="password__icon-change" @click="changePassword"></component>
        </div>
        <div class="password__item flex">
          <LockIcon class="password__icon-lock" :class="{'password__icon path':passwordConfirm}" />
          <input
            :type="visibileConfirm"
            maxlength="12"
            minlength="6"
            @input="inputChange"
            class="password__input"
            :class="{'password__input-error':passwordError}"
            v-model="passwordConfirm"
            placeholder="Повторите новый пароль"
            required />
          <component :is="componentConfirm" class="password__icon-change" @click="changeConfirm"></component>
        </div>
      </div>
      <button type="submit" :class="{'main-btn': passwordBtn, 'password__botton': !passwordBtn}">Сохранить</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import LockIcon from '~~/assets/svg/lock.svg?inline'
import PasswordVisible from '~~/assets/svg/password-visible.svg?inline'
import PasswordHidden from '~~/assets/svg/password-hidden.svg?inline'
export default {
  data () {
    return {
      password: '',
      passwordConfirm: '',
      visibilePassword: 'text',
      visibileConfirm: 'text',
      componentPassword: 'PasswordVisible',
      componentConfirm: 'PasswordVisible',
      passwordBtn: false,
      passwordError: false
    }
  },
  computed: {
    ...mapState({
      phone: state => state.phone
    })
  },
  components: {
    LockIcon,
    PasswordVisible,
    PasswordHidden
  },
  methods: {
    inputChange () {
      if (this.password.length === 12 && this.passwordConfirm.length === 12) {
        this.passwordBtn = true
      }
    },
    changeConfirm () {
      if (this.visibileConfirm === 'text') {
        this.visibileConfirm = 'password'
        this.componentConfirm = 'PasswordHidden'
      } else {
        this.visibileConfirm = 'text'
        this.componentConfirm = 'PasswordVisible'
      }
    },
    changePassword () {
      if (this.visibilePassword === 'text') {
        this.visibilePassword = 'password'
        this.componentPassword = 'PasswordHidden'
      } else {
        this.visibilePassword = 'text'
        this.componentPassword = 'PasswordVisible'
      }
    },
    async passwordChange () {
      if (this.password === this.passwordConfirm) {
        await this.$api.post('/api/user/password/reset', {}, {
          params: {
            password: this.password,
            phone: this.phone
          }
        })
          .then(() => {
            this.$toast.success('Успешно изменил пароль')
            this.$store.commit('componentChange', 'AuthorizationBlock')
          })
          .catch(e => this.$toast.error(e.response))
      } else {
        this.$toast.error('Повторите пароль не совпадает')
        this.passwordError = true
      }
    }
  }
}
</script>

<style scoped>
.password__block{
  margin: 20px 0;
  padding: 5px 15px;
  background: #FFFFFF;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  line-height: 144%;
}
.password__item{
  position: relative;
}
.password__input{
  width: 100%;
  min-height: 50px;
  margin: 5px 0;
  padding: 5px 40px;
  border-radius: 10px;
  background: none;
  position: static;
  z-index: 1;
}
.password__input-error{
  border: 1px solid red;
}
.password__icon-lock{
  cursor: pointer;
  position: absolute;
  left: 10px;
  z-index: 0;
}
.password__icon-change{
  cursor: pointer;
  position: absolute;
  right: 10px;
  z-index: 2;
}
.password__icon path{
  fill: #1F1F1F;
}
.password__botton{
  background: #E1E1E1;
  border-radius: 8px;
  line-height: 132%;
  color: #FFFFFF;
  width: 100%;
  font-weight: 600;
}
</style>
