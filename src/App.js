import React from 'react'

import { StoreProvider } from 'components/Store'

import Header from 'components/Header'
import Footer from 'components/Footer'

import Main from 'pages/Main'
import Activities from 'pages/Activities'
import Agency from 'pages/Agency'
import Contact from 'pages/Contact'

import Main2 from 'pages2/Main2'
import Inspiration from 'pages2/Inspiration'
import Programs from 'pages2/Programs'
import Concept from 'pages2/Concept'


const pages1 = {
  main: Main,
  activities: Activities,
  agency: Agency,
  contact: Contact,
}
const pages2 = {
  main: Main2,
  inspiration: Inspiration,
  programs: Programs,
  concept: Concept,
  contact: Contact,
}


export default class App extends React.Component {
  constructor(props) {
    super(props)

    const currentPage = window.location.pathname.replace('/', '')
    // const secondApp = (new URLSearchParams(window.location.pathname)).has('second-app')
    const secondApp = (window.location.search.includes('second-app'))
    const pages = secondApp ? pages2 : pages1

    this.state = {
      secondApp: secondApp,
      page: Object.keys(pages).includes(currentPage) ? currentPage : "main",
      pages: pages,
    }
  }

  render = () =>
    <StoreProvider>
      <div className={`App ${this.state.secondApp && "second-app"}`}>
        <div className="container">
          <Header
            page={this.state.page}
            pages={Object.keys(this.state.pages)}
            setPage={page => this.setState({page: page})}
            secondApp={this.state.secondApp}
          />
        </div>
        <div className="content">
          <div className="container">
            {(Page =>
              <Page />
            )(this.state.pages[this.state.page])}
          </div>
        </div>
        <Footer secondApp={this.state.secondApp} />
      </div> 
    </StoreProvider>
}
