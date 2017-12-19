import React from 'react'
import PropTypes from 'prop-types'

const InputBox = ({
  guess,
  placeholder,
  value,
  type,
  required
}) => {
  return (
    <div>
      <input guess={guess} />
    </div>
  )
}

InputBox.propTypes = {
  guess: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  type: PropTypes.oneOf(['text']),
  required: PropTypes.bool,
}

InputBox.defaultProps = {
  required: true
}

export default InputBox;
