import React from 'react'

import {
  FormattedMessage,
  StoreContext,
  getMessage
} from 'components/Store'
import ExternalLink from 'components/ExternalLink'
import Img from 'components/Img'


export default class Footer extends React.Component {
  static contextType = StoreContext

  render = () =>
    <div className="footer">
      {!this.props.secondApp &&
        <div className="footer__top">
          <div className="footer__top__agenda">
            <FormattedMessage id="Footer.agenda" />
            <Img src='Footer/arrow.svg' />
          </div>
          <div className="footer__top__projects">
            {["graduation", "pure", "IFTM"]
              .map(project =>
                <div
                  key={project}
                  className="footer__top__projects__item"
                >
                  <div className="footer__top__projects__item__name">
                    <FormattedMessage id={`Footer.projects.${project}.name`} />
                  </div>
                  <div className="footer__top__projects__item__place">
                    <FormattedMessage id={`Footer.projects.${project}.place`} />
                  </div>
                </div>
            )}
          </div>
        </div>
      }
      <div className="footer__down">
        <div className="container">
          <div className="footer__down__text">
            <div className="footer__down__text__address">
              <FormattedMessage id="Footer.officeSPb" />
              <br />
              <b><FormattedMessage id="Footer.officeSPbAddress" /></b>
            </div>
            <div className="footer__down__text__email">
              <br />
              <ExternalLink to="mailto:visit@spbcityguide.ru">
                visit@spbcityguide.ru
              </ExternalLink>
            </div>
          </div>
          <div className="footer__down__text">
            <div className="footer__down__text__address">
              <FormattedMessage id="Footer.officeLyon" />
              <br />
              <b><FormattedMessage id="Footer.officeLyonAddress" /></b>
            </div>
            <div className="footer__down__text__email">
              <br />
              <ExternalLink to="mailto:rguironnet@yahoo.fr">
                rguironnet@yahoo.fr
              </ExternalLink>
            </div>
          </div>
          <div className="footer__down__logos">
            <div className="footer__down__logos__partners">
              {[
                {
                  logo: 'Footer/logos/tourist.svg',
                  url: getMessage(this, "Footer.links.tourist"),
                },
                {
                  logo: 'Footer/logos/russia.svg',
                  url: getMessage(this, "Footer.links.russia"),
                },
                {
                  logo: 'Footer/logos/petersboirg.svg',
                  url: this.props.secondApp ? "https://petersbourgevents.com" : "https://petersbourgvoyages.com",
                },
                {
                  logo: 'Footer/logos/eco.svg',
                  // url: "",
                },
              ].map((logo, index) =>
                !logo.url ? 
                  <Img
                    key={index}
                    src={logo.logo}
                    className="footer__down__logos__partners__item"
                  />
                  :
                  <ExternalLink
                    key={index}
                    newTab
                    to={logo.url}
                  >
                    <Img
                      src={logo.logo}
                      className="footer__down__logos__partners__item"
                    />
                  </ExternalLink>
              )}
            </div>
            <div className="footer__down__logos__social">
              {[
                {
                  logo: 'Footer/social/inst.svg',
                  url: getMessage(this, "Footer.links.inst"),
                },
                {
                  logo: 'Footer/social/yt.svg',
                  url: "https://www.youtube.com/channel/UC86fsRjjxxbFUNwNlZQsCjA/featured",
                },
                {
                  logo: 'Footer/social/linkedin.svg',
                  // url: "",
                },
                {
                  logo: 'Footer/social/fb.svg',
                  url: getMessage(this, "Footer.links.fb"),
                },
              ].map((logo, index) =>
                !logo.url ?
                  <Img
                    key={index}
                    src={logo.logo}
                    className="footer__down__logos__social__item"
                  />
                  :
                  <ExternalLink
                    key={index}
                    newTab
                    to={logo.url}                    
                  >
                    <Img
                      src={logo.logo}
                      className="footer__down__logos__social__item"
                    />
                  </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
}