<template>
  <div class="confirm">
    <h2 class="confirm__title">Введите код из SMS</h2>
    <p class="confirm__text">Подтвердите что вы владелец данного номера</p>
      <form action="" class="confirm__form" @submit.prevent="confirmSubmit">
      <label ref="code" class="confirm__block">
        <input
          class="confirm__input"
          maxlength="1"
          type="numeric"
          placeholder="·"
          @focus="onFocus(1)"
        >
        <input
          class="confirm__input"
          maxlength="1"
          type="numeric"
          placeholder="·"
          @focus="onFocus(2)"
        >
        <input
          class="confirm__input"
          maxlength="1"
          type="numeric"
          placeholder="·"
          @focus="onFocus(3)"
        >
        <input
          class="confirm__input"
          maxlength="1"
          type="numeric"
          placeholder="·"
          @focus="onFocus(4)"
          @input="accept()"
        >
      </label>
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
      code: ''
    }
  },
  computed: {
    ...mapState({
      phone: state => state.phone,
      data: state => state.data,
      passwordRecovery: state => state.passwordRecovery
    })
  },
  mounted () {
    this.input = this.$refs.code.children
    document.addEventListener('keyup', this.keyup)
    this.input[0].select()
  },
  beforeDestroy () {
    document.removeEventListener('keyup', this.keyup)
  },
  methods: {
    onFocus (index) {
      this.count = index
    },
    keyup (e) {
      const { key } = e
      if (parseInt(key) >= 0 && parseInt(key) <= 9) {
        this.input[this.count % 4].select()
      }
    },
    async accept () {
      this.code = ''
      for (let i = 0; i < this.input.length; i++) {
        this.code += this.input[i].value
      }
      if (this.data) {
        await this.confirmSubmit()
      } else {
        this.$toast.success('Заполните поле')
        this.accept()
      }
    },
    async confirmSubmit () {
      const formData = new FormData()
      formData.append('phone', this.phone)
      formData.append('code', this.code)
      if (this.passwordRecovery) {
        await this.$api.post('/api/user/password/reset/check-code', formData)
          .then(() => {
            this.$store.commit('componentChange', 'PasswordChange')
          })
          .catch(e => this.$toast.error(e.response.data))
      } else {
        await this.$api.post('/api/user/register/check', formData)
          .then(() => {
            this.registration()
          })
          .catch(e => this.$toast.error(e.response.data))
      }
    },
    async registration () {
      await this.$api.post('/api/user/register', this.data)
        .then((response) => {
          this.$toast.success('Вы зарегистрированы')
          this.$cookies.set('alt', response.data.access_token)
          this.$store.commit('isAuth', true)
        })
        .catch(e => this.$toast.error(e.response.data))
    }
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
