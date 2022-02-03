// eslint-disable-next-line nuxt/no-cjs-in-config
const imageminMozjpeg = require('imagemin-mozjpeg')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const isDev = process.env.NODE_ENV !== 'production'

export default {
  server: {
    port: 9999, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },
  mode: 'universal',
  ...(!isDev && {
    modern: 'client'
  }),
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'ru'
    },
    title: 'Aliexpress',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
      { name: 'theme-color', content: '#ffffff' },
      // Facebook open graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://example.com/' + 'const API_URL = process.env.BASE_API_URLpage.html' },
      { property: 'og:title', content: 'Content Title' },
      { property: 'og:image', content: 'https://example.com/image.jpg' },
      { property: 'og:description', content: 'Description Here' },
      { property: 'og:site_name', content: 'Site Name' },
      { property: 'og:locale', content: 'en_US' },
      // Twitter card
      { property: 'twitter:card', content: 'summary' },
      { property: 'twitter:site', content: '@site_account' },
      { property: 'twitter:creator', content: '@individual_account' },
      { property: 'twitter:url', content: 'https://example.com/page.html' },
      { property: 'twitter:title', content: 'Content Title' },
      { property: 'twitter:description', content: 'Content description less than 200 characters' },
      { property: 'twitter:image', content: 'https://example.com/image.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },

  rootDir: __dirname,
  router: {
    prefetchLinks: false,
    scrollBehavior: (to, from, savedPosition) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 })
        }, 500)
      })
    }
  },
  loading: {
    color: 'red'
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'normalize.css',
    'swiper/css/swiper.css',
    '~~/assets/css/main.css',
    '~~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
    { src: '~~/plugins/vue-lazy-load.js' },
    { src: '~~/plugins/nuxt-swiper-plugin.js', ssr: false },
    { src: '~~/plugins/paginate.js', ssr: false },
    { src: '~~/plugins/vue-star-rating.js', ssr: false },
    '~~/plugins/price',
    '~~/plugins/spinner',
    '~~/plugins/vue-the-mask',
    '~~/plugins/variables'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'nuxt-trailingslash-module',
    'nuxt-webfontloader',
    ['cookie-universal-nuxt', { alias: 'cookies', parseJSON: false }],
    // { src: '~~/plugins/vue-star-rating.js', ssr: false },
    'vue-toastification/nuxt',
    'vue-social-sharing/nuxt'
  ],

  // webfontloader: {
  //   events: false,
  //   google: {
  //     families: ['Inter:wght@400;500;600&display=swap']
  //   },
  //   timeout: 5000
  // },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },

  toast: {
    timeout: 1500,
    closeOnClick: true
  },

  proxy: {
    '/api': {
      target: process.env.API_URL + 'api',
      pathRewrite: {
        '^/ap': '/'
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru'
    }
  },

  render: {
    // http2: {
    //     push: true,
    //     pushAssets: (req, res, publicPath, preloadFiles) => preloadFiles
    //     .map(f => `<${publicPath}${f.file}>; rel=preload; as=${f.asType}`)
    //   },
    // compressor: false,
    resourceHints: false,
    etag: false,
    static: {
      etag: false
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    optimizeCss: false,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : 'js/[contenthash].js',
      css: ({ isDev }) => isDev ? '[name].css' : 'css/[contenthash].css',
      img: ({ isDev }) => isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]',
      font: ({ isDev }) => isDev ? '[path][name].[ext]' : 'fonts/[contenthash:7].[ext]',
      video: ({ isDev }) => isDev ? '[path][name].[ext]' : 'videos/[contenthash:7].[ext]'
    },
    ...(!isDev && {
      html: {
        minify: {
          collapseBooleanAttributes: true,
          decodeEntities: true,
          minifyCSS: true,
          minifyJS: true,
          processConditionalComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          trimCustomFragments: true,
          useShortDoctype: true
        }
      }
    }),
    splitChunks: {
      layouts: true,
      pages: true,
      commons: true
    },
    optimization: {
      minimize: !isDev
    },
    ...(!isDev && {
      extractCSS: {
        ignoreOrder: true
      }
    }),
    transpile: ['vue-lazy-hydration', 'intersection-observer', 'nuxt-vuex-localstorage'],
    extend (config, ctx) {
      const ORIGINAL_TEST = '/\\.(png|jpe?g|gif|svg|webp)$/i'
      // eslint-disable-next-line no-unused-vars
      const vueSvgLoader = [
        {
          loader: 'vue-svg-loader',
          options: {
            svgo: false
          }
        }
      ]
      const imageMinPlugin = new ImageminPlugin({
        pngquant: {
          quality: '5-30',
          speed: 7,
          strip: true
        },
        jpegtran: {
          progressive: true

        },
        gifsicle: {
          interlaced: true
        },
        plugins: [
          imageminMozjpeg({
            quality: 70,
            progressive: true
          })

        ]
      })
      if (!ctx.isDev) {
        config.plugins.push(imageMinPlugin)
      }

      config.module.rules.forEach((rule) => {
        if (rule.test.toString() === ORIGINAL_TEST) {
          rule.test = /\.(png|jpe?g|gif|webp)$/i
          rule.use = [{
            loader: 'url-loader',
            options: {
              limit: 1000,
              name: ctx.isDev ? '[path][name].[ext]' : 'img/[contenthash:7].[ext]'
            }
          }
          ]
        }
      })
      //  Create the custom SVG rule
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'))

      svgRule.test = /\.(png|jpe?g|gif|webp)$/

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: [
              'babel-loader',
              'vue-svg-loader'
            ]
          },
          {
            loader: 'file-loader',
            query: {
              name: 'assets/[name].[hash:8].[ext]'
            }
          }
        ]
      })

      config.module.rules.push(svgRule) // Actually add the rule
    }
  },
  workbox: {
    // Workbox options
    offlinePage: '/offline.html',
    cacheNames: {
      prefix: 'hubble',
      suffix: 'v1',
      precache: 'precache',
      runtime: 'runtime'
    },
    offlineStrategy: 'networkFirst',
    runtimeCaching: [
      {
        urlPattern: 'http:localhost:3340/Unsere-AGB/.*',
        handler: 'staleWhileRevalidate',
        method: 'GET'
      },
      {
        urlPattern: 'http:localhost:3340/Unsere-AGB/.*',
        handler: 'staleWhileRevalidate',
        method: 'GET'
      },
      {
        urlPattern: 'http:localhost:3340/Impressum/.*',
        handler: 'staleWhileRevalidate',
        method: 'GET'
      }]
  }
}
