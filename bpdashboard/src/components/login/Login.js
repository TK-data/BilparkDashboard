import React from 'react';
import './../../styles/login.css';


class Login extends React.Component {
  render(){
    return(
      <form className="loginContainer">
        <input className="userInput" type="text" placeholder="Brukernavn" required="required" />
        <input className="userInput" type="password" placeholder="Passord" required="required" />
        <button className="loginButton"><div className="buttonText">Logg inn</div></button>
      </form>
    )
  }
}
export default Login;
