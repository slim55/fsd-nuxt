import configClientMobile from './src/app/nuxt/configs/client-mobile'
import configStageMobile from './src/app/nuxt/configs/stage-mobile'

const getConfig = () => {
  switch (process.env.APP_NAME) {
    case 'client-mobile':
      return configClientMobile
    case 'stage-mobile':
      return configStageMobile
  }
}

export default getConfig()