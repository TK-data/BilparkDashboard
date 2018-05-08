import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './../../styles/login.css';


class Login extends React.Component {

  handleSubmit(){
    console.log("Submitted");
  }

  render(){
    return(
      <form name="login" className="loginContainer" onSubmit={this.handleSubmit}>
        <input className="userInput" type="text" placeholder="Brukernavn" required="required" />
        <input className="userInput" type="password" placeholder="Passord" required="required" />
        <button className="loginButton"><div className="buttonText">Logg inn</div></button>
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
