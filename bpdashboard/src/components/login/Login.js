import React from 'react';
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import './../../styles/login.css';
import logo from './../car.png';
import { postUser, postCurrent, loginMail } from '../../actions/auth';


class Login extends React.Component {

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(){
    const userValue = document.querySelectorAll('.userInput');
    if (userValue[0].value && userValue[1].value.length > 7) {
      this.props.postUser(userValue[0].value, userValue[1].value);
    }
  }

  render(){
    return(
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Velkommen til Bilparken!</h1>
        </header>
        <div className="App-intro">
        </div>
        <div name="login" className="loginContainer" >
          <input className="userInput" type="text" placeholder="Brukernavn" required="required" />
          <input className="userInput" type="password" placeholder="Passord" required="required" />
          <button className="loginButton" onClick={this.handleSubmit}><div className="buttonText">Logg inn</div></button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.auth.isLoading,
    hasErrored: state.auth.hasErrored,
    user: state.auth.user,
    mail: state.loginMail,
    formOptions: state.loginOptions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changePage: () => push('/admin'),
    postUser: (username, password) => dispatch(postUser(username, password)),
    postCurrent: () => dispatch(postCurrent()),
    loginMail: mail => dispatch(loginMail(mail)),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
