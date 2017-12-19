import React, { Component } from 'react'
import axios                from 'axios'

import Canvas               from '../../SubComponents/Canvas/Canvas'
import Guess                from '../../SubComponents/Guess/Guess'

import                           '../../../Stylesheets/CommonStyles.css'
import                           './Game.css'

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
        loaded: false
    }

    this.getGuesses = this.getGuesses.bind(this)
    this.startGame = this.startGame.bind(this)
    this.getGameData = this.getGameData.bind(this)
  }

  getGameData() {
    axios.get(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}`)
      .then((response) => {
          this.setState({...response.data})
          this.setState({loaded: true})
        })
      .catch((err) => console.log(err))
  }

  getGuesses() {
    if (this.state.guesses || !this.state.started) {
      if (this.state.guesses % 2 === 0){
        return true
      } else {
        return false
      }
    }
  }

  startGame() {
    this.setState({
      started: true
    })
  }

  componentDidMount() {
    this.getGameData()
  }

  componentDidUpdate() {
    if (this.state.complete){
      //REDIRECT TO GAME HISTORY ROUTE
      this.props.history.push(`/${this.props.match.params.gameId}/gamehistory`)
    }
  }

  render () {
    const canvasPlay = <Canvas {...this.props} requestdata={this.getGameData} height={'500px'} />
    const canvasStart = <Canvas {...this.props} startgame={this.startGame} requestdata={this.getGameData} height={'500px'}>
      
    </Canvas>

    //If the game hasn't started render canvas start otherwise render canvas play
    const canvas = this.state.guesses === 0 ? canvasStart : canvasPlay

    return (
      <div className='game-holder flex flex-column'>
        {
          this.getGuesses() && this.state.loaded ?
          canvas :
          <Guess {...this.props} requestdata={this.getGameData} />
        }
      </div>
    )
  }
}

export default Game
