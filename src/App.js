import React, { Component } from 'react';
import './App.css';
import ema, { pepe } from './Components'
import Header from './Header'

class App extends Component {
  render () {
    console.log(ema)
    console.log(pepe)
    return (
      <div className="App">
        <Header />
        <Header />
        <Header />
        {/* TAREA */}
        {/* hacer componente main y footer */}
      </div>
    )
  }
}

export default App;
