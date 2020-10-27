import React from 'react'
import { IntlProvider } from 'react-intl'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Main from 'pages/Main'
import Activities from 'pages/Activities'
import Agency from 'pages/Agency'
import Contact from 'pages/Contact'

import messages from 'utils/messages'
import flatten from 'utils/flatten'
import arrayToLocale from 'utils/arrayToLocale'


const pages = {
  Main: Main,
  Activities: Activities,
  Agency: Agency,
  Contact: Contact,
}


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      page: "Main",
      lang: "ru",
    }
  }

  componentDidMount = () => {
    console.log(arrayToLocale(flatten(messages))[this.state.lang])
  }

  render = () =>
    <IntlProvider
      locale={this.state.lang}
      defaultLocale="ru"
      messages={arrayToLocale(flatten(messages))[this.state.lang]}
    >
      <div className="App">
        <div className="container">
          <Header
            page={this.state.page}
            lang={this.state.lang}
            setPage={page => this.setState({page: page})}
            setLang={lang => this.setState({lang: lang})}
          />
        </div>
        <div className="content">
          <div className="container">
            {(Page =>
              <Page />
            )(pages[this.state.page])}
          </div>
        </div>
        <Footer />
      </div> 
    </IntlProvider>
}
