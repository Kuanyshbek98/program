import Vue from "vue";
import Vuex from "vuex";
import moduleA from "./moduleA/post";
import moduleB from "./moduleB/post";

Vue.use(Vuex);
export default new Vuex.Store({
  // strict: true,
  modules: {
    b: moduleB,
    a: moduleA,
  },
});
