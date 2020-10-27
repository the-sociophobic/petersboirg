import React from 'react'
import { FormattedMessage } from 'react-intl'

import ExternalLink from 'components/ExternalLink'

import arrow from './arrow.svg'

import tourist from './logos/tourist.svg'
import russia from './logos/russia.svg'
import petersboirg from './logos/petersboirg.svg'
import eco from './logos/eco.svg'

import inst from './social/inst.svg'
import yt from './social/yt.svg'
import linkedin from './social/linkedin.svg'
import fb from './social/fb.svg'


export default class Footer extends React.Component {
  render = () =>
    <div className="footer">
      <div className="footer__top">
        <div className="footer__top__agenda">
          <FormattedMessage id="Footer.agenda" />
          <img src={arrow} />
        </div>
        <div className="footer__top__projects">
          {["graduation", "pure", "IFTM"]
            .map(project =>
              <div className="footer__top__projects__item">
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
      <div className="footer__down">
        <div className="container">
          <div className="footer__down__text">
            <div className="footer__down__text__address">
              <FormattedMessage id="Footer.officeSPb" />
              <br />
              <b><FormattedMessage id="Footer.officeSPbAddress" /></b>
              <br /><br />
              <FormattedMessage id="Footer.officeLyon" />
              <br />
              <b><FormattedMessage id="Footer.officeLyonAddress" /></b>
            </div>
            <div className="footer__down__text__email">
              <br />
              <ExternalLink to="mailto:visit@spbcityguide.ru">
                visit@spbcityguide.ru
              </ExternalLink>
              <br /><br /><br />
              <ExternalLink to="mailto:rguironnet@yahoo.fr">
                rguironnet@yahoo.fr
              </ExternalLink>
            </div>
          </div>
          <div className="footer__down__logos">
            <div className="footer__down__logos__partners">
              {[
                {
                  logo: tourist,
                  url: "",
                },
                {
                  logo: russia,
                  url: "",
                },
                {
                  logo: petersboirg,
                  url: "",
                },
                {
                  logo: eco,
                  url: "",
                },
              ].map(logo =>
                <ExternalLink
                  to={logo.url}
                  className="footer__down__logos__partners__item"
                >
                  <img src={logo.logo} />
                </ExternalLink>
              )}
            </div>
            <div className="footer__down__logos__social">
              {[
                {
                  logo: inst,
                  url: "",
                },
                {
                  logo: yt,
                  url: "",
                },
                {
                  logo: linkedin,
                  url: "",
                },
                {
                  logo: fb,
                  url: "",
                },
              ].map(logo =>
                <ExternalLink
                  to={logo.url}
                  className="footer__down__logos__social__item"
                >
                  <img src={logo.logo} />
                </ExternalLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
}