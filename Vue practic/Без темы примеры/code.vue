<template>
  <section class="code-page sp auth" :style="{backgroundImage: 'url(' + $url + 'signin.png)'}">
    <div class="container cp__content auth__content flex">
      <div class="cp__instruction auth__instruction">
        <nuxt-link to="/" class="cp__logo auth__logo">
          <Logo />
        </nuxt-link>
        <p class="cp__instruction-text auth__instruction-text">
          {{ $t('login-instructions') }}
        </p>
        <iframe
          class="cp__video auth__video"
          title="vimeo-player"
          src="https://player.vimeo.com/video/327892307?h=17b026ea9d"
          width="640"
          height="640"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="cp__main cp-main auth-main">
        <div class="cp-main__header auth-main__header">
          <p class="cp-main__login auth-main__login">
            {{ $t('confirmation') }}
          </p>
        </div>
        <div class="cp-main__body auth-main__body">
          <p class="cp-main__text auth-main__text" v-html="$t('sent-code')"></p>
          <form class="cp-main__form auth-main__form" @submit.prevent="onSubmit()">
            <div class="cp-main__field auth-main__field">
              <label ref="code" class="cp-main__code-block">
                <input
                  class="cp-main___input"
                  size="1"
                  maxlength="1"
                  max="1"
                  type="text"
                  placeholder="·"
                  @focus="onFocus(1)"
                >
                <input
                  class="cp-main___input"
                  size="1"
                  maxlength="1"
                  max="1"
                  type="text"
                  placeholder="·"
                  @focus="onFocus(2)"
                >
                <input
                  class="cp-main___input"
                  size="1"
                  maxlength="1"
                  max="1"
                  type="text"
                  placeholder="·"
                  @focus="onFocus(3)"
                >
                <input
                  class="cp-main___input"
                  size="1"
                  maxlength="1"
                  max="1"
                  type="text"
                  placeholder="·"
                  @focus="onFocus(4)"
                  @input="accept()"
                >
              </label>
            </div>
            <p class="cp-main__time" :class="{'cp-main__time_active': sec < 1}">
              Повторно отправить <span v-show="sec > 0">через: {{ sec }}с</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { mask } from 'vue-the-mask'

import Logo from '~~/assets/svg/footer-logo.svg?inline'
export default {
  components: {
    Logo
  },
  directives: {
    mask
  },
  layout: 'auth',
  data () {
    return {
      count: 0,
      code: '',
      sec: 59
    }
  },
  head () {
    return {
      title: this.$t('confirmation'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('confirmation')
        }
      ]
    }
  },
  computed: {
    ...mapState([
      'registrationData',
      'forgotData'
    ])
  },
  mounted () {
    this.intervalTime = setInterval(() => {
      this.timer.bind(this)
      this.sec--
    }, 1000)
    this.input = this.$refs.code.children
    document.addEventListener('keyup', this.keyup)
  },
  beforeDestroy () {
    clearInterval(this.intervalTime)
    document.removeEventListener('keyup', this.keyup)
  },
  methods: {
    onFocus (index) {
      this.count = index
    },
    timer () {
      if (this.sec > 0) {
        return '00:' + this.sec > 9 ? this.sec : '0' + this.sec
      }
    },
    keyup (e) {
      const { key } = e
      if (parseInt(key) >= 0 && parseInt(key) <= 9) {
        this.input[this.count % 4].select()
      }
    },
    async accept () {
      this.code = ''
      if (this.loader) {
        return
      }
      this.loader = true
      for (let i = 0; i < this.input.length; i++) {
        this.code += this.input[i].value
      }
      if (this.registrationData) {
        await this.registration()
      } else {
        await this.forgot()
      }
    },
    repeat () {
      if (this.sec > 0) { return }
      this.sec = 59
    },
    async registration () {
      await this.$api.$post('/auth/confirm-register', {
        password: this.registrationData.password,
        isTeacher: this.registrationData.isTeacher,
        phone: this.registrationData.phone,
        firstName: this.registrationData.firstName,
        lastName: this.registrationData.lastName,
        email: this.registrationData.email,
        code: this.code
      })
        .then(() => {
          this.$toast.success(this.$t('You have successfully registered'))
          this.$router.push('/auth/signin')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.data)
            this.loader = false
          }
        })
    },
    async forgot () {
      await this.$api.$post('/auth/' + (this.forgotData.isTeacher ? 'teacher' : 'student') + '/check-code', {
        phone: this.forgotData.phone,
        code: this.code
      })
        .then(() => {
          this.$store.commit('setForgotData', {
            phone: this.forgotData.phone,
            isTeacher: this.forgotData.teacher,
            code: this.code
          })
          this.$router.push('/auth/password')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.data)
            this.loader = false
          }
        })
    }
  }
}
</script>

<style scoped src="~~/assets/css/auth.css">
</style>

<style scoped>
.cp-main__text {
  text-align: center;
}
.cp-main__code-block {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cp-main___input {
  font-weight: 600;
  font-size: 40px;
  line-height: 120%;
  height: 48px;
  width: 32px;
}
.cp-main___input:not(:last-child) {
  margin-right: 46px;
}
.cp-main___input::-webkit-input-placeholder {
  text-transform: uppercase;
  vertical-align: middle;
}
.cp-main__time {
  color: #697896;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  text-align: center;
  margin-bottom: 0;
}
.cp-main__time_active {
  cursor: pointer;
  color: var(--blue-color);
}
</style>
