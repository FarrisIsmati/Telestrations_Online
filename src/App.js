import React, { Component } from 'react';

import Canvas from './Canvas/Canvas'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Canvas width="600px" height="400px" borderWidth="8px" borderRadius="5px"/>
      </div>
    )
  }
}

export default App;
