import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import                           './GuessInput.css'

class GuessInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="guess">
        <div id="input">
          <input type="text" name="textbox" onChange={(e) => this.props.setguess(e)} placeholder="Guess here!"/>
        </div>
      </div>
    )
  }
}

export default GuessInput
