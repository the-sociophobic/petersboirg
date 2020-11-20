import React from 'react'

import { StoreProvider } from 'components/Store'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Main from 'pages/Main'
import Activities from 'pages/Activities'
import Agency from 'pages/Agency'
import Contact from 'pages/Contact'


const pages = {
  main: Main,
  activities: Activities,
  agency: Agency,
  contact: Contact,
}


export default class App extends React.Component {
  constructor(props) {
    super(props)

    const currentPage = window.location.pathname.replace('/', '')

    this.state = {
      page: Object.keys(pages).includes(currentPage) ? currentPage : "main",
      // page: "contact",
    }
  }

  render = () =>
    <StoreProvider>
      <div className="App">
        <div className="container">
          <Header
            page={this.state.page}
            setPage={page => this.setState({page: page})}
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
    </StoreProvider>
}
