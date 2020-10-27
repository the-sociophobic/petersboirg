import React from 'react'
import { FormattedMessage } from 'react-intl'

import background from './background.jpg'


export default class extends React.Component {
  render = () =>
    <div className="main">
      <div className="row d-flex justify-content-center">
        <div className="main__background">
          <img src={background} />
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="main__name">
          <FormattedMessage id="Main.name" />
        </div>
      </div>
      <div className="row">
        <div className="main__quote main__quote--left">
          „
        </div>
        <div className="main__description">
          <FormattedMessage id="Main.description" />
        </div>
        <div className="main__quote main__quote--right">
          „
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="main__tagline">
          <FormattedMessage id="Main.tagline" />
        </div>
      </div>
    </div>
}