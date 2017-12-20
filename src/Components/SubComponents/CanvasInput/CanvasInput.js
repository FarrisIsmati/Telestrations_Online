import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Button               from '../Button/Button'
import GuessInput           from '../GuessInput/GuessInput'

import                           './CanvasInput.css'
import                           '../../../Stylesheets/CommonStyles.css'

class CanvasInput extends Component {
  render() {
    return (
      <div className="flex flex-column-center canvas-input-holder">
        {this.props.children}
        <div className="flex flex-center text-holder">
          <GuessInput setinput={this.props.setinput} previewText={'Hey, you'}/>
          <p>draw</p>
          <h1>{this.props.phrase}</h1>
        </div>
        <Button buttonClick={this.props.save} name="Next" />
      </div>
    )
  }
}

CanvasInput.propTypes = {
  children: PropTypes.node
}

export default CanvasInput
