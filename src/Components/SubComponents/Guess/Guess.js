import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import GuessInput           from '../GuessInput/GuessInput'
import Button               from '../Button/Button'
import SwitchPrompt         from '../SwitchPrompt/SwitchPrompt'

import                           './Guess.css'

class Guess extends Component {
  constructor(props){
    super(props)
    this.state = {
      guess: '',
      loaded: false,
      image: ''
    }

    this.setGuess = this.setGuess.bind(this)
    this.getGameData = this.getGameData.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  getGameData() {
    axios.get(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}`)
      .then((response) => {
          setTimeout(function(){
            this.setState({...response.data})
            this.setState({loaded: true})
          }.bind(this), 3000)

        })
      .catch((err) => console.log(err))
  }

  onSave() {
    console.log(this.state.guess)
    axios.post(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}/history`, {
        'guess': this.state.guess
      })
      .then((response) => {
        console.log('run request')
        this.props.requestdata()

      })
      .catch((err) => console.log(err))
  }

  setGuess(e) {
    this.setState({
      guess: e.target.value
    })
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
          <div>
            <div className='input-holder'>
              <img src={this.state.history[this.state.guesses - 1].drawing}/>
              <GuessInput setguess={this.setGuess} />
              <Button onClick={this.onSave} buttonClick={this.onSave} name="Next" />
            </div>
          </div>:
          <SwitchPrompt />
        }
      </div>
    )
  }
}

export default Guess
