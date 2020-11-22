import React from 'react'

import Img from 'components/Img'
import Video from 'components/Video'
import addNewLines from 'utils/addNewLines'


const Section = props =>
  <div className="section">
    <div className="section__row-0">
      <div className="section__row-0__img">
        <Img src={props.img0} />
      </div>
      <div className="section__row-0__paragraph">
        <div className="section__row-0__paragraph__tagline">
          {addNewLines(props.tagline)}
        </div>
        <div className="section__row-0__paragraph__text">
          {addNewLines(props.text0)}
        </div>
      </div>
    </div>
    {props.text1 && props.img1 &&
      <div className="section__row-1">
        <div className="section__row-1__paragraph">
          <div className="section__row-1__paragraph__text">
            {addNewLines(props.text1)}
          </div>
        </div>
        <div className="section__row-1__img">
          <Img src={props.img1} />
        </div>
      </div>}
    {props.finalImg &&
      <div className="section__row-final">
        <div className="col">
          <Img src={props.finalImg} />
        </div>
      </div>}
    {props.finalImg1 &&
      <div className="section__row-final mt-5">
        <div className="col">
          <Img src={props.finalImg1} />
        </div>
      </div>}
    {props.finalVideo &&
      <div className="section__row-final">
        <Video src={props.finalVideo} />
      </div>}
  </div>


export default Section