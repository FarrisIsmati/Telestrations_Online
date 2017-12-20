import React, { Component }     from 'react'
import axios                    from 'axios'
import { Link, Route }          from 'react-router-dom'

import './GameListDisplay.css'

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
      // console.log(response)
    })
    .catch((err) => console.log(err))
  }

componentDidMount() {
  this.getCompletedGames()
}

render() {
  const Games = this.state.games.slice(0).reverse().map((game) => {
    if(game.complete) {
      return (
      <div className="flex flex-column-center" key={ game._id }>
        <div className="drawingDiv">
          <img className="game-drawing" src={game.history[0].drawing}/>
        </div>


        <div className="gamehistory-link">
          <h1>{game.history[0].name}</h1>
          <Link to={`/${game._id}/gamehistory`}><h1>{game.phrase}</h1></Link>
        </div>
      </div>
      )
    }
  })

  return(
    <div>
    {this.state.loaded ?
      <div className="flex historyPreview">
      {Games}
      </div>:
      <p>loading</p>
    }
    </div>
  )
}
}


export default GameListDisplay
