import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import                           './Button.css'

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonStyle = {
      verticalAlign: "middle"
    }

    return (
      <div>
        <button className="button" onClick={this.props.buttonClick} style={buttonStyle}><span>{this.props.name}</span></button>
      </div>
    )
  }
}

export default Button
