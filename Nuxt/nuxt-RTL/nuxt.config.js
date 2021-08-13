export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-RTL',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/i18n.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-i18n' 
  ],

  i18n: {
    locales: [
      {
        code: 'he',
        name: 'עברית',
        dir: 'rtl'
      },
      {
        code: 'en',
        name: 'English',
        dir: 'ltr'
      },
    ],
    vueI18nLoader: true,
    defaultLocale: 'en',
    vueI18n: { fallbackLocale: 'en' },
  },

  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/scss/main.scss',
    exposeConfig: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
