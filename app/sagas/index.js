import { take, put, call, fork } from 'redux-saga';
import axios from 'axios';
import { routeActions } from 'react-router-redux';
import * as actions from '../actions';

function loginApi({ username, password }) {
  // TODO: remove hard coded url
  return axios.post('http://localhost:3000/auth/signin', { username, password })
    .then((response) => response.data);
}

function setAuthToken({ token }) {
  localStorage.setItem('token', token);
}

// function getAuthToken() {
//   return localStorage.getItem('token');
// }

function removeAuthToken() {
  return localStorage.removeItem('token');
}

export function* login(getState) {
  while (yield take(actions.LOGIN_REQUEST)) {
    try {
      const creds = getState().auth.user;
      const user = yield call(loginApi, creds);
      yield call(setAuthToken, user);
      yield put(actions.receiveLogin(user));
      yield put(routeActions.push('/'));
    } catch (error) {
      yield put(actions.loginError(error.data));
    }
  }
}

export function* logout() {
  while (yield take(actions.LOGOUT_REQUEST)) {
    yield call(removeAuthToken);
    yield put(actions.receiveLogout());
  }
}

export default function* root(getState) {
  yield fork(login, getState);
  yield fork(logout);
}
