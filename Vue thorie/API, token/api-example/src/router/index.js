import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/SearchImg.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search",
    name: "Search",
    component: Home,
  },
  // {
  //   path: "/*",
  //   name: "Add",
  //   component: () => import("../App.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
