import React                from 'react'
import PropTypes            from 'prop-types'

import                           './DropDown.css'

const DropDown = ({ setplayers }) => (
  <div className="dropdown-container">
    <select onChange={(e) => setplayers(e)}>
      <option>2</option>
      <option>4</option>
      <option>6</option>
      <option>8</option>
      <option>10</option>
    </select>
  </div>
)

DropDown.propTypes = {
  setplayers: PropTypes.func
}

export default DropDown
