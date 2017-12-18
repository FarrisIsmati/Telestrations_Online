import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Canvas               from '../Canvas/Canvas'

import                            './Draw.css'
class DrawStart extends Component {
  constructor(props){
    super(props)

    this.onSave = this.onSave.bind(this)
  }

  onSave(value){
    console.log(value)
  }

  render() {
    return (
      <div className="draw-holder">
        <Canvas height="500px" />
      </div>
    )
  }
}

export default DrawStart
