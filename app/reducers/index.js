import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions';

function auth(state = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  routing: routeReducer,
  form: formReducer,
  auth,
});

export default rootReducer;
