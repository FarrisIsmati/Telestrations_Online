import React, { Component } from 'react';

import Draw from './Draw/Draw'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Draw />
      </div>
    )
  }
}

export default App;
