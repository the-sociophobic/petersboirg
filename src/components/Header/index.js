import React from 'react'
import { FormattedMessage } from 'react-intl'

import logo from './logo.svg'


export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderLang = () =>
    <div className="header__lang">
      {["en", "fr", "ru"]
        .map(lang =>
          <div
            className={`header__lang__item ${lang === this.props.lang && "header__lang__item--active"}`}
            onClick={() => this.props.setLang(lang)}
          >
            {lang}
          </div>
      )}
    </div>

  render = () =>
    <div className="header">
      {["Main", "Activities", "Agency", "Contact"].map(link =>
        <div
          className={`header__item ${this.props.page === link && "header__item--active"}`}
          onClick={() => this.props.setPage(link)}
        >
          <FormattedMessage id={`Header.${link}`} />
        </div>
      )}
      {this.renderLang()}
      <div
        className="header__logo"
        onClick={() => this.props.setPage("Main")}
      >
        <img src={logo} />
      </div>
    </div>
}