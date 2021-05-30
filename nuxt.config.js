export default {
  target: 'static',
  head: {
    title: 'Delightful Active Monitoring for Developers',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Checkly is the API & E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.',
      },
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
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      {
        rel: 'preconnect',
        href: 'https://ajax.googleapis.com',
        crossorigin: true,
      },
      {
        rel: 'dns-prefetch',
        href: 'https://ajax.googleapis.com',
      },
    ],
    script: [
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.slim.min.js',
      //   integrity:
      //     'sha512-tqkUb/44CjLInUi6+QDdXjRrDWA7ivz60HCXDla9x0ToqLBTwu+KMQf0o8K90R7kcOBVV/VC/+3l/1RGjuGGxA==',
      //   crossorigin: 'anonymous',
      // },
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js',
      //   integrity:
      //     'sha512-HsZ1i9vlo01lbae+KIl//6KPxkOO6xSPI2PefsZiC8LmSW9KDWMYK9jhNqE9XsbjGyrnQAZ6sSHvtnR12sJPjA==',
      //   crossorigin: 'anonymous',
      // },
      // {
      //   src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js',
      //   integrity:
      //     'sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn',
      //   crossorigin: 'anonymous',
      // },
    ],
  },
  ssr: false,
  plugins: ['~/plugins/bootstrap-vue'],
  css: ['~/assets/styles/style.scss', '~/assets/styles/prismjs/prism-nord.css'],
  components: true,
  buildModules: [
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    // '@nuxtjs/stylelint-module',
    '@nuxt/image',
    '@nuxtjs/svg',
    [
      'nuxt-purgecss',
      { enabled: true, mode: 'postcss', styleExtensions: ['.css', '.scss'] },
    ],
    '@hexdigital/nuxt-intercom',
  ],
  modules: ['@nuxtjs/axios', '@nuxt/content', 'vue-plausible'],
  plausible: {
    domain: 'checklyhq.com',
  },
  intercom: {
    appId: 'ep3ft8gg',
  },
  purgeCSS: {
    whitelist: ['.Cookie', 'Cookie__button'],
  },
  axios: {},
  build: {},
  content: {
    liveEdit: false,
  },
}
