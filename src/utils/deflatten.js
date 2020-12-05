import _ from 'lodash'

import getAttribsFrom from 'utils/getAttribsFrom'


// const deflatten = input =>
//   _.transform(
//     input,
//     (res, value, key) => {
//       if (key.includes('.')) {
//         let currentLevel = key.split('.')[0]

//         if (!res.hasOwnProperty(currentLevel))
//           res[currentLevel] = {}

//         res[currentLevel] = {
//           ...res[currentLevel],
//           ...deflatten(getAttribsFrom(input, currentLevel))
//         }
//       }
//       else
//         res[key] = value
//     }, {})

const deflatten = obj => {
  const firstLevelProps = _.pickBy(obj, (value, key) => !key.includes("."))
  const secondLevelProps = _.pickBy(obj, (value, key) => key.includes("."))
  let newObj = firstLevelProps

  Object.keys(secondLevelProps).forEach(key => {
    const parentName = key.split(".")[0]
    const properyName = key.slice(parentName.length + 1)

    if (typeof newObj[parentName] === "undefined")
      newObj[parentName] = {}
    
    newObj[parentName] = {
      ...newObj[parentName],
      [properyName]: obj[key],
    }
  })

  return Object.keys(newObj).length > 0 ?
    Object.keys(newObj)
      .map(key => typeof newObj[key] === "object" ?
        {[key]: deflatten(newObj[key])}
        :
        {[key]: newObj[key]}
      )
      .reduce((a, b) => ({...a, ...b}))
    :
    {}
}


export default deflatten