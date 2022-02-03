import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // meta: { layout: "main" },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/clubs",
    name: "Clubs",
    // meta: { layout: "main" },
    component: () => import("../views/Clubs.vue"),
  },
  {
    path: "/club",
    name: "Club",
    // meta: { layout: "main" },
    component: () => import("../views/Club.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
