import { defineNuxtConfig } from 'nuxt/config'
import config from './common'

export default defineNuxtConfig({
  ...config,
  app: {
    head: {
      title: 'Программа автоматизации',
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content:
            'viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no',
        },
        {
          hid: 'description',
          name: 'description',
          content:
            'Программа автоматизации',
        },
      ],
    },
  },
  dir: {
    pages: 'src/pages/stage-mobile',
  },
})