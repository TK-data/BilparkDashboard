import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './../../styles/login.css';


class LoginTest extends React.Component {

  handleSubmit(){
    console.log("Submitted");
  }

  render(){
    return(
      <form className="loginContainer" onSubmit={this.handleSubmit}>
        <input className="userInput" type="text" placeholder="Brukernavn" required="required" />
        <input className="userInput" type="password" placeholder="Passord" required="required" />
        <button className="loginButton" onClick={() => this.props.changePage()}><div className="buttonText">Logg Ut</div></button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(LoginTest)
