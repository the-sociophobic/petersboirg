import React from 'react'

import FolderTabContents from 'components/FolderTabContents'


export default class Events extends React.Component {
  render = () =>
    <div className="trips">
      <FolderTabContents
        tab="Trips"
        sections={["IncentiveTour", "SeminarTour", "PressTour", "ProductLaunch", "VIPTour"]}
      />
    </div>
}