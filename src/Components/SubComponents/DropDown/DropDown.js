import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import                           './DropDown.css'

class DropDown extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="dropdown-container">
        <select onChange={(e) => this.props.setplayers(e)}>
          <option>2</option>
          <option>4</option>
          <option>6</option>
          <option>8</option>
          <option>10</option>
        </select>
      </div>
    )
  }
}

export default DropDown
