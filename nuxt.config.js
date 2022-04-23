import { defineNuxtConfig } from '@nuxt/bridge'

const copyRightNotice = `\u00A9 ChecklyHQ ${new Date().getFullYear()}. All rights reserved`

export default defineNuxtConfig({
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
        content: copyRightNotice,
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
        content:
          'Checkly is the API & E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.',
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
        content: 'ChecklHQ',
      },
      {
        key: 'twitter:description',
        property: 'twitter:description',
        content:
          'Checkly is the API & E2E monitoring platform for the modern stack: programmable, flexible and loving JavaScript.',
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
        content: 'https://checklyhq.com',
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
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@nuxtjs/svg',
    [
      'nuxt-purgecss',
      {
        enabled: true,
        mode: 'postcss',
        content: [
          './pages/**/*.vue',
          './layouts/**/*.vue',
          './components/**/*.vue',
          './content/**/*.md',
        ],
        styleExtensions: ['.css', '.scss'],
        whitelist: ['Cookie', 'Cookie__button'],
      },
    ],
    '@hexdigital/nuxt-intercom',
  ],
  modules: ['@nuxtjs/axios', 'vue-plausible'],
  // modules: ['@nuxtjs/axios', '@nuxt/content', 'vue-plausible'],
  plausible: {
    domain: 'checklyhq.com',
  },
  intercom: {
    appId: 'ep3ft8gg',
    scriptDefer: true,
  },
  content: {
    liveEdit: false,
  },
  ssr: false,
  plugins: ['~/plugins/bootstrap-vue'],
  css: ['~/assets/styles/style.scss', '~/assets/styles/prismjs/prism-nord.css'],
  components: true,
  axios: {},
  build: {
    extractCSS: true,
  },
})
