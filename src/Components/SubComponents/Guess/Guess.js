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
      name: '',
      guess: '',
      loaded: false,
      image: ''
    }

    this.setName = this.setName.bind(this)
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
          }.bind(this), 1200)

        })
      .catch((err) => console.log(err))
  }

  onSave() {
    console.log(this.state.guess)
    axios.post(`https://project3-sjf.herokuapp.com/api/game/${this.props.match.params.gameId}/history`, {
        'guess': this.state.guess,
        'name': this.state.name
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

  setName(e) {
    this.setState({
      name: e.target.value
    })
  }

  componentDidMount() {
    this.getGameData()
  }

  render() {
    return (
      <div>
        {
          this.state.loaded && this.state.history.length >= 1 ?
            <div className='guess-holder flex flex-column-center'>
              <img src={this.state.history[this.state.guesses - 1].drawing}/>
              <div className="flex flex-center">
                <div className="guess-name-input-holder">
                  <GuessInput setinput={this.setName} />
                </div>
                <p>what is this</p>
                <GuessInput setinput={this.setGuess} />
              </div>
              <Button onClick={this.onSave} buttonClick={this.onSave} name="Next" />
            </div>:
          <SwitchPrompt />
        }
      </div>
    )
  }
}

export default Guess
