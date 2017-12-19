import React, { Component }     from 'react'
import axios                    from 'axios'
import { Link, Route }          from 'react-router-dom'

class GameListDisplay extends Component {
  constructor() {
    super ()
    this.state = {
      games: []
    }
    this.getCompletedGames = this.getCompletedGames.bind(this)
  }

  getCompletedGames() {
    axios.get('https://project3-sjf.herokuapp.com/api/game')
    .then((response) => {
      this.setState({games: response.data})
      this.setState({loaded:true})
      console.log(response.data)
    })
    .catch((err) => console.log(err))
  }

componentDidMount() {
  this.getCompletedGames()
}

render() {
  const games = this.state.games.map((game, index) => {
       return (
         { game.complete ?
         <div key={ index }>
           <p> {game.pharase} </p>
           <p> By {game.history[0]} </p>
           <p>{game.date}</p>
         </div>:
         <div />
       }
       )
     })


  return(
    <div>
    {this.state.loaded ?
      <p>{games }</p>:
      <p>loading</p>
    }
    </div>
  )
}
}


export default GameListDisplay
