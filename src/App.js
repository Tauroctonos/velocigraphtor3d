import React, { Component } from 'react';
import './App.css';
import Icosahedron from './Icosahedron'

class App extends Component{
  render() {
    return (
      <div id='sceneHolder'>
        <Icosahedron/>
        <Icosahedron/>
      </div>
    );
  }
}

export default App;
