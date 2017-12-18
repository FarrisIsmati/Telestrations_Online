import React, { Component }     from 'react'
import axios                    from 'axios'

class GameList extends Component{
  constructor(props){
    super(props)

    this.createGame = this.createGame.bind(this)
  }

  createGame() {
    axios.post('https://project3-sjf.herokuapp.com/api/game', {
        'player': 6
      })
      .then((response) => {
          this.props.history.push(`/${response.data._id}`)
        })
      .catch((err) => console.log(err))
  }


  render() {
   return(
     <div>
       <h1>Game list</h1>
       <p onClick={this.createGame}>Create Game</p>
     </div>
   )
  }
 }


export default GameList
