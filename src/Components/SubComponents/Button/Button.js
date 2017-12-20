import React                from 'react'
import PropTypes            from 'prop-types'

import                           './Button.css'

const Button= ({ buttonClick, name }) => (
  <div>
    <button className="button" onClick={buttonClick} ><span>{name}</span></button>
  </div>
)

Button.propTypes = {
  buttonClick: PropTypes.func,
  name: PropTypes.string,
}

export default Button
