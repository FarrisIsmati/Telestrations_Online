import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import InputBox             from '../InputBox/InputBox'
import Button               from '../Button/Button'

import                           './Guess.css'

class Guess extends Component {
  constructor(props){
    super(props)
    this.state = {
      guess: ''
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
    //Find height width of image and set it to that
    const tempImgStyle = {
      width: '100%',
      height: '100%',
      backgroundColor: '#E24E24'
    }
    return (
      <div>
        {
          this.state.loaded && this.state.history.length >= 1 ?
          <img src={this.state.history[this.state.guesses - 1].drawing}/>:
          <div style={tempImgStyle}></div>
        }
        <div className='input-holder'>
          <InputBox setguess={} />
          <Button onClick={this.onSave} buttonClick={this.onSave} name="Next" />

        </div>
      </div>
    )
  }
}

export default Guess
