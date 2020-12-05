import isProd from 'utils/isProd'


const files = require.context('../styles/img', true)


const resolveURL = url =>
  url ? 
    isProd() ?
      `https://the-sociophobic.github.io/${files(`./${url}`).default}`
      :
      files(`./${url}`).default
    :
    ""


export default resolveURL