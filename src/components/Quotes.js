import React from 'react'


const Quotes = props =>
  <div className="quotes">
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


export default Quotes