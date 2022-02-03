import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Main from "../components/exam/Main.vue";
// import OtherNavBar from "../components/exam/OtherNavBar.vue";
// import NavBar from "../components/exam/NavBar.vue";

// import Bar from "../components/exam/Bar.vue";
// import Baz from "../components/exam/Baz.vue";
// import OtherBar from "../components/exam/OtherBar.vue";
// import OtherBaz from "../components/exam/OtherBaz.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // ---------------------------------------
  // {
  //   path: "/one/:type",
  //   name: "One",
  //   component: () => import("@/components/One.vue"),
  // },
  // {
  //   path: "*",
  //   name: "Two",
  //   // redirect: { name: "One" },
  //   component: () => import("@/components/Two.vue"),
  // },
  // {
  //   path: "/a/:id",
  //   name: "A",
  //   component: () => import("@/components/a.vue"),
  //   children: [
  //     {
  //       path: "",
  //       name: "A",
  //       component: () => import("@/components/a.vue"),
  //     },
  //     {
  //       path: ":id",
  //       name: "A",
  //       component: () => import("@/components/a.vue"),
  //     },
  //     {
  //       path: "a1",
  //       name: "A1",
  //       component: () => import("@/components/a1.vue"),
  //     },
  //     {
  //       path: "*/*",
  //       // redirect: '/b'
  //     },
  //   ],
  // },
  // // {
  // //   path: "/a1",
  // //   name: "A1",
  // //   // alias: '/a2', //   а2-ні басқан кезде роутер өзгереді, ішіндегі данный a1 болып тұра береді
  // //   component: () => import("@/components/a1.vue"),
  // // },
  // {
  //   path: "/a2",
  //   name: "A2",
  //   component: () => import("@/components/a2.vue"),
  //   // props: { name: "kuanysh" },
  // },
  // {
  //   path: "/a1",
  //   name: "A1",
  //   // props: true, // a1-страницадан  props: ["id"], дегенде id-ді ұстай алу үшін
  //   // props: () => ({ propsFunc: "value propsFunc" }), // props арқылы function қолдану
  //   // props: (route) => ({ propsFunc: route.query.value }), // function арқылы операция жасау
  //   // alias: '/a2', //   а2-ні басқан кезде роутер өзгереді, ішіндегі данный a1 болып тұра береді
  //   component: () => import("@/components/a1.vue"),
  // },
  // {
  //   path: "/a2/:id",
  //   name: "A2",
  //   props: { name: "kuanyshbek", id: 19982, geens: () => "assets" }, // props арқылы object қолдану
  //   component: () => import("@/components/a2.vue"),
  // },
  { //router.js
    path: "/meta",
    name: "B",
    meta: { layout: "empty" },
    component: () => import("@/components/a.vue"),
  },
  {
    path: "/meta2",
    name: "B2",
    meta: { layout: "main" },
    component: () => import("@/components/a1.vue"),
  },
  {
    path: "/meta3",
    name: "B3",
    meta: { layout: "main" },
    component: () => import("@/components/a2.vue"),
  },
  // {
  //   path: "/b/:id(\\d+)",
  //   name: "B",
  //   component: () => import("@/components/b.vue"),
  // },
  // {
  //   path: "/exam",
  //   name: "exam",
  //   // component: () => import("@/components/exama.vue"),
  //   components: {
  //     default: () => import("@/components/exama.vue"),
  //     a: () => import("@/components/a.vue"),
  //     b: () => import("@/components/b.vue"),
  //   },
  //   // props: {
  //   //   default: true,
  //   //   // function mode, more about it below
  //   //   sidebar: (route) => ({ search: route.query.q }),
  //   // },
  // },

  // {
  //   path: "/",

  //   components: {
  //     default: Main,
  //     nav: NavBar,
  //   },

  //   children: [
  //     {
  //       path: "bar",
  //       component: Bar,
  //     },
  //     {
  //       path: "baz",
  //       component: Baz,
  //     },
  //   ],
  // },

  // {
  //   path: "/other",

  //   components: {
  //     default: Main,
  //     nav: OtherNavBar,
  //   },

  //   children: [
  //     {
  //       path: "bar",
  //       component: OtherBar,
  //     },
  //     {
  //       path: "baz",
  //       component: OtherBaz,
  //     },
  //   ],
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
