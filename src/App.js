import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import Icosahedron from './Icosahedron'
import IcosahedronHooked from './IcosahedronHooked'

function App() {
  return (
    <div id='sceneHolder'>
      <Icosahedron/>
      <IcosahedronHooked />
    </div>
  );
}

export default App;
