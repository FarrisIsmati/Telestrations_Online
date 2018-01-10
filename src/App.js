import React, { Component } from                'react'
import { Route, Switch } from   'react-router-dom'

//Imports
import Game from                                './Components/Main/Game/Game'
import Header from                              './Components/Main/Header/Header'
import GameHistory from                         './Components/Main/GameHistory/GameHistory'
import GameList from                            './Components/Main/GameList/GameList'
import About from                            './Components/SubComponents/About/About'
//CSS
import                                           './App.css'

class App extends Component {
  render() {
    return (
       <div className="app-container">
            // Consider looking into BEM as a naming convention for your CSS. It works
            // very well with components: https://css-tricks.com/bem-101/
           <Header />
           <div className='body'>
             <Switch>
              <Route path='/about' render={(props) => (
               <About {...props} />)}/>

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
