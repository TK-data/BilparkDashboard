import { API_ADDRESS } from '../config/connections';

export const GET_CARS_REQUEST = '_CARS_REQUEST';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE';

const axios = require('axios');

axios.defaults.withCredentials = true;

export function getCarsFailure(message) {
  return {
    type: 'GET_CARS_FAILURE',
    hasErrored: message,
  };
}

export function getCarsLoading(bool){
  return {
    type: 'GET_CARS_REQUEST',
    isLoading: bool,
  }
}

export function getCarsSuccess(carsObj) {
  return {
    type: 'GET_CARS_SUCCESS',
    cars: carsObj,
  };
}

export function getCars() {
  return (dispatch) => {
    dispatch(getCarsLoading(true));
    return axios.get(API_ADDRESS + '/api/car')
      .then((response) => {
        if (!response.ok && !response.data) {
          dispatch(getCarsFailure('oi, Noe gikk galt...'));
        }
        dispatch(getCarsSuccess(JSON.stringify(response.data)));
      })
      .catch(() => dispatch(getCarsFailure('oi, Noe gikk galt...!')));
  };
}
