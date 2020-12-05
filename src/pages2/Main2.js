import React from 'react'

import {
  FormattedMessage,
  StoreContext
} from 'components/Store'
import Map from 'components/Map'
import Video from 'components/Video'


class Main2 extends React.Component {
  
  static contextType = StoreContext

  render = () =>
    <div className="main2">
      <div className="main2__first">
        <div className="main2__first__left">
          <div className="main2__first__left__title">
           <FormattedMessage id="Main2.title" />
          </div>
          <div className="main2__first__left__tagline">
            <FormattedMessage id="Main2.tagline" />
          </div>
        </div>
        <div className="main2__first__right">
          <div className="main2__first__right__video">
            <Video autoplay src="sdMmbaSeGXE" />
            <svg class="svg">
              <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                <path d="M0.998,0.347 C0.998,0.156,0.775,0.001,0.5,0.001 C0.225,0.001,0.002,0.156,0.002,0.347 V0.999 H0.998 V0.347 M0.002,0.999 H0 V1 H0.002 V0.999 M0.998,0.999 V1 H1 V0.999 H0.998 M0.5,0.003 C0.774,0.003,0.996,0.157,0.996,0.347 H1 C1,0.155,0.776,0,0.5,0 V0.003 M0.004,0.347 C0.004,0.157,0.226,0.003,0.5,0.003 V0 C0.224,0,0,0.155,0,0.347 H0.004 M0.004,0.999 V0.347 H0 V0.999 H0.004 M0.998,0.997 H0.002 V1 H0.998 V0.997 M0.996,0.347 V0.999 H1 V0.347 H0.996" />
              </clipPath>
            </svg>
          </div>
        </div>
      </div>
      <div className="main2__second">
        <div className="row">
          <div className="col-12 col-md-6 my-3">
            <FormattedMessage id="Main2.text0" />
          </div>
        </div>
        <Map />
        <div className="row justify-content-end">
          <div className="col-12 col-md-6 my-3">
            <FormattedMessage id="Main2.headline1" />
            <br />
            <FormattedMessage id="Main2.text1" />
          </div>
        </div>
      </div>
      {this.context.locale !== "ru" &&
        <div className="main2__third">

        </div>
      }
    </div>
}


export default Main2