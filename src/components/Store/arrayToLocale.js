import _ from 'lodash'


const arrayToLocale =  obj => {
  var result = {}

  result.ru = {}
  result.fr = {}
  result.en = {}

  _.transform(obj,
    (res, value, key) => {
      res.ru[key] = value[0]
      res.fr[key] = value[1]
      res.en[key] = value[2]
    }, result)

  return result
}


export default arrayToLocale