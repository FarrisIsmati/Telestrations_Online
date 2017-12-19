import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import                           './DropDown.css'

class DropDown extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    )
  }
}

export default DropDown
