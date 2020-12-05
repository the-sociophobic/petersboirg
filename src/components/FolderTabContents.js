import React from 'react'
import _ from 'lodash'

import {
  FormattedMessage,
  StoreContext
} from 'components/Store'
import Quotes from 'components/Quotes'
import Dropdown from 'components/Dropdown'
import Section from 'components/Section'
import getAttribsFrom from 'utils/getAttribsFrom'


export default class FolderTabContents extends React.Component {

  static contextType = StoreContext

  render = () =>
    <>
      <Quotes
        author={
          <>
            <b><FormattedMessage id={`Activities.${this.props.tab}.taglineAuthor0`} /></b><br />
            <FormattedMessage id={`Activities.${this.props.tab}.taglineAuthor1`} />
          </>
      }>
        <FormattedMessage id={`Activities.${this.props.tab}.tagline`} />
      </Quotes>

      {this.props.sections && this.props.sections
        .map((section, index) =>
          <Dropdown
            key={index}
            title={<FormattedMessage id={`Activities.${this.props.tab}.${section}.title`} />}
          >
            <Section
              {...
                _.mapValues(
                  getAttribsFrom(this.context.messages, `Activities.${this.props.tab}.${section}`)
                  , (value, key) =>
                    key.includes('mg') && value ?
                      `Activities/${this.props.tab}/${value}`
                      :
                      value)}
            />
          </Dropdown>
      )}
    </>
}