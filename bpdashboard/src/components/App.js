import React, { Component } from 'react';
import logo from './car.png';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Bilpark Dashboard</h1>
        </header>
        <p className="App-intro">
          <code>place login here</code>
        </p>
      </div>
    );
  }
}

export default App;
