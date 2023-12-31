import * as path from 'path'

const env = require('dotenv').config()
const packageJSON = require('../../../../package.json')

export default {
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    optimizeDeps: {
      exclude: ['fsevents'],
    },
  },
  components: {
    dirs: []
  },
  runtimeConfig: {
    public: {
      ...env.parsed,
      APP_VERSION: packageJSON.version,
      ...(process.env.APP_NAME && {
        APP_NAME: process.env.APP_NAME,
      }),
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate'],
  },
  ssr: false,
  nitro: {
    output: {
      dir: path.join(__dirname, `../../../../${process.env.APP_NAME}/www`),
    },
  },
}