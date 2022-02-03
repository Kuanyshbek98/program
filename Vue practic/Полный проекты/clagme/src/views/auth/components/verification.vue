<template>
  <div class="verification auth">
    <h2 class="auth__title verification__title">Email Verification</h2>
    <p class="auth__text verification__text">
      We are delighted that you made the decision clagging with us. You will get
      a confirmation email with a verification code shortly.
    </p>
    <form @submit.prevent="create()" ref="block" class="verification__code flex">
      <input @keydown="onKeyDown(0)" maxlength="1" inputmode="numeric" required type="number" class="verification__input">
      <input @keydown="onKeyDown(1)" maxlength="1" inputmode="numeric" required type="number" class="verification__input">
      <input @keydown="onKeyDown(2)" maxlength="1" inputmode="numeric" required type="number" class="verification__input">
      <input @keydown="onKeyDown(3)" maxlength="1" inputmode="numeric" required type="number" class="verification__input">
    </form>
    <div class="verification__action flex">
      <a @click="$router.go(-1)">Back</a>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      block: null,
      next: false
    }
  },
  methods: {
    onKeyDown (index) {
      setTimeout(() => {
        if (this.block[index].value.length === 1) {
          this.block[(index + 1) % 4].select()
        } else if (this.block[index].value.length > 1) {
          this.block[(index) % 4].value.slice(0, 1)
        }
        if (index === 3) {
          this.create()
        }
      }, 10)
    },
    async create () {
      let code = ''
      this.block.forEach((value) => {
        code += value.value
      })
      await this.$api.post('/user/verify', {
        code
      })
        .then((response) => {
          Cookies.set('clagme-tk', response.data.message.token)
          if (this.$route.query.type === 'forgot') {
            this.$router.push('/auth/password')
            return
          }
          this.$toast.success('Welcome!')
          Cookies.set('clagme-type', response.data.message.type)
          Cookies.set('clagme-chtk', response.data.message.chat_token)
          Cookies.set('clagme-uid', response.data.message.id)
          this.$store.dispatch('getToken', response.data.message.token)
          this.$store.dispatch('getType', 'user')
          this.$store.dispatch('getProfile')
          this.$router.push(response.data.message.type === 'user' ? '/resume' : '/search')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    },
  },
  components: {},
  mounted () {
    if (!Cookies.get('clagme-tk')) {
      this.$router.push('/auth/sign-in')
    }
    this.block = this.$refs.block.children
  }
}
</script>

<style scoped src="@/assets/css/auth.css"></style>

<style scoped>
.verification__title {
  margin-top: 0;
}
.verification__code {
  margin: 36px 0 48px;
  font-weight: 600;
  font-size: 36px;
  line-height: 48px;
}
.verification__input {
  width: 78px;
  border: 1px solid #EBEAED;
  box-sizing: border-box;
  border-radius: 4px;
  height: 96px;
  text-align: center;
}
</style>
