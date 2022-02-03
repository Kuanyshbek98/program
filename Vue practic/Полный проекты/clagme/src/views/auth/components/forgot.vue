<template>
  <div class="forgot auth">
    <h2 class="auth__title forgot__title">Password recovery</h2>
    <p class="auth__text forgot__text">
      Restoring access is possible only if you have your mail
    </p>
    <form @submit.prevent="onSubmit()" ref="block" class="forgot__form forgot-form auth-form">
      <div class="forgot-form__input-block auth-form__input-block">
        <input required inputmode="email" id="email" type="email" v-model="email" class="forgot-form__input auth-form__input"/>
        <label for="email" class="forgot-form__label auth-form__label">Email address</label>
      </div>
      <div class="forgot-form__bottom auth-form__bottom flex">
        <router-link class="signin__link auth__link" to="/auth/sign-in">Back</router-link>
        <button class="forgot-form__btn auth-form__btn">Sign In</button>
      </div>
    </form>
  </div>
</template>

<script>

import Cookies from 'js-cookie'

export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    async onSubmit () {
      await this.$api.post('/user/resend-code', {
        email: this.email
      })
        .then((response) => {
          this.$toast.success('A message has been sent to you')
          Cookies.set('clagme-tk', response.data.data.token)
          this.$router.push('/auth/verification?type=forgot')
        })
        .catch((e) => {
          if (e.response) {
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
.forgot__title {
  margin-top: 0;
}
.forgot__integrate {
  background: #ffffff;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.forgot__integrate {
  margin-bottom: 16px;
}

.forgot__integrate svg {
  margin-right: 12px;
}

.forgot__policy {
  margin-top: 28px;
}

.forgot__policy-link {
  color: var(--blue-color);
}
</style>
