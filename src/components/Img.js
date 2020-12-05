import React from 'react'

import resolveURL from 'utils/resolveURL'


export default class Img extends React.Component {
  render = () =>
    this.props.src ?
      <img
        src={resolveURL(this.props.src)}
        className={`img ${this.props.className}`}
        alt=""
      />
      :
      ""
}