import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

class Guess extends Component {
  constructor(props){
    super(props)
    this.state = {
      loaded: false,
      image: ''
    }

    this.getGameData = this.getGameData.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  getGameData() {
    axios.get(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}`)
      .then((response) => {
          this.setState({...response.data})
          this.setState({loaded: true})
          console.log(this.state.history[0].drawing)
        })
      .catch((err) => console.log(err))
  }

  onSave(){
    axios.post(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}/history`, {
        'guess': 'A test string'
      })
      .then((response) => {
        console.log('run request')
        this.props.requestdata()

      })
      .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getGameData()
  }

  render() {
    return (
      <div>
        {
          this.state.loaded ?
        <img src={this.state.history[0].drawing}/>:
        <p>loading</p>}
        <div className='input-holder'>
          <p onClick={this.onSave}>Next</p>
        </div>
      </div>
    )
  }
}

export default Guess
