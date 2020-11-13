import React from 'react'

import { FormattedMessage } from 'components/Store'
import Quotes from 'components/Quotes'
import Video from 'components/Video'

// import background from './background.jpg'


export default class Main extends React.Component {
  render = () =>
    <div className="main">
      <div className="row d-flex justify-content-center">
        <div className="main__background">
          <div className="main__background__container">
            <Video autoplay src="VxP1zavsTtU" />
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="main__name">
          <FormattedMessage id="Main.name" />
        </div>
      </div>
      <Quotes author={
        <FormattedMessage id="Main.author" />
      }>
        <FormattedMessage id="Main.quotes" />
      </Quotes>
    </div>
}