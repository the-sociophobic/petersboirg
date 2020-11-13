import React from 'react'

import ResizeObserver from 'resize-observer-polyfill'


export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: props.initialOpen || false,
      contentHeight: 0,
    }

    this.contentRef = React.createRef()
  }

  componentDidMount() {
    this.resizeObs = new ResizeObserver(this.updateContentHeight.bind(this))
      .observe(this.contentRef.current)
  }

  updateContentHeight = () =>
    this.setState({ contentHeight: this.contentRef.current && this.contentRef.current.clientHeight })

  render = () =>
    <div className={`dropdown ${this.state.opened && "dropdown--opened"}`}>
      <div
        className="dropdown__title"
        onClick={() => this.setState({ opened: !this.state.opened })}
      >
        <div className="dropdown__title__text">
          {this.props.title}
        </div>
      </div>
      <div
        className="dropdown__content"
        style={{
          height: this.state.opened ? this.state.contentHeight : 0
        }}
      >
        <div
          className="dropdown__content__container"
          ref={this.contentRef}
        >
          {this.props.children}
        </div>
      </div>
    </div>
}