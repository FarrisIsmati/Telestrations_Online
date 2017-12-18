import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color';

class ColorPicker extends Component {
  render() {
    const {
      colors,
      width
    } = this.props

    return (
      <div>
        <CirclePicker colors={colors} width={width} circleSpacing={5} onChange={this.props.changeColor}/>
      </div>
    )
  }
}

ColorPicker.propTypes = {
  width: PropTypes.string,
  colors: PropTypes.array
}

ColorPicker.defaultProps = {
  width: '0',
  colors: ['#AAAAAA','#353535']
}

export default ColorPicker;
