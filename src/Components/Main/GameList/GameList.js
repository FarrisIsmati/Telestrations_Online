import React, { Component }     from 'react'
import { Link }                 from "react-router-dom"
import axios                    from 'axios'

class GameList extends Component{
  constructor(props){
    super(props)

    this.createGame = this.createGame.bind(this)
  }

  createGame() {
    axios.post('http://localhost:3001/api/game')
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
