import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Canvas               from '../Canvas/Canvas'

class Draw extends Component {
  render() {
    return (
      <div>
        <Canvas width="600px" height="400px"/>
        <div className="input-holder  ">

        </div>
      </div>
    )
  }
}

export default Draw;
