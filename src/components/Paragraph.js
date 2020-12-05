import React from 'react'

import Img from 'components/Img'
import Video from 'components/Video'
import notEmpty from 'utils/notEmpty'


class Paragraph extends React.Component {
  render = () => {
    const align = this.props.imgLeft || this.props.imgRight ? "paragraph--row" : "paragraph--column"
    const order = this.props.imgLeft || this.props.imgTop ? "paragraph--img-first" : "paragraph--text-first"

    return (
      <div className={`paragraph ${align} ${order} ${this.props.header && "paragraph--header"}`}>
        
        {(this.props.img || this.props.video) &&
          <div className={`paragraph__img ${this.props.circle && "paragraph__img--circle"}`}>
            {this.props.img && <Img src={this.props.img} />}
            {this.props.video && <Video autoplay src={this.props.video} />}
          </div>
        }

        {(notEmpty(this.props.title) || notEmpty(this.props.tagline) || notEmpty(this.props.text)) &&
          <div className="paragraph__text">
            {notEmpty(this.props.title) &&
              <div className="paragraph__text__title">
                {this.props.title}
              </div>
            }
            {notEmpty(this.props.tagline) &&
              <div className="paragraph__text__tagline">
                {this.props.tagline}
              </div>
            }
            {notEmpty(this.props.text) &&
              <div className="paragraph__text__text">
                {this.props.text}
              </div>
            }
          </div>
        }

        {this.props.oi &&
          <div className="paragraph__oi" />}
      </div>
    )
  }
}


export default Paragraph