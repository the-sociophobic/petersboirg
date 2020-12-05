import _ from 'lodash'


const getAttribsFrom = (object, root) =>
  _.mapKeys(
    _.pickBy(object, (value, key) =>
      key.startsWith(`${root}.`))
    , (value, key) =>
      key.replace(`${root}.`, '')
  )


export default getAttribsFrom