import React from 'react';
import './App.css';
import Icosahedron from './Icosahedron'
import BarGraph from './bargraph';

function App() {
  return (
    <div id='sceneHolder'>
      <Icosahedron/>
      <BarGraph/>
    </div>
  );
}

export default App;
