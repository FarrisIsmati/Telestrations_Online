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
      <div>
        <div class="dropdown">
          <button class="dropbtn">Select Players</button>
            <div class="dropdown-content">
              <option>2</option>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>10</option>
            </div>
        </div>
      </div>
    )
  }
}

export default DropDown
