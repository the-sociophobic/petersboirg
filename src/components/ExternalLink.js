import React from 'react'


export default props =>
  <a
    className={`lev-link ${props.className}`}
    href={props.to}
    target={props.newTab ? "_blank" : ""}
    rel="noopener noreferrer"
    onClick={() => props.changeColor()}
  >
    {props.children}
  </a>