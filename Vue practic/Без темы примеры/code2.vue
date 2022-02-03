<template>
  <div class="confirm">
    <h2 class="confirm__title">Введите код из SMS</h2>
    <p class="confirm__text">Подтвердите что вы владелец данного номера</p>
      <form action="" class="confirm__form" @submit.prevent="confirmSubmit">
      <div class="confirm__block">
          <input
            class="confirm__input"
            id="one"
            type="numeric"
            v-model="code1"
            @focus.exact="inputChange($event,'one')"
            @input.exact="inputChange($event,'two')" />
          <input
            class="confirm__input"
            id="two"
            type="numeric"
            v-model="code2"
            @focus="inputChange($event,'two')"
            @input="inputChange($event,'three')" />
          <input
            class="confirm__input"
            id="three"
            type="numeric"
            v-model="code3"
            @focus="inputChange($event,'three')"
            @input="inputChange($event,'three', 'four')" />
          <input
            class="confirm__input"
            id="four"
            type="numeric"
            v-model="code4"
            @focus="inputChange($event,'four')"
            @input="inputChange($event,'four')" />
      </div>
      <p class="confirm__text">Отправим вам повторный смс через 00:56,</p>
      <p class="confirm__text">если <button class="confirm__error">код не пришел</button>
      </p>
      <button type="submit" :class="{'main-btn': confitmBtn, 'confirm__botton': !confitmBtn}">Готово</button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      confitmBtn: false,
      code1: '',
      code2: '',
      code3: '',
      code4: '',
      codeAll: ''
    }
  },
  computed: {
    ...mapState({
      phone: state => state.phone,
      data: state => state.data,
      passwordRecovery: state => state.passwordRecovery
    })
  },
  methods: {
    inputChange (e, self, next = self) {
      if (e.target.value.length > 0) {
        if (e.target.value.length === 1) {
          document.querySelector(`#${next}`).select()
        } else {
          this.code1 = this.code1.slice(0, 1)
          this.code2 = this.code2.slice(0, 1)
          this.code3 = this.code3.slice(0, 1)
          this.code4 = this.code4.slice(0, 1)
        }
        if (self === 'four') {
          this.confirmSubmit()
        }
      }
      this.code1 && this.code2 && this.code3 && this.code4 ? this.confitmBtn = true : this.confitmBtn = false
    },
    async confirmSubmit () {
      if (this.code1 && this.code2 && this.code3 && this.code4) {
        this.codeAll = this.code1 + this.code2 + this.code3 + this.code4
        const formData = new FormData()
        formData.append('phone', this.phone)
        formData.append('code', this.codeAll)
        if (this.passwordRecovery) {
          await this.$api.post('/api/user/password/reset/check-code', formData)
            .then(() => {
              this.$store.commit('componentChange', 'PasswordChange')
            })
            .catch(e => this.$toast.error(e.response.data))
        } else {
          await this.$api.post('/api/user/register/check', formData)
            .then(() => {
              this.$api.post('/api/user/register', this.data)
                .then((response) => {
                  this.$toast.success('Вы зарегистрированы')
                  this.$cookies.set('alt', response.data.access_token)
                  this.$store.commit('isAuth', true)
                  this.$router.push('/')
                })
                .catch(e => this.$toast.error(e.response.data))
            })
            .catch(e => this.$toast.error(e.response.data))
        }
      } else {
        this.$toast.success('Заполните поле')
      }
    }
  },
  mounted () {
    document.getElementById('one').select()
  }
}
</script>

<style scoped>
.confirm__block{
  display: flex;
  justify-content: center;
  margin: 40px 0;
}
.confirm__text{
  font-weight: 500;
  font-size: 14px;
  line-height: 144%;
  color: #919191;
  margin: 0;
}
.confirm__input{
  width: 48px;
  height: 48px;
  background: #FFFFFF;
  border: 0.5px solid #E1E1E1;
  border-radius: 12px;
  margin: 0px 16px;
  font-weight: 600;
  font-size: 24px;
  padding: 0 15px;
  line-height: 144%;
  text-align: center;
  color: #1F1F1F;
}
.confirm__input:focus{
  box-shadow: 0px 25px 35px rgba(0, 0, 0, 0.05), 0px 0px 5px rgba(0, 0, 0, 0.07);
}
.confirm__error{
  color: #007AFF;
  background: transparent;
  height: auto;
  margin-bottom: 24px;
}
.confirm__botton{
  background: #E1E1E1;
  border-radius: 8px;
  line-height: 132%;
  color: #FFFFFF;
  width: 100%;
  font-weight: 600;
}
</style>
