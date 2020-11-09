import React from 'react'


export default class Folder extends React.Component {
  constructor(props) {
    super(props)

    const currentTab = props.data && props.data
      .map(tab => tab.hash)
      .indexOf(window.location.hash.replace("#", ""))

    this.state = {
      currentTab: currentTab !== -1 ? currentTab : 0,
    }
  }

  render = () =>
    <div className="folder">
      <div className="folder__tabs">
        {this.props.data && this.props.data.map((tab, index) =>
          <div
            key={tab.title}
            className={`folder__tabs__item ${index === this.state.currentTab && "folder__tabs__item--active"}`}
            onClick={() => this.setState({currentTab: index})}
          >
            {tab.title}
          </div>
        )}
      </div>
      <div className="folder__content">
        {this.props.data && this.props.data[this.state.currentTab].content}
      </div>
    </div>
}