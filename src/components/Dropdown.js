import React from 'react'


export default class Dropdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: props.initialOpen || false,
      contentHeight: 0,
    }

    this.contentRef = React.createRef()

    window.addEventListener("resize", this.updateContentHeight)
    window.addEventListener("orientationchange", this.updateContentHeight)
  }

  componentDidMount = () =>
    this.updateContentHeight()

  updateContentHeight = () =>
    this.setState({contentHeight: this.contentRef?.current.clientHeight})

  render = () =>
    <div className={`dropdown ${this.state.opened && "dropdown--opened"}`}>
      <div className="dropdown__title">
        {this.props.title}
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