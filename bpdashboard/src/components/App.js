import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './login/Login';
import Cars from './cars/Cars';
import './../styles/App.css';
class App extends Component {

  render() {
    return (
      <div className="App">
        <main>
          <Route exact path="/" component={Login} />
          <Route exact path="/admin" component={Cars} />
        </main>
      </div>
    );
  }
}

export default App;
