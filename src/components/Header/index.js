import React from 'react'

import {
  FormattedMessage,
  StoreContext
} from 'components/Store'
import Img from 'components/Img'
import ExternalLink from 'components/ExternalLink'
import isProd from 'utils/isProd'


export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      navOpened: false
    }

    this.burgerRef = React.createRef()
    this.navRef = React.createRef()

    window.addEventListener('click', e =>
      e.target !== this.burgerRef.current &&
      e.target !== this.navRef.current &&
        this.setState({ navOpened: false }))
  }

  static contextType = StoreContext

  setPage = page => {
    this.props.setPage(page)
    this.setState({ navOpened: false })
  }

  renderNav = () =>
    <div
      ref={this.navRef}
      className={`header__nav ${this.state.navOpened && "header__nav--opened"}`}
    >
      {["main", "activities", "agency", "contact"].map(link =>
        isProd() && false ?
          <ExternalLink
            key={link}
            to={`http://petersbourgevents.com/${link}`}
            onClick={() => this.setPage(link)}
            className={`header__nav__item ${this.props.page === link && "header__nav__item--active"}`}
          >
            <FormattedMessage id={`Header.${link}`} />
          </ExternalLink>
          :
          <div
            key={link}
            className={`header__nav__item ${this.props.page === link && "header__nav__item--active"}`}
            onClick={() => this.setPage(link)}
          >
            <FormattedMessage id={`Header.${link}`} />
          </div>
      )}
    </div>

  renderLang = () =>
    <div className="header__lang">
      {["en", "fr", "ru"]
        .map(lang =>
          <div
            key={lang}
            className={`header__lang__item ${lang === this.context.locale && "header__lang__item--active"}`}
            onClick={() => this.context.setLocale(lang)}
          >
            {lang}
          </div>
      )}
    </div>

  render = () =>
    <div className="header">
      <div className="header__fixed-content">
        <div
          ref={this.burgerRef}
          className="header__burger"
          onClick={() => this.setState({ navOpened: !this.state.navOpened })}
        >

        </div>
        {this.renderNav()}
        {this.renderLang()}
        {isProd() && false ?
          <ExternalLink
            className="header__logo"
            to="http://petersbourgevents.com"
          >
            <Img src="Header/logo.svg" />          
          </ExternalLink>
          :
          <div
            className="header__logo"
            onClick={() => this.setPage("main")}
          >
            <Img src="Header/logo.svg" />
          </div>
        }
      </div>
    </div>
}