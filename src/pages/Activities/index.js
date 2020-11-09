import React from 'react'

import Folder from 'components/Folder'


export default class Activities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () =>
    <div className="container">
      <Folder />
   </div>
}