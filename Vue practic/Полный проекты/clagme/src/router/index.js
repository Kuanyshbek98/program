import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import Cookies from "js-cookie";

Vue.use(VueRouter);

const isUser = (to, from, next) => {
  let auth = Cookies.get("clagme-type") === "user";
  if (auth) next();
  else if (to.path !== "/auth/sign-in") next("/auth/sign-in");
};
const hasToken = (to, from, next) => {
  let auth = Cookies.get("clagme-type");
  if (auth) next();
  else if (to.path !== "/auth/sign-in") next("/auth/sign-in");
};
// const isEmployee = (to, from, next) => {
//   let auth = Cookies.get('clagme-type') === 'employee'
//   if(auth) next()
//   else if(to.path !== '/auth/sign-in') next('/auth/sign-in')
// }
const isAdmin = (to, from, next) => {
  let auth = Cookies.get("clagme-type") === "admin";
  if (auth) next();
  else if (to.path !== "/") {
    next("/");
  }
};

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/home"),
    meta: { layout: "default" },
  },
  {
    path: "/resume",
    name: "Resume",
    component: () =>
      import(/* webpackChunkName: "resume" */ "../views/resume/resume"),
    meta: { layout: "main" },
    beforeEnter: isUser,
  },
  {
    path: "/offers",
    name: "Offers",
    component: () =>
      import(/* webpackChunkName: "offers" */ "../views/offers/offers"),
    meta: { layout: "main" },
    beforeEnter: isUser,
  },
  {
    path: "/deals",
    name: "Deals",
    component: () =>
      import(/* webpackChunkName: "deals" */ "../views/deals/deals"),
    meta: { layout: "main" },
    beforeEnter: hasToken,
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/search/search"),
    meta: { layout: "main" },
    beforeEnter: hasToken,
  },
  {
    path: "/profile",
    name: "Profile",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/profile/profile"),
    meta: { layout: "main" },
    beforeEnter: hasToken,
  },
  {
    path: "/chat/:id",
    name: "Chat",
    component: () =>
      import(/* webpackChunkName: "chat" */ "../views/chat/chat"),
    meta: { layout: "main" },
    beforeEnter: hasToken,
  },
  {
    path: "/admin/statistics",
    name: "Statistics",
    component: () =>
      import(
        /* webpackChunkName: "statistics" */ "../views/admin/statistics/statistics"
      ),
    meta: { layout: "admin" },
    beforeEnter: isAdmin,
  },
  {
    path: "/admin/experts",
    name: "Experts",
    component: () =>
      import(
        /* webpackChunkName: "experts" */ "../views/admin/experts/experts"
      ),
    meta: { layout: "admin" },
    beforeEnter: isAdmin,
  },
  {
    path: "/admin/companies",
    name: "Companies",
    component: () =>
      import(
        /* webpackChunkName: "companies" */ "../views/admin/companies/companies"
      ),
    meta: { layout: "admin" },
    beforeEnter: isAdmin,
  },
  {
    path: "/admin/transactions",
    name: "Transactions",
    component: () =>
      import(
        /* webpackChunkName: "statistics" */ "../views/admin/transactions/transactions"
      ),
    meta: { layout: "admin" },
    beforeEnter: isAdmin,
  },
  {
    path: "/info",
    name: "Info",
    component: () =>
      import(/* webpackChunkName: "info" */ "../views/info/info"),
    meta: { layout: "default" },
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/contact/contact"),
    meta: { layout: "default" },
  },
  {
    path: "/404",
    name: "404",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/error/404"),
    meta: { layout: "auth" },
  },
  {
    path: "/500",
    name: "500",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/error/500"),
    meta: { layout: "auth" },
  },
  {
    path: "*",
    name: "Other",
    redirect: "404",
    meta: { layout: "auth" },
  },
  {
    path: "/auth/:name",
    name: "Auth",
    component: () =>
      import(/* webpackChunkName: "auth" */ "../views/auth/auth"),
    meta: { layout: "auth" },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    NProgress.done();
  }, 500);
});

export default router;
