import React, { Component } from 'react'
import axios                from 'axios'

import Canvas               from '../../SubComponents/Canvas/Canvas'
import Guess                from '../../SubComponents/Guess/Guess'
import DropDown             from '../../SubComponents/DropDown/DropDown'

import                           '../../../Stylesheets/CommonStyles.css'
import                           './Game.css'

class Game extends Component {
  constructor(props){
    super(props)

    this.state = {
        loaded: false
    }

    this.setPlayers = this.setPlayers.bind(this)
    this.getGuesses = this.getGuesses.bind(this)
    this.startGame = this.startGame.bind(this)
    this.getGameData = this.getGameData.bind(this)
  }

  getGameData() {
    axios.get(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}`)
      .then((response) => {
          this.setState({...response.data, loaded: true})
          // ^ combine these two setStates into one
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

  setPlayers(e) {
    axios.put(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}`,
      {
        'player': e.target.value
      })
      .then((response) => {
          console.log('players set')
        })
      .catch((err) => console.log(err))
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
      this.props.history.push(`/${this.props.match.params.gameId}/gamehistory`)
    }
  }

  render () {
    const canvasPlay =
      this.state.loaded && this.state.guesses > 1 ? <Canvas
          {...this.props}
          phrase={this.state.history[this.state.guesses - 1].guess}
          requestdata={this.getGameData}
          height={'350px'}
          start={false}
        /> : null

    const canvasStart = <Canvas
      {...this.props}
      phrase={this.state.phrase}
      startgame={this.startGame}
      requestdata={this.getGameData}
      height={'350px'}
      start={true}
    >
    <div className="flex">
      <p style={{'paddingRight': '5px', 'fontSize': '1.2em'}}>Players</p>
      <DropDown setplayers={(e) => this.setPlayers(e)}/>
    </div>
  </Canvas>

    //If the game hasn't started render canvas start otherwise render canvas play
    const canvas = this.state.guesses === 0 ? canvasStart : canvasPlay

    return (
      <div className='game-holder flex flex-column'>
        {
          this.getGuesses() && this.state.loaded ?
          canvas :
          null
        }

        {
          !this.getGuesses() && this.state.loaded ?
          <Guess {...this.props} requestdata={this.getGameData} /> :
          null
        }
      </div>
    )
  }
}

export default Game
