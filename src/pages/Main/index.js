import React from 'react'

import { FormattedMessage } from 'components/Store'
import Img from 'components/Img'

import background from './background.jpg'


export default class Main extends React.Component {
  render = () =>
    <div className="main">
      <div className="row d-flex justify-content-center">
        <div className="main__background">
          <Img src={background} />
          {/* <div className="main__background__container">
            <iframe src="https://www.youtube.com/embed/VxP1zavsTtU?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;playlist=VxP1zavsTtU&amp;mute=1" frameborder="0" allow="autoplay" id="widget2"/>
          </div> */}
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="main__name">
          <FormattedMessage id="Main.name" />
        </div>
      </div>
      <div className="row">
        <div className="main__quote main__quote--left">
          „
        </div>
        <div className="main__description">
          <FormattedMessage id="Main.description" />
        </div>
        <div className="main__quote main__quote--right">
          „
        </div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="main__tagline">
          <FormattedMessage id="Main.tagline" />
        </div>
      </div>
    </div>
}