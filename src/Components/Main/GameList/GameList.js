import React, { Component }     from 'react'
import axios                    from 'axios'
import GameListDisplay          from '../../SubComponents/GameListDisplay/GameListDisplay.js'

import                                './GameList.css'

class GameList extends Component{
  constructor(props){
    super(props)

    this.state = {
      loaded: false,
      games: []
    }

    this.getGames = this.getGames.bind(this)
    this.createGame = this.createGame.bind(this)
  }

  createGame() {
    axios.post('https://project3-sjf.herokuapp.com/api/game', {
        'player': 2
      })
      .then((response) => {
          this.props.history.push(`/${response.data._id}`)
        })
      .catch((err) => console.log(err))
  }

  getGames() {
    axios.get('https://project3-sjf.herokuapp.com/api/game')
      .then((response) => {
        this.setState({
          games: response.data,
          loaded: true
        })
      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getGames()
  }

  render() {
   return(
     <div>
       <div className="flex flex-center game-list-button-holder">
         <button className="button" onClick={this.createGame}><span>Create Game</span></button>
       </div>

      {this.state.loaded ?
        <GameListDisplay games={this.state.games} /> :
        null
      }
     </div>
   )
  }
 }


export default GameList
