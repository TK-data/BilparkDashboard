import React, { Component } from 'react';
import logo from './car.png';
import './../styles/App.css';
import Login from './login/Login';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Velkommen til Bilparken</h1>
        </header>
        <div className="App-intro">
          <Login/>
        </div>
      </div>
    );
  }
}

export default App;
