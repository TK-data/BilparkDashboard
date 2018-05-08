import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './../../styles/login.css';


class Login extends React.Component {
  render(){
    return(
      <form className="loginContainer">
        <input className="userInput" type="text" placeholder="Brukernavn" required="required" />
        <input className="userInput" type="password" placeholder="Passord" required="required" />
        <button className="loginButton" onClick={() => this.props.changePage()}><div className="buttonText">Logg inn</div></button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Login)
