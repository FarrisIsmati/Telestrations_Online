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
    })
    .catch((err) => console.log(err))
  }

componentDidMount() {
  this.getCompletedGames()
}

render() {
  const Games = this.state.games.map((game) => {
    if(game.complete) {
       return (
         <div key={ game._id }>
           <img src={game.history[0].drawing}/>
           <p> {game.phrase} </p>
        </div>
      )
    }
  })

  return(
    <div>
    {this.state.loaded ?
      <p>{Games}</p>:
      <p>loading</p>
    }
    </div>
  )
}
}


export default GameListDisplay
