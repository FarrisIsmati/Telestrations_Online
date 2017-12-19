import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import Button               from '../Button/Button'

import                           './CanvasInput.css'
import                           '../../../Stylesheets/CommonStyles.css'


class CanvasInput extends Component {
  render() {
    return (
      <div className="flex flex-column-center">
        {this.props.children}
        <div className="flex text-holder">
          <p><strong>Draw a</strong></p>
          <p>{this.props.phrase}</p>
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
