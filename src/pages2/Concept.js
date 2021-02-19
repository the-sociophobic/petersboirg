import React from 'react'

import {
  FormattedMessage,
  StoreContext,
  getMessage
} from 'components/Store'
import Img from 'components/Img'
import Paragraph from 'components/Paragraph'


class Concept extends React.Component {

  static contextType = StoreContext

  render = () =>
    <div className="concept">
      <div className="concept__header">
        <Img src={getMessage(this, "Concept.header.img")} />
        <FormattedMessage id="Concept.header.title" />
      </div>

      
    </div>
}


export default Concept