import _ from 'lodash'


const isJSON = obj =>
  obj.constructor === ({}).constructor

const flatten = input =>
  !isJSON(input) ?
    input
    :
    _.transform(
      input,
      (res, value, key) =>
        !isJSON(value) ?
          res[key] = value
          :
          _.forIn(flatten(value),
            (valueValue, valueKey) =>
              res[`${key}.${valueKey}`] = valueValue)
      , {})


export default flatten
