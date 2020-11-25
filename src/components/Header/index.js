import React from 'react'

import {
  FormattedMessage,
  StoreContext
} from 'components/Store'
import Img from 'components/Img'
import Link from 'components/Link'


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
      this.state.navOpened &&
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
        <Link
          key={link}
          to={link}
          {...this.props}
          className="header__nav__item"
          activeClassName="header__nav__item--active"
        >
          <FormattedMessage id={`Header.${link}`} />
        </Link>
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
          className={`header__burger ${this.state.navOpened && "header__burger--opened"}`}
          onClick={() => this.setState({ navOpened: !this.state.navOpened })}
        />
        {this.renderNav()}
        {this.renderLang()}
        <Link
          to=""
          {...this.props}
          className="header__logo"
        >
          <Img src="Header/logo.svg" />
        </Link>

      </div>
    </div>
}