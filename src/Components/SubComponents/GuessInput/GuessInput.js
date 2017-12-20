import React                from 'react'
import PropTypes            from 'prop-types'

import                           './GuessInput.css'

const GuessInput = ({ setinput, previewText }) => (
  <div className="input-holder">
    <input type="text" name="textbox" onChange={(e) => setinput(e)} placeholder={previewText}/>
  </div>
)

GuessInput.propTypes = {
  setinput: PropTypes.func,
  previewText: PropTypes.string
}

export default GuessInput
