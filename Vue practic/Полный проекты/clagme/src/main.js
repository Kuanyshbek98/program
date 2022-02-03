import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from 'vue-toastification'
import api from './utils/api'
import VueLazyload from 'vue-lazyload'
import StarRating from 'vue-star-rating'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Scroll from 'vue-infinite-scroll'
import vSelect from 'vue-select'
import GAuth from 'vue-google-oauth2'
import VueSocialauth from 'vue-social-auth'

import Spinner from './components/global/spinner'

import 'normalize.css'
import 'vue-select/dist/vue-select.css'
import 'nprogress/nprogress.css'
import "vue-toastification/dist/index.css"
import 'swiper/css/swiper.css'
import './assets/css/main.css'
import './assets/css/style.css'
import './registerServiceWorker'

// ---------VARIABLE----------------
const options = {
  transition: 'Vue-Toastification__bounce',
  maxToasts: 3,
  newestOnTop: true,
  position: 'top-right',
  timeout: 2000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.7,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false,
  toastClassName: 'my-custom-toast-class'
}
const gauthOption = {
  clientId: '731993572925-orbm2glb2r6cklruatrmjhbh15pml3ib.apps.googleusercontent.com',
  scope: '',
  prompt: ''
}

// ----------------------------------
Vue.config.productionTip = false
Vue.prototype.$api = api;
Vue.prototype.$url = 'http://185.100.67.139:8081/'
Vue.prototype.$image = 'http://185.100.67.139:8081/'

// ---------USE----------------------
Vue.use(Toast, options)
Vue.use(Scroll)
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  preLoad: 2,
  error: require(`${'@/assets/svg/download.svg'}`),
  loading: require(`${'@/assets/svg/download.svg'}`),
  attempt: 2
})
Vue.use(GAuth, gauthOption)
Vue.use(VueSocialauth, {
  providers: {
    google: {
      clientId: '731993572925-orbm2glb2r6cklruatrmjhbh15pml3ib.apps.googleusercontent.com',
      client_secret: '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',
      redirectUri: 'http://localhost:8080/auth/callback'
    }
  }
})

// ---------COMPONENT----------------
Vue.component('v-spinner', Spinner)
Vue.component('star-rating', StarRating)
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
