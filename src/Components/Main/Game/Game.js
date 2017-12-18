import React, { Component } from 'react'
import axios                from 'axios'
import DrawStart from                  '../../SubComponents/Draw/DrawStart'
import DrawPlay from                  '../../SubComponents/Draw/DrawPlay'

import                            '../../../Stylesheets/CommonStyles.css'
import                            './Game.css'

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
        started: false,
        completed: false,
        phrase: '',
    }
  }



  render () {
    return (
      <div className='game-holder flex flex-column'>
        {this.state.started ?
          <DrawPlay /> :
          <DrawStart />
        }
      </div>
    )
  }
}

export default Game
