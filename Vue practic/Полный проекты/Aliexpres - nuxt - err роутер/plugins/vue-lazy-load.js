import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

export default async (context, inject) => {
  // Vue.use(clazyload)
  await Vue.use(VueLazyload, {
    preLoad: 3,
    error: 'http://185.111.106.47/default.svg',
    // eslint-disable-next-line
    loading: 'http://185.111.106.47/loader.svg',
    attempt: 3,
    lazyComponent: true,
    observer: true,
    throttleWait: 3000
  })
}
