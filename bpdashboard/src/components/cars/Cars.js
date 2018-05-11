import React from 'react';
import { push } from 'react-router-redux'
// import { bindActionCreators } from 'redux'
import { getCars } from '../../actions/cars';
import { connect } from 'react-redux'
import './../../styles/cars.css';


class Cars extends React.Component {
  async componentWillMount(){
    //console.log(this.props.carFetched);
    await this.props.getCars();
  }

  render(){
    let carFetched = this.props.carFetched;
    if (carFetched.length !== 0) {
      carFetched = JSON.parse(this.props.carFetched)
    }
    return(
      <div className="car-container">
        <div className="car-intro">
          <p>Registrerte biler</p>
        </div>
        <div className="cars-elements">
          {carFetched.map((data, key) => (<div key= {key} className="car-box">
            <div className="car-text"><b>RegNr</b>: {data.RegNr}</div>
            <div className="car-text"><b>Model</b>: {data.Brand}</div>
          </div>)
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    hasErrored: state.auth.hasErrored,
    carFetched: state.carsFetched.cars,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: () => push('/'),
    getCars: () => dispatch(getCars()),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cars)
