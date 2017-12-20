import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import axios                from 'axios'

import                           './About.css'

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <div className='Rules'>
          <h2> How to play: </h2>
          <ul>
            <li>To start, click create Game.</li>
            <li>Choose how many players there are.</li>
            <li>Each player gets one turn. Half of the players are drawing, the other half are guessing.</li>
            <li>Player one draws the phrase they are given.</li>
            <li>Player two guesses what the drawing is. No peaking!</li>
            <li>Player three draws what player two guessed.</li>
            <li>Player four guess what player three drew</li>
            <li>Continue in this patern until all players have gone.</li>
            <li>At the end of the game, you are able to view all the pictures and guesses</li>
            <li>Your game is saved on the front page for your viewing pleasure.</li>
          </ul>
          <h2>Requirements:</h2>
          <li> Must have an even amout of players </li>
          <li> You must draw a picture to contiune on </li>
          <li> You must guess on the picture to contiune</li>
        </div>
      </div>
    )
  }
}

export default About