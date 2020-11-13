import React from 'react'

import Img from 'components/Img'
import Video from 'components/Video'


const Section = props =>
  <div className="section">
    <div className="section__row-0">
      <div className="section__row-0__img">
        <Img src={props.img0} />
      </div>
      <div className="section__row-0__paragraph">
        <div className="section__row-0__paragraph__tagline">
          {props.tagline}
        </div>
        <div className="section__row-0__paragraph__text">
          {props.text0}
        </div>
      </div>
    </div>
    {props.text1 && props.img1 &&
      <div className="section__row-1">
        <div className="section__row-1__paragraph">
          <div className="section__row-1__paragraph__text">
            {props.text1}
          </div>
        </div>
        <div className="section__row-1__img">
          <Img src={props.img1} />
        </div>
      </div>}
    <div className="section__row-final">
      {props.finalImg && <Img src={props.finalImg} />}
      {props.finalImg1 && <Img src={props.finalImg1} />}
      {props.finalVideo && <Video src={props.finalVideo} />}
    </div>
  </div>


export default Section