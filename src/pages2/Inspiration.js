import React from 'react'
import _, { drop } from 'lodash'

import {
  FormattedMessage,
  StoreContext,
  getMessage
} from 'components/Store'
import Paragraph from 'components/Paragraph'
import Dropdown from 'components/Dropdown'
import getAttribsFrom from 'utils/getAttribsFrom'
import deflatten from 'utils/deflatten'


class Inspiration extends React.Component {

  static contextType = StoreContext

  render = () =>
    <div className="inspiration">
      <Paragraph
        header circle imgLeft
        video={getMessage(this, "Inspiration.video")}
        title={<FormattedMessage id="Inspiration.title" />}
        tagline={<FormattedMessage id="Inspiration.tagline" />}
      />
      {_.transform(
        deflatten(
          getAttribsFrom(this.context.messages, "Inspiration.dropdowns")),
        (res, value, key) => res.push(value)
        , [])
        .map(dropdown =>
          <Dropdown title={dropdown.title}>
            <div className="inspiration__paragraphs">
              {dropdown.paragraphs &&
                _.transform(dropdown.paragraphs, (res, value, key) => res.push(value), [])
                  .map(paragraph =>
                    <div
                      className={`inspiration__paragraphs__item ${(paragraph.imgTop || paragraph.imgBottom) && "inspiration__paragraphs__item--half"}`}
                    >
                      <Paragraph
                        {...
                          _.mapValues(
                            paragraph,
                            (value, key) =>
                              key === "img" && value ? `Inspiration/${value}` : value)}
                      />
                    </div>
                  )
              }
            </div>
          </Dropdown>)
      }
    </div>
}


export default Inspiration