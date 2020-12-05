import React from 'react'

import _ from 'lodash'

import getAttribsFrom from 'utils/getAttribsFrom'
import deflatten from 'utils/deflatten'
import {
  FormattedMessage,
  StoreContext,
  getMessage
} from 'components/Store'
import Paragraph from 'components/Paragraph'
import ExternalLink from 'components/ExternalLink'
import resolveURL from 'utils/resolveURL'



class Programs extends React.Component {

  static contextType = StoreContext

  render = () => {
    const mappedParagraphs = _.transform(
      deflatten(
        getAttribsFrom(this.context.messages, "Programs.Programs.paragraphs")),
      (res, value, key) => res.push(value)
      , [])
      .map(paragraph =>
        <div className="programs__programs__paragraphs__item programs__programs__paragraphs__item--half">
          <Paragraph
            {...
              _.mapValues(
                paragraph,
                (value, key) =>
                  (key === "img" || key === "PDF") && value ? `Programs/Programs/${value}` : value)}
          />
        </div>
    )

    return (
      <div className="programs__programs">
        <Paragraph
          header circle imgLeft
          video={getMessage(this, "Programs.Programs.video")}
          title={<FormattedMessage id="Programs.Programs.title" />}
          tagline={<FormattedMessage id="Programs.Programs.tagline" />}
        />
        <div className="programs__programs__paragraphs">
          {mappedParagraphs.slice(0, 2)}
          <div className="programs__programs__pdf">
            <div className="programs__programs__pdf__text">
              <FormattedMessage id="Programs.Programs.PDF" />
              {["Autumn", "Winter", "Spring", "Summer"]
                .map(paragraph =>
                  <ExternalLink
                    newTab
                    to={resolveURL(getMessage(this, `Programs.Programs.paragraphs.${paragraph}.PDF`))}
                  >
                    «<FormattedMessage id={`Programs.Programs.paragraphs.${paragraph}.name`} />»
                  </ExternalLink>)
                .reduce((a, b) =>
                  <>
                    {a} / {b}
                  </>
              )}
            </div>
          </div>
          {mappedParagraphs.slice(2)}
        </div>
      </div>
    )
  }
}


export default Programs