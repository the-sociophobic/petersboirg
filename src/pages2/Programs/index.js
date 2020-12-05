import React from 'react'

import { FormattedMessage } from 'components/Store'

import Voyagers from './Voyagers'
import Programs_ from './Programs'
import Folder from 'components/Folder'


class Programs extends React.Component {
  render = () =>
    <div className="programs">
      <Folder
        data={[
          {
            hash: "voyagers",
            title: <FormattedMessage id="Programs.Voyagers.title" />,
            content: <Voyagers />,
          },
          {
            hash: "programs",
            title: <FormattedMessage id="Programs.Programs.title" />,
            content: <Programs_ />,
          },
        ]}
      />
    </div>
}


export default Programs