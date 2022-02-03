<template>
  <div class="registration">
    <form action="" class="registration__form" @submit.prevent="registrationSubmit">
      <div class="registration__block">
        <div class="registration__item flex">
          <UserIcon class="registration__input-icon" :class="{'registration__icon path':name}" />
          <textarea
            class="registration__textarea"
            type="text"
            v-model="name"
            @input="inputChange"
            placeholder="Нам было бы приятно знать как к вам обращаться"
            required>
          </textarea>
          <ClearIcon v-if="name" class="registration__input-clear" @click="name='', inputChange()" />
        </div>
        <div class="registration__item flex">
          <PhoneIcon class="registration__input-icon" :class="{'registration__icon path':phone}" />
          <TheMask
            class="registration__input"
            type="tel"
            v-model="phone"
            @input="inputChange"
            placeholder="Введите ваш номер"
            mask="+7 (###) ###-##-##"
            required />
          <ClearIcon v-if="phone" class="registration__input-clear" @click="phone='', inputChange()" />
        </div>
        <div class="registration__item flex">
          <CompassIcon class="registration__input-icon" :class="{'registration__icon path':city}" />
          <select
            class="registration__input registration__select"
            v-model="city"
            @change="inputChange"
            required >
            <option disabled value="">Откуда вы?</option>
            <option v-for="(item,index) in cities" :key='index' :value="item.id">{{item.name}}</option>
          </select>
          <SelectIcon class="registration__select-icon" />
        </div>
        <div class="registration__item flex">
          <LockIcon class="registration__input-icon" :class="{'registration__icon path':password}"/>
          <input
            class="registration__input"
            :type="changeType"
            minlength="6"
            maxlength="15"
            v-model="password"
            @input="inputChange"
            placeholder="Введите пароль"
            required />
          <component :is="componentName" class="registration__input-password" @click="showPassword"></component>
        </div>
      </div>
      <div class="registration__politic flex">
          <p class="registration__politic-text">Оформляя заказ, вы принимаете условия <a href="#" class="registration__politic-link">Пользовательского соглашения</a> и даете согласие на обработку персональных данных согласно <a href="#" class="registration__politic-link">Политике Конфиденциальности</a></p>
          <PoliticIcon @click="politicChange" v-if="!politic" />
          <PoliticActive @click="politicChange" v-if="politic" />
      </div>
      <button type='submit' :class="{'main-btn': registrationBtn, 'registration__btn': !registrationBtn}">Регистрация</button>
    </form>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'

import UserIcon from '~~/assets/svg/auth.svg?inline'
import ClearIcon from '~~/assets/svg/clear.svg?inline'
import PhoneIcon from '~~/assets/svg/iPhone.svg?inline'
import CompassIcon from '~~/assets/svg/compass-registration.svg?inline'
import SelectIcon from '~~/assets/svg/select.svg?inline'
import LockIcon from '~~/assets/svg/lock.svg?inline'
import PasswordVisible from '~~/assets/svg/password-visible.svg?inline'
import PasswordHidden from '~~/assets/svg/password-hidden.svg?inline'
import PoliticIcon from '~~/assets/svg/politic.svg?inline'
import PoliticActive from '~~/assets/svg/politic-active.svg?inline'
export default {
  data () {
    return {
      name: '',
      phone: '',
      city: '',
      cities: null,
      password: '',
      politic: false,
      changeType: 'text',
      confirmShow: false,
      inputActive: false,
      registrationBtn: false,
      componentName: 'PasswordVisible'
    }
  },
  components: {
    UserIcon,
    ClearIcon,
    PhoneIcon,
    CompassIcon,
    SelectIcon,
    LockIcon,
    TheMask,
    PasswordVisible,
    PasswordHidden,
    PoliticIcon,
    PoliticActive
  },
  methods: {
    inputChange () {
      if (this.name && this.phone && this.city && this.password && this.politic) {
        this.registrationBtn = true
      } else {
        this.registrationBtn = false
      }
    },
    showPassword () {
      if (this.changeType === 'text') {
        this.changeType = 'password'
        this.componentName = 'PasswordHidden'
      } else {
        this.changeType = 'text'
        this.componentName = 'PasswordVisible'
      }
    },
    politicChange () {
      this.politic ? this.politic = false : this.politic = true
      this.inputChange()
    },
    async registrationSubmit () {
      const formData = new FormData()
      formData.append('phone', this.phone)
      await this.$api.post('/api/user/register/send-code', formData)
        .then(() => {
          this.$store.commit('passwordRecovery', false)
          this.$store.commit('authPhone', this.phone)
          this.$store.commit('componentChange', 'CodeConfirm')
          formData.append('city_id', this.city)
          formData.append('name', this.name)
          formData.append('password', this.password)
          this.$store.commit('registrationData', formData)
        })
        .catch(e => this.$toast.error(e.response.data))
    }
  },
  async mounted () {
    await this.$api.get('/api/cities')
      .then((response) => {
        this.cities = response.data
      })
      .catch(e => this.$toast.error(e.response.data))
  }
}
</script>

<style scoped>
.registration__block{
  margin: 20px 0;
  padding: 5px 15px;
  background: #FFFFFF;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  line-height: 144%;
  }
.registration__item{
  position: relative;
  }
.registration__textarea{
  width: 90%;
  min-height: 50px;
  margin: 5px 0;
  padding: 10px 35px 7px 45px;
  border-radius: 10px;
  height: auto;
  resize: none;
  background: none;
  position: static;
  z-index: 1;
}
.registration__input{
  width: 100%;
  min-height: 50px;
  margin: 5px 0;
  padding: 10px 35px 7px 45px;
  border-radius: 10px;
  background: none;
  position: static;
  z-index: 1;
}
.registration__select{
  appearance: none;
  position: relative;
  z-index: 1;
  background: none;
  color: #838383;
}
.registration__input-icon{
  cursor: pointer;
  position: absolute;
  left: 10px;
  z-index: 0;
}
.registration__input-clear{
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
.registration__select-icon{
  cursor: pointer;
  position: absolute;
  right: 11px;
  z-index: 0;
}
.registration__politic{
  margin: 23px 0;
  align-items: flex-start;
}
.registration__politic-text{
  width: 90%;
  margin: 0;
  padding-right: 30px;
  color: #919191;
}
.registration__politic-link{
  color: #007AFF;
}
.registration__icon path{
  fill: #1F1F1F;
}
.registration__btn{
  background: #E1E1E1;
  border-radius: 8px;
  line-height: 132%;
  color: #FFFFFF;
  width: 100%;
  font-weight: 600;
}
</style>
