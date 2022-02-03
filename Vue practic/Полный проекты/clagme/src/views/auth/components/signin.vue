<template>
  <div class="signin auth">
    <div class="auth__header">
      <p class="auth__header-text">Authorization</p>
      <TabBlock/>
    </div>
    <h2 class="auth__title signin__title">Welcome Back!</h2>
    <p class="auth__text signin__text">
      New user?
      <router-link to="join-us" class="signin__link auth__link"
      >Create an acount
      </router-link>
    </p>
    <form @submit.prevent="onSubmit()" class="signin__form signin-form auth-form">
      <div class="signin-form__input-block auth-form__input-block">
        <input required inputmode="email" id="email" type="email" v-model="email" class="signin-form__input auth-form__input"/>
        <label for="email" class="signin-form__label auth-form__label">Email address</label>
      </div>
      <div class="signin-form__input-block auth-form__input-block">
        <input required inputmode="text" id="password" type="password" v-model="password" class="signin-form__input auth-form__input"/>
        <label for="password" class="signin-form__label auth-form__label">Password</label>
      </div>
      <div class="signin-form__bottom auth-form__bottom flex">
        <router-link class="signin__link auth__link" to="/auth/forgot">Forgot password?</router-link>
        <button class="signin-form__btn auth-form__btn">Sign In</button>
      </div>
    </form>
    <div class="auth__line signin__line">
      or
    </div>
    <a @click="handleClickLogin()" class="signin__integrate">
      <GoogleIcon/>
      Sign in with Google </a>
    <a class="signin__integrate">
      <FacebookIcon/>
      Sign in with Facebook </a>
    <p class="signin__policy">
      Protected by reCAPTCHA and subject to the Google
      <router-link class="signin__policy-link" to="/">Privacy Policy</router-link>
      and
      <router-link class="signin__policy-link" to="/">Terms of Service.</router-link>
    </p>
  </div>
</template>

<script>
import Cookies from 'js-cookie'

import GoogleIcon from "@/assets/svg/google.svg?inline";
import FacebookIcon from "@/assets/svg/facebook.svg?inline";

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      await this.$api.post('/user/login', {
        email: this.email,
        password: this.password
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
            this.$toast.error(e.response.data.message)
          }
        })
    },
    async handleClickLogin() {
      this.$gAuth
        .getAuthCode()
        .then(async authCode => {
          //on success
          let data = "";
          // const data = {
          //   code: authCode,
          //   redirect_uri: "https://tlh59.csb.app/",
          //   client_id:
          //     "974972382034-sdm1v6gfd9mh4gc902ebb1gtngaaopdo.apps.googleusercontent.com",
          //   client_secret: "clipAds9CayVwGptgiv78Y8U",
          //   grant_type: "authorization_code",
          //   scopes: ""
          // }

          data += `client_id=731993572925-orbm2glb2r6cklruatrmjhbh15pml3ib.apps.googleusercontent.com&`
          data += `client_secret=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&`
          data += `redirect_uri=postmessage&`
          data += `grant_type=authorization_code`
          data += `code=${authCode}&`

          // const response = await fetch(`https://lebit.free.beeceptor.com`, {
          //   // const response = await fetch(`www.googleapis.com/oauth2/v4/token`, {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/x-www-form-urlencoded"
          //   },
          //   body: data
          // });
          // console.log("authCode", authCode);
          // console.log("response", response);
          console.log('data', data)
          await this.$api.post('/user/social/google', {
            client_id: '731993572925-orbm2glb2r6cklruatrmjhbh15pml3ib.apps.googleusercontent.com',
            client_secret: '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',
            redirect_uri: 'http://localhost:8080/auth/callback',
            grant_type: 'authorization_code',
            token: authCode
          })
            .then((ressponse) => {
              console.log(ressponse)
            })
            .catch((e) => {
              console.log(e.ressponse.data)
            })
        })
        .catch(error => {
          //on fail do something
          console.log(error)
        })
    },
    handleClickSignIn() {
      this.$gAuth
        .signIn()
        .then(GoogleUser => {
          //on success do something
          console.log('GoogleUser', GoogleUser)
          console.log('getId', GoogleUser.getId())
          console.log('getBasicProfile', GoogleUser.getBasicProfile())
          console.log('getAuthResponse', GoogleUser.getAuthResponse())
          console.log(
            'getAuthResponse',
            this.$gAuth.GoogleAuth.currentUser.get().getAuthResponse()
          )
          this.isSignIn = this.$gAuth.isAuthorized
        })
        .catch(error => {
          //on fail do something
          console.log(error)
        })
    },
    authProvider(provider) {
      let self = this;
      this.$auth.authenticate(provider).then(response => {
        self.socialLogin(provider,response)
      }).catch(err => {
        console.log({err:err})
      })
    },
    socialLogin(provider,response) {
      this.$api.post('/social/'+provider, response).then(response => {
        return response.data.token;
      }).catch(err => {
        console.log({err:err})
      })
    }
  },
  components: {
    GoogleIcon,
    FacebookIcon,
    TabBlock: () => ({
      component: import('./tabs.vue'),
    }),
  },
}
</script>

<style scoped src="@/assets/css/auth.css"></style>

<style scoped>
.signin__integrate {
  background: #ffffff;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signin__integrate {
  margin-bottom: 16px;
}

.signin__integrate svg {
  margin-right: 12px;
}

.signin__policy {
  margin-top: 28px;
}

.signin__policy-link {
  color: var(--blue-color);
}
</style>
