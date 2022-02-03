import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _45a390a8 = () => interopDefault(import('..\\pages\\basket\\index.vue' /* webpackChunkName: "pages/basket/index" */))
const _21dd5896 = () => interopDefault(import('..\\pages\\cats\\index.vue' /* webpackChunkName: "pages/cats/index" */))
const _67f966a2 = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _0245977d = () => interopDefault(import('..\\pages\\error\\401.vue' /* webpackChunkName: "pages/error/401" */))
const _db655b66 = () => interopDefault(import('..\\pages\\cats\\_name.vue' /* webpackChunkName: "pages/cats/_name" */))
const _280671c2 = () => interopDefault(import('..\\pages\\chat\\_id.vue' /* webpackChunkName: "pages/chat/_id" */))
const _4dd4007b = () => interopDefault(import('..\\pages\\product\\_id.vue' /* webpackChunkName: "pages/product/_id" */))
const _7279d420 = () => interopDefault(import('..\\pages\\profile\\_type.vue' /* webpackChunkName: "pages/profile/_type" */))
const _08a38cb2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/basket/",
    component: _45a390a8,
    pathToRegexpOptions: {"strict":true},
    name: "basket"
  }, {
    path: "/cats/",
    component: _21dd5896,
    pathToRegexpOptions: {"strict":true},
    name: "cats"
  }, {
    path: "/home/",
    component: _67f966a2,
    pathToRegexpOptions: {"strict":true},
    name: "home"
  }, {
    path: "/error/401/",
    component: _0245977d,
    pathToRegexpOptions: {"strict":true},
    name: "error-401"
  }, {
    path: "/cats/:name/",
    component: _db655b66,
    pathToRegexpOptions: {"strict":true},
    name: "cats-name"
  }, {
    path: "/chat/:id?/",
    component: _280671c2,
    pathToRegexpOptions: {"strict":true},
    name: "chat-id"
  }, {
    path: "/product/:id?/",
    component: _4dd4007b,
    pathToRegexpOptions: {"strict":true},
    name: "product-id"
  }, {
    path: "/profile/:type?/",
    component: _7279d420,
    pathToRegexpOptions: {"strict":true},
    name: "profile-type"
  }, {
    path: "/",
    component: _08a38cb2,
    pathToRegexpOptions: {"strict":true},
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
