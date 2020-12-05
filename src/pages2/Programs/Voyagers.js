import React from 'react'
import _, { drop } from 'lodash'

import getAttribsFrom from 'utils/getAttribsFrom'
import deflatten from 'utils/deflatten'
import {
  FormattedMessage,
  StoreContext,
  getMessage
} from 'components/Store'
import Paragraph from 'components/Paragraph'
import Dropdown from 'components/Dropdown'


class Voyagers extends React.Component {

  static contextType = StoreContext
  
  render = () =>
    <div className="programs__voyagers">
      <Paragraph
        header circle imgLeft
        video={getMessage(this, "Programs.Voyagers.video")}
        title={<FormattedMessage id="Programs.Voyagers.title" />}
        tagline={<FormattedMessage id="Programs.Voyagers.tagline" />}
      />
      {_.transform(
        deflatten(
          getAttribsFrom(this.context.messages, "Programs.Voyagers.dropdowns")),
        (res, value, key) => res.push(value)
        , [])
      .map(dropdown =>
        <Dropdown title={dropdown.title}>
          <Paragraph
            circle
            imgRight={dropdown.imgRight}
            imgLeft={dropdown.imgLeft}
            text={dropdown.text}
            img={`Programs/Voyagers/${dropdown.img}`}
          />
        </Dropdown>
      )}
    </div>
}


export default Voyagers