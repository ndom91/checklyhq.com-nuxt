// const copyRightNotice = `\u00A9 ${
//   config.author
// } ${new Date().getFullYear()}. All rights reserved`

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ChecklyNuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        title: 'Delightful Active Monitoring for Developers',
        meta: [
          // Override Example
          { key: 'og:type', property: 'og:type', content: 'article' },
          {
            key: 'og:url',
            property: 'og:url',
            content: 'https://checklyhq.com',
          },
        ],
      },
      {
        name: 'msvalidate.01',
        content: '36F243A91FAA24DE468D8A8EECF33554',
      },
      {
        charset: 'utf-8',
      },
      {
        name: 'copyright',
        // content: copyRightNotice,
      },
      {
        name: 'viewport',
        content: 'width=device-width',
        initialScale: '1',
        maximumScale: '1',
      },
      {
        key: 'og:type',
        property: 'og:type',
        content: 'article',
      },
      {
        key: 'og:description',
        property: 'og:description',
        // content: config.siteDescription,
      },
      {
        key: 'og:image',
        property: 'og:image',
        content: '/images/checkly_og_image.png',
      },
      {
        key: 'twitter:card',
        property: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        key: 'twitter:title',
        property: 'twitter:title',
        // content: config.siteName,
      },
      {
        key: 'twitter:description',
        property: 'twitter:description',
        // content: config.siteDescription,
      },
      {
        key: 'twitter:image',
        property: 'twitter:image',
        content: '/images/checkly_og_image.png',
      },
      {
        key: 'twitter:creator',
        property: 'twitter:creator',
        content: '@checklyHQ',
      },
      {
        key: 'twitter:domain',
        property: 'twitter:domain',
        // content: config.siteUrl,
      },
      {
        key: 'twitter:site',
        property: 'twitter:site',
        content: '@checklyHQ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js',
        integrity:
          'sha512-tqkUb/44CjLInUi6+QDdXjRrDWA7ivz60HCXDla9x0ToqLBTwu+KMQf0o8K90R7kcOBVV/VC/+3l/1RGjuGGxA==',
        crossorigin: 'anonymous',
        // body: true
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js',
        integrity:
          'sha512-HsZ1i9vlo01lbae+KIl//6KPxkOO6xSPI2PefsZiC8LmSW9KDWMYK9jhNqE9XsbjGyrnQAZ6sSHvtnR12sJPjA==',
        crossorigin: 'anonymous',
        // body: true
      },
      {
        src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js',
        integrity:
          'sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn',
        crossorigin: 'anonymous',
        // body: true
      },
    ],
  },
  ssr: false,

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/bootstrap-vue'],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/styles/style.scss', '~/assets/styles/prismjs/prism-nord.css'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
