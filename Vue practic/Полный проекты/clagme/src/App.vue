<template>
  <div id="app">
    <button @click="example">Click</button> ||
    <button @click="fetchApi()">Api</button>
    <component v-if="component" :is="component" />
    <FooterBlock class="app-footer" />
    <FooterMobileBlock class="app-footer-mobile" />
  </div>
</template>

<script>
// import Cookies from "js-cookie";
import { mapGetters } from "vuex";

import MainBlock from "./layouts/main";
import AuthBlock from "./layouts/auth";
import DefaultBlock from "./layouts/default";
import AdminBlock from "./layouts/admin";
import FooterBlock from "./components/footer/footer";
import FooterMobileBlock from "./components/footer/mobile";

export default {
  methods: {
    example() {
      console.log("example");
      // Cookies.set("example", "example-cookes2");

      // console.log(this.EXAMPLE);
      // console.log(Cookies.get("example"));
    },
  },
  computed: {
    component() {
      if (this.$route.meta.layout) {
        return this.$route.meta.layout + "-block";
      } else {
        return "";
      }
    },
    ...mapGetters(["TOKEN", "EXAMPLE"]),
  },
  components: {
    MainBlock,
    AuthBlock,
    DefaultBlock,
    AdminBlock,
    FooterBlock,
    FooterMobileBlock,
  },
  async created() {
    await this.$store.dispatch("getToken");
    // if (this.TOKEN) {
    //   await this.$store.commit('setSocket', new WebSocket(`ws://185.100.67.139:9696?chat_token=makhasadasdasasdaeqwe`))
    // }
  },
};
</script>

<style scoped>
.app-footer-mobile {
  display: none;
}

@media (max-width: 768px) {
  .app-footer {
    display: none;
  }
  .app-footer-mobile {
    display: block;
  }
}
</style>
