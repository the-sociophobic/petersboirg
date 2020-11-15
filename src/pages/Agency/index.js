import React from 'react'

import Img from 'components/Img'
import Quotes from 'components/Quotes'
import { FormattedMessage } from 'components/Store'


export default class Agency extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () =>
    <div className="agency">
      <Quotes>
        <FormattedMessage id="Agency.quotes" />
      </Quotes>
      <div className="row justify-content-center">
        <div className="col-7 d-flex flex-column align-items-center text-center">
          <Img src="Agency/team.jpg" />
          <div className="agency__title">
            <FormattedMessage id="Agency.title" />
          </div>
          <div className="agency__text0">
            <FormattedMessage id="Agency.text0" />
          </div>
          <div className="agency__text1">
            <FormattedMessage id="Agency.text1" />
          </div>
          <div className="agency__text2">
            <FormattedMessage id="Agency.text2" />
          </div>
        </div>
      </div>
    </div>
}