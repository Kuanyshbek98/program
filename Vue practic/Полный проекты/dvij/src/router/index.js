import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/event",
    name: "event",
    component: () => import("../views/event"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("../views/chat"),
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("../views/Favorites.vue"),
  },
  {
    path: "/my-reservations/:type?",
    name: "my-reservations",
    component: () => import("../views/myReservations"),
  },
  {
    path: "/order",
    name: "order",
    component: () => import("../views/order"),
  },
  {
    path: "/tarif",
    name: "tarif",
    component: () => import("../views/tarif"),
  },
  {
    path: "/payment",
    name: "payment",
    component: () => import("../views/payment"),
  },
  {
    path: "/chats",
    name: "chats",
    component: () => import("../views/chats"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/profile"),
  },
  {
    path: "/profile-add",
    name: "profile-add",
    component: () => import("../views/profileEdit"),
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("../views/aboutUs"),
  },
  {
    path: "/event-create",
    name: "event-create",
    component: () => import("../views/eventCreate"),
  },
  {
    path: "/event-create/:id",
    name: "event-create",
    component: () => import("../views/eventCreate"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
