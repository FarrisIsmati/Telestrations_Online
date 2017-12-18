import React, { Component } from 'react'

import Draw from                  '../../SubComponents/Draw/Draw'

import                            '../../../Stylesheets/CommonStyles.css'
import                            './Game.css'
class Game extends Component {
  render () {
    return (
      <div className='game-holder flex flex-column'>
        <Draw />
      </div>
    )
  }
}

export default Game
