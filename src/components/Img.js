import React from 'react'

import isProd from 'utils/isProd'


const images = require.context('../styles/img', true)


export default class Img extends React.Component {
  render = () =>
    this.props.src ?
      <img
        src={
          isProd() ?
            `https://the-sociophobic.github.io/${images(`./${this.props.src}`).default}`
            :
            images(`./${this.props.src}`).default
        }
        className={`img ${this.props.className}`}
        alt=""
      />
      :
      ""
}