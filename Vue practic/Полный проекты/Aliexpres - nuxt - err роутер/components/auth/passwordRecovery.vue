<template>
  <div class="recovery">
    <h2 class="recovery__title">Введите номер телефона</h2>
    <p class="recovery__text">Подтвердите что вы владелец данного номера</p>
      <form action="" class="recovery__form"  @submit.prevent="recoverySubmit">
      <div class="recovery__block">
        <div class="recovery__item flex">
          <PhoneIcon class="recovery__input-icon" :class="{'recovery__icon path':phone}" />
          <TheMask
            @input="inputChange"
            class="recovery__input"
            type="tel"
            v-model="phone"
            placeholder="Введите ваш номер"
            mask="+7 (###) ###-##-##"
            requery />
          <ClearIcon v-if="phone" class="recovery__input-clear" @click="phone='', inputChange()" />
        </div>
      </div>
      <button type="submit" :class="{'main-btn': recoveryBtn, 'recovery__botton': !recoveryBtn}">Далше</button>
    </form>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'

import ClearIcon from '~~/assets/svg/clear.svg?inline'
import PhoneIcon from '~~/assets/svg/iPhone.svg?inline'
export default {
  data () {
    return {
      phone: '',
      recoveryBtn: false
    }
  },
  components: {
    ClearIcon,
    PhoneIcon,
    TheMask
  },
  methods: {
    inputChange () {
      if (this.phone) {
        this.recoveryBtn = true
      } else {
        this.recoveryBtn = false
      }
    },
    async recoverySubmit () {
      const formData = new FormData()
      formData.set('phone', this.phone)
      await this.$api.post('/api/user/password/reset/send-code', {}, {
        params: {
          phone: this.phone
        }
      })
        .then(() => {
          this.$store.commit('authPhone', this.phone)
          this.$store.commit('passwordRecovery', true)
          this.$store.commit('componentChange', 'CodeConfirm')
        })
        .catch(e => this.$toast.error(e.response.data))
    }
  }
}
</script>

<style scoped>
.recovery__block{
  margin: 20px 0;
  padding: 5px 15px;
  background: #FFFFFF;
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
  border-radius: 12px;
  line-height: 144%;
}
.recovery__item{
  position: relative;
}
.recovery__input{
  width: 100%;
  min-height: 50px;
  margin: 5px 0;
  padding: 5px 40px;
  border-radius: 10px;
  background: none;
  position: static;
  z-index: 1;
}
.recovery__input-clear{
  cursor: pointer;
  position: absolute;
  right: 10px;
  z-index: 2;
}
.recovery__icon path{
  fill: #1F1F1F;
}
.recovery__input-icon{
  cursor: pointer;
  position: absolute;
  left: 10px;
  z-index: 0;
}
.recovery__botton{
  background: #E1E1E1;
  border-radius: 8px;
  line-height: 132%;
  color: #FFFFFF;
  width: 100%;
  font-weight: 600;
}
</style>
