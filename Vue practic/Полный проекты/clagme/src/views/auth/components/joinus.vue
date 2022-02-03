<template>
  <div class="join-us auth">
    <div class="auth__header">
      <p class="auth__header-text">Registration</p>
      <TabBlock/>
    </div>
    <h2 class="auth__title join-us-title">Welcome!</h2>
    <p class="auth__text join-us__text">Complete the form below to register.</p>
    <div class="join-us__types">
      <label class="join-us__type">
        <input v-model="type" type="radio" hidden value="employee">
        <span></span>
        I am lookin’ for experts
      </label>
      <label class="join-us__type">
        <input v-model="type" type="radio" hidden value="user">
        <span></span>
        I am an expert
      </label>
    </div>
    <form @submit.prevent="onSubmit()" class="join-us__form join-us-form auth-form">
      <template v-if="type === 'user'">
        <div class="join-us-form__input-block auth-form__input-block">
          <input id="email" required inputmode="email" type="email" v-model="email" class="join-us-form__input auth-form__input"/>
          <label for="email" class="join-us-form__label auth-form__label">Email</label>
        </div>
        <div class="join-us__content flex">
          <div class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block">
            <input id="last-name-user" type="text" required inputmode="text" v-model="lastName" class="join-us-form__input auth-form__input"/>
            <label for="last-name-user" class="join-us-form__label auth-form__label">Last name</label>
          </div>
          <div
            class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block">
            <input id="first-name-user" type="text" required inputmode="text" v-model="firstName" class="join-us-form__input auth-form__input"/>
            <label for="first-name-user" class="join-us-form__label auth-form__label">First name</label>
          </div>
        </div>
        <div class="join-us-form__input-block auth-form__input-block">
          <input minlength="5" id="password-user" type="password" required v-model="password" class="join-us-form__input auth-form__input"/>
          <label for="password-user" class="join-us-form__label auth-form__label">Password</label>
        </div>
      </template>
      <template v-if="type === 'employee'">
        <div class="join-us-form__uploader flex">
          <label class="join-us-form__uploader-label">
            <input @change="fileChangeHandler" id="image" class="join-us-form__uploader-input" type="file" hidden accept="image/*">
            <div class="join-us-form__uploader-image avatar" :style="{backgroundImage: `url(${image})`}"></div>
<!--            <img :src="image" alt="" class="join-us-form__uploader-image avatar">-->
            <div class="join-us-form__uploader-image-cover"></div>
          </label>
          <div class="join-us-form__uploader-action">
            <label for="image" class="join-us-form__uploader-btn">Upload new picture</label>
            <a @click="removeImage()" class="join-us-form__uploader-remove">Remove picture</a>
          </div>
        </div>
        <div class="join-us__content flex">
          <div class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block">
            <input id="enterprise" type="text" required inputmode="text" v-model="enterprise" class="join-us-form__input auth-form__input"/>
            <label for="enterprise" class="join-us-form__label auth-form__label">Enterprize</label>
          </div>
          <div
            class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block">
            <input id="position" type="text" required inputmode="text" v-model="position" class="join-us-form__input auth-form__input"/>
            <label for="position" class="join-us-form__label auth-form__label">Position in the enterprize</label>
          </div>
        </div>
        <div class="join-us__content flex">
          <div class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block">
            <input id="first-name" type="text" required inputmode="text" v-model="firstName" class="join-us-form__input auth-form__input"/>
            <label for="first-name" class="join-us-form__label auth-form__label">Your First name</label>
          </div>
          <div
            class="join-us-form__input-block join-us-form__input-block_mini auth-form__input-block">
            <input id="last-name" type="text" required inputmode="text" v-model="lastName" class="join-us-form__input auth-form__input"/>
            <label for="last-name" class="join-us-form__label auth-form__label">Your Last name</label>
          </div>
        </div>
        <div class="join-us-form__input-block auth-form__input-block">
          <input id="company-email" type="text" required inputmode="email" v-model="email" class="join-us-form__input auth-form__input"/>
          <label for="company-email" class="join-us-form__label auth-form__label">Company Email</label>
        </div>
        <div class="join-us-form__input-block auth-form__input-block">
          <input minlength="5" id="password" type="password" required v-model="password" class="join-us-form__input auth-form__input"/>
          <label for="password" class="join-us-form__label auth-form__label">Password</label>
        </div>
        <div class="join-us__content flex">
          <div class="join-us-form__input-block join-us-form__input-block_min auth-form__input-block">
            <select v-model="countryId" class="join-us-form__input auth-form__input">
              <option disabled value="">Country</option>
              <option v-for="country in COUNTRY_LIST" :key="country.id" :value="country.id">{{ country.name }}</option>
            </select>
          </div>
          <div class="join-us-form__input-block join-us-form__input-block_min auth-form__input-block">
            <select v-model="cityId" class="join-us-form__input auth-form__input">
              <option disabled value="">City</option>
              <option v-for="city in CITY_LIST" :key="city.id" :value="city.id">{{ city.name }}</option>
            </select>
          </div>
          <div class="join-us-form__input-block join-us-form__input-block_min auth-form__input-block">
            <input id="zip-code" type="text" required v-model="zipCode" class="join-us-form__input auth-form__input"/>
            <label for="zip-code" class="join-us-form__label auth-form__label">Zip code</label>
          </div>
        </div>
        <div class="join-us-form__input-block auth-form__input-block">
          <input id="site-link" type="url" required inputmode="url" v-model="siteLink" class="join-us-form__input auth-form__input"/>
          <label for="site-link" class="join-us-form__label auth-form__label">Enterprize Site link</label>
        </div>
      </template>
      <div class="join-us-form__bottom auth-form__bottom flex">
        <button class="join-us-form__btn auth-form__btn">Register</button>
      </div>
      <div class="auth__line join-us__line">
        or Sign in with:
      </div>
      <div class="flex">
        <a class="join-us__integrate">
          <GoogleIcon/>
          Sign in with Google </a>
        <a class="join-us__integrate">
          <FacebookIcon/>
          Sign in with Facebook
        </a>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'

import GoogleIcon from '@/assets/svg/google.svg?inline'
import FacebookIcon from '@/assets/svg/facebook.svg?inline'

export default {
  data() {
    return {
      email: '',
      lastName: '',
      firstName: '',
      password: '',
      type: 'employee',
      image: '',
      file: null,
      enterprise: '',
      position: '',
      countryId: '',
      cityId: '',
      zipCode: '',
      siteLink: ''
    }
  },
  computed: {
    ...mapGetters([
      'CITY_LIST',
      'COUNTRY_LIST',
      'SKILL_LIST'
    ])
  },
  methods: {
    async onSubmit () {
      const formData = new FormData()
      if (this.type === 'user') {
        formData.append('email', this.email)
      } else if (this.type === 'employee') {
        if (this.file) formData.append('image', this.file)
        formData.append('enterprise_name', this.enterprise)
        formData.append('enterprise_address', 'address')
        formData.append('enterprise_email', this.email)
        formData.append('position', this.position)
        formData.append('city_id', this.cityId || 1)
        formData.append('zip', this.zipCode)
        formData.append('site_link', this.siteLink)
        formData.append('phone', this.phone)
        formData.append('country_id', this.countryId || 1)
      }
      formData.append('name', this.firstName)
      formData.append('surname', this.lastName)
      formData.append('password', this.password)

      const url = this.type === 'user' ? '/user/register' : '/employee/register'
      await this.$api.post(url, formData)
        .then((response) => {
          console.log(response)
          this.$toast.success(this.type === 'user' ? 'A message has been sent to you' : 'You have successfully registered')
          Cookies.set('clagme-tk', response.data.data.token)
          // if (this.type === 'employee') {
          //   Cookies.set('clagme-type', this.type)
          //   Cookies.set('clagme-chtk', response.data.data.chat_token)
          //   Cookies.set('clagme-uid', response.data.data.id)
          //   this.$store.dispatch('getToken', response.data.data.token)
          //   this.$store.dispatch('getType', this.type)
          //   this.$store.dispatch('getProfile')
          // }
          this.$router.push('/auth/verification')
        })
        .catch((e) => {
          if (e.response) {
            this.$toast.error(e.response.data.message)
          }
        })
    },
    fileChangeHandler (e) {
      // const files = Array.from(e.target.files)
      this.file = e.target.files[0]
      const reader = new FileReader()

      reader.onload = (e) => {
        this.image = e.target.result
      }
      reader.readAsDataURL(this.file)
    },
    removeImage () {
      this.file = this.image = ''
    }
  },
  components: {
    GoogleIcon,
    FacebookIcon,
    TabBlock: () => ({
      component: import('./tabs.vue'),
    }),
  },
  created() {
    this.type = this.$route.query.type || 'employee'
    this.$store.dispatch('getCityList')
    this.$store.dispatch('getCountryList')
  }
}
</script>

<style scoped src="@/assets/css/auth.css"></style>

<style scoped>
.join-us-form__input-block_mini {
  width: calc(50% - 12px);
}
.join-us-form__input-block_min {
  width: calc(33% - 18px);
}

.join-us__integrate {
  background: #ffffff;
  border: 1px solid #ebeaed;
  box-sizing: border-box;
  border-radius: 4px;
  height: 48px;
  width: calc(50% - 4px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.join-us__integrate svg {
  margin-right: 12px;
}
.join-us__types {

}
.join-us__type {
  display: block;
  position: relative;
  padding-left: 34px;
  margin-bottom: 16px;
  cursor: pointer;
  color: #84818A;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}
.join-us__type span {
  position: absolute;
  width: 20px;
  height: 20px;
  border: 2px solid #84818A;
  border-radius: 50% 50%;
  left: 0;
  top: -3px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.join-us__type span:after {
  content: '';
  width: 10px;
  height: 10px;
  border-radius: 50% 50%;
  background-color: #FFFFFF;
}
.join-us__type input:checked ~ span {
  border-color: var(--blue-color);
}
.join-us__type input:checked ~ span:after {
  background-color: var(--blue-color);
}
.join-us-form__uploader {
  margin: 44px 0 32px;
}
.join-us-form__uploader-label {
  width: 183px;
  height: 183px;
  display: block;
  position: relative;
}
.join-us-form__uploader-image, .join-us-form__uploader-image-cover {
  width: 100%;
  height: 100%;
}
.join-us-form__uploader-image-cover {
  border-radius: 0;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
}
.join-us-form__uploader-image {
  position: absolute;
}
.join-us-form__uploader-action {
  width: calc(100% - 207px);
}
.join-us-form__uploader-remove {
  display: block;
  text-align: center;
  color: #84818A;
  font-size: 14px;
  line-height: 20px;
  margin-top: 16px;
}
.join-us-form__uploader-btn {
  width: 100%;
  border: 1px solid var(--blue-color);
  border-radius: 4px;
  height: 36px;
  background-color: #FFFFFF;
  color: var(--blue-color);
  font-weight: 600;
  font-size: 14px;
  display: block;
  text-align: center;
  line-height: 36px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .join-us-form__uploader-label {
    width: 144px;
    height: 144px;
  }
  .join-us-form__uploader-action {
    width: calc(100% - 160px);
  }
  .join-us__content {
    flex-wrap: wrap;
  }
  .join-us-form__input-block_mini {
    width: 100%;
  }
  .join-us-form__input-block_min {
    width: calc(50% - 12px);
  }
}
</style>
