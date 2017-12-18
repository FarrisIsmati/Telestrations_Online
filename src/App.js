import React, { Component } from                'react'
import { Route, Redirect, Switch } from   'react-router-dom'

//Imports
import Game from                                './Components/Main/Game/Game'
import Header from                              './Components/Main/Header/Header'
import GameHistory from                         './Components/Main/GameHistory/GameHistory'
import GameList from                            './Components/Main/GameList/GameList'
//CSS
import                                           './App.css'

class App extends Component {
  render() {
    return (
       <div className="app-container">
           <Header />
           <div className='body'>
             <Switch>
              <Route path='/about' render={(props) => (
               <p>Render about page here</p>)}/>

               <Route path='/:gameId/gamehistory'render={(props) => (
                 <GameHistory {...props} />)}/>

              <Route exact path='/' render={(props) => (
               <GameList {...props} />)}/>

              <Route path='/:gameId' render={(props) => (
                <Game {...props} />)}/>
             </Switch>
           </div>

        </div>
    )
  }
}

export default App
