import React, { Component } from                'react'
import { Route, Link, Redirect, Switch } from   'react-router-dom'

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

               <Route path='/gamehistory'render={() => (
                 <Redirect to='/' />)}/>

              <Route exact path='/' render={(props) => (
               <GameList />)}/>

              <Route path='/:gameId' render={(props) => (
                <Game />)}/>
             </Switch>
           </div>

        </div>
    )
  }
}

export default App
