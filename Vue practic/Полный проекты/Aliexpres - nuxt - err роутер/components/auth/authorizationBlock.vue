<template>
  <div class="authorization">
      <form action="" class="authorization__form" @submit.prevent="authorizationSubmit">
      <div class="authorization__block">
        <div class="authorization__item flex">
          <PhoneIcon class="authorization__input-icon" :class="{'authorization__icon path':phone}" />
          <TheMask
            @input="inputChange"
            class="authorization__input"
            v-model="phone"
            placeholder="Введите ваш номер"
            mask="+7 (###) ###-##-##"
            required />
          <ClearIcon v-if="phone" class="authorization__input-clear" @click="phone='', inputChange()" />
        </div>
        <div class="authorization__item flex">
          <LockIcon class="authorization__input-icon" :class="{'authorization__icon path':password}" />
          <input
          class="authorization__input"
          :type="changeType"
          placeholder="Введите пароль"
          minlength="6"
          maxlength="15"
          v-model="password"
          @input="inputChange"
          required />
          <component :is="componentName" class="registration__input-password" @click="showPassword"></component>
        </div>
      </div>
      <button
        class="authorization__btn"
        @click="$store.commit('componentChange', 'PasswordRecovery')" >Я забыл пароль. Хочу восстановить</button>
      <button type='submit' :class="{'main-btn': authorizationBtn, 'authorization__botton': !authorizationBtn}">Войти</button>
    </form>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'

import ClearIcon from '~~/assets/svg/clear.svg?inline'
import PhoneIcon from '~~/assets/svg/iPhone.svg?inline'
import LockIcon from '~~/assets/svg/lock.svg?inline'
import PasswordVisible from '~~/assets/svg/password-visible.svg?inline'
import PasswordHidden from '~~/assets/svg/password-hidden.svg?inline'
export default {
  data () {
    return {
      inputActive: false,
      phone: '',
      password: '',
      changeType: 'text',
      authorizationBtn: false,
      componentName: 'PasswordVisible'
    }
  },
  components: {
    ClearIcon,
    PhoneIcon,
    LockIcon,
    TheMask,
    PasswordVisible,
    PasswordHidden
  },
  methods: {
    inputChange () {
      if (this.phone && this.password) {
        this.authorizationBtn = true
      } else {
        this.authorizationBtn = false
      }
    },
    async authorizationSubmit () {
      const formData = new FormData()
      formData.append('phone', this.phone)
      formData.append('password', this.password)
      await this.$api.post('/api/user/login/', formData)
        .then((response) => {
          this.$toast.success('Успешно')
          this.$cookies.set('alt', response.data.access_token)
          this.$store.commit('isAuth', true)
        })
        .catch(e => this.$toast.error(e.response.data))
    },
    showPassword () {
      if (this.changeType === 'text') {
        this.changeType = 'password'
        this.componentName = 'PasswordHidden'
      } else {
        this.changeType = 'text'
        this.componentName = 'PasswordVisible'
      }
    }
  }
}
</script>

<style scoped>
.authorization__block{
  margin: 20px 0;
  padding: 5px 15px;
  background: #FFFFFF;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  line-height: 144%;
}
.authorization__item{
  position: relative;
}
.authorization__input{
  width: 100%;
  min-height: 50px;
  margin: 5px 0;
  padding: 5px 40px;
  border-radius: 10px;
  background: none;
  position: static;
  z-index: 1;
}
.authorization__input-icon{
  cursor: pointer;
  position: absolute;
  left: 10px;
  z-index: 0;
}
.authorization__input-clear{
  cursor: pointer;
  position: absolute;
  right: 10px;
  z-index: 2;
}
.registration__input-password{
  cursor: pointer;
  position: absolute;
  right: 5px;
  z-index: 2;
}
.authorization__icon path{
  fill: #1F1F1F;
}
.authorization__btn{
  color: #5D9A05;
  background: transparent;
  display: block;
  margin: auto;
  margin-bottom: 20px;
}
.authorization__botton{
  background: #E1E1E1;
  border-radius: 8px;
  line-height: 132%;
  color: #FFFFFF;
  width: 100%;
  font-weight: 600;
}
</style>
