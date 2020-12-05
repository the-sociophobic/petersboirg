import React from 'react'

import Img from 'components/Img'
import Video from 'components/Video'


class Paragraph extends React.Component {
  componentDidMount = () => console.log(this.props)
  render = () => {
    const align = this.props.imgLeft || this.props.imgRight ? "paragraph--row" : "paragraph--column"
    const order = this.props.imgLeft || this.props.imgTop ? "paragraph--img-first" : "paragraph--text-first"

    return (
      <div className={`paragraph ${align} ${order} ${this.props.header && "paragraph--header"}`}>
        {(this.props.img || this.props.video) &&
          <div className={`paragraph__img ${this.props.circle && "paragraph__img--circle"}`}>
            {this.props.img && <Img src={this.props.img} />}
            {this.props.video && <Video autoplay src="QQczuS9Wl2s" />}
          </div>
        }

        <div className="paragraph__text">
          <div className="paragraph__text__title">
            {this.props.title}
          </div>
          <div className="paragraph__text__tagline">
            {this.props.tagline}
          </div>
          <div className="paragraph__text__text">
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}


export default Paragraph