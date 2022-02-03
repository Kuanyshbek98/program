import Vue from "vue";
import VCalendar from "v-calendar";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "./assets/css/main.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  VCalendar,
  render: (h) => h(App),
}).$mount("#app");
