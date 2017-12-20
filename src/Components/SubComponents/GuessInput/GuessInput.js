import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import                           './GuessInput.css'

class GuessInput extends Component {
  constructor(props) {
    super(props);

    console.log(this.props)
  }

  render() {
    const {
      previewText
    } = this.props

    return (
      <div className="input-holder">
        <input type="text" name="textbox" onChange={(e) => this.props.setinput(e)} placeholder={previewText}/>
      </div>
    )
  }
}

GuessInput.propTypes = {
  previewText: PropTypes.string
}

export default GuessInput
