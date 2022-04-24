export default {
  head: {
    titleTemplate: 'btz-frontend',
    title: 'btz-frontend',
    htmlAttrs: {
      lang: 'en',
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
  css: [
    '~/assets/styles/index.scss'],
  plugins: [
    '@/plugins/rules-validate'
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],

  modules: ['@nuxtjs/style-resources'],

  vuetify: {
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
