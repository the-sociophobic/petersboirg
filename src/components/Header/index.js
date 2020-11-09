import React from 'react'

import {
  FormattedMessage,
  StoreContext
} from 'components/Store'
import Img from 'components/Img'

import logo from './logo.svg'


export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static contextType = StoreContext

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
        {["Main", "Activities", "Agency", "Contact"].map(link =>
          <div
            key={link}
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
          <Img src={logo} />
        </div>
      </div>
    </div>
}