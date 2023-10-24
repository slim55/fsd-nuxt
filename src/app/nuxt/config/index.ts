import configProject1 from './project1'
import configProject2 from './project2'

const getConfig = () => {
  switch (process.env.APP_NAME) {
    case 'project1':
      return configProject1
    case 'project2':
      return configProject2
  }
}

export default getConfig()