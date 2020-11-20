import React from 'react'

import {
  FormattedMessage,
  StoreContext,
  getMessage
} from 'components/Store'
import ExternalLink from 'components/ExternalLink'
import Img from 'components/Img'


export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  static contextType = StoreContext

  renderItem = item =>
    <div className="contact__item">
      <div className="col-1" />
      <div className="contact__item__links">
        <ExternalLink to={`mailto:${item.mail}`}>
          {item.mail}
        </ExternalLink>
        <br />
        <ExternalLink to={`tel:${item.phone}`}>
          {item.phone}
        </ExternalLink>
      </div>
      <div className="col-1 d-lg-none" />
      <div className="contact__item__address">
        {item.address}
      </div>
    </div>

  render = () =>
    <div className="contact">
      {this.renderItem({
        mail: "visit@spbcityguide.ru",
        phone: "+7 (953) 379 5351",
        address: <>
            <b><FormattedMessage id="Contact.addressSPBline0" /></b><br />
            <FormattedMessage id="Contact.addressSPBline1" />
          </>,
      })}
      {this.renderItem({
        mail: "rguironnet@yahoo.fr",
        phone: "+33 6 8175 9728",
        address: <FormattedMessage id="Contact.addressLyon" />,
      })}
      <div className="row pt-4 pb-5">
        <div className="col-1" />
        <div className="contact__social">
          {[
            {
              logo: 'Contact/inst.svg',
              url: getMessage(this, "Footer.links.inst"),
            },
            {
              logo: 'Contact/yt.svg',
              url: "https://www.youtube.com/channel/UC86fsRjjxxbFUNwNlZQsCjA/featured",
            },
            {
              logo: 'Contact/linkedin.svg',
              url: "",
            },
            {
              logo: 'Contact/fb.svg',
              url: getMessage(this, "Footer.links.fb"),
            },
          ].map(item =>
            <ExternalLink
              key={item.logo}
              newTab
              to={item.url}
              className="contact__social__item"
            >
              <Img src={item.logo} />
            </ExternalLink>
          )}
        </div>
        <div className="col-1" />
        <div
          className="contact__button"
          onClick={() => {}}
        >
          <div
            className="contact__button__item"
            onClick={() => {}}
          >
            <div className="contact__button__item__text">
              <FormattedMessage id="Contact.requestButton" />
            </div>
          </div>
        </div>
      </div>
    </div>
}