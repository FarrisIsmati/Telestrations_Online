import React, { Component }     from 'react'
import { Link }          from 'react-router-dom'

import                                './GameListDisplay.css'

class GameListDisplay extends Component {
  render() {
    const Games = this.props.games.slice(0).reverse().map((game) => {
      if(game.complete) {
        return (
        <div className="flex flex-column-center game-list-display-holder" key={ game._id }>
          <Link to={`/${game._id}/gamehistory`}>
            <div className="drawingDiv">
            // ^ use spine-casing or snake_casing for classNames
              <img className="game-drawing" src={game.history[0].drawing} alt=""/>
            </div>

            <div className="gamehistory-link">
              <p>{game.history[0].name}</p>
              <h1>{game.phrase}</h1>
            </div>
          </Link>
        </div>
        )
      }
    })

    return(
      <div className="flex historyPreview">
        {Games}
      </div>
    )
  }
}


export default GameListDisplay
