import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth from './auth';
import carsFetched from './cars';

export default combineReducers({
  routing: routerReducer,
  auth,
  carsFetched
})
