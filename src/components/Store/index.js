import React from 'react'

import flatten from 'utils/flatten'
import addNewLines from 'utils/addNewLines'
import arrayToLocale from './arrayToLocale'
import defaultMessages from './defaultMessages'


const StoreContext = React.createContext("messages")

class StoreProvider extends React.Component {
  constructor(props) {
    super(props)

    const locale = props.locale || "ru"
    this.parsedMessages = arrayToLocale(flatten(defaultMessages))
    
    this.state = {
      locale: locale,
      messages: this.parsedMessages[locale],
      setLocale: _locale => this.setState({
        locale: _locale,
        messages: this.parsedMessages[_locale],
      }),
    }
  }

  render = () =>
    <StoreContext.Provider value={this.state}>
      {this.props.children}
    </StoreContext.Provider>
}

const getMessage = (_this, id) =>
  _this.context.messages[id] || ""

class FormattedMessage extends React.Component {
  static contextType = StoreContext

  render = () =>
    addNewLines(
      getMessage(this, this.props.id))
}

export {
  StoreContext,
  StoreProvider,
  getMessage,
  FormattedMessage,
}