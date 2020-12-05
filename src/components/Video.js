import React from 'react'


class Video extends React.Component {
  render = () =>
    <div className="video">
      {this.props.autoplay ?
        <iframe
          src={`https://www.youtube.com/embed/${this.props.src}?autoplay=1&amp;loop=1&amp;enablejsapi=1&amp;&amp;playerapiid=featuredytplayer&amp;controls=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;color=white&amp;iv_load_policy=3&amp;theme=light&amp;wmode=transparent&amp;playlist=${this.props.src}&amp;mute=1`}
          className="video__iframe"
          title={this.props.src}
          frameBorder="0"
          allow="autoplay"
          id="widget2"
        />
        :
        <iframe
          src={`https://www.youtube.com/embed/${this.props.src}`}
          className="video__iframe"
          title={this.props.src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      }
    </div>
}


export default Video