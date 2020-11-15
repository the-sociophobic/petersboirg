import React from 'react'


const addNewLines = string =>
  string
    .split('\n')
    .reduce((a, b) =>
      <React.Fragment>
        {a}<br />{b}
      </React.Fragment>)


export default addNewLines