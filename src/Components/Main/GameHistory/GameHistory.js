import React, { Component } from 'react'
import axios                from 'axios'

import './GameHistory.css'

class GameHistory extends Component{
  constructor(props){
    super(props)

    this.state = {
      loaded: false,
      rounds: []
    }

    this.getGameData = this.getGameData.bind(this)
  }

  getGameData() {
    axios.get(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}`)
      .then((response) => {
        let history = response.data.history
        for (let i = 0; i < history.length; i++) {
          let drawing = history[i].drawing
          let name = history[i].name
          if (drawing !== undefined) {
            let guess = history[i+1].guess
            let name = history[i+1].name
            let round = {
              drawing: drawing,
              guess: guess,
              name: name
            }
            let newRoundsArray = this.state.rounds
            newRoundsArray.push(round)
            this.setState({rounds: newRoundsArray})
          }
        }
          this.setState({loaded: true})
          console.log(response);
          console.log(this.state.pictures)
        })
      .catch((err) => console.log(err))
  }

  componentWillMount() {
    this.getGameData()
  }

  render() {

    const GuessingRounds = this.state.rounds.map((round) => {
         return (
           <div>
             <div className="round-drawing-container">
               <img className="round-drawing" src={round.drawing}/>
               <h1>Drawn By {round.name}</h1>
             </div>
             <h1>{round.name} guessed {round.guess}</h1>
           </div>
        )
    })

    return(
      <div className="gameHistoryPage">
      <h1>Game history</h1>
      {this.state.loaded ?
        <div>{GuessingRounds}</div> : <p>Loading</p>
      }
      </div>
    )
   }
}


export default GameHistory
