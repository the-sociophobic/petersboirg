import React from 'react'


const Quotes = props =>
  <div className="quotes">
    <div className="quotes__row">
      <div className="quotes__item quotes__item--left">
        „
      </div>
      <div className="quotes__content">
        {props.children}
      </div>
      <div className="quotes__item quotes__item--right">
        „
      </div>
    </div>

    <div className="quotes__line-container">
      <div className="col-1" />
      <div className="quotes__line" />
      <div className="col-1" />
    </div>

    <div className="quotes__author">
      <div className="col-1" />
      <div className="col-7">
        {props.author}
      </div>
      <div className="col-1" />
    </div>
  </div>


export default Quotes