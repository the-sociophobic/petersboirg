import React from 'react'


const images = require.context('../styles/img', true)


export default class Img extends React.Component {
  render = () =>
    this.props.src ?
      <img
        src={images(`./${this.props.src}`).default}
        alt="" />
      : ""
}