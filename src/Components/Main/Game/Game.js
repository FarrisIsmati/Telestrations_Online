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
    }

    this.getGameData = this.getGameData.bind(this)
  }

  getGameData() {
    axios.get(`http://localhost:3001/api/game/${this.props.match.params.gameId}`)
      .then((response) => {
          this.setState({...response.data})
        })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getGameData()
  }

  componentDidUpdate() {
    console.log(this.state)
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
