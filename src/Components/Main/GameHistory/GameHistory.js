import React, { Component } from 'react'
import axios                from 'axios'

class GameHistory extends Component{
  constructor(props){
    super(props)

    this.state = {
      loaded: false
    }

    this.getGameData = this.getGameData.bind(this)
  }

  getGameData() {
    axios.get(`http://localhost:3001/api/game/${this.props.match.params.gameId}`)
      .then((response) => {
          this.setState({...response.data})
          this.setState({loaded: true})
        })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getGameData()
  }

  render() {
    return(
      <div>
      <h1>Game history</h1>
      {this.state.loaded ?
        <p>{this.state.date}</p>:
          <p>Loading</p>
      }
      </div>
    )
   }
}


export default GameHistory
