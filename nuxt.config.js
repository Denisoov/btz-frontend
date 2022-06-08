export default {
  server: {
    port: 80, // default: 3000
    host: 'createst.ugrasu.ru', // default: localhost,
    timing: false
  },
  head: {
    titleTemplate: 'createst',
    title: 'createst',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  styleResources: {
    scss: [
    '@/assets/styles/colors.scss',
    '@/assets/styles/fonts.scss',
    '@/assets/styles/mixins.scss'
    ],
  },
  router: {
    middleware: ['authorization'],
  },
  css: [
    '~/assets/styles/index.scss',
  ],
  plugins: [
    '@/plugins/rules-validate',
    '@/plugins/axios-init',
    '@plugins/v-mask.js',
    { src: '@/plugins/vuedraggable', mode: 'client' },
    { src: '@/plugins/mathjax', mode: 'client' },
  ],
  components: true,
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  vuetify: {
    optionsPath: './vuetify.config.js',
    treeShake: true,
    defaultAssets: false,
  },
  build: {
    extractCSS: true,
    transpile: [
      'vee-validate'
    ]
  },
}
