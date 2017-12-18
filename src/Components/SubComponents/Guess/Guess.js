import React, { Component } from 'react'
import PropTypes            from 'prop-types'

import GameButton           from '../GameButton/GameButton'

class Draw extends Component {
  render() {
    return (
      <div>
        <p>This will be an image of the previous guess</p>
        <div className='input-holder'>
          <GameButton title='Next'/>
        </div>
      </div>
    )
  }
}

export default Draw;
