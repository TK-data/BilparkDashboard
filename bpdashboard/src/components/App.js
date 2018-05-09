import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Login from './login/Login';
import LoginTest from './login2/Logintest';
import logo from './car.png';
import './../styles/App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Velkommen til Bilparken!</h1>
        </header>
        <div className="App-intro">
        </div>
        <main>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={LoginTest} />
        </main>
      </div>
    );
  }
}

export default App;
