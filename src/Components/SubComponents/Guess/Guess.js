import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

class Guess extends Component {
  constructor(props){
    super(props)

    this.onSave = this.onSave.bind(this)
  }

  onSave(){
    axios.post(`http://localhost:3001/api/game/${this.props.match.params.gameId}/history`, {
        'guess': 'A test string'
      })
      .then((response) => {
        console.log('run request')
        this.props.requestdata()
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <p>This will be an image of the previous guess</p>
        <div className='input-holder'>
          <p onClick={this.onSave}>Next</p>
        </div>
      </div>
    )
  }
}

export default Guess
