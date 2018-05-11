import { GET_CARS_REQUEST, GET_CARS_SUCCESS, GET_CARS_FAILURE } from '../actions/cars';

function carsFetched(state =  {cars: []}, action) {
  switch (action.type) {
  case GET_CARS_FAILURE:
    return {
      hasErrored: action.hasErrored,
      cars: [],
    };
  case GET_CARS_REQUEST:
    return {
      hasErrored: '',
      cars: [],
      isLoading: action.isLoading,
    };
  case GET_CARS_SUCCESS:
    return {
      hasErrored: '',
      cars: action.cars,
    };
  default:
    return state;
  }
}
export default carsFetched;
