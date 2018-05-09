import React from 'react';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import './../../styles/login.css';


class LoginTest extends React.Component {

  render(){
    return(
      <div>
        <p>Innlogging vellyket</p>
      </div>
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
