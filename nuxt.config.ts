import pkg from './package.json';

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'oNote',
    meta: [
      { charset: 'utf-8', },
      { name: 'viewport', content: 'width=device-width, initial-scale=1', },
      { hid: 'description', name: 'description', content: pkg.description, },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', }, ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff', },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/_app.scss', ],

  styleResources: {
    scss: ['assets/scss/_app.scss', ],
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      
      // Run ESLint on save  -- how about no?
      /*
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|ts|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
      */

    },
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true, }, ],
        ['@babel/plugin-proposal-class-properties', { loose: true, }, ],
      ],
    },
  },
};
