<template>
  <div class="password auth">
    <h2 class="auth__title password__title">New password</h2>
    <p class="auth__text password__text">
      The new password should be: <br>
      - 1 digit; - 1 capital letter
    </p>
    <form @submit.prevent="onSubmit()" ref="block" class="password__form password-form auth-form">
      <div class="password-form__input-block auth-form__input-block">
        <input required inputmode="email" id="password" type="password" v-model="password" class="password-form__input auth-form__input"/>
        <label for="password" class="password-form__label auth-form__label">Password</label>
      </div>
      <div class="password-form__input-block auth-form__input-block">
        <input required inputmode="email" id="recent-password" type="password" v-model="recentPassword" class="password-form__input auth-form__input"/>
        <label for="recent-password" class="password-form__label auth-form__label">Repeat password</label>
      </div>
      <div class="password-form__bottom auth-form__bottom flex">
        <router-link class="signin__link auth__link" to="/auth/verification">Back</router-link>
        <button class="password-form__btn auth-form__btn">Ready</button>
      </div>
    </form>
  </div>
</template>

<script>

import Cookies from 'js-cookie'

export default {
  data() {
    return {
      password: '',
      recentPassword: ''
    }
  },
  methods: {
    async onSubmit () {
      await this.$api.post('/user/restore-password', {
        password: this.password,
      })
        .then((response) => {
          this.$toast.success('Welcome')
          Cookies.set('clagme-type', response.data.data.type)
          Cookies.set('clagme-tk', response.data.data.token)
          Cookies.set('clagme-chtk', response.data.data.chat_token)
          Cookies.set('clagme-uid', response.data.data.id)
          this.$store.dispatch('getToken', response.data.data.token)
          this.$store.dispatch('getType', response.data.data.type)
          this.$store.dispatch('getProfile')
          switch (response.data.data.type) {
            case 'user':
              this.$router.push('/deals')
              break
            case 'employee':
              this.$router.push('/search')
              break
            case 'admin':
              this.$router.push('/admin/statistics')
              break
          }
        })
        .catch((e) => {
          if (e.response) {
            console.log(e.response.data)
            this.$toast.error(e.response.data.message)
          }
        })
    }
  },
  components: {},
};
</script>

<style scoped src="@/assets/css/auth.css"></style>

<style scoped>
.password__title {
  margin-top: 0;
}
.password__integrate svg {
  margin-right: 12px;
}
</style>
