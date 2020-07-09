import React from 'react';

import './App.css';

import Jumbotron from './components/Jumbotron'
import Proyectos from './components/Proyectos'

function App() {
  return (
    <div className="App">
        <Jumbotron />
        <Proyectos />
    </div>
  );
}

export default App;