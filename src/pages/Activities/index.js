import React from 'react'

import { FormattedMessage } from 'components/Store'
import Folder from 'components/Folder'

import Events from './Events'
import Trips from './Trips'



export default class Activities extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () =>
    <div className="activities">
      <Folder data={[
        {
          hash: "events",
          title: <FormattedMessage id="Activities.Events.title" />,
          content: <Events />,
        },
        {
          hash: "trips",
          title: <FormattedMessage id="Activities.Trips.title" />,
          content: <Trips />,
        },
      ]} />
   </div>
}