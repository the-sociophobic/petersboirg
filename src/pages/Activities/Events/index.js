import React from 'react'

import FolderTabContents from 'components/FolderTabContents'


export default class Events extends React.Component {
  render = () =>
    <div className="events">
      <FolderTabContents
        tab="Events"
        sections={["TeamBuilding", "GalaDiner", "YouthFestivals", "SportEvent", "EventOnBoard", "VIPEvent"]}
      />
    </div>
}