import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CirclePicker } from 'react-color';

class ColorPicker extends Component {
  render() {
    return (
      <div>
        <p>Color Picker</p>
        <CirclePicker colors={['#AAAAAA','#000000']} onChange={this.props.changeColor}/>
      </div>
    )
  }
}


export default ColorPicker;
