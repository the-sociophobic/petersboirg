import React from 'react'

// import isProd from 'utils/isProd'


const Link = props =>
  <div
    className={`${props.className} ${props.page === props.to && props.activeClassName}`}
    href={props.to}
    onClick={e => {
      // e.preventDefault()
      window.scrollTo(0, 0)
      // isProd() || false ?
      //   window.location = `https://petersbourgevents.com/${props.to}`
      //   :
      props.setPage && props.setPage(props.to)
    }}
  >
    {props.children}
  </div>  

export default Link